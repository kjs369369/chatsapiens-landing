import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { QuillDivider } from "@/components/motifs/QuillDivider";
import { copy } from "@/lib/copy";
import { SECTION_IDS } from "@/lib/constants";

export function ProblemEmpathySection() {
  return (
    <SectionWrapper
      id={SECTION_IDS.problem}
      background="parchment-deep"
      paddingY="lg"
      ariaLabel="문제 공감"
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <ScrollReveal>
          <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-[var(--color-burgundy-800)]">
            {copy.problem.eyebrow}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="font-[var(--font-display)] text-[30px] leading-tight text-[var(--color-ink)] md:text-[40px]">
            {copy.problem.title}
          </h2>
        </ScrollReveal>
        <QuillDivider className="mt-2" />
      </div>

      <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
        {copy.problem.painPoints.map((item, idx) => (
          <ScrollReveal
            as="li"
            key={item}
            delay={idx * 0.06}
            className="flex items-start gap-4 rounded-lg bg-[var(--color-parchment)]/70 p-5 ring-1 ring-[var(--color-gold-700)]/25 backdrop-blur-[1px]"
          >
            <span
              aria-hidden
              className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-burgundy-800)] text-[12px] font-bold text-[var(--color-gold-300)] font-[var(--font-display)] tabular-display"
            >
              {String(idx + 1).padStart(2, "0")}
            </span>
            <p className="text-[18px] leading-[1.7] text-[var(--color-ink-soft)] md:text-[19px]">
              {item}
            </p>
          </ScrollReveal>
        ))}
      </ul>

      <ScrollReveal delay={0.1} className="mx-auto mt-16 max-w-3xl text-center">
        <p className="border-l-2 border-[var(--color-burgundy-800)] pl-5 text-left text-[19px] italic leading-[1.8] text-[var(--color-ink)] md:pl-6 md:text-[21px]">
          {copy.problem.bridge}
        </p>
      </ScrollReveal>
    </SectionWrapper>
  );
}
