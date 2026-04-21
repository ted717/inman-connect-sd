export default function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-inman-dark py-28">
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(10,132,255,0.35), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-tungsten text-[clamp(44px,7vw,108px)] leading-[0.95] text-white">
          Your next
          <br />
          <span className="text-inman-blue">best year</span>
          <br />
          starts here.
        </h2>
        <p className="mt-8 text-white/70">
          Lock in the lowest price. Lock in your seat. Lock in your edge.
        </p>
        <a
          href="#pricing"
          className="mt-10 inline-block rounded-btn bg-inman-red px-8 py-4 text-sm font-semibold uppercase tracking-cta text-white transition hover:bg-white hover:text-inman-blue"
        >
          Register for Connect San Diego →
        </a>
        <div className="mt-6 text-[11px] uppercase tracking-cta text-white/40">
          100% transferable · Convert to digital anytime · Team invoicing available
        </div>
      </div>
    </section>
  );
}
