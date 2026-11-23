import { BriefcaseBusiness, Code2, GraduationCap, School } from 'lucide-react';
import type { Language, translations } from '@/data/content';

type EducationProps = {
	language: Language;
	t: (typeof translations)[Language];
};

const educationItems = [
	{
		period: '2025 - Sekarang',
		title: 'INSTIKI',
		subtitle: { id: 'S1 Informatika', en: 'Bachelor of Informatics' },
		icon: GraduationCap,
	},
	{
		period: '2022 - 2025',
		title: 'SMK Negeri 1 Denpasar',
		subtitle: { id: 'Jurusan Informatika', en: 'Informatics Department' },
		icon: School,
	},
];

const experienceItems = [
	{
		period: '2024',
		title: { id: 'Research Developer', en: 'Research Developer' },
		subtitle: {
			id: 'Pengembangan dan riset teknologi',
			en: 'Technology development and research',
		},
		icon: Code2,
	},
	{
		period: '2024',
		title: { id: 'Web Developer', en: 'Web Developer' },
		subtitle: { id: 'Pengembangan aplikasi web', en: 'Web application development' },
		icon: BriefcaseBusiness,
	},
];

export function Education({ language }: EducationProps) {
	return (
		<section
			id="education"
			data-reveal
			className="relative overflow-hidden bg-slate-50 py-20 sm:py-24"
		>
			<div className="absolute left-[-10rem] top-16 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
			<div className="absolute bottom-[-8rem] right-[-8rem] h-80 w-80 rounded-full bg-sky-100/70 blur-3xl" />

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="mb-12 max-w-2xl">
					<p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
						{language === 'id' ? 'Pendidikan & Pengalaman' : 'Education & Experience'}
					</p>
					<h2 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
						{language === 'id'
							? 'Perjalanan pendidikan dan pengalaman saya.'
							: 'My education and experience journey.'}
					</h2>
				</div>

				<div className="grid gap-10 md:grid-cols-2 md:gap-12">
					<div>
						<div className="mb-7 flex items-center gap-3">
							<span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-200">
								<GraduationCap size={21} />
							</span>
							<h3 className="text-xl font-black text-slate-950">
								{language === 'id' ? 'Pendidikan' : 'Education'}
							</h3>
						</div>

						<div className="relative ml-5 border-l-2 border-slate-200 pl-7">
							{educationItems.map(
								({ period, title, subtitle, icon: Icon }) => (
									<article key={title} className="relative pb-8 last:pb-0">
										<span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-[3px] border-white bg-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.12)]" />
										<div className="group rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.4)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 sm:p-6">
											<div className="flex items-start justify-between gap-4">
												<div>
													<p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
														{period}
													</p>
													<h4 className="mt-2 text-lg font-black text-slate-950 sm:text-xl">
														{title}
													</h4>
													<p className="mt-2 text-sm font-medium leading-6 text-slate-500">
														{subtitle[language]}
													</p>
												</div>
												<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
													<Icon size={21} />
												</span>
											</div>
										</div>
									</article>
								)
							)}
						</div>
					</div>

					<div>
						<div className="mb-7 flex items-center gap-3">
							<span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-white shadow-lg shadow-slate-200">
								<BriefcaseBusiness size={21} />
							</span>
							<h3 className="text-xl font-black text-slate-950">
								{language === 'id' ? 'Pengalaman' : 'Experience'}
							</h3>
						</div>

						<div className="relative ml-5 border-l-2 border-slate-200 pl-7">
							{experienceItems.map(
								({ period, title, subtitle, icon: Icon }) => (
									<article key={title.en} className="relative pb-8 last:pb-0">
										<span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-[3px] border-white bg-slate-950 shadow-[0_0_0_4px_rgba(15,23,42,0.10)]" />
										<div className="group rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.4)] transition duration-300 hover:-translate-y-1 hover:border-slate-300 sm:p-6">
											<div className="flex items-start justify-between gap-4">
												<div>
													<p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
														{period}
													</p>
													<h4 className="mt-2 text-lg font-black text-slate-950 sm:text-xl">
														{title[language]}
													</h4>
													<p className="mt-2 text-sm font-medium leading-6 text-slate-500">
														{subtitle[language]}
													</p>
												</div>
												<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition duration-300 group-hover:bg-slate-950 group-hover:text-white">
													<Icon size={21} />
												</span>
											</div>
										</div>
									</article>
								)
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
