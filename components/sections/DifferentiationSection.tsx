import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { QuillDivider } from "@/components/motifs/QuillDivider";
import { copy } from "@/lib/copy";
import { cn } from "@/lib/cn";
import { SECTION_IDS } from "@/lib/constants";

export function DifferentiationSection() {
  return (
    <SectionWrapper
      id={SECTION_IDS.differentiation}
      background="parchment-deep"
      paddingY="lg"
      ariaLabel="차별화"
    >
      <div className="flex flex-col items-center gap-5 text-center">
        <ScrollReveal>
          <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-[var(--color-burgundy-800)]">
            {copy.differentiation.eyebrow}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="font-[var(--font-display)] text-[28px] leading-tight text-[var(--color-ink)] md:text-[38px]">
            {copy.differentiation.title}
          </h2>
        </ScrollReveal>
        <QuillDivider className="mt-2" />
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {copy.differentiation.columns.map((col, idx) => {
          const highlight = col.tone === "highlight";
          return (
            <ScrollReveal key={col.heading} delay={idx * 0.08}>
              <div
                className={cn(
                  "flex h-full flex-col gap-4 rounded-xl p-7",
                  highlight
                    ? "bg-[var(--color-burgundy-800)] text-[var(--color-parchment)] ring-2 ring-[var(--color-gold-500)] shadow-[var(--shadow-elevated)]"
                    : "bg-[var(--color-parchment)]/80 text-[var(--color-ink-soft)] ring-1 ring-[var(--color-ink)]/10",
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className={cn(
                      "inline-block h-2 w-8 rounded-full",
                      highlight
                        ? "bg-[var(--color-gold-500)]"
                        : "bg-[var(--color-ink-muted)]/60",
                    )}
                  />
                  <h3
                    className={cn(
                      "font-[var(--font-display)] text-[20px] leading-tight md:text-[22px]",
                      highlight ? "text-[var(--color-gold-300)]" : "text-[var(--color-burgundy-800)]",
                    )}
                  >
                    {col.heading}
                  </h3>
                </div>
                <ul className="mt-2 flex flex-col gap-3">
                  {col.items.map((item, i) => (
                    <li
                      key={i}
                      className={cn(
                        "flex items-start gap-3 text-[17px] leading-[1.7] md:text-[17.5px]",
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn(
                          "mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full",
                          highlight
                            ? "bg-[var(--color-gold-500)]"
                            : "bg-[var(--color-ink-muted)]/70",
                        )}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
