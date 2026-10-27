import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Database, 
  ShieldCheck, 
  RotateCcw, 
  Server, 
  CheckCircle2, 
  ArrowRight, 
  FileText,
  Flame,
  ArrowUpRight
} from 'lucide-react';
import Reveal from '../motion/Reveal';

export default function PricingPreview() {
  const topMetrics = [
    {
      icon: Database,
      eyebrow: "STARTING BASE PRICE",
      value: "₹7,000+",
      subtext: "Starter business websites with clean architecture.",
      highlighted: false,
    },
    {
      icon: ShieldCheck,
      eyebrow: "1ST YEAR MAINTENANCE",
      value: "FREE",
      subtext: "12 months inclusive bug fixes & support.",
      highlighted: true,
    },
    {
      icon: RotateCcw,
      eyebrow: "ANNUAL RENEWAL",
      value: "₹5,000 /yr",
      subtext: "Predictable maintenance after Year 1.",
      highlighted: false,
    },
    {
      icon: Server,
      eyebrow: "DOMAIN & HOSTING",
      value: "Quoted Separate...",
      subtext: "Direct billing to client accounts.",
      highlighted: false,
    },
  ];

  const pricingTiers = [
    {
      number: "01",
      timeline: "1–2 Weeks",
      category: "SINGLE & MULTI-PAGE",
      title: "Starter Plan",
      description: "Ideal for startups, individual practitioners, and local businesses establishing a professional web presence.",
      price: "₹7,000+",
      priceNote: "base project rate",
      popular: false,
      features: [
        "100% Mobile & Tablet Responsive Design",
        "Modern React / Tailwind Architecture",
        "Fast Sub-Second Page Loading",
        "Technical On-Page SEO & Schema Markup",
        "1 Year Free Maintenance & Bug Fixes"
      ],
      buttonText: "Request Starter Estimate",
      buttonStyle: "bg-white dark:bg-[#0D1420] hover:bg-slate-50 dark:hover:bg-white/5 text-[#0D1B2A] dark:text-white border border-[#EBECEF] dark:border-white/15",
    },
    {
      number: "02",
      timeline: "2–3 Weeks",
      category: "FULL BUSINESS PRESENCE",
      title: "Growth Plan",
      description: "For expanding companies, clinics, hospitality brands, and corporate services requiring bespoke art direction and lead funnels.",
      price: "₹15,000+",
      priceNote: "custom scope",
      popular: true,
      features: [
        "Multi-Section Bespoke Editorial Art Direction",
        "Custom Lead & Appointment Booking Workflows",
        "Local SEO & Google Business Profile Integration",
        "High-Converting Landing Funnel Optimization",
        "1 Year Free Priority Technical Maintenance"
      ],
      buttonText: "Request Growth Estimate",
      buttonStyle: "bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] hover:from-[#FF7C42] hover:to-[#FFA700] text-white font-bold shadow-lg shadow-[#FF6B4A]/25",
    },
    {
      number: "03",
      timeline: "2–4 Weeks",
      category: "COMMERCE & PORTALS",
      title: "Scale Plan",
      description: "For e-commerce brands, catalog storefronts, doctor portals, and custom web applications requiring databases and API integrations.",
      price: "₹25,000+",
      priceNote: "custom enterprise quote",
      popular: false,
      features: [
        "Product Catalog or Custom Booking Database",
        "Secure Payment Gateway / 1-Click WhatsApp Ordering",
        "Role-Based Access & Customer Portal Flows",
        "API Integrations & Custom Business Logic",
        "1 Year Free Dedicated Maintenance & Monitoring"
      ],
      buttonText: "Discuss Platform Scope",
      buttonStyle: "bg-white dark:bg-[#0D1420] hover:bg-slate-50 dark:hover:bg-white/5 text-[#0D1B2A] dark:text-white border border-[#EBECEF] dark:border-white/15",
    },
  ];

  return (
    <section 
      id="pricing"
      className="py-16 sm:py-20 md:py-24 bg-[#F8F9FA] dark:bg-[#070A0F] border-b border-[#EBECEF] dark:border-white/10 transition-colors select-none"
      aria-label="Investment and Pricing"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* ====================================================
            1. HEADER AREA (Alpha Agency: Flexible Digital Marketing & Web Plans For Success)
           ==================================================== */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4F0] dark:bg-[#0D1420] border border-[#FF6B4A]/25 text-xs font-semibold text-[#FF6B4A] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A] animate-pulse" />
              <span className="uppercase tracking-widest text-[11px] font-mono font-bold">
                TRANSPARENT INVESTMENT
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#0D1B2A] dark:text-white tracking-tight leading-[1.15]">
              Flexible Digital Plans For Success.
            </h2>

            <p className="text-sm sm:text-base text-[#4C5258] dark:text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
              Website development starting at <strong className="text-[#0D1B2A] dark:text-white">₹7,000+</strong>. Transparent milestone-based billing, 100% source code ownership, and 12 full months of inclusive post-launch support.
            </p>
          </div>
        </Reveal>

        {/* ====================================================
            2. THE 4 HORIZONTAL METRIC CARDS STRIP
           ==================================================== */}
        <Reveal delay={80}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {topMetrics.map((metric, idx) => {
              const IconComp = metric.icon;
              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl transition-all card-hover-lift ${
                    metric.highlighted
                      ? 'bg-white dark:bg-[#0D1420] border-2 border-[#FF6B4A] shadow-lg shadow-[#FF6B4A]/15'
                      : 'bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 shadow-2xs'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                      metric.highlighted
                        ? 'bg-[#FF6B4A] text-white border-[#FF6B4A]'
                        : 'bg-[#FFF4F0] dark:bg-white/5 text-[#FF6B4A] border-[#FF6B4A]/20'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block ${
                        metric.highlighted ? 'text-[#FF6B4A]' : 'text-slate-400'
                      }`}>
                        {metric.eyebrow}
                      </span>
                      <div className="text-xl sm:text-2xl font-black font-display text-[#0D1B2A] dark:text-white truncate">
                        {metric.value}
                      </div>
                      <p className="text-xs text-[#4C5258] dark:text-[#94A3B8] line-clamp-1">
                        {metric.subtext}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* ====================================================
            3. THE 3 TIERED PRICING CARDS
           ==================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-2">
          {pricingTiers.map((tier, idx) => (
            <Reveal key={idx} delay={idx * 100} className="h-full">
              <div
                className={`relative h-full rounded-3xl p-7 sm:p-9 flex flex-col justify-between card-hover-lift ${
                  tier.popular
                    ? 'bg-white dark:bg-[#0D1420] border-2 border-[#FF6B4A] shadow-xl shadow-[#FF6B4A]/15 lg:-translate-y-2'
                    : 'bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 shadow-xs hover:border-[#FF6B4A]/40'
                }`}
              >
                {/* Alpha Agency Popular Gradient Badge on Top */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-md shadow-[#FF6B4A]/30">
                      <Flame className="w-3.5 h-3.5 fill-current" />
                      <span>MOST POPULAR</span>
                    </span>
                  </div>
                )}

                {/* Card Header & Content */}
                <div className="space-y-6">
                  {/* Top ID and Timeline Pills */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-[#F8F9FA] dark:bg-white/5 border border-[#EBECEF] dark:border-white/10 text-xs font-mono font-bold text-slate-400">
                      {tier.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#F8F9FA] dark:bg-white/5 border border-[#EBECEF] dark:border-white/10 text-xs font-mono font-semibold text-[#4C5258] dark:text-slate-300">
                      {tier.timeline}
                    </span>
                  </div>

                  {/* Category & Title */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF6B4A] font-bold block">
                      {tier.category}
                    </span>
                    <h3 className="text-2xl font-bold font-display text-[#0D1B2A] dark:text-white tracking-tight">
                      {tier.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4C5258] dark:text-[#94A3B8] leading-relaxed min-h-[48px]">
                      {tier.description}
                    </p>
                  </div>

                  {/* Price Display */}
                  <div className="pt-2 pb-4 border-b border-slate-100 dark:border-white/10 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black font-display text-[#0D1B2A] dark:text-white tracking-tight">
                      {tier.price}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {tier.priceNote}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 pt-2">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4C5258] dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#8FC658] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="pt-8 mt-auto">
                  <Link
                    to="/contact"
                    className={`w-full py-3.5 px-5 rounded-full font-bold text-xs sm:text-sm button-press-scale flex items-center justify-center gap-2 cursor-pointer transition-all ${tier.buttonStyle}`}
                  >
                    <span>{tier.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ====================================================
            4. BOTTOM SCOPE NOTE BAR
           ==================================================== */}
        <Reveal delay={120}>
          <div className="p-5 rounded-2xl bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#FFF4F0] dark:bg-white/5 border border-[#FF6B4A]/20 text-[#FF6B4A] flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
                <strong className="text-[#0D1B2A] dark:text-white font-semibold">Scope Note:</strong> Final project pricing depends on agreed scope, page count, third-party integrations, content preparation, and custom functionality.
              </div>
            </div>

            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0D1B2A] text-white hover:bg-[#FF6B4A] text-xs font-bold button-press-scale shrink-0 cursor-pointer shadow-xs transition-colors"
            >
              <span>View Full Pricing &amp; Maintenance</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
