import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WaxSealBadge } from "@/components/motifs/WaxSealBadge";
import { QuillDivider } from "@/components/motifs/QuillDivider";
import { copy } from "@/lib/copy";
import { SECTION_IDS } from "@/lib/constants";

export function SolutionProposalSection() {
  return (
    <SectionWrapper
      id={SECTION_IDS.solution}
      background="burgundy"
      paddingY="lg"
      ariaLabel="솔루션 제안"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <ScrollReveal>
          <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-[var(--color-gold-300)]">
            {copy.solution.eyebrow}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <WaxSealBadge text={copy.solution.badge} color="burgundy" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-[var(--font-display)] text-[28px] leading-[1.35] text-[var(--color-parchment)] md:text-[38px]">
            {copy.solution.headline}
          </h2>
        </ScrollReveal>

        <QuillDivider tone="light" className="my-2" />

        <ScrollReveal delay={0.15}>
          <p className="max-w-[60ch] text-[18px] leading-[1.85] text-[var(--color-parchment)]/90 md:text-[19px]">
            {copy.solution.body}
          </p>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
