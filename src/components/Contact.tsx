import { Globe, Mail, Send, UserRound } from 'lucide-react';
import type { Language, translations } from '@/data/content';

type ContactProps = {
  language: Language;
  t: (typeof translations)[Language];
};

const socials = [
  { label: 'Email', value: 'tugusde23@gmail.com', href: 'mailto:tugusde23@gmail.com', icon: Mail },
  { label: 'GitHub', value: 'github.com/gusdesindu', href: 'https://github.com/gusdesindu', icon: UserRound },
  { label: 'LinkedIn', value: 'linkedin.com', href: '#', icon: Globe },
  { label: 'Instagram', value: '@tugusde23', href: 'https://instagram.com/tugusde23', icon: Send },
];

export function Contact({ language, t }: ContactProps) {
  return (
    <section id="contact" data-reveal className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-50 p-7 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.35)] sm:p-10 lg:p-12">
          <div className="absolute right-[-5rem] top-[-5rem] h-48 w-48 rounded-full border-[38px] border-blue-100/70" />

          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-blue-600">Contact</p>
              <h2 className="max-w-xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                {t.contactTitle}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">{t.contactText}</p>

              <a
                href="mailto:tugusde23@gmail.com"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_-14px_rgba(37,99,235,0.65)] transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >
                <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                {t.sendEmail}
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {socials.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-white bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_40px_-28px_rgba(37,99,235,0.5)]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                      {label}
                    </p>
                    <p className="mt-1 truncate text-sm font-bold text-slate-800">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
