import { Container } from "@/components/ui/Container";

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
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-subtle">
        {label}
      </p>
      <h1 className="mt-4 font-semibold tracking-tight text-[length:var(--text-title)]">
        {title}
      </h1>
      <p className="mt-4 max-w-xl text-muted">{description}</p>
    </Container>
  );
}
