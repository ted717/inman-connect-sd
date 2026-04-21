export default function StickyOffer() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40">
      <div className="pointer-events-auto border-t border-white/10 bg-inman-dark/90 backdrop-blur-md supports-[backdrop-filter]:bg-inman-dark/75">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
          <div className="min-w-0">
            <div className="truncate font-tungsten text-base text-white sm:text-lg">
              Super Early-Bird ends soon
            </div>
            <div className="hidden text-[11px] uppercase tracking-cta text-white/55 sm:block">
              Lowest price. Save up to $800.
            </div>
          </div>
          <a
            href="#pricing"
            className="flex-none rounded-btn bg-inman-blue px-4 py-2.5 text-xs font-semibold uppercase tracking-cta text-white transition hover:bg-submit-blue sm:px-6 sm:py-3"
          >
            <span className="hidden sm:inline">Secure my seat →</span>
            <span className="sm:hidden">Save $800 →</span>
          </a>
        </div>
      </div>
    </div>
  );
}
