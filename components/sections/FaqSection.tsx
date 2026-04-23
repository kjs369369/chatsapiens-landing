import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { QuillDivider } from "@/components/motifs/QuillDivider";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { copy } from "@/lib/copy";
import { SECTION_IDS } from "@/lib/constants";

export function FaqSection() {
  return (
    <SectionWrapper
      id={SECTION_IDS.faq}
      background="parchment"
      paddingY="lg"
      ariaLabel="자주 묻는 질문"
    >
      <div className="flex flex-col items-center gap-5 text-center">
        <ScrollReveal>
          <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-[var(--color-burgundy-800)]">
            {copy.faq.eyebrow}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="font-[var(--font-display)] text-[28px] leading-tight text-[var(--color-ink)] md:text-[38px]">
            {copy.faq.title}
          </h2>
        </ScrollReveal>
        <QuillDivider className="mt-2" />
      </div>

      <ScrollReveal delay={0.1} className="mx-auto mt-12 w-full max-w-3xl">
        <FaqAccordion items={copy.faq.items} />
      </ScrollReveal>
    </SectionWrapper>
  );
}
