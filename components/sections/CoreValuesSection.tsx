import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ParchmentCard } from "@/components/motifs/ParchmentCard";
import { QuillDivider } from "@/components/motifs/QuillDivider";
import { copy } from "@/lib/copy";
import { SECTION_IDS } from "@/lib/constants";

export function CoreValuesSection() {
  return (
    <SectionWrapper
      id={SECTION_IDS.coreValues}
      background="parchment"
      paddingY="lg"
      ariaLabel="핵심 가치"
    >
      <div className="flex flex-col items-center gap-5 text-center">
        <ScrollReveal>
          <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-[var(--color-burgundy-800)]">
            {copy.coreValues.eyebrow}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="font-[var(--font-display)] text-[30px] leading-tight text-[var(--color-ink)] md:text-[40px]">
            {copy.coreValues.title}
          </h2>
        </ScrollReveal>
        <QuillDivider className="mt-2" />
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {copy.coreValues.cards.map((card, idx) => (
          <ScrollReveal key={card.number} delay={idx * 0.08}>
            <ParchmentCard className="h-full">
              <div className="flex h-full flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-burgundy-800)] text-[var(--color-gold-300)] font-[var(--font-display)] text-[18px] font-semibold ring-1 ring-[var(--color-gold-500)]"
                  >
                    {card.number}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-gold-500)] to-transparent" />
                </div>
                <h3 className="font-[var(--font-display)] text-[22px] leading-[1.35] text-[var(--color-burgundy-800)] md:text-[24px]">
                  {card.title}
                </h3>
                <p className="text-[17.5px] leading-[1.8] text-[var(--color-ink-soft)] md:text-[18px]">
                  {card.body}
                </p>
              </div>
            </ParchmentCard>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
