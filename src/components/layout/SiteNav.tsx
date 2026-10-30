"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Building2,
  FileText,
  Home,
  PenSquare,
  Wrench,
} from "lucide-react";
import { navigation } from "@/lib/site";
import { cn, isActivePath } from "@/lib/utils";

const iconMap = {
  Home,
  FileText,
  Building2,
  Wrench,
  PenSquare,
} as const;

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav
      className="flex items-center gap-1 rounded-full border border-border bg-surface/80 px-2 py-1.5 backdrop-blur-md"
      aria-label="Primary"
    >
      {navigation.map((item) => {
        const Icon = iconMap[item.icon as keyof typeof iconMap];
        const active = isActivePath(pathname, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            aria-label={item.label}
            className={cn(
              "flex size-10 items-center justify-center rounded-full transition-colors",
              active
                ? "bg-surface-elevated text-foreground"
                : "text-subtle hover:text-foreground",
            )}
          >
            <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        );
      })}
    </nav>
  );
}
