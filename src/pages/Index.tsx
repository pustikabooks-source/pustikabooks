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
            <span style={{ fontSize: 20, fontWeight: 900, color: "#191919", letterSpacing: "-0.5px" }}>
              Pustika<span style={{ color: "#7C3AED" }}> Books</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
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
              <Link to="/" onClick={() => setMenuOpen(false)} style={navLinkStyle}>🏠 Home</Link>
              <Link to="/blog" onClick={() => setMenuOpen(false)} style={navLinkStyle}>📖 Blog</Link>
              <Link to="/products" onClick={() => setMenuOpen(false)} style={navLinkStyle}>🛒 Products</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)} style={navLinkStyle}>👋 About Us</Link>
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
          <span className="text-brand-purple"> Digital Products & Passive Income</span>
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
function FeaturedArticles() {
  const featured = [
    {
      title: "How to Earn Money Selling eBooks",
      desc: "Learn how beginners can create and sell profitable ebooks from scratch.",
      link: "/blog/how-to-earn-money-selling-ebooks-in-india",
      emoji: "📘",
    },
    {
      title: "Best eBook Niches in 2026",
      desc: "Discover profitable ebook niches with high demand and low competition.",
      link: "/blog/best-ebook-niches-2026",
      emoji: "🔥",
    },
    {
      title: "Digital Products That Sell",
      desc: "The best digital products you can build once and sell again and again.",
      link: "/blog/digital-products-india-2026",
      emoji: "🚀",
    },
  ];

  return (
    <section className="bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-6 py-20">

        <p className="text-center text-xs font-bold tracking-[0.25em] uppercase text-brand-purple">
          Start Here
        </p>

        <h2 className="mt-3 text-center text-4xl md:text-5xl font-black">
          Read These First
        </h2>

        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          New to digital products? These guides will help you build your first
          income online.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {featured.map((post) => (
            <Link
              key={post.title}
              to={post.link}
              className="rounded-3xl bg-white border border-border p-8 shadow-card hover:-translate-y-1 transition-all"
            >
              <div className="text-5xl">{post.emoji}</div>

              <h3 className="mt-6 text-xl font-bold">
                {post.title}
              </h3>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                {post.desc}
              </p>

              <div className="mt-6 font-bold text-brand-purple">
                Read Guide →
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
function WhyPustika() {
  const features = [
    {
      icon: "📚",
      title: "Practical Guides",
      text: "Every article focuses on real-world implementation instead of theory.",
    },
    {
      icon: "🚀",
      title: "Beginner Friendly",
      text: "No experience required. Start building digital income from scratch.",
    },
    {
      icon: "🤖",
      title: "AI Powered",
      text: "Learn how to use ChatGPT and AI tools to work faster and smarter.",
    },
    {
      icon: "🌍",
      title: "Global Audience",
      text: "Create products that can be sold to customers worldwide.",
    },
    {
      icon: "⚡",
      title: "Actionable",
      text: "Every guide includes practical steps you can implement immediately.",
    },
    {
      icon: "💰",
      title: "Built for Income",
      text: "Everything we teach is designed to help creators earn online.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24">

        <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-brand-purple">
          WHY CHOOSE US
        </p>

        <h2 className="mt-3 text-center text-4xl md:text-5xl font-black">
          Everything You Need To Build
          <br />
          Your Digital Business
        </h2>

        <p className="mt-5 text-center text-muted-foreground max-w-2xl mx-auto">
          Learn faster with practical guides, AI workflows, and proven digital
          product strategies designed for creators.
        </p>

        <div className="grid md:grid-cols-3 gap-7 mt-16">

          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border bg-[#FAFAF8] p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
function StartJourney() {
  const steps = [
    {
      number: "01",
      title: "Read Free Guides",
      text: "Explore our in-depth blog posts and learn how digital products work.",
    },
    {
      number: "02",
      title: "Download Resources",
      text: "Get templates, prompts, and practical tools to speed up your progress.",
    },
    {
      number: "03",
      title: "Launch Your First Product",
      text: "Create your first eBook or digital product and start selling online.",
    },
    {
      number: "04",
      title: "Build Passive Income",
      text: "Grow your digital business with AI, automation, and smart marketing.",
    },
  ];

  return (
    <section className="bg-[#F8F5FF]">
      <div className="max-w-6xl mx-auto px-6 py-24">

        <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-brand-purple">
          START HERE
        </p>

        <h2 className="mt-3 text-center text-4xl md:text-5xl font-black">
          Your Journey Starts Here
        </h2>

        <p className="mt-5 text-center text-muted-foreground max-w-2xl mx-auto">
          Follow this simple roadmap to go from learning to earning.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-16">

          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl bg-white p-8 shadow-card border border-border text-center hover:-translate-y-1 transition"
            >
              <div className="text-5xl font-black text-brand-purple">
                {step.number}
              </div>

              <h3 className="mt-5 text-xl font-bold">
                {step.title}
              </h3>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                {step.text}
              </p>
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
      .then((data: any[]) => {
        const sorted = data.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setPosts(sorted.slice(0, 3));
      })
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
                className="group rounded-3xl overflow-hidden border border-border bg-white shadow-card hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
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
                  <span className="inline-flex items-center rounded-full bg-brand-purple/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-purple">
  Latest Article
</span>
                  <h3 className="text-lg font-bold tracking-tight group-hover:text-brand-purple transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {p.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span>⏱ {p.readingMinutes} min read</span>
                    <span className="font-bold text-brand-purple group-hover:translate-x-1 transition-transform">
  Read article →
</span>
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
    const existing = document.getElementById("kit-script");
    if (existing) return;
    const script = document.createElement("script");
    script.id = "kit-script";
    script.async = true;
    script.setAttribute("data-uid", "9463c73c8f");
    script.src = "https://pustika-books.kit.com/9463c73c8f/index.js";
    document.getElementById("kit-form")?.appendChild(script);
  }, []);

  return (
    <section style={{ background: "#0F0A1E" }}>
      <div
        style={{
          maxWidth: 600,
          margin: "0 auto",
          padding: "64px 24px",
        }}
      >
        <div
          id="kit-form"
          style={{
            background: "white",
            borderRadius: 20,
            overflow: "hidden",
          }}
        />
      </div>
    </section>
  );
}
function FAQ() {
  const faqs = [
    {
      q: "What is Pustika Books?",
      a: "Pustika Books is a platform that helps creators learn how to create, publish and sell ebooks, digital products and AI-powered businesses.",
    },
    {
      q: "Can beginners create and sell ebooks?",
      a: "Yes. Our guides are designed for complete beginners and explain everything step by step.",
    },
    {
      q: "Do I need coding skills?",
      a: "No. Most digital products can be created using tools like ChatGPT, Canva, Google Docs and Notion.",
    },
    {
      q: "Will I get instant access after purchase?",
      a: "Yes. All digital products are delivered immediately after successful payment.",
    },
    {
      q: "Can I sell my products worldwide?",
      a: "Absolutely. Digital products can be sold globally using payment platforms like Razorpay and PayPal.",
    },
    {
      q: "What topics does Pustika Books cover?",
      a: "We cover ebooks, digital products, AI tools, online business, passive income and creator growth.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-6 py-24">

        <p className="text-center text-xs font-bold tracking-[0.25em] uppercase text-brand-purple">
          FAQ
        </p>

        <h2 className="mt-3 text-center text-4xl md:text-5xl font-black">
          Frequently Asked Questions
        </h2>

        <div className="mt-14 space-y-5">

          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="rounded-2xl border border-border bg-[#FAFAF8] p-6"
            >
              <summary className="cursor-pointer text-lg font-bold">
                {faq.q}
              </summary>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                {faq.a}
              </p>

            </details>
          ))}

        </div>

      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black">
              Pustika <span className="text-brand-purple">Books</span>
            </h3>

            <p className="mt-4 text-sm text-slate-300 leading-7">
              Helping creators build digital income through ebooks,
              AI and digital products.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-bold mb-5">Explore</h4>

            <div className="space-y-3 text-sm">

              <Link to="/blog" className="block hover:text-brand-purple">
                Blog
              </Link>

              <Link to="/products" className="block hover:text-brand-purple">
                Products
              </Link>

              <Link to="/about" className="block hover:text-brand-purple">
                About
              </Link>

            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-5">Legal</h4>

            <div className="space-y-3 text-sm">

              <Link to="/privacy" className="block hover:text-brand-purple">
                Privacy Policy
              </Link>

              <Link to="/refund" className="block hover:text-brand-purple">
                Refund Policy
              </Link>

            </div>
          </div>

          {/* Connect */}
          <div>

            <h4 className="font-bold mb-5">
              Connect
            </h4>

            <div className="space-y-3 text-sm">

              <a
                href="https://instagram.com/thepustika"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-brand-purple"
              >
                Instagram
              </a>

              <a
                href="https://x.com/PustikaBooks"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-brand-purple"
              >
                X (Twitter)
              </a>

              <a
                href="https://www.pinterest.com/thepustika"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-brand-purple"
              >
                Pinterest
              </a>

              <a
                href="mailto: pustikabooks@gmail.com"
                className="block hover:text-brand-purple"
              >
                pustikabooks@gmail.com
              </a>

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-slate-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-slate-400">
            © 2026 Pustika Books. All rights reserved.
          </p>

          <p className="text-sm text-slate-400">
            Made with ❤️ for creators worldwide.
          </p>

        </div>

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
  content="Learn how to create, publish and sell eBooks, digital products and AI-powered businesses."
/>

<link rel="canonical" href="https://pustikabooks.in/" />

<meta property="og:type" content="website" />
<meta property="og:site_name" content="Pustika Books" />
<meta
  property="og:title"
  content="Sell eBooks & Digital Products | Pustika Books"
/>
<meta
  property="og:description"
  content="Learn how to create, publish and sell eBooks, digital products and AI-powered businesses."
/>
<meta property="og:url" content="https://pustikabooks.in/" />
<meta
  property="og:image"
  content="https://pustikabooks.in/og-home.jpg"
/>
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Pustika Books - Sell eBooks & Digital Products" />

<meta name="twitter:card" content="summary_large_image" />
<meta
  name="twitter:title"
  content="Sell eBooks & Digital Products | Pustika Books"
/>
<meta
  name="twitter:description"
  content="Learn how to create, publish and sell eBooks, digital products and AI-powered businesses."
/>
<meta
  name="twitter:image"
  content="https://pustikabooks.in/og-home.jpg"
/>
      </Helmet>
      <SiteHeader />
      <main>
        <Hero />
        <Topics />
        <FeaturedArticles />
        <WhyPustika />
        <StartJourney />
        <LatestArticles />
        <FreeGuide />
        <FAQ />
      </main>
      <SiteFooter />
    </div>
  );
}
