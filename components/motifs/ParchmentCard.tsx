import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ParchmentCardProps = {
  children: ReactNode;
  className?: string;
  bordered?: boolean;
  elevated?: boolean;
  as?: "div" | "article" | "li";
};

export function ParchmentCard({
  children,
  className,
  bordered = true,
  elevated = true,
  as: Tag = "article",
}: ParchmentCardProps) {
  return (
    <Tag
      className={cn(
        "relative bg-parchment-card rounded-xl p-7 md:p-9",
        "transition-shadow duration-300",
        bordered && "border-gold-frame",
        elevated &&
          "shadow-[var(--shadow-parchment)] hover:shadow-[var(--shadow-elevated)]",
        className,
      )}
    >
      {/* Corner flourishes */}
      <span
        aria-hidden
        className="pointer-events-none absolute top-2 left-2 h-3 w-3 border-t border-l border-[var(--color-gold-500)]/60"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute top-2 right-2 h-3 w-3 border-t border-r border-[var(--color-gold-500)]/60"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-2 left-2 h-3 w-3 border-b border-l border-[var(--color-gold-500)]/60"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b border-r border-[var(--color-gold-500)]/60"
      />
      {children}
    </Tag>
  );
}
