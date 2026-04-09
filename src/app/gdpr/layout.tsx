import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FixRo — Conformitate GDPR | GDPR Compliance",
  description: "Drepturile tale conform GDPR pe platforma FixRo. Acces, rectificare, ștergere și portabilitate date.",
};

export default function GdprLayout({ children }: { children: React.ReactNode }) {
  return children;
}
