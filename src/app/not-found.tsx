import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section bordered={false}>
      <PageHeader
        eyebrow="404"
        title="Page not found"
        description="That URL is not part of this site. Check the address or return to the homepage."
      />
      <div className="mt-8">
        <Button href="/">Back to home</Button>
      </div>
    </Section>
  );
}
