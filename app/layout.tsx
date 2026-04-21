import type { Metadata } from "next";
import "./globals.css";
import VersionSwitcher from "@/components/shared/VersionSwitcher";

export const metadata: Metadata = {
  title: "Inman Connect San Diego — July 28–30, 2026",
  description:
    "Join 4,000+ agents, brokers, and industry leaders at the must-attend real estate event.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-near-black antialiased">
        <VersionSwitcher />
        {children}
      </body>
    </html>
  );
}
