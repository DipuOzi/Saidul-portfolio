
import CodeTag from "./ui/CodeTag";
import { navLinks, profile, socials } from "@/data/site";
import { Arrow } from "./ui/Bits";

export default function Footer() {
  return (
    <footer className="relative border-t border-mist/10 bg-ink-2/25">
      <div className="mx-auto max-w-[1600px] px-5 py-14 md:px-10 lg:px-16 lg:py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <a
              href="#home"
              aria-label={`${profile.name} — ${profile.role}`}
              className="group flex w-fit flex-col items-center leading-none"
            >
              <CodeTag startInView selfClosing className="text-[1.1rem] sm:text-[1.25rem]" />
              <span className="label mt-2.5 text-[0.6rem] text-mist/50 transition-colors group-hover:text-aqua">
                {profile.role}
              </span>
            </a>
            <p className="label mt-3 text-mist/45">{profile.stack}</p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-mist/55">
              Designing and developing modern, responsive websites and e-commerce experiences for businesses worldwide.
            </p>
            <span className="mt-6 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-dot absolute inset-0 rounded-full bg-aqua" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-aqua" />
              </span>
              <span className="label text-mist/65">{profile.availability}</span>
            </span>
          </div>

          <nav aria-label="Footer">
            <p className="label text-mist/35">Navigation</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-[0.95rem] text-mist/70 transition-colors hover:text-aqua"
                  >
                    <span className="h-px w-0 bg-aqua transition-all duration-400 group-hover:w-4" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label text-mist/35">Elsewhere</p>
            <ul className="mt-5 space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-center gap-2 text-[0.95rem] text-mist/70 transition-colors hover:text-aqua"
                  >
                    {s.label}
                    <Arrow className="h-3.5 w-3.5 -rotate-45 opacity-0 transition-all duration-400 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-block text-sm text-mist/70 transition-colors hover:text-aqua"
            >
              {profile.email}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-mist/10 pt-7 sm:flex-row sm:items-center">
          <p className="label text-mist/35">© 2026 {profile.name}. All rights reserved.</p>
          <a
            href="#home"
            className="group flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-mist/55 transition-colors hover:text-aqua"
          >
            Back to top
            <Arrow className="h-3.5 w-3.5 -rotate-90 transition-transform duration-400 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  );
}
