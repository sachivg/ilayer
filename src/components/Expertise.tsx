import {
  CheckCircle2,
  Headset,
  PackageSearch,
  PhoneCall,
  Users,
} from "lucide-react";
import { LayersMark } from "./LayersMark";
import { SWATCHES } from "@/lib/swatches";

const NETWORKING_EXPERTISE = [
  "End-to-end Broadband Network solutions",
  "Local, Metropolitan, & Wide Area Networks",
  "Physical & Logical (Layer 1-3) Designs",
  "Network Architecture and Assessment",
  "Security Framework",
  "Advanced Dynamic Routing Solutions",
  "Firewall Security Designs (Layer 4-7 Devices)",
  "MPLS Layer 2 & 3 VPNs with EVPN-VXLAN",
  "Network Automation",
];

const CURRENT_OPERATIONS = [
  {
    icon: Headset,
    title: "Outsourced Network Operations",
    description:
      "Supporting multiple large clients through multi-year engagements.",
  },
  {
    icon: PhoneCall,
    title: "IT Service Desk",
    description: "24x7 on-call support for critical operations.",
  },
  {
    icon: PackageSearch,
    title: "Equipment Staging Centre",
    description:
      "Staging, testing, and shipment of network equipment for over 600 retail locations.",
  },
  {
    icon: Users,
    title: "Voice-Over-IP Solutions",
    description: "Full-featured, scalable, and economical VoIP deployments.",
  },
];

export function Expertise() {
  return (
    <section
      id="expertise"
      className="section-anchor relative overflow-hidden bg-surface/30 py-24 lg:py-32"
    >
      <LayersMark className="pointer-events-none absolute -right-16 bottom-0 h-auto w-72 rotate-6 opacity-[0.07]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Deep Expertise
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Networking capability, proven in production
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface/60 p-8">
            <h3 className="text-lg font-semibold text-foreground">
              Networking Expertise
            </h3>
            <ul className="mt-6 space-y-3.5">
              {NETWORKING_EXPERTISE.map((item, i) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
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
              Current Operations
            </h3>
            <div className="mt-6 space-y-5">
              {CURRENT_OPERATIONS.map((op, i) => {
                const swatch = SWATCHES[i % SWATCHES.length];
                return (
                  <div key={op.title} className="flex gap-4">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${swatch.bg} ${swatch.text}`}
                    >
                      <op.icon size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        {op.title}
                      </div>
                      <div className="mt-1 text-sm text-muted">
                        {op.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
