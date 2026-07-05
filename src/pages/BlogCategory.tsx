import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { BlogPost } from "@/content/posts";
import { fetchPublishedPosts } from "@/lib/blog";

type CategoryId = "ebook" | "digital-products" | "ai-for-creators" | "marketing";

const CATEGORIES: Record<
  string,
  { id: CategoryId; label: string; emoji: string; description: string; longDescription: string }
> = {
  ebooks: {
    id: "ebook",
    label: "eBook Business",
    emoji: "📖",
    description: "Write, price, and sell eBooks",
    longDescription:
      "Everything you need to write, publish, price, and sell profitable eBooks in 2026 — from first draft to worldwide launch.",
  },
  "digital-products": {
    id: "digital-products",
    label: "Digital Products",
    emoji: "💡",
    description: "Templates, Notion, Canva & more",
    longDescription:
      "Guides on creating and selling templates, Notion setups, Canva packs, planners, and other high-margin digital products.",
  },
  "ai-for-creators": {
    id: "ai-for-creators",
    label: "AI for Creators",
    emoji: "🤖",
    description: "Use AI to build & sell faster",
    longDescription:
      "Practical workflows to use AI to write, design, market, and scale your creator business in a fraction of the time.",
  },
  marketing: {
    id: "marketing",
    label: "Marketing",
    emoji: "📣",
    description: "Pinterest, SEO, email, Instagram and more",
    longDescription:
      "Proven marketing playbooks for creators — Pinterest, SEO, email, Instagram, and organic traffic that actually converts.",
  },
};

function getCategory(post: any): CategoryId {
  return post.category ?? "ebook";
}

export default function BlogCategory() {
  const { category } = useParams<{ category: string }>();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPublishedPosts()
      .then((p) => setPosts(p))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  const meta = category ? CATEGORIES[category] : undefined;
  if (!meta) return <Navigate to="/blog" replace />;

  const url = `https://pustikabooks.in/blog/${category}`;
  const filteredPosts = posts
    .filter((p) => getCategory(p) === meta.id)
    .sort(
      (a: any, b: any) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{meta.label} — Blog | Pustika Books</title>
        <meta name="description" content={meta.longDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={`${meta.label} — Pustika Books Blog`} />
        <meta property="og:description" content={meta.longDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pustika Books" />
        <meta property="og:image" content="https://pustikabooks.in/og-home.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${meta.label} — Pustika Books Blog`} />
        <meta name="twitter:description" content={meta.longDescription} />
        <meta name="twitter:image" content="https://pustikabooks.in/og-home.jpg" />
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
          <nav
            aria-label="Breadcrumb"
            className="text-xs text-muted-foreground mb-6"
          >
            <Link to="/" className="hover:text-foreground">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-foreground">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{meta.label}</span>
          </nav>

          <p className="text-5xl mb-3">{meta.emoji}</p>
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-purple uppercase">
            Category
          </p>
          <h1 className="mt-3 text-4xl md:text-6xl font-black tracking-tight">
            {meta.label}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            {meta.longDescription}
          </p>
          <p className="mt-4 text-sm font-semibold text-brand-purple">
            {loading
              ? "Loading…"
              : `${filteredPosts.length} ${filteredPosts.length === 1 ? "article" : "articles"}`}
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          {loading ? (
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-border bg-card p-7 animate-pulse"
                >
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
                {meta.emoji}
              </p>
              <h3
                style={{ fontSize: "20px", fontWeight: 700, marginBottom: "8px" }}
              >
                No posts yet in this section
              </h3>
              <p
                style={{
                  color: "var(--muted-foreground)",
                  fontSize: "14px",
                }}
              >
                Check back soon — posts coming here shortly.
              </p>
              <Link
                to="/blog"
                className="mt-6 inline-block text-sm font-bold text-brand-purple"
              >
                ← Back to all posts
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredPosts.map((p: any) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group rounded-3xl border border-border bg-card shadow-card p-7 hover:-translate-y-1 transition-all"
                >
                  <div style={{ marginBottom: "10px" }}>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        background: "rgba(124,58,237,0.1)",
                        color: "#7C3AED",
                        padding: "3px 10px",
                        borderRadius: "999px",
                      }}
                    >
                      {meta.emoji} {meta.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <time dateTime={p.date}>
                      {new Date(p.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
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
                      <span
                        key={t}
                        className="text-[11px] uppercase tracking-wider rounded-full bg-secondary px-2.5 py-1 text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 text-sm font-semibold text-brand-purple">
                    Read article →
                  </p>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-16 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-bold hover:border-brand-purple hover:text-brand-purple transition"
            >
              ← Explore all categories
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}