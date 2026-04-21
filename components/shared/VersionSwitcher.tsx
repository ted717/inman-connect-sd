"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function VersionSwitcher() {
  const pathname = usePathname();
  const onAI = pathname?.startsWith("/ai");

  return (
    <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full border border-border-gray bg-white/95 p-1 shadow-elevated backdrop-blur">
        <Link
          href="/"
          className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-cta transition ${
            !onAI
              ? "bg-inman-dark text-white"
              : "text-medium-gray hover:text-near-black"
          }`}
        >
          Static
        </Link>
        <Link
          href="/ai"
          className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-cta transition ${
            onAI
              ? "bg-inman-blue text-white"
              : "text-medium-gray hover:text-near-black"
          }`}
        >
          AI Version
        </Link>
      </div>
    </div>
  );
}
