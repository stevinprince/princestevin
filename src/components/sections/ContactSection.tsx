import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ui/ContactForm";

type ContactSectionProps = {
  /** When true, wraps in a full-width Section for subpages */
  fullWidth?: boolean;
};

export function ContactSection({ fullWidth = false }: ContactSectionProps) {
  const content = (
    <>
      <SectionHeading line1="Let's Work" line2="Together" />
      <div className="mx-auto mt-10 max-w-2xl">
        <ContactForm />
      </div>
    </>
  );

  if (fullWidth) {
    return (
      <Section id="contact">
        {content}
      </Section>
    );
  }

  return (
    <AnimatedSection id="contact">
      {content}
    </AnimatedSection>
  );
}
