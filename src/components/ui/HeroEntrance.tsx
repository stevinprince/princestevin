"use client";

import { useEffect, useRef } from "react";
import { animate, useReducedMotion } from "framer-motion";

type HeroEntranceProps = {
  children: React.ReactNode;
};

export function HeroEntrance({ children }: HeroEntranceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;

    if (!el || reduceMotion) {
      if (el) {
        el.style.opacity = "1";
        el.style.transform = "none";
      }

      return;
    }

    const controls = animate(
      el,
      { opacity: 1, y: 0 },
      { duration: 0.5, ease: "easeOut" },
    );

    return () => controls.stop();
  }, [reduceMotion]);

  return (
    <div
      ref={ref}
      style={{ opacity: 0, transform: "translateY(18px)" }}
    >
      {children}
    </div>
  );
}
