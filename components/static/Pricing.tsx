import { PRICING } from "@/lib/data/event";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-inman-dark py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <div className="text-[11px] font-semibold uppercase tracking-cta text-inman-blue">
            ◆ Super Early-Bird pricing ends soon
          </div>
          <h2 className="mt-4 font-tungsten text-[clamp(40px,5.5vw,72px)] leading-[0.95] text-white">
            Invest early.
            <br />
            <span className="text-inman-blue">Save big.</span>
          </h2>
          <p className="mt-6 text-white/70">
            The lowest price you'll see — no exceptions. Every day you wait, the
            price goes up.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {PRICING.map((t) => {
            const featured = Boolean(t.featured);
            return (
              <div
                key={t.name}
                className={`relative rounded-card border p-8 transition ${
                  featured
                    ? "border-inman-blue bg-inman-blue/[0.08] shadow-[0_0_0_1px_rgba(10,132,255,0.35),0_0_60px_-10px_rgba(10,132,255,0.55),0_0_120px_-20px_rgba(10,132,255,0.35)] md:-translate-y-2"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20"
                }`}
              >
                {featured && (
                  <div className="absolute -top-3 left-8 rounded-btn bg-inman-blue px-3 py-1 text-[10px] font-semibold uppercase tracking-cta text-white">
                    Most Popular
                  </div>
                )}
                <div className="text-xs font-semibold uppercase tracking-cta text-white/70">
                  {t.name}
                </div>
                <div className="mt-4 flex items-baseline gap-3">
                  <div className="font-tungsten text-6xl leading-none text-white">
                    {t.price}
                  </div>
                  {t.wasPrice && (
                    <div className="font-tungsten text-2xl leading-none text-white/30 line-through">
                      {t.wasPrice}
                    </div>
                  )}
                </div>

                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
                  {t.perks.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-white/75">
                      <span className="mt-[7px] h-1 w-1 flex-none bg-inman-blue" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`mt-8 block rounded-btn px-4 py-3 text-center text-xs font-semibold uppercase tracking-cta transition ${
                    featured
                      ? "bg-inman-red text-white hover:bg-white hover:text-inman-blue"
                      : "border border-white/40 text-white hover:bg-white/10"
                  }`}
                >
                  {t.cta} →
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-[11px] uppercase tracking-cta text-white/40">
          100% transferable · Convert to digital anytime · Team invoicing available
        </div>
      </div>
    </section>
  );
}
