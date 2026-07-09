const CERTIFICATIONS = [
  "JNCIE",
  "CCIE",
  "JNCIS",
  "JNCIP",
  "CCIP",
  "PMP",
  "ITILv4",
  "Microsoft Azure",
  "CKAD",
];

export function Story() {
  return (
    <section
      id="story"
      className="section-anchor bg-surface/30 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Our Story
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            About Us
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted">
            With 100+ years of combined experience and a team of globally
            certified engineers, we specialise in Broadband, Juniper
            solutions, and Network Automation across India, USA, and
            Australia.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-center text-sm font-medium uppercase tracking-widest text-muted">
            Key Certifications
          </h3>
          <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-3">
            {CERTIFICATIONS.map((cert) => (
              <span
                key={cert}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground/90"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
