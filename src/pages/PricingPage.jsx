import React, { useEffect, useState } from 'react';
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
  ChevronDown,
  Layers,
  Palette,
  Code,
  FileCheck,
  HelpCircle,
  MessageSquare
} from 'lucide-react';
import SEO from '../components/seo/SEO';
import { companyData } from '../data/companyData';
import { createBreadcrumbSchema } from '../data/seoSchemas';

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      title: "Starter Business Website",
      description: "Ideal for startups, individual practitioners, and local businesses establishing a professional web presence.",
      price: "₹7,000+",
      priceNote: "starting base",
      popular: false,
      features: [
        "100% Mobile & Tablet Responsive Design",
        "Modern React / Tailwind Architecture",
        "Fast Sub-Second Page Loading",
        "Technical On-Page SEO & Schema Markup"
      ],
      buttonText: "Request Starter Estimate",
      buttonStyle: "bg-white dark:bg-[#121824] hover:bg-slate-50 dark:hover:bg-[#1A2230] text-[#151515] dark:text-white border border-[#F0E7E2] dark:border-slate-800",
    },
    {
      number: "02",
      timeline: "2–3 Weeks",
      category: "FULL BUSINESS PRESENCE",
      title: "Commercial & Business Platform",
      description: "For expanding companies, clinics, hospitality brands, and corporate services requiring bespoke art direction and lead funnels.",
      price: "₹15,000+",
      priceNote: "custom scope",
      popular: true,
      features: [
        "Multi-Section Bespoke Editorial Art Direction",
        "Custom Lead & Appointment Booking Workflows",
        "Local SEO & Google Business Profile Integration",
        "High-Converting Landing Funnel Optimization"
      ],
      buttonText: "Request Project Estimate",
      buttonStyle: "bg-gradient-to-r from-[#FF572F] to-[#E94725] text-white font-bold shadow-lg shadow-[#FF572F]/25 hover:shadow-[#FF572F]/40",
    },
    {
      number: "03",
      timeline: "2–4 Weeks",
      category: "COMMERCE & PORTALS",
      title: "E-commerce & Web Applications",
      description: "For e-commerce brands, catalog storefronts, doctor portals, and custom web applications requiring databases and API integrations.",
      price: "₹25,000+",
      priceNote: "custom quote",
      popular: false,
      features: [
        "Product Catalog or Custom Booking Database",
        "Secure Payment Gateway / 1-Click WhatsApp Ordering",
        "Role-Based Access & Customer Portal Flows",
        "API Integrations & Custom Business Logic"
      ],
      buttonText: "Discuss Platform Scope",
      buttonStyle: "bg-white dark:bg-[#121824] hover:bg-slate-50 dark:hover:bg-[#1A2230] text-[#151515] dark:text-white border border-[#F0E7E2] dark:border-slate-800",
    },
  ];

  const costFactors = [
    {
      icon: Layers,
      title: "Page Count & Information Architecture",
      desc: "A single-page marketing landing page requires different effort than an extensive 10-page multi-service corporate platform with specialized routing."
    },
    {
      icon: Palette,
      title: "Design Complexity & Custom Systems",
      desc: "Tailored UI design tokens, custom illustrations, animations, and high-fidelity component prototypes involve dedicated design craftsmanship."
    },
    {
      icon: Code,
      title: "Integrations & Custom Functionality",
      desc: "E-commerce shopping carts, payment gateways, clinic appointment booking systems, or custom API endpoints require specialized technical logic."
    },
    {
      icon: FileCheck,
      title: "Content & Copywriting Preparation",
      desc: "When finalized text and photography are provided upfront, execution is faster; projects requiring copywriting or asset creation are scoped accordingly."
    }
  ];

  const standardInclusions = [
    "100% Mobile, Tablet & Desktop Responsive Engineering",
    "Modern React Architecture with Sub-Second Loading",
    "Technical On-Page SEO & Schema.org Structured Data",
    "Interactive Lead Capture & Direct WhatsApp Connect",
    "1 Year (12 Months) Free Maintenance & Bug Fix Warranty",
    "Full Source Code & 100% Intellectual Property Handover",
    "Cross-Browser QA Testing (Chrome, Safari, Edge, Firefox)",
    "Domain DNS & Free SSL Certificate Configuration"
  ];

  const pricingFaqs = [
    {
      q: "What does the starting price of ₹7,000+ include?",
      a: "The ₹7,000+ starting rate covers custom website development for essential business websites, complete mobile-first responsive design, modern React architecture, on-page technical SEO, lead & WhatsApp routing, and 1 full year (12 months) of free website maintenance."
    },
    {
      q: "How does the first-year free maintenance work?",
      a: "Every new website built by TechCrestaX includes 12 months of free maintenance. During this period, our team handles bug fixes, minor technical updates, performance monitoring, and security stability at zero additional cost."
    },
    {
      q: "What is the annual maintenance cost after the first year?",
      a: "After the first 12 months, ongoing website maintenance is available at an affordable, flat annual rate of ₹5,000 per year. Renewal is completely optional with zero lock-in contracts."
    },
    {
      q: "Are domain name registration and web hosting included?",
      a: "Domain registration and hosting charges are quoted separately based on your preferred domain extension (.com, .in, etc.) and hosting infrastructure (such as Vercel, Hostinger, AWS, or custom servers). We configure DNS and SSL records directly on your accounts so you retain 100% ownership."
    },
    {
      q: "What factors can increase the project cost beyond the base rate?",
      a: "Final pricing depends on page count, bespoke UI/UX design complexity, custom third-party integrations (such as payment gateways, doctor booking portals, or external APIs), and content preparation requirements."
    }
  ];

  const pricingSchema = {
    "@context": "https://schema.org",
    "@graph": [
      createBreadcrumbSchema([
        { label: 'Home', to: '/' },
        { label: 'Pricing' }
      ]),
      {
        "@type": "WebPage",
        "@id": "https://www.techcrestax.com/pricing#webpage",
        "url": "https://www.techcrestax.com/pricing",
        "name": "TechCrestaX Transparent Pricing",
        "description": "Clear and honest website development pricing starting from ₹7,000+ with 1-year free maintenance and ₹5,000/year renewal."
      }
    ]
  };

  return (
    <div className="pt-8 sm:pt-10 pb-16 min-h-screen bg-[#FFF9F6] dark:bg-[#0B0E14] transition-colors select-none">
      <SEO
        title="Pricing — Transparent Website & App Development Pricing | TechCrestaX"
        description="Clear, honest website development pricing starting from ₹7,000+ with 1-year free maintenance. Predictable ₹5,000/year annual renewal."
        keywords={[
          "TechCrestaX pricing",
          "website development cost",
          "ecommerce website pricing",
          "web design packages Rajkot",
          "website maintenance pricing"
        ]}
        canonical="https://www.techcrestax.com/pricing"
        schema={pricingSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* ====================================================
            1. HEADER AREA
           ==================================================== */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-4 sm:pt-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#121824] border border-[#FCD5C8] dark:border-[#FF572F]/30 text-xs font-semibold text-[#FF572F] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#FF572F] animate-pulse" />
            <span className="uppercase tracking-widest text-[11px] font-mono">
              INVESTMENT &amp; PRICING
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-[#151515] dark:text-white tracking-tight leading-[1.12]">
            Transparent pricing. <br className="hidden sm:inline" />
            <span className="text-[#FF572F]">Free first-year maintenance.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#555555] dark:text-[#94A3B8] leading-relaxed max-w-2xl mx-auto">
            Website development starting at <strong className="text-[#151515] dark:text-white">₹7,000+</strong>. Milestone-based billing, 100% source code ownership, and 12 months of inclusive post-launch support.
          </p>
        </div>

        {/* ====================================================
            2. THE 4 HORIZONTAL METRIC CARDS STRIP
           ==================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {topMetrics.map((metric, idx) => {
            const IconComp = metric.icon;
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl transition-all ${
                  metric.highlighted
                    ? 'bg-white dark:bg-[#121824] border-2 border-[#FF572F] shadow-lg shadow-[#FF572F]/15 dark:shadow-[#FF572F]/20'
                    : 'bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 shadow-2xs'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                    metric.highlighted
                      ? 'bg-[#FF572F] text-white border-[#FF572F]'
                      : 'bg-[#FFF0E9] dark:bg-[#1A2230] text-[#FF572F] border-[#FCD5C8] dark:border-white/10'
                  }`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block ${
                      metric.highlighted ? 'text-[#FF572F]' : 'text-[#888888] dark:text-[#94A3B8]'
                    }`}>
                      {metric.eyebrow}
                    </span>
                    <div className="text-xl sm:text-2xl font-black font-display text-[#151515] dark:text-white truncate">
                      {metric.value}
                    </div>
                    <p className="text-xs text-[#666666] dark:text-[#94A3B8] line-clamp-1">
                      {metric.subtext}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ====================================================
            3. THE 3 TIERED PRICING CARDS
           ==================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-2">
          {pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                tier.popular
                  ? 'bg-white dark:bg-[#121824] border-2 border-[#FF572F] shadow-xl shadow-[#FF572F]/15 dark:shadow-[#FF572F]/25 lg:-translate-y-2'
                  : 'bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 shadow-xs hover:border-[#FF572F]/40'
              }`}
            >
              {/* Popular Badge on Top */}
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FF572F] text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-md shadow-[#FF572F]/30">
                    <Flame className="w-3.5 h-3.5 fill-current" />
                    <span>MOST POPULAR</span>
                  </span>
                </div>
              )}

              {/* Card Header & Content */}
              <div className="space-y-6">
                {/* Top ID and Timeline Pills */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-[#FFF9F6] dark:bg-[#1A2230] border border-[#F0E7E2] dark:border-white/10 text-xs font-mono font-bold text-[#888888] dark:text-slate-400">
                    {tier.number}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FFF9F6] dark:bg-[#1A2230] border border-[#F0E7E2] dark:border-white/10 text-xs font-mono font-semibold text-[#666666] dark:text-slate-300">
                    {tier.timeline}
                  </span>
                </div>

                {/* Category & Title */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF572F] font-bold block">
                    {tier.category}
                  </span>
                  <h2 className="text-2xl font-bold font-display text-[#151515] dark:text-white tracking-tight">
                    {tier.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#555555] dark:text-[#94A3B8] leading-relaxed min-h-[48px]">
                    {tier.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="pt-2 pb-4 border-b border-[#F0E7E2] dark:border-white/10 flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black font-display text-[#151515] dark:text-white tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-xs font-mono text-[#888888] dark:text-[#94A3B8]">
                    {tier.priceNote}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 pt-2">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#444444] dark:text-[#CBD5E1]">
                      <CheckCircle2 className="w-4 h-4 text-[#FF572F] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-auto">
                <button
                  type="button"
                  data-talk-to-expert
                  className={`w-full py-3.5 px-5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5 ${tier.buttonStyle}`}
                >
                  <span>{tier.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ====================================================
            4. BOTTOM SCOPE NOTE BAR
           ==================================================== */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#FFF0E9] dark:bg-[#FF572F]/15 text-[#FF572F] border border-[#FCD5C8] dark:border-[#FF572F]/30 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="text-xs sm:text-sm text-[#555555] dark:text-[#94A3B8] leading-relaxed">
              <strong className="text-[#151515] dark:text-white font-semibold">Scope Note:</strong> Final project pricing depends on agreed scope, page count, third-party integrations, content preparation, and custom functionality.
            </div>
          </div>

          <button
            type="button"
            data-talk-to-expert
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FFF9F6] dark:bg-[#1A2230] hover:bg-[#FFF0E9] dark:hover:bg-[#202B3D] text-[#151515] dark:text-white hover:text-[#FF572F] border border-[#F0E7E2] dark:border-white/10 text-xs font-bold transition-all shrink-0 cursor-pointer shadow-2xs"
          >
            <span>Get a Detailed Quote</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FF572F]" />
          </button>
        </div>

        {/* ====================================================
            5. STANDARD INCLUSIONS IN EVERY BUILD
           ==================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 shadow-xs space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF572F] font-bold">
              GUARANTEED STANDARD
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#151515] dark:text-white tracking-tight">
              Standard Inclusions in Every TechCrestaX Project
            </h2>
            <p className="text-sm text-[#666666] dark:text-[#94A3B8] leading-relaxed max-w-2xl">
              Regardless of your tier, every digital build comes packaged with clean technical engineering, security hardening, and complete code ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {standardInclusions.map((inclusion, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-[#FFF9F6] dark:bg-[#0E131F] border border-[#F0E7E2] dark:border-slate-800/80 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[#FF572F] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-[#151515] dark:text-white">
                  {inclusion}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ====================================================
            6. COST FACTORS BREAKDOWN
           ==================================================== */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF572F] font-bold">
              TRANSPARENCY BREAKDOWN
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#151515] dark:text-white tracking-tight">
              Factors Influencing Custom Project Quotes
            </h2>
            <p className="text-sm text-[#666666] dark:text-[#94A3B8] leading-relaxed max-w-2xl">
              We never inflate prices arbitrarily. Here is how scope and technical complexity shape your final project estimate:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {costFactors.map((factor, idx) => {
              const IconComp = factor.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 shadow-xs space-y-3 hover:border-[#FF572F]/50 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FFF0E9] dark:bg-[#FF572F]/15 border border-[#FCD5C8] dark:border-[#FF572F]/30 text-[#FF572F] flex items-center justify-center shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-display text-[#151515] dark:text-white">
                    {factor.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] dark:text-[#94A3B8] leading-relaxed">
                    {factor.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ====================================================
            7. PRICING FAQS ACCORDION
           ==================================================== */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF572F] font-bold">
              PRICING QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#151515] dark:text-white tracking-tight">
              Frequently Asked Pricing Questions
            </h2>
          </div>

          <div className="space-y-4">
            {pricingFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 shadow-2xs overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold font-display text-[#151515] dark:text-white">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#FF572F] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#555555] dark:text-[#94A3B8] leading-relaxed border-t border-[#F0E7E2]/60 dark:border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ====================================================
            8. FINAL PRICING CTA
           ==================================================== */}
        <div className="p-8 sm:p-14 rounded-3xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 shadow-xl text-center space-y-6 relative overflow-hidden">
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#FFF0E9] dark:bg-[#FF572F]/15 border border-[#FCD5C8] dark:border-[#FF572F]/30 text-xs font-mono font-bold text-[#FF572F] uppercase tracking-wider">
              READY FOR A QUOTE?
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#151515] dark:text-white tracking-tight">
              Get an Itemized Estimate <br className="hidden sm:block" />
              <span className="text-[#FF572F]">Within 12 Hours</span>
            </h2>

            <p className="text-sm sm:text-base text-[#555555] dark:text-[#94A3B8] leading-relaxed">
              Tell us about your project requirements and we will send a detailed, transparent proposal tailored to your business goals.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                type="button"
                data-talk-to-expert
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#FF572F] hover:bg-[#E94725] text-white font-bold text-sm shadow-md shadow-[#FF572F]/20 hover:shadow-[#FF572F]/35 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Request Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white dark:bg-[#1A2230] hover:bg-slate-50 dark:hover:bg-[#202B3D] border border-[#F0E7E2] dark:border-white/15 text-[#151515] dark:text-white font-bold text-sm transition-all hover:-translate-y-0.5 shadow-xs"
              >
                <span>Contact Page</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
