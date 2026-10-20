import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

type PlaceholderPageProps = {
  label: string;
  title: string;
  description: string;
};

export function PlaceholderPage({
  label,
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <Container as="section" className="py-16 sm:py-24">
      <PageHeader eyebrow={label} title={title} description={description} />
    </Container>
  );
}
