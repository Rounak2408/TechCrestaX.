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
  ChevronRight 
} from 'lucide-react';

export default function ServicesOverview() {
  const services = [
    {
      id: "website-design-development",
      title: "Website Design & Development",
      description: "Custom-crafted, mobile-first websites optimized for sub-second speeds, clean aesthetics, and effortless visitor conversion.",
      icon: Monitor,
      slug: "website-design-development",
      highlight: "Starts at ₹7,000+"
    },
    {
      id: "ecommerce-website-development",
      title: "E-commerce Website Development",
      description: "Fast, conversion-focused online stores with streamlined catalogs, mobile-optimized checkout funnels, and payment gateway integrations.",
      icon: ShoppingCart,
      slug: "ecommerce-website-development",
      highlight: "Catalog & Checkout"
    },
    {
      id: "web-applications-platforms",
      title: "Web Applications & Platforms",
      description: "Scalable platforms, doctor appointment portals, client dashboards, and custom business tools engineered with modern React architecture.",
      icon: Layers,
      slug: "web-applications-platforms",
      highlight: "Custom Logic"
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      description: "Intuitive user journeys, design systems, modern Figma prototypes, and visual hierarchies that make your product effortless to use.",
      icon: Palette,
      slug: "ui-ux-design",
      highlight: "Figma & Systems"
    },
    {
      id: "seo-local-seo",
      title: "SEO & Local SEO",
      description: "Technical on-page SEO, Google Business alignment, schema markup, and regional search visibility that attract organic leads.",
      icon: Search,
      slug: "seo-local-seo",
      highlight: "Schema & Local Pack"
    },
    {
      id: "digital-growth-online-presence",
      title: "Digital Growth & Online Presence",
      description: "End-to-end digital positioning, social brand integration, and consistent brand presentation across modern customer touchpoints.",
      icon: TrendingUp,
      slug: "digital-growth-online-presence",
      highlight: "Brand & Traffic"
    }
  ];

  return (
    <section 
      className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#070A0F] border-y border-[#F0E7E2] dark:border-white/10 transition-colors"
      aria-label="Services Overview"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF572F] font-bold">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#151515] dark:text-white tracking-tight">
              Everything You Need to Grow Digitally
            </h2>
            <p className="text-base text-[#666666] dark:text-[#94A3B8] leading-relaxed">
              From strategy and design to development and launch, we build digital experiences around your business goals.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#FF572F] hover:text-[#E94725] transition-colors group self-start md:self-auto"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={service.id}
                to={`/services#${service.slug}`}
                className="group p-6 sm:p-8 rounded-2xl bg-[#FFF9F6] dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 hover:border-[#FF572F] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#1A2230] border border-[#F0E7E2] dark:border-white/10 text-[#FF572F] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#FF572F] group-hover:text-white transition-all shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#FF572F] bg-[#FFF0E9] dark:bg-[#FF572F]/15 px-2.5 py-1 rounded-full border border-[#FCD5C8] dark:border-[#FF572F]/30">
                      {service.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-display text-[#151515] dark:text-white group-hover:text-[#FF572F] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#666666] dark:text-[#94A3B8] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#F0E7E2] dark:border-white/10 flex items-center justify-between text-xs font-bold text-[#151515] dark:text-white group-hover:text-[#FF572F]">
                  <span>Learn more about service</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#FF572F]" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#151515] hover:bg-[#FF572F] text-white dark:bg-white dark:hover:bg-[#FF572F] dark:text-[#151515] dark:hover:text-white font-bold text-sm transition-all duration-200 shadow-md hover:-translate-y-0.5"
          >
            <span>Explore All 6 Detailed Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
