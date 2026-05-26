export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-brand-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Photo placeholder — replace with real coach portrait when owner provides */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full rounded-2xl bg-brand-dark overflow-hidden">
              {/* TODO: replace with <Image src="/coach.jpg" fill className="object-cover" /> */}
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse at 50% 30%, rgba(246,173,85,0.25), transparent 60%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-white/40 text-sm uppercase tracking-widest">
                Coach Portrait
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
              Meet the Coach
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold uppercase tracking-tight">
              Built the old way. Built to last.
            </h2>
            <div className="mt-6 space-y-4 text-lg text-brand-dark/80 leading-relaxed">
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
              <p className="text-brand-slate italic">
                [Placeholder bio — replace with the coach&apos;s real story
                when ready.]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
