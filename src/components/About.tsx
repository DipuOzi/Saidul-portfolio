import { useState } from "react";
import portrait from "@/assets/portrait.jpg";
import { cn } from "@/utils/cn";
import { expertise, skills, stats } from "@/data/site";
import { Button, SectionLabel } from "./ui/Bits";
import { Reveal } from "./ui/Reveal";

const focus = [
  { k: "Shopify", v: "E-commerce stores" },
  { k: "WordPress", v: "Business websites" },
  { k: "Wix", v: "Brand & portfolio sites" },
];

export default function About() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <section id="about" className="relative scroll-mt-24 border-t border-mist/10 py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[20%] top-1/3 h-[420px] w-[420px] rounded-full bg-teal/8 blur-[150px]"
      />
      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 gap-14 px-5 md:px-10 lg:grid-cols-[0.95fr_1fr] lg:gap-16 lg:px-16">
        <div className="relative lg:sticky lg:top-28 lg:self-start">
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            <Reveal className="col-span-8 row-span-2">
              <div className="relative h-full overflow-hidden bg-ink-2">
                <img
                  src={portrait}
                  alt="Saidul Alam Dipu, Web Developer"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/4] h-full w-full object-cover object-top grayscale-[15%] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:grayscale-0"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-mist/10" />
                <span aria-hidden className="absolute left-4 top-4 h-8 w-8 border-l border-t border-aqua/70" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-lg text-white">Saidul Alam Dipu</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="col-span-4">
              <div className="flex h-full flex-col justify-between border border-mist/12 bg-ink-2/40 p-4 md:p-5">
                <p className="label text-[0.55rem] text-mist/45">Focus</p>
                <ul className="mt-4 space-y-3.5">
                  {focus.map((f) => (
                    <li key={f.k} className="group">
                      <p className="font-display text-sm text-white transition-colors group-hover:text-aqua md:text-base">
                        {f.k}
                      </p>
                      <p className="mt-0.5 hidden text-[0.7rem] leading-snug text-mist/55 sm:block">{f.v}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200} className="col-span-4">
              <div className="flex h-full flex-col justify-between bg-aqua p-4 text-ink md:p-5">
                <p className="label text-[0.55rem] text-ink/60">Based in</p>
                <div>
                  <p className="font-display text-2xl leading-none md:text-3xl">Dhaka</p>
                  <p className="mt-2 text-[0.7rem] leading-snug text-ink/75">Working with clients worldwide</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={260} className="col-span-12">
              <div className="flex flex-col gap-4 border border-mist/12 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md font-display text-[0.98rem] leading-snug text-mist/80 md:text-base">
                  &ldquo;Good design starts with understanding the business — not the template.&rdquo;
                </p>
                <span className="flex shrink-0 items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-pulse-dot absolute inset-0 rounded-full bg-aqua" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-aqua" />
                  </span>
                  <span className="label text-mist/60">Open to work</span>
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="lg:pt-2">
          <Reveal>
            <SectionLabel>About Me</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-[clamp(2rem,4.8vw,3.7rem)] leading-[1.02]">
              A Web Developer who builds around the <span className="font-serif italic text-aqua">business</span>, not the template.
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-[1.02rem] leading-relaxed text-mist/75">
              <span className="font-display text-[1.08em] font-semibold tracking-[-0.01em] text-white">I&apos;m Saidul Alam Dipu</span>
              {" "}— a Web Developer specializing in{" "}
              <span className="text-aqua/90">Shopify</span>, <span className="text-aqua/90">WordPress</span>, and{" "}
              <span className="text-aqua/90">Wix</span>. I partner with founders, small businesses and growing brands to
              design and develop websites that don&apos;t just look polished — they actually work for the business behind them.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-mist/65">
              Every project I take on starts with listening. I want to understand the offer, the audience, the way
              people buy and the small details that already make a business different. From there I design clean,
              conversion-friendly layouts and develop them with care on the platform that fits the workflow best.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-mist/55">
              I&apos;ve shipped Shopify stores for apparel brands, WordPress websites for service businesses and
              IT providers, and clean Wix sites for studios and educators. My focus stays the same on every project:
              modern design, fast loading, fully responsive and easy for the client to manage after launch.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-2.5">
              {skills.map((s) => (
                <button
                  key={s}
                  type="button"
                  onMouseEnter={() => setActiveSkill(s)}
                  onMouseLeave={() => setActiveSkill(null)}
                  onFocus={() => setActiveSkill(s)}
                  onBlur={() => setActiveSkill(null)}
                  className={cn(
                    "group relative min-h-[44px] overflow-hidden border px-4 font-mono text-[0.66rem] uppercase tracking-[0.16em] transition-all duration-400",
                    activeSkill === s ? "border-aqua text-ink" : "border-mist/15 text-mist/65 hover:border-teal/50",
                  )}
                >
                  <span
                    className={cn(
                      "absolute inset-0 bg-aqua transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      activeSkill === s ? "translate-y-0" : "translate-y-full",
                    )}
                  />
                  <span className="relative z-10">{s}</span>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={340}>
            <dl className="mt-10 grid grid-cols-3 gap-px border border-mist/10 bg-mist/10">
              {stats.map((s) => (
                <div key={s.label} className="group bg-ink px-4 py-5 transition-colors duration-500 hover:bg-ink-2/70 sm:px-5 sm:py-6">
                  <dt className="font-display text-[1.5rem] leading-none text-white transition-colors duration-500 group-hover:text-aqua sm:text-[1.8rem]">
                    {s.value}
                  </dt>
                  <dd className="label mt-2.5 text-[0.55rem] text-mist/50">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Expertise */}
          <Reveal delay={380}>
            <div className="mt-12 border-t border-mist/10 pt-10">
              <p className="label text-aqua">Expertise</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3 sm:gap-5">
                {expertise.map((group) => (
                  <div key={group.title} className="flex h-full flex-col border border-mist/10 bg-ink-2/15 p-5">
                    <h3 className="min-h-[2.25rem] font-display text-lg leading-tight text-white">{group.title}</h3>
                    <ul className="mt-4 space-y-2.5">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-mist/65">
                          <span className="mt-2 h-1 w-1 shrink-0 bg-aqua/80" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-10">
              <Button href="#contact" variant="ghost">
                Work With Me
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
