'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import type { Language } from '@/data/content';

const navItems: Record<Language, { label: string; href: string }[]> = {
  en: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],
  id: [
    { label: 'Beranda', href: '#home' },
    { label: 'Tentang', href: '#about' },
    { label: 'Proyek', href: '#projects' },
    { label: 'Pendidikan', href: '#education' },
    { label: 'Kontak', href: '#contact' },
  ],
};

type NavbarProps = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export function Navbar({ language, setLanguage }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const items = navItems[language];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-xl font-bold tracking-tight text-slate-900">
          Portfolio<span className="text-blue-600">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => setLanguage('id')}
            className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
              language === 'id' ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600'
            }`}
            aria-label="Switch language to Indonesian"
          >
            ID
          </button>
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
              language === 'en' ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600'
            }`}
            aria-label="Switch language to English"
          >
            EN
          </button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto max-w-6xl space-y-2 px-4 py-4">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <button type="button" onClick={() => { setLanguage('id'); setMenuOpen(false); }} className={`flex-1 rounded-full border px-3 py-2 text-sm font-medium ${language === 'id' ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-200 text-slate-700'}`}>
                ID
              </button>
              <button type="button" onClick={() => { setLanguage('en'); setMenuOpen(false); }} className={`flex-1 rounded-full border px-3 py-2 text-sm font-medium ${language === 'en' ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-200 text-slate-700'}`}>
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
