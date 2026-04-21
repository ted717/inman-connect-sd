import { EVENT } from "@/lib/data/event";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-inman-dark text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(10,132,255,0.28), transparent 60%), radial-gradient(ellipse at 80% 10%, rgba(10,132,255,0.18), transparent 55%), linear-gradient(180deg, #0b0f38 0%, #161a48 60%, #0a0c2b 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-inman-dark to-transparent"
      />

      <div className="relative mx-auto flex min-h-[640px] max-w-[1200px] flex-col justify-center px-4 pb-20 pt-28 sm:min-h-[720px] sm:px-6 sm:pb-24 sm:pt-32">
        <div className="text-[11px] font-semibold uppercase tracking-cta text-inman-blue">
          {EVENT.dates} · {EVENT.city}
        </div>

        <h1 className="mt-5 max-w-4xl">
          <span className="block font-tungsten text-[clamp(56px,9vw,132px)] leading-[0.92] text-white">
            The future won't wait.
          </span>
          <span className="block font-tungsten text-[clamp(56px,9vw,132px)] leading-[0.92] text-inman-blue">
            Neither should you.
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75">
          {EVENT.heroSub}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#pricing"
            className="rounded-btn bg-inman-red px-6 py-3 text-sm font-semibold uppercase tracking-cta text-white transition hover:bg-white hover:text-inman-blue"
          >
            Register now — save $800
          </a>
          <a
            href="#why"
            className="rounded-btn border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-cta text-white transition hover:bg-white/10"
          >
            See what's new
          </a>
        </div>

        <Countdown toISO={EVENT.superEarlyBirdEnds} />
      </div>
    </section>
  );
}
