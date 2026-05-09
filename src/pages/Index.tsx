import { CloudUpload, DollarSign, BookOpen, Megaphone, Zap, Sparkles, ShieldCheck, Star, Check } from "lucide-react";
import { useEffect, useState } from "react";

const CHECKOUT = "https://rzp.io/rzp/deLqOQQa";
const PRO_CHECKOUT = "https://rzp.io/rzp/0PZ18Xk";
const WHATSAPP = "https://wa.me/919662436387";
const HERO_IMAGE = "/ebook-cover.webp";

const features = [
  { icon: "💸", title: "True Passive Income", body: "Create once, sell forever. Your eBooks keep earning while you sleep, travel, or work on your next project." },
  { icon: "🤑", title: "Zero Startup Costs, High Profit Margins", body: "Start with what you already know. No inventory. No shipping. Earn ₹20,000–₹50,000/month from eBooks that cost nothing to duplicate." },
  { icon: "⚡", title: "Launch in 30 Days or Less", body: "No fluff. No overwhelm. A clear, step-by-step blueprint that gets your first eBook live and earning in 4 weeks — even with a full-time job." },
  { icon: "📈", title: "600 Million+ Hungry Readers in India", body: "From fitness to finance, love to lifestyle — Indians are craving knowledge. Tap into a booming market of digital readers." },
  { icon: "🌍", title: "Work from Anywhere", body: "Home, café, Goa shack, or Himalaya homestay — if you've got Wi-Fi, you've got a business." },
  { icon: "🤝", title: "Real Human Support", body: "Join our WhatsApp community. Real answers from real people, not bots — we stay with you after the sale." },
];

const modules = [
  { n: "01", Icon: CloudUpload, title: "Unlock What's Already Selling", body: "Spot trending topics that Indians are buying like crazy — right now, no guesswork." },
  { n: "02", Icon: DollarSign, title: "Price to Sell, Not to Sit", body: "Smart pricing for low-ticket and high-ticket products that boosts profits without scaring customers." },
  { n: "03", Icon: BookOpen, title: "Create Your eBook Crazy Fast", body: "Plan, write, and format your eBook fast with smart tools like ChatGPT — even if writing isn't your thing." },
  { n: "04", Icon: Megaphone, title: "Sell Smart. Not Spendy.", body: "Use Reels, Stories, and DMs to drive sales — zero ad spend, zero drama." },
  { n: "05", Icon: Zap, title: "Automate the Whole Thing", body: "Set up checkout, delivery and follow-up on autopilot. No coding, no stress." },
];

const faqs = [
  { q: "Do I need to be a professional writer to create an eBook?", a: "Not at all. You just need to know something useful. We'll help you package it like a pro — no fancy writing skills needed." },
  { q: "How will I get my eBook after buying?", a: "Instant delivery straight to your email right after purchase. Quick, simple, no waiting." },
  { q: "Can I actually make money selling eBooks?", a: "Yes, but it's not magic. If you follow the process and take action, you can definitely build a solid income stream." },
  { q: "How much time do I need to invest?", a: "You can start with just a few hours a week. It's designed to fit around your busy life — no need to quit your job." },
  { q: "What makes this different from other eBook courses?", a: "We don't sell fluff. We give you real, step-by-step systems you can actually use — not just random Google tips." },
];

const proofRows = [
  [
    { sender: "Payments", initials: "AS", color: "bg-rose-500",     subject: "Razorpay | Payment successful for QUOTOPIA SOLUTONS PVT LTD", amount: "₹349", time: "11:42 AM" },
    { sender: "Team Razorpay", initials: "RK", color: "bg-blue-500", subject: "Ka-Ching! Payment Received from RAZORPAY SOFTWARE PRIVATE LIMITED", amount: "₹279", time: "10:58 AM" },
    { sender: "Payments", initials: "PV", color: "bg-emerald-500",  subject: "Razorpay | Payment successful for QUOTOPIA SOLUTONS PVT LTD", amount: "₹547", time: "10:21 AM" },
    { sender: "Razorpay Payment", initials: "MK", color: "bg-amber-500", subject: "Successful payment on Payment Page - Get Instant Access to Your eBook!", amount: "₹279", time: "9:47 AM" },
    { sender: "Team Razorpay", initials: "SD", color: "bg-violet-500",  subject: "Ka-Ching! Payment Received from RAZORPAY SOFTWARE PRIVATE LIMITED", amount: "₹279", time: "9:12 AM" },
    { sender: "Payments", initials: "NJ", color: "bg-cyan-500",     subject: "Razorpay | Payment successful for QUOTOPIA SOLUTONS PVT LTD", amount: "₹279", time: "8:34 AM" },
  ],
  [
    { sender: "Razorpay Payment", initials: "TG", color: "bg-pink-500",   subject: "Successful payment on Payment Page - Get Instant Access to Your eBook!", amount: "₹279", time: "Yesterday" },
    { sender: "Payments", initials: "VR", color: "bg-indigo-500",         subject: "Razorpay | Payment successful for QUOTOPIA SOLUTONS PVT LTD", amount: "₹499", time: "Yesterday" },
    { sender: "Team Razorpay", initials: "HK", color: "bg-orange-500",    subject: "Ka-Ching! Payment Received from RAZORPAY SOFTWARE PRIVATE LIMITED", amount: "₹279", time: "Yesterday" },
    { sender: "Payments", initials: "AB", color: "bg-teal-500",           subject: "Razorpay | Payment successful for QUOTOPIA SOLUTONS PVT LTD", amount: "₹279", time: "Apr 27" },
    { sender: "Razorpay Payment", initials: "DM", color: "bg-fuchsia-500",subject: "Successful payment on Payment Page - Get Instant Access to Your eBook!", amount: "₹349", time: "Apr 27" },
    { sender: "Team Razorpay", initials: "KS", color: "bg-lime-600",      subject: "Ka-Ching! Payment Received from RAZORPAY SOFTWARE PRIVATE LIMITED", amount: "₹279", time: "Apr 26" },
  ],
];

const dashboards = [
  { amount: "₹59,540.00", count: 150, upi: 97.24, card: 2.76, refunds: "₹0.00", refundsCount: "0 processed", disputes: "₹0.00", disputesNote: "0 open • 0 under-review", failed: "16", failedNote: "payments" },
  { amount: "₹1,24,870.00", count: 312, upi: 92.50, card: 7.50, refunds: "₹279.00", refundsCount: "1 processed", disputes: "₹0.00", disputesNote: "0 open • 0 under-review", failed: "24", failedNote: "payments" },
  { amount: "₹84,210.00", count: 218, upi: 95.10, card: 4.90, refunds: "₹0.00", refundsCount: "0 processed", disputes: "₹0.00", disputesNote: "0 open • 0 under-review", failed: "11", failedNote: "payments" },
  { amount: "₹2,18,930.00", count: 547, upi: 89.30, card: 10.70, refunds: "₹558.00", refundsCount: "2 processed", disputes: "₹0.00", disputesNote: "0 open • 0 under-review", failed: "38", failedNote: "payments" },
  { amount: "₹47,820.00", count: 124, upi: 98.40, card: 1.60, refunds: "₹0.00", refundsCount: "0 processed", disputes: "₹0.00", disputesNote: "0 open • 0 under-review", failed: "7", failedNote: "payments" },
];

function scrollToPricing(e: React.MouseEvent) {
  e.preventDefault();
  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function GlowButton({ href, onClick, children, className = "" }: { href?: string; onClick?: (e: React.MouseEvent) => void; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-full bg-gradient-cta px-8 py-4 text-base md:text-lg font-bold text-white shadow-glow hover:scale-[1.03] active:scale-100 transition-transform ${className}`}
    >
      <span className="absolute inset-0 rounded-full bg-gradient-cta blur-xl opacity-60 -z-10" />
      {children}
    </a>
  );
}

function TopBar() {
  return (
    <div className="site-topbar">
      ⚡ Instant Delivery · 🔒 Secure Razorpay Checkout · 🚀 100% Beginner Friendly
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-branding">
          <span className="site-brand">Pustika</span>
          <span className="site-brand__label">BOOKS</span>
        </div>
        <a
          href="#pricing"
          onClick={scrollToPricing}
          className="site-header__cta"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-backdrop" />
      <div className="hero-glow" />
      <div className="hero-grid" />

      <div className="hero-shell">
        <div className="hero-badge">
          <Sparkles className="hero-badge__icon" />
          New · Updated for 2026
        </div>

        <h1 className="hero-title">
          You Have Ideas.
          <br />
          <span className="hero-title__gradient">
            Turn Them Into Income in 30 Days.
          </span>
        </h1>

        <p className="hero-subtitle">
          Build, market & sell your first eBook — even if you've never written before. Step-by-step guidance. No tech skills needed.
        </p>

        <div className="hero-actions">
          <a href="#pricing" onClick={scrollToPricing} className="hero-primary-cta">
            Get Started Now →
          </a>
          <div className="hero-proof">
            <div className="hero-avatars">
              {[
                "linear-gradient(135deg, #c084fc, #f472b6)",
                "linear-gradient(135deg, #f472b6, #fb923c)",
                "linear-gradient(135deg, #fb923c, #facc15)",
                "linear-gradient(135deg, #60a5fa, #c084fc)",
              ].map((backgroundImage, i) => (
                <div key={i} className="hero-avatar" style={{ backgroundImage }} />
              ))}
            </div>
            <span className="hero-proof__text">
              <Star className="hero-proof__icon" />
              <span>Trusted by 10,000+ Creators</span>
            </span>
          </div>
        </div>

        <div className="mt-16 max-w-2xl mx-auto text-left rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-7 md:p-9">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Why We Created This eBook</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            We know how confusing it feels when you're starting out — too much advice, not enough real help. That's exactly why we created this book. Not to "sell information," but to share what actually works in simple, clear steps.
          </p>
          <p className="mt-3 text-white/70 leading-relaxed">
            At Pustika, we don't disappear after the sale. We stay connected. You get access to our WhatsApp group where we personally reply, solve doubts, and support you like a friend would.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-12 bg-gradient-cta opacity-30 blur-3xl rounded-full" />
            <img
              src={HERO_IMAGE}
              alt="Ebook Mastery cover"
              width={720}
              height={1080}
              fetchPriority="high"
              decoding="async"
              sizes="(max-width: 768px) 260px, 360px"
              className="hero-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  // Bento layout: vary spans
  const spans = [
    "md:col-span-2 md:row-span-1",
    "md:col-span-1",
    "md:col-span-1",
    "md:col-span-1",
    "md:col-span-1",
    "md:col-span-2",
  ];
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[oklch(0.15_0.04_280)/0.5] to-transparent" />
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-brand-purple uppercase">Tested by thousands · Trusted by learners</p>
        <h2 className="mt-3 text-center text-4xl md:text-6xl font-black tracking-tight">Now it's your turn.</h2>
        <div className="mt-14 grid md:grid-cols-3 auto-rows-fr gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-7 md:p-8 overflow-hidden hover:border-white/20 transition-all hover:-translate-y-1 ${spans[i] ?? ""}`}
            >
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-cta opacity-0 group-hover:opacity-20 blur-3xl transition-opacity" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-cta/20 border border-white/10 text-2xl">
                  {f.icon}
                </div>
                <h3 className="mt-5 text-xl md:text-2xl font-bold tracking-tight">{f.title}</h3>
                <p className="mt-3 text-white/65 leading-relaxed text-[15px]">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Modules() {
  return (
    <section className="py-24 px-6 relative">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-brand-pink uppercase">What You'll Master Inside</p>
        <h2 className="mt-3 text-center text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
          Plan smart. Create fast.
          <br />
          <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">Sell like a pro.</span>
        </h2>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((m) => {
            const Icon = m.Icon;
            return (
              <div
                key={m.n}
                className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-md p-7 hover:border-white/20 transition-all hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-4 right-5 text-5xl font-black text-white/[0.06] tracking-tighter">{m.n}</div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-cta flex items-center justify-center shadow-glow">
                    <Icon className="w-7 h-7 text-white" strokeWidth={2.4} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-tight">{m.title}</h3>
                  <p className="mt-3 text-white/65 leading-relaxed text-[15px]">{m.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="relative py-24 px-5 md:px-8 scroll-mt-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[oklch(0.15_0.06_290)/0.4] to-transparent" />
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-brand-purple uppercase">Pricing</p>
        <h2 className="mt-3 text-4xl md:text-6xl font-black text-center tracking-tight leading-[1.05]">
          Ready to turn your idea
          <br />
          <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">into income?</span>
        </h2>
        <p className="mt-5 text-lg text-center text-white/65 max-w-2xl mx-auto">
          Choose the package that best fits your goals and skip weeks of frustration.
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-6 items-stretch">
          {/* Basic */}
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8 flex flex-col hover:border-white/20 transition-colors">
            <h3 className="text-2xl font-bold">Basic Package</h3>
            <p className="text-white/60 mt-1.5">The comprehensive roadmap to ebook success.</p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5 flex items-end justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-widest text-white/50">Regular value</p>
                <p className="text-sm font-semibold text-white/70 line-through">Rs. 10,499</p>
              </div>
              <div className="text-right">
                <p className="text-5xl font-black tracking-tight">Rs. 279</p>
                <p className="text-[11px] text-white/50">One-time payment</p>
              </div>
            </div>

            <ul className="mt-7 space-y-3.5 flex-grow">
              {[
                "E-book Mastery Guide (Full Step-by-Step Main Guide)",
                "Private WhatsApp Support Group Access",
                "Lifetime Updates",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-white/85">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-brand-purple/20 border border-brand-purple/40 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-brand-purple" strokeWidth={3} />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <a
              href={CHECKOUT}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block w-full text-center rounded-full border border-white/15 bg-white/95 text-[oklch(0.30_0.15_290)] font-bold text-base md:text-lg py-4 hover:bg-white transition"
            >
              Get Basic Access Now 🔥
            </a>
            <p className="text-[11px] text-center mt-3 text-white/50">🔒 100% Secure Payment · Instant Delivery</p>
          </div>

          {/* PRO */}
          <div className="relative rounded-3xl p-[1.5px] bg-gradient-to-b from-brand-purple via-brand-pink to-brand-purple shadow-glow md:-translate-y-3">
            <div className="absolute -inset-6 bg-gradient-cta opacity-25 blur-3xl rounded-3xl -z-10" />
            <div className="relative rounded-[calc(1.5rem-1.5px)] bg-[oklch(0.13_0.04_280)] p-8 flex flex-col h-full">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-cta px-4 py-1.5 text-[11px] font-bold tracking-wider text-white uppercase shadow-glow">
                <Sparkles className="w-3 h-3" /> Most Popular · Save 50%
              </div>

              <h3 className="text-2xl font-bold mt-2">The PRO Bundle</h3>
              <p className="text-white/60 mt-1.5">Includes the eBook + the complete implementation toolkit.</p>

              <div className="mt-6 rounded-2xl border border-brand-purple/30 bg-black/40 p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-brand-pink">Total Value</p>
                    <p className="text-sm font-semibold text-white/50 line-through">Rs. 4,999</p>
                  </div>
                  <div className="text-right">
                    <p className="text-5xl font-black tracking-tight bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">Rs. 499</p>
                    <p className="text-[11px] text-brand-pink font-semibold">Founder’s Launch Offer — One-Time Payment</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-white/75 leading-relaxed border-t border-brand-purple/20 pt-3">
                  Invest in your future for less than the cost of 2 pizzas. <span className="text-brand-pink font-semibold">Lifetime access included.</span>
                </p>
              </div>

              <ul className="mt-7 space-y-3.5 flex-grow">
                <li className="flex items-start gap-3 font-semibold text-brand-pink">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-gradient-cta flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                  <span>EVERYTHING in the Basic Package, PLUS:</span>
                </li>
                {[
                  { text: "10+ Ebook Design Inspiration Templates (PDF)" },
                  { text: "Complete AI Prompt Library (50+ ChatGPT eBook Prompts)", value: "Rs. 999" },
                  { text: "500+ Digital Product Ideas for Instant Inspiration" },
                  { text: "30-Day First Sale Launch Checklist (Day-by-day roadmap)", value: "Rs. 1,499" },
                  { text: "100+ High-Converting Headline Formulas for IG/FB" },
                  { text: "Money Hustle E-book (Passive Income Methods)" },
                  { text: "Curated Indian Niche Research Guide (50+ Trending Niches)" },
                ].map(({ text: t, value }) => (
                  <li key={t} className="flex items-start gap-3 text-white/85">
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
                Get The PRO Bundle Now 🚀
              </a>
              <p className="text-[11px] text-center mt-3 text-white/50">🔒 100% Secure Payment · Instant Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofRow({ items, reverse = false }: { items: typeof proofRows[0]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-4 w-max ${reverse ? "animate-marquee-slow" : "animate-marquee"}`}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {doubled.map((p, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-white/[0.04] border border-white/10 backdrop-blur-md rounded-2xl px-4 py-3 w-[340px] md:w-[460px] shrink-0"
          >
            <div className={`w-9 h-9 rounded-full ${p.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
              {p.initials}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 text-xs text-white/55">
                <span className="font-bold text-white/90 truncate">{p.sender}</span>
                <span className="px-1.5 py-0.5 bg-white/10 rounded text-[10px] font-semibold">Inbox</span>
              </div>
              <p className="mt-1 text-sm truncate text-white/75">
                <span className="bg-brand-yellow/30 text-brand-yellow px-1 font-semibold rounded">Payment</span>{" "}
                {p.subject}
              </p>
            </div>
            <div className="flex flex-col items-end shrink-0 gap-1">
              <span className="font-extrabold text-brand-pink">{p.amount}</span>
              <span className="text-[10px] text-white/45 font-medium">{p.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardCard({ d }: { d: typeof dashboards[0] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md overflow-hidden text-left w-[340px] md:w-[680px] shrink-0">
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
        <div className="p-6">
          <p className="text-xs font-semibold text-white/55">Collected Amount</p>
          <p className="mt-3 text-3xl md:text-4xl font-black tracking-tight">{d.amount}</p>
          <p className="mt-1 text-xs text-white/55">from {d.count} captured payments</p>
        </div>
        <div className="p-6">
          <p className="text-xs font-semibold text-white/55">Split by payment method</p>
          <div className="mt-4 flex items-center gap-6">
            <div
              className="w-24 h-24 rounded-full shrink-0"
              style={{
                background: `conic-gradient(oklch(0.70 0.27 295) 0 ${d.upi}%, oklch(0.72 0.28 345) ${d.upi}% 100%)`,
                mask: "radial-gradient(circle, transparent 50%, black 51%)",
                WebkitMask: "radial-gradient(circle, transparent 50%, black 51%)",
              }}
            />
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-purple" />
                <span className="font-semibold">UPI</span>
                <span className="text-white/55 ml-2">{d.upi}%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-pink" />
                <span className="font-semibold">Card</span>
                <span className="text-white/55 ml-2">{d.card}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardMarquee() {
  const doubled = [...dashboards, ...dashboards];
  return (
    <div className="mt-10 -mx-6 overflow-hidden">
      <div className="flex gap-6 w-max animate-marquee-slow px-6">
        {doubled.map((d, i) => (
          <DashboardCard key={i} d={d} />
        ))}
      </div>
    </div>
  );
}

function Proof() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-brand-pink uppercase">Real receipts</p>
        <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight leading-[1.1]">
          These aren't just emails. <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">They're sales.</span>
        </h2>
      </div>
      <div className="mt-12 space-y-4">
        <ProofRow items={proofRows[0]} />
        <ProofRow items={proofRows[1]} reverse />
      </div>
      <div className="mx-auto max-w-6xl text-center mt-16">
        <h3 className="text-3xl md:text-5xl font-black tracking-tight">We made it happen. Now it's your turn.</h3>
        <DashboardMarquee />
        <div className="mt-12 flex justify-center">
          <GlowButton href="#pricing" onClick={scrollToPricing}>
            Yes, I Want Sales Like This! →
          </GlowButton>
        </div>
      </div>
    </section>
  );
}

function Whatsapp() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-2xl text-center rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-10">
        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-purple">Still confused?</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight">Let's talk on WhatsApp</h2>
        <p className="mt-4 text-white/65">Got a question before you buy? Our team is here to help — no pressure, no bots, just real answers.</p>
        <a href={WHATSAPP} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-7 py-3.5 font-bold hover:bg-[#1ebe5a] transition shadow-lg">
          💬 Message Us Now
        </a>
      </div>
    </section>
  );
}

function UrgencyCTA() {
  const [time, setTime] = useState({ m: 9, s: 36 });
  useEffect(() => {
    const id = setInterval(() => {
      setTime((t) => {
        const total = t.m * 60 + t.s - 1;
        if (total <= 0) return { m: 9, s: 59 };
        return { m: Math.floor(total / 60), s: total % 60 };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => n.toString().padStart(2, "0");
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tight">
          Ready to build your <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">passive income?</span>
        </h2>
        <p className="mt-5 text-lg text-white/65">There's no perfect time — start today, start small, start winning.</p>

        <div className="mt-10 grid grid-cols-2 gap-4 max-w-md mx-auto">
          {[{ v: pad(time.m), l: "Min" }, { v: pad(time.s), l: "Sec" }].map((c) => (
            <div key={c.l} className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md py-7 flex items-baseline justify-center gap-2">
              <span className="text-5xl md:text-6xl font-black text-brand-yellow leading-none tabular-nums">{c.v}</span>
              <span className="text-base font-semibold text-white/70">{c.l}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <GlowButton href="#pricing" onClick={scrollToPricing}>Let's Build My eBook →</GlowButton>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-brand-purple uppercase">FAQ</p>
        <h2 className="mt-3 text-center text-4xl md:text-5xl font-black tracking-tight">Frequently asked questions</h2>
        <div className="mt-12 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 hover:border-white/20 transition-colors">
              <summary className="cursor-pointer list-none flex justify-between items-center font-semibold text-base md:text-lg">
                {f.q}
                <span className="ml-4 text-2xl text-brand-purple group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-white/65 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-10 text-center text-white/65">
          Still got questions? Drop us a line at <a className="font-semibold text-brand-pink" href="mailto:support@pustikabooks.in">support@pustikabooks.in</a>
        </p>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-cta opacity-15 blur-3xl" />
      <div className="mx-auto max-w-3xl text-center rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-10 md:p-14">
        <ShieldCheck className="mx-auto w-10 h-10 text-brand-pink" />
        <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight">Ready to build your passive income?</h2>
        <p className="mt-4 text-white/70 text-lg">There's no perfect time — start today, start small, start winning.</p>
        <div className="mt-8 flex justify-center">
          <GlowButton href="#pricing" onClick={scrollToPricing}>Let's Build My eBook →</GlowButton>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/10">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/55">
        <p>© {new Date().getFullYear()} Pustika Books. All rights reserved.</p>
        <p>support@pustikabooks.in</p>
      </div>
    </footer>
  );
}

function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-50 p-3 backdrop-blur-xl bg-background/80 border-t border-white/10">
      <a
        href="#pricing"
        onClick={scrollToPricing}
        className="block w-full text-center rounded-full bg-gradient-cta text-white font-bold py-3.5 shadow-glow"
      >
        Get Instant Access →
      </a>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-20 md:pb-0">
      <TopBar />
      <Header />
      <Hero />
      <Features />
      <Modules />
      <Proof />
      <Pricing />
      <Whatsapp />
      <UrgencyCTA />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

export default Index;
