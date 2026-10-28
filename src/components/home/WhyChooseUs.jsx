import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Users, 
  Code, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Rocket,
  CheckCircle2
} from 'lucide-react';
import Reveal from '../motion/Reveal';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: MessageSquare,
      title: "Direct Collaboration",
      description: "Direct discussion via WhatsApp and email throughout your project. Regular staging previews and milestone updates without confusing agency bureaucracy.",
      image: "/about/card-collaboration.jpg",
      imagePos: "object-center",
      hoverOpacity: "group-hover:opacity-25 dark:group-hover:opacity-30",
    },
    {
      icon: Users,
      title: "Conversion-Focused UX",
      description: "Every layout is engineered around your target audience. We prioritize high-speed architecture, intuitive flows, and clean aesthetics that build trust.",
      image: "/about/card-ux.jpg",
      imagePos: "object-top",
      hoverOpacity: "group-hover:opacity-24 dark:group-hover:opacity-28",
    },
    {
      icon: Code,
      title: "Modern Engineering",
      description: "Built using modern React, semantic HTML5, and responsive CSS. Rigorously tested across all devices with 100% complete code and asset ownership.",
      image: "/about/card-engineering.jpg",
      imagePos: "object-left-top",
      hoverOpacity: "group-hover:opacity-25 dark:group-hover:opacity-30",
    },
    {
      icon: ShieldCheck,
      title: "1-Yr Free Maintenance",
      description: "We stand behind our work. Every project includes 1 full year of inclusive free maintenance and technical support to keep your site fast and secure.",
      image: "/about/card-maintenance.jpg",
      imagePos: "object-center",
      hoverOpacity: "group-hover:opacity-25 dark:group-hover:opacity-30",
    }
  ];

  return (
    <section 
      id="about"
      className="py-16 sm:py-20 md:py-24 bg-white dark:bg-[#070A0F] border-b border-[#EBECEF] dark:border-white/10 transition-colors scroll-mt-20 select-none overflow-hidden"
      aria-label="About TechCrestaX and Why Choose Us"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header (Alpha Agency Blueprint: We Build Websites That Grow Businesses.) */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4F0] dark:bg-[#0D1420] border border-[#FF6B4A]/25 text-xs font-semibold text-[#FF6B4A]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A] animate-pulse" />
                <span className="uppercase tracking-widest text-[11px] font-mono font-bold">
                  ABOUT OUR AGENCY
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#0D1B2A] dark:text-white tracking-tight">
                We Build Websites That Grow Businesses.
              </h2>
              <p className="text-base text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
                TechCrestaX helps businesses establish a dominant digital presence through custom web engineering, strategic UX, and performance design that delivers real, measurable commercial results.
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6B4A] hover:text-[#FF7C42] transition-colors group self-start md:self-auto shrink-0 pb-1"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>
          </div>
        </Reveal>

        {/* Dual Core Mission Cards (Alpha Agency: Building Digital Success From Day One & Built Different From The Start) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Building Digital Success From Day One */}
          <Reveal delay={100}>
            <div 
              tabIndex={0}
              className="p-8 rounded-3xl bg-[#F8F9FA] dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 hover:border-[#FF6B4A]/60 focus-within:border-[#FF6B4A]/60 hover:-translate-y-1.5 focus-within:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#FF6B4A]/12 focus-within:shadow-2xl active:scale-[0.99] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] relative overflow-hidden group cursor-pointer focus-visible:outline-none"
            >
              {/* Background Image Watermark (Clearly visible 35% default, rich 85% color on hover) */}
              <img
                src="/about/card-strategy.jpg"
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-right opacity-35 dark:opacity-35 grayscale contrast-110 group-hover:grayscale-0 group-hover:opacity-85 dark:group-hover:opacity-90 group-focus-within:grayscale-0 group-focus-within:opacity-85 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] scale-100 group-hover:scale-[1.05] group-focus-within:scale-[1.05] pointer-events-none will-change-transform z-0"
              />

              {/* Directional Overlay: Solid on left for text legibility, translucent on right to reveal photo */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-[#F8F9FA]/95 via-[#F8F9FA]/80 to-transparent dark:from-[#0D1420]/95 dark:via-[#0D1420]/80 dark:to-transparent group-hover:from-[#F8F9FA]/90 group-hover:via-[#F8F9FA]/70 group-hover:to-transparent dark:group-hover:from-[#0D1420]/90 dark:group-hover:via-[#0D1420]/70 dark:group-hover:to-transparent transition-colors duration-400 pointer-events-none z-1" 
                aria-hidden="true"
              />

              {/* Ambient Brand Accent Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF6B4A]/15 rounded-full blur-2xl pointer-events-none z-2" />

              {/* Content Container (Elevated Above Watermark) */}
              <div className="relative z-10 space-y-4 max-w-xl">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6B4A] to-[#FFB627] text-white flex items-center justify-center shadow-md shadow-[#FF6B4A]/25 group-hover:scale-105 transition-transform duration-300">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-display text-[#0D1B2A] dark:text-white group-hover:text-[#FF6B4A] transition-colors">
                  Building Digital Success From Day One
                </h3>
                <p className="text-sm text-[#4C5258] dark:text-[#94A3B8] leading-relaxed group-hover:text-[#1e293b] dark:group-hover:text-[#CBD5E1] transition-colors font-medium">
                  We start with your business model, customer journey, and revenue goals before writing a single line of code. Every layout, CTA, and page hierarchy is engineered to convert curiosity into commercial action.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#0D1B2A] dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#8FC658]" />
                  <span>Strategic Discovery &amp; Architectural Planning</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Built Different From The Start */}
          <Reveal delay={200}>
            <div 
              tabIndex={0}
              className="p-8 rounded-3xl bg-[#F8F9FA] dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 hover:border-[#FF6B4A]/60 focus-within:border-[#FF6B4A]/60 hover:-translate-y-1.5 focus-within:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#FF6B4A]/12 focus-within:shadow-2xl active:scale-[0.99] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] relative overflow-hidden group cursor-pointer focus-visible:outline-none"
            >
              {/* Background Image Watermark */}
              <img
                src="/about/card-architecture.jpg"
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-right opacity-35 dark:opacity-35 grayscale contrast-110 group-hover:grayscale-0 group-hover:opacity-85 dark:group-hover:opacity-90 group-focus-within:grayscale-0 group-focus-within:opacity-85 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] scale-100 group-hover:scale-[1.05] group-focus-within:scale-[1.05] pointer-events-none will-change-transform z-0"
              />

              {/* Directional Overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-[#F8F9FA]/95 via-[#F8F9FA]/80 to-transparent dark:from-[#0D1420]/95 dark:via-[#0D1420]/80 dark:to-transparent group-hover:from-[#F8F9FA]/90 group-hover:via-[#F8F9FA]/70 group-hover:to-transparent dark:group-hover:from-[#0D1420]/90 dark:group-hover:via-[#0D1420]/70 dark:group-hover:to-transparent transition-colors duration-400 pointer-events-none z-1" 
                aria-hidden="true"
              />

              {/* Ambient Brand Accent Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFB627]/15 rounded-full blur-2xl pointer-events-none z-2" />

              {/* Content Container (Elevated Above Watermark) */}
              <div className="relative z-10 space-y-4 max-w-xl">
                <div className="w-12 h-12 rounded-2xl bg-[#0D1B2A] text-[#FFB627] border border-slate-700 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-display text-[#0D1B2A] dark:text-white group-hover:text-[#FF6B4A] transition-colors">
                  Built Different From The Start
                </h3>
                <p className="text-sm text-[#4C5258] dark:text-[#94A3B8] leading-relaxed group-hover:text-[#1e293b] dark:group-hover:text-[#CBD5E1] transition-colors font-medium">
                  Unlike traditional bloated agencies with layers of account handlers and cookie-cutter themes, we operate as a nimble engineering studio. Direct developer access, bespoke React code, zero hidden fees, and full code ownership.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#0D1B2A] dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#8FC658]" />
                  <span>100% Code Ownership &amp; 1-Year Free Support</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 4 Feature Blocks Grid (Cards 3, 4, 5, 6) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <Reveal key={idx} delay={idx * 80}>
                <div 
                  tabIndex={0}
                  className="p-6 rounded-2xl bg-[#F8F9FA] dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 hover:border-[#FF6B4A]/60 focus-within:border-[#FF6B4A]/60 hover:-translate-y-1.5 focus-within:-translate-y-1.5 hover:shadow-xl hover:shadow-[#FF6B4A]/10 focus-within:shadow-xl active:scale-[0.99] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between group h-full relative overflow-hidden cursor-pointer focus-visible:outline-none"
                >
                  {/* Background Image Watermark (Visible 35% default, blooms to 80% on hover) */}
                  <img
                    src={pillar.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full object-cover ${pillar.imagePos} opacity-35 dark:opacity-35 grayscale contrast-110 group-hover:grayscale-0 group-hover:opacity-80 dark:group-hover:opacity-85 group-focus-within:grayscale-0 group-focus-within:opacity-80 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] scale-100 group-hover:scale-[1.06] group-focus-within:scale-[1.06] pointer-events-none will-change-transform z-0`}
                  />

                  {/* Gradient Overlay for Text Readability: Protective on top, translucent at bottom */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA]/95 via-[#F8F9FA]/80 to-[#F8F9FA]/30 dark:from-[#0D1420]/95 dark:via-[#0D1420]/80 dark:to-[#0D1420]/30 group-hover:from-[#F8F9FA]/90 group-hover:via-[#F8F9FA]/70 group-hover:to-[#F8F9FA]/20 dark:group-hover:from-[#0D1420]/90 dark:group-hover:via-[#0D1420]/70 dark:group-hover:to-[#0D1420]/20 transition-colors duration-400 pointer-events-none z-1"
                    aria-hidden="true"
                  />

                  {/* Corner Accent Glow */}
                  <div className="absolute top-0 right-0 w-28 h-28 bg-[#FF6B4A]/10 dark:bg-[#FF6B4A]/15 rounded-full blur-xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-300 z-2" />

                  {/* Content Container (Elevated Above Background Watermark) */}
                  <div className="relative z-10 space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-white/90 dark:bg-white/10 text-[#FF6B4A] border border-[#EBECEF] dark:border-white/10 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-[#FF6B4A] group-hover:text-white transition-all duration-300 backdrop-blur-xs">
                      <IconComponent className="w-6 h-6 transition-transform duration-300" />
                    </div>
                    <h3 className="text-lg font-bold font-display text-[#0D1B2A] dark:text-white group-hover:text-[#FF6B4A] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4C5258] dark:text-[#94A3B8] leading-relaxed group-hover:text-[#1e293b] dark:group-hover:text-[#CBD5E1] transition-colors font-medium">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

