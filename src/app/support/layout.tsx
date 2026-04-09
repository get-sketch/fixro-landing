import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FixRo — Centru de ajutor | Help Center",
  description: "Întrebări frecvente și suport FixRo. Rezervări, plăți, recenzii și setări cont.",
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return children;
}
