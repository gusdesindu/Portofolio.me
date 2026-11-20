'use client';

import { useState } from 'react';
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
