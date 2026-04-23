import Link from "next/link";
import { copy } from "@/lib/copy";
import { SECTION_IDS } from "@/lib/constants";

export function FooterSection() {
  return (
    <footer
      id={SECTION_IDS.footer}
      aria-label="푸터"
      className="bg-[var(--color-burgundy-900)] text-[var(--color-parchment)]"
    >
      <div
        aria-hidden
        className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-gold-500)]/80 to-transparent"
      />
      <div className="mx-auto w-full max-w-6xl px-5 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="font-[var(--font-display)] text-[22px] font-semibold tracking-wide text-[var(--color-gold-300)]">
              {copy.footer.brandName}
            </p>
            <p className="mt-2 text-[16px] leading-[1.7] text-[var(--color-parchment)]/80">
              {copy.footer.description}
            </p>
          </div>

          <div className="text-[15.5px] leading-[1.9] text-[var(--color-parchment)]/80">
            <dl className="flex flex-col gap-1">
              <div className="flex gap-2">
                <dt className="text-[var(--color-gold-300)]">Email</dt>
                <dd>
                  <a
                    href={`mailto:${copy.footer.email}`}
                    className="underline-offset-4 hover:underline"
                  >
                    {copy.footer.email}
                  </a>
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-[var(--color-gold-300)]">주소</dt>
                <dd>{copy.footer.address}</dd>
              </div>
            </dl>
          </div>

          <div className="text-[15.5px] leading-[1.9]">
            <ul className="flex flex-col gap-1 text-[var(--color-parchment)]/80">
              <li>
                <Link
                  href="#"
                  className="underline-offset-4 hover:text-[var(--color-gold-300)] hover:underline"
                >
                  {copy.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="underline-offset-4 hover:text-[var(--color-gold-300)] hover:underline"
                >
                  {copy.footer.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          aria-hidden
          className="mt-10 h-px w-full bg-[var(--color-gold-500)]/25"
        />
        <p className="mt-6 text-[14px] text-[var(--color-parchment)]/60">
          {copy.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
