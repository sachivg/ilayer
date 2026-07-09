import {
  Server,
  Cloud,
  ShieldCheck,
  DatabaseBackup,
  Workflow,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    icon: Server,
    title: "Infra Solutions",
    description:
      "Campus and data centre solutions powered by Juniper, HPE, and Cisco — from physical design to logical architecture across all network layers.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Strategic cloud migration and management across Azure and AWS platforms — ensuring scalability, reliability, and cost-efficiency for your workloads.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    description:
      "Comprehensive security strategy including Next-Gen Firewalls, SASE, CASB, Posture Management, ISO, SOC2, GRC and Security Frameworks.",
  },
  {
    icon: DatabaseBackup,
    title: "Data Backup Solutions",
    description:
      "Enterprise-grade backup and disaster recovery solutions with Veeam and Barracuda — protecting critical business data with reliable redundancy.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "Network automation solutions that optimise time-to-adoption, boost operational efficiency, and deliver autonomous network management capabilities.",
  },
  {
    icon: GraduationCap,
    title: "Training & Consulting",
    description:
      "Expert training and team development, coaching and mentoring for CXO, leadership and senior executives — empowering your workforce.",
  },
];

export function Services() {
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
            Six focused practice areas covering the full lifecycle of your
            network — from design through automation.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl border border-border bg-surface/60 p-7 transition-colors hover:border-accent/40 hover:bg-surface"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent">
                <service.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
