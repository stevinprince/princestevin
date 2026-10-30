import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Experience",
  description: "Professional history, education, and certifications.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <Section bordered={false} className="pt-28">
        <PageHeader
          eyebrow="Experience"
          title="Professional History"
          description={experience.summary}
        />
        <div className="mt-12">
          {experience.roles.map((role) => (
            <ExperienceCard key={role.id} role={role} variant="full" />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading line1="Education" line2="& Degrees" centered />
        <div className="mt-10">
          {experience.education.map((item) => (
            <article
              key={item.id}
              className="flex items-start gap-4 border-t border-border py-6"
            >
              <div className="flex-1">
                <h3 className="text-lg font-bold tracking-tight">
                  {item.degree}
                </h3>
                <p className="mt-1 text-muted">{item.school}</p>
                {item.detail ? (
                  <p className="mt-2 text-sm text-subtle">{item.detail}</p>
                ) : null}
                <p className="mt-2 text-sm text-subtle">{item.period}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading line1="Certifications" line2="& Learning" centered />
        <ul className="mt-10 border-t border-border">
          {experience.certifications.map((item) => (
            <li
              key={item.id}
              className="border-b border-border py-5 text-lg tracking-tight"
            >
              {item.title}
            </li>
          ))}
        </ul>
      </Section>

      <ContactSection fullWidth />
    </>
  );
}
