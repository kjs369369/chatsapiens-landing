import {
  BookOpen,
  Sparkles,
  Hammer,
  Rocket,
  Lightbulb,
  Compass,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { QuillDivider } from "@/components/motifs/QuillDivider";
import { ParchmentCard } from "@/components/motifs/ParchmentCard";
import { copy } from "@/lib/copy";
import { SECTION_IDS } from "@/lib/constants";

const ICONS = [BookOpen, Sparkles, Hammer, Rocket, Lightbulb, Compass];

export function ProgramDetailsSection() {
  return (
    <SectionWrapper
      id={SECTION_IDS.program}
      background="parchment-deep"
      paddingY="lg"
      ariaLabel="프로그램 소개"
    >
      <div className="flex flex-col items-center gap-5 text-center">
        <ScrollReveal>
          <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-[var(--color-burgundy-800)]">
            {copy.program.eyebrow}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="font-[var(--font-display)] text-[28px] leading-tight text-[var(--color-ink)] md:text-[38px]">
            {copy.program.title}
          </h2>
        </ScrollReveal>
        <QuillDivider className="mt-2" />
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {copy.program.benefits.map((benefit, idx) => {
          const Icon = ICONS[idx % ICONS.length];
          return (
            <ScrollReveal key={idx} delay={(idx % 3) * 0.08}>
              <ParchmentCard className="h-full" elevated>
                <div className="flex h-full flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-burgundy-800)] text-[var(--color-gold-300)] ring-1 ring-[var(--color-gold-500)]"
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span
                      aria-hidden
                      className="font-[var(--font-display)] text-[13px] tracking-[0.25em] text-[var(--color-burgundy-800)] tabular-display"
                    >
                      No.{String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-[18px] leading-[1.7] text-[var(--color-ink)] md:text-[19px]">
                    {benefit}
                  </p>
                </div>
              </ParchmentCard>
            </ScrollReveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
