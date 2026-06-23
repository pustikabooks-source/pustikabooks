import { useAuth } from "@/hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { BlogPost } from "@/content/posts";
import { fetchPublishedPosts } from "@/lib/blog";

type Category = "all" | "ebook" | "digital-products" | "ai-for-creators";

const CATEGORIES = [
  { id: "all" as Category, label: "All Posts", emoji: "📚", description: "" },
  { id: "ebook" as Category, label: "eBook Business", emoji: "📖", description: "Write, price, and sell eBooks" },
  { id: "digital-products" as Category, label: "Digital Products", emoji: "💡", description: "Templates, Notion, Canva & more" },
  { id: "ai-for-creators" as Category, label: "AI for Creators", emoji: "🤖", description: "Use AI to build & sell faster" },
];

function getCategory(post: any): Category {
  return post.category ?? "ebook";
}

export default function Blog() {
  const { user, logout } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  useEffect(() => {
    fetchPublishedPosts()
      .then((p) => setPosts(p))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  const url = "https://pustikabooks.in/blog";

  const filteredPosts = posts
    .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((p) => activeCategory === "all" ? true : getCategory(p) === activeCategory);

  const countFor = (cat: Category) =>
    cat === "all" ? posts.length : posts.filter((p) => getCategory(p) === cat).length;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Pustika Books Blog",
    url,
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      datePublished: p.date,
      url: `https://pustikabooks.in/blog/${p.slug}`,
    })),
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {user && (
        <div style={{ background: "#0F0A1E", padding: "10px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100 }}>
          <span style={{ color: "#A78BFA", fontSize: "13px", fontWeight: 600 }}>✏️ Admin Mode</span>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <Link to="/blog/new" style={{ color: "white", fontSize: "13px", fontWeight: 700, textDecoration: "none", background: "#7C3AED", padding: "6px 16px", borderRadius: "999px" }}>+ New Post</Link>
            <button onClick={logout} style={{ color: "#A78BFA", fontSize: "13px", fontWeight: 600, background: "none", border: "none", cursor: "pointer" }}>Logout</button>
          </div>
        </div>
      )}

      <Helmet>
        <title>Blog — How to Earn With eBooks and Digital Products | Pustika Books</title>
        <meta name="description" content="Practical guides on creating, marketing, and selling eBooks and digital products worldwide." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Pustika Books Blog — How to Earn With eBooks and Digital Products" />
        <meta property="og:description" content="Practical guides on creating, marketing, and selling eBooks and digital products worldwide." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>
      </Helmet>

      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between">
          <Link to="/" className="font-black text-xl tracking-tight">
            Pustika<span className="text-brand-purple">.</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-purple uppercase">The Pustika Blog</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-black tracking-tight">
            How to earn with{" "}
            <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
              digital products
            </span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Honest, step-by-step guides on writing, pricing, marketing, and selling digital products worldwide. No fluff — just what's working in 2026.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="px-6 pb-4">
        <div className="mx-auto max-w-5xl">
          <div style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "8px" }}>
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 18px",
                    borderRadius: "999px",
                    border: isActive ? "2px solid #7C3AED" : "2px solid var(--border)",
                    background: isActive ? "#7C3AED" : "var(--card)",
                    color: isActive ? "white" : "var(--muted-foreground)",
                    fontSize: "13px",
                    fontWeight: 700,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "all 0.15s",
                    boxShadow: isActive ? "0 2px 12px rgba(124,58,237,0.3)" : "none",
                  }}
                >
                  <span>{cat.emoji}</span>
                  <span>{cat.label}</span>
                  <span style={{
                    background: isActive ? "rgba(255,255,255,0.2)" : "var(--secondary)",
                    borderRadius: "999px",
                    padding: "1px 8px",
                    fontSize: "11px",
                    fontWeight: 700,
                  }}>
                    {countFor(cat.id)}
                  </span>
                </button>
              );
            })}
          </div>

          {activeCategory !== "all" && (
            <div style={{ marginTop: "14px", padding: "10px 16px", background: "rgba(124,58,237,0.07)", borderRadius: "10px", borderLeft: "3px solid #7C3AED" }}>
              <p style={{ fontSize: "13px", color: "var(--muted-foreground)", margin: 0 }}>
                <span style={{ fontWeight: 700, color: "#7C3AED" }}>
                  {CATEGORIES.find(c => c.id === activeCategory)?.emoji}{" "}
                  {CATEGORIES.find(c => c.id === activeCategory)?.label}
                </span>
                {" — "}
                {CATEGORIES.find(c => c.id === activeCategory)?.description}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Posts Grid */}
      <section className="px-6 pb-20 pt-6">
        <div className="mx-auto max-w-5xl">
          {loading ? (
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="rounded-3xl border border-border bg-card p-7 animate-pulse">
                  <div className="h-3 w-24 bg-secondary rounded mb-4" />
                  <div className="h-6 w-3/4 bg-secondary rounded mb-3" />
                  <div className="h-4 w-full bg-secondary rounded mb-2" />
                  <div className="h-4 w-2/3 bg-secondary rounded" />
                </div>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <p style={{ fontSize: "48px", marginBottom: "16px" }}>
                {CATEGORIES.find(c => c.id === activeCategory)?.emoji ?? "📝"}
              </p>
              <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "8px" }}>No posts yet in this section</h3>
              <p style={{ color: "var(--muted-foreground)", fontSize: "14px" }}>
                {user ? "Click '+ New Post' to publish the first one." : "Check back soon — posts coming here shortly."}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredPosts.map((p: any) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group rounded-3xl border border-border bg-card shadow-card p-7 hover:-translate-y-1 transition-all"
                >
                  {/* Category badge */}
                  {getCategory(p) !== "all" && (
                    <div style={{ marginBottom: "10px" }}>
                      <span style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        background: "rgba(124,58,237,0.1)",
                        color: "#7C3AED",
                        padding: "3px 10px",
                        borderRadius: "999px",
                      }}>
                        {CATEGORIES.find(c => c.id === getCategory(p))?.emoji}{" "}
                        {CATEGORIES.find(c => c.id === getCategory(p))?.label}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <time dateTime={p.date}>
                      {new Date(p.date).toLocaleDateString("en-IN", {
                        year: "numeric", month: "short", day: "numeric",
                      })}
                    </time>
                    <span>•</span>
                    <span>{p.readingMinutes} min read</span>
                  </div>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight group-hover:text-brand-purple transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed text-[15px]">
                    {p.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t: string) => (
                      <span key={t} className="text-[11px] uppercase tracking-wider rounded-full bg-secondary px-2.5 py-1 text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 text-sm font-semibold text-brand-purple">Read article →</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
