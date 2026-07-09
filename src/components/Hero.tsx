import { ArrowRight, Sparkles } from "lucide-react";

const PILLARS = ["Infrastructure", "Security", "Automation"];

export function Hero() {
  return (
    <section
      id="home"
      className="section-anchor relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32"
    >
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_10%,transparent_70%)]" />
      <div
        aria-hidden
        className="animate-pulse-slow absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent-2/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="absolute right-[-10%] top-[20%] h-[24rem] w-[24rem] rounded-full bg-accent/15 blur-[110px]"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur-sm">
          <Sparkles size={14} className="text-accent" />
          Trusted by Telecom Operators, ISPs & Enterprises
        </div>

        <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Innovating to{" "}
          <span className="text-gradient">Revolutionize Business</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
          Comprehensive infrastructure, security, and automation solutions
          for Telecom Operators, ISPs, and Enterprises — building robust,
          efficient, and secure digital ecosystems.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {PILLARS.map((pillar) => (
            <span
              key={pillar}
              className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-foreground/90"
            >
              {pillar}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
          >
            Explore Solutions
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-surface"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
