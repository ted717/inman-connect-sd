import { TESTIMONIALS } from "@/lib/data/event";

export default function Testimonials() {
  return (
    <section className="bg-inman-dark py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="font-tungsten text-[clamp(32px,4.5vw,56px)] leading-[0.95] text-white">
          Don't take
          <br />
          <span className="text-inman-blue">our word for it.</span>
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="rounded-card border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="font-harriet text-3xl leading-none text-inman-blue">
                “
              </div>
              <blockquote className="mt-2 text-base leading-relaxed text-white/85">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4 text-xs uppercase tracking-cta">
                <div className="text-white">{t.name}</div>
                <div className="mt-0.5 text-white/50">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
