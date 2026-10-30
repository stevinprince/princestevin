import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";

export function ExperiencePreview() {
  const yearsValue =
    profile.stats.find((s) => s.id === "experience")?.value ?? "";

  return (
    <Section>
      <SectionHeading
        line1={`${yearsValue} Years of`}
        line2="Experience"
      />
      <div className="mt-14 space-y-2">
        {experience.roles.map((role) => (
          <ExperienceCard key={role.id} role={role} />
        ))}
      </div>
    </Section>
  );
}
