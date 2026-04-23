import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Background = "parchment" | "parchment-deep" | "burgundy" | "navy" | "cream";
type PaddingY = "sm" | "md" | "lg" | "xl";

export type SectionWrapperProps = {
  id?: string;
  as?: ElementType;
  background?: Background;
  paddingY?: PaddingY;
  ariaLabel?: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
};

const BG_MAP: Record<Background, string> = {
  parchment: "bg-parchment-texture text-[var(--color-ink)]",
  "parchment-deep":
    "bg-[var(--color-parchment-dark)] text-[var(--color-ink)] bg-parchment-texture",
  burgundy: "bg-burgundy-texture text-[var(--color-parchment)]",
  navy: "bg-[var(--color-navy-700)] text-[var(--color-parchment)]",
  cream:
    "bg-[var(--color-parchment)] text-[var(--color-ink)] bg-parchment-texture",
};

const PAD_MAP: Record<PaddingY, string> = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-28 lg:py-32",
  xl: "py-24 md:py-32 lg:py-40",
};

export function SectionWrapper({
  id,
  as: Tag = "section",
  background = "parchment",
  paddingY = "lg",
  ariaLabel,
  className,
  innerClassName,
  children,
}: SectionWrapperProps) {
  return (
    <Tag
      id={id}
      aria-label={ariaLabel}
      className={cn("relative w-full", BG_MAP[background], PAD_MAP[paddingY], className)}
    >
      <div className={cn("mx-auto w-full max-w-6xl px-5 md:px-8", innerClassName)}>
        {children}
      </div>
    </Tag>
  );
}
