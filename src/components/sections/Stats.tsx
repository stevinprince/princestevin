import { Section } from "@/components/ui/Section";
import { StatValue } from "@/components/ui/StatValue";
import { profile } from "@/data/profile";

export function Stats() {
  return (
    <Section>
      <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {profile.stats.map((stat) => (
          <div key={stat.id} className="border-t border-border pt-5">
            <dt className="text-xs uppercase tracking-[0.16em] text-subtle">
              {stat.label}
            </dt>
            <dd className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              <StatValue value={stat.value} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
