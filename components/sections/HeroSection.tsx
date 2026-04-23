"use client";

import { m, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { EnrollmentSeal } from "@/components/motifs/EnrollmentSeal";
import { ScrollUnfurl } from "@/components/motifs/ScrollUnfurl";
import { QuillDivider } from "@/components/motifs/QuillDivider";
import { copy } from "@/lib/copy";
import { REGISTER_ANCHOR, SECTION_IDS } from "@/lib/constants";

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id={SECTION_IDS.hero}
      aria-label="히어로"
      className="bg-parchment-texture relative isolate overflow-hidden"
    >
      {/* Decorative top border */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-gold-500)] to-transparent opacity-80"
      />

      {/* Ambient radial glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(211,166,37,0.18),transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(116,0,1,0.12),transparent_60%)]"
      />

      <div className="mx-auto grid min-h-[100svh] w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 lg:py-28">
        <ScrollUnfurl>
          <div className="flex flex-col gap-6 md:gap-8">
            <p className="inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.32em] text-[var(--color-burgundy-800)]">
              <span
                aria-hidden
                className="inline-block h-px w-10 bg-[var(--color-gold-500)]"
              />
              {copy.hero.eyebrow}
            </p>

            <h1 className="font-[var(--font-display)] text-[40px] leading-[1.15] text-[var(--color-ink)] sm:text-[52px] md:text-[60px] lg:text-[64px]">
              <span className="block text-[var(--color-burgundy-800)]">
                은퇴 전에 준비하는
              </span>
              <span className="block mt-2">AI 실행력</span>
            </h1>

            <p className="max-w-[44ch] text-[19px] leading-[1.75] text-[var(--color-ink-soft)] md:text-[20px]">
              {copy.hero.subheadline}
            </p>

            <QuillDivider className="my-2 justify-start !items-center" />

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="primary" size="xl">
                <a href={REGISTER_ANCHOR}>{copy.hero.primaryCta}</a>
              </Button>
              <Button asChild variant="secondary" size="xl">
                <a href={`#${SECTION_IDS.program}`}>
                  {copy.hero.secondaryCta}
                </a>
              </Button>
            </div>
          </div>
        </ScrollUnfurl>

        {/* Seal */}
        <div className="relative flex items-center justify-center lg:justify-end">
          {reduce ? (
            <EnrollmentSeal
              monogram={copy.hero.sealMonogram}
              label={copy.hero.sealLabel}
              size={220}
            />
          ) : (
            <m.div
              initial={{ scale: 0, rotate: -22, opacity: 0 }}
              animate={{ scale: 1, rotate: -6, opacity: 1 }}
              transition={{
                delay: 0.7,
                duration: 0.7,
                ease: [0.2, 1.4, 0.35, 1],
              }}
              className="relative"
            >
              <EnrollmentSeal
                monogram={copy.hero.sealMonogram}
                label={copy.hero.sealLabel}
                size={220}
              />
            </m.div>
          )}
        </div>
      </div>

      {/* Bottom shimmer */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-500)]/60 to-transparent"
      />
    </section>
  );
}
