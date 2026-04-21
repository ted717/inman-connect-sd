import ConnectSDLogo from "@/components/shared/ConnectSDLogo";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-inman-dark/80 backdrop-blur-md supports-[backdrop-filter]:bg-inman-dark/60">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 md:px-6">
        <a href="#top" className="flex items-center">
          <ConnectSDLogo
            variant="horizontal"
            fill="#ffffff"
            dotFill="#0a84ff"
            className="h-6 w-auto sm:h-7"
          />
        </a>
        <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-cta text-white/90 lg:flex lg:gap-8">
          <a href="#why" className="hover:text-inman-blue">Why Attend</a>
          <a href="#speakers" className="hover:text-inman-blue">Speakers</a>
          <a href="#agenda" className="hover:text-inman-blue">Agenda</a>
          <a href="#pricing" className="hover:text-inman-blue">Pricing</a>
          <a href="#faq" className="hover:text-inman-blue">FAQ</a>
        </nav>
        <a
          href="#pricing"
          className="rounded-btn bg-inman-blue px-3 py-2 text-[11px] font-semibold uppercase tracking-cta text-white transition hover:bg-submit-blue sm:px-4 sm:text-xs"
        >
          Register
        </a>
      </div>
    </header>
  );
}
