"use client";

import { motion, useReducedMotion } from "framer-motion";

type HeroEntranceProps = {
  children: React.ReactNode;
};

export function HeroEntrance({ children }: HeroEntranceProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
