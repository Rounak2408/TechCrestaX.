import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import Reveal from '../motion/Reveal';

export default function ServicesOverview() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [displayedIdx, setDisplayedIdx] = useState(0);
  const [animPhase, setAnimPhase] = useState('idle'); // 'idle' | 'exiting' | 'entering-prep' | 'entering'
  const timersRef = useRef([]);

  const clearAllTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  useEffect(() => {
    return () => clearAllTimers();
  }, []);

  const handleSelectService = (newIdx) => {
    if (newIdx === activeIdx && newIdx === displayedIdx && animPhase === 'idle') return;

    clearAllTimers();
    setActiveIdx(newIdx);

    const prefersReducedMotion = typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setDisplayedIdx(newIdx);
      setAnimPhase('idle');
      return;
    }

    // Phase 1: Outgoing separation
    setAnimPhase('exiting');

    // Phase 2: Content swap & prepare incoming starting positions (center below, right above)
    const t1 = setTimeout(() => {
      setDisplayedIdx(newIdx);
      setAnimPhase('entering-prep');

      // Phase 3: Trigger simultaneous synchronized entrance
      const t2 = setTimeout(() => {
        setAnimPhase('entering');

        const t3 = setTimeout(() => {
          setAnimPhase('idle');
        }, 760);
        timersRef.current.push(t3);
      }, 30);
      timersRef.current.push(t2);
    }, 200);
    timersRef.current.push(t1);
  };

  const services = [
    {
      num: "01",
      id: "website-design-development",
      slug: "website-design-development",
      navTitle: "Web Design & Development",
      category: "01 // DEVELOPMENT",
      title: "Website Design & Development",
      desc: "We design and develop high-performance websites and web applications built for speed, usability, and business growth. Custom-engineered with modern React, semantic HTML5, and sub-second load times.",
      accentColor: "#FF6B4A",
      image: "/services/web-dev.png",
      capabilities: [
        "Custom Website Design & React 19 Architecture",
        "Sub-Second Core Web Vitals (<0.8s load)",
        "100% Mobile & Tablet Responsive Layouts",
        "12 Months Free Maintenance & Code Ownership"
      ]
    },
    {
      num: "02",
      id: "ecommerce-website-development",
      slug: "ecommerce-website-development",
      navTitle: "Shopify Store & E-commerce",
      category: "02 // COMMERCE",
      title: "E-commerce Website Development",
      desc: "Build a premium eCommerce experience with a professionally designed online store. Frictionless shopping cart flows, payment gateway integrations, and 1-click WhatsApp order routing that converts visitors into buyers.",
      accentColor: "#10B981",
      image: "/services/ecommerce.png",
      capabilities: [
        "Custom Storefront Design & Catalog Architecture",
        "Payment Gateway Integration (Razorpay, Stripe, UPI)",
        "Direct 1-Click WhatsApp Order Connectors",
        "Product Schema Markup for Rich Google Snippets"
      ]
    },
    {
      num: "03",
      id: "web-applications-platforms",
      slug: "web-applications-platforms",
      navTitle: "Web Applications & SaaS",
      category: "03 // PLATFORMS",
      title: "Web Applications & Platforms",
      desc: "Scalable web platforms, appointment booking engines, and custom business portals engineered with modern React, role-based access control, secure auth, and resilient database APIs.",
      accentColor: "#38BDF8",
      image: "/services/platforms.png",
      capabilities: [
        "Doctor & Specialist Appointment Booking Systems",
        "Interactive Dashboards & Telemetry Workflows",
        "Role-Based Access Control (RBAC) & Secure Auth",
        "100% Source Code Ownership & Database Schemas"
      ]
    },
    {
      num: "04",
      id: "ui-ux-design",
      slug: "ui-ux-design",
      navTitle: "UI/UX & Product Design",
      category: "04 // DESIGN SYSTEMS",
      title: "UI/UX & Product Design",
      desc: "Intuitive digital experiences designed to make products easier to use and more engaging. Conversion-focused Figma prototypes, cohesive design tokens, and clear visual hierarchies that elevate brand perception.",
      accentColor: "#8B5CF6",
      image: "/services/uiux.jpg",
      capabilities: [
        "Component-Driven Design Systems in Figma",
        "High-Fidelity Interactive Clickable Prototypes",
        "WCAG 2.2 AA Contrast & Accessibility Auditing",
        "Production-Ready Design Token Architecture"
      ]
    },
    {
      num: "05",
      id: "seo-local-seo",
      slug: "seo-local-seo",
      navTitle: "Search Engine Optimization",
      category: "05 // SEARCH & TRAFFIC",
      title: "SEO & Local SEO",
      desc: "We help businesses dominate search engine results with tailored SEO solutions designed to improve visibility, drive qualified organic traffic, and maximize long-term business growth.",
      accentColor: "#FFB627",
      image: "/services/seo.png",
      capabilities: [
        "Technical SEO Audits & Core Web Vitals Optimization",
        "Structured Schema Markup (LocalBusiness & Org)",
        "Google Search Console & GA4 Verification",
        "Local SEO & Google Business Profile Optimization"
      ]
    },
    {
      num: "06",
      id: "digital-growth-online-presence",
      slug: "digital-growth-online-presence",
      navTitle: "Digital Growth & Strategy",
      category: "06 // STRATEGY",
      title: "Digital Growth & Online Presence",
      desc: "End-to-end digital positioning, social brand integration, and consistent brand presentation across modern customer touchpoints. Turn marketing attention into verified direct client inquiries.",
      accentColor: "#F43F5E",
      image: "/services/growth.png",
      capabilities: [
        "High-Converting Campaign & Marketing Landing Pages",
        "Direct 1-Click WhatsApp Lead Routing Workflows",
        "Conversion Rate Optimization (CRO) & Funnel Strategy",
        "Attribution Tracking & Performance Telemetry"
      ]
    }
  ];

  const currentService = services[displayedIdx];
  const easeCurve = 'cubic-bezier(0.22, 1, 0.36, 1)';

  // Center Panel Motion: opens from BOTTOM (slides UP into view)
  const getCenterMotionStyle = () => {
    if (animPhase === 'exiting') {
      return {
        opacity: 0,
        transform: 'translate3d(0, 18px, 0)',
        transition: 'opacity 200ms ease-out, transform 200ms ease-out',
        willChange: 'opacity, transform',
      };
    }
    if (animPhase === 'entering-prep') {
      return {
        opacity: 0,
        transform: 'translate3d(0, 48px, 0)',
        transition: 'none',
        willChange: 'opacity, transform',
      };
    }
    if (animPhase === 'entering') {
      return {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
        transition: `opacity 750ms ${easeCurve}, transform 750ms ${easeCurve}`,
        willChange: 'opacity, transform',
      };
    }
    return {
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
      willChange: 'auto',
    };
  };

  // Right Panel Motion: opens from TOP (slides DOWN into view with subtle zoom reveal)
  const getRightMotionStyle = () => {
    if (animPhase === 'exiting') {
      return {
        opacity: 0,
        transform: 'translate3d(0, -18px, 0) scale(0.98)',
        transition: 'opacity 200ms ease-out, transform 200ms ease-out',
        willChange: 'opacity, transform',
      };
    }
    if (animPhase === 'entering-prep') {
      return {
        opacity: 0,
        transform: 'translate3d(0, -48px, 0) scale(0.96)',
        transition: 'none',
        willChange: 'opacity, transform',
      };
    }
    if (animPhase === 'entering') {
      return {
        opacity: 1,
        transform: 'translate3d(0, 0, 0) scale(1)',
        transition: `opacity 750ms ${easeCurve}, transform 750ms ${easeCurve}`,
        willChange: 'opacity, transform',
      };
    }
    return {
      opacity: 1,
      transform: 'translate3d(0, 0, 0) scale(1)',
      willChange: 'auto',
    };
  };

  return (
    <section 
      id="services" 
      className="relative py-20 sm:py-24 md:py-28 bg-[#070A12] border-b border-white/10 select-none overflow-hidden"
      aria-label="TechCrestaX Services Showcase"
    >
      {/* Background ambient lighting and subtle curved wave glow (Alpha Agency style) */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-80"
          style={{
            background: 'radial-gradient(circle at 50% 20%, rgba(20, 28, 48, 0.6) 0%, rgba(7, 10, 18, 0.95) 70%, #070A12 100%)'
          }}
        />
        {/* Soft atmospheric curved wave lines */}
        <div 
          className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] opacity-15 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #FF6B4A 0%, #38BDF8 40%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header (Alpha Agency: Our Services That Drive Growth) */}
        <Reveal y={20} className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#FF6B4A] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A] animate-pulse" />
            <span className="uppercase tracking-[0.2em] text-[11px] font-mono font-bold">
              Our Services
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Our Digital Services That{' '}
            <span className="bg-gradient-to-r from-white via-white to-slate-300 bg-clip-text text-transparent">
              Drive Growth.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From technical SEO and conversion-focused web development to UI/UX design and scalable applications, explore our specialized disciplines.
          </p>
        </Reveal>

        {/* 3-Panel Interactive Layout (Alpha Agency: Left Tabs | Center Details | Right Poster) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* PANEL 1: LEFT NAV BUTTONS (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div 
              role="tablist" 
              aria-label="Service disciplines"
              className="flex lg:flex-col overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 gap-2.5 no-scrollbar"
            >
              {services.map((svc, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={svc.id}
                    type="button"
                    role="tab"
                    id={`service-tab-${svc.id}`}
                    aria-selected={isActive}
                    aria-controls={`service-panel-${svc.id}`}
                    onClick={() => handleSelectService(idx)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                        e.preventDefault();
                        handleSelectService((activeIdx + 1) % services.length);
                      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                        e.preventDefault();
                        handleSelectService((activeIdx - 1 + services.length) % services.length);
                      }
                    }}
                    style={{ transitionTimingFunction: easeCurve }}
                    className={`group relative text-left p-4 sm:p-4.5 rounded-2xl transition-all duration-300 flex items-center justify-between shrink-0 lg:shrink cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B4A] ${
                      isActive 
                        ? 'bg-[#121A2A] border border-[#FF6B4A] shadow-[0_0_25px_rgba(255,107,74,0.3)] text-white' 
                        : 'bg-[#0B1220]/70 hover:bg-[#0E1626] border border-white/8 hover:border-white/20 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={`font-mono text-xs font-bold transition-colors ${
                        isActive ? 'text-[#FF6B4A]' : 'text-slate-500 group-hover:text-slate-300'
                      }`}>
                        {svc.num}
                      </span>
                      <span className="text-sm sm:text-base font-bold whitespace-nowrap lg:whitespace-normal">
                        {svc.navTitle}
                      </span>
                    </div>

                    <ArrowRight className={`hidden lg:block w-4 h-4 transition-all duration-300 ${
                      isActive ? 'translate-x-1 text-[#FF6B4A] opacity-100' : 'opacity-0 -translate-x-2 group-hover:opacity-60'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Bottom "View All Services" Action Button (Alpha Agency Style) */}
            <div className="mt-4 pt-2">
              <Link
                to="/services"
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#FFB627] to-[#8FC658] hover:from-[#FFA62E] hover:to-[#9ED668] text-neutral-900 font-extrabold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-black/40 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* PANEL 2: CENTER SERVICE DETAILS (col-span-4) — OPENS FROM BOTTOM */}
          <div 
            id={`service-panel-${currentService.id}`}
            role="tabpanel"
            aria-labelledby={`service-tab-${currentService.id}`}
            className="lg:col-span-4 p-7 sm:p-8 rounded-3xl bg-[#0B1220]/90 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            <div 
              style={getCenterMotionStyle()}
              className="flex-1 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-6">
                {/* Alpha Agency Concentric Rings Golden Icon */}
                <div className="flex items-center justify-between">
                  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" className="shrink-0">
                    <circle cx="24" cy="24" r="22" stroke="url(#goldGrad)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                    <circle cx="24" cy="24" r="16" stroke="url(#goldGrad)" strokeWidth="2" />
                    <circle cx="24" cy="24" r="9" stroke="url(#goldGrad)" strokeWidth="2.5" />
                    <circle cx="24" cy="24" r="3" fill="#FFB627" />
                    <defs>
                      <linearGradient id="goldGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF7C42" />
                        <stop offset="0.5" stopColor="#FFB627" />
                        <stop offset="1" stopColor="#8FC658" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase bg-white/5 px-2.5 py-1 rounded-full border border-white/8">
                    {currentService.category}
                  </span>
                </div>

                {/* Description Paragraph */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {currentService.desc}
                </p>

                {/* Bullet Points with Orange Dots (Alpha Agency Style) */}
                <div className="space-y-3 pt-2">
                  {currentService.capabilities.map((cap, cIdx) => (
                    <div 
                      key={cIdx} 
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                    >
                      <span className="text-[#FF6B4A] font-bold text-base leading-none">•</span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider CTA: Read More ──────────> [Circle Arrow] */}
              <Link
                to={`/services#${currentService.slug}`}
                className="group flex items-center justify-between pt-6 border-t border-white/10 text-xs font-bold text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <span className="tracking-wide">Read More</span>
                <div className="flex-1 mx-4 h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent group-hover:from-[#FF6B4A] transition-all" />
                <span className="w-8 h-8 rounded-full bg-[#FF6B4A] flex items-center justify-center text-white shadow-md shadow-[#FF6B4A]/30 group-hover:scale-110 group-hover:bg-[#FF7C42] transition-all">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </div>
          </div>

          {/* PANEL 3: RIGHT SERVICE POSTER (col-span-4) — OPENS FROM TOP */}
          <div className="lg:col-span-4 h-full flex flex-col overflow-hidden">
            <div 
              style={getRightMotionStyle()}
              className="relative w-full h-full min-h-[440px] sm:min-h-[480px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#090F1D] group"
            >
              <img 
                src={currentService.image} 
                alt={currentService.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              {/* Subtle ambient glass sheen */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070A12]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
