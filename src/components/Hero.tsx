import { ArrowRight, GitBranch, Globe } from 'lucide-react';
import Image from 'next/image';
import type { Language, translations } from '@/data/content';

type HeroProps = {
  language: Language;
  t: (typeof translations)[Language];
};

export function Hero({ language, t }: HeroProps) {
  return (
    <section id="home" className="relative isolate -mt-[76px] min-h-screen overflow-hidden bg-slate-950">
      <Image
        src="/images/hero-blue.svg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="scale-[1.01] object-cover object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,252,255,0.97)_0%,rgba(232,244,255,0.88)_38%,rgba(59,130,246,0.18)_72%,rgba(8,47,109,0.28)_100%)] backdrop-blur-[0.5px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_45%,rgba(191,219,254,0.5),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.12),rgba(15,76,153,0.16))]" />

      <div className="relative mx-auto grid min-h-screen max-w-6xl content-start items-start gap-8 px-4 pb-10 pt-32 sm:px-6 sm:pt-28 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-14 lg:pt-32">
        <div className="relative z-10 max-w-[620px] space-y-5 sm:space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/75 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_0_5px_rgba(37,99,235,0.12)]" />
            {t.badge}
          </span>

          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-600 sm:text-base">{t.hello}</p>
            <h1 className="max-w-[600px] text-5xl font-black leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
              {t.name}
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-700 sm:text-xl">{t.intro}</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_-14px_rgba(37,99,235,0.65)] transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              {t.primaryCta}
              <ArrowRight size={19} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="relative z-20 flex items-center gap-4 pt-3">
            <a href="https://github.com/gusdesindu" target="_blank" rel="noreferrer" className="rounded-full border border-slate-300/80 bg-white/70 p-3.5 text-slate-800 shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600" aria-label="GitHub">
              <GitBranch size={19} />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="rounded-full border border-slate-300/80 bg-white/70 p-3.5 text-slate-800 shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600" aria-label="LinkedIn">
              <Globe size={19} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-2 hidden h-[430px] w-full max-w-[360px] items-end justify-center lg:flex lg:justify-self-end">
          <div className="absolute bottom-6 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/25 blur-3xl" />
          <div className="absolute left-0 top-16 h-20 w-20 rounded-full border border-white/60 bg-white/20 backdrop-blur-md" />
          <div className="absolute bottom-24 right-0 h-14 w-14 rotate-12 rounded-2xl border border-white/60 bg-blue-500/20 backdrop-blur-md" />

          <div className="relative h-[390px] w-[285px] -translate-y-10 overflow-hidden rounded-[2rem] border border-white/70 bg-slate-950/20 p-2.5 shadow-[0_30px_80px_-25px_rgba(15,23,42,0.55)] backdrop-blur-md">
            <Image
              src="/images/foto.png"
              alt={language === 'id' ? 'Potret profil' : 'Profile portrait'}
              width={900}
              height={1100}
              priority
              className="h-full w-full rounded-[1.45rem] object-contain object-top"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/75 to-transparent" />
    </section>
  );
}
