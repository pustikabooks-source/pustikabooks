import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Refund() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16">
      <Helmet>
        <title>Refund Policy — Pustika Books</title>
        <meta name="description" content="Refund terms for The Pro Vault digital download from Pustika Books, plus how to contact support if something goes wrong." />
        <link rel="canonical" href="https://pustikabooks.in/refund" />
        <meta property="og:title" content="Refund Policy — Pustika Books" />
        <meta property="og:description" content="Refund terms for The Pro Vault digital download from Pustika Books, plus how to contact support if something goes wrong." />
        <meta property="og:url" content="https://pustikabooks.in/refund" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pustika Books" />
        <meta property="og:image" content="https://pustikabooks.in/og-home.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Refund Policy — Pustika Books" />
        <meta name="twitter:description" content="Refund terms for digital downloads from Pustika Books." />
        <meta name="twitter:image" content="https://pustikabooks.in/og-home.jpg" />
      </Helmet>
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-black tracking-tight">Refund Policy</h1>
        <p className="mt-4 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="mt-6 leading-relaxed">
          The Pro Vault is a digital product delivered instantly after payment. Because of the
          nature of digital downloads, all sales are final and we do not offer refunds once
          access has been granted.
        </p>
        <p className="mt-4 leading-relaxed">
          If you experience a technical issue or did not receive your product, please contact us
          within 7 days and we will personally make it right.
        </p>
        <h2 className="mt-8 text-2xl font-bold">When we do issue refunds</h2>
        <p className="mt-3 leading-relaxed">
          We issue a full refund if a duplicate payment was charged for the same order, or if the
          download link never reached you after multiple delivery attempts. In these cases we
          typically process the refund back to the original payment method within 5–7 business days
          through Razorpay.
        </p>
        <h2 className="mt-8 text-2xl font-bold">Before you buy</h2>
        <p className="mt-3 leading-relaxed">
          We want every customer to feel confident before checkout. Please browse our{" "}
          <Link className="text-brand-purple font-semibold" to="/products">products page</Link> for
          full details, sample chapters and pricing. Reading a few of our{" "}
          <Link className="text-brand-purple font-semibold" to="/blog">blog articles</Link> will
          also give you a strong sense of what our guides cover.
        </p>
        <h2 className="mt-8 text-2xl font-bold">Chargebacks</h2>
        <p className="mt-3 leading-relaxed">
          Please reach out to us first before filing a chargeback with your bank. In almost every
          case we can resolve the issue faster over email. Your{" "}
          <Link className="text-brand-purple font-semibold" to="/privacy">privacy is protected</Link>{" "}
          throughout the entire support process.
        </p>
        <h2 className="mt-8 text-2xl font-bold">Contact</h2>
        <p className="mt-3 leading-relaxed">
          Email{" "}
          <a className="text-brand-pink font-semibold" href="mailto:support@pustikabooks.in">
            support@pustikabooks.in
          </a>{" "}
          and we'll respond within 24 hours.
        </p>
        <p className="mt-10">
          <Link to="/" className="text-brand-purple font-semibold">← Back to home</Link>
        </p>
      </article>
    </main>
  );
}