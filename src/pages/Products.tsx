import { useState } from "react";
import { Helmet } from "react-helmet-async";

const WHATSAPP = "https://wa.me/919662436387";

const faqs = [
  {
    q: "Which product is best for beginners?",
    a: "If you're starting from scratch, we recommend Pro Vault. It includes the Ebook Mastery Guide, AI prompts, digital product ideas, templates and a complete launch roadmap."
  },
  {
    q: "Will I get instant access after purchasing?",
    a: "Yes. As soon as your payment is confirmed, you'll receive instant access to your purchase."
  },
  {
    q: "Are these products only for creators in India?",
    a: "No. Everything we create is designed for creators worldwide."
  },
  {
    q: "Do I need prior experience?",
    a: "No. Every product is beginner friendly and designed with step-by-step guidance."
  },
  {
    q: "Will I receive future updates?",
    a: "Yes. Pro Vault includes lifetime updates whenever new resources are added."
  },
  {
    q: "How can I contact support?",
    a: "You can reach us anytime through email or WhatsApp."
  }
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <a href="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontSize: 20,
                fontWeight: 900,
                color: "#191919",
                letterSpacing: "-0.5px",
              }}
            >
              Pustika
              <span style={{ color: "#7C3AED" }}> Books</span>
            </span>
          </a>

          <button
            onClick={() => setMenuOpen(true)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
            }}
          >
            <div style={{ width: 22, height: 2, background: "#191919", marginBottom: 5 }} />
            <div style={{ width: 22, height: 2, background: "#191919", marginBottom: 5 }} />
            <div style={{ width: 22, height: 2, background: "#191919" }} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,.4)",
            }}
            onClick={() => setMenuOpen(false)}
          />

          <div
            style={{
              position: "relative",
              width: 280,
              background: "#fff",
              padding: "32px 24px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 32,
              }}
            >
              <strong>
                Pustika
                <span style={{ color: "#7C3AED" }}> Books</span>
              </strong>

              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: 24,
                }}
              >
                ×
              </button>
            </div>

            <a className="py-3" href="/">🏠 Home</a>
            <a className="py-3" href="/blog">📖 Blog</a>
            <a className="py-3" href="/products">🛒 Products</a>
            <a className="py-3" href="/about">👋 About Us</a>

            <div style={{ marginTop: "auto" }}>
              <a href="https://instagram.com/pustikabooks">
                Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden py-28 px-6">

      <div className="absolute inset-0 bg-[#F7F3EC]" />

      <div className="relative max-w-5xl mx-auto text-center">

        <span className="inline-flex rounded-full border border-brand-purple/20 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-purple">
          PRODUCTS
        </span>

        <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">

          Build & Sell Digital

          <br />

          <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">

            Products With Confidence

          </span>

        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground leading-8">

          Everything you need to create, launch and sell ebooks,
          AI-powered resources and digital products without
          guesswork or expensive courses.

        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="#products"
            className="rounded-full bg-gradient-cta px-8 py-4 text-white font-bold"
          >
            Explore Products →
          </a>

          <a
            href="/blog"
            className="rounded-full border-2 border-brand-purple px-8 py-4 font-bold text-brand-purple"
          >
            Read Free Guides →
          </a>

        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">

          <span className="rounded-full bg-white px-4 py-2 shadow">
            ✅ Beginner Friendly
          </span>

          <span className="rounded-full bg-white px-4 py-2 shadow">
            ⚡ Instant Delivery
          </span>

          <span className="rounded-full bg-white px-4 py-2 shadow">
            ♾ Lifetime Access
          </span>

          <span className="rounded-full bg-white px-4 py-2 shadow">
            🌍 Global Strategies
          </span>

        </div>

      </div>

    </section>
  );
}
function Pricing() {
  const products = [
    {
      badge: "🔥 Limited Offer",
      title: "Pustika Bundle",
      subtitle: "4 Premium eBooks",
      oldPrice: "₹795",
      price: "₹249",
      save: "Save ₹546",
      features: [
        "📚 4 Premium eBooks",
        "💰 Personal Finance Guide",
        "💻 Digital Products Guide",
        "♾ Lifetime Access",
      ],
      button: "Get Bundle",
      link: "https://rzp.io/rzp/Ih78kMZ",
      paypal: "https://www.paypal.com/ncp/payment/JF7TS5GTBNAYJ",
      paypalText: "PayPal • $9.99",
      featured: false,
    },
    {
      badge: "⭐ Most Popular",
      title: "Pro Vault",
      subtitle: "Implementation Toolkit",
      oldPrice: "₹10,499",
      price: "₹499",
      save: "Save ₹10,000+",
      features: [
        "📘 Ebook Mastery Guide",
        "🤖 50+ ChatGPT Prompts",
        "💡 500+ Product Ideas",
        "🚀 30-Day Launch Roadmap",
        "🎁 Bonus Templates",
      ],
      button: "Get Pro Vault",
      link: "https://rzp.io/rzp/0PZ18Xk",
      paypal: "https://www.paypal.com/ncp/payment/V6FXA4TBLT39J",
      paypalText: "PayPal • $19.99",
      featured: true,
    },
    {
      badge: "✨ New",
      title: "Creator Dashboard",
      subtitle: "Notion Template",
      oldPrice: "₹599",
      price: "₹299",
      save: "Save ₹300",
      features: [
        "📅 Content Calendar",
        "📦 Product Tracker",
        "📈 Analytics Dashboard",
        "🎯 Goal Planner",
      ],
      button: "Get Dashboard",
      link: "https://rzp.io/rzp/OLr2Io9",
      featured: false,
    },
  ];

  return (
    <>
      <HeroSection />

      <section id="products" className="py-24 px-6 bg-[#F7F3EC]">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-3 gap-8">

            {products.map((p) => (

              <div
                key={p.title}
                className={`rounded-3xl bg-white shadow-xl border p-8 flex flex-col ${
                  p.featured
                    ? "border-brand-purple ring-2 ring-brand-purple/20"
                    : "border-border"
                }`}
              >

                <span className="inline-block rounded-full bg-brand-purple text-white text-xs font-bold px-4 py-2 w-fit">
                  {p.badge}
                </span>

                <p className="mt-6 uppercase tracking-[0.25em] text-xs text-brand-purple font-bold">
                  {p.subtitle}
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  {p.title}
                </h3>

                <div className="mt-8 rounded-2xl bg-secondary p-6">

                  <p className="line-through text-muted-foreground">
                    {p.oldPrice}
                  </p>

                  <h2 className="text-5xl font-black mt-1">
                    {p.price}
                  </h2>

                  <p className="text-green-600 font-semibold mt-2">
                    {p.save}
                  </p>

                </div>

                <div className="mt-8 space-y-4 flex-1">

                  {p.features.map((f) => (

                    <div key={f} className="flex gap-3">

                      <span>✅</span>

                      <span>{f}</span>

                    </div>

                  ))}

                </div>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 rounded-full bg-gradient-cta py-4 text-center text-white font-bold"
                >
                  {p.button} →
                </a>

                {p.paypal && (
                  <a
                    href={p.paypal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 rounded-full py-4 text-center text-white font-bold"
                    style={{ background: "#0070BA" }}
                  >
                    {p.paypalText}
                  </a>
                )}

              </div>

            ))}

          </div>

          <div className="mt-24">

            <div className="text-center">

              <span className="uppercase tracking-[0.3em] text-sm font-bold text-brand-purple">
                WHY CHOOSE PUSTIKA BOOKS
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-black">
                Built For Modern Digital Creators
              </h2>

            </div>

            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {[
                ["⚡", "Instant Access"],
                ["♾", "Lifetime Updates"],
                ["🌍", "Global Focus"],
                ["🤝", "Beginner Friendly"],
              ].map(([icon, title]) => (

                <div
                  key={title}
                  className="rounded-3xl bg-white border border-border p-8 text-center"
                >

                  <div className="text-5xl">
                    {icon}
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {title}
                  </h3>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

function FreeResource() {
  return (
    <section className="py-24 px-6 bg-[#F7F3EC]">

      <div className="max-w-6xl mx-auto">

        <div className="rounded-[36px] bg-white border border-brand-purple/15 shadow-xl p-10 md:p-14">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}

            <div>

              <span className="inline-flex rounded-full bg-green-100 text-green-700 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em]">

                FREE DOWNLOAD

              </span>

              <h2 className="mt-6 text-4xl md:text-5xl font-black">

                Creator Starter Kit

              </h2>

              <p className="mt-6 text-lg text-muted-foreground leading-8">

                A free toolkit to help you plan, create and launch your first
                digital product with confidence.

              </p>

              <div className="mt-8 space-y-4">

                <p>✅ eBook Planning Worksheet</p>

                <p>✅ Chapter Outline Template</p>

                <p>✅ Product Validation Worksheet</p>

                <p>✅ Weekly Creator Planner</p>

                <p>✅ Website Launch Checklist</p>

                <p>✅ Goal Tracker</p>

              </div>

              <div className="mt-10 max-w-md">

  <form
    id="creator-kit-form"
    className="space-y-4"
  >

    <input
      type="email"
      id="email"
      placeholder="Enter your email address"
      required
      className="w-full rounded-xl border border-gray-300 px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
    />

    <button
      type="submit"
      className="w-full rounded-xl bg-gradient-cta px-6 py-4 text-white font-bold text-lg shadow-lg"
    >
      🎁 Get FREE Creator Starter Kit
    </button>

  </form>

  <p className="mt-4 text-sm text-muted-foreground">
    ✓ Instant download
    <br />
    ✓ No spam
    <br />
    ✓ Unsubscribe anytime
  </p>

</div>

                <a
                  href="/blog"
                  className="rounded-full border-2 border-brand-purple px-8 py-4 font-bold text-brand-purple"
                >
                  Read Blog
                </a>

              </div>

            </div>

            {/* Right */}

            <div className="rounded-3xl border border-dashed border-brand-purple/20 bg-[#FAF7F2] p-10 text-center">

              <div className="text-7xl">
                📘
              </div>

              <h3 className="mt-5 text-2xl font-black">

                30+ Pages

              </h3>

              <p className="mt-4 text-muted-foreground">

                Beautiful worksheets, planners and templates
                for creators.

              </p>

              <div className="mt-8 inline-flex rounded-full bg-brand-purple text-white px-6 py-3 font-bold">

                FREE

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

function FAQ() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="mx-auto max-w-3xl">

        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-brand-purple">
          FAQ
        </p>

        <h2 className="mt-4 text-center text-4xl md:text-5xl font-black">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-5">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <summary className="cursor-pointer font-bold text-lg">
                {f.q}
              </summary>

              <p className="mt-4 text-muted-foreground leading-7">
                {f.a}
              </p>
            </details>
          ))}
        </div>

        <p className="mt-12 text-center text-muted-foreground">
          Need help choosing the right product?
          <br />
          <a
            href="mailto:support@pustikabooks.in"
            className="font-bold text-brand-purple"
          >
            support@pustikabooks.in
          </a>
        </p>

      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1C1C2E] text-white py-14 px-6">
      <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3">

        <div>
          <h3 className="text-xl font-black">
            Pustika
            <span className="text-brand-purple"> Books</span>
          </h3>

          <p className="mt-3 text-white/70 text-sm">
            Practical digital products for creators worldwide.
          </p>

          <p className="mt-4 text-white/50 text-sm">
            © {new Date().getFullYear()} Pustika Books
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">
            Quick Links
          </h4>

          <div className="space-y-2 text-white/70">

            <a href="/" className="block hover:text-white">
              Home
            </a>

            <a href="/blog" className="block hover:text-white">
              Blog
            </a>

            <a href="/products" className="block hover:text-white">
              Products
            </a>

            <a href="/about" className="block hover:text-white">
              About
            </a>

          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4">
            Support
          </h4>

          <div className="space-y-2 text-white/70">

            <a
              href="mailto:support@pustikabooks.in"
              className="block hover:text-white"
            >
              support@pustikabooks.in
            </a>

            <a
              href="/privacy"
              className="block hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="/refund"
              className="block hover:text-white"
            >
              Refund Policy
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] text-white px-5 py-3 font-bold shadow-xl hover:bg-[#1ebe5a]"
    >
      💬 Chat
    </a>
  );
}

function Products() {

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "The Pro Vault",
    description:
      "Implementation toolkit for creators including AI prompts, ebook guide and launch roadmap.",
    image: "https://pustikabooks.in/pro-vault.jpg",
    brand: {
      "@type": "Brand",
      name: "Pustika Books"
    },
    offers: {
      "@type": "Offer",
      price: "499",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock"
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      <Helmet>
        <title>Products | Pustika Books</title>

        <meta
          name="description"
          content="Discover ebooks, creator tools and digital products from Pustika Books."
        />

        <link
          rel="canonical"
          href="https://pustikabooks.in/products"
        />

        <script type="application/ld+json">
          {JSON.stringify(productLd)}
        </script>
      </Helmet>

      <Header />

      <main>

        <Pricing />
        <FreeResource />
        <FAQ />

      </main>

      <Footer />

      <FloatingWhatsApp />

    </div>
  );
}

export default Products;

