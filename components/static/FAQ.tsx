"use client";

import { useState } from "react";
import { FAQ } from "@/lib/data/event";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-inman-dark pb-28">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center font-tungsten text-[clamp(36px,5vw,64px)] leading-[0.95] text-white">
          Questions? <span className="text-inman-blue">Answered.</span>
        </h2>

        <div className="mt-12 border-t border-white/10">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-white/10">
                <button
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold uppercase tracking-cta text-white">
                    {item.q}
                  </span>
                  <span
                    className={`font-tungsten text-2xl text-inman-blue transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-5 pr-8 text-sm leading-relaxed text-white/70">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
