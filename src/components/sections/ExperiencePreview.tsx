import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export function ExperiencePreview() {
  return (
    <Section>
      <SectionHeading
        eyebrow="History"
        title="Professional experience"
        description={experience.summary}
        href="/experience"
        linkLabel="View full experience"
      />
      <div className="mt-8">
        {experience.roles.map((role) => (
          <ExperienceCard key={role.id} role={role} />
        ))}
      </div>
    </Section>
  );
}
