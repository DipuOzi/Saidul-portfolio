import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/site";
import { Arrow, Button } from "./ui/Bits";
import { Reveal, RevealWords } from "./ui/Reveal";

const badges = [
  { text: "Shopify", cls: "left-[5%] top-[12%]", delay: "0s" },
  { text: "WordPress", cls: "right-[2%] top-[45%]", delay: "1.2s" },
  { text: "Wix", cls: "left-[10%] bottom-[12%]", delay: "2.1s" },
];

export default function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || window.matchMedia("(pointer: coarse)").matches) return;
    let frame = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        setTilt({ x, y });
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-24 md:pt-28 animate-item-in"
      ref={wrapRef}
    >
      {/* backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(197,198,199,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(197,198,199,0.045) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 78%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-teal/12 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full bg-aqua/6 blur-[130px]"
      />

      <div className="relative mx-auto grid w-full max-w-[1600px] flex-1 grid-cols-1 items-center gap-12 px-5 py-8 sm:px-6 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-16">
        {/* ---------------- LEFT ---------------- */}
        <div className="max-w-2xl">
          <Reveal className="flex items-center gap-4">
            <span className="h-px w-10 bg-teal" />
            <span className="label text-aqua">Web Developer</span>
          </Reveal>

          <h1 className="mt-7 text-[clamp(2.3rem,7.2vw,5.4rem)] font-medium leading-[0.96] tracking-[-0.035em] text-white">
            <RevealWords text="Websites That Make Your" delay={120} />
            <br className="hidden sm:block" />
            <RevealWords text="Business" delay={340} />{" "}
            <RevealWords text="Stand Out." delay={420} highlight={["stand", "out"]} />
          </h1>

          <Reveal delay={620} className="mt-8 max-w-xl">
            <p className="text-[1.05rem] leading-relaxed text-mist/70">
              I&apos;m{" "}
              <span className="name-shine font-display text-[1.08em] font-semibold tracking-[-0.01em]">
                Saidul Alam Dipu
              </span>
              , a Web Developer specializing in{" "}
              <span className="text-aqua/90">Shopify</span>, <span className="text-aqua/90">WordPress</span>, and{" "}
              <span className="text-aqua/90">Wix</span>. I create modern, responsive and user-focused websites
              designed around real business goals.
            </p>
          </Reveal>

          <Reveal delay={720} className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#contact">Start a Project</Button>
            <Button href="#work" variant="ghost">
              View My Work
            </Button>
          </Reveal>

          <Reveal delay={820} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <span className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-dot absolute inset-0 rounded-full bg-aqua" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-aqua" />
              </span>
              <span className="label text-mist/75">{profile.availability}</span>
            </span>
            <span className="label hidden text-mist/45 sm:inline">{profile.location}</span>
          </Reveal>
        </div>

        {/* ---------------- RIGHT : 3D INTERACTIVE DEVICE SHOWCASE ---------------- */}
        <div className="relative mx-auto w-full max-w-[480px] lg:max-w-[580px]">
          <Reveal delay={200}>
            <div
              className="relative flex items-center justify-center py-6"
              style={{
                perspective: "1200px",
              }}
            >
              <div
                className="relative w-full aspect-[4/3] transition-transform duration-500 ease-out"
                style={{
                  transform: `rotateY(${tilt.x * 6}deg) rotateX(${tilt.y * -6}deg)`,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* 3D Browser Plane 1 (Wix/WordPress Blog Mockup - Base Layer) */}
                <div
                  className="absolute inset-0 rounded-lg border border-white/5 bg-ink-2 shadow-2xl transition-all duration-300"
                  style={{
                    transform: "translateZ(-40px)",
                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.8)",
                  }}
                >
                  <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                    <span className="ml-2 rounded bg-white/5 px-2 py-0.5 text-[0.55rem] font-mono text-mist/40">wp-admin/</span>
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="h-3 w-1/4 rounded bg-white/10" />
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="h-16 bg-white/5 rounded" />
                      <div className="h-16 bg-white/5 rounded" />
                      <div className="h-16 bg-white/5 rounded" />
                    </div>
                  </div>
                </div>

                {/* 3D Browser Plane 2 (Shopify Store Mockup - Middle Layer) */}
                <div
                  className="absolute inset-x-4 inset-y-4 rounded-lg border border-aqua/15 bg-ink/95 shadow-2xl transition-all duration-300"
                  style={{
                    transform: "translateZ(0px)",
                  }}
                >
                  <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-aqua" />
                      <span className="h-1.5 w-1.5 rounded-full bg-aqua/50" />
                      <span className="h-1.5 w-1.5 rounded-full bg-aqua/20" />
                    </div>
                    <span className="rounded bg-aqua/10 px-2 py-0.5 text-[0.55rem] font-mono text-aqua/80">shopify-store/</span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-16 bg-white/20 rounded" />
                      <div className="h-4 w-4 bg-aqua/30 rounded-full" />
                    </div>
                    <div className="mt-4 h-24 bg-gradient-to-br from-aqua/10 to-teal/20 rounded border border-aqua/10 flex items-center justify-center">
                      <span className="font-mono text-[0.6rem] text-aqua tracking-[0.15em] uppercase">E-Commerce Live</span>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <div className="h-2 w-1/2 bg-white/10 rounded" />
                      <div className="h-2 w-1/4 bg-white/10 rounded" />
                    </div>
                  </div>
                </div>

                {/* 3D Floating Code Card (Top Layer) */}
                <div
                  className="absolute right-2 top-10 w-2/5 rounded border border-aqua/20 bg-ink-2/95 p-3 font-mono text-[0.52rem] leading-normal text-mist shadow-2xl"
                  style={{
                    transform: "translateZ(50px)",
                  }}
                >
                  <div className="flex items-center justify-between border-b border-white/5 pb-1.5 mb-2">
                    <span className="text-[0.45rem] text-aqua">development.config</span>
                    <span className="h-1 w-1 rounded-full bg-aqua animate-pulse" />
                  </div>
                  <p className="text-aqua/60">&lt;<span className="text-white">ShopifyStore</span></p>
                  <p className="pl-2">platform=<span className="text-teal">&quot;Shopify&quot;</span></p>
                  <p className="pl-2">speedOptimization=<span className="text-teal">true</span></p>
                  <p className="pl-2">responsiveLayout=<span className="text-teal">true</span></p>
                  <p className="text-aqua/60">/&gt;</p>
                </div>

                {/* 3D Floating Tech Badges */}
                {badges.map((b) => (
                  <span
                    key={`v-${b.text}`}
                    className={`animate-floaty absolute z-30 select-none items-center gap-2 border border-aqua/20 bg-ink-2/90 px-4 py-2 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mist/90 backdrop-blur-md flex ${b.cls}`}
                    style={{
                      animationDelay: b.delay,
                      transform: "translateZ(70px)",
                    }}
                  >
                    <span className="h-1 w-1 bg-aqua" />
                    {b.text}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="relative mx-auto flex w-full max-w-[1600px] items-end px-5 pb-6 sm:px-6 md:px-10 md:pb-8 lg:px-16">
        <a href="#work" className="group flex items-center gap-4">
          <span className="relative block h-10 w-px overflow-hidden bg-mist/15">
            <span className="animate-scroll-line absolute inset-0 block bg-aqua" />
          </span>
          <span className="label text-mist/50 transition-colors group-hover:text-aqua">Scroll to explore</span>
          <Arrow className="h-3.5 w-3.5 rotate-90 text-teal transition-transform duration-500 group-hover:translate-y-1" />
        </a>
      </div>
    </section>

    {/* services marquee strip — first thing seen after scrolling past the full-screen hero */}
    <div className="relative overflow-hidden border-y border-mist/10 bg-ink-2/25 py-4">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12">
              {[
                "Shopify Development",
                "WordPress",
                "Wix Studio",
                "E-commerce",
                "Website Redesign",
                "Landing Pages",
                "Responsive Design",
                "Speed Optimization",
              ].map((t) => (
                <span key={t} className="label flex items-center gap-12 text-mist/40">
                  {t}
                  <span className="h-1 w-1 rotate-45 bg-teal" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
