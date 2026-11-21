import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { Language, translations } from '@/data/content';
import { projects } from '@/data/projects';

type ProjectsProps = {
  language: Language;
  t: (typeof translations)[Language];
};

export function Projects({ language, t }: ProjectsProps) {
  return (
    <section id="projects" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="absolute right-[-12rem] top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
              {language === 'id' ? 'Proyek Pilihan' : 'Selected Projects'}
            </p>
            <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              {t.projectsTitle}
            </h2>
          </div>
          <span className="w-fit rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
            {t.projectsBadge}
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_20px_60px_-38px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_28px_70px_-35px_rgba(37,99,235,0.38)]"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100 sm:h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
                {project.featured && (
                  <span className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/85 px-3 py-1.5 text-xs font-bold text-blue-700 shadow-sm backdrop-blur-md">
                    Featured
                  </span>
                )}
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-slate-950">{project.title}</h3>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                <p className="mt-4 min-h-[56px] text-base leading-7 text-slate-600">
                  {project.description[language === 'id' ? 'id' : 'en']}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
