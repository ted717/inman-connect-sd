import { NextRequest } from "next/server";
import { anthropic, CURATOR_SYSTEM } from "@/lib/anthropic";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const { input } = (await req.json()) as { input?: string };
  const trimmed = (input ?? "").trim();

  if (!trimmed) {
    return new Response("input is required", { status: 400 });
  }
  if (trimmed.length > 4000) {
    return new Response("input too long", { status: 413 });
  }
  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response(
      "Set ANTHROPIC_API_KEY in .env.local before using the AI route.",
      { status: 500 },
    );
  }

  const encoder = new TextEncoder();

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        const messageStream = anthropic.messages.stream({
          model: "claude-opus-4-7",
          max_tokens: 2048,
          thinking: { type: "adaptive" },
          output_config: { effort: "high" },
          system: [
            {
              type: "text",
              text: CURATOR_SYSTEM,
              cache_control: { type: "ephemeral" },
            },
          ],
          messages: [{ role: "user", content: trimmed }],
        });

        for await (const event of messageStream) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
      } catch (err) {
        const msg = err instanceof Error ? err.message : "unknown error";
        controller.enqueue(encoder.encode(`\n\n[curator unavailable — ${msg}]`));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      "X-Accel-Buffering": "no",
    },
  });
}
