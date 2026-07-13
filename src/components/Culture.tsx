import Link from "next/link";
import { Target, Wrench, MessageSquare, TrendingUp, ArrowRight } from "lucide-react";
import { LayersMark } from "./LayersMark";
import { SWATCHES } from "@/lib/swatches";

const VALUES = [
  {
    icon: Target,
    title: "Ownership",
    description:
      "We don't hand off and disappear. The people who design your network are often the same people staffing the 24x7 desk that keeps it running.",
  },
  {
    icon: Wrench,
    title: "Craft",
    description:
      "Every engineer holds real vendor certifications — JNCIE, CCIE, ITILv4, Microsoft Azure — not because it looks good on a slide, but because production networks don't forgive shortcuts.",
  },
  {
    icon: MessageSquare,
    title: "Directness",
    description:
      "Vendor-agnostic by design. We recommend what fits your network, not what pays the highest margin.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "The team has grown from a handful of network engineers in 2023 to a certified, multi-region practice across India, USA, and Australia — and we're still hiring.",
  },
];

export function Culture() {
  return (
    <section
      id="culture"
      className="section-anchor relative overflow-hidden py-24 lg:py-32"
    >
      <LayersMark className="pointer-events-none absolute -right-16 top-10 h-auto w-72 rotate-6 opacity-[0.07]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Our Culture
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A small team, real ownership
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted">
            iLayer Solutions is a distributed team across India, USA, and
            Australia — engineers first, close enough to the clients whose
            networks we run in production every day. We&rsquo;re small
            enough that every certification, every project, and every
            client relationship has a name attached to it.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2">
          {VALUES.map((value, i) => {
            const swatch = SWATCHES[i % SWATCHES.length];
            return (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-surface/60 p-6"
              >
                <div
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${swatch.bg} ${swatch.text}`}
                >
                  <value.icon size={20} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-foreground"
          >
            Interested in joining? See open roles
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
