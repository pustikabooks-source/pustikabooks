import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AboutUs() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>About Us | Pustika Books</title>
        <meta name="description" content="Learn about Pustika Books — helping everyday creators to turn their knowledge into income, one eBook at a time." />
        <link rel="canonical" href="https://pustikabooks.in/about" />
      </Helmet>

      {/* Header */}
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span style={{ fontSize: "20px", fontWeight: 800, color: "#191919", letterSpacing: "-0.5px" }}>Pustika</span>
            <span style={{ fontSize: "20px", fontWeight: 700, color: "#7C3AED", letterSpacing: "-0.5px" }}> Books</span>
          </Link>
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
      </header>

      {/* Hamburger Sidebar */}
      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex" }}>
          <div
            style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)" }}
            onClick={() => setMenuOpen(false)}
          />
          <div style={{
            position: "relative", width: "280px", height: "100%",
            background: "white", padding: "32px 24px", display: "flex",
            flexDirection: "column", gap: "0px", zIndex: 10,
            animation: "slideIn 0.2s ease"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
              <span style={{ fontSize: "18px", fontWeight: 800, color: "#191919" }}>Pustika<span style={{ color: "#7C3AED" }}> Books</span></span>
              <button onClick={() => setMenuOpen(false)} style={{ background: "none", border: "none", fontSize: "24px", cursor: "pointer", color: "#191919" }}>×</button>
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <Link to="/blog" onClick={() => setMenuOpen(false)} style={{
                textDecoration: "none", fontSize: "20px", fontWeight: 600,
                color: "#191919", padding: "12px 0", borderBottom: "1px solid #f0f0f0"
              }}>📖 Blog</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)} style={{
                textDecoration: "none", fontSize: "20px", fontWeight: 600,
                color: "#191919", padding: "12px 0", borderBottom: "1px solid #f0f0f0"
              }}>👋 About Us</Link>
              <Link to="/#pricing" onClick={() => setMenuOpen(false)} style={{
                textDecoration: "none", fontSize: "20px", fontWeight: 600,
                color: "#191919", padding: "12px 0", borderBottom: "1px solid #f0f0f0"
              }}>🛒 Products</Link>
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

      {/* Hero */}
<section
  style={{
    background: "linear-gradient(135deg,#f5f3ff 0%,#fdf4ff 100%)",
    padding: "90px 24px",
    position: "relative",
    overflow: "hidden",
  }}
>
  <div
    style={{
      position: "absolute",
      width: "500px",
      height: "500px",
      background: "#7C3AED",
      opacity: 0.08,
      borderRadius: "50%",
      filter: "blur(120px)",
      top: "-180px",
      left: "50%",
      transform: "translateX(-50%)",
    }}
  />

  <div
    style={{
      maxWidth: "760px",
      margin: "0 auto",
      textAlign: "center",
      position: "relative",
      zIndex: 2,
    }}
  >
    <p
      style={{
        fontSize: "12px",
        fontWeight: 700,
        letterSpacing: "4px",
        color: "#7C3AED",
        textTransform: "uppercase",
        marginBottom: "18px",
      }}
    >
      ABOUT PUSTIKA BOOKS
    </p>

    <h1
      style={{
        fontSize: "clamp(36px,7vw,60px)",
        lineHeight: 1.05,
        fontWeight: 900,
        letterSpacing: "-2px",
        color: "#191919",
        marginBottom: "24px",
      }}
    >
      Helping Creators Turn
      <br />
      Knowledge Into
      <span style={{ color: "#7C3AED" }}> Digital Income</span>
    </h1>

    <p
      style={{
        maxWidth: "620px",
        margin: "0 auto",
        fontSize: "19px",
        lineHeight: 1.8,
        color: "#666",
      }}
    >
      Pustika Books creates practical guides, ebooks, digital
      products and educational resources that help creators
      build online income through knowledge, AI and modern
      digital businesses.
    </p>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "16px",
        flexWrap: "wrap",
        marginTop: "42px",
      }}
    >
      <Link
        to="/products"
        style={{
          background: "#7C3AED",
          color: "white",
          padding: "15px 34px",
          borderRadius: "999px",
          textDecoration: "none",
          fontWeight: 700,
        }}
      >
        Explore Products →
      </Link>

      <Link
        to="/blog"
        style={{
          border: "2px solid #7C3AED",
          color: "#7C3AED",
          padding: "15px 34px",
          borderRadius: "999px",
          textDecoration: "none",
          fontWeight: 700,
        }}
      >
        Read Our Blog →
      </Link>
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "12px",
        marginTop: "40px",
      }}
    >
      {[
        "📚 Practical Guides",
        "🌍 Global Audience",
        "🤖 AI Learning",
        "🚀 Beginner Friendly",
      ].map((item) => (
        <span
          key={item}
          style={{
            background: "white",
            border: "1px solid #ececec",
            borderRadius: "999px",
            padding: "10px 18px",
            fontSize: "14px",
            fontWeight: 600,
            boxShadow: "0 4px 12px rgba(0,0,0,.05)",
          }}
        >
          {item}
        </span>
      ))}
    </div>
  </div>
</section>

      {/* What We Do */}
      <section style={{ padding: "80px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "4px", color: "#7C3AED", textTransform: "uppercase", marginBottom: "12px" }}>What We Do</p>
        <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#191919", letterSpacing: "-1px", marginBottom: "48px" }}> Built for creators worldwide.</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
          {[
            {
              icon: "📚",
              title: "Digital Products",
              desc: "We create eBooks, templates, and resource bundles that give creators worldwide an unfair advantage — priced fairly for everyone."
            },
            {
              icon: "🧠",
              title: "Practical Knowledge",
              desc: "No fluff, no theory. Every Pustika product is built around real, actionable steps you can implement today."
            },
            {
              icon: "🚀",
              title: "Creator Education",
              desc: "Through our blog and guides, we teach creators how to package their knowledge, find buyers, and earn consistently online."
            },
          ].map((item) => (
            <div key={item.title} style={{
              padding: "28px", borderRadius: "16px", border: "1px solid #e5e5e5",
              background: "white"
            }}>
              <span style={{ fontSize: "32px" }}>{item.icon}</span>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#191919", margin: "12px 0 8px" }}>{item.title}</h3>
              <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section style={{
        background: "#0F0A1E", padding: "80px 24px", textAlign: "center"
      }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "4px", color: "#A78BFA", textTransform: "uppercase", marginBottom: "16px" }}>Get In Touch</p>
          <h2 style={{ fontSize: "36px", fontWeight: 900, color: "white", letterSpacing: "-1px", marginBottom: "16px" }}>
            We'd love to hear from you.
          </h2>
          <p style={{ fontSize: "16px", color: "#aaa", lineHeight: 1.7, marginBottom: "32px" }}>
            Have a question about our products? Need support with your purchase? Or just want to say hello? Drop us an email and we'll get back to you within 24 hours.
          </p>
          <a
            href="mailto:pustikabooks@gmail.com"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#7C3AED", color: "white", padding: "14px 32px",
              borderRadius: "999px", fontSize: "16px", fontWeight: 700,
              textDecoration: "none"
            }}
          >
            ✉️ pustikabooks@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "24px", textAlign: "center", borderTop: "1px solid #f0f0f0" }}>
        <p style={{ fontSize: "13px", color: "#999" }}>
          © 2026 Pustika Books ·{" "}
          <Link to="/blog" style={{ color: "#7C3AED", textDecoration: "none" }}>Blog</Link>
          {" · "}
          <Link to="/privacy" style={{ color: "#7C3AED", textDecoration: "none" }}>Privacy</Link>
        </p>
      </footer>
    </main>
  );
}
