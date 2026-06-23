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
    <section id="pricing" className="relative py-20 px-5 md:px-8 scroll-mt-20">
      <div className="absolute inset-0 -z-10 bg-[#F4F0E8]" />
      <div className="max-w-6xl mx-w-md">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-brand-purple uppercase">Pricing</p>
        <h2 className="mt-3 text-4xl md:text-6xl font-black text-center tracking-tight leading-[1.05]">
          "Unlock everything you need"
          
          <br />
          
        </h2>
        <p className="mt-5 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
          "One simple price for lifetime access to the entire vault. Get started in seconds."
          
        </p>
{/* EBOOK BUNDLE SECTION */}
<div className="mt-12 mb-16 flex flex-col items-center">
  <p className="text-xs font-semibold tracking-[0.2em] text-brand-purple uppercase mb-2">
    EBOOK COLLECTION
  </p>
  <h2 className="text-3xl font-black text-center text-foreground mb-2">
    One Bundle. Four Books. Zero Excuses.
  </h2>
  <p className="text-muted-foreground text-center max-w-md mb-8">
    Everything you need to earn money, build a business, and master 
    your finances — all in one place for less than the price of a meal.
  </p>

  <div className="relative rounded-3xl p-[1.5px] bg-gradient-to-b from-brand-purple via-brand-pink to-brand-purple w-full max-w-sm">
    <div className="relative rounded-[calc(1.5rem-1.5px)] bg-card p-8 flex flex-col shadow-card">
      
      {/* Badge */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-cta px-4 py-1">
        <span className="text-white text-xs font-semibold">
          🔥 LIMITED OFFER — 68% OFF
        </span>
      </div>

      <h3 className="text-2xl font-bold mt-2">
        Pustika Ebook Bundle
      </h3>
      <p className="text-muted-foreground mt-1 text-sm">
        4 Bestselling Ebooks · Instant PDF Delivery
      </p>

      {/* Price */}
      <div className="mt-6 rounded-2xl border border-brand-purple/30 bg-[#F4F0E8] p-5">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-brand-pink">
              Bundle Price
            </p>
            <p className="text-sm font-semibold text-muted-foreground line-through">
              Rs. 795
            </p>
          </div>
          <div className="text-right">
            <p className="text-5xl font-black tracking-tight bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
              ₹249
            </p>
            <p className="text-[11px] text-green-600 font-semibold">
              You save ₹546 today
            </p>
          </div>
        </div>
      </div>

      {/* Ebooks List */}
      <ul className="mt-7 space-y-3 flex-grow">
        {[
          { emoji: "📘", title: "Paisa Samjho, Zindagi Badlo", desc: "Master money & invest smarter" },
          { emoji: "💻", title: "Digital Products Guide", desc: "Create & sell digital products online" },
          { emoji: "🚀", title: "Startup from Zero", desc: "Launch your first Indian business" },
          { emoji: "💰", title: "Money Hustle", desc: "Side income strategies for Indians" },
        ].map(({ emoji, title, desc }) => (
          <li key={title} className="flex items-start gap-3">
            <span className="text-xl">{emoji}</span>
            <span>
              <p className="text-sm font-semibold text-foreground">{title}</p>
              <p className="text-[11px] text-muted-foreground">{desc}</p>
            </span>
          </li>
        ))}
      </ul>

      {/* Tagline */}
      <p className="mt-6 text-center text-sm italic text-muted-foreground">
        "Read once. Apply forever. Start earning sooner."
      </p>

      {/* CTA Button */}
      <a
  href="https://rzp.io/rzp/Ih78kMZ"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 block w-full text-center rounded-full bg-gradient-cta text-white font-extrabold text-base py-4"
      >
        Get All 4 Ebooks — ₹249 →
      </a>
<a
  href="https://www.paypal.com/ncp/payment/JF7TS5GTBNAYJ"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-3 block w-full text-center rounded-full py-4 text-base font-extrabold text-white"
  style={{ background: "#0070BA" }}
>
  Buy with PayPal — $4.99 →
</a>
<p className="text-[11px] text-center mt-2 text-muted-foreground">
  🇮🇳 Indian buyers pay in ₹ via Razorpay · 🌍 International buyers pay in $ via PayPal
</p>
      <p className="text-[11px] text-center mt-3 text-muted-foreground">
        🔒 Instant PDF Delivery · Secure Razorpay · One-time payment
      </p>

    </div>
  </div>
</div>
{/* END EBOOK BUNDLE SECTION */}
        <div className="mt-14 flex justify-center items-stretch">
          

          {/* PRO */}
          <div className="order-1 relative rounded-3xl p-[1.5px] bg-gradient-to-b from-brand-purple via-brand-pink to-brand-purple shadow-glow md:-translate-y-3">
            <div className="absolute -inset-6 bg-gradient-cta opacity-25 blur-3xl rounded-3xl -z-10" />
            <div className="relative rounded-[calc(1.5rem-1.5px)] bg-card p-8 flex flex-col h-full shadow-card">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-cta px-4 py-1.5 text-[11px] font-bold tracking-wider text-white uppercase shadow-glow">
                <Sparkles className="w-3 h-3" /> Most Popular · Save 50%
              </div>

              <h3 className="text-2xl font-bold mt-2">The Pro Vault</h3>
              <p className="text-muted-foreground mt-1.5">Your complete all-in-one implementation toolkit.</p>

              <div className="mt-6 rounded-2xl border border-brand-purple/30 bg-[#F4F0E8] p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-brand-pink">Total Value</p>
                    <p className="text-sm font-semibold text-muted-foreground line-through">Rs. 10,499</p>
                  </div>
                  <div className="text-right">
                    <p className="text-5xl font-black tracking-tight bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">Rs. 499</p>
                    <p className="text-[11px] text-brand-pink font-semibold">Founder’s Launch Offer — One-Time Payment</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed border-t border-brand-purple/20 pt-3">
                  Invest in your future for less than the cost of 1 pizzas. <span className="text-brand-pink font-semibold">Lifetime access included.</span>
                </p>
              </div>

              <ul className="mt-7 space-y-3.5 flex-grow">
                {[
                  { text: "10+ Ebook Design Inspiration Templates (PDF)" },
                  { text: "Complete AI Prompt Library (50+ ChatGPT eBook Prompts)", value: "Rs. 999" },
                  { text: "500+ Digital Product Ideas for Instant Inspiration" },
                  { text: "30-Day First Sale Launch Checklist (Day-by-day roadmap)", value: "Rs. 1,499" },
                  { text: "100+ High-Converting Headline Formulas for IG/FB" },
                  { text: "E-Book Mastery Guide", value:"Rs. 2000" },
                  { text: "Curated Indian Niche Research Guide (50+ Trending Niches)" },
                ].map(({ text: t, value }) => (
                  <li key={t} className="flex items-start gap-3 text-foreground">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-brand-pink/15 border border-brand-pink/40 flex items-center justify-center shrink-0">
                      <Sparkles className="w-3 h-3 text-brand-pink" />
                    </span>
                    <span>
                      {t}
                      {value && (
                        <span className="ml-1.5 text-[11px] font-semibold text-brand-pink/90">(Value: {value})</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={PRO_CHECKOUT}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full text-center rounded-full bg-gradient-cta text-white font-extrabold text-base md:text-lg py-4 shadow-glow hover:scale-[1.02] transition-transform"
              >
                Get Pro Vault Now 🚀
              </a>
              <a
  href="https://www.paypal.com/ncp/payment/V6FXA4TBLT39J"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-3 block w-full text-center rounded-full py-4 text-base font-extrabold text-white"
  style={{ background: "#0070BA" }}
>
  Buy with PayPal — $8.99 →
</a>
<p className="text-[11px] text-center mt-2 text-muted-foreground">
  🇮🇳 Indian buyers pay in ₹ via Razorpay · 🌍 International buyers pay in $ via PayPal
</p>
              <p className="text-[11px] text-center mt-3 text-muted-foreground">🔒 100% Secure Payment · Instant Delivery</p>
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
