import { Cpu, Lock, Zap } from "lucide-react";
import { LayersMark } from "./LayersMark";
import { SWATCHES } from "@/lib/swatches";

const PILLARS = [
  {
    icon: Cpu,
    title: "Infrastructure that scales",
    description:
      "Campus and data centre architecture designed to grow with your network — from physical layer to logical design.",
  },
  {
    icon: Lock,
    title: "Security by design",
    description:
      "Next-gen firewalls, SASE, and governance frameworks built into every engagement, not bolted on afterward.",
  },
  {
    icon: Zap,
    title: "Automation-first operations",
    description:
      "Autonomous network management that reduces time-to-adoption and operational overhead for lean teams.",
  },
];

export function Vision() {
  return (
    <section
      id="vision"
      className="section-anchor relative overflow-hidden py-24 lg:py-32"
    >
      <LayersMark className="pointer-events-none absolute -right-16 -top-16 h-auto w-80 rotate-12 opacity-[0.08]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Our Vision
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Cutting-edge technology.
              <br />
              Innovation driven.
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted">
              iLayer Solutions is a cutting-edge technology and innovation
              driven company dedicated to delivering comprehensive
              infrastructure, security, and automation solutions for Telecom
              Operators, ISPs, and Enterprises. We build digital ecosystems
              that are robust, efficient, and secure by default — engineered
              by people who run these networks in production, not just design
              them on paper.
            </p>
          </div>

          <div className="space-y-4">
            {PILLARS.map((pillar, i) => {
              const swatch = SWATCHES[i % SWATCHES.length];
              return (
                <div
                  key={pillar.title}
                  className="flex gap-4 rounded-2xl border border-border bg-surface/60 p-6"
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${swatch.bg} ${swatch.text}`}
                  >
                    <pillar.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
