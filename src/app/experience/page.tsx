import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
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
      <Section bordered={false}>
        <PageHeader
          eyebrow="Experience"
          title="Professional history"
          description={experience.summary}
        />
        <div className="mt-10">
          {experience.roles.map((role) => (
            <ExperienceCard key={role.id} role={role} variant="full" />
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-semibold tracking-tight text-[length:var(--text-title)]">
          Education
        </h2>
        <div className="mt-8">
          {experience.education.map((item) => (
            <article
              key={item.id}
              className="grid gap-4 border-t border-border py-8 md:grid-cols-[13rem_1fr]"
            >
              <p className="text-sm text-subtle">{item.period}</p>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {item.degree}
                </h3>
                <p className="mt-1 text-muted">{item.school}</p>
                {item.detail ? (
                  <p className="mt-3 text-sm text-subtle">{item.detail}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-semibold tracking-tight text-[length:var(--text-title)]">
          Certifications and learning
        </h2>
        <ul className="mt-8 border-t border-border">
          {experience.certifications.map((item) => (
            <li
              key={item.id}
              className="border-b border-border py-4 text-lg tracking-tight"
            >
              {item.title}
            </li>
          ))}
        </ul>
      </Section>

      <ContactSection />
    </>
  );
}
