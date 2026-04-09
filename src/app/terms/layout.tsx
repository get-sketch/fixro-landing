import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FixRo — Termeni și condiții | Terms of Service",
  description: "Termenii și condițiile de utilizare a platformei FixRo.",
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
