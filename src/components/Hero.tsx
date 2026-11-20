import { ArrowRight, Download, GitBranch, Globe } from 'lucide-react';
import Image from 'next/image';
import type { Language, translations } from '@/data/content';

type HeroProps = {
  language: Language;
  t: (typeof translations)[Language];
};

export function Hero({ language, t }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-blue-50 to-white" />
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-18">
        <div className="space-y-8 lg:max-w-[540px] lg:justify-self-end">
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            {t.badge}
          </span>
          <div className="space-y-4">
            <p className="text-base font-medium uppercase tracking-[0.2em] text-slate-500">{t.hello}</p>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {t.name}
            </h1>
            <p className="max-w-xl text-lg text-slate-600">{t.intro}</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-blue-500"
            >
              {t.primaryCta}
              <ArrowRight size={18} />
            </a>
            {/* <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition hover:border-blue-600 hover:text-blue-600"
            >
              <Download size={18} />
              {t.secondaryCta}
            </a> */}
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 p-3 text-slate-700 transition hover:border-blue-600 hover:text-blue-600" aria-label="GitHub">
              <GitBranch size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 p-3 text-slate-700 transition hover:border-blue-600 hover:text-blue-600" aria-label="LinkedIn">
              <Globe size={18} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-[240px] animate-float lg:block lg:max-w-[260px] lg:justify-self-center">
          <div className="absolute -left-4 top-4 h-16 w-16 rounded-full bg-blue-200/60 blur-2xl" />
          <div className="absolute -right-3 bottom-4 h-20 w-20 rounded-full bg-sky-200/70 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 p-2 shadow-soft">
            <Image
              src="/images/profil.jpg"
              alt={language === 'id' ? 'Potret profil' : 'Profile portrait'}
              width={900}
              height={1100}
              className="h-[300px] w-full rounded-[1rem] object-cover sm:h-[320px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
