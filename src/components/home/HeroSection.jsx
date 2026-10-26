import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight,
  Globe, 
  Layout, 
  ShoppingCart, 
  TrendingUp, 
  CheckCircle2
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section 
      className="relative pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-[#FFF9F6] dark:bg-[#0B0E14] transition-colors select-none"
      aria-label="Hero Section"
    >
      {/* Soft warm peach & orange ambient glow shapes */}
      <div 
        className="absolute top-0 right-1/4 w-[600px] sm:w-[850px] h-[550px] rounded-full pointer-events-none -z-10 blur-[130px] opacity-70 dark:opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, #FFE6D9 0%, #FFF0E9 45%, transparent 75%)'
        }}
      />
      <div 
        className="absolute -top-10 right-4 w-[450px] h-[450px] rounded-full pointer-events-none -z-10 blur-[110px] opacity-35 dark:opacity-15 bg-[#FF572F]/15"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* =========================================================
              LEFT COLUMN: Value Proposition & Primary CTAs
             ========================================================= */}
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left z-20">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0E9] dark:bg-[#121824] border border-[#FCD5C8] dark:border-white/10 text-xs font-semibold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#FF572F] shadow-[0_0_8px_#FF572F] animate-pulse" />
              <span className="uppercase tracking-widest text-[11px] font-mono text-[#555555] dark:text-[#94A3B8]">
                DIGITAL ENGINEERING STUDIO
              </span>
            </div>

            {/* Main Headline matching reference image */}
            <h1 className="text-4xl sm:text-5xl lg:text-[48px] xl:text-[54px] font-extrabold font-display tracking-tight text-[#151515] dark:text-white leading-[1.14]">
              We Build <span className="text-[#FF572F]">Digital</span>
              <br />
              <span className="text-[#FF572F]">Experiences</span> That
              <br />
              Move Businesses
              <br />
              Forward.
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#555555] dark:text-[#94A3B8] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Strategic design and development — everything you need to take your business online, in one place.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FF572F] hover:bg-[#E94725] text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-[#FF572F]/30 hover:shadow-[#FF572F]/50 hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white dark:bg-[#121824] hover:bg-slate-50 dark:hover:bg-[#1A2230] border border-[#F0E7E2] dark:border-white/15 text-[#151515] dark:text-white font-semibold text-sm sm:text-base transition-all hover:-translate-y-0.5 cursor-pointer shadow-xs"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-[#FF572F]" />
              </Link>
            </div>

            {/* Preserved bottom trust highlights checklist */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-[#555555] dark:text-[#94A3B8] font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF572F]" />
                <span>100% Code Ownership</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF572F]" />
                <span>1 Year Free Maintenance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF572F]" />
                <span>Direct WhatsApp Support</span>
              </div>
            </div>

          </div>

          {/* =========================================================
              RIGHT COLUMN: Optimized Laptop, Mobile & Cards Composition
             ========================================================= */}
          <div className="lg:col-span-7 relative flex items-center justify-center pt-8 lg:pt-0">
            
            {/* Soft Ambient Radial Backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[580px] h-[420px] sm:h-[580px] bg-gradient-to-tr from-[#FFEADB]/70 via-[#FFF2EB]/40 to-transparent dark:from-[#FF572F]/10 dark:via-transparent rounded-full blur-2xl -z-10" />

            {/* Handwritten Calligraphy (Top Right - High & Clear) */}
            <div className="absolute -top-10 sm:-top-12 right-4 sm:right-8 lg:right-6 z-30 pointer-events-none select-none text-right hidden sm:block">
              <div className="font-['Caveat',cursive] text-2xl sm:text-3xl lg:text-[32px] text-[#222222]/85 dark:text-slate-200 font-bold leading-[1.1] transform -rotate-3">
                <div>Ideas</div>
                <div>Design</div>
                <div>Develop</div>
                <div className="relative inline-block">
                  <span>Grow</span>
                  <svg className="w-full h-3 text-[#FF572F] -mt-1" viewBox="0 0 100 20" fill="none" preserveAspectRatio="none">
                    <path d="M2 14 Q 50 2, 98 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Main Mockup Stage Container */}
            <div className="relative w-full max-w-[600px] mx-auto pb-6">
              
              {/* --- 1. FLOATING SERVICE CARDS --- */}
              
              {/* Card 1: Website Development (Top Left - Shifted Left to clear laptop) */}
              <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-8 lg:-left-12 bg-white/95 dark:bg-[#121824]/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-xl border border-[#F0E7E2] dark:border-white/10 hover:-translate-y-1 transition-all duration-300 w-32 sm:w-36 z-30">
                <div className="flex items-start justify-between">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-500/25">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#FF572F]" />
                </div>
                <div className="mt-2 text-left">
                  <span className="block text-xs font-bold text-[#151515] dark:text-white leading-tight">Website</span>
                  <span className="block text-xs font-bold text-[#151515] dark:text-white leading-tight">Development</span>
                </div>
              </div>

              {/* Card 2: UI/UX Design (Bottom Left - Shifted Left to clear View Project button) */}
              <div className="absolute top-36 sm:top-40 -left-4 sm:-left-8 lg:-left-12 bg-white/95 dark:bg-[#121824]/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-xl border border-[#F0E7E2] dark:border-white/10 hover:-translate-y-1 transition-all duration-300 w-32 sm:w-36 z-30">
                <div className="flex items-start justify-between">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center shadow-md shadow-rose-500/25">
                    <Layout className="w-5 h-5 text-white" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#FF572F]" />
                </div>
                <div className="mt-2 text-left">
                  <span className="block text-xs font-bold text-[#151515] dark:text-white leading-tight">UI/UX</span>
                  <span className="block text-xs font-bold text-[#151515] dark:text-white leading-tight">Design</span>
                </div>
              </div>

              {/* Card 3: E-commerce Solutions (Top Right - Above Phone) */}
              <div className="absolute top-2 sm:top-4 -right-1 sm:-right-4 lg:-right-6 bg-white/95 dark:bg-[#121824]/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl border border-[#F0E7E2] dark:border-white/10 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 z-50">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-blue-500/25 shrink-0">
                  <ShoppingCart className="w-5 h-5 text-white" />
                </div>
                <div className="text-left pr-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#151515] dark:text-white">E-commerce</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF572F]" />
                  </div>
                  <span className="text-xs font-bold text-[#151515] dark:text-white block -mt-0.5">Solutions</span>
                </div>
              </div>

              {/* Card 4: SEO & Digital Growth (Mid Right - Above Phone) */}
              <div className="absolute top-20 sm:top-24 -right-1 sm:-right-4 lg:-right-6 bg-white/95 dark:bg-[#121824]/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl border border-[#F0E7E2] dark:border-white/10 hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 z-50">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/25 shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div className="text-left pr-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#151515] dark:text-white">SEO &amp; Digital</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF572F]" />
                  </div>
                  <span className="text-xs font-bold text-[#151515] dark:text-white block -mt-0.5">Growth</span>
                </div>
              </div>

              {/* --- 2. LAPTOP MOCKUP FRAME --- */}
              <div className="relative mx-auto w-[88%] sm:w-[90%] aspect-[16/10] bg-[#1E232D] rounded-t-2xl sm:rounded-t-3xl p-2 sm:p-2.5 shadow-2xl border border-slate-700/70 z-10 overflow-hidden">
                
                {/* Camera dot */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-900 border border-slate-700 z-30" />
                
                {/* Screen Content */}
                <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden flex flex-col text-white font-sans border border-slate-800">
                  
                  {/* Majestic Mountain Wallpaper */}
                  <img 
                    src="/hero-mountains.jpg" 
                    alt="Scenic Mountain Website Hero" 
                    className="absolute inset-0 w-full h-full object-cover object-center -z-10"
                  />
                  {/* Dark Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/60 -z-0" />

                  {/* Top Bar / Mini Navbar */}
                  <div className="relative z-10 h-7 sm:h-8 px-4 sm:px-6 border-b border-white/10 flex items-center justify-between bg-black/30 backdrop-blur-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3.5 h-3.5 rounded bg-[#FF572F] flex items-center justify-center text-[8px] font-bold text-white">X</div>
                      <span className="text-[10px] sm:text-[11px] font-bold tracking-tight">TechCresta<span className="text-[#FF572F]">X</span></span>
                    </div>

                    <div className="hidden sm:flex items-center gap-3 text-[9px] text-slate-200">
                      <span className="text-[#FF572F] font-bold">Home</span>
                      <span>Services</span>
                      <span>Work</span>
                      <span>About</span>
                    </div>

                    <div className="px-2 py-0.5 rounded-full bg-[#FF572F] text-[8px] font-bold text-white shadow-xs">
                      Get Started
                    </div>
                  </div>

                  {/* Laptop Screen Hero Content */}
                  <div className="relative z-10 flex-1 px-4 sm:px-6 py-2 sm:py-4 flex flex-col justify-center">
                    <div className="max-w-[190px] sm:max-w-[240px] md:max-w-[270px] space-y-1 sm:space-y-1.5 text-left">
                      <div className="text-[7px] sm:text-[8px] font-mono tracking-widest text-slate-300 uppercase">
                        BUILD · DESIGN · GROW
                      </div>
                      
                      <h2 className="text-[11px] sm:text-sm lg:text-base font-extrabold tracking-tight text-white leading-tight">
                        Modern Web Experiences for Growing Businesses.
                      </h2>
                      
                      <p className="text-[7px] sm:text-[8.5px] text-slate-300 leading-snug line-clamp-2 max-w-[230px]">
                        High-performance websites and digital solutions built for business growth.
                      </p>

                      <div className="flex items-center gap-1.5 pt-1">
                        <div className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-[#FF572F] text-[7.5px] sm:text-[8.5px] font-bold text-white flex items-center gap-1 shadow-sm">
                          <span>View Project</span>
                          <span>→</span>
                        </div>
                        <div className="px-2 py-0.5 sm:py-1 rounded-full bg-black/50 border border-white/20 text-[7.5px] sm:text-[8.5px] font-medium text-slate-200">
                          Our Services →
                        </div>
                      </div>
                    </div>

                    {/* Floating mini "+200% Business Growth" card (placed at center-bottom, 100% visible) */}
                    <div className="absolute left-[50%] sm:left-[53%] bottom-2.5 sm:bottom-3.5 p-1.5 sm:p-2 rounded-xl bg-black/75 backdrop-blur-md border border-white/20 shadow-xl flex items-center gap-2 z-20">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-orange-500/25 border border-orange-500/40 text-orange-400 flex items-center justify-center shrink-0">
                        <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </div>
                      <div className="text-left pr-0.5">
                        <div className="text-[7.5px] sm:text-[8px] text-slate-300 font-medium leading-none">Business Growth</div>
                        <div className="text-[10px] sm:text-[11px] font-black text-white flex items-center gap-0.5 mt-0.5">
                          <span>+200%</span>
                          <span className="text-orange-400 text-[8px]">↗</span>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              {/* Laptop Unibody Metallic Base Shelf */}
              <div className="relative mx-auto w-[102%] -left-[1%] h-3 sm:h-3.5 bg-gradient-to-b from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] rounded-b-xl shadow-2xl flex items-center justify-center border-t border-white/80 z-10">
                <div className="w-16 sm:w-20 h-0.5 sm:h-1 rounded-full bg-slate-500/60" />
              </div>

              {/* Textured Marble / Stone Pedestal Base */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[96%] h-5 bg-gradient-to-b from-stone-200/90 via-stone-300/80 to-stone-400/90 dark:from-[#18202F] dark:to-[#0D121B] rounded-lg shadow-xl border-t border-white/50 -z-0" />

              {/* --- 3. 3D ISOMETRIC MOBILE SMARTPHONE MOCKUP --- */}
              {/* Positioned on the bottom-right corner with realistic 3D perspective tilt, bevel & shadow */}
              <div 
                className="absolute -bottom-5 sm:-bottom-7 right-0 sm:right-2 lg:right-3 w-24 sm:w-28 lg:w-32 aspect-[9/19] z-40 group cursor-pointer"
                style={{
                  perspective: '1200px',
                }}
              >
                <div 
                  className="w-full h-full rounded-[20px] sm:rounded-[26px] bg-[#121620] p-1 shadow-[-16px_22px_40px_rgba(0,0,0,0.55),0_4px_12px_rgba(0,0,0,0.35)] border border-slate-600/70 ring-1 ring-white/15 relative transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1"
                  style={{
                    transform: 'rotateY(-15deg) rotateX(6deg) rotateZ(-2deg)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* 3D Left Chamfer Metallic Thickness Highlight */}
                  <div className="absolute -left-1 top-2.5 bottom-2.5 w-1 bg-gradient-to-r from-slate-400 via-slate-600 to-slate-800 rounded-l-md pointer-events-none opacity-85" />
                  
                  {/* Dynamic island notch */}
                  <div className="w-7 sm:w-9 h-1.5 bg-black rounded-full mx-auto mb-0.5 z-30 relative" />

                  <div className="relative w-full h-full rounded-[15px] sm:rounded-[20px] overflow-hidden flex flex-col p-1.5 text-white border border-slate-800">
                    
                    {/* Phone screen background */}
                    <img 
                      src="/hero-mountains.jpg" 
                      alt="Mobile Preview" 
                      className="absolute inset-0 w-full h-full object-cover object-center -z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/70 -z-0" />

                    {/* Glossy Diagonal Reflection Glare */}
                    <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/12 to-transparent pointer-events-none transform -rotate-45" />

                    {/* Mobile header */}
                    <div className="relative z-10 flex items-center justify-between text-[7px] font-bold py-0.5">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded bg-[#FF572F] flex items-center justify-center text-[5px]">X</span>
                        <span>TechCresta<span className="text-[#FF572F]">X</span></span>
                      </span>
                      <span className="text-slate-400 text-[8px]">☰</span>
                    </div>

                    {/* Mobile headline */}
                    <div className="relative z-10 my-auto text-left space-y-0.5">
                      <div className="text-[5.5px] uppercase tracking-wider text-slate-400">BUILD · DESIGN</div>
                      <div className="text-[8px] sm:text-[9px] font-extrabold text-white leading-tight">
                        Modern Web Experiences for Growing Businesses.
                      </div>
                      <div className="pt-0.5">
                        <div className="py-0.5 px-1.5 bg-[#FF572F] rounded-full text-[6.5px] sm:text-[7px] text-center font-bold text-white shadow-xs">
                          Get Started →
                        </div>
                      </div>
                    </div>

                    {/* Social proof avatar stack */}
                    <div className="relative z-10 pt-1 border-t border-white/10 text-left">
                      <div className="text-[5.5px] text-slate-300 mb-0.5">Trusted by 50+ businesses</div>
                      <div className="flex items-center">
                        <img src="/team1.jpg" alt="Client 1" className="w-3 h-3 rounded-full border border-black object-cover -ml-0" />
                        <img src="/team3.jpg" alt="Client 2" className="w-3 h-3 rounded-full border border-black object-cover -ml-1" />
                        <img src="/team4.jpg" alt="Client 3" className="w-3 h-3 rounded-full border border-black object-cover -ml-1" />
                        <div className="w-3 h-3 rounded-full bg-slate-800 text-[5px] font-bold text-white flex items-center justify-center border border-black -ml-1">
                          +40
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

              {/* --- 4. DECORATIVE POTTED PLANT (Far Right Edge with transparent PNG) --- */}
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
