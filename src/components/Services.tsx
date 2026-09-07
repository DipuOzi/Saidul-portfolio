import { useState } from "react";
import { cn } from "@/utils/cn";
import { services } from "@/data/site";
import { Arrow, SectionHeading } from "./ui/Bits";
import { Reveal } from "./ui/Reveal";

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(0);

  return (
    <section id="services" className="relative scroll-mt-24 border-t border-mist/10 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            label="Services"
            title={
              <>
                What I Can Help <span className="font-serif italic text-aqua">You</span> With
              </>
            }
          />
          <Reveal delay={140}>
            <p className="max-w-lg text-[0.98rem] leading-relaxed text-mist/70 lg:ml-auto lg:text-right sm:text-base">
              From a single high-converting landing page to a full e-commerce build — every project is
              designed, developed and optimized with the same standard of care.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 border-t border-mist/10 lg:mt-16">
          {services.map((s, i) => {
            const isOn = hovered === i;
            return (
              <Reveal key={s.number} delay={i * 50}>
                <div
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(i)}
                  onFocus={() => setHovered(i)}
                  tabIndex={0}
                  className="group relative border-b border-mist/10 py-7 outline-none transition-colors duration-500 md:py-9"
                >
                  <span
                    className={cn(
                      "absolute bottom-[-1px] left-0 h-px bg-aqua transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isOn ? "w-full" : "w-0",
                    )}
                  />

                  <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-[auto_1fr_auto] md:gap-10">
                    <span
                      className={cn(
                        "font-mono text-xs tracking-[0.2em] transition-all duration-500 md:pt-3",
                        isOn ? "text-aqua" : "text-mist/40",
                      )}
                    >
                      {s.number}
                    </span>

                    <div>
                      <h3
                        className={cn(
                          "text-[clamp(1.4rem,3.2vw,2.4rem)] leading-[1.08] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                          isOn ? "translate-x-1 text-white md:translate-x-2" : "text-mist/85",
                        )}
                      >
                        {s.title}
                      </h3>

                      <div
                        className={cn(
                          "grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                          isOn ? "grid-rows-[1fr] opacity-100" : "grid-rows-[1fr] opacity-100 md:grid-rows-[0fr] md:opacity-0",
                        )}
                      >
                        <div className="min-h-0 overflow-hidden">
                          <p className="max-w-2xl pt-3 text-[0.95rem] leading-relaxed text-mist/70 md:pt-4 md:text-[0.98rem]">
                            {s.description}
                          </p>
                          <ul className="flex flex-wrap gap-2 pt-4">
                            {s.tags.map((t) => (
                              <li
                                key={t}
                                className="border border-teal/25 px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-teal"
                              >
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <span
                      className={cn(
                        "hidden h-12 w-12 items-center justify-center border transition-all duration-500 md:flex",
                        isOn ? "border-aqua bg-aqua text-ink" : "-rotate-45 border-mist/15 text-mist/50",
                      )}
                    >
                      <Arrow />
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
