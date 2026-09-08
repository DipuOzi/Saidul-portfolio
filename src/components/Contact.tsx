import { useState, type FormEvent } from "react";
import { cn } from "@/utils/cn";
import { budgets, formEndpoint, profile, projectTypes, socials } from "@/data/site";
import { Arrow, SectionHeading } from "./ui/Bits";
import { Reveal } from "./ui/Reveal";

type Fields = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  details: string;
};

const empty: Fields = { name: "", email: "", projectType: "", budget: "", details: "" };

const fieldBase =
  "peer w-full border-b bg-transparent px-0 py-4 text-base text-white placeholder-transparent outline-none transition-colors duration-300 sm:text-[0.95rem]";

function labelCls(filled: boolean) {
  return cn(
    "pointer-events-none absolute left-0 origin-left font-mono uppercase tracking-[0.18em] transition-all duration-300",
    filled
      ? "top-0 text-[0.58rem] text-teal"
      : "top-4 text-[0.7rem] text-mist/40 peer-focus:top-0 peer-focus:text-[0.58rem] peer-focus:text-aqua",
  );
}

export default function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [honey, setHoney] = useState("");

  const set = (k: keyof Fields, v: string) => {
    setValues((s) => ({ ...s, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (values.name.trim().length < 2) e.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) e.email = "Enter a valid email address";
    if (!values.projectType) e.projectType = "Select a project type";
    if (values.details.trim().length < 12) e.details = "Tell me a little more (12+ characters)";
    return e;
  };

  const mailtoFallback = () => {
    const subject = encodeURIComponent(`New Project Inquiry — ${values.projectType || "Website"}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nProject Type: ${values.projectType}\nBudget: ${values.budget || "—"}\n\n${values.details}`,
    );
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (honey) return; // bot
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setSending(true);
    setSendError(null);
    try {
      const res = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          "Project Type": values.projectType,
          Budget: values.budget || "Not specified",
          "Project Details": values.details.trim(),
          _subject: `New Project Inquiry — ${values.projectType} from ${values.name.trim()}`,
          _replyto: values.email.trim(),
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || (data && data.success === "false")) {
        throw new Error(data?.message || "Request failed");
      }
      setSent(true);
      setValues(empty);
    } catch {
      setSendError("Something went wrong while sending. Please try again or email me directly.");
    } finally {
      setSending(false);
    }
  };

  const inputBorder = (k: keyof Fields) =>
    errors[k] ? "border-red-400/70" : "border-mist/15 focus:border-aqua hover:border-mist/30";

  return (
    <section id="contact" className="relative scroll-mt-24 border-t border-mist/10 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-14 px-5 sm:px-6 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-16">
        <div>
          <SectionHeading
            label="Contact"
            title={
              <>
                Let&apos;s Build Something{" "}
                <span className="font-serif italic text-aqua">Great.</span>
              </>
            }
            subtitle="Share a few details about your project. I'll review your inquiry and reply as soon as possible."
          />

          <Reveal delay={220}>
            <dl className="mt-12 space-y-6 border-t border-mist/10 pt-10">
              <div>
                <dt className="label text-mist/35">Email</dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-display text-lg text-white transition-colors hover:text-aqua"
                  >
                    {profile.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label text-mist/35">Location</dt>
                <dd className="mt-2 text-[0.95rem] text-mist/70">{profile.location}</dd>
              </div>
              <div>
                <dt className="label text-mist/35">Elsewhere</dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="min-h-[44px] border border-mist/15 px-4 py-3 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-mist/60 transition-all duration-400 hover:border-aqua/60 hover:text-aqua"
                    >
                      {s.label}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        {/* form */}
        <Reveal delay={120}>
          <div className="relative border border-mist/12 bg-ink-2/25 p-6 sm:p-10">
            <span aria-hidden className="absolute -left-px -top-px h-10 w-10 border-l border-t border-aqua/60" />
            <span aria-hidden className="absolute -bottom-px -right-px h-10 w-10 border-b border-r border-aqua/60" />

            {sent ? (
              <div className="flex min-h-[420px] flex-col items-start justify-center">
                <span className="flex h-14 w-14 items-center justify-center border border-aqua text-aqua">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                    <path d="M4 12.5l5 5L20 6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <h3 className="mt-8 text-[clamp(1.6rem,3vw,2.4rem)] leading-tight">Inquiry received.</h3>
                <p className="mt-4 max-w-md text-mist/60">
                  Thanks for reaching out — your message has been delivered to{" "}
                  <span className="text-mist">{profile.email}</span>. I&apos;ll reply within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-8 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-aqua underline-offset-4 hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-9">
                {/* honeypot — hidden from humans, catches bots */}
                <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="_website">Website</label>
                  <input
                    id="_website"
                    name="_website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honey}
                    onChange={(e) => setHoney(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                  <div className="relative">
                    <input
                      id="name"
                      value={values.name}
                      onChange={(e) => set("name", e.target.value)}
                      placeholder="Name"
                      autoComplete="name"
                      className={cn(fieldBase, inputBorder("name"))}
                    />
                    <label htmlFor="name" className={labelCls(!!values.name)}>
                      Name
                    </label>
                    {errors.name && <p className="mt-2 text-[0.7rem] text-red-400/90">{errors.name}</p>}
                  </div>

                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      value={values.email}
                      onChange={(e) => set("email", e.target.value)}
                      placeholder="Email"
                      autoComplete="email"
                      className={cn(fieldBase, inputBorder("email"))}
                    />
                    <label htmlFor="email" className={labelCls(!!values.email)}>
                      Email
                    </label>
                    {errors.email && <p className="mt-2 text-[0.7rem] text-red-400/90">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                  <div className="relative">
                    <label htmlFor="projectType" className="label block text-[0.58rem] text-mist/40">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      value={values.projectType}
                      onChange={(e) => set("projectType", e.target.value)}
                      className={cn(
                        "mt-2 w-full appearance-none border-b bg-transparent py-3.5 text-base text-white outline-none transition-colors duration-300 sm:text-[0.95rem]",
                        inputBorder("projectType"),
                        !values.projectType && "text-mist/40",
                      )}
                    >
                      <option value="" className="bg-ink text-mist">
                        Select an option
                      </option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t} className="bg-ink text-mist">
                          {t}
                        </option>
                      ))}
                    </select>
                    <span aria-hidden className="pointer-events-none absolute bottom-4 right-1 text-teal">
                      ▾
                    </span>
                    {errors.projectType && (
                      <p className="mt-2 text-[0.7rem] text-red-400/90">{errors.projectType}</p>
                    )}
                  </div>

                  <div className="relative">
                    <label htmlFor="budget" className="label block text-[0.58rem] text-mist/40">
                      Budget
                    </label>
                    <select
                      id="budget"
                      value={values.budget}
                      onChange={(e) => set("budget", e.target.value)}
                      className={cn(
                        "mt-2 w-full appearance-none border-b bg-transparent py-3.5 text-base text-white outline-none transition-colors duration-300 sm:text-[0.95rem]",
                        inputBorder("budget"),
                        !values.budget && "text-mist/40",
                      )}
                    >
                      <option value="" className="bg-ink text-mist">
                        Select a range
                      </option>
                      {budgets.map((b) => (
                        <option key={b} value={b} className="bg-ink text-mist">
                          {b}
                        </option>
                      ))}
                    </select>
                    <span aria-hidden className="pointer-events-none absolute bottom-4 right-1 text-teal">
                      ▾
                    </span>
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    id="details"
                    rows={4}
                    value={values.details}
                    onChange={(e) => set("details", e.target.value)}
                    placeholder="Project Details"
                    className={cn(fieldBase, "resize-none", inputBorder("details"))}
                  />
                  <label htmlFor="details" className={labelCls(!!values.details)}>
                    Project Details
                  </label>
                  {errors.details && <p className="mt-2 text-[0.7rem] text-red-400/90">{errors.details}</p>}
                </div>

                {sendError && (
                  <div
                    role="alert"
                    className="flex flex-wrap items-center justify-between gap-3 border border-red-400/30 bg-red-400/5 px-4 py-3"
                  >
                    <p className="text-[0.8rem] text-red-300/90">{sendError}</p>
                    <a
                      href={mailtoFallback()}
                      className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-aqua underline-offset-4 hover:underline"
                    >
                      Open email app →
                    </a>
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-5 pt-2">
                  <p className="label max-w-[220px] text-[0.55rem] leading-relaxed text-mist/30">
                    Your details stay private. No spam, ever.
                  </p>
                  <button
                    type="submit"
                    disabled={sending}
                    className="group relative inline-flex min-h-[56px] items-center gap-4 overflow-hidden bg-aqua px-8 font-mono text-[0.74rem] uppercase tracking-[0.18em] text-ink transition-opacity disabled:opacity-60"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-teal transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
                    <span className="relative z-10 flex items-center gap-3">
                      {sending ? "Sending…" : "Send Inquiry"}
                      <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
