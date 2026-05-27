import Image from "next/image";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-brand-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20 items-center">
          {/* Coach portrait */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-brand-dark ring-1 ring-brand-dark/10 shadow-2xl shadow-brand-dark/20">
              <Image
                src="/coach-portrait.jpg"
                alt="Coach at FC High Performance"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top"
              />
              {/* Subtle vignette to deepen the photo */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.35) 100%)",
                }}
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-brand-amber" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-slate">
                Meet The Coach
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[0.95]">
              Built the old way.<br />Built to last.
            </h2>

            <div className="mt-8 space-y-5 text-lg text-brand-dark/75 leading-relaxed">
              {/* TODO with owner: replace with real coach bio */}
              <p>
                FC High Performance was built on a simple idea: training should
                make you stronger, tougher, and more connected to the people
                around you.
              </p>
              <p>
                No fluff. No gimmicks. Just real coaching, real programming,
                and a community of people who show up for each other — from
                7-year-olds learning to throw their first jab to adults
                rebuilding their strength after 40.
              </p>
            </div>

            <blockquote className="mt-10 border-l-2 border-brand-amber pl-6">
              <p className="text-xl text-brand-dark font-medium italic leading-snug">
                &ldquo;If you can leave here a little better than when you
                walked in — stronger, sharper, more connected — we did our
                job.&rdquo;
              </p>
              <footer className="mt-3 text-xs uppercase tracking-[0.2em] text-brand-slate">
                Coach — TODO: confirm with owner
              </footer>
            </blockquote>

            {/* Credentials chips */}
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-dark/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-dark/80">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
                USA Boxing Coach
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-dark/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-dark/80">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
                10+ Years Coaching
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-dark/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-dark/80">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
                National Championships Official
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
