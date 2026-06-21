import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "image"; url: string; alt: string; caption: string }
  | { type: "youtube"; videoId: string; title: string }
  | { type: "stat"; value: string; label: string };

function generateSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function BlogEditor() {
  const { slug } = useParams<{ slug?: string }>();
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const isEditing = !!slug;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [readingMinutes, setReadingMinutes] = useState(5);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");
  const [postId, setPostId] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) navigate("/login");
  }, [user, loading]);

  useEffect(() => {
    if (isEditing && slug) loadPost(slug);
  }, [slug]);

  async function loadPost(s: string) {
    const { data } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", s)
      .single();
    if (data) {
      setPostId(data.id);
      setTitle(data.title || "");
      setDescription(data.description || "");
      setTags((data.tags || []).join(", "));
      setReadingMinutes(data.reading_minutes || 5);
      setDate(data.date || new Date().toISOString().slice(0, 10));
      setBlocks((data.body as Block[]) || []);
    }
  }

  function addBlock(type: Block["type"]) {
    const newBlock: Block =
      type === "p" ? { type: "p", text: "" } :
      type === "h2" ? { type: "h2", text: "" } :
      type === "quote" ? { type: "quote", text: "" } :
      type === "ul" ? { type: "ul", items: [""] } :
      type === "image" ? { type: "image", url: "", alt: "", caption: "" } :
      type === "youtube" ? { type: "youtube", videoId: "", title: "" } :
      { type: "stat", value: "", label: "" };
    setBlocks([...blocks, newBlock]);
  }

  function updateBlock(index: number, updated: Block) {
    const newBlocks = [...blocks];
    newBlocks[index] = updated;
    setBlocks(newBlocks);
  }

  function deleteBlock(index: number) {
    setBlocks(blocks.filter((_, i) => i !== index));
  }

  function moveBlock(index: number, direction: "up" | "down") {
    const newBlocks = [...blocks];
    const target = direction === "up" ? index - 1 : index + 1;
    if (target < 0 || target >= newBlocks.length) return;
    [newBlocks[index], newBlocks[target]] = [newBlocks[target], newBlocks[index]];
    setBlocks(newBlocks);
  }

  async function save(published: boolean) {
    setSaving(true);
    setStatus("");
    const payload = {
      title,
      description,
      slug: generateSlug(title),
      tags: tags.split(",").map(t => t.trim()).filter(Boolean),
      reading_minutes: readingMinutes,
      date,
      body: blocks,
      published,
    };
    try {
      if (postId) {
        await supabase.from("blog_posts").update(payload).eq("id", postId);
      } else {
        const { data } = await supabase.from("blog_posts").insert(payload).select().single();
        if (data) setPostId(data.id);
      }
      setStatus(published ? "Published! ✅" : "Saved as draft ✅");
      if (published) setTimeout(() => navigate("/blog"), 1500);
    } catch (e) {
      setStatus("Error saving. Try again.");
    }
    setSaving(false);
  }

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{isEditing ? "Edit Post" : "New Post"} | Pustika Books</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="mx-auto max-w-3xl px-6 py-4 flex items-center justify-between">
          <Link to="/blog" style={{ textDecoration: "none", fontSize: "14px", color: "#666" }}>
            ← Back to blog
          </Link>
          <div className="flex gap-3">
            <button
              onClick={() => save(false)}
              disabled={saving}
              style={{ padding: "8px 16px", borderRadius: "999px", border: "1px solid #e5e5e5", background: "white", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}
            >
              Save Draft
            </button>
            <button
              onClick={() => save(true)}
              disabled={saving}
              style={{ padding: "8px 16px", borderRadius: "999px", background: "#7C3AED", color: "white", border: "none", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}
            >
              {saving ? "Saving..." : "Publish"}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-10 space-y-6">
        {status && <p style={{ color: "#7C3AED", fontWeight: 600 }}>{status}</p>}

        <div className="space-y-4 rounded-2xl border border-border bg-card p-6">
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Title</label>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Your blog post title" className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-brand-purple" />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Description</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} rows={2} placeholder="One line summary" className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Date</label>
              <input type="date" value={date} onChange={e => setDate(e.target.value)} className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Read time</label>
              <input type="number" value={readingMinutes} onChange={e => setReadingMinutes(Number(e.target.value))} className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Tags</label>
              <input value={tags} onChange={e => setTags(e.target.value)} placeholder="india, ebooks" className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {blocks.map((block, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{block.type}</span>
                <div className="flex gap-2">
                  <button onClick={() => moveBlock(i, "up")} style={{ background: "none", border: "1px solid #e5e5e5", borderRadius: "6px", padding: "2px 8px", cursor: "pointer", fontSize: "12px" }}>↑</button>
                  <button onClick={() => moveBlock(i, "down")} style={{ background: "none", border: "1px solid #e5e5e5", borderRadius: "6px", padding: "2px 8px", cursor: "pointer", fontSize: "12px" }}>↓</button>
                  <button onClick={() => deleteBlock(i)} style={{ background: "none", border: "1px solid #fee2e2", borderRadius: "6px", padding: "2px 8px", cursor: "pointer", fontSize: "12px", color: "#dc2626" }}>✕</button>
                </div>
              </div>

              {(block.type === "p" || block.type === "h2" || block.type === "quote") && (
                <textarea
                  value={block.text}
                  onChange={e => updateBlock(i, { ...block, text: e.target.value })}
                  rows={block.type === "p" ? 3 : 2}
                  placeholder={block.type === "h2" ? "Heading..." : block.type === "quote" ? "Quote..." : "Paragraph..."}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                />
              )}

              {block.type === "ul" && (
                <div className="space-y-2">
                  {block.items.map((item, j) => (
                    <div key={j} className="flex gap-2">
                      <input
                        value={item}
                        onChange={e => {
                          const newItems = [...block.items];
                          newItems[j] = e.target.value;
                          updateBlock(i, { ...block, items: newItems });
                        }}
                        placeholder={`Item ${j + 1}`}
                        className="flex-1 rounded-xl border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                      />
                      <button onClick={() => {
                        const newItems = block.items.filter((_, idx) => idx !== j);
                        updateBlock(i, { ...block, items: newItems });
                      }} style={{ color: "#dc2626", background: "none", border: "none", cursor: "pointer" }}>✕</button>
                    </div>
                  ))}
                  <button onClick={() => updateBlock(i, { ...block, items: [...block.items, ""] })} style={{ fontSize: "13px", color: "#7C3AED", background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}>+ Add item</button>
                </div>
              )}

              {block.type === "image" && (
                <div className="space-y-2">
                  <input value={block.url} onChange={e => updateBlock(i, { ...block, url: e.target.value })} placeholder="Image URL" className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                  <input value={block.alt} onChange={e => updateBlock(i, { ...block, alt: e.target.value })} placeholder="Alt text" className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                  <input value={block.caption} onChange={e => updateBlock(i, { ...block, caption: e.target.value })} placeholder="Caption (optional)" className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                  {block.url && <img src={block.url} alt={block.alt} className="w-full rounded-xl object-cover max-h-48" />}
                </div>
              )}

              {block.type === "youtube" && (
                <div className="space-y-2">
                  <input value={block.videoId} onChange={e => updateBlock(i, { ...block, videoId: e.target.value })} placeholder="YouTube Video ID" className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                  <input value={block.title} onChange={e => updateBlock(i, { ...block, title: e.target.value })} placeholder="Video title" className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                  {block.videoId && (
                    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: "12px", overflow: "hidden" }}>
                      <iframe src={`https://www.youtube.com/embed/${block.videoId}`} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} allowFullScreen />
                    </div>
                  )}
                </div>
              )}

              {block.type === "stat" && (
                <div className="grid grid-cols-2 gap-3">
                  <input value={block.value} onChange={e => updateBlock(i, { ...block, value: e.target.value })} placeholder="Value e.g. ₹25,000" className="rounded-xl border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                  <input value={block.label} onChange={e => updateBlock(i, { ...block, label: e.target.value })} placeholder="Label" className="rounded-xl border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-dashed border-brand-purple/40 bg-secondary/30 p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Add block</p>
          <div className="flex flex-wrap gap-2">
            {[
              { type: "p", label: "¶ Paragraph" },
              { type: "h2", label: "H Heading" },
              { type: "quote", label: "❝ Quote" },
              { type: "ul", label: "• List" },
              { type: "image", label: "🖼 Image" },
              { type: "youtube", label: "▶ YouTube" },
              { type: "stat", label: "📊 Stat" },
            ].map(({ type, label }) => (
              <button
                key={type}
                onClick={() => addBlock(type as Block["type"])}
                style={{ padding: "6px 14px", borderRadius: "999px", border: "1px solid #e5e5e5", background: "white", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
                                                                          }
