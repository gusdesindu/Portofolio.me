'use client';

import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
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
  const headingRef = useRef<HTMLHeadingElement>(null);
  const albumRef = useRef<HTMLDivElement>(null);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + projects.length) % projects.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % projects.length);
  };

  const activeProject = projects[activeIndex]!;

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 45,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          once: true,
        },
      });

      gsap.from(albumRef.current, {
        y: 70,
        scale: 0.94,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: albumRef.current,
          start: 'top 82%',
          once: true,
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="absolute right-[-12rem] top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-blue-600">
              {language === 'id' ? 'Proyek Pilihan' : 'Selected Projects'}
            </p>
            <h2 ref={headingRef} className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              {t.projectsTitle}
            </h2>
          </div>

          <div className="flex items-center gap-3 sm:hidden">
            <button type="button" onClick={showPrevious} aria-label="Previous project" className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm">
              <ArrowLeft size={18} />
            </button>
            <button type="button" onClick={showNext} aria-label="Next project" className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <motion.div
          ref={albumRef}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onPointerEnter={() => setIsPaused(true)}
          onPointerLeave={() => setIsPaused(false)}
          onDragEnd={(_event: PointerEvent, info: PanInfo) => {
            if (info.offset.x < -45 || info.velocity.x < -350) showNext();
            if (info.offset.x > 45 || info.velocity.x > 350) showPrevious();
          }}
          className="relative mx-auto h-[215px] cursor-grab active:cursor-grabbing sm:h-[230px] lg:h-[270px]"
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
                className="absolute left-1/2 top-0 h-[180px] w-[82%] sm:h-[185px] sm:w-[44%] lg:h-[230px]"
                initial={false}
                animate={{
                  x: `calc(-50% + ${offset}px)`,
                  y: isActive ? 0 : Math.abs(position) * 18,
                  scale: isActive ? 1 : 1 - Math.abs(position) * 0.08,
                  opacity: isActive ? 1 : isVisible ? 0.72 : 0,
                  zIndex: isActive ? 30 : 20 - Math.abs(position),
                }}
                transition={{
                  type: 'spring',
                  stiffness: 170,
                  damping: 24,
                  mass: 0.85,
                }}
              >
                <motion.button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Tampilkan ${project.title}`}
                  className="group relative h-full w-full overflow-hidden rounded-[1rem] border-[3px] border-white bg-slate-100 shadow-[0_16px_40px_-25px_rgba(15,23,42,0.58)]"
                  whileHover={{ y: -8, scale: isActive ? 1.018 : 1.04 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={isActive}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    sizes="(max-width: 1024px) 82vw, 720px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />

                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5 text-left sm:p-7">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                        {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                      </p>
                    </div>
                  )}
                </motion.button>
              </motion.div>
            );
          })}

          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous project"
            className="absolute left-0 top-1/2 z-40 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-xl transition duration-300 hover:-translate-x-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white sm:flex"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Next project"
            className="absolute right-0 top-1/2 z-40 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-xl transition duration-300 hover:translate-x-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white sm:flex"
          >
            <ArrowRight size={20} />
          </button>
        </motion.div>

        <motion.article
          key={activeProject.title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mx-auto mt-1 max-w-3xl text-center sm:mt-3"
        >
          <h3 className="text-xl font-black text-slate-950 sm:text-2xl">{activeProject.title}</h3>
          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {activeProject.description[language === 'id' ? 'id' : 'en']}
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {activeProject.technologies.map((tech) => (
              <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
