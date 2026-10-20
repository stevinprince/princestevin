"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navigation } from "@/lib/site";
import { cn, isActivePath } from "@/lib/utils";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

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
      <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
        {navigation.map((item) => (
          <NavLink key={item.href} href={item.href} pathname={pathname}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <button
        type="button"
        className="inline-flex size-11 items-center justify-center text-foreground md:hidden"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
      </button>

      <div
        id={menuId}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-border bg-background md:hidden"
      >
        <nav className="flex flex-col px-5 py-4 sm:px-8" aria-label="Mobile">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex min-h-11 items-center text-base",
                isActivePath(pathname, item.href)
                  ? "font-medium text-foreground"
                  : "text-muted",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex min-h-11 items-center justify-center bg-accent px-4 text-sm text-accent-foreground"
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}

type NavLinkProps = {
  href: string;
  pathname: string;
  children: React.ReactNode;
};

function NavLink({ href, pathname, children }: NavLinkProps) {
  const active = isActivePath(pathname, href);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "text-sm transition-colors",
        active ? "text-foreground" : "text-muted hover:text-foreground",
      )}
    >
      {children}
    </Link>
  );
}
