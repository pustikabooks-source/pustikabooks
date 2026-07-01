import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16">
      <Helmet>
        <title>Privacy Policy — Pustika Books</title>
        <meta name="description" content="How Pustika Books collects, uses, and protects your information when you purchase The Pro Vault." />
        <link rel="canonical" href="https://pustikabooks.in/privacy" />
        <meta property="og:title" content="Privacy Policy — Pustika Books" />
        <meta property="og:description" content="How Pustika Books collects, uses, and protects your information when you purchase The Pro Vault." />
        <meta property="og:url" content="https://pustikabooks.in/privacy" />
      </Helmet>
      <article className="mx-auto max-w-3xl prose prose-neutral">
        <h1 className="text-4xl font-black tracking-tight">Privacy Policy</h1>
        <p className="mt-4 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="mt-6 leading-relaxed">
          Pustika Books ("we", "us", "our") respects your privacy. This policy explains what
          information we collect when you purchase or interact with our digital products and how
          we use it.
        </p>
        <h2 className="mt-8 text-2xl font-bold">Information we collect</h2>
        <p className="mt-3 leading-relaxed">
          We collect your name, email address, and payment details (processed securely by
          Razorpay). We do not store full card or banking information on our servers.
        </p>
        <p className="mt-3 leading-relaxed">
          We also collect basic analytics (page views, device type, referrer) using cookies and
          Meta Pixel so we can understand what content is useful and improve our{" "}
          <Link className="text-brand-purple font-semibold" to="/products">products</Link> and{" "}
          <Link className="text-brand-purple font-semibold" to="/blog">blog articles</Link>. You can
          opt out at any time using your browser's privacy controls.
        </p>
        <h2 className="mt-8 text-2xl font-bold">How we use it</h2>
        <p className="mt-3 leading-relaxed">
          Your information is used to deliver the products you purchase, provide customer
          support, and send transactional emails. We do not sell or rent your data.
        </p>
        <h2 className="mt-8 text-2xl font-bold">Third-party services</h2>
        <p className="mt-3 leading-relaxed">
          We use trusted providers to run the website: Razorpay for payments, Brevo for email
          delivery, Meta Pixel for advertising analytics, and Vercel for hosting. Each provider
          handles data according to their own privacy policies. We share only what's required to
          deliver your purchase or send emails you have opted into.
        </p>
        <h2 className="mt-8 text-2xl font-bold">Data retention & your rights</h2>
        <p className="mt-3 leading-relaxed">
          We keep order and email records for as long as required for tax, accounting, and
          customer-support purposes. You can request a copy or deletion of your personal data at
          any time by emailing support. Read our{" "}
          <Link className="text-brand-purple font-semibold" to="/refund">refund policy</Link> for
          details on order-related requests, or visit our{" "}
          <Link className="text-brand-purple font-semibold" to="/about">about page</Link> to learn
          more about who we are.
        </p>
        <h2 className="mt-8 text-2xl font-bold">Contact</h2>
        <p className="mt-3 leading-relaxed">
          Questions? Email{" "}
          <a className="text-brand-pink font-semibold" href="mailto:support@pustikabooks.in">
            support@pustikabooks.in
          </a>
          .
        </p>
        <p className="mt-10">
          <Link to="/" className="text-brand-purple font-semibold">← Back to home</Link>
        </p>
      </article>
    </main>
  );
}