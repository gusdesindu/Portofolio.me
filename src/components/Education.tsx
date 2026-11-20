import type { Language, translations } from '@/data/content';

const educationItems = [
  {
    title: {
      id: 'Sarjana Informatika',
      en: 'Bachelor of Informatics',
    },
    subtitle: {
      id: 'Universitas / Institusi',
      en: 'University / Institution',
    },
    period: '2025 - Now',
  },
  {
    title: {
      id: 'Research Development',
      en: 'Research Development',
    },
    subtitle: {
      id: 'Pelatihan / Kursus',
      en: 'Course / Training',
    },
    period: '2023',
  },
  {
    title: {
      id: 'Proyek Aplikasi Web',
      en: 'Web Application Project',
    },
    subtitle: {
      id: 'Proyek tim / kolaborasi',
      en: 'Team project / collaboration',
    },
    period: '2024',
  },
];

type EducationProps = {
  language: Language;
  t: (typeof translations)[Language];
};

export function Education({ language }: EducationProps) {
  return (
    <section id="education" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Education & Experience</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Academic background and development experience.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {educationItems.map((item) => (
            <div key={item.title.en} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-sm font-semibold text-blue-600">{item.period}</p>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title[language]}</h3>
              <p className="mt-2 text-slate-600">{item.subtitle[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
