import React, { Suspense, lazy, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const HeroScene = lazy(() => import('../three/HeroScene'));

/* ─── Animated counter ───────────────────────────────────────── */
function Counter({ to, suffix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      let start = 0;
      const step = Math.ceil(to / 40);
      const id = setInterval(() => {
        start = Math.min(start + step, to);
        setVal(start);
        if (start >= to) clearInterval(id);
      }, 30);
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(id);
  }, []);

  return (
    <section
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#06080F]"
      aria-label="Hero Section"
    >
      {/* ── Gradient background atmosphere ──────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep radial from left */}
        <div
          className="absolute -left-32 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, #FF6B4A 0%, transparent 65%)' }}
        />
        {/* Accent top-right */}
        <div
          className="absolute right-0 -top-24 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 65%)' }}
        />
        {/* Subtle amber bottom */}
        <div
          className="absolute right-1/4 bottom-0 w-[400px] h-[400px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #FFB627 0%, transparent 65%)' }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center min-h-[78vh]">

          {/* ── LEFT: TYPOGRAPHIC HERO ───────────────────────── */}
          <div className={`lg:col-span-6 xl:col-span-5 space-y-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#FF6B4A]" />
              <span className="text-[#FF6B4A] text-xs font-mono font-bold uppercase tracking-[0.25em]">
                Digital Engineering Studio
              </span>
            </div>

            {/* Giant headline */}
            <div className="space-y-0 leading-none">
              <h1 className="font-black text-white" style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', letterSpacing: '-0.03em', lineHeight: 0.95 }}>
                <span className="block">We Build</span>
                <span className="block relative">
                  <span
                    className="relative z-10"
                    style={{
                      WebkitTextStroke: '2px transparent',
                      background: 'linear-gradient(135deg, #FF6B4A 0%, #FFB627 50%, #FF6B4A 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Digital
                  </span>
                </span>
                <span className="block text-white/90">Experiences</span>
                <span
                  className="block"
                  style={{
                    WebkitTextStroke: '1.5px rgba(255,107,74,0.6)',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                  }}
                >
                  That Grow.
                </span>
              </h1>
            </div>

            {/* Description */}
            <p
              className="text-[#94A3B8] text-lg leading-relaxed max-w-md"
              style={{ transitionDelay: '200ms' }}
            >
              Fast, conversion-focused websites and web platforms —
              engineered for performance, designed to convert, and
              built to scale your business.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full font-bold text-sm text-white transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #FF6B4A, #FFB627)',
                  boxShadow: '0 0 32px rgba(255,107,74,0.45), 0 4px 24px rgba(0,0,0,0.4)',
                }}
              >
                Start a Project
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#FF6B4A] transition-all">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-bold text-sm text-white/90 border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-300 active:scale-95"
              >
                View Our Work <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-8 pt-4 border-t border-white/10">
              {[
                { val: 30, suffix: '+', label: 'Projects' },
                { val: 100, suffix: '%', label: 'Code Owned' },
                { val: 1, suffix: ' yr', label: 'Free Support' },
              ].map(({ val, suffix, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-black text-white">
                    <Counter to={val} suffix={suffix} />
                  </div>
                  <div className="text-[11px] text-[#64748B] font-medium uppercase tracking-wider mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: 3D CANVAS ────────────────────────────── */}
          <div
            className={`lg:col-span-6 xl:col-span-7 relative w-full flex items-center justify-center transition-all duration-1200 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            style={{ height: 'clamp(480px, 68vh, 760px)', transitionDelay: '150ms' }}
          >
            {/* Screen atmosphere glow */}
            <div
              className="absolute inset-0 rounded-3xl opacity-25 blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 55% 45%, #1a44cc 0%, rgba(255,107,74,0.15) 55%, transparent 80%)' }}
            />

            <Suspense
              fallback={
                <div className="flex flex-col items-center justify-center w-full h-full gap-4">
                  <div
                    className="w-14 h-14 rounded-full border-2 border-[#FF6B4A]/30 border-t-[#FF6B4A]"
                    style={{ animation: 'spin 1s linear infinite' }}
                  />
                  <span className="text-white/30 text-xs font-mono tracking-widest">LOADING 3D…</span>
                </div>
              }
            >
              <HeroScene />
            </Suspense>

            {/* Subtle Interactive 3D Indicator */}
            <div className="absolute bottom-2 right-2 sm:right-6 z-20 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#080E1A]/70 backdrop-blur-md border border-white/10 text-white/60 text-[11px] font-mono tracking-wide shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>Interactive 3D • Drag to Orbit</span>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-white text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
