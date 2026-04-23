"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqAccordionProps = {
  items: ReadonlyArray<FaqItem>;
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className="flex w-full flex-col gap-3"
    >
      {items.map((item) => (
        <Accordion.Item
          key={item.id}
          value={item.id}
          className="overflow-hidden rounded-xl bg-[var(--color-parchment)]/85 ring-1 ring-[var(--color-gold-700)]/30 data-[state=open]:shadow-[var(--shadow-parchment)]"
        >
          <Accordion.Header>
            <Accordion.Trigger
              className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[19px] leading-[1.5] font-[var(--font-display)] text-[var(--color-burgundy-800)] md:text-[20px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold-500)] focus-visible:ring-offset-2"
            >
              <span className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-burgundy-800)] text-[var(--color-gold-300)] text-[13px] font-semibold"
                >
                  Q
                </span>
                <span>{item.question}</span>
              </span>
              <ChevronDown
                aria-hidden
                className="h-5 w-5 shrink-0 text-[var(--color-burgundy-800)] transition-transform duration-300 group-data-[state=open]:rotate-180"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="flex items-start gap-3 border-t border-[var(--color-gold-700)]/25 px-6 py-5 text-[18px] leading-[1.8] text-[var(--color-ink-soft)] md:text-[19px]">
              <span
                aria-hidden
                className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold-500)] text-[var(--color-ink)] text-[13px] font-semibold"
              >
                A
              </span>
              <p>{item.answer}</p>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
