import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/utils/cn";

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit & { once?: boolean }) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options?.once !== false) observer.unobserve(el);
        } else if (options?.once === false) {
          setInView(false);
        }
      },
      { threshold: options?.threshold ?? 0.15, rootMargin: options?.rootMargin ?? "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  variant?: "fade" | "mask";
  id?: string;
};

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  variant = "fade",
  id,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      id={id}
      ref={ref}
      data-visible={inView}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={cn(variant === "mask" ? "reveal-mask" : "reveal", className)}
    >
      {children}
    </Tag>
  );
}

/** Splits a string into words that stagger in. */
export function RevealWords({
  text,
  className,
  wordClass,
  delay = 0,
  step = 45,
  highlight = [],
}: {
  text: string;
  className?: string;
  wordClass?: string;
  delay?: number;
  step?: number;
  highlight?: string[];
}) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const words = text.split(" ");
  return (
    <span ref={ref} className={cn("inline", className)}>
      {words.map((word, i) => {
        const clean = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
        const isHi = highlight.some((h) => h.toLowerCase() === clean);
        return (
          <span
            key={`${word}-${i}`}
            className="-mb-[0.16em] inline-block overflow-hidden pb-[0.16em] align-bottom"
          >
            <span
              className={cn(
                "inline-block transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                inView ? "translate-y-0 opacity-100" : "translate-y-[110%] opacity-0",
                isHi && "font-serif italic text-aqua",
                wordClass,
              )}
              style={{ transitionDelay: `${delay + i * step}ms` }}
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </span>
          </span>
        );
      })}
    </span>
  );
}
