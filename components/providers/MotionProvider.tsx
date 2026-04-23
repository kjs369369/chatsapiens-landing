"use client";

import { LazyMotion, domAnimation } from "motion/react";
import type { ReactNode } from "react";

/**
 * LazyMotion + domAnimation: 최소 ~17KB, Framer Motion Lite.
 * 모든 인터랙티브 애니메이션은 이 프로바이더 안에서만 동작합니다.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
