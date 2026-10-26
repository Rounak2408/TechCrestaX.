import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, ShieldCheck, Tag, Globe, Clock } from 'lucide-react';
import SEO from '../components/seo/SEO';
import { portfolioData } from '../data/portfolioData';
import { createBreadcrumbSchema } from '../data/seoSchemas';

export default function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'platforms', label: 'Web Platforms & Portals' },
    { id: 'website', label: 'Business Websites' },
    { id: 'healthcare', label: 'Healthcare & Wellness' },
    { id: 'staging', label: 'In Development' },
  ];

  const filteredProjects = portfolioData.filter((project) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'staging') return !project.isLive;
    if (selectedFilter === 'ecommerce') return project.categoryKey === 'ecommerce';
    if (selectedFilter === 'platforms') return project.categoryKey === 'platforms';
    if (selectedFilter === 'website') return project.categoryKey === 'website';
    if (selectedFilter === 'healthcare') {
      return project.id === 'scalpel-in' || project.id === 'yog4you' || project.id === 'divine-mane-naturals';
    }
    return true;
  });

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@graph": [
      createBreadcrumbSchema([
        { label: 'Home', to: '/' },
        { label: 'Portfolio & Work' }
      ]),
      {
        "@type": "CollectionPage",
        "@id": "https://www.techcrestax.com/work#webpage",
        "url": "https://www.techcrestax.com/work",
        "name": "TechCrestaX Portfolio — Verified Client Work",
        "description": "Explore digital platforms, corporate websites, and e-commerce storefronts engineered by TechCrestaX across diverse industries."
      }
    ]
  };

  return (
    <div className="pt-8 sm:pt-10 pb-16 min-h-screen bg-[#FFF9F6] dark:bg-[#0B0E14] transition-colors">
      <SEO
        title="Work / Portfolio — Verified Client Projects | TechCrestaX"
        description="Explore digital experiences created for businesses across different industries by TechCrestaX. Verified live websites for Scalpel.in, BLKMND, Agrigen Seeds, and more."
        keywords={[
          "TechCrestaX portfolio",
          "TechCrestaX client work",
          "Scalpel in website",
          "BLKMND ecommerce",
          "web design portfolio Rajkot",
          "verified web development projects"
        ]}
        canonical="https://www.techcrestax.com/work"
        schema={portfolioSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* ====================================================
            HERO
           ==================================================== */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 text-xs font-semibold text-[#FF572F] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#FF572F] animate-pulse" />
            <span className="uppercase tracking-widest text-[11px] font-mono">
              VERIFIED PORTFOLIO
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-[#151515] dark:text-white leading-[1.12]">
            Work That Brings <span className="text-[#FF572F]">Ideas to Life</span>.
          </h1>

          <p className="text-base sm:text-lg text-[#555555] dark:text-[#94A3B8] leading-relaxed">
            Explore digital experiences created for businesses across different industries. Every project represents real business goals, clean code, and authentic delivery.
          </p>
        </div>

        {/* ====================================================
            CATEGORY FILTER TABS
           ==================================================== */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {filterCategories.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 cursor-pointer select-none ${
                  isActive
                    ? 'bg-[#FF572F] text-white shadow-md shadow-[#FF572F]/20 font-bold'
                    : 'bg-white dark:bg-[#121824] text-[#555555] dark:text-[#94A3B8] border border-[#F0E7E2] dark:border-white/10 hover:border-[#FF572F] hover:text-[#151515] dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ====================================================
            PROJECTS GRID
           ==================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 overflow-hidden hover:border-[#FF572F]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image Banner with Live URL Badge */}
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} Interface`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                  {/* Status / Category Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-mono text-white border border-white/15">
                      <span className={`w-1.5 h-1.5 rounded-full ${project.isLive ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                      <span>{project.badgeCategory || project.category}</span>
                    </span>
                  </div>

                  {/* Live Link Button */}
                  {project.isLive && project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-3.5 right-3.5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FF572F] hover:bg-[#E94725] text-white text-xs font-bold shadow-md transition-all group/btn"
                      aria-label={`Open ${project.title} live website`}
                    >
                      <span>Visit Live</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  )}

                  {!project.isLive && (
                    <div className="absolute bottom-3.5 right-3.5 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/90 backdrop-blur-md text-white text-[11px] font-bold">
                      <Clock className="w-3 h-3" />
                      <span>In Development</span>
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold font-display text-[#151515] dark:text-white group-hover:text-[#FF572F] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-[#FF572F] mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#666666] dark:text-[#94A3B8] leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tech stack chips */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-[#FFF9F6] dark:bg-[#1A2230] border border-[#F0E7E2] dark:border-white/10 text-[10px] font-mono text-[#555555] dark:text-[#94A3B8]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 sm:px-7 py-4 bg-[#FFF9F6] dark:bg-[#1A2230] border-t border-[#F0E7E2] dark:border-white/10 flex items-center justify-between text-xs">
                <span className="text-[#666666] dark:text-[#94A3B8] font-mono">
                  {project.industry}
                </span>

                {project.isLive && project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#FF572F] hover:underline inline-flex items-center gap-1"
                  >
                    <span>{project.liveUrl.replace('https://', '').replace('www.', '').replace('/', '')}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-amber-600 dark:text-amber-400 font-mono text-[11px] font-semibold">
                    Staging Architecture
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ====================================================
            CLOSING PROJECT INQUIRY CTA
           ==================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 text-center space-y-4 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#151515] dark:text-white">
            Have a Similar Project to Build?
          </h2>
          <p className="text-sm text-[#666666] dark:text-[#94A3B8] max-w-lg mx-auto">
            From single-page marketing flagships to custom web portals, we can build a solution tailored to your goals.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FF572F] hover:bg-[#E94725] text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5"
            >
              <span>Discuss Your Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
