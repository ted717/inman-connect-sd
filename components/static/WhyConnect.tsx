import { WHY_CONNECT } from "@/lib/data/event";

const icons = ["🎯", "🤖", "📊", "🤝", "⚡"];

export default function WhyConnect() {
  const [intro, ...rest] = WHY_CONNECT.cards;
  return (
    <section id="why" className="bg-inman-dark pb-24 pt-10">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-cta text-inman-blue">
              {WHY_CONNECT.eyebrow}
            </div>
            <h2 className="mt-4 font-tungsten text-[clamp(36px,5vw,64px)] leading-[0.95] text-white">
              Commissions shifted.
              <br />
              AI arrived.
              <br />
              <span className="text-inman-blue">The playbook changed.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
              {WHY_CONNECT.copy}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {[intro, ...rest].map((c, i) => (
              <div
                key={c.title}
                className="flex gap-4 rounded-card border border-white/10 bg-white/[0.03] p-5 transition hover:border-inman-blue/50 hover:bg-white/[0.06]"
              >
                <div className="mt-0.5 text-2xl leading-none">
                  {icons[i % icons.length]}
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-cta text-white">
                    {c.title}
                  </div>
                  <div className="mt-1.5 text-sm leading-relaxed text-white/65">
                    {c.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
