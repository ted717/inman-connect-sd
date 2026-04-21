import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const hexFranklin = localFont({
  src: "../public/fonts/HEX_Franklin_v0.2_Variable.woff2",
  variable: "--font-hex-franklin",
  weight: "100 1000",
  display: "swap",
});

const harriet = localFont({
  src: [
    { path: "../public/fonts/HarrietDisplay-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/HarrietDisplay-Italic.otf", weight: "400", style: "italic" },
    { path: "../public/fonts/HarrietDisplay-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-harriet",
  display: "swap",
});

const tungsten = localFont({
  src: "../public/fonts/Tungsten-Bold.otf",
  variable: "--font-tungsten",
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inman Connect San Diego — July 28 - 30, 2026",
  description:
    "Join 4,000+ agents, brokers, and industry leaders at the must-attend real estate event.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${hexFranklin.variable} ${harriet.variable} ${tungsten.variable}`}
    >
      <body className="bg-white text-near-black antialiased">{children}</body>
    </html>
  );
}
