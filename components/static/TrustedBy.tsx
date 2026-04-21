import { TRUSTED_BY } from "@/lib/data/event";

export default function TrustedBy() {
  return (
    <section className="border-y border-border-gray bg-inman-dark py-8">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center text-[11px] font-semibold uppercase tracking-cta text-white/50">
          Trusted by professionals from
        </div>
      </div>

      <div
        className="marquee-wrap relative mt-5 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0, black 6%, black 94%, transparent 100%)",
        }}
      >
        <div className="marquee-track flex w-max gap-x-12 whitespace-nowrap">
          {[...TRUSTED_BY, ...TRUSTED_BY].map((name, i) => (
            <span
              key={`${name}-${i}`}
              aria-hidden={i >= TRUSTED_BY.length || undefined}
              className="font-tungsten text-lg text-white/70 transition-colors hover:text-white"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
