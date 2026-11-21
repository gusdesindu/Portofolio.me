'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
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
  const [activeSection, setActiveSection] = useState('#home');
  const items = navItems[language];

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector(item.href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: '-25% 0px -55%', threshold: [0.05, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  const navigateTo = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const target = document.querySelector(href);

    setMenuOpen(false);
    setActiveSection(href);

    if (target instanceof HTMLElement) {
      const startScroll = window.scrollY;
      const headerOffset = 96;
      const targetScroll = Math.max(0, target.getBoundingClientRect().top + startScroll - headerOffset);
      const isMobile = window.matchMedia('(max-width: 767px)').matches;
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const scrollSection = () => {
        if (reducedMotion) {
          window.scrollTo({ top: targetScroll, behavior: 'auto' });
        } else {
          const distance = targetScroll - startScroll;
          const duration = 300;
          const startTime = performance.now();

          const animateScroll = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = progress < 0.5
              ? 4 * progress * progress * progress
              : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            window.scrollTo(0, startScroll + distance * eased);
            if (progress < 1) requestAnimationFrame(animateScroll);
          };

          requestAnimationFrame(animateScroll);
        }

        window.history.replaceState(null, '', href);
      };

      scrollSection();
    }
  };

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between overflow-hidden rounded-2xl border border-white/70 bg-white/55 px-4 py-3 shadow-[0_12px_35px_-18px_rgba(15,23,42,0.45)] backdrop-blur-2xl backdrop-saturate-150 sm:px-5">
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        <a
          href="#home"
          onClick={(event) => navigateTo(event, '#home')}
          className="text-xl font-bold tracking-tight text-slate-900"
        >
          Portfolio<span className="text-blue-600">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {items.map((item) => {
            const active = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => navigateTo(event, item.href)}
                className={`relative py-2 text-sm font-medium transition-colors duration-300 ${
                  active ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-center rounded-full bg-blue-600 transition-transform duration-300 ${
                    active ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors duration-300 hover:border-blue-600 hover:text-blue-600 md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        className={`absolute left-3 right-3 top-[calc(100%+0.5rem)] z-50 mx-auto grid max-w-6xl overflow-hidden rounded-2xl border border-white/80 bg-white/75 shadow-[0_18px_45px_-20px_rgba(15,23,42,0.45)] backdrop-blur-2xl backdrop-saturate-150 transition-[grid-template-rows,opacity,transform] duration-300 ease-out md:hidden sm:left-5 sm:right-5 ${
          menuOpen
            ? 'pointer-events-auto grid-rows-[1fr] translate-y-0 opacity-100'
            : 'pointer-events-none grid-rows-[0fr] -translate-y-2 opacity-0'
        }`}
      >
        <div className="min-h-0">
          <div className="mx-auto max-w-6xl space-y-2 px-4 py-4">
            {items.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`mobile-nav-item block rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ease-out ${
                  activeSection === item.href
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                } ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}
                style={{ transitionDelay: menuOpen ? `${index * 35}ms` : '0ms' }}
                onClick={(event) => navigateTo(event, item.href)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <button type="button" onClick={() => { setLanguage('id'); setMenuOpen(false); }} className={`flex-1 rounded-full border px-3 py-2 text-sm font-medium transition-colors ${language === 'id' ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-200 text-slate-700'}`}>
                ID
              </button>
              <button type="button" onClick={() => { setLanguage('en'); setMenuOpen(false); }} className={`flex-1 rounded-full border px-3 py-2 text-sm font-medium transition-colors ${language === 'en' ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-200 text-slate-700'}`}>
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
