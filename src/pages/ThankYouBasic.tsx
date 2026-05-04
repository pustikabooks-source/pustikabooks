import { useEffect } from "react";
import { Link } from "react-router-dom";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function ThankYouBasic() {
  useEffect(() => {
    document.title = "Payment Successful — Pustika";
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Purchase", { value: 279, currency: "INR" });
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#05060A] text-white flex items-center justify-center px-6 py-16 font-sans relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(57,255,20,0.15), transparent 60%), radial-gradient(circle at 50% 100%, rgba(57,255,20,0.08), transparent 70%)",
        }}
      />
      <div className="relative max-w-2xl w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8 border border-[#39FF14]/40 bg-[#39FF14]/10 shadow-[0_0_60px_rgba(57,255,20,0.35)]">
          <span className="text-4xl">✅</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Payment Successful!{" "}
          <span className="inline-block">🎉</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed">
          Your <span className="text-[#39FF14] font-semibold">Pustika Ebook Mastery Guide</span> is being sent to your inbox right now.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 text-left text-sm text-gray-400">
          <p className="mb-2">
            <span className="text-[#39FF14] font-semibold">Tip:</span> Check your spam or promotions folder if you don't see it within 5 minutes.
          </p>
          <p>Add our email to your contacts so future updates land safely in your inbox.</p>
        </div>

        <Link
          to="/"
          className="inline-block bg-[#39FF14] text-black font-bold text-lg px-10 py-4 rounded-full shadow-[0_0_40px_rgba(57,255,20,0.45)] hover:shadow-[0_0_60px_rgba(57,255,20,0.7)] hover:scale-105 transition-all duration-200"
        >
          Return to Homepage
        </Link>
      </div>
    </main>
  );
}