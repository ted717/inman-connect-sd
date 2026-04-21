import { AGENDA } from "@/lib/data/event";

export default function Agenda() {
  return (
    <section id="agenda" className="bg-inman-dark pb-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)]">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-cta text-inman-blue">
              ◆ 3 Days. Built for you.
            </div>
            <h2 className="mt-4 font-tungsten text-[clamp(36px,5vw,64px)] leading-[0.95] text-white">
              The agenda is
              <br />
              <span className="text-inman-blue">all killer.</span>
              <br />
              No filler.
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-white/70">
              Every session is vetted for one thing: can you use this on Monday?
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {AGENDA.map((d) => (
              <div
                key={d.day}
                className="rounded-card border border-white/10 bg-white/[0.03] p-6 transition hover:border-inman-blue/40"
              >
                <div className="flex items-baseline gap-3 text-[11px] font-semibold uppercase tracking-cta text-inman-blue">
                  Day {d.day} · {d.date}
                </div>
                <h3 className="mt-2 font-tungsten text-2xl text-white">
                  {d.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {d.sessions.map((s) => (
                    <li key={s} className="flex gap-3 text-sm text-white/75">
                      <span className="mt-1.5 h-1 w-1 flex-none bg-inman-blue" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
