import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE, {
  auth: { persistSession: false },
});

function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const password = req.headers.get("x-admin-password") ?? "";
    const ADMIN_PASSWORD = Deno.env.get("ADMIN_PASSWORD") ?? "";
    if (!ADMIN_PASSWORD || password !== ADMIN_PASSWORD) {
      return json({ error: "Unauthorized" }, 401);
    }

    const { action, payload } = await req.json().catch(() => ({}));

    if (action === "verify") {
      return json({ ok: true });
    }

    if (action === "list") {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("date", { ascending: false });
      if (error) throw error;
      return json({ posts: data });
    }

    if (action === "get") {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("id", payload.id)
        .single();
      if (error) throw error;
      return json({ post: data });
    }

    if (action === "create" || action === "update") {
      const p = payload ?? {};
      const row: Record<string, unknown> = {
        title: String(p.title ?? "").trim(),
        description: String(p.description ?? "").trim(),
        date: p.date || new Date().toISOString().slice(0, 10),
        reading_minutes: Number(p.reading_minutes) || 5,
        tags: Array.isArray(p.tags) ? p.tags : [],
        body: Array.isArray(p.body) ? p.body : [],
        published: !!p.published,
      };
      if (!row.title) return json({ error: "Title required" }, 400);

      if (action === "create") {
        row.slug = p.slug?.trim() || slugify(String(row.title));
        const { data, error } = await supabase
          .from("blog_posts")
          .insert(row)
          .select()
          .single();
        if (error) throw error;
        return json({ post: data });
      } else {
        if (!p.id) return json({ error: "id required" }, 400);
        if (p.slug) row.slug = p.slug.trim();
        const { data, error } = await supabase
          .from("blog_posts")
          .update(row)
          .eq("id", p.id)
          .select()
          .single();
        if (error) throw error;
        return json({ post: data });
      }
    }

    if (action === "publish") {
      const { data, error } = await supabase
        .from("blog_posts")
        .update({ published: !!payload.published })
        .eq("id", payload.id)
        .select()
        .single();
      if (error) throw error;
      return json({ post: data });
    }

    if (action === "delete") {
      const { error } = await supabase
        .from("blog_posts")
        .delete()
        .eq("id", payload.id);
      if (error) throw error;
      return json({ ok: true });
    }

    return json({ error: "Unknown action" }, 400);
  } catch (e) {
    return json({ error: (e as Error).message }, 500);
  }
});