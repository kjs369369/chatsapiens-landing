import { cn } from "@/lib/cn";

type SealColor = "burgundy" | "forest" | "navy";
type SealSize = "sm" | "md";

export type WaxSealBadgeProps = {
  text: string;
  color?: SealColor;
  size?: SealSize;
  className?: string;
};

const COLOR_MAP: Record<SealColor, string> = {
  burgundy:
    "bg-[var(--color-burgundy-800)] text-[var(--color-gold-300)] ring-[var(--color-gold-500)]",
  forest:
    "bg-[var(--color-forest-700)] text-[var(--color-gold-300)] ring-[var(--color-gold-500)]",
  navy:
    "bg-[var(--color-navy-700)] text-[var(--color-gold-300)] ring-[var(--color-gold-500)]",
};

const SIZE_MAP: Record<SealSize, string> = {
  sm: "text-[12px] px-3 py-1",
  md: "text-[13px] px-4 py-1.5",
};

export function WaxSealBadge({
  text,
  color = "burgundy",
  size = "md",
  className,
}: WaxSealBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-semibold uppercase tracking-[0.18em]",
        "ring-1 shadow-[var(--shadow-wax)]",
        "font-[var(--font-display)]",
        COLOR_MAP[color],
        SIZE_MAP[size],
        className,
      )}
    >
      <span
        aria-hidden
        className="inline-block h-1.5 w-1.5 rounded-full bg-current opacity-70"
      />
      {text}
    </span>
  );
}
