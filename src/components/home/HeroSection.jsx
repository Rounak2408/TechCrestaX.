import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight,
  Globe, 
  Layout, 
  ShoppingCart, 
  TrendingUp, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section 
      className="relative pt-6 sm:pt-8 md:pt-12 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-[#F8F9FA] dark:bg-[#070A0F] transition-colors select-none"
      aria-label="Hero Section"
    >
      {/* Alpha Agency Ambient Coral & Amber Glow Sprays */}
      <div 
        className="absolute top-0 right-1/4 w-[600px] sm:w-[850px] h-[550px] rounded-full pointer-events-none -z-10 blur-[140px] opacity-60 dark:opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, #FFE8DF 0%, #FFF4F0 45%, transparent 75%)'
        }}
      />
      <div 
        className="absolute -top-10 right-4 w-[450px] h-[450px] rounded-full pointer-events-none -z-10 blur-[120px] opacity-35 dark:opacity-15 bg-[#FF6B4A]/15"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* =========================================================
              LEFT COLUMN: Value Proposition & Alpha Agency Style CTAs
             ========================================================= */}
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left z-20">
            
            {/* Eyebrow Badge (Alpha Agency Signature 360° Solution) */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4F0] dark:bg-[#0D1420] border border-[#FF6B4A]/25 text-xs font-semibold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#FF6B4A] shadow-[0_0_8px_#FF6B4A] animate-pulse" />
              <span className="uppercase tracking-widest text-[11px] font-mono text-[#0D1B2A] dark:text-[#FF7C42] font-bold">
                360° SOLUTION FOR BUSINESSES
              </span>
            </div>

            {/* Main Headline (Alpha Agency Large Typography Hierarchy) */}
            <h1 className="animate-fade-in-up animation-delay-100 text-4xl sm:text-5xl lg:text-[44px] xl:text-[50px] font-extrabold font-display tracking-tight text-[#0D1B2A] dark:text-white leading-[1.12]">
              Performance-Driven Websites That Grow Businesses.
              <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#FF6B4A] via-[#FF7C42] to-[#FFB627] bg-clip-text text-transparent block mt-1">
                Turn Visitors Into Revenue.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="animate-fade-in-up animation-delay-200 text-base sm:text-lg text-[#4C5258] dark:text-[#94A3B8] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              We build fast, mobile-first websites and web applications engineered for speed, clean UX, and high conversion. Looking good is the baseline—we're measured on what actually matters: leads, speed, and real business results.
            </p>

            {/* Action CTAs (Alpha Agency Signature Gradient Pill + Obsidian Dark) */}
            <div className="animate-fade-in-up animation-delay-300 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                to="/contact"
                className="button-press-scale w-full sm:w-auto inline-flex items-center justify-center gap-3 pl-6 pr-2 py-2.5 rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] hover:from-[#FF7C42] hover:to-[#FFA700] text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#FF6B4A]/25 hover:shadow-xl hover:shadow-[#FF6B4A]/35 cursor-pointer group"
              >
                <span>Get In Touch</span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#FF6B4A] transition-all">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                to="/work"
                className="button-press-scale w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0D1B2A] hover:bg-[#162234] text-white font-semibold text-sm sm:text-base border border-slate-700/60 transition-all cursor-pointer shadow-md group"
              >
                <span>View All Works</span>
                <ArrowUpRight className="w-4 h-4 text-[#FFB627] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Verified Trust Highlights Strip */}
            <div className="animate-fade-in-up animation-delay-400 pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-[#4C5258] dark:text-[#94A3B8] font-medium">
              <div className="flex items-center gap-1.5 hover:text-[#FF6B4A] transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B4A]" />
                <span>30+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-1.5 hover:text-[#FF6B4A] transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B4A]" />
                <span>100% Code Ownership</span>
              </div>
              <div className="flex items-center gap-1.5 hover:text-[#FF6B4A] transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B4A]" />
                <span>1 Year Free Maintenance</span>
              </div>
            </div>

          </div>

          {/* =========================================================
              RIGHT COLUMN: Interactive Mockup Stage with Floating Cards
             ========================================================= */}
          <div className="lg:col-span-7 relative flex items-center justify-center pt-8 lg:pt-0 animate-fade-in-scale animation-delay-150">
            
            {/* Soft Ambient Radial Backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[580px] h-[420px] sm:h-[580px] bg-gradient-to-tr from-[#FFE8DF]/70 via-[#FFF4F0]/40 to-transparent dark:from-[#FF6B4A]/10 dark:via-transparent rounded-full blur-2xl -z-10" />

            {/* Handwritten Calligraphy (Top Right) */}
            <div className="absolute -top-10 sm:-top-12 right-4 sm:right-8 lg:right-6 z-30 pointer-events-none select-none text-right hidden sm:block">
              <div className="font-['Caveat',cursive] text-2xl sm:text-3xl lg:text-[32px] text-[#0D1B2A]/85 dark:text-slate-200 font-bold leading-[1.1] transform -rotate-3">
                <div>Ideas</div>
                <div>Design</div>
                <div>Develop</div>
                <div className="relative inline-block">
                  <span className="text-[#FF6B4A]">Grow</span>
                  <svg className="w-full h-3 text-[#FF6B4A] -mt-1" viewBox="0 0 100 20" fill="none" preserveAspectRatio="none">
                    <path d="M2 14 Q 50 2, 98 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Main Mockup Stage Container */}
            <div className="relative w-full max-w-[600px] mx-auto pb-6">
              
              {/* --- 1. FLOATING SERVICE CARDS (With subtle floating micro-animations) --- */}
              
              {/* Card 1: Website Development */}
              <div className="animate-float-1 absolute -top-4 sm:-top-6 -left-4 sm:-left-8 lg:-left-12 bg-white/95 dark:bg-[#0D1420]/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-xl border border-[#EBECEF] dark:border-white/10 hover:-translate-y-1 hover:border-[#FF6B4A]/50 transition-all duration-300 w-32 sm:w-36 z-30 group cursor-default">
                <div className="flex items-start justify-between">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#FF6B4A] to-[#FFB627] text-white flex items-center justify-center shadow-md shadow-[#FF6B4A]/25 group-hover:scale-105 transition-transform">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#FF6B4A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="mt-2 text-left">
                  <span className="block text-xs font-bold text-[#0D1B2A] dark:text-white leading-tight">Websites</span>
                  <span className="block text-xs font-bold text-[#0D1B2A] dark:text-white leading-tight">That Convert</span>
                </div>
              </div>

              {/* Card 2: UI/UX Design */}
              <div className="animate-float-2 absolute top-36 sm:top-40 -left-4 sm:-left-8 lg:-left-12 bg-white/95 dark:bg-[#0D1420]/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-xl border border-[#EBECEF] dark:border-white/10 hover:-translate-y-1 hover:border-[#FF6B4A]/50 transition-all duration-300 w-32 sm:w-36 z-30 group cursor-default">
                <div className="flex items-start justify-between">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#FF7C42] to-rose-500 text-white flex items-center justify-center shadow-md shadow-rose-500/25 group-hover:scale-105 transition-transform">
                    <Layout className="w-5 h-5 text-white" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#FF6B4A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="mt-2 text-left">
                  <span className="block text-xs font-bold text-[#0D1B2A] dark:text-white leading-tight">UI/UX &amp;</span>
                  <span className="block text-xs font-bold text-[#0D1B2A] dark:text-white leading-tight">Product Design</span>
                </div>
              </div>

              {/* Card 3: E-commerce Solutions */}
              <div className="animate-float-1 absolute top-2 sm:top-4 -right-1 sm:-right-4 lg:-right-6 bg-white/95 dark:bg-[#0D1420]/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl border border-[#EBECEF] dark:border-white/10 hover:-translate-y-1 hover:border-[#FF6B4A]/50 transition-all duration-300 flex items-center gap-3 z-50 group cursor-default">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#0D1B2A] to-slate-800 text-white flex items-center justify-center shadow-md shrink-0 group-hover:scale-105 transition-transform border border-slate-700">
                  <ShoppingCart className="w-5 h-5 text-[#FFB627]" />
                </div>
                <div className="text-left pr-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#0D1B2A] dark:text-white">E-commerce</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6B4A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <span className="text-xs font-bold text-[#0D1B2A] dark:text-white block -mt-0.5">&amp; Portals</span>
                </div>
              </div>

              {/* Card 4: SEO & Growth */}
              <div className="animate-float-2 absolute top-20 sm:top-24 -right-1 sm:-right-4 lg:-right-6 bg-white/95 dark:bg-[#0D1420]/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl border border-[#EBECEF] dark:border-white/10 hover:-translate-y-1 hover:border-[#FF6B4A]/50 transition-all duration-300 flex items-center gap-3 z-50 group cursor-default">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#8FC658] to-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/25 shrink-0 group-hover:scale-105 transition-transform">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div className="text-left pr-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#0D1B2A] dark:text-white">SEO &amp; Organic</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6B4A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <span className="text-xs font-bold text-[#0D1B2A] dark:text-white block -mt-0.5">Growth</span>
                </div>
              </div>

              {/* --- 2. LAPTOP MOCKUP FRAME --- */}
              <div className="relative mx-auto w-[88%] sm:w-[90%] aspect-[16/10] bg-[#0D1B2A] rounded-t-2xl sm:rounded-t-3xl p-2 sm:p-2.5 shadow-2xl border border-slate-700/70 z-10 overflow-hidden">
                
                {/* Camera dot */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-900 border border-slate-700 z-30" />
                
                {/* Screen Content */}
                <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden flex flex-col text-white font-sans border border-slate-800">
                  
                  {/* Mountain Wallpaper */}
                  <img 
                    src="/hero-mountains.jpg" 
                    alt="Scenic Mountain Website Hero" 
                    className="absolute inset-0 w-full h-full object-cover object-center -z-10"
                  />
                  {/* Dark Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/60 -z-0" />

                  {/* Top Bar / Mini Navbar */}
                  <div className="relative z-10 h-7 sm:h-8 px-4 sm:px-6 border-b border-white/10 flex items-center justify-between bg-black/40 backdrop-blur-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3.5 h-3.5 rounded bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] flex items-center justify-center text-[8px] font-bold text-white">X</div>
                      <span className="text-[10px] sm:text-[11px] font-bold tracking-tight">TechCresta<span className="text-[#FF6B4A]">X</span></span>
                    </div>

                    <div className="hidden sm:flex items-center gap-3 text-[9px] text-slate-200">
                      <span className="text-[#FF6B4A] font-bold">Home</span>
                      <span>Services</span>
                      <span>Work</span>
                      <span>About</span>
                    </div>

                    <div className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] text-[8px] font-bold text-white shadow-xs">
                      Get In Touch
                    </div>
                  </div>

                  {/* Laptop Screen Hero Content */}
                  <div className="relative z-10 flex-1 px-4 sm:px-6 py-2 sm:py-4 flex flex-col justify-center">
                    <div className="max-w-[190px] sm:max-w-[240px] md:max-w-[270px] space-y-1 sm:space-y-1.5 text-left">
                      <div className="text-[7px] sm:text-[8px] font-mono tracking-widest text-slate-300 uppercase flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A]" />
                        <span>360° DIGITAL SOLUTION</span>
                      </div>
                      
                      <h2 className="text-[11px] sm:text-sm lg:text-base font-extrabold tracking-tight text-white leading-tight">
                        Performance-Driven Websites That Grow Businesses.
                      </h2>
                      
                      <p className="text-[7px] sm:text-[8.5px] text-slate-300 leading-snug line-clamp-2 max-w-[230px]">
                        Fast, mobile-first web platforms built for measurable growth and revenue.
                      </p>

                      <div className="flex items-center gap-1.5 pt-1">
                        <div className="px-2.5 py-0.5 sm:py-1 rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] text-[7.5px] sm:text-[8.5px] font-bold text-white flex items-center gap-1 shadow-sm">
                          <span>Get In Touch</span>
                          <span>→</span>
                        </div>
                        <div className="px-2 py-0.5 sm:py-1 rounded-full bg-black/60 border border-white/20 text-[7.5px] sm:text-[8.5px] font-medium text-slate-200">
                          Our Work →
                        </div>
                      </div>
                    </div>

                    {/* Floating mini "+200% Business Growth" card */}
                    <div className="absolute left-[50%] sm:left-[53%] bottom-2.5 sm:bottom-3.5 p-1.5 sm:p-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 shadow-xl flex items-center gap-2 z-20">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-[#FF6B4A]/25 border border-[#FF6B4A]/40 text-[#FF6B4A] flex items-center justify-center shrink-0">
                        <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </div>
                      <div className="text-left pr-0.5">
                        <div className="text-[7.5px] sm:text-[8px] text-slate-300 font-medium leading-none">Business Growth</div>
                        <div className="text-[10px] sm:text-[11px] font-black text-white flex items-center gap-0.5 mt-0.5">
                          <span>+200%</span>
                          <span className="text-[#FFB627] text-[8px]">↗</span>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              {/* Laptop Metallic Base Shelf */}
              <div className="relative mx-auto w-[102%] -left-[1%] h-3 sm:h-3.5 bg-gradient-to-b from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] rounded-b-xl shadow-2xl flex items-center justify-center border-t border-white/80 z-10">
                <div className="w-16 sm:w-20 h-0.5 sm:h-1 rounded-full bg-slate-500/60" />
              </div>

              {/* Pedestal Base */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[96%] h-5 bg-gradient-to-b from-stone-200/90 via-stone-300/80 to-stone-400/90 dark:from-[#18202F] dark:to-[#0D121B] rounded-lg shadow-xl border-t border-white/50 -z-0" />

              {/* --- 3. 3D ISOMETRIC MOBILE SMARTPHONE MOCKUP --- */}
              <div 
                className="absolute -bottom-5 sm:-bottom-7 right-0 sm:right-2 lg:right-3 w-24 sm:w-28 lg:w-32 aspect-[9/19] z-40 group cursor-pointer"
                style={{
                  perspective: '1200px',
                }}
              >
                <div 
                  className="w-full h-full rounded-[20px] sm:rounded-[26px] bg-[#0D1B2A] p-1 shadow-[-16px_22px_40px_rgba(0,0,0,0.55),0_4px_12px_rgba(0,0,0,0.35)] border border-slate-600/70 ring-1 ring-white/15 relative transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1"
                  style={{
                    transform: 'rotateY(-15deg) rotateX(6deg) rotateZ(-2deg)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="absolute -left-1 top-2.5 bottom-2.5 w-1 bg-gradient-to-r from-slate-400 via-slate-600 to-slate-800 rounded-l-md pointer-events-none opacity-85" />
                  
                  {/* Dynamic island notch */}
                  <div className="w-7 sm:w-9 h-1.5 bg-black rounded-full mx-auto mb-0.5 z-30 relative" />

                  <div className="relative w-full h-full rounded-[15px] sm:rounded-[20px] overflow-hidden flex flex-col p-1.5 text-white border border-slate-800">
                    
                    <img 
                      src="/hero-mountains.jpg" 
                      alt="Mobile Preview" 
                      className="absolute inset-0 w-full h-full object-cover object-center -z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/70 -z-0" />

                    <div className="relative z-10 flex items-center justify-between text-[7px] font-bold py-0.5">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] flex items-center justify-center text-[5px]">X</span>
                        <span>TechCresta<span className="text-[#FF6B4A]">X</span></span>
                      </span>
                      <span className="text-slate-400 text-[8px]">☰</span>
                    </div>

                    <div className="relative z-10 my-auto text-left space-y-0.5">
                      <div className="text-[5.5px] uppercase tracking-wider text-slate-400">360° SOLUTION</div>
                      <div className="text-[8px] sm:text-[9px] font-extrabold text-white leading-tight">
                        Websites That Grow Businesses.
                      </div>
                      <div className="pt-0.5">
                        <div className="py-0.5 px-1.5 bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] rounded-full text-[6.5px] sm:text-[7px] text-center font-bold text-white shadow-xs">
                          Get In Touch →
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 pt-1 border-t border-white/10 text-left">
                      <div className="text-[5.5px] text-slate-300 mb-0.5">25+ Happy Clients</div>
                      <div className="flex items-center">
                        <img src="/team1.jpg" alt="Client 1" className="w-3 h-3 rounded-full border border-black object-cover" />
                        <img src="/team3.jpg" alt="Client 2" className="w-3 h-3 rounded-full border border-black object-cover -ml-1" />
                        <img src="/team4.jpg" alt="Client 3" className="w-3 h-3 rounded-full border border-black object-cover -ml-1" />
                        <div className="w-3 h-3 rounded-full bg-slate-800 text-[5px] font-bold text-white flex items-center justify-center border border-black -ml-1">
                          25+
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

              {/* Decorative Plant */}
              <div className="absolute -bottom-6 -right-6 sm:-right-8 w-20 sm:w-24 h-auto pointer-events-none z-30 hidden sm:block">
                <img 
                  src="/potted-plant.png" 
                  alt="Office Plant Decor" 
                  className="w-full h-auto object-contain drop-shadow-xl"
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
