import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { QuillDivider } from "@/components/motifs/QuillDivider";
import { copy } from "@/lib/copy";
import { SECTION_IDS } from "@/lib/constants";

export function BrandPhilosophySection() {
  return (
    <SectionWrapper
      id={SECTION_IDS.philosophy}
      background="navy"
      paddingY="lg"
      ariaLabel="브랜드 철학"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <ScrollReveal>
          <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-[var(--color-gold-300)]">
            {copy.philosophy.eyebrow}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="font-[var(--font-display)] text-[26px] leading-[1.45] text-[var(--color-parchment)] md:text-[34px]">
            {copy.philosophy.title}
          </h2>
        </ScrollReveal>

        <QuillDivider tone="light" className="my-2" />

        <ScrollReveal delay={0.1}>
          <p className="max-w-[58ch] text-[18px] leading-[1.9] text-[var(--color-parchment)]/90 md:text-[19px]">
            {copy.philosophy.body}
          </p>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
