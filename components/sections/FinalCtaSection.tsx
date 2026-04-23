import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WaxSealBadge } from "@/components/motifs/WaxSealBadge";
import { QuillDivider } from "@/components/motifs/QuillDivider";
import { RegistrationForm } from "@/components/ui/RegistrationForm";
import { Button } from "@/components/ui/Button";
import { copy } from "@/lib/copy";
import { SECTION_IDS } from "@/lib/constants";

export function FinalCtaSection() {
  return (
    <SectionWrapper
      id={SECTION_IDS.register}
      background="burgundy"
      paddingY="xl"
      ariaLabel="최종 신청"
    >
      <div className="mx-auto max-w-4xl">
        {/* Envelope frame */}
        <div className="relative rounded-2xl bg-[var(--color-burgundy-900)]/40 p-8 ring-1 ring-[var(--color-gold-500)] md:p-12">
          {/* Corner flourishes */}
          {(["tl", "tr", "bl", "br"] as const).map((c) => (
            <span
              key={c}
              aria-hidden
              className={[
                "pointer-events-none absolute h-5 w-5 border-[var(--color-gold-500)]",
                c === "tl" && "top-3 left-3 border-t-2 border-l-2",
                c === "tr" && "top-3 right-3 border-t-2 border-r-2",
                c === "bl" && "bottom-3 left-3 border-b-2 border-l-2",
                c === "br" && "bottom-3 right-3 border-b-2 border-r-2",
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}

          <div className="flex flex-col items-center gap-6 text-center">
            <ScrollReveal>
              <WaxSealBadge text={copy.finalCta.eyebrow} color="burgundy" />
            </ScrollReveal>

            <ScrollReveal delay={0.06}>
              <h2 className="font-[var(--font-display)] text-[28px] leading-[1.35] text-[var(--color-parchment)] md:text-[40px]">
                {copy.finalCta.headline}
              </h2>
            </ScrollReveal>

            <QuillDivider tone="light" className="my-2" />

            <ScrollReveal delay={0.1}>
              <p className="max-w-[52ch] text-[18px] leading-[1.85] text-[var(--color-parchment)]/90 md:text-[19px]">
                {copy.finalCta.subheadline}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="w-full max-w-xl">
              <RegistrationForm className="mt-2" />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row">
                <Button asChild variant="ghost" size="lg">
                  <a href={`#${SECTION_IDS.faq}`}>
                    {copy.finalCta.secondaryCta}
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
