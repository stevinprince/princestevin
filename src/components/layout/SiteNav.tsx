"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Building2,
  FileText,
  Home,
  Menu,
  PenSquare,
  Wrench,
  X,
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
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (media.matches) {
        setOpen(false);
      }
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      {/* Desktop: icon-only pill bar */}
      <nav
        className="hidden items-center gap-1 rounded-full border border-border bg-surface/80 px-2 py-1.5 backdrop-blur-md md:flex"
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

      {/* Mobile hamburger */}
      <button
        type="button"
        className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface/80 text-foreground backdrop-blur-md md:hidden"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? (
          <X size={20} strokeWidth={1.75} aria-hidden="true" />
        ) : (
          <Menu size={20} strokeWidth={1.75} aria-hidden="true" />
        )}
      </button>

      {/* Mobile menu */}
      <div
        id={menuId}
        hidden={!open}
        className="fixed inset-x-0 top-[var(--header-height)] bottom-0 z-40 bg-background/95 backdrop-blur-md md:hidden"
      >
        <nav
          className="flex flex-col gap-1 px-6 py-6"
          aria-label="Mobile"
        >
          {navigation.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-12 items-center gap-3 rounded-lg px-4 text-base transition-colors",
                  active
                    ? "bg-surface-elevated font-medium text-foreground"
                    : "text-muted hover:text-foreground",
                )}
              >
                <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
