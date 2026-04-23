import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[var(--color-parchment)] px-6 py-20 text-center text-[var(--color-ink)]"
    >
      <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-[var(--color-burgundy-800)]">
        404 · 사라진 두루마리
      </p>
      <h1 className="font-[var(--font-display)] text-[32px] leading-tight text-[var(--color-ink)] md:text-[42px]">
        이 두루마리는 존재하지 않습니다
      </h1>
      <p className="max-w-xl text-[17px] leading-[1.8] text-[var(--color-ink-soft)] md:text-[18px]">
        찾으시려는 페이지는 서가에서 찾을 수 없었습니다. 주소가 올바른지
        확인해 주시거나, 아래 문을 통해 본관으로 돌아가 주십시오.
      </p>
      <div className="mt-4">
        <Button variant="primary" size="md" asChild>
          <Link href="/">본관으로 돌아가기</Link>
        </Button>
      </div>
    </main>
  );
}
