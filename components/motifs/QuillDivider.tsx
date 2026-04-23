import { cn } from "@/lib/cn";

type Tone = "light" | "dark";

export type QuillDividerProps = {
  tone?: Tone;
  className?: string;
};

/**
 * 깃펜 아이콘 + 금색 수평선으로 구성된 섹션 구분자.
 */
export function QuillDivider({ tone = "dark", className }: QuillDividerProps) {
  const line =
    tone === "light"
      ? "via-[var(--color-gold-300)]"
      : "via-[var(--color-gold-500)]";
  const iconColor =
    tone === "light" ? "text-[var(--color-gold-300)]" : "text-[var(--color-gold-500)]";

  return (
    <div
      aria-hidden
      className={cn("flex items-center justify-center gap-4", className)}
    >
      <span
        className={cn(
          "h-px w-24 sm:w-32 bg-gradient-to-r from-transparent to-[var(--color-gold-500)]",
          line,
        )}
      />
      <svg
        className={cn("h-4 w-4 shrink-0", iconColor)}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 3L8 15l-2 6 6-2 12-12z" />
        <path d="M14.5 6.5L17.5 9.5" />
        <path d="M4 20l3-3" />
      </svg>
      <span
        className={cn(
          "h-px w-24 sm:w-32 bg-gradient-to-l from-transparent to-[var(--color-gold-500)]",
          line,
        )}
      />
    </div>
  );
}
