import React from 'react';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      subtitle: "Strategy & Planning",
      description: "Understand the client's business, audience, objectives, and technical requirements before starting execution.",
      icon: Search
    },
    {
      number: "02",
      title: "Design",
      subtitle: "UI/UX & Prototyping",
      description: "Develop the visual direction, user flows, mobile-first interface, and accessible component design system.",
      icon: PenTool
    },
    {
      number: "03",
      title: "Development",
      subtitle: "Frontend & Architecture",
      description: "Build the responsive website or web application using clean code, fast loading speeds, and verified integrations.",
      icon: Code2
    },
    {
      number: "04",
      title: "Launch",
      subtitle: "Deployment & Support",
      description: "Test across all devices, deploy to production, verify SEO metadata, and initiate your 1-year free maintenance support.",
      icon: Rocket
    }
  ];

  return (
    <section 
      className="py-12 sm:py-16 md:py-20 bg-[#FFF9F6] dark:bg-[#0B0E14] transition-colors"
      aria-label="Our Process"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-8 sm:mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF572F] font-bold">
            HOW WE WORK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#151515] dark:text-white tracking-tight">
            From Idea to Launch
          </h2>
          <p className="text-base text-[#666666] dark:text-[#94A3B8] leading-relaxed">
            A clear, collaborative four-step methodology ensuring on-time delivery with zero ambiguity.
          </p>
        </div>

        {/* 4-Step Process: Horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 relative">
          
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-1/4 left-12 right-12 h-0.5 bg-[#F0E7E2] dark:bg-white/10 -z-0 pointer-events-none" />

          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={idx}
                className="relative bg-white dark:bg-[#121824] p-6 sm:p-7 rounded-2xl border border-[#F0E7E2] dark:border-white/10 shadow-xs hover:border-[#FF572F]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between z-10 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-mono text-[#FF572F] tracking-tighter">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FFF0E9] dark:bg-[#FF572F]/15 text-[#FF572F] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold font-display text-[#151515] dark:text-white">
                      {step.title}
                    </h3>
                    <div className="text-xs font-semibold text-[#FF572F] mt-0.5">
                      {step.subtitle}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#666666] dark:text-[#94A3B8] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F0E7E2] dark:border-white/10 text-[11px] font-mono font-medium text-[#666666] dark:text-[#94A3B8]">
                  Step {step.number} of 04
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
