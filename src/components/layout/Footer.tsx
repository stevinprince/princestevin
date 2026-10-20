import { ArrowUp } from "lucide-react";
import { CopyrightYear } from "@/components/layout/CopyrightYear";
import { Wordmark } from "@/components/layout/Wordmark";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <Container className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Wordmark />
          <p className="mt-2 text-sm text-subtle">
            © <CopyrightYear /> {site.name}
          </p>
        </div>
        <nav
          className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted"
          aria-label="Footer"
        >
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center transition-colors hover:text-foreground"
          >
            GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center transition-colors hover:text-foreground"
          >
            LinkedIn
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex min-h-11 items-center transition-colors hover:text-foreground"
          >
            Email
          </a>
          <a
            href="#top"
            className="inline-flex min-h-11 items-center gap-1.5 transition-colors hover:text-foreground"
          >
            Back to top
            <ArrowUp size={14} strokeWidth={1.75} aria-hidden="true" />
          </a>
        </nav>
      </Container>
    </footer>
  );
}
