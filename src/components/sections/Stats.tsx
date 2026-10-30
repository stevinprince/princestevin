import { Section } from "@/components/ui/Section";
import { StatValue } from "@/components/ui/StatValue";
import { profile } from "@/data/profile";

export function Stats() {
  const displayStats = profile.stats.slice(0, 3);

  return (
    <Section>
      <dl className="flex flex-wrap items-start justify-center gap-12 sm:gap-16 lg:gap-24">
        {displayStats.map((stat) => (
          <div key={stat.id} className="text-center">
            <dd className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              <StatValue value={stat.value} />
            </dd>
            <dt className="mt-2 text-xs uppercase tracking-[0.2em] text-subtle">
              {stat.label.split(" ").slice(0, 3).join(" ")}
            </dt>
          </div>
        ))}
      </dl>
    </Section>
  );
}
