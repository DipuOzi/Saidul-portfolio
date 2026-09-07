import { profile } from "@/data/site";
import { Button } from "./ui/Bits";
import { Reveal } from "./ui/Reveal";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-mist/10 py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(197,198,199,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(197,198,199,0.05) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 10%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/10 blur-[160px]"
      />

      <div className="relative mx-auto max-w-[1100px] px-5 text-center md:px-10">
        <Reveal>
          <span className="label inline-flex items-center gap-3 text-aqua">
            <span className="h-1 w-1 rotate-45 bg-aqua" />
            Let&apos;s Collaborate
            <span className="h-1 w-1 rotate-45 bg-aqua" />
          </span>
        </Reveal>

        <Reveal delay={90}>
          <h2 className="mt-7 text-balance text-[clamp(2.2rem,6.5vw,5.2rem)] leading-[0.98]">
            Have a Project in <span className="font-serif italic text-aqua">Mind?</span>
          </h2>
        </Reveal>

        <Reveal delay={170}>
          <p className="mx-auto mt-7 max-w-xl text-[1.02rem] leading-relaxed text-mist/70">
            Tell me what you&apos;re building, and let&apos;s create a website that works for your business.
          </p>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="#contact">Start a Project</Button>
            <Button href="#work" variant="ghost">
              View My Work
            </Button>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <p className="label mt-10 text-mist/40">
            Or email directly —{" "}
            <a
              href={`mailto:${profile.email}`}
              className="text-mist/75 underline-offset-4 transition-colors hover:text-aqua hover:underline"
            >
              {profile.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
