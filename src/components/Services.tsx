"use client";

import { useState } from "react";
import {
  Server,
  Cloud,
  ShieldCheck,
  DatabaseBackup,
  Workflow,
  GraduationCap,
  Users,
  Check,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  includes: string[];
  benefits: string[];
};

const SERVICES: Service[] = [
  {
    icon: Server,
    title: "Infra Solutions",
    description:
      "Campus and data centre solutions powered by Juniper, HPE, and Cisco — from physical design to logical architecture across all network layers.",
    includes: [
      "Physical & logical network design",
      "Multi-vendor deployment (Juniper, HPE, Cisco)",
      "Campus & data centre architecture",
    ],
    benefits: [
      "Vendor-agnostic expertise",
      "Architecture built for scale",
      "Reduced deployment risk",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Strategic cloud migration and management across Azure and AWS platforms — ensuring scalability, reliability, and cost-efficiency for your workloads.",
    includes: [
      "Cloud migration strategy & execution",
      "Azure & AWS platform management",
      "Workload optimisation & rightsizing",
    ],
    benefits: [
      "Lower total cost of ownership",
      "Elastic scalability on demand",
      "Improved workload reliability",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    description:
      "Comprehensive security strategy including Next-Gen Firewalls, SASE, CASB, Posture Management, ISO, SOC2, GRC and Security Frameworks.",
    includes: [
      "Next-Gen Firewall & SASE deployment",
      "CASB & security posture management",
      "ISO, SOC2 & GRC framework alignment",
    ],
    benefits: [
      "Reduced attack surface",
      "Audit-ready compliance posture",
      "Continuous threat visibility",
    ],
  },
  {
    icon: DatabaseBackup,
    title: "Data Backup Solutions",
    description:
      "Enterprise-grade backup and disaster recovery solutions with Veeam and Barracuda — protecting critical business data with reliable redundancy.",
    includes: [
      "Veeam & Barracuda backup deployment",
      "Disaster recovery planning",
      "Redundant, tested restore paths",
    ],
    benefits: [
      "Minimised data-loss risk",
      "Faster recovery time objectives",
      "Business continuity assurance",
    ],
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "Network automation solutions that optimise time-to-adoption, boost operational efficiency, and deliver autonomous network management capabilities.",
    includes: [
      "Network automation tooling",
      "Autonomous management workflows",
      "Faster change & provisioning cycles",
    ],
    benefits: [
      "Reduced manual operations overhead",
      "Faster time-to-adoption",
      "Fewer configuration errors",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training & Consulting",
    description:
      "Expert training and team development, coaching and mentoring for CXO, leadership and senior executives — empowering your workforce.",
    includes: [
      "CXO & leadership coaching",
      "Team upskilling programs",
      "Executive mentoring engagements",
    ],
    benefits: [
      "Stronger internal capability",
      "Better-informed leadership decisions",
      "Long-term team empowerment",
    ],
  },
  {
    icon: Users,
    title: "IT Resourcing",
    description:
      "Skilled IT professionals placed on-site or remote — contract, contract-to-hire, and permanent placement to fill critical skills gaps fast.",
    includes: [
      "Contract & contract-to-hire placements",
      "Permanent & direct-hire recruitment",
      "Pre-vetted engineers across network, cloud & security",
    ],
    benefits: [
      "Faster time-to-fill for critical roles",
      "Certified, project-ready talent",
      "Flexible engagement models",
    ],
  },
];

export function Services() {
  const [active, setActive] = useState(0);
  const service = SERVICES[active];

  return (
    <section id="services" className="section-anchor py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            What We Deliver
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Solutions built for scale, security, and speed
          </h2>
          <p className="mt-4 text-muted">
            Seven focused practice areas covering the full lifecycle of your
            network — from design through automation, backed by the people to
            run it.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap items-end justify-center gap-1.5">
          {SERVICES.map((s, i) => {
            const isActive = i === active;
            return (
              <button
                key={s.title}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={`relative z-10 flex shrink-0 items-center gap-2 whitespace-nowrap rounded-t-xl border px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "-mb-px border-border border-b-surface bg-surface text-foreground"
                    : "border-border/50 bg-surface/20 text-muted hover:border-border hover:bg-surface/40 hover:text-foreground"
                }`}
              >
                <s.icon size={16} className={isActive ? "text-accent" : ""} />
                {s.title}
              </button>
            );
          })}
        </div>

        <div className="rounded-b-2xl rounded-tr-2xl border border-border bg-surface p-8 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent">
              <service.icon size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 border-t border-border pt-8 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                What&apos;s included
              </p>
              <ul className="mt-4 space-y-3">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-foreground/90"
                  >
                    <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-2">
                Why it matters
              </p>
              <ul className="mt-4 space-y-3">
                {service.benefits.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-foreground/90"
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-accent-2"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
