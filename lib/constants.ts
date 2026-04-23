/**
 * 공통 상수
 */

export const SITE_URL = "https://chatsapiens.kr";

export const REGISTER_ANCHOR = "#register";

export const SECTION_IDS = {
  hero: "hero",
  problem: "problem",
  solution: "solution",
  coreValues: "core-values",
  differentiation: "differentiation",
  outcome: "outcome",
  target: "target",
  faq: "faq",
  program: "program",
  philosophy: "philosophy",
  register: "register",
  footer: "footer",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];
