"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
      });
    }
  }, [pathname]);

  return null;
}
