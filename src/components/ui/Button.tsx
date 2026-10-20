import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-accent px-4 py-2.5 text-accent-foreground hover:opacity-80",
  ghost:
    "border border-border bg-transparent px-4 py-2.5 text-foreground hover:border-foreground",
  link: "px-0 py-0 text-foreground underline-offset-4 hover:underline",
} as const;

type ButtonVariant = keyof typeof variants;

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  href?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export function Button({
  children,
  className,
  variant = "primary",
  href,
  external,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center text-sm transition-opacity",
    variants[variant],
    className,
  );

  if (href) {
    const isExternal =
      external || href.startsWith("http") || href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
