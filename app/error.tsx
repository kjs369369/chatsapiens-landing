"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to the console for debugging. In production this would go
    // to an error monitoring service.
    console.error(error);
  }, [error]);

  return (
    <main
      role="alert"
      aria-live="assertive"
      className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[var(--color-parchment)] px-6 py-20 text-center text-[var(--color-ink)]"
    >
      <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-[var(--color-burgundy-800)]">
        뜻밖의 오류
      </p>
      <h1 className="font-[var(--font-display)] text-[32px] leading-tight text-[var(--color-ink)] md:text-[42px]">
        페이지를 불러오는 중 문제가 발생했습니다
      </h1>
      <p className="max-w-xl text-[17px] leading-[1.8] text-[var(--color-ink-soft)] md:text-[18px]">
        잠시 후 다시 시도해 주십시오. 문제가 계속된다면 페이지를 새로
        열어보시거나 관리자에게 알려주시기 바랍니다.
      </p>
      <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row">
        <Button variant="primary" size="md" onClick={() => reset()}>
          다시 시도하기
        </Button>
        <Button variant="secondary" size="md" asChild>
          <Link href="/">처음으로 돌아가기</Link>
        </Button>
      </div>
    </main>
  );
}
