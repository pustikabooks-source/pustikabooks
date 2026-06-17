import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { BlogPost } from "@/content/posts";
import { fetchPublishedPosts } from "@/lib/blog";

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPublishedPosts()
      .then((p) => setPosts(p))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  const url = "https://pustikabooks.lovable.app/blog";

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
      url: `https://pustikabooks.lovable.app/blog/${p.slug}`,
    })),
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Blog — How to Earn With eBooks | Pustika Books</title>
        <meta
          name="description"
          content="Practical guides on writing, pricing, and selling eBooks in India. Learn how to earn passive income with digital products — from beginners to pros."
        />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Pustika Books Blog — How to Earn With eBooks" />
        <meta
          property="og:description"
          content="Practical guides on writing, pricing, and selling eBooks in India."
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(itemListJsonLd)}</script>
      </Helmet>

      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between">
          <Link to="/" className="font-black text-xl tracking-tight">
            Pustika<span className="text-brand-purple">.</span>
          </Link>
          <Link
            to="/"
            className="text-sm font-semibold text-muted-foreground hover:text-foreground"
          >
            ← Back to site
          </Link>
        </div>
      </header>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-purple uppercase">
            The Pustika Blog
          </p>
          <h1 className="mt-3 text-4xl md:text-6xl font-black tracking-tight">
            How to earn with{" "}
            <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
              eBooks
            </span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Honest, step-by-step guides on writing, pricing, and selling digital books in India.
            No fluff, no theory — just what's working in 2026.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl grid md:grid-cols-2 gap-6">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="group rounded-3xl border border-border bg-card shadow-card p-7 hover:-translate-y-1 transition-all"
            >
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
                {p.tags.map((t) => (
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
      </section>
    </main>
  );
}