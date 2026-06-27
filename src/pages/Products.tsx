import { useState } from "react";
import { Sparkles, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";

const CHECKOUT = "https://rzp.io/rzp/deLqOQQa";
const PRO_CHECKOUT = "https://rzp.io/rzp/0PZ18Xk";
const WHATSAPP = "https://wa.me/919662436387";

const faqs = [
  { q: "Do I need any technical skills or experience?", a: "Not at all. The Pro Vault is designed for complete beginners. Our AI prompts and fill-in-the-blank templates do the heavy lifting for you." },
  { q: "What kind of digital products can I create with this?", a: "You can use these templates and formulas to create short guides, checklists, Notion templates, planners, mini-courses, or workbooks." },
  { q: "What if I don't even have an idea yet?", a: "That's exactly why we included the 50+ Profitable Niche Research Guide. It helps you find a high-demand idea in minutes." },
  { q: "How much time do I need to invest?", a: "You can start with just a few hours a week. It's designed to fit around your schedule." },
  { q: "What makes The Pro Vault different from other courses?", a: "This isn't a boring 10-hour video course full of fluff. It's an Implementation Bundle. You get the exact tools, templates, and checklists to take action today." }
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <a href="/" style={{ textDecoration: "none" }}>
  <span style={{ fontSize: "20px", fontWeight: 900, color: "#191919", letterSpacing: "-0.5px" }}>
    Pustika<span style={{ color: "#7C3AED" }}> Books</span>
  </span>
</a>
          <div className="flex items-center gap-4">
            
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
        </div>
      </header>

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
              <a href="/" style={{ textDecoration: "none", fontSize: "20px", fontWeight: 600, color: "#191919", padding: "12px 0", borderBottom: "1px solid #f0f0f0" }}>🏠 Home</a>
              <a href="/blog" style={{ textDecoration: "none", fontSize: "20px", fontWeight: 600, color: "#191919", padding: "12px 0", borderBottom: "1px solid #f0f0f0" }}>📖 Blog</a>
              <a href="/products" style={{ textDecoration: "none", fontSize: "20px", fontWeight: 600, color: "#191919", padding: "12px 0", borderBottom: "1px solid #f0f0f0" }}>🛒 Products</a>
              <a href="/about" style={{ textDecoration: "none", fontSize: "20px", fontWeight: 600, color: "#191919", padding: "12px 0", borderBottom: "1px solid #f0f0f0" }}>👋 About Us</a>
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
    </>
  );
}


// function WhyCreated() {
//   return (
//     <section className="py-16 px-5 md:px-8">
//       <div className="max-w-2xl mx-auto text-left rounded-3xl border border-border bg-card shadow-card p-7 md:p-9">
//         <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Why We Created This eBook</h2>
//         <p className="mt-4 text-muted-foreground leading-relaxed">
//           We know how confusing it feels when you're starting out — too much advice, not enough real help. That's exactly why we created this book. Not to "sell information," but to share what actually works in simple, clear steps.
//         </p>
//         <p className="mt-3 text-muted-foreground leading-relaxed">
//           At Pustika, we don't disappear after the sale. We stay connected. You get access to our WhatsApp group where we personally reply, solve doubts, and support you like a friend would.
//         </p>
//       </div>
//     </section>
//   );
// }

function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-28 px-6 md:px-10 scroll-mt-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[#F7F3EC]" />

      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-brand-purple/10 blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-brand-pink/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

  <span className="inline-flex items-center rounded-full border border-brand-purple/20 bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-brand-purple shadow-sm">
    PRODUCTS
  </span>

  <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight tracking-tight">
    Build & Sell Digital
    <br />
    <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
      Products With Confidence
    </span>
  </h1>

  <p className="mt-7 text-lg md:text-xl text-muted-foreground leading-8 max-w-2xl mx-auto">
    Everything you need to create, launch and sell ebooks,
    AI-powered resources and digital products without
    guesswork or expensive courses.
  </p>

  <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

    <a
      href="#products"
      className="rounded-full bg-gradient-cta px-8 py-4 text-white font-bold shadow-lg"
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

  <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm font-medium">

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
        {/* Cards */}

        <div
  id="products"
  className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
>

          {/* ===================================================== */}
          {/* CARD 1 */}
          {/* ===================================================== */}

          <div className="group relative">

            <div className="absolute inset-0 rounded-[34px] bg-gradient-to-br from-brand-purple via-brand-pink to-brand-purple opacity-30 blur-xl transition duration-500 group-hover:opacity-60" />

            <div className="relative h-full rounded-[34px] border border-brand-purple/15 bg-white p-9 shadow-xl transition duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl flex flex-col">

              <div className="mx-auto mb-7">

                <span className="rounded-full bg-gradient-cta px-5 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
                  🔥 Limited Offer
                </span>

              </div>

              <p className="text-xs uppercase tracking-[0.25em] text-brand-purple font-bold">
                eBook Bundle
              </p>

              <h3 className="mt-3 text-3xl font-black">
                Pustika Bundle
              </h3>

              <p className="mt-2 text-muted-foreground leading-7">
                Four practical eBooks that help you build wealth,
                create digital products and start earning online.
              </p>

              {/* PRICE */}

              <div className="mt-8 h-44 rounded-3xl border border-brand-purple/15 bg-[#FAF7F2] flex flex-col justify-center px-7">

                <p className="text-xs uppercase tracking-[0.25em] text-brand-pink font-bold">
                  Bundle Price
                </p>

                <div className="flex items-end justify-between mt-2">

                  <div>

                    <p className="line-through text-muted-foreground text-lg">
                      ₹795
                    </p>

                    <p className="text-sm text-green-600 font-semibold">
                      Save ₹546
                    </p>

                  </div>

                  <h2 className="text-6xl font-black bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
                    ₹249
                  </h2>

                </div>

              </div>

              {/* FEATURES */}

              <div className="mt-10 space-y-5 flex-1">

                {[
                  "📘 Paisa Samjho, Zindagi Badlo",
                  "💻 Digital Products Guide",
                  "🚀 Startup From Zero",
                  "💰 Money Hustle",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >

                    <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center text-lg">
                      ✓
                    </div>

                    <p className="font-semibold">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

              {/* Bottom */}

              <div className="mt-auto">

                <div className="mt-8 border-t border-border pt-6">

                  <p className="text-center text-sm italic text-muted-foreground">
                    Lifetime access • Instant download
                  </p>

                </div>

                <a
                  href="https://rzp.io/rzp/Ih78kMZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 h-14 rounded-full bg-gradient-cta flex items-center justify-center text-white font-black text-lg shadow-lg transition hover:scale-[1.02]"
                >
                  Get Bundle →
                </a>

                <a
                  href="https://www.paypal.com/ncp/payment/JF7TS5GTBNAYJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 h-14 rounded-full flex items-center justify-center text-white font-black"
                  style={{ background: "#0070BA" }}
                >
                  PayPal • $9.99
                </a>

              </div>

            </div>

          </div>

          {/* ===================================================== */}
          {/* PRO VAULT STARTS HERE */}
          {/* ===================================================== */}
{/* CARD 2 — PRO VAULT */}
{/* ===================================================== */}

<div className="group relative scale-[1.03] lg:scale-105 z-10">

  {/* Glow */}
  <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-brand-purple via-brand-pink to-brand-purple blur-2xl opacity-40 group-hover:opacity-70 transition duration-500" />

  <div className="relative h-full rounded-[36px] bg-gradient-to-br from-brand-purple to-brand-pink p-[2px] shadow-2xl">

    <div className="relative flex h-full flex-col rounded-[34px] bg-white p-10">

      {/* Badge */}

      <div className="absolute left-1/2 -top-5 -translate-x-1/2">

        <div className="rounded-full bg-gradient-cta px-6 py-2 text-sm font-black uppercase tracking-widest text-white shadow-xl">

          ⭐ MOST POPULAR

        </div>

      </div>

      <p className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-brand-purple">
        IMPLEMENTATION TOOLKIT
      </p>

      <h3 className="mt-3 text-4xl font-black">
        Pro Vault
      </h3>

      <p className="mt-3 leading-7 text-muted-foreground">
        Everything you need to create, launch and sell digital products
        without wasting months figuring it out.
      </p>

      {/* Price */}

      <div className="mt-8 h-52 rounded-3xl bg-[#FAF7F2] border border-brand-purple/15 px-8 flex flex-col justify-center">

        <p className="text-xs uppercase tracking-[0.25em] text-brand-pink font-bold">
          FOUNDER PRICE
        </p>

        <div className="mt-3 flex items-end justify-between">

          <div>

            <p className="text-xl line-through text-muted-foreground">
              ₹10,499
            </p>

            <p className="text-sm font-semibold text-green-600">
              Save ₹10,000+
            </p>

          </div>

          <div className="text-right">

            <h2 className="text-7xl font-black bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
              ₹499
            </h2>

          </div>

        </div>

      </div>

      {/* Features */}

      <div className="mt-10 space-y-5 flex-1">

        {[
          "50+ ChatGPT Prompts",
          "500+ Digital Product Ideas",
          "30-Day Launch Roadmap",
          "100+ High-Converting Headlines",
          "Ebook Mastery Guide",
          "50+ Profitable Niches",
          "Bonus Templates & Resources",
        ].map((item) => (

          <div
            key={item}
            className="flex items-center gap-4"
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-purple text-white font-black">

              ✓

            </div>

            <p className="font-semibold">
              {item}
            </p>

          </div>

        ))}

      </div>

      {/* Bonus */}

      <div className="mt-8 rounded-2xl border border-brand-purple/20 bg-brand-purple/5 p-5">

        <p className="text-center text-sm font-semibold">

          🎁 Plus lifetime updates included at no extra cost.

        </p>

      </div>

      {/* Buttons */}

      <div className="mt-auto">

        <a
          href="https://rzp.io/rzp/0PZ18Xk"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 flex h-16 items-center justify-center rounded-full bg-gradient-cta text-lg font-black text-white shadow-xl transition hover:scale-[1.02]"
        >
          Get Pro Vault →
        </a>

        <a
          href="https://www.paypal.com/ncp/payment/V6FXA4TBLT39J"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex h-16 items-center justify-center rounded-full text-lg font-black text-white"
          style={{ background: "#0070BA" }}
        >
          Pay with PayPal • $19.99
        </a>

        <div className="mt-6 border-t pt-5">

          <p className="text-center text-sm text-muted-foreground">

            🔒 Lifetime Access • Instant Delivery • One-Time Payment

          </p>

        </div>

      </div>

    </div>

  </div>

</div>

{/* ===================================================== */}
{/* NOTION TEMPLATE STARTS HERE */}
{/* ===================================================== */}
{/* CARD 3 — NOTION TEMPLATE */}
{/* ===================================================== */}

<div className="group relative">

  <div className="absolute inset-0 rounded-[34px] bg-gradient-to-br from-brand-purple via-brand-pink to-brand-purple opacity-25 blur-xl transition duration-500 group-hover:opacity-60" />

  <div className="relative h-full rounded-[34px] border border-brand-purple/15 bg-white p-9 shadow-xl transition duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl flex flex-col">

    <div className="mx-auto mb-7">

      <span className="rounded-full bg-gradient-cta px-5 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
        ✨ NEW
      </span>

    </div>

    <p className="text-xs uppercase tracking-[0.25em] text-brand-purple font-bold">
      NOTION TEMPLATE
    </p>

    <h3 className="mt-3 text-3xl font-black">
      Creator Dashboard
    </h3>

    <p className="mt-2 text-muted-foreground leading-7">
      Organize your content, products, ideas and business inside one beautiful
      Notion workspace.
    </p>

    {/* PRICE */}

    <div className="mt-8 h-44 rounded-3xl border border-brand-purple/15 bg-[#FAF7F2] flex flex-col justify-center px-7">

      <p className="text-xs uppercase tracking-[0.25em] text-brand-pink font-bold">
        Launch Price
      </p>

      <div className="flex items-end justify-between mt-2">

        <div>

          <p className="line-through text-muted-foreground text-lg">
            ₹599
          </p>

          <p className="text-sm text-green-600 font-semibold">
            Save ₹300
          </p>

        </div>

        <h2 className="text-6xl font-black bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
          ₹299
        </h2>

      </div>

    </div>

    {/* FEATURES */}

    <div className="mt-10 space-y-5 flex-1">

      {[
        "📅 Content Calendar",
        "💡 Idea Database",
        "📦 Product Tracker",
        "📈 Analytics Dashboard",
        "🎯 Monthly Goals",
        "🎨 Brand Assets",
      ].map((item) => (

        <div
          key={item}
          className="flex items-center gap-4"
        >

          <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center text-lg">
            ✓
          </div>

          <p className="font-semibold">
            {item}
          </p>

        </div>

      ))}

    </div>

    <div className="mt-auto">

      <div className="mt-8 border-t border-border pt-6">

        <p className="text-center text-sm italic text-muted-foreground">
          Instant duplicate • Lifetime access
        </p>

      </div>

      <a
        href="https://rzp.io/rzp/OLr2Io9"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 h-14 rounded-full bg-gradient-cta flex items-center justify-center text-white font-black text-lg shadow-lg transition hover:scale-[1.02]"
      >
        Get Dashboard →
      </a>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        🔒 One-time payment • No subscription
      </p>

    </div>

  </div>

</div>

</div>

{/* Bottom Trust Section */}

<div className="mt-20 rounded-[34px] border border-brand-purple/10 bg-white p-10 shadow-lg">

  <div className="grid md:grid-cols-4 gap-8 text-center">

    <div>
      <h4 className="text-3xl font-black text-brand-purple">
        100%
      </h4>
      <p className="mt-2 text-muted-foreground">
        Secure Payments
      </p>
    </div>

    <div>
      <h4 className="text-3xl font-black text-brand-purple">
        Instant
      </h4>
      <p className="mt-2 text-muted-foreground">
        Digital Delivery
      </p>
    </div>

    <div>
      <h4 className="text-3xl font-black text-brand-purple">
        Lifetime
      </h4>
      <p className="mt-2 text-muted-foreground">
        Access Included
      </p>
    </div>

    <div>
      <h4 className="text-3xl font-black text-brand-purple">
        24/7
      </h4>
      <p className="mt-2 text-muted-foreground">
        Email Support
      </p>
    </div>

  </div>

</div>

</div>

</section>
  );
}
          
        





function Whatsapp() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-2xl text-center rounded-3xl border border-border bg-card shadow-card p-10">
        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-purple">Still confused?</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight">Let's talk on WhatsApp</h2>
        <p className="mt-4 text-muted-foreground">Got a question before you buy? Our team is here to help — no pressure, no bots, just real answers.</p>
        <a href={WHATSAPP} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-7 py-3.5 font-bold hover:bg-[#1ebe5a] transition shadow-lg">
          💬 Message Us Now
        </a>
      </div>
    </section>
  );
}



function FAQ() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-brand-purple uppercase">FAQ</p>
        <h2 className="mt-3 text-center text-4xl md:text-5xl font-black tracking-tight">Frequently asked questions</h2>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0} className="group rounded-2xl border border-border bg-card shadow-card p-6 hover:border-border transition-colors">
              <summary className="cursor-pointer list-none flex justify-between items-center font-semibold text-base md:text-lg">
                {f.q}
                <span className="ml-4 text-2xl text-brand-purple group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-10 text-center text-muted-foreground">
          Still got questions? Drop us a line at <a className="font-semibold text-brand-pink" href="mailto:support@pustikabooks.in">support@pustikabooks.in</a>
        </p>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#1C1C2E] text-white">
      <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <p className="text-lg font-bold text-white">Pustika <span className="text-white/60 text-xs tracking-[0.3em]">BOOKS</span></p>
          <p className="mt-3 text-white/70">© {new Date().getFullYear()} Pustika Books. All rights reserved.</p>
        </div>
        <div>
          <p className="font-semibold text-white mb-3">Contact</p>
          <p className="text-white/70">
            <a href="mailto:support@pustikabooks.in" className="hover:text-white transition">support@pustikabooks.in</a>
          </p>
          <p className="mt-2 text-white/70">
            <a href="https://instagram.com/pustikabooks" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram @pustikabooks</a>
          </p>
        </div>
        <div>
          <p className="font-semibold text-white mb-3">Legal</p>
          <ul className="space-y-2 text-white/70">
            <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="/refund" className="hover:text-white transition">Refund Policy</a></li>
          </ul>
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
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold px-4 py-3 shadow-lg transition"
    >
      <span aria-hidden>💬</span>
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}



function Products() {
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "The Pro Vault",
    description: "Implementation bundle of AI prompts, templates, and a 30-day checklist to launch a digital product.",
    image: "https://pustikabooks.in/pro-vault.jpg",
    brand: { "@type": "Brand", name: "Pustika Books" },
    offers: {
      "@type": "Offer",
      price: "499",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: "https://pustikabooks.in/",
    },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <div className="min-h-screen bg-background text-foreground pb-20 md:pb-0">
      <Helmet>
        <title>Products — The Pro Vault | Pustika Books</title>
        <meta name="description" content="The Pro Vault: AI prompts, templates and a 30-day checklist to launch your digital product in India." />
        <link rel="canonical" href="https://pustikabooks.in/products" />
        <script type="application/ld+json">{JSON.stringify(productLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>
      
      <Header />
      <main>
        <Pricing />
        <Whatsapp />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default Products;
