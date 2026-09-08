import { useCallback, useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { testimonials } from "@/data/site";
import { Arrow, SectionLabel } from "./ui/Bits";
import { Reveal } from "./ui/Reveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 7000);
    return () => clearInterval(t);
  }, [go, paused]);

  return (
    <section className="relative border-t border-mist/10 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 lg:px-16">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <SectionLabel>Testimonials</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => go(-1)}
                className="flex h-12 w-12 items-center justify-center border border-mist/15 text-mist/60 transition-all duration-400 hover:border-aqua hover:text-aqua"
              >
                <Arrow className="rotate-180" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => go(1)}
                className="flex h-12 w-12 items-center justify-center border border-mist/15 text-mist/60 transition-all duration-400 hover:border-aqua hover:text-aqua"
              >
                <Arrow />
              </button>
            </div>
          </Reveal>
        </div>

        <div
          className="relative mt-12 overflow-hidden border-t border-mist/10 pt-12 md:mt-16 md:pt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_auto] lg:gap-12">
            {/* LEFT — quote slider (~65%) */}
            <div className="relative min-w-0">
              {/* oversized quote mark anchored to the left corner of the feedback text */}
              <span
                aria-hidden
                className="pointer-events-none absolute left-0 top-0 select-none font-serif text-[6rem] leading-[0.9] text-teal/10 md:text-[8rem]"
              >
                &ldquo;
              </span>
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ transform: `translateX(-${index * 100}%)` }}
                  aria-live="polite"
                >
                  {testimonials.map((t, i) => (
                    <figure
                      key={i}
                      className={cn(
                        "w-full shrink-0 pl-12 pr-4 transition-opacity duration-700 md:pl-16 md:pr-8",
                        index === i ? "opacity-100" : "opacity-25",
                      )}
                      aria-hidden={index !== i}
                    >
                    <blockquote className="max-w-4xl text-balance font-display text-[clamp(1.3rem,3.4vw,2.6rem)] font-normal leading-[1.22] tracking-[-0.02em] text-white/90">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2">
                      <span className="h-px w-10 bg-teal" />
                      <span className="font-display text-base text-white sm:text-lg">{t.name}</span>
                      <span className="text-sm text-mist/60 sm:text-[0.95rem]">
                        {t.role}, {t.company}
                      </span>
                    </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — subtle editorial accent (~35%) */}
            <aside
          className="relative hidden h-full w-full max-w-[320px] shrink-0 flex-col justify-between border-l border-mist/10 pl-8 lg:flex"
          aria-label="What my clients say"
        >
              <div className="relative flex flex-1 flex-col justify-between py-2">
                <div>
                  <p className="label text-aqua/85">What My Clients Say</p>
                </div>

                <div className="mt-12">
                  <div className="flex items-baseline gap-3">
                    <span
                      key={index}
                      className="font-display text-[clamp(2.6rem,5vw,3.4rem)] leading-none text-aqua transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      aria-live="polite"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[0.7rem] tracking-[0.18em] text-mist/35">
                      — {String(testimonials.length).padStart(2, "0")}
                    </span>
                  </div>


                </div>
              </div>
            </aside>
          </div>

          {/* progress bars (counter is now in the right panel on desktop) */}
          <div className="mt-12 flex flex-1 items-center gap-3 lg:hidden">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className="group relative h-6 flex-1 max-w-[120px]"
              >
                <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-mist/15 transition-colors group-hover:bg-mist/35" />
                <span
                  className={cn(
                    "absolute inset-x-0 top-1/2 h-px -translate-y-1/2 origin-left bg-aqua transition-transform duration-700",
                    index === i ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
