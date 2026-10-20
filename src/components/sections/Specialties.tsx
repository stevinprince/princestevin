import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export function Specialties() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Expertise"
        title="Technical specialties"
        description="Areas I spend the most time on. These are focus areas, not a scored skill list."
      />
      <ul className="mt-12 grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {profile.specialties.map((specialty) => (
          <li
            key={specialty}
            className="border-t border-border pt-4 text-xl font-medium tracking-tight sm:text-2xl"
          >
            {specialty}
          </li>
        ))}
      </ul>
    </Section>
  );
}
