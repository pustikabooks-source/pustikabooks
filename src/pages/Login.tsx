import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate("/blog");
    }
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <Helmet>
        <title>Login | Pustika Books</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <div className="w-full max-w-sm">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span style={{ fontSize: "20px", fontWeight: 800, color: "#191919" }}>Pustika</span>
          <span style={{ fontSize: "20px", fontWeight: 700, color: "#7C3AED" }}> Books</span>
        </Link>
        <h1 className="mt-8 text-3xl font-black tracking-tight">Welcome back</h1>
        <p className="mt-2 text-muted-foreground">Sign in to manage your blog</p>
        <form onSubmit={handleLogin} className="mt-8 space-y-4">
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
              placeholder="pustikabooks@gmail.com"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-brand-purple px-4 py-3 text-sm font-bold text-white hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          <Link to="/" className="text-brand-purple hover:underline">← Back to site</Link>
        </p>
      </div>
    </main>
  );
}
