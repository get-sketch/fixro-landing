import Link from "next/link";

function LegalLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center">
              <span className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-outfit)" }}>F</span>
            </div>
            <span className="text-lg font-bold" style={{ fontFamily: "var(--font-outfit)" }}>
              Fix<span className="text-[var(--color-accent)]">Ro</span>
            </span>
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-500 text-sm">{title}</span>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-outfit)" }}>{title}</h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: April 8, 2026</p>
        <div className="prose prose-gray max-w-none [&_h2]:font-semibold [&_h2]:text-xl [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:font-[var(--font-outfit)] [&_p]:text-gray-600 [&_p]:leading-relaxed [&_li]:text-gray-600 [&_ul]:space-y-2 [&_a]:text-[var(--color-primary)] [&_a]:underline">
          {children}
        </div>
      </main>
      <footer className="py-8 px-6 border-t border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} FixRo. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-600 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-600 transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-gray-600 transition-colors">Cookies</Link>
            <Link href="/gdpr" className="hover:text-gray-600 transition-colors">GDPR</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LegalLayout;
