"use client";

import { useId, useState, useCallback, type FormEvent } from "react";
import { Button } from "./Button";
import { cn } from "@/lib/cn";
import { copy } from "@/lib/copy";

type Status = "idle" | "loading" | "success" | "error";

export type RegistrationFormProps = {
  endpoint?: string;
  onSuccess?: (email: string) => void;
  className?: string;
  label?: string;
  placeholder?: string;
  buttonLabel?: string;
  helper?: string;
  source?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function RegistrationForm({
  endpoint = "/api/register",
  onSuccess,
  className,
  label = copy.finalCta.formLabel,
  placeholder = copy.finalCta.formPlaceholder,
  buttonLabel = copy.finalCta.formButton,
  helper = copy.finalCta.formHelper,
  source = "final-cta",
}: RegistrationFormProps) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const submit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const trimmed = email.trim();
      if (!EMAIL_RE.test(trimmed)) {
        setStatus("error");
        setMessage("올바른 이메일 주소를 입력해주세요.");
        return;
      }

      setStatus("loading");
      setMessage("");

      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email: trimmed, source }),
        });
        const data = (await res.json().catch(() => ({}))) as { ok?: boolean };
        if (!res.ok || !data.ok) {
          throw new Error("request_failed");
        }
        setStatus("success");
        setMessage(copy.finalCta.successMessage);
        setEmail("");
        onSuccess?.(trimmed);
      } catch {
        setStatus("error");
        setMessage(copy.finalCta.errorMessage);
      }
    },
    [email, endpoint, onSuccess, source],
  );

  const isLoading = status === "loading";
  const inputId = `${id}-email`;
  const helperId = `${id}-helper`;
  const messageId = `${id}-message`;

  return (
    <form
      onSubmit={submit}
      className={cn("flex w-full flex-col gap-3", className)}
      noValidate
    >
      <label htmlFor={inputId} className="sr-only">
        {label}
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id={inputId}
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          aria-describedby={`${helperId} ${status !== "idle" ? messageId : ""}`.trim()}
          aria-invalid={status === "error"}
          disabled={isLoading}
          className={cn(
            "min-h-[56px] flex-1 rounded-md",
            "bg-[var(--color-parchment)] text-[var(--color-ink)]",
            "px-5 py-3 text-[18px] font-[var(--font-body)]",
            "ring-1 ring-[var(--color-gold-500)]/60",
            "placeholder:text-[var(--color-ink-muted)]",
            "focus-visible:ring-2 focus-visible:ring-[var(--color-gold-500)]",
            "disabled:opacity-70",
          )}
        />
        <Button
          type="submit"
          variant="gold"
          size="lg"
          disabled={isLoading}
          aria-label={buttonLabel}
          className="sm:min-w-[180px]"
        >
          {isLoading ? "전송 중..." : buttonLabel}
        </Button>
      </div>
      <p
        id={helperId}
        className="text-[15px] text-[var(--color-parchment)]/90"
      >
        {helper}
      </p>
      {status !== "idle" && message ? (
        <p
          id={messageId}
          role={status === "error" ? "alert" : "status"}
          aria-live="polite"
          className={cn(
            "text-[15px] font-semibold",
            status === "success"
              ? "text-[var(--color-gold-300)]"
              : "text-[#ffbaba]",
          )}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
