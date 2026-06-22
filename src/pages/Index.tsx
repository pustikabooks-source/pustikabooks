import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { fetchPublishedPosts } from "@/lib/blog";
import type { BlogPost } from "@/content/posts";

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <Link to="/" className="site-branding" style={{ textDecoration: "none" }}>
            <span className="site-brand">Pustika</span>
            <span className="site-brand__label">BOOKS</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/products" className="site-header__cta">
              Get Pro Vault — ₹499
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: "8px" }}
              aria-label="Open menu"
            >
              <div style={{ width: 22, height: 2, background: "#191919", marginBottom: 5, borderRadius: 2 }} />
              <div style={{ width: 22, height: 2, background: "#191919", marginBottom: 5, borderRadius: 2 }} />
              <div style={{ width: 22, height: 2, background: "#191919", borderRadius: 2 }} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex" }}>
          <div
            style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)" }}
            onClick={() => setMenuOpen(false)}
          />
          <div style={{
            position: "relative", width: 280, height: "100%",
            background: "white", padding: "32px 24px",
            display: "flex", flexDirection: "column", zIndex: 10,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
              <span style={{ fontSize: 18, fontWeight: 800, color: "#191919" }}>
                Pustika<span style={{ color: "#7C3AED" }}> Books</span>
              </span>
              <button onClick={() => setMenuOpen(false)} style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer" }}>×</button>
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <a href="/" style={navLinkStyle}>🏠 Home</a>
              <a href="/blog" style={navLinkStyle}>📖 Blog</a>
              <a href="/products" style={navLinkStyle}>🛒 Products</a>
              <a href="/about" style={navLinkStyle}>👋 About Us</a>
            </nav>
            <div style={{ marginTop: "auto" }}>
              <p style={{ fontSize: 12, color: "#999", marginBottom: 12 }}>Follow us</p>
              <div style={{ display: "flex", gap: 16 }}>
                <a href="https://instagram.com/thepustika" target="_blank" rel="noopener noreferrer" style={{ color: "#7C3AED", fontWeight: 700, textDecoration: "none", fontSize: 14 }}>Instagram</a>
                <a href="mailto:pustikabooks@gmail.com" style={{ color: "#7C3AED", fontWeight: 700, textDecoration: "none", fontSize: 14 }}>Email</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const navLinkStyle: React.CSSProperties = {
  textDecoration: "none",
  fontSize: 20,
  fontWeight: 600,
  color: "#191919",
  padding: "12px 0",
  borderBottom: "1px solid #f0f0f0",
};

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-foreground">
  Turn Your Knowledge Into
  <span className="text-brand-purple"> Digital Income</span>
</h1>

<p className="mt-6 md:mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
  Learn how to create, publish and sell eBooks, digital products and AI-powered businesses—even if you're starting from zero.
</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Link
            to="/blog"
            className="inline-flex items-center justify-center rounded-full bg-brand-purple px-8 py-4 text-base font-bold text-white hover:opacity-90 transition"
          >
            Read our blog →
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-full border-2 border-foreground px-8 py-4 text-base font-bold text-foreground hover:bg-foreground hover:text-white transition"
          >
            See our products →
          </Link>
        </div>
      </div>
    </section>
  );
}

function Topics() {
  const cards = [
    { emoji: "📚", title: "Selling Digital Products", body: "How to create, price and sell ebooks, templates and courses online." },
    { emoji: "🤖", title: "AI for Creators", body: "Using ChatGPT and AI tools to build and earn faster." },
    { emoji: "💰", title: "Digital Income", body: "Proven strategies for building passive income through digital products worldwide." },
  ];
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="text-xs font-semibold tracking-[0.25em] text-brand-purple uppercase text-center">
          Our Topics
        </p>
        <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight text-center max-w-3xl mx-auto leading-tight">
          Everything we publish answers one question:
        </h2>
        <p className="mt-8 text-2xl md:text-4xl italic text-brand-purple text-center font-bold leading-snug max-w-3xl mx-auto">
        "How can anyone turn what they already know into a sustainable income?"
        </p>
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {cards.map((c) => (
            <div key={c.title} className="rounded-3xl bg-white border border-border p-7 shadow-card">
              <div className="text-4xl">{c.emoji}</div>
              <h3 className="mt-5 text-xl font-bold tracking-tight">{c.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-[15px]">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LatestArticles() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  useEffect(() => {
    fetchPublishedPosts()
      .then((p: BlogPost[]) => setPosts(p.slice(0, 3)))
      .catch(() => setPosts([]));
  }, []);

  function coverFor(p: BlogPost): string | null {
    const img = p.body.find((b: any) => b.type === "image") as any;
    return img?.url ?? null;
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Latest articles</h2>
          <Link to="/blog" className="text-sm font-bold text-brand-purple hover:underline">
            View all articles →
          </Link>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {posts.map((p) => {
            const cover = coverFor(p);
            return (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group rounded-3xl overflow-hidden border border-border bg-white shadow-card hover:-translate-y-1 transition-all flex flex-col"
              >
                {cover && (
                  <div className="aspect-[16/10] overflow-hidden bg-secondary">
                    <img
                      src={cover}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold tracking-tight group-hover:text-brand-purple transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {p.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{p.readingMinutes} min read</span>
                    <span className="font-bold text-brand-purple">Read article →</span>
                  </div>
                </div>
              </Link>
            );
          })}
          {posts.length === 0 && (
            <p className="text-sm text-muted-foreground col-span-3">No articles yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}

function FreeGuide() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-uid", "9463c73c8f");
    script.src = "https://pustika-books.kit.com/9463c73c8f/index.js";

    const container = document.getElementById("kit-form");

    if (container && !container.hasChildNodes()) {
      container.appendChild(script);
    }
  }, []);

  return (
    <section style={{ background: "#0F0A1E" }}>
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 text-center">
        <div
          id="kit-form"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        />
      </div>
    </section>
  );
}
  
function SiteFooter() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="text-center md:text-left">
          <div className="font-black text-lg tracking-tight">
            Pustika<span className="text-brand-purple"> Books</span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">© 2026 Pustika Books</p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-muted-foreground">
          <Link to="/blog" className="hover:text-foreground">Blog</Link>
          <Link to="/products" className="hover:text-foreground">Products</Link>
          <Link to="/about" className="hover:text-foreground">About</Link>
          <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
          <Link to="/refund" className="hover:text-foreground">Refund</Link>
        </nav>
      </div>
    </footer>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Sell eBooks & Digital Products | Pustika Books</title>
        <meta
          name="description"
          content="Learn how to create, publish and sell eBooks, digital products and AI-powered businesses. Practical guides for creators and entrepreneurs."
        />
        <link rel="canonical" href="https://pustikabooks.in/" />
        <meta property="og:title" content="Pustika Books — Practical guides for Indian creators" />
        <meta property="og:url" content="https://pustikabooks.in/" />
      </Helmet>
      <SiteHeader />
      <main>
        <Hero />
        <Topics />
        <LatestArticles />
        <FreeGuide />
      </main>
      <SiteFooter />
    </div>
  );
}
