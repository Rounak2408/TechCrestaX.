import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Monitor, 
  ShoppingBag, 
  Layers, 
  Palette, 
  Search, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import SEO from '../components/seo/SEO';
import { servicesData } from '../data/servicesData';
import { companyData } from '../data/companyData';
import { serviceSchema, createBreadcrumbSchema } from '../data/seoSchemas';

export default function ServicesPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const serviceIcons = {
    'website-design-development': Monitor,
    'ecommerce-website-development': ShoppingBag,
    'web-applications-platforms': Layers,
    'ui-ux-design': Palette,
    'seo-local-seo': Search,
    'digital-growth-online-presence': TrendingUp,
  };

  const servicesPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      createBreadcrumbSchema([
        { label: 'Home', to: '/' },
        { label: 'Services' }
      ]),
      serviceSchema
    ]
  };

  return (
    <div className="pt-8 sm:pt-10 pb-16 min-h-screen bg-[#FFF9F6] dark:bg-[#0B0E14] transition-colors">
      <SEO
        title="Services — Website Development, E-commerce & Web Platforms | TechCrestaX"
        description="Explore TechCrestaX's design, development, and digital growth services. Custom websites starting at ₹7,000+ with 1-year free maintenance, e-commerce, and SEO."
        keywords={[
          "TechCrestaX services",
          "website development services",
          "ecommerce website development",
          "web applications platforms",
          "UI UX design studio",
          "local SEO services Gujarat"
        ]}
        canonical="https://www.techcrestax.com/services"
        schema={servicesPageSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* ====================================================
            HERO SECTION
           ==================================================== */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 text-xs font-semibold text-[#FF572F] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#FF572F] animate-pulse" />
            <span className="uppercase tracking-widest text-[11px] font-mono">
              COMPREHENSIVE SERVICES
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-[#151515] dark:text-white leading-[1.12]">
            Digital Solutions Designed <span className="text-[#FF572F]">Around Your Business</span>.
          </h1>

          <p className="text-base sm:text-lg text-[#555555] dark:text-[#94A3B8] leading-relaxed">
            Explore our design, development, and digital growth services. Every project is built for real performance, clean maintainability, and lasting client value.
          </p>

          {/* Quick jump pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {servicesData.map((s) => (
              <a
                key={s.id}
                href={`#${s.slug}`}
                className="px-3 py-1.5 rounded-full bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 text-xs font-medium text-[#555555] dark:text-[#94A3B8] hover:text-[#FF572F] hover:border-[#FF572F] transition-all"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>

        {/* ====================================================
            6 DETAILED SERVICE SECTIONS
           ==================================================== */}
        <div className="space-y-16 sm:space-y-20">
          {servicesData.map((service, index) => {
            const IconComponent = serviceIcons[service.id] || Monitor;
            const isEven = index % 2 === 1;

            return (
              <section 
                key={service.id}
                id={service.slug}
                className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 shadow-xs hover:border-[#FF572F]/40 transition-all scroll-mt-24"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Service Overview & Capabilities (7 cols) */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#FFF0E9] dark:bg-[#FF572F]/15 border border-[#FCD5C8] dark:border-[#FF572F]/30 text-[#FF572F] flex items-center justify-center shrink-0">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF572F]">
                          0{index + 1} • {service.badge}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#151515] dark:text-white">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-[#555555] dark:text-[#94A3B8] leading-relaxed">
                      {service.longDesc}
                    </p>

                    {/* Key Capabilities */}
                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-[#151515] dark:text-white font-bold">
                        Key Capabilities & Deliverables
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.keyCapabilities.map((cap, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#555555] dark:text-[#94A3B8]">
                            <CheckCircle2 className="w-4 h-4 text-[#FF572F] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-[#666666] dark:text-[#94A3B8] mr-1">
                        Technologies:
                      </span>
                      {service.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-[#FFF9F6] dark:bg-[#1A2230] border border-[#F0E7E2] dark:border-white/10 text-[11px] font-mono text-[#151515] dark:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF572F] hover:bg-[#E94725] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#FF572F]/20 transition-all hover:-translate-y-0.5"
                      >
                        <span>Discuss This Service</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <a
                        href={companyData.contact.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-500/10 hover:bg-emerald-500 text-emerald-600 hover:text-white dark:text-emerald-400 dark:hover:text-white border border-emerald-500/30 font-semibold text-xs transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Inquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Service Side Panel: Real Project Context & Deliverables (5 cols) */}
                  <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-[#FFF9F6] dark:bg-[#1A2230] border border-[#F0E7E2] dark:border-white/10 space-y-5">
                    
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF572F] font-bold block mb-1">
                        Typical Engagement Scope
                      </span>
                      <p className="text-xs text-[#666666] dark:text-[#94A3B8]">
                        {service.purpose}
                      </p>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2 border-t border-[#F0E7E2] dark:border-white/10 pt-4">
                      <div className="text-xs font-bold text-[#151515] dark:text-white">
                        Standard Inclusions:
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#555555] dark:text-[#94A3B8]">
                        {service.deliverables.slice(0, 4).map((d, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF572F] mt-1.5 shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Real Client Case Study Link */}
                    {service.relatedProjects && service.relatedProjects.length > 0 && (
                      <div className="border-t border-[#F0E7E2] dark:border-white/10 pt-4">
                        <div className="text-xs font-mono text-[#666666] dark:text-[#94A3B8] mb-2">
                          Related Verified Client Work:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {service.relatedProjects.map((projId) => (
                            <Link
                              key={projId}
                              to="/work"
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 text-xs font-semibold text-[#151515] dark:text-white hover:text-[#FF572F] transition-colors"
                            >
                              <span className="capitalize">{projId.replace(/-/g, ' ')}</span>
                              <ArrowRight className="w-3 h-3 text-[#FF572F]" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                </div>
              </section>
            );
          })}
        </div>

        {/* ====================================================
            CLOSING CALL TO ACTION
           ==================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FFF0E9] dark:bg-[#161D2B] border border-[#FCD5C8] dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-[#FF572F] uppercase tracking-wider font-mono">
              1-YEAR FREE MAINTENANCE INCLUDED
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#151515] dark:text-white">
              Ready to Scope Your Next Project?
            </h3>
            <p className="text-sm text-[#666666] dark:text-[#94A3B8] max-w-md">
              Starting from ₹7,000+ with transparent milestones and ongoing support.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-full bg-[#FF572F] hover:bg-[#E94725] text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5"
            >
              Start a Project
            </Link>
            <Link
              to="/pricing"
              className="px-6 py-3.5 rounded-full bg-white dark:bg-[#121824] text-[#151515] dark:text-white hover:text-[#FF572F] border border-[#F0E7E2] dark:border-white/10 font-bold text-sm transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
