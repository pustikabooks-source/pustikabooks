import { supabase } from "@/integrations/supabase/client";
import type { BlogPost } from "@/content/posts";

type DbRow = {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  reading_minutes: number;
  tags: string[];
  body: BlogPost["body"];
  published: boolean;
};

function toPost(row: any): BlogPost & { id: string; published: boolean } {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    description: row.description,
    date: row.date,
    readingMinutes: row.reading_minutes,
    tags: row.tags ?? [],
    body: (row.body ?? []) as BlogPost["body"],
    published: row.published,
  };
}

export async function fetchPublishedPosts() {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("date", { ascending: false });
  if (error) throw error;
  return (data as any[]).map(toPost);
}

export async function fetchPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();
  if (error) throw error;
  return data ? toPost(data) : null;
}

const ADMIN_KEY = "pustika_admin_pw";

export function getAdminPassword(): string | null {
  try { return sessionStorage.getItem(ADMIN_KEY); } catch { return null; }
}
export function setAdminPassword(pw: string) {
  try { sessionStorage.setItem(ADMIN_KEY, pw); } catch {}
}
export function clearAdminPassword() {
  try { sessionStorage.removeItem(ADMIN_KEY); } catch {}
}

async function adminCall(action: string, payload?: unknown) {
  const pw = getAdminPassword() ?? "";
  const { data, error } = await supabase.functions.invoke("admin-blog", {
    body: { action, payload },
    headers: { "x-admin-password": pw },
  });
  if (error) {
    // supabase-js wraps non-2xx as FunctionsHttpError; try to extract body
    const ctx = (error as any).context;
    let msg = error.message;
    try {
      const body = await ctx?.json?.();
      if (body?.error) msg = body.error;
    } catch {}
    throw new Error(msg);
  }
  return data as any;
}

export async function adminVerify(pw: string): Promise<boolean> {
  const { data, error } = await supabase.functions.invoke("admin-blog", {
    body: { action: "verify" },
    headers: { "x-admin-password": pw },
  });
  if (error) return false;
  return !!data?.ok;
}

export async function adminListPosts() {
  const { posts } = await adminCall("list");
  return (posts as any[]).map(toPost);
}
export async function adminCreatePost(p: Partial<DbRow> & { title: string }) {
  return (await adminCall("create", p)).post as DbRow;
}
export async function adminUpdatePost(p: Partial<DbRow> & { id: string }) {
  return (await adminCall("update", p)).post as DbRow;
}
export async function adminTogglePublish(id: string, published: boolean) {
  return (await adminCall("publish", { id, published })).post as DbRow;
}
export async function adminDeletePost(id: string) {
  await adminCall("delete", { id });
}