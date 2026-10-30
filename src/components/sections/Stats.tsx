import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StatValue } from "@/components/ui/StatValue";
import { profile } from "@/data/profile";

export function Stats() {
  const displayStats = profile.stats.slice(0, 3);

  return (
    <AnimatedSection>
      <dl className="flex flex-wrap items-start gap-8 sm:gap-12">
        {displayStats.map((stat) => (
          <div key={stat.id}>
            <dd className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              <StatValue value={stat.value} />
            </dd>
            <dt className="mt-1 text-[10px] uppercase tracking-[0.2em] text-subtle">
              {stat.label.split(" ").slice(0, 3).join("\n")}
            </dt>
          </div>
        ))}
      </dl>
    </AnimatedSection>
  );
}
