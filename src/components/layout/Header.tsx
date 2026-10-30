import { SiteNav } from "@/components/layout/SiteNav";
import { Container } from "@/components/ui/Container";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <Container className="flex h-[var(--header-height)] items-center justify-center pt-4">
        <SiteNav />
      </Container>
    </header>
  );
}
