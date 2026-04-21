import ConnectSDLogo from "@/components/shared/ConnectSDLogo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-inman-dark pb-24 pt-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <ConnectSDLogo
          variant="horizontal"
          fill="#ffffff"
          dotFill="#0a84ff"
          className="h-6 w-auto"
        />
        <div className="text-[11px] uppercase tracking-cta text-white/40">
          Super Early-Bird ends soon
        </div>
        <div className="flex gap-6 text-[11px] uppercase tracking-cta text-white/50">
          <a href="#" className="hover:text-white">Sponsor</a>
          <a href="#" className="hover:text-white">Press</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
