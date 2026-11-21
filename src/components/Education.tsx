import { GraduationCap, Layers3, UsersRound } from 'lucide-react';
import type { Language, translations } from '@/data/content';

const educationItems = [
  {
    title: { id: 'Sarjana Informatika', en: 'Bachelor of Informatics' },
    subtitle: { id: 'Universitas / Institusi', en: 'University / Institution' },
    period: '2025 - Now',
    icon: GraduationCap,
  },
  {
    title: { id: 'Research Development', en: 'Research Development' },
    subtitle: { id: 'Pelatihan / Kursus', en: 'Course / Training' },
    period: '2023',
    icon: Layers3,
  },
  {
    title: { id: 'Proyek Aplikasi Web', en: 'Web Application Project' },
    subtitle: { id: 'Proyek tim / kolaborasi', en: 'Team project / collaboration' },
    period: '2024',
    icon: UsersRound,
  },
];

type EducationProps = {
  language: Language;
  t: (typeof translations)[Language];
};

export function Education({ language }: EducationProps) {
  return (
    <section id="education" className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
      <div className="absolute left-[-10rem] top-16 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
            {language === 'id' ? 'Pendidikan & Pengalaman' : 'Education & Experience'}
          </p>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {language === 'id'
              ? 'Latar belakang akademik dan pengalaman pengembangan.'
              : 'Academic background and development experience.'}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {educationItems.map(({ title, subtitle, period, icon: Icon }) => (
            <article
              key={title.en}
              className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_20px_60px_-38px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_28px_70px_-35px_rgba(37,99,235,0.38)] sm:p-7"
            >
              <div className="absolute right-[-35px] top-[-35px] h-28 w-28 rounded-full bg-slate-50 transition duration-300 group-hover:scale-125 group-hover:bg-blue-50" />

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={26} strokeWidth={1.8} />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">{period}</p>
              <h3 className="mt-3 text-xl font-black text-slate-950">{title[language]}</h3>
              <p className="mt-2 text-sm font-medium leading-6 text-slate-500">{subtitle[language]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
