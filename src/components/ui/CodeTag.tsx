import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

/**
 * Brand signature: a JSX-style self-closing tag that types itself in,
 * like a terminal prompt. Replaces a traditional logo image.
 */
export default function CodeTag({
  className,
  startInView = false,
  selfClosing = false,
}: {
  className?: string;
  startInView?: boolean;
  selfClosing?: boolean;
}) {
  // header: opening tag  <Saidul Alam Dipu>
  // footer: self-closing  <Saidul Alam Dipu/>
  const FULL = selfClosing ? "<Saidul Alam Dipu/>" : "<Saidul Alam Dipu>";
  // green: "<", "Saidul", and the closing ">" (or "/>")  —  white: "Alam Dipu"
  const tail = selfClosing ? 2 : 1;
  const isGreen = (i: number) => i === 0 || (i >= 1 && i <= 6) || i >= FULL.length - tail;

  const ref = useRef<HTMLSpanElement | null>(null);
  const [started, setStarted] = useState(!startInView);
  const [n, setN] = useState(0);

  // footer variant: start typing when scrolled into view
  useEffect(() => {
    if (!startInView) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setStarted(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [startInView]);

  // typing effect
  useEffect(() => {
    if (!started) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(FULL.length);
      return;
    }
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setN(i);
      if (i >= FULL.length) clearInterval(t);
    }, 55);
    return () => clearInterval(t);
  }, [started, FULL]);

  return (
    <span
      ref={ref}
      aria-hidden
      className={cn(
        "relative inline-block font-display font-semibold leading-none tracking-tight",
        className,
      )}
    >
      {/* invisible sizer — prevents layout shift while typing */}
      <span className="invisible whitespace-pre">{FULL}</span>
      <span className="absolute inset-0 whitespace-pre">
        {FULL.slice(0, n)
          .split("")
          .map((ch, i) => (
            <span key={i} className={isGreen(i) ? "text-aqua" : "text-white"}>
              {ch}
            </span>
          ))}
        <span className="animate-blink ml-1 inline-block h-[0.95em] w-[0.55ch] translate-y-[0.12em] bg-aqua/90" />
      </span>
    </span>
  );
}
