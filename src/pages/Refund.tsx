export default function Refund() {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16">
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
        <h2 className="mt-8 text-2xl font-bold">Contact</h2>
        <p className="mt-3 leading-relaxed">
          Email{" "}
          <a className="text-brand-pink font-semibold" href="mailto:support@pustikabooks.in">
            support@pustikabooks.in
          </a>{" "}
          and we'll respond within 24 hours.
        </p>
        <p className="mt-10">
          <a href="/" className="text-brand-purple font-semibold">← Back to home</a>
        </p>
      </article>
    </main>
  );
}