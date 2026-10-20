import Link from "next/link";
import { Wordmark } from "@/components/layout/Wordmark";
import { SiteNav } from "@/components/layout/SiteNav";
import { Container } from "@/components/ui/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <Container className="flex h-[var(--header-height)] items-center justify-between gap-6">
        <Wordmark />
        <div className="flex items-center gap-8">
          <SiteNav />
          <Link
            href="/#contact"
            className="hidden items-center bg-accent px-3.5 py-2 text-sm text-accent-foreground transition-opacity hover:opacity-80 md:inline-flex"
          >
            Contact
          </Link>
        </div>
      </Container>
    </header>
  );
}
