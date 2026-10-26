import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Users, Code, ShieldCheck, ArrowRight } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: MessageSquare,
      title: "Clear Communication",
      description: "Direct discussion via WhatsApp and email throughout your project. Regular staging previews and milestone updates without confusing agency bureaucracy."
    },
    {
      icon: Users,
      title: "User-Focused Design",
      description: "Every layout is engineered around your target audience. We prioritize readable typography, intuitive navigation, and clean aesthetics that build trust."
    },
    {
      icon: Code,
      title: "Reliable Development",
      description: "Built using modern React, semantic HTML5, and responsive CSS. Rigorously tested across mobile, tablet, and desktop viewports with complete code ownership."
    },
    {
      icon: ShieldCheck,
      title: "Ongoing Support",
      description: "We stand behind our work. Every project includes 1 full year of inclusive free maintenance and technical support to keep your site fast and secure."
    }
  ];

  return (
    <section 
      id="about"
      className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#070A0F] border-y border-[#F0E7E2] dark:border-white/10 transition-colors scroll-mt-20"
      aria-label="About TechCrestaX and Why Choose Us"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0E9] dark:bg-[#FF572F]/15 border border-[#FCD5C8] dark:border-[#FF572F]/30 text-xs font-semibold text-[#FF572F]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF572F] animate-pulse" />
              <span className="uppercase tracking-widest text-[11px] font-mono">
                ABOUT TECHCRESTAX
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#151515] dark:text-white tracking-tight">
              More Than Development. Built Around Your Business.
            </h2>
            <p className="text-base text-[#666666] dark:text-[#94A3B8] leading-relaxed">
              We are a dedicated digital engineering studio combining strategic interface design, clean React engineering, and dependable long-term support to help your business establish authority and scale online.
            </p>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#FF572F] hover:text-[#E94725] transition-colors group self-start md:self-auto shrink-0 pb-1"
          >
            <span>Learn More About Us</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Feature Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-[#FFF9F6] dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 hover:border-[#FF572F]/50 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-start gap-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FFF0E9] dark:bg-[#FF572F]/15 text-[#FF572F] border border-[#FCD5C8] dark:border-[#FF572F]/30 flex items-center justify-center shrink-0 shadow-2xs">
                  <IconComponent className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-display text-[#151515] dark:text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#666666] dark:text-[#94A3B8] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
