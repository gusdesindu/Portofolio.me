'use client';

import Image from 'next/image';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { motion, type PanInfo } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Language, translations } from '@/data/content';
import { projects } from '@/data/projects';

type ProjectsProps = {
  language: Language;
  t: (typeof translations)[Language];
};

export function Projects({ language, t }: ProjectsProps) {
  const [activeIndex, setActiveIndex] = useState(projects.length - 1);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const albumRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + projects.length) % projects.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % projects.length);
  };

  const activeProject = projects[activeIndex]!;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 36,
        opacity: 0,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', once: true },
      });

      gsap.from(albumRef.current, {
        y: 60,
        scale: 0.94,
        opacity: 0,
        duration: 0.95,
        ease: 'power3.out',
        scrollTrigger: { trigger: albumRef.current, start: 'top 82%', once: true },
      });

      gsap.from(cardsRef.current?.children ?? [], {
        y: 40,
        opacity: 0,
        scale: 0.96,
        duration: 0.7,
        stagger: 0.09,
        ease: 'power3.out',
        scrollTrigger: { trigger: cardsRef.current, start: 'top 88%', once: true },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section ref={sectionRef} id="projects" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="absolute right-[-12rem] top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
              {language === 'id' ? 'Proyek Pilihan' : 'Selected Projects'}
            </p>
            <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              {t.projectsTitle}
            </h2>
          </div>
          <span className="hidden w-fit rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-500 sm:block">
            {t.projectsBadge}
          </span>
        </div>

        {/* Album tumpuk: desktop/tablet lebar */}
        <div className="hidden md:block">
          <motion.div
            ref={albumRef}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.06}
            dragMomentum={false}
            onPointerEnter={() => setIsPaused(true)}
            onPointerLeave={() => setIsPaused(false)}
            onPointerDown={() => setIsPaused(true)}
            onPointerUp={() => setIsPaused(false)}
            onDragEnd={(_event: PointerEvent, info: PanInfo) => {
              if (info.offset.x < -32 || info.velocity.x < -280) showNext();
              if (info.offset.x > 32 || info.velocity.x > 280) showPrevious();
            }}
            className="relative mx-auto h-[270px] cursor-grab active:cursor-grabbing lg:h-[330px]"
          >
            {projects.map((project, index) => {
              let position = index - activeIndex;
              if (position > projects.length / 2) position -= projects.length;
              if (position < -projects.length / 2) position += projects.length;

              const isActive = position === 0;
              const isVisible = Math.abs(position) <= 2;
              const offset = isActive ? 0 : position < 0 ? Math.max(position * 105, -210) : Math.min(position * 105, 210);

              return (
                <motion.div
                  key={project.title}
                  className="absolute left-1/2 top-0 h-[230px] w-[44%] lg:h-[280px]"
                  initial={false}
                  animate={{
                    x: `calc(-50% + ${offset}px)`,
                    y: isActive ? 0 : Math.abs(position) * 18,
                    scale: isActive ? 1 : 1 - Math.abs(position) * 0.08,
                    opacity: isActive ? 1 : isVisible ? 0.72 : 0,
                    zIndex: isActive ? 30 : 20 - Math.abs(position),
                  }}
                  transition={{ type: 'spring', stiffness: 230, damping: 30, mass: 0.72 }}
                >
                  <motion.button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Tampilkan ${project.title}`}
                    className="group relative h-full w-full overflow-hidden rounded-[1.25rem] border-[3px] border-white bg-slate-100 shadow-[0_20px_55px_-28px_rgba(15,23,42,0.58)]"
                    whileHover={{ y: -8, scale: isActive ? 1.018 : 1.04 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                  >
                    <Image src={project.image} alt={project.title} fill priority={isActive} className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" sizes="720px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
                    {isActive && (
                      <p className="absolute bottom-5 left-6 text-xs font-bold uppercase tracking-[0.18em] text-white/90">
                        {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                      </p>
                    )}
                  </motion.button>
                </motion.div>
              );
            })}

            <button type="button" onClick={showPrevious} aria-label="Previous project" className="absolute left-0 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-xl transition duration-300 hover:-translate-x-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white">
              <ArrowLeft size={20} />
            </button>
            <button type="button" onClick={showNext} aria-label="Next project" className="absolute right-0 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-xl transition duration-300 hover:translate-x-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white">
              <ArrowRight size={20} />
            </button>
          </motion.div>

          <motion.article
            key={activeProject.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="mx-auto mt-1 max-w-3xl text-center"
          >
            <h3 className="text-2xl font-black text-slate-950">{activeProject.title}</h3>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600">{activeProject.description[language === 'id' ? 'id' : 'en']}</p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {activeProject.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">{tech}</span>
              ))}
            </div>
          </motion.article>
        </div>

        {/* Grid dua kolom: mobile */}
        <div ref={cardsRef} className="grid grid-cols-2 gap-3 md:hidden">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_12px_35px_-25px_rgba(15,23,42,0.45)]"
              whileTap={{ scale: 0.97 }}
            >
              <div className="relative h-28 overflow-hidden bg-slate-100 sm:h-44">
                <motion.div className="absolute inset-0" whileHover={{ scale: 1.055 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
                  <Image src={project.image} alt={project.title} fill className="object-cover" sizes="50vw" />
                </motion.div>
                {project.featured && <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[9px] font-bold text-blue-700">Featured</span>}
              </div>
              <div className="p-3 sm:p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-1 line-clamp-2 text-sm font-black leading-tight text-slate-950 sm:text-lg">{project.title}</h3>
                <p className="mt-2 line-clamp-2 text-[11px] leading-4 text-slate-600 sm:text-sm sm:leading-6">{project.description[language === 'id' ? 'id' : 'en']}</p>
                <motion.span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500" whileTap={{ scale: 0.9 }}>
                  <ArrowUpRight size={14} />
                </motion.span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
