import {
  Globe,
  Layers,
  Shuffle,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

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
    year: "2015",
    title: "Founded in Delhi",
    description:
      "iLayer Solutions is born, built on Juniper networking expertise and a mission to deliver infrastructure that regional ISPs and enterprises could actually rely on.",
  },
  {
    year: "2018",
    title: "Opens in the USA",
    description:
      "A Gilroy, California office extends our reach across North America, adding strategic cloud migration and management to the practice.",
  },
  {
    year: "2021",
    title: "Expands to Australia",
    description:
      "Sydney and Melbourne teams stand up dedicated Cyber Security and Automation units, broadening what a single partner can own end-to-end.",
  },
  {
    year: "Today",
    title: "Full-lifecycle partner",
    description:
      "Infra, Cloud, Security, Backup, Automation, Training, and IT Resourcing under one roof — delivered by a globally certified team across three continents.",
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

        <div className="mt-20">
          <h3 className="text-center text-sm font-medium uppercase tracking-widest text-muted">
            Since the Beginning
          </h3>
          <div className="relative mx-auto mt-10 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {JOURNEY.map((milestone) => (
                <div key={milestone.year} className="relative pl-6">
                  <div className="absolute left-0 top-1 h-full w-px bg-border" />
                  <div className="absolute -left-[3px] top-1 h-2 w-2 rounded-full bg-gradient-to-br from-accent to-accent-2" />
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                    {milestone.year}
                  </p>
                  <h4 className="mt-2 text-base font-semibold text-foreground">
                    {milestone.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-center text-sm font-medium uppercase tracking-widest text-muted">
            Reasons to Partner With Us
          </h3>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-border bg-surface/60 p-6"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent">
                  <pillar.icon size={20} />
                </div>
                <h4 className="mt-4 text-sm font-semibold text-foreground">
                  {pillar.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {pillar.description}
                </p>
              </div>
            ))}
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
