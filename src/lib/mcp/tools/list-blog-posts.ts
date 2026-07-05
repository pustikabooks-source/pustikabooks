import { createClient } from "@supabase/supabase-js";
import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

function supabase() {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_PUBLISHABLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}

export default defineTool({
  name: "list_blog_posts",
  title: "List blog posts",
  description: "List published Pustika Books blog posts with slug, title, description, tags, date, and reading time.",
  inputSchema: {
    limit: z.number().int().min(1).max(50).optional().describe("Max posts to return (default 20)."),
    tag: z.string().optional().describe("Optional tag to filter by."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ limit, tag }) => {
    const client = supabase();
    let query = client
      .from("blog_posts")
      .select("slug,title,description,tags,date,reading_minutes")
      .eq("published", true)
      .order("date", { ascending: false })
      .limit(limit ?? 20);
    if (tag) query = query.contains("tags", [tag]);
    const { data, error } = await query;
    if (error) return { content: [{ type: "text", text: error.message }], isError: true };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: { posts: data ?? [] },
    };
  },
});