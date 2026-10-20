"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type StatValueProps = {
  value: string;
};

export function StatValue({ value }: StatValueProps) {
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const parsed = value.match(/^(\d+)(.*)$/);

    if (!parsed) {
      return;
    }

    const target = Number(parsed[1]);
    const suffix = parsed[2];
    let frame = 0;
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started) {
          return;
        }

        started = true;
        const start = performance.now();
        const duration = 700;

        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - (1 - progress) ** 3;
          setDisplay(`${Math.round(target * eased)}${suffix}`);

          if (progress < 1) {
            frame = requestAnimationFrame(tick);
          }
        };

        frame = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.45 },
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [reduceMotion, value]);

  return <span ref={nodeRef}>{display}</span>;
}
