import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <Container as="section" className="py-16 sm:py-24">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-subtle">
        {site.role}
      </p>
      <h1 className="mt-6 max-w-4xl font-semibold tracking-tight text-[length:var(--text-display)] leading-[1.05]">
        {site.headline}
      </h1>
      <p className="mt-8 max-w-2xl text-muted">
        Foundation step: shared layout, design tokens, typography, and
        navigation are in place. Homepage sections land in a later step.
      </p>
    </Container>
  );
}
