import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { processSteps } from "@/data/site";
import { SectionHeading } from "./ui/Bits";
import { Reveal } from "./ui/Reveal";

export default function Process() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const els = stepRefs.current.filter(Boolean) as HTMLLIElement[];
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = listRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const mid = window.innerHeight * 0.5;
      const p = (mid - r.top) / r.height;
      setProgress(Math.min(1, Math.max(0, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative border-t border-mist/10 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16">
        <SectionHeading
          label="Process"
          title={
            <>
              How I <span className="font-serif italic text-aqua">Work</span>
            </>
          }
          subtitle="A calm, transparent process. You always know what's happening and what comes next."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-[0.9fr_1.1fr] lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="hidden md:block">
            <div className="sticky top-32">
              <p className="label text-mist/40">Step</p>
              <div className="relative mt-4 h-[clamp(6.5rem,12vw,11rem)] overflow-hidden">
                {processSteps.map((s, i) => (
                  <span
                    key={s.number}
                    aria-hidden={active !== i}
                    className={cn(
                      "absolute left-0 top-0 font-display text-[clamp(6.5rem,12vw,11rem)] leading-none tracking-[-0.05em] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      active === i
                        ? "translate-y-0 text-white opacity-100"
                        : i < active
                          ? "-translate-y-8 opacity-0"
                          : "translate-y-8 opacity-0",
                    )}
                  >
                    {s.number}
                  </span>
                ))}
              </div>

              <div className="relative mt-4 h-10 overflow-hidden">
                {processSteps.map((s, i) => (
                  <p
                    key={s.number}
                    className={cn(
                      "absolute left-0 top-0 font-display text-2xl text-aqua transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      active === i ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                    )}
                  >
                    {s.title}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex gap-2">
                {processSteps.map((s, i) => (
                  <span
                    key={s.number}
                    className={cn("h-px flex-1 transition-colors duration-500", i <= active ? "bg-aqua" : "bg-mist/15")}
                  />
                ))}
              </div>
              <p className="label mt-3 text-mist/40">
                {String(active + 1).padStart(2, "0")} / {String(processSteps.length).padStart(2, "0")}
              </p>
            </div>
          </div>

          <ol ref={listRef} className="relative">
            <span aria-hidden className="absolute left-[23px] top-0 h-full w-px bg-mist/12" />
            <span
              aria-hidden
              className="absolute left-[23px] top-0 w-px origin-top bg-gradient-to-b from-aqua to-teal transition-transform duration-300 ease-out"
              style={{ height: "100%", transform: `scaleY(${progress})` }}
            />

            {processSteps.map((s, i) => {
              const isOn = active === i;
              const done = i < active;
              return (
                <li
                  key={s.number}
                  data-index={i}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  className="relative grid grid-cols-[48px_1fr] gap-5 pb-14 last:pb-0 md:gap-8 md:pb-20"
                >
                  <span
                    className={cn(
                      "relative z-10 flex h-12 w-12 items-center justify-center border bg-ink font-mono text-xs tracking-[0.1em] transition-all duration-500",
                      isOn
                        ? "border-aqua text-aqua shadow-[0_0_0_6px_rgba(11,12,16,1),0_0_0_7px_rgba(134,194,50,0.25)]"
                        : done
                          ? "border-teal/60 text-teal"
                          : "border-mist/20 text-mist/40",
                    )}
                  >
                    <span
                      className={cn(
                        "absolute inset-0 bg-aqua transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        isOn ? "scale-100" : "scale-0",
                      )}
                    />
                    <span className={cn("relative transition-colors duration-500", isOn && "font-medium text-ink")}>
                      {s.number}
                    </span>
                  </span>

                  <div
                    className={cn(
                      "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isOn ? "translate-x-0 opacity-100" : "opacity-55",
                    )}
                  >
                    <h3
                      className={cn(
                        "pt-2 text-[clamp(1.5rem,3.2vw,2.4rem)] leading-none transition-colors duration-500",
                        isOn ? "text-white" : "text-mist/75",
                      )}
                    >
                      {s.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-[0.98rem] leading-relaxed text-mist/70">{s.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {s.detail.split(" · ").map((d) => (
                        <li
                          key={d}
                          className={cn(
                            "border px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.14em] transition-colors duration-500",
                            isOn ? "border-teal/40 text-teal" : "border-mist/12 text-mist/45",
                          )}
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <Reveal className="mt-12 md:mt-16">
          <p className="label text-mist/40">
            Typical timeline — <span className="text-aqua/85">2 to 5 weeks</span> depending on scope
          </p>
        </Reveal>
      </div>
    </section>
  );
}
