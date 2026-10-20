import { ContactForm } from "@/components/ui/ContactForm";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title={profile.contact.heading}
            description={profile.contact.body}
          />
          <SocialLinks className="mt-8" />
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
