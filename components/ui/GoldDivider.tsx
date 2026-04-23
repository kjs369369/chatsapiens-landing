import { cn } from "@/lib/cn";

type Tone = "gold" | "gold-burgundy" | "gold-parchment";

export type GoldDividerProps = {
  tone?: Tone;
  className?: string;
  ariaHidden?: boolean;
};

const TONE_MAP: Record<Tone, string> = {
  gold:
    "bg-gradient-to-r from-transparent via-[var(--color-gold-500)] to-transparent",
  "gold-burgundy":
    "bg-gradient-to-r from-transparent via-[var(--color-gold-300)] to-transparent",
  "gold-parchment":
    "bg-gradient-to-r from-transparent via-[var(--color-gold-700)] to-transparent",
};

/**
 * 가늘고 품격 있는 금선 — 섹션 헤더/푸터 구분용.
 */
export function GoldDivider({
  tone = "gold",
  className,
  ariaHidden = true,
}: GoldDividerProps) {
  return (
    <div
      aria-hidden={ariaHidden}
      className={cn(
        "mx-auto h-px w-full max-w-md opacity-80 animate-gold-sweep",
        TONE_MAP[tone],
        className,
      )}
    />
  );
}
