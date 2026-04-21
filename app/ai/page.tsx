import ConnectSDLogo from "@/components/shared/ConnectSDLogo";
import AICurator from "@/components/ai/AICurator";
import { EVENT } from "@/lib/data/event";

export default function AIPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-inman-dark text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(10,132,255,0.28), transparent 55%), radial-gradient(ellipse at 80% 15%, rgba(10,132,255,0.15), transparent 55%), linear-gradient(180deg, #0b0f38 0%, #161a48 60%, #0a0c2b 100%)",
        }}
      />

      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-inman-dark/80 backdrop-blur-md supports-[backdrop-filter]:bg-inman-dark/60">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 md:px-6">
          <a href="/" className="flex items-center">
            <ConnectSDLogo
              variant="horizontal"
              fill="#ffffff"
              dotFill="#0a84ff"
              className="h-6 w-auto sm:h-7"
            />
          </a>
          <div className="text-[10px] uppercase tracking-cta text-white/50 sm:text-[11px]">
            {EVENT.dates} · {EVENT.city}
          </div>
        </div>
      </header>
      <div className="h-16" aria-hidden />

      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-8 pt-10 text-center">
        <div className="text-[11px] font-semibold uppercase tracking-cta text-inman-blue">
          ◆ A different way to decide
        </div>
        <h1 className="mt-5 font-tungsten text-[clamp(52px,8vw,120px)] leading-[0.92]">
          Don't read the brochure.
          <br />
          <span className="text-inman-blue">Ask the curator.</span>
        </h1>
        <p className="mx-auto mt-7 max-w-xl font-harriet text-xl italic leading-relaxed text-white/75">
          Tell Claude who you are and what's on your plate. It'll decide whether
          Connect San Diego is worth your three days — and if it is, how to
          sequence them.
        </p>
      </section>

      <section className="relative z-10 pb-28 pt-4">
        <AICurator />
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-inman-dark/80 pb-24 pt-10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-4 px-6 text-[11px] uppercase tracking-cta text-white/40 md:flex-row md:items-center">
          <ConnectSDLogo
            variant="horizontal"
            fill="#ffffff"
            dotFill="#0a84ff"
            className="h-5 w-auto"
          />
          <div>Curator responses are generated live by Claude Opus 4.7.</div>
        </div>
      </footer>
    </main>
  );
}
