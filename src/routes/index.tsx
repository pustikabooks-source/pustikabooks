import { createFileRoute } from "@tanstack/react-router";
import { CloudUpload, DollarSign, BookOpen, Megaphone, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import ebookMockup from "@/assets/ebook-mockup.png";
import founder from "@/assets/founder.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const CHECKOUT = "https://rzp.io/rzp/deLqOQQa";
const WHATSAPP = "https://wa.me/919662436387";

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

const bonuses = [
  { tag: "BONUS 01", title: "50+ ChatGPT Prompts", body: "Ready-to-use prompts to help you write your entire eBook effortlessly." },
  { tag: "BONUS 02", title: "Private WhatsApp Community", body: "Ask questions, get feedback, and grow with action-takers like you." },
  { tag: "BONUS 03", title: "500 Digital Product Ideas", body: "Instant inspiration with profitable, beginner-friendly product ideas." },
  { tag: "BONUS 04", title: "Money Hustle Ebook", body: "The easiest passive income methods no one talks about." },
];

const valueRows = [
  ["eBook Mastery Guide", "₹4,999"],
  ["50+ ChatGPT Writing Prompts (Bonus)", "₹2,000"],
  ["WhatsApp Support Group (Bonus)", "Priceless"],
  ["500 Digital Product Ideas (Bonus)", "₹2,500"],
  ["Money Hustle Ebook (Bonus)", "₹1,000"],
  ["Lifetime Access", "✅"],
  ["Instant Access", "✅"],
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

function Logo() {
  return (
    <div className="flex flex-col items-center leading-none">
      <span className="font-display text-3xl md:text-4xl font-extrabold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
        Pustika
      </span>
      <span className="text-[10px] tracking-[0.4em] text-muted-foreground mt-1">B O O K S</span>
    </div>
  );
}

function CtaButton({ href = CHECKOUT, children, variant = "primary" }: { href?: string; children: React.ReactNode; variant?: "primary" | "ghost" }) {
  if (variant === "ghost") {
    return (
      <a href={href} className="inline-flex items-center justify-center rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-foreground/70 hover:bg-secondary/80 transition">
        {children}
      </a>
    );
  }
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-gradient-cta px-8 py-3.5 text-sm md:text-base font-bold text-white shadow-glow hover:scale-[1.02] active:scale-100 transition-transform"
    >
      {children}
    </a>
  );
}

function TopBar() {
  return (
    <div className="bg-brand-ink text-white text-center text-sm py-2.5 px-4 font-medium">
      No Upsells. No Hidden Offers. No BS.
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-soft -z-10" />
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <Logo />
          <h1 className="mt-8 text-4xl md:text-6xl font-extrabold leading-[1.05]">
            START EARNING WITH <span className="text-brand-red">EBOOKS IN 30 DAYS!</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/80 max-w-xl">
            Build, Market & Sell Your First eBook — even if you've never written before. Step-by-step guidance. No tech skills needed. Results in 30 days.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton>I'm Ready to Start →</CtaButton>
            <CtaButton variant="ghost">Pass. I Hate Money</CtaButton>
          </div>
          <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[0,1,2,3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-gradient-cta" />
              ))}
            </div>
            <span><b className="text-foreground">10,000+</b> learners already started</span>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-cta opacity-20 blur-3xl rounded-full" />
            <img src={ebookMockup} alt="Ebook Mastery cover" className="relative w-[320px] md:w-[440px] animate-float drop-shadow-2xl" width={1024} height={1024} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm font-bold tracking-widest text-brand-purple uppercase">Tested by thousands. Trusted by learners.</p>
        <h2 className="mt-3 text-center text-3xl md:text-5xl font-extrabold">Now it's your turn.</h2>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border bg-card p-7 shadow-card hover:-translate-y-1 transition-transform">
              <div className="text-4xl">{f.icon}</div>
              <h3 className="mt-4 text-xl font-bold">{f.title}</h3>
              <p className="mt-3 text-foreground/70 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CtaButton>Get Instant Access for ₹279</CtaButton>
        </div>
      </div>
    </section>
  );
}

function Modules() {
  return (
    <section className="py-20 px-6 bg-white text-foreground">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold leading-tight">
          <span className="text-brand-yellow">What You'll Master Inside</span>{" "}
          <span className="text-brand-red">This EBook</span>
        </h2>
        <p className="mt-4 text-center italic text-foreground/70 text-lg">Plan Smart. Create Fast. Sell Like a Pro.</p>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m) => {
            const Icon = m.Icon;
            return (
              <div
                key={m.n}
                className="rounded-2xl bg-card border p-8 text-center shadow-card hover:-translate-y-1 transition-transform"
              >
                <div className="mx-auto w-20 h-20 rounded-full bg-brand-blue flex items-center justify-center shadow-lg ring-4 ring-brand-blue/15">
                  <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="mt-6 text-xl font-extrabold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  {m.title}
                </h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">{m.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Bonuses() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold">
          Unlock Exclusive Bonuses — <span className="text-brand-red">100% FREE</span>
        </h2>
        <p className="mt-4 text-center text-foreground/70">Every order ships with these handpicked bonuses. No upsells. No catch.</p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonuses.map((b) => (
            <div key={b.tag} className="relative rounded-2xl bg-card border p-7 shadow-card">
              <span className="absolute -top-3 left-6 text-xs font-bold tracking-wider px-3 py-1 rounded-full bg-gradient-cta text-white">FREE • {b.tag}</span>
              <h3 className="mt-4 text-xl font-bold">{b.title}</h3>
              <p className="mt-3 text-foreground/70 leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="py-20 px-6 bg-white border-t">
      <div className="mx-auto max-w-5xl grid md:grid-cols-[320px_1fr] gap-10 items-center">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-64 h-80 rounded-3xl overflow-hidden shadow-card bg-gradient-cta p-1">
            <img
              src={founder}
              alt="Arpan Chaudhary, founder of Pustika"
              className="w-full h-full rounded-[1.3rem] object-cover object-center"
              loading="lazy"
            />
          </div>
          <p className="mt-4 text-lg font-bold">Arpan Chaudhary</p>
          <p className="text-sm text-muted-foreground">CEO & Founder, Pustika</p>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold">Why We Created This eBook</h2>
          <p className="mt-5 text-foreground/80 leading-relaxed text-lg">
            We know how confusing it feels when you're starting out — too much advice, not enough real help. That's exactly why we created this book. Not to "sell information," but to share what actually works in simple, clear steps.
          </p>
          <p className="mt-4 text-foreground/80 leading-relaxed text-lg">
            At Pustika, we don't disappear after the sale. We stay connected. You get access to our WhatsApp group where we personally reply, solve doubts, and support you like a friend would.
          </p>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold">All This for the Price of a Pizza 🍕</h2>
        <p className="mt-4 text-foreground/70 text-lg">Seriously. Lifetime access, instant delivery.</p>

        <div className="mt-10 rounded-3xl bg-card border shadow-glow overflow-hidden text-left">
          <div className="bg-brand-ink text-white px-6 py-4 flex justify-between text-sm font-semibold tracking-wide">
            <span>🚀 What You Get</span>
            <span>💰 Value</span>
          </div>
          <ul className="divide-y">
            {valueRows.map(([item, val]) => (
              <li key={item} className="flex justify-between items-center px-6 py-4">
                <span className="text-foreground/80">{item}</span>
                <span className="font-bold">{val}</span>
              </li>
            ))}
          </ul>
          <div className="px-6 py-5 bg-secondary flex justify-between items-center">
            <span className="font-bold">Total Value</span>
            <span className="font-extrabold text-lg line-through opacity-60">₹10,499</span>
          </div>
          <div className="px-6 py-8 bg-gradient-cta text-white text-center">
            <p className="text-sm uppercase tracking-widest opacity-90">🎉 Your Price Today</p>
            <p className="mt-2 text-5xl md:text-6xl font-extrabold">₹279</p>
            <a href={CHECKOUT} className="mt-6 inline-flex items-center justify-center rounded-full bg-white text-foreground px-8 py-4 font-bold hover:bg-white/90 transition">
              🔥 Yes, I Want Instant Access 🔥
            </a>
            <p className="mt-4 text-xs opacity-90">✅ Instant Access • 🔒 100% Secure Payment • 📲 WhatsApp Support</p>
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
            className="flex items-center gap-3 bg-white border rounded-xl shadow-card px-4 py-3 w-[360px] md:w-[480px] shrink-0"
          >
            <div className={`w-9 h-9 rounded-full ${p.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
              {p.initials}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 text-xs text-foreground/60">
                <span className="font-bold text-foreground truncate">{p.sender}</span>
                <span className="px-1.5 py-0.5 bg-secondary rounded text-[10px] font-semibold">Inbox</span>
              </div>
              <p className="mt-1 text-sm truncate">
                <span className="bg-yellow-200 px-1 font-semibold">Payment</span>{" "}
                <span className="text-foreground/80">{p.subject}</span>
              </p>
            </div>
            <div className="flex flex-col items-end shrink-0 gap-1">
              <span className="font-extrabold text-brand-red">{p.amount}</span>
              <span className="text-[10px] text-foreground/50 font-medium">{p.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Proof() {
  return ProofInner();
}

function DashboardCard({ d }: { d: typeof dashboards[0] }) {
  return (
    <div className="rounded-2xl border bg-white shadow-card overflow-hidden text-left w-[340px] md:w-[680px] shrink-0">
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
        <div className="p-6">
          <div className="flex items-center gap-1 text-xs font-semibold text-foreground/60">
            <span>Collected Amount</span>
            <span className="w-3.5 h-3.5 rounded-full border border-foreground/30 inline-flex items-center justify-center text-[8px]">i</span>
          </div>
          <p className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">{d.amount}</p>
          <p className="mt-1 text-xs text-foreground/60">from {d.count} captured payments</p>
          <div className="mt-6 pt-4 border-t">
            <p className="text-xs text-foreground/70">
              Net settlement amount will be deposited as per your{" "}
              <span className="text-blue-600 font-semibold">settlement cycle</span>
            </p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-xs font-semibold text-foreground/60">Split by payment method</p>
          <div className="mt-4 flex items-center gap-6">
            <div
              className="w-24 h-24 md:w-28 md:h-28 rounded-full shrink-0"
              style={{
                background: `conic-gradient(#8B7CF6 0 ${d.upi}%, #D4A574 ${d.upi}% 100%)`,
                mask: "radial-gradient(circle, transparent 50%, black 51%)",
                WebkitMask: "radial-gradient(circle, transparent 50%, black 51%)",
              }}
            />
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#8B7CF6]" />
                <span className="font-semibold">UPI</span>
                <span className="text-foreground/60 ml-2">{d.upi}%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#D4A574]" />
                <span className="font-semibold">Card</span>
                <span className="text-foreground/60 ml-2">{d.card}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 border-t divide-x">
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-700">
              <span className="w-3.5 h-3.5 rounded-full border border-teal-700 inline-flex items-center justify-center text-[8px]">↺</span>
              Refunds
            </div>
            <span className="text-foreground/40">›</span>
          </div>
          <p className="mt-3 text-xl font-extrabold">{d.refunds}</p>
          <p className="mt-1 text-[11px] text-foreground/60">{d.refundsCount}</p>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-600">
              <span>⚠</span> Disputes
            </div>
            <span className="text-foreground/40">›</span>
          </div>
          <p className="mt-3 text-xl font-extrabold">{d.disputes}</p>
          <p className="mt-1 text-[11px] text-foreground/60">{d.disputesNote}</p>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-600">
              <span>⊗</span> Failed
            </div>
            <span className="text-foreground/40">›</span>
          </div>
          <p className="mt-3 text-xl font-extrabold">{d.failed}</p>
          <p className="mt-1 text-[11px] text-foreground/60">{d.failedNote}</p>
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

function ProofInner() {
  return (
    <section className="py-20 px-6 bg-white border-t overflow-hidden">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-brand-red underline decoration-2 underline-offset-4 leading-tight">
          These Aren't Just Emails… They're Sales. And They Could Be Yours.
        </h2>
      </div>
      <div className="mt-12 space-y-4">
        <ProofRow items={proofRows[0]} />
        <ProofRow items={proofRows[1]} reverse />
      </div>
      <div className="mx-auto max-w-6xl text-center mt-14">
        <h3 className="text-3xl md:text-5xl font-extrabold text-brand-red underline decoration-4 underline-offset-8 leading-tight drop-shadow-sm">
          We Made It Happen. Now It's Your Turn.
        </h3>
        <DashboardMarquee />

        <a
          href={CHECKOUT}
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-brand-red px-10 py-5 text-lg md:text-xl font-extrabold text-white shadow-glow hover:scale-[1.02] transition-transform"
        >
          Yes, I Want Sales Like This!
        </a>
      </div>
    </section>
  );
}

function Whatsapp() {
  return (
    <section className="py-16 px-6 bg-white border-t">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm uppercase tracking-widest font-bold text-brand-purple">Still Confused?</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">Let's Talk on WhatsApp</h2>
        <p className="mt-4 text-foreground/70">Got a question before you buy? Our team is here to help — no pressure, no bots, just real answers.</p>
        <a href={WHATSAPP} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-7 py-3.5 font-bold hover:bg-[#1ebe5a] transition">
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
    <section className="py-20 px-6 bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <a
          href={CHECKOUT}
          className="inline-flex items-center justify-center rounded-2xl bg-white border-4 border-brand-red px-12 py-6 text-2xl md:text-3xl font-extrabold text-brand-red shadow-glow hover:scale-[1.02] transition-transform tracking-tight"
        >
          Let's Build My eBook
        </a>
        <h2 className="mt-12 text-4xl md:text-5xl font-extrabold leading-tight">
          Ready to Build Your Passive Income?
        </h2>
        <p className="mt-5 text-brand-red text-lg md:text-xl font-bold">
          There's No Perfect Time — Start Today, Start Small, Start Winning.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 max-w-xl mx-auto">
          <div className="rounded-2xl bg-brand-red text-white py-8 flex items-baseline justify-center gap-2">
            <span className="text-6xl md:text-7xl font-extrabold text-brand-yellow leading-none">{pad(time.m)}</span>
            <span className="text-xl font-semibold">Min</span>
          </div>
          <div className="rounded-2xl bg-brand-red text-white py-8 flex items-baseline justify-center gap-2">
            <span className="text-6xl md:text-7xl font-extrabold text-brand-yellow leading-none">{pad(time.s)}</span>
            <span className="text-xl font-semibold">Sec</span>
          </div>
        </div>
        <p className="mt-8 text-2xl md:text-3xl font-bold text-foreground/80">
          Time's Ticking! Grab Your Copy Before the Offer Ends!
        </p>
        <p className="mt-12 text-base md:text-lg font-bold tracking-wide uppercase text-orange-500">
          Still Confused? Let's Talk on WhatsApp!
        </p>
        <a href={WHATSAPP} className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-[#25D366] text-white px-10 py-5 text-lg font-bold hover:bg-[#1ebe5a] transition">
          <span className="text-2xl">📱</span> Message Us Now
        </a>
        <p className="mt-8 text-foreground/70 max-w-xl mx-auto">
          Got a question before you buy? Our team is here to help — no pressure, no bots, just real answers.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold">Frequently Asked Questions</h2>
        <p className="mt-4 text-center text-foreground/70">Everything you need to know about creating and selling eBooks in India.</p>
        <div className="mt-12 space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border bg-card p-6 shadow-card">
              <summary className="cursor-pointer list-none flex justify-between items-center font-bold text-lg">
                {f.q}
                <span className="ml-4 text-2xl text-brand-purple group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-foreground/70 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-10 text-center text-foreground/70">
          Still got questions? Drop us a line at <a className="font-bold text-brand-purple" href="mailto:support@pustikabooks.in">support@pustikabooks.in</a>
        </p>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 px-6 bg-brand-ink text-white text-center">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-extrabold">Ready to Build Your Passive Income?</h2>
        <p className="mt-4 text-white/70 text-lg">There's no perfect time — start today, start small, start winning.</p>
        <div className="mt-8 flex justify-center">
          <CtaButton>Let's Build My eBook →</CtaButton>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-6 border-t bg-background">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Pustika Books. All rights reserved.</p>
        <p>support@pustikabooks.in</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Hero />
      <Features />
      <Modules />
      <Bonuses />
      <Founder />
      <Proof />
      <Pricing />
      <Whatsapp />
      <UrgencyCTA />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
