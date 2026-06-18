import { Helmet } from "react-helmet-async";

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
        <h2 className="mt-8 text-2xl font-bold">How we use it</h2>
        <p className="mt-3 leading-relaxed">
          Your information is used to deliver the products you purchase, provide customer
          support, and send transactional emails. We do not sell or rent your data.
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
          <a href="/" className="text-brand-purple font-semibold">← Back to home</a>
        </p>
      </article>
    </main>
  );
}