import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Check, AlertCircle, Layout, Cpu, Palette, TrendingUp, RefreshCw, ShoppingBag, Bot, Cloud } from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import FAQSection from '../components/sections/FAQSection';
import ClosingCTA from '../components/sections/ClosingCTA';
import InteractiveServiceVisual from '../components/visuals/InteractiveServiceVisual';
import { servicesData } from '../data/servicesData';
import { portfolioData } from '../data/portfolioData';

import SEO from '../components/seo/SEO';
import { createServiceSchema, createBreadcrumbSchema, createFAQSchema } from '../data/seoSchemas';

const iconMap = {
  Layout,
  Cpu,
  Palette,
  TrendingUp,
  RefreshCw,
  ShoppingBag,
  Bot,
  Cloud,
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug || s.legacySlugs?.includes(slug));

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <SEO
          title="Service Not Found — TechCrestaX"
          description="The requested service specification does not exist."
        />
        <h1 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Service Not Found</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">The requested service specification does not exist.</p>
        <Button to="/services" variant="primary">
          Return to All Services
        </Button>
      </div>
    );
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      createBreadcrumbSchema([
        { label: 'Home', to: '/' },
        { label: 'Services', to: '/services' },
        { label: service.title }
      ]),
      createServiceSchema(service),
      ...(service.faqs ? [createFAQSchema(service.faqs)] : [])
    ]
  };

  const Icon = iconMap[service.icon] || Layout;
  const relatedProjects = portfolioData.filter((p) =>
    service.relatedProjects?.includes(p.slug)
  );

  return (
    <div className="pt-8 sm:pt-12 pb-20 bg-[#F8F9FA] dark:bg-[#070A0F] min-h-screen transition-colors">
      <SEO
        title={`${service.title} Services — TechCrestaX`}
        description={service.longDesc}
        keywords={[
          service.title,
          service.tagline,
          ...service.technologies,
          'TechCrestaX services',
          'software engineering Rajkot Gujarat'
        ]}
        canonical={`https://www.techcrestax.com/services/${service.slug}`}
        schema={serviceSchema}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Services', to: '/services' },
            { label: service.title },
          ]}
        />

        {/* Hero Banner for Service (Alpha Agency Hierarchy) */}
        <div className="bg-white dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10 rounded-3xl p-6 sm:p-12 mb-14 shadow-xs relative overflow-hidden transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#FFF4F0] dark:bg-[#FF6B4A]/15 border border-[#FF6B4A]/20 flex items-center justify-center text-[#FF6B4A]">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF4F0] dark:bg-[#FF6B4A]/15 border border-[#FF6B4A]/20 text-[#FF6B4A]">
                  {service.badge}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-[#0D1B2A] dark:text-white leading-[1.12]">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg font-bold bg-gradient-to-r from-[#FF6B4A] via-[#FF7C42] to-[#FFB627] bg-clip-text text-transparent">
                {service.tagline}
              </p>

              <p className="text-base sm:text-lg text-[#4C5258] dark:text-[#94A3B8] leading-relaxed font-normal">
                {service.longDesc}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                >
                  <span>Enquire for {service.title}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F8F9FA] dark:bg-[#152336] border border-[#EBECEF] dark:border-white/10 hover:border-[#FF6B4A] text-xs sm:text-sm font-semibold text-[#0D1B2A] dark:text-white transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to All Services</span>
                </Link>
              </div>
            </div>

            {/* Visual on Service Detail */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-sm">
                <InteractiveServiceVisual slug={service.slug} />
              </div>
            </div>
          </div>
        </div>

        {/* Section: Problems Addressed & Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Problems Addressed */}
          <div className="bg-white dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10 rounded-3xl p-7 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-xl bg-rose-50 dark:bg-rose-950/60 flex items-center justify-center text-rose-500">
                <AlertCircle className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold font-heading text-[#0D1B2A] dark:text-white">
                Challenges We Eliminate
              </h2>
            </div>

            <ul className="space-y-3.5">
              {service.problemsSolved.map((problem, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Capabilities */}
          <div className="bg-white dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10 rounded-3xl p-7 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-xl bg-[#FFF4F0] dark:bg-[#FF6B4A]/15 flex items-center justify-center text-[#FF6B4A]">
                <Check className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold font-heading text-[#0D1B2A] dark:text-white">
                Key Engineering Deliverables
              </h2>
            </div>

            <ul className="space-y-3.5">
              {service.keyCapabilities.map((cap, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm leading-relaxed">
                  <Check className="w-4 h-4 text-[#FF6B4A] shrink-0 mt-0.5" />
                  <span className="font-semibold text-[#0D1B2A] dark:text-white">{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section: Verified Technologies & Workflow */}
        <div className="bg-white dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10 rounded-3xl p-6 sm:p-10 mb-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-mono text-[#FF6B4A] font-bold uppercase tracking-wider block mb-1">
                Tech Stack
              </span>
              <h3 className="text-2xl font-bold font-heading text-[#0D1B2A] dark:text-white">
                Verified Technologies
              </h3>
              <p className="text-sm text-[#4C5258] dark:text-[#94A3B8] mt-1.5">
                We select robust, battle-tested modern tools built for maintainability, speed, and business growth.
              </p>
            </div>
            <div className="lg:col-span-8 flex flex-wrap gap-2">
              {service.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1.5 rounded-xl bg-[#F8F9FA] dark:bg-[#152336] border border-[#EBECEF] dark:border-white/10 text-xs sm:text-sm font-mono text-[#0D1B2A] dark:text-white font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Workflow */}
          <div className="pt-8 border-t border-[#EBECEF] dark:border-white/10">
            <h3 className="text-xl font-bold font-heading text-[#0D1B2A] dark:text-white mb-6">
              Typical Delivery Workflow
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.workflow.map((wf) => (
                <div key={wf.step} className="bg-[#F8F9FA] dark:bg-[#152336] border border-[#EBECEF] dark:border-white/10 rounded-2xl p-5">
                  <span className="text-xl font-mono font-bold text-[#FF6B4A] block mb-2">
                    {wf.step}
                  </span>
                  <h4 className="text-sm font-bold font-heading text-[#0D1B2A] dark:text-white mb-1">
                    {wf.name}
                  </h4>
                  <p className="text-xs text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
                    {wf.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mb-16">
            <div className="mb-6">
              <span className="text-[11px] font-mono text-[#FF6B4A] font-bold uppercase tracking-wider block mb-1">
                Proof in Production
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#0D1B2A] dark:text-white">
                Representative Case Studies
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-white dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10 hover:border-[#FF6B4A]/60 rounded-3xl p-6 sm:p-7 transition-all shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono text-[#FF6B4A] font-semibold uppercase tracking-wider block mb-2">
                      {proj.category}
                    </span>
                    <h4 className="text-xl font-bold font-heading text-[#0D1B2A] dark:text-white mb-2">
                      <Link to={`/work/${proj.slug}`} className="hover:text-[#FF6B4A] transition-colors">
                        {proj.title}
                      </Link>
                    </h4>
                    <p className="text-sm text-[#4C5258] dark:text-[#94A3B8] mb-5 line-clamp-3">
                      {proj.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EBECEF] dark:border-white/10 flex items-center justify-between">
                    <Link
                      to={`/work/${proj.slug}`}
                      className="text-xs font-bold text-[#0D1B2A] dark:text-white hover:text-[#FF6B4A] inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6B4A]" />
                    </Link>
                    <span className="text-xs font-mono text-[#8A90A0]">
                      {proj.timeline}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQs */}
        {service.faqs && <FAQSection faqs={service.faqs} />}

        {/* Closing CTA */}
        <ClosingCTA />
      </div>
    </div>
  );
}
