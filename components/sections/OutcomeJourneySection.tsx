import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { QuillDivider } from "@/components/motifs/QuillDivider";
import { copy } from "@/lib/copy";
import { SECTION_IDS } from "@/lib/constants";

export function OutcomeJourneySection() {
  return (
    <SectionWrapper
      id={SECTION_IDS.outcome}
      background="parchment"
      paddingY="lg"
      ariaLabel="성과 여정"
    >
      <div className="flex flex-col items-center gap-5 text-center">
        <ScrollReveal>
          <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-[var(--color-burgundy-800)]">
            {copy.outcomeJourney.eyebrow}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="font-[var(--font-display)] text-[28px] leading-tight text-[var(--color-ink)] md:text-[38px]">
            {copy.outcomeJourney.title}
          </h2>
        </ScrollReveal>
        <QuillDivider className="mt-2" />
        <ScrollReveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-[52ch] border-l-2 border-[var(--color-burgundy-800)] pl-5 text-left text-[18px] italic leading-[1.8] text-[var(--color-ink-soft)] md:text-[19px]">
            {copy.outcomeJourney.intro}
          </p>
        </ScrollReveal>
      </div>

      <ol className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 md:mt-16 md:gap-6 lg:grid-cols-4">
        {copy.outcomeJourney.steps.map((s, idx) => (
          <ScrollReveal as="li" key={s.step} delay={idx * 0.09}>
            <div className="relative h-full rounded-xl bg-[var(--color-parchment)]/75 p-6 ring-1 ring-[var(--color-gold-700)]/30">
              <div className="mb-4 flex items-center gap-3">
                <span
                  aria-hidden
                  className="font-[var(--font-display)] text-[36px] font-semibold leading-none text-gold-gradient tabular-display"
                >
                  {s.step}
                </span>
                <span
                  aria-hidden
                  className="h-px flex-1 bg-[var(--color-gold-500)]/50"
                />
              </div>
              <p className="text-[18px] leading-[1.7] text-[var(--color-ink)] md:text-[19px]">
                <span
                  aria-hidden
                  className="mr-1 font-[var(--font-display)] text-[22px] text-[var(--color-burgundy-800)]"
                >
                  “
                </span>
                {s.quote}
                <span
                  aria-hidden
                  className="ml-1 font-[var(--font-display)] text-[22px] text-[var(--color-burgundy-800)]"
                >
                  ”
                </span>
              </p>
            </div>
          </ScrollReveal>
        ))}
      </ol>
    </SectionWrapper>
  );
}
