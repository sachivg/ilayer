type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

// Pending real content from partners -- deliberately empty rather than
// fabricated. The section renders nothing until this is filled in.
const TESTIMONIALS: Testimonial[] = [];

export function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="border-t border-border bg-surface/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            What Partners Say
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Testimonials
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border bg-surface/60 p-6"
            >
              <p className="text-pretty leading-relaxed text-muted">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-foreground">
                {t.name}
              </p>
              <p className="text-xs text-muted">
                {t.role}, {t.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
