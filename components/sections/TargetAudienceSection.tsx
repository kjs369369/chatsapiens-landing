import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { QuillDivider } from "@/components/motifs/QuillDivider";
import { copy } from "@/lib/copy";
import { SECTION_IDS } from "@/lib/constants";

export function TargetAudienceSection() {
  return (
    <SectionWrapper
      id={SECTION_IDS.target}
      background="parchment-deep"
      paddingY="lg"
      ariaLabel="수강 대상"
    >
      <div className="flex flex-col items-center gap-5 text-center">
        <ScrollReveal>
          <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-[var(--color-burgundy-800)]">
            {copy.target.eyebrow}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="font-[var(--font-display)] text-[28px] leading-tight text-[var(--color-ink)] md:text-[38px]">
            {copy.target.title}
          </h2>
        </ScrollReveal>
        <QuillDivider className="mt-2" />
      </div>

      <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {copy.target.items.map((item, idx) => (
          <ScrollReveal
            as="li"
            key={idx}
            delay={idx * 0.06}
            className="flex items-start gap-4 rounded-lg bg-[var(--color-parchment)]/80 p-5 ring-1 ring-[var(--color-gold-700)]/25"
          >
            <CheckMark />
            <p className="text-[18px] leading-[1.7] text-[var(--color-ink-soft)] md:text-[19px]">
              {item}
            </p>
          </ScrollReveal>
        ))}
      </ul>
    </SectionWrapper>
  );
}

function CheckMark() {
  return (
    <span
      aria-hidden
      className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-forest-700)] text-[var(--color-gold-300)] ring-1 ring-[var(--color-gold-500)]/60"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-3.5 w-3.5"
      >
        <path d="M5 12l4 4L19 7" />
      </svg>
    </span>
  );
}
