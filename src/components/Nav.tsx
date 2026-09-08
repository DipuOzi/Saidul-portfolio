import { useEffect, useState } from "react";
import CodeTag from "./ui/CodeTag";
import { cn } from "@/utils/cn";
import { navLinks, profile } from "@/data/site";
import { Arrow } from "./ui/Bits";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-ink/80 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 h-px bg-mist/10 transition-opacity duration-500",
          scrolled ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        className="absolute bottom-0 left-0 h-px bg-aqua/70 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />

      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex max-w-[1600px] items-center justify-between px-6 transition-all duration-500 md:px-10 lg:px-16",
          scrolled ? "py-4" : "py-6",
        )}
      >
        <a
          href="#home"
          aria-label={`${profile.name} — ${profile.role}`}
          className="group flex flex-col items-center leading-none"
        >
          <CodeTag className="text-[0.98rem] sm:text-[1.1rem]" />
          <span className="label mt-2.5 text-[0.6rem] text-mist/45 transition-colors group-hover:text-aqua">
            {profile.role}
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "group relative py-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] transition-colors duration-300",
                  active === l.href ? "text-aqua" : "text-mist/65 hover:text-white",
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-px bg-aqua transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    active === l.href ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="group relative hidden min-h-[48px] items-center gap-3 overflow-hidden border border-mist/20 px-5 py-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-mist transition-colors duration-300 hover:border-aqua/50 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua sm:inline-flex"
          >
            <span className="absolute inset-0 -translate-y-full bg-aqua transition-transform duration-450 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
            <span className="relative z-10 flex items-center gap-2.5">
              Start a Project
              <Arrow className="h-3.5 w-3.5 transition-transform duration-400 group-hover:translate-x-1" />
            </span>
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center border border-mist/15 text-mist transition-colors hover:border-aqua/50 hover:text-aqua lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={cn(
                  "absolute left-0 h-px w-full bg-current transition-all duration-300",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-px w-full bg-current transition-all duration-300",
                  open ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* mobile panel */}
      <div
        className={cn(
          "overflow-hidden border-t border-mist/10 bg-ink/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden",
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col px-6 py-4 md:px-10">
          {navLinks.map((l, i) => (
            <li key={l.href} className="border-b border-mist/8 last:border-0">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 py-4 font-display text-2xl text-white transition-colors hover:text-aqua"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                <span className="label text-[0.55rem] text-teal">0{i + 1}</span>
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-5">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex min-h-[52px] items-center justify-center gap-3 bg-aqua font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink"
            >
              Start a Project <Arrow className="h-3.5 w-3.5" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
