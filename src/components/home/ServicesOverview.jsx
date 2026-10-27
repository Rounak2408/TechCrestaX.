import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  ShoppingCart, 
  Layers, 
  Palette, 
  Search, 
  TrendingUp, 
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';
import Reveal from '../motion/Reveal';

export default function ServicesOverview() {
  const services = [
    {
      id: "website-design-development",
      title: "Websites That Convert",
      description: "Custom-crafted, mobile-first websites optimized for sub-second speeds, clean aesthetics, and effortless visitor conversion.",
      icon: Monitor,
      slug: "website-design-development",
      highlight: "From ₹7,000+",
      category: "DEVELOPMENT"
    },
    {
      id: "ecommerce-website-development",
      title: "E-commerce & Portals",
      description: "Fast, conversion-focused online stores with streamlined catalogs, mobile-optimized checkout funnels, and payment gateway integrations.",
      icon: ShoppingCart,
      slug: "ecommerce-website-development",
      highlight: "Cart & Checkout",
      category: "COMMERCE"
    },
    {
      id: "web-applications-platforms",
      title: "Web Applications & SaaS",
      description: "Scalable platforms, appointment portals, client dashboards, and custom business tools engineered with modern React architecture.",
      icon: Layers,
      slug: "web-applications-platforms",
      highlight: "Full Stack",
      category: "PLATFORMS"
    },
    {
      id: "ui-ux-design",
      title: "UI/UX & Product Design",
      description: "Intuitive user journeys, design systems, modern Figma prototypes, and visual hierarchies that make your product effortless to use.",
      icon: Palette,
      slug: "ui-ux-design",
      highlight: "Design Systems",
      category: "DESIGN"
    },
    {
      id: "seo-local-seo",
      title: "SEO & Organic Growth",
      description: "Technical on-page SEO, Google Business alignment, schema markup, and regional search visibility that attract organic leads.",
      icon: Search,
      slug: "seo-local-seo",
      highlight: "Organic Visibility",
      category: "MARKETING"
    },
    {
      id: "digital-growth-online-presence",
      title: "Performance & Strategy",
      description: "End-to-end digital positioning, social brand integration, and consistent brand presentation across modern customer touchpoints.",
      icon: TrendingUp,
      slug: "digital-growth-online-presence",
      highlight: "Brand & Traffic",
      category: "STRATEGY"
    }
  ];

  return (
    <section 
      className="py-16 sm:py-20 md:py-24 bg-[#F8F9FA] dark:bg-[#070A0F] border-b border-[#EBECEF] dark:border-white/10 transition-colors select-none"
      aria-label="Services Overview"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header (Alpha Agency: Our Services That Drive Growth) */}
        <Reveal y={20} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4F0] dark:bg-[#0D1420] border border-[#FF6B4A]/25 text-xs font-semibold text-[#FF6B4A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A] animate-pulse" />
              <span className="uppercase tracking-widest text-[11px] font-mono font-bold">
                OUR SERVICES THAT DRIVE GROWTH
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#0D1B2A] dark:text-white tracking-tight">
              Digital Solutions Tailored to Your Business Goals.
            </h2>
            <p className="text-base text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
              From strategy and UI/UX design to modern React engineering and organic SEO, we build digital experiences engineered to convert and scale.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6B4A] hover:text-[#FF7C42] transition-colors group self-start md:self-auto cursor-pointer pb-1 shrink-0"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </Reveal>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Reveal key={service.id} delay={Math.min(index * 70, 350)} y={20} as="div" className="h-full">
                <Link
                  to={`/services#${service.slug}`}
                  className="card-hover-lift group h-full p-7 rounded-3xl bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 hover:border-[#FF6B4A]/50 hover:shadow-xl hover:shadow-[#FF6B4A]/10 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#FFF4F0] dark:bg-white/5 border border-[#FF6B4A]/20 text-[#FF6B4A] flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#FF6B4A] group-hover:to-[#FFB627] group-hover:text-white transition-all shadow-2xs duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-[#FF6B4A] bg-[#FFF4F0] dark:bg-[#FF6B4A]/10 px-3 py-1 rounded-full border border-[#FF6B4A]/25">
                        {service.highlight}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-400">
                        {service.category}
                      </span>
                      <h3 className="text-xl font-bold font-display text-[#0D1B2A] dark:text-white group-hover:text-[#FF6B4A] transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-bold text-[#0D1B2A] dark:text-white group-hover:text-[#FF6B4A]">
                    <span>Learn more about service</span>
                    <span className="w-7 h-7 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center group-hover:bg-[#FF6B4A] group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="pt-6 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 pl-7 pr-2 py-2.5 rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] hover:from-[#FF7C42] hover:to-[#FFA700] text-white font-bold text-sm transition-all duration-300 shadow-md shadow-[#FF6B4A]/20 hover:shadow-lg hover:shadow-[#FF6B4A]/35 hover:-translate-y-0.5 cursor-pointer group"
          >
            <span>Explore All 6 Detailed Services</span>
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#FF6B4A] transition-all">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
