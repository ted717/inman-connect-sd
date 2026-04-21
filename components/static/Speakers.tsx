import { SPEAKERS } from "@/lib/data/event";

export default function Speakers() {
  return (
    <section id="speakers" className="bg-inman-dark py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex items-baseline gap-3 text-[11px] font-semibold uppercase tracking-cta text-inman-blue">
          <span>◆ The Lineup</span>
        </div>
        <h2 className="mt-4 max-w-3xl font-tungsten text-[clamp(36px,5vw,64px)] leading-[0.95] text-white">
          The sharpest minds in real estate.
          <br />
          <span className="text-inman-blue">On one stage.</span>
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
          CEOs, top-producing agents, economists, and cultural icons — sharing
          what's actually working right now. No fluff. No filler.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SPEAKERS.map((s) => (
            <div
              key={s.name}
              className="group rounded-card border border-white/10 bg-white/[0.03] p-6 transition hover:border-inman-blue/50"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-inman-blue font-tungsten text-xl text-white">
                {s.initials}
              </div>
              <div className="mt-5 font-tungsten text-xl text-white">
                {s.name}
              </div>
              <div className="mt-1 text-xs uppercase tracking-cta text-white/50">
                {s.role}
              </div>
              <div className="mt-0.5 text-xs uppercase tracking-cta text-white/70">
                {s.org}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-xs uppercase tracking-cta text-white/40">
          + 200 more industry leaders announced soon
        </div>
      </div>
    </section>
  );
}
