import { useEffect } from "react";
import { Link } from "react-router-dom";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function ThankYouPro() {
  useEffect(() => {
    document.title = "PRO Vault Unlocked — Pustika";
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Purchase", { value: 499, currency: "INR" });
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#05060A] text-white flex items-center justify-center px-6 py-16 font-sans relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(255,200,60,0.18), transparent 60%), radial-gradient(circle at 50% 100%, rgba(212,175,55,0.10), transparent 70%)",
        }}
      />
      <div className="relative max-w-2xl w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8 border border-[#FFD24A]/40 bg-[#FFD24A]/10 shadow-[0_0_60px_rgba(255,210,74,0.4)]">
          <span className="text-4xl">👑</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          <span className="bg-gradient-to-r from-[#FFE8A3] via-[#FFD24A] to-[#C9A227] bg-clip-text text-transparent">
            PRO Vault Unlocked!
          </span>{" "}
          <span className="inline-block">🚀</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed">
          Your complete{" "}
          <span className="text-[#FFD24A] font-semibold">Pustika PRO Bundle + Implementation Toolkit</span>{" "}
          is on its way to your inbox.
        </p>

        <div className="bg-white/5 border border-[#FFD24A]/20 rounded-2xl p-6 mb-10 text-left text-sm text-gray-400">
          <p className="mb-2">
            <span className="text-[#FFD24A] font-semibold">Tip:</span> Check your spam or promotions folder if you don't see it within 5 minutes.
          </p>
          <p>Add our email to your contacts so all your PRO updates land safely in your inbox.</p>
        </div>

        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-[#FFE8A3] via-[#FFD24A] to-[#C9A227] text-black font-bold text-lg px-10 py-4 rounded-full shadow-[0_0_40px_rgba(255,210,74,0.5)] hover:shadow-[0_0_60px_rgba(255,210,74,0.75)] hover:scale-105 transition-all duration-200"
        >
          Return to Homepage
        </Link>
      </div>
    </main>
  );
}