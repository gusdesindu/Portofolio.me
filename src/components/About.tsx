import { Database, PenTool, Server, Workflow } from 'lucide-react';
import type { Language, translations } from '@/data/content';

type AboutProps = {
  language: Language;
  t: (typeof translations)[Language];
};

const skills = [
  { name: 'PHP', description: 'Backend Development', icon: Server, color: 'bg-violet-50 text-violet-600' },
  { name: 'Laravel', description: 'Web Application', icon: Workflow, color: 'bg-red-50 text-red-600' },
  { name: 'MySQL', description: 'Database Design', icon: Database, color: 'bg-sky-50 text-sky-600' },
  { name: 'Figma UI/UX', description: 'Interface & Prototype', icon: PenTool, color: 'bg-emerald-50 text-emerald-600' },
];

export function About({ language, t }: AboutProps) {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
      <div className="absolute left-[-10rem] top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="absolute bottom-[-8rem] right-[-8rem] h-80 w-80 rounded-full bg-sky-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
            {language === 'id' ? 'Tentang Saya' : 'About Me'}
          </p>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {t.aboutTitle}
          </h2>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white bg-white/80 p-7 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.35)] backdrop-blur-sm sm:p-8">
              <p className="text-base leading-8 text-slate-600 sm:text-lg">{t.aboutText}</p>

              <div className="mt-7 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{t.educationLabel}</p>
                  <p className="mt-2 font-bold text-slate-900">{t.educationValue}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{t.focusLabel}</p>
                  <p className="mt-2 font-semibold leading-6 text-slate-700">{t.focusValue}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-blue-50/70 px-5 py-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-200">
                <span className="text-lg font-black">∞</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                  {language === 'id' ? 'Tujuan' : 'Goal'}
                </p>
                <p className="mt-1 text-sm font-medium leading-6 text-slate-700">{t.goalValue}</p>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-end justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  {language === 'id' ? 'Keahlian Utama' : 'Core Skills'}
                </p>
                <h3 className="mt-2 text-2xl font-black text-slate-950">
                  {language === 'id' ? 'Teknologi yang saya kuasai' : 'Technologies I work with'}
                </h3>
              </div>
              <span className="hidden rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-500 sm:block">
                4 Skills
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map(({ name, description, icon: Icon, color }) => (
                <div
                  key={name}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_24px_50px_-28px_rgba(37,99,235,0.45)]"
                >
                  <div className="absolute right-[-30px] top-[-30px] h-24 w-24 rounded-full bg-slate-50 transition duration-300 group-hover:scale-125 group-hover:bg-blue-50" />
                  <div className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}>
                    <Icon size={27} strokeWidth={1.8} />
                  </div>
                  <div className="relative mt-6">
                    <p className="text-xl font-black text-slate-950">{name}</p>
                    <p className="mt-1 text-sm font-medium text-slate-500">{description}</p>
                  </div>
                  <div className="relative mt-5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-blue-600 to-sky-400 transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
