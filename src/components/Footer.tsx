import type { Language, translations } from '@/data/content';

type FooterProps = {
  language: Language;
  t: (typeof translations)[Language];
};

export function Footer({ t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 py-8 text-sm sm:px-6 lg:flex-row lg:px-8">
        <p className="text-slate-400">
          © {currentYear} <span className="font-bold text-white">Tugusde</span>. {t.footer}
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/gusdesindu"
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-3 py-2 text-slate-400 transition duration-300 hover:bg-white/10 hover:text-white"
          >
            GitHub
          </a>
          <a
            href="#"
            className="rounded-full px-3 py-2 text-slate-400 transition duration-300 hover:bg-white/10 hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/tugusde23"
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-3 py-2 text-slate-400 transition duration-300 hover:bg-white/10 hover:text-white"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
