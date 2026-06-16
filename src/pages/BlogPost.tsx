import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { getPost, getSortedPosts } from "@/content/posts";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const url = `https://pustikabooks.lovable.app/blog/${post.slug}`;
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
      url: "https://pustikabooks.lovable.app",
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://pustikabooks.lovable.app/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://pustikabooks.lovable.app/blog" },
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

      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-3xl px-6 py-5 flex items-center justify-between">
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
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-foreground">Blog</Link>
        </nav>

        <h1 className="mt-4 text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">
          {post.title}
        </h1>

        <div className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>•</span>
          <span>{post.readingMinutes} min read</span>
        </div>

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
            return null;
          })}
        </div>

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
