import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPost, getSortedPosts } from "@/content/posts";
import founderImg from "@/assets/founder.jpg";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);

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

  if (!post) return <Navigate to="/blog" replace />;

  const url = `https://pustikabooks.in/blog/${post.slug}`;
  const related = getSortedPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

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
      url: "https://pustikabooks.in",
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
        <meta property="article:published_time" content={post.date} />
        {post.tags.map((t) => (
          <meta key={t} property="article:tag" content={t} />
        ))}
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

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
          <Link to="/blog" className="text-sm font-semibold text-muted-foreground hover:text-foreground">
            ← All articles
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">

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
        {/* Body */}
        <div className="mt-10 space-y-6 text-[17px] leading-[1.75] text-foreground/90">
          {post.body.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2 key={i} className="mt-12 text-2xl md:text-3xl font-bold tracking-tight">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "p") {
              return <p key={i}>{block.text}</p>;
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
                  className="border-l-4 border-brand-purple bg-secondary/60 rounded-r-2xl px-6 py-5 italic text-foreground"
                >
                  {block.text}
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
            return null;
          })}
        </div>

        {/* CTA Box */}
        <aside className="mt-16 rounded-3xl border border-border bg-gradient-to-br from-card to-secondary p-7 md:p-9 shadow-card">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-purple uppercase">
            Ready to launch?
          </p>
          <h3 className="mt-2 text-2xl md:text-3xl font-black tracking-tight">
            Get the Pustika Pro Vault — everything you need to sell your first eBook.
          </h3>
          <Link
            to="/#pricing"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-cta px-7 py-3.5 text-base font-bold text-white shadow-glow hover:scale-[1.03] transition-transform"
          >
            See the Pro Vault →
          </Link>
        </aside>

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
            <ul className="mt-5 space-y-4">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    to={`/blog/${r.slug}`}
                    className="block rounded-2xl border border-border bg-card p-5 hover:border-brand-purple transition-colors"
                  >
                    <p className="font-bold">{r.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{r.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

      </article>
    </main>
  );
}
