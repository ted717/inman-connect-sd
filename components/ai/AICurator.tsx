"use client";

import { useRef, useState } from "react";

const EXAMPLES = [
  "I run a 6-agent team in Orange County. Commissions are down ~22% YoY. We're not using any AI yet and it's starting to feel like a problem.",
  "Solo broker-owner in Austin, ~$40M/year. Trying to decide whether to hire a team lead or double down on tech. Never been to Connect.",
  "VP of Ops at a regional brokerage, 380 agents across 6 offices. Leadership wants an AI roadmap by end of summer.",
];

export default function AICurator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState<"idle" | "streaming" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  async function submit(e?: React.FormEvent) {
    e?.preventDefault();
    if (!input.trim() || status === "streaming") return;

    setOutput("");
    setError(null);
    setStatus("streaming");

    try {
      const res = await fetch("/api/curate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }),
      });

      if (!res.ok || !res.body) {
        const msg = await res.text();
        throw new Error(msg || `HTTP ${res.status}`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setOutput(acc);
        outputRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
      }
      setStatus("idle");
    } catch (err) {
      setError(err instanceof Error ? err.message : "unknown error");
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-6">
      <form onSubmit={submit} className="relative">
        <label className="text-[11px] font-semibold uppercase tracking-cta text-inman-blue">
          Talk to the curator
        </label>
        <div className="mt-3 rounded-card border border-white/20 bg-white/[0.04] focus-within:border-inman-blue">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) submit();
            }}
            placeholder="e.g. I'm a team lead at a mid-sized brokerage, we do ~$80M/year, commissions are down 20% YoY and I'm trying to figure out if AI tools are worth the investment…"
            rows={5}
            disabled={status === "streaming"}
            className="w-full resize-none bg-transparent p-5 font-harriet text-lg leading-relaxed text-white placeholder:text-white/35 focus:outline-none disabled:opacity-60"
          />
          <div className="flex items-center justify-between border-t border-white/10 px-5 py-3">
            <div className="text-[11px] uppercase tracking-cta text-white/40">
              ⌘ + Enter to ask · streams from Claude Opus 4.7
            </div>
            <button
              type="submit"
              disabled={!input.trim() || status === "streaming"}
              className="rounded-btn bg-inman-blue px-5 py-2 text-xs font-semibold uppercase tracking-cta text-white transition hover:bg-submit-blue disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/40"
            >
              {status === "streaming" ? "Curating…" : "Ask the curator"}
            </button>
          </div>
        </div>

        {!output && status === "idle" && (
          <div className="mt-5 flex flex-wrap gap-2">
            {EXAMPLES.map((ex, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setInput(ex)}
                className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] uppercase tracking-cta text-white/60 transition hover:border-inman-blue hover:text-white"
              >
                Try example {i + 1}
              </button>
            ))}
          </div>
        )}
      </form>

      {error && (
        <div className="mt-6 rounded-card border border-inman-red/60 bg-inman-red/10 p-4 text-sm text-white">
          {error}
        </div>
      )}

      {(output || status === "streaming") && (
        <article className="mt-14">
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-cta text-inman-blue">
            <span className="h-2 w-2 rounded-full bg-inman-blue" />
            The curator · live
          </div>

          <div
            ref={outputRef}
            className={`mt-5 whitespace-pre-wrap font-harriet text-xl leading-[1.55] text-white ${
              status === "streaming" ? "ai-caret" : ""
            }`}
          >
            {renderWithEmphasis(output)}
          </div>

          {status === "idle" && output && (
            <div className="mt-10 border-t border-white/10 pt-8">
              <div className="text-[11px] font-semibold uppercase tracking-cta text-white/50">
                Next step
              </div>
              <a
                href="#"
                className="mt-3 inline-block rounded-btn bg-inman-red px-6 py-3 text-sm font-semibold uppercase tracking-cta text-white transition hover:bg-white hover:text-inman-blue"
              >
                Lock in $1,199 — Super Early-Bird →
              </a>
              <div className="mt-3 text-[11px] uppercase tracking-cta text-white/40">
                Transferable · Convertible to digital · Team invoicing available
              </div>
            </div>
          )}
        </article>
      )}
    </div>
  );
}

function renderWithEmphasis(text: string): React.ReactNode {
  if (!text) return null;
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return (
        <strong key={i} className="font-harriet text-inman-blue">
          {p.slice(2, -2)}
        </strong>
      );
    }
    if (p.startsWith("*") && p.endsWith("*")) {
      return (
        <em key={i} className="italic text-white/90">
          {p.slice(1, -1)}
        </em>
      );
    }
    return <span key={i}>{p}</span>;
  });
}
