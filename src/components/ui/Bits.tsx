import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Reveal } from "./Reveal";

export function SectionLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3 text-teal", className)}>
      <span className="h-px w-8 bg-teal/60" />
      <span className="label text-aqua/90">{children}</span>
    </div>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-4 w-4", className)} aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  );
}

type BtnProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
  disabled,
}: BtnProps) {
  const base =
    "group relative inline-flex min-h-[52px] items-center justify-center gap-3 overflow-hidden px-7 text-[0.8rem] font-medium uppercase tracking-[0.16em] font-mono transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua disabled:opacity-50";
  const styles =
    variant === "primary"
      ? "bg-aqua text-ink hover:text-ink"
      : "border border-mist/25 text-mist hover:border-aqua/60 hover:text-aqua";

  const inner = (
    <>
      {variant === "primary" && (
        <span className="absolute inset-0 -translate-x-full bg-teal transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
      )}
      <span className="relative z-10 flex items-center gap-3">
        {children}
        <Arrow className="transition-transform duration-400 group-hover:translate-x-1" />
      </span>
    </>
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={cn(base, styles, className)}
        {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      >
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cn(base, styles, className)}>
      {inner}
    </button>
  );
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  id,
  className,
}: {
  label: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  id?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-5 sm:gap-6", align === "center" && "items-center text-center", className)}>
      <Reveal>
        <SectionLabel className={align === "center" ? "justify-center" : ""}>{label}</SectionLabel>
      </Reveal>
      <Reveal delay={80}>
        <h2
          id={id}
          className={cn(
            "max-w-4xl text-balance text-[clamp(2rem,5vw,3.9rem)] leading-[1.02]",
            align === "center" && "mx-auto",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={160}>
          <p
            className={cn(
              "max-w-xl text-[0.98rem] leading-relaxed text-mist/70 sm:text-base",
              align === "center" && "mx-auto",
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
