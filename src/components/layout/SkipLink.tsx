export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:inline-flex focus:min-h-11 focus:items-center focus:bg-accent focus:px-4 focus:text-sm focus:text-accent-foreground"
    >
      Skip to content
    </a>
  );
}
