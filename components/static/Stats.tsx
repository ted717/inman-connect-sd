import { STATS } from "@/lib/data/event";

export default function Stats() {
  return (
    <section className="bg-inman-dark py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-y-10 px-6 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="border-l-2 border-inman-blue pl-5">
            <div className="font-tungsten text-5xl leading-none text-inman-blue">
              {s.n}
            </div>
            <div className="mt-2 text-xs font-semibold uppercase tracking-cta text-white/70">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
