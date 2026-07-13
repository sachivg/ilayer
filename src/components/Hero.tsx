import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { LayersMark } from "./LayersMark";

const PILLARS = ["Infrastructure", "Security", "Automation"];

export function Hero() {
  return (
    <section
      id="home"
      className="section-anchor relative overflow-hidden pt-36 pb-20 lg:pt-40 lg:pb-24"
    >
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_10%,transparent_70%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-8">
        <div className="text-center lg:text-left">
          <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur-sm lg:mx-0">
            <Sparkles size={14} className="text-accent" />
            Trusted by Telecom Operators, ISPs & Enterprises
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Innovating to{" "}
            <span className="text-gradient">Revolutionize Business</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
            Comprehensive infrastructure, security, and automation solutions
            for Telecom Operators, ISPs, and Enterprises — building robust,
            efficient, and secure digital ecosystems.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            {PILLARS.map((pillar) => (
              <span
                key={pillar}
                className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-foreground/90"
              >
                {pillar}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
            >
              Explore Solutions
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-surface"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="relative hidden justify-self-center lg:flex">
          <div
            aria-hidden
            className="animate-pulse-slow absolute inset-0 m-auto h-64 w-64 rounded-full bg-accent-2/10 blur-[100px]"
          />
          <LayersMark className="relative h-auto w-72 drop-shadow-[0_0_60px_rgba(255,138,61,0.12)]" />
        </div>
      </div>
    </section>
  );
}
