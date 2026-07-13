import { CheckCircle2, Mail } from "lucide-react";
import { LayersMark } from "./LayersMark";

const WHAT_WE_LOOK_FOR = [
  "Real production experience, not just lab certifications",
  "Comfort owning a client relationship, not just a ticket queue",
  "Vendor-agnostic thinking — Juniper today, HPE or Cisco tomorrow",
  "Certifications held or in progress (JNCIE, CCIE, PMP, ITILv4, Microsoft Azure, CKAD)",
];

const WHAT_YOU_GET = [
  "Multi-region client exposure across India, USA, and Australia",
  "Support to pursue further certifications",
  "Direct ownership of the systems you deploy — not a hand-off role",
  "A small team where your work is visible, not buried in a queue",
];

const CONTACT_EMAIL = "info@ilayersolutions.com";

export function Careers() {
  return (
    <section
      id="careers"
      className="section-anchor relative overflow-hidden py-24 lg:py-32"
    >
      <LayersMark className="pointer-events-none absolute -left-16 bottom-0 h-auto w-72 -rotate-6 opacity-[0.07]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Join Us
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Build infrastructure that matters
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted">
            We&rsquo;re a small, certified team running real production
            networks for Telecom Operators, ISPs, and Enterprises. We don&rsquo;t
            always have roles formally listed, but we&rsquo;re always looking
            for engineers who want ownership, not just tickets.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface/60 p-8">
            <h3 className="text-lg font-semibold text-foreground">
              What We Look For
            </h3>
            <ul className="mt-6 space-y-3.5">
              {WHAT_WE_LOOK_FOR.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted"
                >
                  <CheckCircle2
                    size={18}
                    className={`mt-0.5 shrink-0 ${i % 2 === 0 ? "text-accent" : "text-accent-2"}`}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-surface/60 p-8">
            <h3 className="text-lg font-semibold text-foreground">
              What You Get
            </h3>
            <ul className="mt-6 space-y-3.5">
              {WHAT_YOU_GET.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted"
                >
                  <CheckCircle2
                    size={18}
                    className={`mt-0.5 shrink-0 ${i % 2 === 0 ? "text-accent-2" : "text-accent"}`}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-xl rounded-3xl border border-border bg-surface/60 p-8 text-center sm:p-10">
          <h3 className="text-xl font-semibold text-foreground">
            Don&rsquo;t see an open role?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Send us your resume and the certifications you hold — we review
            every application personally.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
              "Career enquiry"
            )}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
          >
            <Mail size={16} />
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
