"use client";

import { useEffect, useRef } from "react";
import { animate, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  id,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;

    if (!el || animated.current) {
      return;
    }

    if (reduceMotion) {
      el.style.opacity = "1";
      el.style.transform = "none";
      animated.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || animated.current) {
          return;
        }

        animated.current = true;

        animate(
          el,
          { opacity: 1, y: 0 },
          { duration: 0.45, delay, ease: "easeOut" },
        );

        observer.disconnect();
      },
      { threshold: 0.16 },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay, reduceMotion]);

  return (
    <div
      ref={ref}
      id={id}
      className={cn(className)}
      style={{ opacity: 0, transform: "translateY(18px)" }}
    >
      {children}
    </div>
  );
}
