'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      touchMultiplier: 1.1,
      wheelMultiplier: 0.9,
      anchors: false,
      prevent: (node) => node.closest('[data-no-smooth]') !== null,
    });

    const viewport = window as typeof window & { __lenis?: Lenis };
    viewport.__lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      delete viewport.__lenis;
      lenis.destroy();
    };
  }, []);

  return null;
}
