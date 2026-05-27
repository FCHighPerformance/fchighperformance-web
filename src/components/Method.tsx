import Image from "next/image";

/**
 * "How We Train". Three-step methodology section. High-converting
 * pages always explain the process so prospects know what they're
 * signing up for. Numbers, short headers, plain-spoken copy.
 */
const steps = [
  {
    n: "01",
    title: "Assess",
    body: "Every athlete starts with an honest look at where you are. Movement, strength, history, goals. No assumptions, no cookie-cutter plans.",
  },
  {
    n: "02",
    title: "Program",
    body: "We build a program around what you actually need. Boxing fundamentals, strength work, conditioning. And adjust it as you progress.",
  },
  {
    n: "03",
    title: "Train",
    body: "You show up. We coach every session. The community pulls you back when motivation runs low. That's how progress actually sticks.",
  },
];

export function Method() {
  return (
    <section id="method" className="relative py-24 sm:py-32 bg-brand-dark text-white overflow-hidden">
      {/* Faint background photo of coach refereeing for atmosphere */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-25"
      >
        <Image
          src="/coach-referee.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(35,35,35,0.85) 0%, rgba(35,35,35,0.92) 100%)",
          }}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 0% 0%, rgba(255,255,255,0.04), transparent 50%), radial-gradient(ellipse at 100% 100%, rgba(96,113,121,0.15), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-brand-amber" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/60">
              How We Train
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[0.95]">
            A method that<br />actually moves you forward.
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl">
            No gimmicks. No hype. A real process built over years of coaching
            kids and adults. Refined every single week.
          </p>
        </div>

        <ol className="mt-16 grid gap-px bg-white/10 lg:grid-cols-3 rounded-2xl overflow-hidden">
          {steps.map((step) => (
            <li key={step.n} className="bg-brand-dark/90 backdrop-blur-sm p-10">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-6xl text-brand-amber tabular-nums leading-none">
                  {step.n}
                </span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <h3 className="mt-8 text-3xl font-bold uppercase tracking-tight">
                {step.title}
              </h3>
              <p className="mt-4 text-base text-white/70 leading-relaxed">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
