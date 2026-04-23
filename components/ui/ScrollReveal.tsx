"use client";

import { m, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Direction = "up" | "fade" | "left" | "right";

export type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  once?: boolean;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "ul" | "p" | "span";
};

const OFFSET: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  fade: { x: 0, y: 0 },
  left: { x: -24, y: 0 },
  right: { x: 24, y: 0 },
};

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.55,
  direction = "up",
  once = true,
  className,
  as = "div",
}: ScrollRevealProps) {
  const reduce = useReducedMotion();
  const { x, y } = OFFSET[direction];

  const Comp = m[as];

  if (reduce) {
    return <Comp className={cn(className)}>{children}</Comp>;
  }

  return (
    <Comp
      className={cn(className)}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration, delay, ease: [0.2, 0.8, 0.3, 1] }}
    >
      {children}
    </Comp>
  );
}
