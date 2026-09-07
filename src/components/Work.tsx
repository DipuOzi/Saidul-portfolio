import { useEffect, useMemo, useState } from "react";
import { cn } from "@/utils/cn";
import { projects, type Project } from "@/data/site";
import { Arrow, Button, SectionHeading } from "./ui/Bits";
import { Reveal } from "./ui/Reveal";

const filters = ["All", "Shopify", "WordPress", "Wix"] as const;

const spanBySize: Record<Project["size"], string> = {
  featured: "md:col-span-2 lg:col-span-8",
  tall: "lg:col-span-4",
  wide: "md:col-span-2 lg:col-span-7",
  standard: "lg:col-span-5",
};

const ratioBySize: Record<Project["size"], string> = {
  featured: "aspect-[16/10]",
  tall: "aspect-[4/5]",
  wide: "aspect-[16/10]",
  standard: "aspect-[4/3]",
};

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}) {
  const isExternal = project.href.startsWith("http");

  return (
    <article
      className={cn("animate-item-in group relative col-span-1 lg:col-span-4", spanBySize[project.size])}
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div className="relative overflow-hidden bg-ink-2">
        <span className="pointer-events-none absolute left-0 top-0 z-20 h-10 w-10 border-l border-t border-aqua/0 transition-all duration-500 group-hover:border-aqua/80" />
        <span className="pointer-events-none absolute bottom-0 right-0 z-20 h-10 w-10 border-b border-r border-aqua/0 transition-all duration-500 group-hover:border-aqua/80" />

        <div className={cn("w-full overflow-hidden", ratioBySize[project.size])}>
          <img
            src={project.image}
            alt={`${project.name} — ${project.platform} website project`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover grayscale-[30%] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05] group-hover:blur-[1.5px] group-hover:grayscale-0"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-95" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[52%] bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

        <span className="absolute left-4 top-4 z-10 border border-mist/20 bg-ink/65 px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-aqua backdrop-blur-sm sm:left-5 sm:top-5">
          {project.platform}
        </span>
        <span className="absolute right-4 top-4 z-10 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-mist/55 sm:right-5 sm:top-5">
          {project.year}
        </span>

        <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-6 lg:p-7">
          <div className="flex items-end justify-between gap-4 sm:gap-6">
            <div className="min-w-0">
              <p className="label mb-2 text-teal">{project.industry}</p>
              <h3 className="font-display text-[clamp(1.2rem,2.3vw,2rem)] leading-tight text-white [text-shadow:0_2px_12px_rgba(11,12,16,0.95)]">
                {project.name}
              </h3>
              <div className="grid grid-rows-[0fr] overflow-hidden transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grid-rows-[1fr]">
                <div className="min-h-0">
                  <p className="max-w-md pt-3 text-sm leading-relaxed text-mist/80 opacity-0 transition-opacity duration-500 delay-75 group-hover:opacity-100">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 pt-4 opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100">
                    {project.services.slice(0, 3).map((s) => (
                      <li
                        key={s}
                        className="border border-mist/18 bg-ink/35 px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-mist/75 backdrop-blur-sm"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <a
              href={project.href}
              {...(isExternal ? { target: "_blank", rel: "noreferrer noopener" } : {})}
              aria-label={`Visit live website: ${project.name}`}
              className="flex h-11 w-11 shrink-0 items-center justify-center border border-mist/25 bg-ink/40 text-mist transition-all duration-500 hover:border-aqua hover:bg-aqua hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua"
            >
              <Arrow className="transition-transform duration-500 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>

        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-mist/10 py-4 transition-colors duration-500 group-hover:border-aqua/40">
          <span className="label text-mist/55">
            {project.platform} / {project.projectType}
          </span>
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-mist/75 transition-colors hover:text-aqua focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua"
        >
          Case Study
          <Arrow className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1.5" />
        </button>
      </div>
    </article>
  );
}

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const isExternal = project.href.startsWith("http");

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/82 p-0 backdrop-blur-md sm:items-center sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-[94vh] w-full max-w-6xl overflow-hidden rounded-xl border border-mist/12 bg-ink shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)] sm:max-h-[90vh] sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="max-h-[94vh] overflow-y-auto sm:max-h-[90vh]">
          <div className="relative aspect-[16/10] overflow-hidden bg-ink-2 sm:aspect-[2.2/1]">
            <img
              src={project.image}
              alt={`${project.name} project preview`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/10" />

            <div className="absolute left-5 top-5 flex items-center gap-3 sm:left-8 sm:top-7">
              <span className="border border-aqua/40 bg-ink/70 px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-aqua backdrop-blur-sm">
                {project.platform}
              </span>
              <span className="hidden font-mono text-[0.6rem] uppercase tracking-[0.18em] text-mist/55 sm:inline">
                {project.year}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-lg border border-mist/20 bg-ink/70 text-mist backdrop-blur-sm transition-colors hover:border-aqua hover:text-aqua sm:right-7 sm:top-6"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </button>

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10">
              <p className="label text-aqua">
                {project.projectType} · {project.industry}
              </p>
              <h3
                id="case-study-title"
                className="mt-3 max-w-3xl font-display text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[0.98] text-white"
              >
                {project.name}
              </h3>
            </div>
          </div>

          <div className="grid gap-10 border-t border-mist/10 p-5 sm:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:p-10">
            <aside className="space-y-7 lg:border-r lg:border-mist/10 lg:pr-10">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-6">
                <div>
                  <dt className="label text-mist/40">Platform</dt>
                  <dd className="mt-2 text-white">{project.platform}</dd>
                </div>
                <div>
                  <dt className="label text-mist/40">Year</dt>
                  <dd className="mt-2 text-white">{project.year}</dd>
                </div>
                <div>
                  <dt className="label text-mist/40">Role</dt>
                  <dd className="mt-2 text-white">{project.role}</dd>
                </div>
                <div>
                  <dt className="label text-mist/40">Industry</dt>
                  <dd className="mt-2 text-white">{project.industry}</dd>
                </div>
              </dl>

              <div>
                <p className="label text-mist/40">Services</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.services.map((s) => (
                    <li
                      key={s}
                      className="border border-mist/15 px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-mist/70"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                href={project.href}
                className="w-full sm:w-auto"
                {...(isExternal ? {} : {})}
              >
                Visit Live Website
              </Button>
            </aside>

            <div className="space-y-9">
              <section>
                <h4 className="flex items-center gap-3 font-display text-xl text-white">
                  <span className="h-px w-6 bg-aqua/70" />
                  Overview
                </h4>
                <p className="mt-4 text-[1rem] leading-relaxed text-mist/70">{project.description}</p>
              </section>
              <section>
                <h4 className="flex items-center gap-3 font-display text-xl text-white">
                  <span className="h-px w-6 bg-aqua/70" />
                  Challenge
                </h4>
                <p className="mt-4 text-[1rem] leading-relaxed text-mist/70">{project.challenge}</p>
              </section>
              <section>
                <h4 className="flex items-center gap-3 font-display text-xl text-white">
                  <span className="h-px w-6 bg-aqua/70" />
                  Solution
                </h4>
                <p className="mt-4 text-[1rem] leading-relaxed text-mist/70">{project.solution}</p>
              </section>
              <section>
                <h4 className="flex items-center gap-3 font-display text-xl text-white">
                  <span className="h-px w-6 bg-aqua/70" />
                  Work Completed
                </h4>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 border border-mist/10 bg-ink-2/30 px-4 py-3 text-[0.92rem] text-mist/75"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-aqua" />
                      {f}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * How many projects show before "Load More" appears. The rest (plus any new
 * project added in src/data/site.ts) queue behind the button.
 * 5 keeps the mosaic gap-free; raise it only in pairs that fill a 12-col row.
 */
const INITIAL_VISIBLE = 5;
/** How many extra projects each "Load More" click reveals. */
const LOAD_STEP = 4;

export default function Work() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.platform === active)),
    [active],
  );

  const visible = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);
  const remaining = filtered.length - visible.length;

  return (
    <section id="work" className="relative scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            label="Selected Work"
            title={
              <>
                Selected <span className="font-serif italic text-aqua">Work</span>
              </>
            }
            subtitle="A selection of real websites and digital experiences built for businesses on Shopify, WordPress and Wix."
          />

          <Reveal delay={200}>
            <div role="tablist" aria-label="Filter projects by platform" className="flex flex-wrap items-center gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  role="tab"
                  aria-selected={active === f}
                  onClick={() => {
                    setActive(f);
                    setVisibleCount(INITIAL_VISIBLE);
                  }}
                  className={cn(
                    "relative min-h-[44px] overflow-hidden border px-4 font-mono text-[0.66rem] uppercase tracking-[0.16em] transition-all duration-400 sm:px-5",
                    active === f
                      ? "border-aqua bg-aqua text-ink"
                      : "border-mist/15 text-mist/65 hover:border-teal/60 hover:text-aqua",
                  )}
                >
                  {f}
                  {active === f && (
                    <span className="ml-2 font-mono text-[0.6rem] opacity-70">
                      {(f === "All" ? projects : projects.filter((p) => p.platform === f)).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div
          key={active}
          className="mt-12 grid grid-flow-row-dense grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-12 lg:gap-x-8"
        >
          {visible.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={setSelected} />
          ))}

          <div
            className="animate-item-in group col-span-1 flex flex-col justify-between border border-mist/12 p-6 transition-colors duration-500 hover:border-aqua/40 sm:p-7 md:col-span-2 lg:col-span-7"
            style={{ animationDelay: `${visible.length * 70}ms` }}
          >
            <div>
              <p className="label text-teal">Next Project</p>
              <p className="mt-5 max-w-md font-display text-[clamp(1.4rem,2.5vw,2.2rem)] leading-[1.08] text-white">
                Your project could be the next one featured here.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-mist transition-colors hover:text-aqua"
            >
              Start a Project
              <Arrow className="transition-transform duration-500 group-hover:translate-x-1.5" />
            </a>
          </div>
        </div>

        {/* Load More — reveals the queued projects below the grid */}
        {remaining > 0 && (
          <Reveal className="mt-12 flex justify-center lg:mt-16">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + LOAD_STEP)}
              className="group relative inline-flex min-h-[52px] items-center gap-3 overflow-hidden border border-mist/20 px-8 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-mist transition-colors duration-300 hover:border-aqua hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua"
            >
              <span className="absolute inset-0 -translate-y-full bg-aqua transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
              <span className="relative z-10 flex items-center gap-3">
                Load More Projects
                <span className="opacity-60">({remaining})</span>
                <Arrow className="rotate-90 transition-transform duration-400 group-hover:translate-y-1" />
              </span>
            </button>
          </Reveal>
        )}
      </div>

      {selected && <CaseStudyModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
