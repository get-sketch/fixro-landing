import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fixro — Centru de ajutor | Help Center",
  description: "Întrebări frecvente și suport Fixro. Rezervări, plăți, recenzii și setări cont.",
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return children;
}
