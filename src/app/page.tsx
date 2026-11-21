'use client';

import { useEffect, useState } from 'react';
import { About } from '@/components/About';
import { BackToTop } from '@/components/BackToTop';
import { Contact } from '@/components/Contact';
import { Education } from '@/components/Education';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Projects } from '@/components/Projects';
import { translations, type Language } from '@/data/content';

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    if (isMobile || prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      document.documentElement.classList.remove('reveal-ready');
      return;
    }

    document.documentElement.classList.add('reveal-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-white text-slate-900 antialiased">
      <Navbar language={language} setLanguage={setLanguage} />
      <Hero language={language} t={t} />
      <About language={language} t={t} />
      <Projects language={language} t={t} />
      <Education language={language} t={t} />
      <Contact language={language} t={t} />
      <Footer language={language} t={t} />
      <BackToTop />
    </main>
  );
}
