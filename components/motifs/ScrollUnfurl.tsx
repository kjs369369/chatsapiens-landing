"use client";

import { m, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ScrollUnfurlProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * 두루마리가 펼쳐지는 듯한 진입 애니메이션.
 * scaleY 0 → 1 (top origin) + opacity.
 * prefers-reduced-motion 시 즉시 렌더.
 */
export function ScrollUnfurl({ children, className, delay = 0 }: ScrollUnfurlProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <m.div
      className={cn("origin-top", className)}
      initial={{ scaleY: 0.2, opacity: 0, y: -12 }}
      animate={{ scaleY: 1, opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.2, 0.75, 0.3, 1],
      }}
    >
      {children}
    </m.div>
  );
}
