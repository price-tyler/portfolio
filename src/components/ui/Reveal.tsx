"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Scroll-reveal wrapper: fades and lifts content into view once.
 * Respects prefers-reduced-motion by rendering statically.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.7, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
