import React from 'react';
import { Briefcase, CheckCircle2, Users2, ShieldCheck } from 'lucide-react';

export default function BusinessHighlights() {
  const highlights = [
    {
      icon: Briefcase,
      value: "30+",
      label: "Projects Delivered",
    },
    {
      icon: CheckCircle2,
      value: "25+",
      label: "Happy Clients",
    },
    {
      icon: Users2,
      value: "8",
      label: "Team Members",
    },
    {
      icon: ShieldCheck,
      value: "₹7,000+",
      label: "Starting Base (1-Yr Free Maint.)",
    }
  ];

  return (
    <section 
      className="py-6 sm:py-8 bg-white dark:bg-[#070A0F] border-y border-[#F0E7E2] dark:border-white/10 relative transition-colors select-none"
      aria-label="Business Highlights"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#F0E7E2] dark:divide-white/10">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className={`flex items-center gap-3.5 pt-4 sm:pt-0 ${index !== 0 ? 'sm:pl-6 lg:pl-8' : ''}`}
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FFF0E9] dark:bg-[#FF572F]/15 text-[#FF572F] flex items-center justify-center shrink-0 shadow-2xs">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black font-display text-[#151515] dark:text-white tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm text-[#666666] dark:text-[#94A3B8] font-medium">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
