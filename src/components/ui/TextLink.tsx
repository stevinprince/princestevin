import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export function TextLink({ href, children, className, external }: TextLinkProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center gap-1 text-sm text-foreground underline-offset-4 transition-colors hover:underline",
    className,
  );

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
        {href.startsWith("http") ? (
          <>
            <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </>
        ) : null}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
