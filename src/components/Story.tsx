import {
  Globe,
  Layers,
  Shuffle,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";
import { LayersMark } from "./LayersMark";
import { SWATCHES } from "@/lib/swatches";

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

type Milestone = {
  year: string;
  title: string;
  description: string;
};

const JOURNEY: Milestone[] = [
  {
    year: "2023",
    title: "The Idea",
    description:
      "iLayer Solutions starts as an idea — a small team of network engineers convinced that infrastructure, security, and automation shouldn't require three different vendors and three different contracts.",
  },
  {
    year: "2024",
    title: "Takes Shape",
    description:
      "The idea becomes a company. iLayer stands up its founding practice areas and starts serving Telecom Operators, ISPs, and Enterprises across India, USA, and Australia.",
  },
  {
    year: "Since",
    title: "No Stopping Since",
    description:
      "Automation, Training & Consulting, and IT Resourcing join the practice as the team keeps growing — one certified engineer, one client, one region at a time.",
  },
];

type Pillar = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const PILLARS: Pillar[] = [
  {
    icon: Shuffle,
    title: "Vendor-Agnostic",
    description:
      "We design around your business goals, not a single vendor's roadmap — deploying Juniper, HPE, and Cisco wherever each fits best.",
  },
  {
    icon: BadgeCheck,
    title: "Certified Expertise",
    description:
      "A globally certified team — JNCIE, CCIE, PMP, ITILv4, Microsoft Azure, CKAD — with 100+ years of combined experience.",
  },
  {
    icon: Globe,
    title: "Global Delivery",
    description:
      "Boots on the ground across India, USA, and Australia, so support follows your business across time zones.",
  },
  {
    icon: Layers,
    title: "End-to-End Ownership",
    description:
      "From design and deployment through automation, training, and resourcing — one partner across the full lifecycle.",
  },
];

export function Story() {
  return (
    <section
      id="story"
      className="section-anchor relative overflow-hidden bg-surface/30 py-24 lg:py-32"
    >
      <LayersMark className="pointer-events-none absolute -left-20 top-10 h-auto w-72 -rotate-12 opacity-[0.07]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
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

        <div className="mt-20">
          <h3 className="text-center text-sm font-medium uppercase tracking-widest text-muted">
            Since the Beginning
          </h3>
          <div className="relative mx-auto mt-10 max-w-4xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {JOURNEY.map((milestone, i) => {
                const swatch = SWATCHES[i % SWATCHES.length];
                return (
                  <div key={milestone.year} className="relative pl-6">
                    <div className="absolute left-0 top-1 h-full w-px bg-border" />
                    <div
                      className={`absolute -left-[3px] top-1 h-2 w-2 rounded-full ${swatch.dot}`}
                    />
                    <p
                      className={`font-mono text-xs font-semibold uppercase tracking-wider ${swatch.text}`}
                    >
                      {milestone.year}
                    </p>
                    <h4 className="mt-2 text-base font-semibold text-foreground">
                      {milestone.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {milestone.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-center text-sm font-medium uppercase tracking-widest text-muted">
            Reasons to Partner With Us
          </h3>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((pillar, i) => {
              const swatch = SWATCHES[i % SWATCHES.length];
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-border bg-surface/60 p-6"
                >
                  <div
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${swatch.bg} ${swatch.text}`}
                  >
                    <pillar.icon size={20} />
                  </div>
                  <h4 className="mt-4 text-sm font-semibold text-foreground">
                    {pillar.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20">
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
