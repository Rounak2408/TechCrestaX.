import React from 'react';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import Reveal from '../motion/Reveal';

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      subtitle: "Strategy & Scope",
      description: "Comprehensive requirement discovery, competitive benchmarking, and clear scope definition before execution begins.",
      icon: Search
    },
    {
      number: "02",
      title: "Design",
      subtitle: "UI/UX & Prototyping",
      description: "High-fidelity Figma designs, conversion-focused wireframes, and accessible visual systems tailored to your brand.",
      icon: PenTool
    },
    {
      number: "03",
      title: "Develop",
      subtitle: "Clean React Engineering",
      description: "Modern, component-driven frontend architecture built for sub-second speeds, mobile responsiveness, and clean code.",
      icon: Code2
    },
    {
      number: "04",
      title: "Grow",
      subtitle: "Launch & 1-Yr Support",
      description: "Rigorous cross-device testing, production deployment, technical SEO verification, and 1 full year of inclusive free maintenance.",
      icon: Rocket
    }
  ];

  return (
    <section 
      className="py-16 sm:py-20 md:py-24 bg-[#F8F9FA] dark:bg-[#070A0F] border-b border-[#EBECEF] dark:border-white/10 transition-colors select-none"
      aria-label="Our Process"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header (Alpha Agency: WORK PROCESS -> A Proven Process That Delivers Results.) */}
        <Reveal>
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4F0] dark:bg-[#0D1420] border border-[#FF6B4A]/25 text-xs font-semibold text-[#FF6B4A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A] animate-pulse" />
              <span className="uppercase tracking-widest text-[11px] font-mono font-bold">
                WORK PROCESS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#0D1B2A] dark:text-white tracking-tight">
              A Proven Process That Delivers Results.
            </h2>
            <p className="text-base text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
              A transparent, battle-tested four-step methodology ensuring on-time delivery, zero technical debt, and maximum commercial ROI.
            </p>
          </div>
        </Reveal>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-1/4 left-12 right-12 h-0.5 bg-gradient-to-r from-[#FF6B4A]/30 via-[#FFB627]/30 to-[#8FC658]/30 -z-0 pointer-events-none" />

          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <Reveal key={idx} delay={idx * 90}>
                <div 
                  className="relative h-full bg-white dark:bg-[#0D1420] p-7 rounded-3xl border border-[#EBECEF] dark:border-white/10 shadow-xs hover:border-[#FF6B4A]/50 hover:shadow-xl hover:shadow-[#FF6B4A]/10 card-hover-lift flex flex-col justify-between z-10 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-black font-display bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] bg-clip-text text-transparent tracking-tight group-hover:scale-105 transition-transform">
                        {step.number}
                      </span>
                      <div className="w-11 h-11 rounded-2xl bg-[#FFF4F0] dark:bg-white/5 border border-[#FF6B4A]/20 text-[#FF6B4A] flex items-center justify-center group-hover:bg-[#FF6B4A] group-hover:text-white transition-all duration-300 shadow-2xs">
                        <IconComponent className="w-5 h-5 transition-transform duration-300" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold font-display text-[#0D1B2A] dark:text-white group-hover:text-[#FF6B4A] transition-colors">
                        {step.title}
                      </h3>
                      <div className="text-xs font-semibold text-[#FF6B4A] mt-0.5">
                        {step.subtitle}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono font-medium text-slate-400">
                    <span>Phase {step.number} of 04</span>
                    <span className="text-[#8FC658] font-bold">✓ Verified</span>
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
