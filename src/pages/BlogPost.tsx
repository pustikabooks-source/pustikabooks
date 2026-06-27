import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { BlogPost as BlogPostType } from "@/content/posts";
import { fetchPostBySlug, fetchPublishedPosts } from "@/lib/blog";
import founderImg from "@/assets/founder.jpg";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null | undefined>(undefined);
  const [related, setRelated] = useState<BlogPostType[]>([]);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headings = post?.body.filter(
  (block: any) => block.type === "h2"
) || [];

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;
    (async () => {
      try {
        const [p, all] = await Promise.all([
          fetchPostBySlug(slug),
          fetchPublishedPosts(),
        ]);
        if (cancelled) return;
        setPost(p);
        setRelated(all.filter((x: BlogPostType) => x.slug !== slug).slice(0, 3));
      } catch {
        if (!cancelled) setPost(null);
      }
    })();
    return () => { cancelled = true; };
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (post === undefined) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading…</p>
      </main>
    );
  }
  if (post === null) return <Navigate to="/blog" replace />;

  const url = `https://www.pustikabooks.in/blog/${post.slug}`;
  const coverImage =
  post.body.find((b: any) => b.type === "image")?.url ||
  "https://www.pustikabooks.in/images/blog-default.jpg";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Pustika Books" },
    publisher: {
      "@type": "Organization",
      name: "Pustika Books",
      url: "https://www.pustikabooks.in",
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://pustikabooks.in/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://pustikabooks.in/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{post.title} | Pustika Books</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={post.title} />
<meta property="og:description" content={post.description} />
<meta property="og:url" content={url} />
<meta property="og:type" content="article" />
<meta property="og:image" content={coverImage} />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={post.title} />
<meta name="twitter:description" content={post.description} />
<meta name="twitter:image" content={coverImage} />

<meta property="article:published_time" content={post.date} />
        {post.tags.map((t) => (
          <meta key={t} property="article:tag" content={t} />
        ))}
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>
{menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex" }}>
          <div
            style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)" }}
            onClick={() => setMenuOpen(false)}
          />
          <div style={{
            position: "relative", width: "280px", height: "100%",
            background: "white", padding: "32px 24px",
            display: "flex", flexDirection: "column", zIndex: 10
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
              <span style={{ fontSize: "18px", fontWeight: 800, color: "#191919" }}>Pustika<span style={{ color: "#7C3AED" }}> Books</span></span>
              <button onClick={() => setMenuOpen(false)} style={{ background: "none", border: "none", fontSize: "24px", cursor: "pointer" }}>×</button>
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <Link to="/blog" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none", fontSize: "20px", fontWeight: 600, color: "#191919", padding: "12px 0", borderBottom: "1px solid #f0f0f0" }}>📖 Blog</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none", fontSize: "20px", fontWeight: 600, color: "#191919", padding: "12px 0", borderBottom: "1px solid #f0f0f0" }}>👋 About Us</Link>
              <Link to="/#pricing" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none", fontSize: "20px", fontWeight: 600, color: "#191919", padding: "12px 0", borderBottom: "1px solid #f0f0f0" }}>🛒 Products</Link>
            </nav>
            <div style={{ marginTop: "auto" }}>
              <p style={{ fontSize: "12px", color: "#999", marginBottom: "12px" }}>Follow us</p>
              <div style={{ display: "flex", gap: "16px" }}>
                <a href="https://instagram.com/thepustika" target="_blank" rel="noopener noreferrer" style={{ color: "#7C3AED", fontWeight: 700, textDecoration: "none", fontSize: "14px" }}>Instagram</a>
                <a href="mailto:pustikabooks@gmail.com" style={{ color: "#7C3AED", fontWeight: 700, textDecoration: "none", fontSize: "14px" }}>Email</a>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Reading Progress Bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "3px",
          width: `${progress}%`,
          background: "linear-gradient(90deg, #7C3AED, #C026D3)",
          zIndex: 9999,
          transition: "width 0.1s ease",
        }}
      />

      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="mx-auto max-w-3xl px-6 py-4 flex items-center justify-between">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span style={{ fontSize: "20px", fontWeight: 800, color: "#191919", letterSpacing: "-0.5px" }}>Pustika</span>
            <span style={{ fontSize: "20px", fontWeight: 700, color: "#7C3AED", letterSpacing: "-0.5px" }}> Books</span>
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px" }}
            aria-label="Open menu"
          >
            <div style={{ width: "22px", height: "2px", background: "#191919", marginBottom: "5px", borderRadius: "2px" }} />
            <div style={{ width: "22px", height: "2px", background: "#191919", marginBottom: "5px", borderRadius: "2px" }} />
            <div style={{ width: "22px", height: "2px", background: "#191919", borderRadius: "2px" }} />
          </button>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        {/* Table of Contents */}
{headings.length > 0 && (
  <aside
    className="mb-10 rounded-3xl border border-border bg-[#FAFAF8] p-6"
  >
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-purple">
      Contents
    </p>

    <ul className="mt-5 space-y-3">
      {headings.map((heading: any, index: number) => (
        <li key={index}>
          <a
            href={`#section-${index}`}
            className="text-sm font-medium text-foreground hover:text-brand-purple"
          >
            {heading.text}
          </a>
        </li>
      ))}
    </ul>
  </aside>
)}

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-foreground">Blog</Link>
        </nav>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-secondary text-brand-purple">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-5">
          {post.title}
        </h1>

        {/* Meta + Share Row */}
        <div className="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-border">
          <div className="flex items-center gap-4">
            {/* Author avatar */}
            <img
              src={founderImg}
              alt="Pustika Books"
              style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }}
            />
            <div>
              <p className="text-sm font-semibold text-foreground">Pustika Books</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    year: "numeric", month: "long", day: "numeric",
                  })}
                </time>
                <span>·</span>
                <span>{post.readingMinutes} min read</span>
              </div>
            </div>
          </div>

          {/* Share buttons */}
          <div className="flex items-center gap-2">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(url)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "6px 14px", borderRadius: "999px", fontSize: "12px",
                fontWeight: 600, background: "#000", color: "#fff",
                textDecoration: "none",
              }}
            >
              𝕏 Share
            </a>
            <button
              onClick={handleCopyLink}
              style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                padding: "6px 14px", borderRadius: "999px", fontSize: "12px",
                fontWeight: 600, background: "#f4f4f5", color: "#191919",
                border: "none", cursor: "pointer",
              }}
            >
              {copied ? "✓ Copied!" : "🔗 Copy link"}
            </button>
          </div>
        </div>
        {/* Key Takeaways */}
<div className="mb-10 rounded-3xl border border-brand-purple/20 bg-gradient-to-br from-brand-purple/5 to-white p-7">
  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-purple">
    Key Takeaways
  </p>

  <ul className="mt-5 space-y-3">
    <li>✅ Learn the main idea in under 2 minutes.</li>
    <li>✅ Follow practical, step-by-step advice.</li>
    <li>✅ Avoid common beginner mistakes.</li>
    <li>✅ Apply the strategies immediately.</li>
  </ul>
</div>
        {/* Body */}
        <div className="mt-10 space-y-6 text-[17px] leading-[1.75] text-foreground/90">
          {post.body.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2
  id={`section-${headings.findIndex(
    (h: any) => h.text === block.text
  )}`}
  key={i}
  className="mt-12 text-2xl md:text-3xl font-bold tracking-tight scroll-mt-24"
>
                  {block.text}
                </h2>
              );
            }
            if (block.type === "p") {
  return <p key={i}>{block.text}</p>;
}
if (block.type === "p-link") {
  return (
    <p key={i}>
      {block.parts.map((part, j) =>
        part.href ? (
          <Link
            key={j}
            to={part.href}
            style={{
              color: "#7C3AED",
              fontWeight: 700,
              textDecoration: "underline",
              textDecorationColor: "rgba(124,58,237,0.3)",
            }}
          >
            {part.text}
          </Link>
        ) : (
          <span key={j}>{part.text}</span>
        )
      )}
    </p>
  );
}
            if (block.type === "ul") {
              return (
                <ul key={i} className="list-disc pl-6 space-y-2 marker:text-brand-purple">
                  {block.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote
  key={i}
  className="my-10 rounded-3xl border-l-4 border-brand-purple bg-gradient-to-r from-brand-purple/5 to-white px-8 py-7 italic text-lg leading-relaxed shadow-sm"
>
  “{block.text}”
</blockquote>
              );
            }
            if (block.type === "stat") {
              return (
                <div key={i} className="my-8 rounded-2xl bg-gradient-to-br from-brand-purple/10 to-secondary border border-brand-purple/20 px-8 py-6 text-center">
                  <p className="text-4xl md:text-5xl font-black text-brand-purple">{block.value}</p>
                  <p className="mt-2 text-sm font-semibold text-muted-foreground uppercase tracking-widest">{block.label}</p>
                </div>
              );
            }
            if (block.type === "table") {
              return (
                <div key={i} className="my-8 overflow-x-auto rounded-2xl border border-border">
                  <table className="w-full text-sm">
                    <thead className="bg-secondary">
                      <tr>
                        {block.headers.map((h: string, j: number) => (
                          <th key={j} className="px-4 py-3 text-left font-bold text-foreground">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row: string[], j: number) => (
                        <tr key={j} className={j % 2 === 0 ? "bg-card" : "bg-secondary/40"}>
                          {row.map((cell: string, k: number) => (
                            <td key={k} className="px-4 py-3 text-foreground/80">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }
      if (block.type === "image") {
              return (
                <figure key={i} className="my-8">
                  <img
                    src={block.url}
                    alt={block.alt}
                    className="w-full rounded-2xl object-cover"
                    style={{ maxHeight: "400px" }}
                    loading="lazy"
                  />
                  {block.caption && (
                    <figcaption className="mt-2 text-center text-xs text-muted-foreground italic">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              );
            }
            if (block.type === "youtube") {
              return (
                <div key={i} className="my-8">
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: "16px", overflow: "hidden" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${block.videoId}`}
                      title={block.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        position: "absolute", top: 0, left: 0,
                        width: "100%", height: "100%", border: "none"
                      }}
                    />
                  </div>
                  <p className="mt-2 text-center text-xs text-muted-foreground italic">{block.title}</p>
                </div>
              );
            }
  if (block.type === "tip") {
  return (
    <div
      key={i}
      className="my-8 rounded-3xl border border-green-200 bg-green-50 p-6"
    >
      <div className="flex items-start gap-4">
        <span className="text-3xl">💡</span>

        <div>
          <p className="font-bold text-green-800">
            Pro Tip
          </p>

          <p className="mt-2 text-green-700 leading-relaxed">
            {block.text}
          </p>
        </div>
      </div>
    </div>
  );
}

if (block.type === "warning") {
  return (
    <div
      key={i}
      className="my-8 rounded-3xl border border-red-200 bg-red-50 p-6"
    >
      <div className="flex items-start gap-4">
        <span className="text-3xl">⚠️</span>

        <div>
          <p className="font-bold text-red-800">
            Common Mistake
          </p>

          <p className="mt-2 text-red-700 leading-relaxed">
            {block.text}
          </p>
        </div>
      </div>
    </div>
  );
}
            return null;
          })}
        </div>

        {/* CTA Box */}
        <aside className="mt-16 rounded-3xl border border-brand-purple/20 bg-gradient-to-br from-card to-secondary p-7 md:p-9 shadow-card text-center">
  <p className="text-xs font-semibold tracking-[0.2em] text-brand-purple uppercase">
    Ready to start?
  </p>
  <h3 className="mt-2 text-2xl md:text-3xl font-black tracking-tight">
    Turn your knowledge into income — explore our resources.
  </h3>
  <p className="mt-3 text-muted-foreground text-[15px]">
    eBooks, templates, and guides to help you launch your first digital product.
  </p>
  <Link
    to="/products"
    className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-purple px-7 py-3.5 text-base font-bold text-white hover:opacity-90 transition"
  >
    Browse our products →
  </Link>
</aside>
        {/* Share CTA */}
<div className="mt-14 rounded-3xl border border-border bg-[#FAFAF8] p-8 text-center">

  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-purple">
    Enjoyed this article?
  </p>

  <h3 className="mt-3 text-3xl font-black">
    Share it with another creator 🚀
  </h3>

  <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
    Every share helps more creators learn how to build digital income through
    ebooks, AI and digital products.
  </p>

</div>

        {/* Bottom share row */}
        <div className="mt-12 pt-8 border-t border-border flex items-center justify-between flex-wrap gap-4">
          <p className="text-sm font-semibold text-muted-foreground">Found this helpful? Share it.</p>
          <div className="flex items-center gap-2">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(url)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center",
                padding: "6px 14px", borderRadius: "999px", fontSize: "12px",
                fontWeight: 600, background: "#000", color: "#fff",
                textDecoration: "none",
              }}
            >
              𝕏 Share
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + url)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center",
                padding: "6px 14px", borderRadius: "999px", fontSize: "12px",
                fontWeight: 600, background: "#25D366", color: "#fff",
                textDecoration: "none",
              }}
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-xl font-bold tracking-tight">Keep reading</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">

  {related.map((r) => {

    const cover =
      r.body.find((b: any) => b.type === "image")?.url || "";

    return (

      <Link
        key={r.slug}
        to={`/blog/${r.slug}`}
        className="group overflow-hidden rounded-3xl border border-border bg-white shadow-card hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
      >

        {cover && (
          <div className="aspect-[16/10] overflow-hidden bg-secondary">
            <img
              src={cover}
              alt={r.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        <div className="p-6 flex flex-col flex-1">

          <span className="inline-flex w-fit rounded-full bg-brand-purple/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-purple">
            Related
          </span>

          <h3 className="mt-4 text-xl font-bold group-hover:text-brand-purple transition-colors">
            {r.title}
          </h3>

          <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
            {r.description}
          </p>

          <div className="mt-auto pt-6 flex items-center justify-between">

            <span className="text-xs text-muted-foreground">
              ⏱ {r.readingMinutes} min
            </span>

            <span className="font-bold text-brand-purple group-hover:translate-x-1 transition-transform">
              Continue →
            </span>

          </div>

        </div>

      </Link>

    );

  })}

</div>
          </section>
        )}

      </article>
    </main>
  );
}
