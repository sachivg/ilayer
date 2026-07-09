const STATS = [
  { value: "10+", label: "Team Members" },
  { value: "100+", label: "Years Combined Experience" },
  { value: "3", label: "Global Offices" },
  { value: "9", label: "Industry Certifications" },
];

export function StatsBar() {
  return (
    <section className="relative border-y border-border bg-surface/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4 lg:px-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-semibold text-foreground sm:text-4xl">
              {stat.value}
            </div>
            <div className="mt-1 text-xs text-muted sm:text-sm">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
