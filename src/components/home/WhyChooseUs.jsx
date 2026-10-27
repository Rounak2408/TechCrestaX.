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
      description: "Direct discussion via WhatsApp and email throughout your project. Regular staging previews and milestone updates without confusing agency bureaucracy."
    },
    {
      icon: Users,
      title: "Conversion-Focused UX",
      description: "Every layout is engineered around your target audience. We prioritize high-speed architecture, intuitive flows, and clean aesthetics that build trust."
    },
    {
      icon: Code,
      title: "Modern Engineering",
      description: "Built using modern React, semantic HTML5, and responsive CSS. Rigorously tested across all devices with 100% complete code and asset ownership."
    },
    {
      icon: ShieldCheck,
      title: "1-Yr Free Maintenance",
      description: "We stand behind our work. Every project includes 1 full year of inclusive free maintenance and technical support to keep your site fast and secure."
    }
  ];

  return (
    <section 
      id="about"
      className="py-16 sm:py-20 md:py-24 bg-white dark:bg-[#070A0F] border-b border-[#EBECEF] dark:border-white/10 transition-colors scroll-mt-20 select-none"
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
          <Reveal delay={100}>
            <div className="p-8 rounded-3xl bg-[#F8F9FA] dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 hover:border-[#FF6B4A]/40 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B4A]/10 rounded-full blur-2xl pointer-events-none -z-0" />
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6B4A] to-[#FFB627] text-white flex items-center justify-center shadow-md shadow-[#FF6B4A]/20">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-display text-[#0D1B2A] dark:text-white group-hover:text-[#FF6B4A] transition-colors">
                  Building Digital Success From Day One
                </h3>
                <p className="text-sm text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
                  We start with your business model, customer journey, and revenue goals before writing a single line of code. Every layout, CTA, and page hierarchy is engineered to convert curiosity into commercial action.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#0D1B2A] dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#8FC658]" />
                  <span>Strategic Discovery &amp; Architectural Planning</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="p-8 rounded-3xl bg-[#F8F9FA] dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 hover:border-[#FF6B4A]/40 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB627]/10 rounded-full blur-2xl pointer-events-none -z-0" />
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0D1B2A] text-[#FFB627] border border-slate-700 flex items-center justify-center shadow-md">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-display text-[#0D1B2A] dark:text-white group-hover:text-[#FF6B4A] transition-colors">
                  Built Different From The Start
                </h3>
                <p className="text-sm text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
                  Unlike traditional bloated agencies with layers of account handlers and cookie-cutter themes, we operate as a nimble engineering studio. Direct developer access, bespoke React code, zero hidden fees, and full code ownership.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#0D1B2A] dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#8FC658]" />
                  <span>100% Code Ownership &amp; 1-Year Free Support</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 4 Feature Blocks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <Reveal key={idx} delay={idx * 80}>
                <div 
                  className="p-6 rounded-2xl bg-[#F8F9FA] dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 hover:border-[#FF6B4A]/50 card-hover-lift flex flex-col justify-between group h-full"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 text-[#FF6B4A] border border-[#EBECEF] dark:border-white/10 flex items-center justify-center shadow-2xs group-hover:scale-110 group-hover:bg-[#FF6B4A] group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6 transition-transform duration-300" />
                    </div>
                    <h3 className="text-lg font-bold font-display text-[#0D1B2A] dark:text-white group-hover:text-[#FF6B4A] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
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
