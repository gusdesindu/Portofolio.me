import type { Language, translations } from '@/data/content';

type AboutProps = {
  language: Language;
  t: (typeof translations)[Language];
};

export function About({ t }: AboutProps) {
  return (
    <section id="about" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">About Me</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t.aboutTitle}</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-lg leading-8 text-slate-600">{t.aboutText}</p>
          </div>

          <div className="space-y-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{t.educationLabel}</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{t.educationValue}</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{t.focusLabel}</p>
              <p className="mt-2 text-lg text-slate-700">{t.focusValue}</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{t.goalLabel}</p>
              <p className="mt-2 text-lg text-slate-700">{t.goalValue}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
