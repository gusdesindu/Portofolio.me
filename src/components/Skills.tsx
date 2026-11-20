import { Code2, Database, GitBranch, Globe, LayoutDashboard, Palette, Server, Smartphone } from 'lucide-react';
import type { Language, translations } from '@/data/content';

type SkillsProps = {
  language: Language;
  t: (typeof translations)[Language];
};

const skills = [
  { name: 'HTML', icon: Globe },
  { name: 'CSS', icon: Palette },
  { name: 'JavaScript', icon: Code2 },
  { name: 'PHP', icon: Server },
  { name: 'Laravel', icon: LayoutDashboard },
  { name: 'MySQL', icon: Database },
  { name: 'Next.js', icon: Smartphone },
  { name: 'React', icon: Code2 },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'Git & GitHub', icon: GitBranch },
];

export function Skills({ t }: SkillsProps) {
  return (
    <section id="skills" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Skills</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t.skillsTitle}</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {skills.map(({ name, icon: Icon }) => (
            <div key={name} className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-soft">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={26} />
              </div>
              <p className="text-base font-semibold text-slate-800">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
