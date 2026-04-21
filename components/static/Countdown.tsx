"use client";

import { useEffect, useState } from "react";

type Parts = { d: number; h: number; m: number; s: number };

function diff(target: Date): Parts {
  const ms = Math.max(0, target.getTime() - Date.now());
  const d = Math.floor(ms / 86_400_000);
  const h = Math.floor((ms % 86_400_000) / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  const s = Math.floor((ms % 60_000) / 1_000);
  return { d, h, m, s };
}

export default function Countdown({ toISO }: { toISO: string }) {
  const target = new Date(toISO);
  const [parts, setParts] = useState<Parts>(() => diff(target));

  useEffect(() => {
    const id = setInterval(() => setParts(diff(target)), 1000);
    return () => clearInterval(id);
  }, [toISO]);

  const cells: [keyof Parts, string][] = [
    ["d", "days"],
    ["h", "hrs"],
    ["m", "min"],
    ["s", "sec"],
  ];

  return (
    <div className="mt-10">
      <div className="text-[11px] font-semibold uppercase tracking-cta text-white/60">
        Super Early-Bird ends in
      </div>
      <div className="mt-3 flex gap-2 sm:gap-3">
        {cells.map(([k, lbl]) => (
          <div
            key={k}
            className="flex h-16 w-16 flex-col items-center justify-center rounded-card border border-white/15 bg-white/5 backdrop-blur-sm sm:h-[72px] sm:w-[72px]"
          >
            <div className="font-tungsten text-2xl leading-none text-white tabular-nums sm:text-3xl">
              {String(parts[k]).padStart(2, "0")}
            </div>
            <div className="mt-1 text-[9px] uppercase tracking-cta text-white/50 sm:text-[10px]">
              {lbl}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
