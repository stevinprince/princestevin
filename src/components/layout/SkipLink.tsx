export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-5 focus:top-3 focus:z-[60] focus:bg-accent focus:px-3 focus:py-2 focus:text-sm focus:text-accent-foreground"
    >
      Skip to content
    </a>
  );
}
