import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ui/ContactForm";

export function ContactSection() {
  return (
    <Section id="contact">
      <SectionHeading line1="Let's Work" line2="Together" />
      <div className="mx-auto mt-14 max-w-2xl">
        <ContactForm />
      </div>
    </Section>
  );
}
