import React, { Suspense, lazy, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  Zap, 
  ShieldCheck, 
  Users, 
  Code2, 
  Smartphone, 
  Layers, 
  TrendingUp,
  Box
} from 'lucide-react';
import GovernmentCertifications from '../ui/GovernmentCertifications';

// Lazy load 3D scene only on explicit user interaction
const HeroScene = lazy(() => import('../three/HeroScene'));

/* ─── Non-blocking Animated Counter ────────────────────────── */
function Counter({ to, suffix = '' }) {
  const [val, setVal] = useState(to);
  const ref = useRef(null);

  useEffect(() => {
    // Only animate if browser supports IntersectionObserver and not reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVal(to);
      return;
    }

    setVal(0);
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        let start = 0;
        const step = Math.max(1, Math.ceil(to / 30));
        const timer = setInterval(() => {
          start = Math.min(start + step, to);
          setVal(start);
          if (start >= to) clearInterval(timer);
        }, 35);
      },
      { threshold: 0.2 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);

  return <span ref={ref}>{val}{suffix}</span>;
}

export default function HeroSection() {
  const [show3D, setShow3D] = useState(false);

  return (
    <section
      className="relative min-h-[92svh] lg:min-h-[96svh] flex flex-col justify-center overflow-hidden bg-[#06080F]"
      aria-label="Hero Section"
    >
      {/* ── Background Ambiance (Lightweight CSS Only) ──────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* Warm amber radial underglow matching mockup */}
        <div
          className="absolute -left-20 top-1/3 w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
          style={{ background: 'radial-gradient(circle, #FF6B4A 0%, transparent 70%)' }}
        />
        <div
          className="absolute right-0 top-1/4 w-[650px] h-[650px] rounded-full opacity-25 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #FF7C42 0%, #FFB627 40%, transparent 75%)' }}
        />
        <div
          className="absolute right-1/4 bottom-10 w-[450px] h-[450px] rounded-full opacity-15 blur-[90px]"
          style={{ background: 'radial-gradient(circle, #E6400A 0%, transparent 70%)' }}
        />

        {/* Subtle architectural grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full pt-20 lg:pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-14 items-center">

          {/* ── LEFT COLUMN: HIGH-IMPACT TYPOGRAPHY ───────────── */}
          <div className="lg:col-span-6 xl:col-span-6 max-w-xl space-y-6 sm:space-y-7">

            {/* Eyebrow Badge */}
            <div className="flex items-center gap-3">
              <span className="text-[#FF6B4A] text-xs font-mono font-bold uppercase tracking-[0.25em]">
                DIGITAL ENGINEERING STUDIO
              </span>
              <span className="h-px w-8 bg-[#FF6B4A]/60" />
            </div>

            {/* Giant Headline */}
            <h1 
              className="font-black text-white tracking-tight leading-[1.05]"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.75rem)' }}
            >
              <span className="block">We Build Digital</span>
              <span className="block">Experiences</span>
              <span className="block text-[#FF6B4A]">
                That Grow<span className="text-[#FFB627]">.</span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed max-w-lg font-normal">
              From powerful websites to scalable web applications, we build high-performance digital solutions that help businesses grow, automate, and stand out online.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-7 py-3.5 sm:py-4 rounded-full font-bold text-sm text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_0_28px_rgba(255,107,74,0.45)]"
                style={{
                  background: 'linear-gradient(135deg, #FF6B4A 0%, #FF7C42 100%)',
                }}
              >
                <span>Start a Project</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>

              <Link
                to="/work"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-full font-semibold text-sm text-white/90 border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-200 active:scale-95 backdrop-blur-xs"
              >
                <Play className="w-3.5 h-3.5 fill-current text-white/80" />
                <span>View Our Work</span>
              </Link>
            </div>

            {/* Trust Badges Row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-xs sm:text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <span className="text-[#FF6B4A]"><Zap className="w-4 h-4 fill-[#FF6B4A]" /></span>
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FFB627]"><ShieldCheck className="w-4 h-4 text-[#FFB627]" /></span>
                <span>Scalable &amp; Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FF6B4A]"><Users className="w-4 h-4 text-[#FF6B4A]" /></span>
                <span>Client-Focused</span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-5 border-t border-white/10 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  <Counter to={30} suffix="+" />
                </div>
                <div className="text-[11px] sm:text-xs text-[#94A3B8] font-medium mt-0.5">
                  Projects Delivered
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  <Counter to={100} suffix="%" />
                </div>
                <div className="text-[11px] sm:text-xs text-[#94A3B8] font-medium mt-0.5">
                  Client Satisfaction
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  <Counter to={1} suffix="+ Yr" />
                </div>
                <div className="text-[11px] sm:text-xs text-[#94A3B8] font-medium mt-0.5">
                  Industry Experience
                </div>
              </div>
            </div>

            {/* Official Government Recognitions Trust Bar (MSME & GeM) */}
            <div className="pt-2">
              <GovernmentCertifications variant="hero" />
            </div>
          </div>

          {/* ── RIGHT COLUMN: ULTRA-FAST HERO VISUAL & MOCKUP ── */}
          <div className="lg:col-span-6 xl:col-span-6 relative w-full flex items-center justify-center">

            {/* Interactive 3D Mode (Loaded only if requested by user) */}
            {show3D ? (
              <div className="relative w-full h-[540px] sm:h-[620px] rounded-3xl overflow-hidden border border-white/10 bg-black/40">
                <Suspense
                  fallback={
                    <div className="flex flex-col items-center justify-center w-full h-full gap-3 text-slate-400">
                      <div className="w-8 h-8 rounded-full border-2 border-[#FF6B4A] border-t-transparent animate-spin" />
                      <span className="text-xs font-mono">Initializing 3D Scene…</span>
                    </div>
                  }
                >
                  <HeroScene />
                </Suspense>
                <button
                  type="button"
                  onClick={() => setShow3D(false)}
                  className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-black/70 hover:bg-black text-xs font-mono text-white/80 border border-white/20 transition-all cursor-pointer"
                >
                  ✕ Close 3D
                </button>
              </div>
            ) : (
              /* High-Performance LCP-Optimized Visual with Floating Badges */
              <div className="relative w-full max-w-[620px] mx-auto group select-none">

                {/* Warm amber back-glow under pedestal */}
                <div 
                  className="absolute inset-x-8 bottom-4 h-36 rounded-full opacity-60 blur-2xl pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at center, rgba(255,107,74,0.45) 0%, rgba(255,182,39,0.2) 50%, transparent 80%)' }}
                  aria-hidden="true"
                />

                {/* Main Hero LCP Image */}
                <img
                  src="/hero-laptop-seamless.webp"
                  alt="TechCrestaX Modern Digital Solutions - High Performance Web & Platform Engineering"
                  width="1208"
                  height="840"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  className="relative z-10 w-full h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                />

                {/* Floating Interactive Glass Badges Matching Mockup */}
                
                {/* 1. Top Right: Web Development */}
                <div 
                  className="absolute top-3 sm:top-6 -right-2 sm:right-2 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#0F1726]/85 border border-[#FF6B4A]/50 shadow-[0_8px_24px_rgba(255,107,74,0.2)] backdrop-blur-md transition-transform duration-300 hover:scale-105"
                  style={{ animation: 'float 6s ease-in-out infinite' }}
                >
                  <div className="w-7 h-7 rounded-lg bg-[#FF6B4A]/20 border border-[#FF6B4A]/40 flex items-center justify-center text-[#FF6B4A]">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                    Web Development
                  </span>
                </div>

                {/* 2. Mid Left: Mobile Apps */}
                <div 
                  className="absolute top-1/3 -left-3 sm:left-2 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#0F1726]/85 border border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.5)] backdrop-blur-md transition-transform duration-300 hover:scale-105"
                  style={{ animation: 'float 7s ease-in-out infinite 1s' }}
                >
                  <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-slate-200">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                    Mobile Apps
                  </span>
                </div>

                {/* 3. Mid Right: UI/UX Design */}
                <div 
                  className="absolute top-[48%] -right-3 sm:right-0 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#0F1726]/85 border border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.5)] backdrop-blur-md transition-transform duration-300 hover:scale-105"
                  style={{ animation: 'float 6.5s ease-in-out infinite 2s' }}
                >
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-[#FFB627]">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                    UI/UX Design
                  </span>
                </div>

                {/* 4. Bottom Right: Digital Growth */}
                <div 
                  className="absolute bottom-10 sm:bottom-12 -right-1 sm:right-6 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#0F1726]/85 border border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.5)] backdrop-blur-md transition-transform duration-300 hover:scale-105"
                  style={{ animation: 'float 8s ease-in-out infinite 1.5s' }}
                >
                  <div className="w-7 h-7 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-[#FF7C42]">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                    Digital Growth
                  </span>
                </div>

                {/* Subtle Interactive 3D Explore Pill (Zero bundle cost until clicked) */}
                <div className="absolute bottom-1 left-4 z-20 hidden md:block">
                  <button
                    type="button"
                    onClick={() => setShow3D(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/85 text-[11px] font-mono text-slate-300 border border-white/10 hover:border-[#FF6B4A]/40 transition-all cursor-pointer shadow-xs"
                    title="Experience interactive 3D WebGL mode"
                  >
                    <Box className="w-3.5 h-3.5 text-[#FF6B4A]" />
                    <span>Explore 3D Canvas</span>
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
