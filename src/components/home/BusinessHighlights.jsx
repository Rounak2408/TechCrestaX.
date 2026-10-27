import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Target, 
  ShoppingCart, 
  TrendingUp, 
  ArrowUpRight,
  Briefcase, 
  CheckCircle2, 
  Users2, 
  ShieldCheck 
} from 'lucide-react';

export default function BusinessHighlights() {
  const featureCards = [
    {
      icon: Zap,
      title: "Performance & Strategy",
      desc: "Architected for sub-second page loads, clean UX, and high conversion from the very first impression.",
      link: "/services#web-applications-platforms",
      tag: "SPEED & UX"
    },
    {
      icon: Target,
      title: "Websites That Convert",
      desc: "Fast, mobile-first builds designed purposefully to turn passive visitors into qualified business enquiries.",
      link: "/services#website-design-development",
      tag: "CONVERSION"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Portals",
      desc: "Robust storefronts and custom web platforms engineered with frictionless checkout and scalability.",
      link: "/services#ecommerce-website-development",
      tag: "COMMERCE"
    },
    {
      icon: TrendingUp,
      title: "SEO & Organic Growth",
      desc: "Technical search optimization and visibility architectures built directly into every page to rank fast.",
      link: "/services#seo-local-seo",
      tag: "VISIBILITY"
    }
  ];

  const statMetrics = [
    {
      icon: Briefcase,
      value: "30+",
      label: "Projects Delivered",
      highlight: "On Time & Budget"
    },
    {
      icon: CheckCircle2,
      value: "25+",
      label: "Happy Clients",
      highlight: "Direct Collaboration"
    },
    {
      icon: Users2,
      value: "8",
      label: "Team Members",
      highlight: "Engineers & Designers"
    },
    {
      icon: ShieldCheck,
      value: "₹7,000+",
      label: "Starting Base Rate",
      highlight: "1 Year Free Maint."
    }
  ];

  return (
    <div className="relative bg-[#F8F9FA] dark:bg-[#070A0F] py-8 sm:py-12 border-b border-[#EBECEF] dark:border-white/10 select-none transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* --- ALPHA AGENCY 4 FEATURE CARDS (ax-ft1-item Equivalent) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featureCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={idx}
                to={card.link}
                className="group relative p-6 rounded-2xl bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 hover:border-[#FF6B4A]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl hover:shadow-[#FF6B4A]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FFF4F0] dark:bg-white/5 border border-[#FF6B4A]/20 flex items-center justify-center text-[#FF6B4A] group-hover:bg-gradient-to-r group-hover:from-[#FF6B4A] group-hover:to-[#FFB627] group-hover:text-white transition-all duration-300 shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-[#0D1B2A] dark:text-white group-hover:bg-[#FF6B4A] group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>

                  <span className="text-[10px] font-mono tracking-wider uppercase font-bold text-[#FF6B4A]">
                    {card.tag}
                  </span>
                  
                  <h3 className="text-lg font-bold font-display text-[#0D1B2A] dark:text-white mt-1 group-hover:text-[#FF6B4A] transition-colors">
                    {card.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-[#4C5258] dark:text-[#94A3B8] leading-relaxed mt-2">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center text-xs font-bold text-[#FF6B4A] group-hover:text-[#FF7C42] transition-colors">
                  <span>Explore service</span>
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* --- STATS COUNTER STRIP (Alpha Agency Trust Counters) --- */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#EBECEF] dark:divide-white/10">
            {statMetrics.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index} 
                  className={`flex items-center gap-4 pt-4 sm:pt-0 ${index !== 0 ? 'sm:pl-6 lg:pl-8' : ''}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B4A]/10 to-[#FFB627]/10 dark:bg-white/5 border border-[#FF6B4A]/25 text-[#FF6B4A] flex items-center justify-center shrink-0 shadow-2xs">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black font-display text-[#0D1B2A] dark:text-white tracking-tight">
                      {item.value}
                    </div>
                    <div className="text-xs sm:text-sm text-[#4C5258] dark:text-white font-bold">
                      {item.label}
                    </div>
                    <div className="text-[11px] font-mono text-[#7A828B] dark:text-[#94A3B8]">
                      {item.highlight}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
