import { MapPin } from "lucide-react";

const LOCATIONS = [
  { country: "India", place: "Delhi" },
  { country: "USA", place: "Gilroy, California" },
  { country: "Australia", place: "Sydney & Melbourne" },
];

export function Locations() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Global Presence
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Locations
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {LOCATIONS.map((location) => (
          <div
            key={location.country}
            className="rounded-2xl border border-border bg-surface/60 p-7 text-center"
          >
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent">
              <MapPin size={20} />
            </div>
            <div className="mt-4 text-base font-semibold text-foreground">
              {location.country}
            </div>
            <div className="mt-1 text-sm text-muted">{location.place}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
