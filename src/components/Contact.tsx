import { Globe, Mail, Send, UserRound } from 'lucide-react';
import type { Language, translations } from '@/data/content';

type ContactProps = {
  language: Language;
  t: (typeof translations)[Language];
};

const socials = [
  { label: 'Email', value: 'tugusde23@gmail.com', href: 'mailto:tugusde23@gmail.com', icon: Mail },
  { label: 'GitHub', value: 'github.com/gusdesindu', href: 'https://github.com/gusdesindu', icon: UserRound },
  { label: 'LinkedIn', value: 'linkedin.com/in/yourname', href: 'https://linkedin.com', icon: Globe },
  { label: 'Instagram', value: '@tugusde23', href: 'https://instagram.com/tugusde23', icon: Send },
];

export function Contact({ t }: ContactProps) {
  return (
    <section id="contact" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Contact</p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t.contactTitle}</h2>
              <p className="mt-4 max-w-xl text-lg text-slate-600">{t.contactText}</p>

              <a
                href="mailto:tugusde23@gmail.com"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-500"
              >
                <Send size={18} />
                {t.sendEmail}
              </a>
            </div>

            <div className="space-y-4">
              {socials.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">{label}</p>
                      <p className="font-medium text-slate-800">{value}</p>
                    </div>
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
