import { Suspense } from "react";
import { CopyrightYear } from "@/components/layout/CopyrightYear";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <Container className="py-8 text-center text-sm text-subtle">
        <p>
          © <Suspense fallback="2026"><CopyrightYear /></Suspense>{" "}
          {site.name} | Built with Next.js
        </p>
      </Container>
    </footer>
  );
}
