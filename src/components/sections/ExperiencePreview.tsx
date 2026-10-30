import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";

export function ExperiencePreview() {
  const yearsValue =
    profile.stats.find((s) => s.id === "experience")?.value ?? "";

  return (
    <AnimatedSection>
      <SectionHeading
        line1={`${yearsValue} Years of`}
        line2="Experience"
      />
      <div className="mt-10 space-y-2">
        {experience.roles.map((role) => (
          <ExperienceCard key={role.id} role={role} />
        ))}
      </div>
    </AnimatedSection>
  );
}
