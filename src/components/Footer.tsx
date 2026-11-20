import type { Language, translations } from '@/data/content';

type FooterProps = {
  language: Language;
  t: (typeof translations)[Language];
};

export function Footer({ t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:flex-row lg:px-8">
        <p>
          © {currentYear} Your Name. {t.footer}
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="transition hover:text-blue-600">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-blue-600">LinkedIn</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-blue-600">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
