import Image from 'next/image';
import type { Language, translations } from '@/data/content';
import { projects } from '@/data/projects';

type ProjectsProps = {
  language: Language;
  t: (typeof translations)[Language];
};

export function Projects({ language, t }: ProjectsProps) {
  return (
    <section id="projects" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Projects</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t.projectsTitle}</h2>
          </div>
          <span className="inline-flex rounded-full border border-dashed border-slate-300 bg-white px-3 py-1 text-sm text-slate-500">
            {t.projectsBadge}
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="relative h-56 overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>

              <div className="space-y-5 p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                  {project.featured && (
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">Featured</span>
                  )}
                </div>

                <p className="text-base leading-7 text-slate-600">{project.description[language === 'id' ? 'id' : 'en']}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700">
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
