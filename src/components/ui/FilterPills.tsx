import Link from "next/link";
import { cn } from "@/lib/utils";

type FilterPillsProps = {
  allHref: string;
  allLabel?: string;
  active?: string;
  items: Array<{
    label: string;
    value: string;
    href: string;
  }>;
};

export function FilterPills({
  allHref,
  allLabel = "All",
  active,
  items,
}: FilterPillsProps) {
  return (
    <nav aria-label="Filters" className="flex flex-wrap gap-2">
      <FilterLink href={allHref} active={!active}>
        {allLabel}
      </FilterLink>
      {items.map((item) => (
        <FilterLink
          key={item.value}
          href={item.href}
          active={active === item.value}
        >
          {item.label}
        </FilterLink>
      ))}
    </nav>
  );
}

function FilterLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-10 items-center border px-3 text-sm",
        active
          ? "border-foreground bg-accent text-accent-foreground"
          : "border-border text-muted hover:border-foreground hover:text-foreground",
      )}
    >
      {children}
    </Link>
  );
}
