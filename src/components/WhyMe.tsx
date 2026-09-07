import { useState } from "react";
import { cn } from "@/utils/cn";
import { advantages } from "@/data/site";
import { SectionLabel } from "./ui/Bits";
import { Reveal } from "./ui/Reveal";

export default function WhyMe() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative border-t border-mist/10 bg-ink-2/20 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-5 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <SectionLabel>Why Work With Me</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-[clamp(1.9rem,4.4vw,3.3rem)] leading-[1.05]">
              A partner, not just a <span className="font-serif italic text-aqua">pair of hands.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-mist/65 sm:text-base">
              Clean builds, clear updates and a website you can run yourself after launch — that&apos;s the standard on
              every project.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-10 hidden items-baseline gap-4 lg:flex">
              <span className="font-display text-[5.5rem] leading-none text-aqua/15">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="label pb-3 text-mist/45">/ {String(advantages.length).padStart(2, "0")}</span>
            </div>
          </Reveal>
        </div>

        <ul className="grid grid-cols-1 gap-px border border-mist/10 bg-mist/10 sm:grid-cols-2">
          {advantages.map((a, i) => (
            <li key={a.title}>
              <Reveal delay={i * 40}>
                <div
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  tabIndex={0}
                  className={cn(
                    "group relative h-full cursor-default bg-ink p-5 outline-none transition-colors duration-500 sm:p-7",
                    active === i ? "bg-ink-2/60" : "hover:bg-ink-2/40",
                  )}
                >
                  <span
                    className={cn(
                      "absolute left-0 top-0 h-px bg-aqua transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      active === i ? "w-full" : "w-0",
                    )}
                  />
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={cn(
                        "font-mono text-[0.65rem] tracking-[0.2em] transition-colors duration-400",
                        active === i ? "text-aqua" : "text-mist/35",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden
                      className={cn(
                        "h-4 w-4 transition-all duration-500",
                        active === i ? "text-aqua opacity-100" : "text-mist/30 opacity-60",
                      )}
                    >
                      <path d="M4 12.5l5 5L20 6.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                    </svg>
                  </div>
                  <h3 className="mt-5 font-display text-[1.05rem] font-medium leading-snug text-white transition-transform duration-500 group-hover:translate-x-1">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist/60">{a.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
