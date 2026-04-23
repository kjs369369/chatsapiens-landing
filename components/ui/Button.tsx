import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-[var(--font-display)] font-semibold tracking-wide",
    "rounded-md transition-[transform,background-color,color,box-shadow]",
    "duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold-500)] focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-60",
    "hover:-translate-y-[1px]",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "bg-[var(--color-burgundy-800)] text-white",
          "ring-1 ring-[var(--color-gold-500)]/60 shadow-[var(--shadow-wax)]",
          "hover:bg-[var(--color-burgundy-700)]",
        ].join(" "),
        secondary: [
          "bg-[var(--color-parchment)] text-[var(--color-burgundy-800)]",
          "ring-1 ring-[var(--color-burgundy-800)]/30",
          "hover:bg-[var(--color-parchment-dark)]",
        ].join(" "),
        gold: [
          "bg-[var(--color-gold-500)] text-[var(--color-ink)]",
          "ring-1 ring-[var(--color-gold-700)]/60",
          "hover:bg-[var(--color-gold-300)]",
        ].join(" "),
        ghost: [
          "bg-transparent text-[var(--color-parchment)]",
          "ring-1 ring-[var(--color-gold-500)]/50",
          "hover:bg-[var(--color-burgundy-700)]/40",
        ].join(" "),
        link: [
          "bg-transparent text-[var(--color-gold-500)] underline-offset-4",
          "hover:underline hover:text-[var(--color-gold-300)]",
        ].join(" "),
      },
      size: {
        sm: "min-h-[48px] px-4 py-2 text-[15px]",
        md: "min-h-[48px] px-6 py-3 text-[17px]",
        lg: "min-h-[56px] px-8 py-4 text-[18px]",
        xl: "min-h-[60px] px-10 py-5 text-[20px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className, variant, size, asChild = false, type, ...props },
    ref,
  ) {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        // Only set button type when rendering as a real button
        {...(asChild ? {} : { type: type ?? "button" })}
        {...props}
      />
    );
  },
);

export { buttonVariants };
