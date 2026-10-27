import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, ShieldCheck, Tag, Globe, Clock } from 'lucide-react';
import SEO from '../components/seo/SEO';
import { portfolioData } from '../data/portfolioData';
import { createBreadcrumbSchema } from '../data/seoSchemas';
import Reveal from '../components/motion/Reveal';

export default function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filterCategories = [
    { id: 'all', label: 'All Projects (30+)' },
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
    <div className="pt-8 sm:pt-12 pb-20 min-h-screen bg-[#F8F9FA] dark:bg-[#070A0F] transition-colors select-none">
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
        <Reveal>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4F0] dark:bg-[#0D1420] border border-[#FF6B4A]/25 text-xs font-semibold text-[#FF6B4A] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#FF6B4A] animate-pulse" />
              <span className="uppercase tracking-widest text-[11px] font-mono font-bold">
                VERIFIED PORTFOLIO
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-[#0D1B2A] dark:text-white leading-[1.12]">
              Work That Brings <span className="bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] bg-clip-text text-transparent">Ideas to Life</span>.
            </h1>

            <p className="text-base sm:text-lg text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
              Explore digital experiences created for businesses across different industries. Every project represents real business goals, clean code, and authentic delivery.
            </p>
          </div>
        </Reveal>

        {/* ====================================================
            CATEGORY FILTER TABS (Alpha Agency Pills)
           ==================================================== */}
        <Reveal delay={60}>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filterCategories.map((tab) => {
              const isActive = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shrink-0 cursor-pointer select-none button-press-scale ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] text-white shadow-md shadow-[#FF6B4A]/25 font-bold'
                      : 'bg-white dark:bg-[#0D1420] text-[#4C5258] dark:text-[#94A3B8] border border-[#EBECEF] dark:border-white/10 hover:border-[#FF6B4A]/50 hover:text-[#0D1B2A] dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* ====================================================
            PROJECTS GRID
           ==================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 60} className="h-full">
              <div
                className="h-full rounded-3xl bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 overflow-hidden hover:border-[#FF6B4A]/50 hover:shadow-xl hover:shadow-[#FF6B4A]/10 card-hover-lift flex flex-col justify-between group transition-all"
              >
                <div>
                  {/* Visual Image Banner with Live URL Badge */}
                  <div className="relative aspect-[16/10] bg-[#0D1B2A] overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} Interface`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                    {/* Status / Category Badge */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-mono text-white border border-white/15">
                        <span className={`w-1.5 h-1.5 rounded-full ${project.isLive ? 'bg-[#8FC658]' : 'bg-[#FFB627]'}`} />
                        <span>{project.badgeCategory || project.category}</span>
                      </span>
                    </div>

                    {/* Live Link Button */}
                    {project.isLive && project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-3.5 right-3.5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] hover:from-[#FF7C42] hover:to-[#FFA700] text-white text-xs font-bold shadow-md button-press-scale transition-all group/btn"
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
                      <h3 className="text-xl font-bold font-display text-[#0D1B2A] dark:text-white group-hover:text-[#FF6B4A] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#FF6B4A] mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Tech stack chips */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-[#F8F9FA] dark:bg-white/5 border border-[#EBECEF] dark:border-white/10 text-[10px] font-mono text-[#4C5258] dark:text-[#94A3B8]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="px-6 sm:px-7 py-4 bg-[#F8F9FA] dark:bg-white/5 border-t border-[#EBECEF] dark:border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[#4C5258] dark:text-[#94A3B8] font-mono text-[11px]">
                    {project.industry}
                  </span>

                  {project.isLive && project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#FF6B4A] hover:underline inline-flex items-center gap-1 group/link"
                    >
                      <span>{project.liveUrl.replace('https://', '').replace('www.', '').replace('/', '')}</span>
                      <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  ) : (
                    <span className="text-amber-600 dark:text-amber-400 font-mono text-[11px] font-semibold">
                      Staging Architecture
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ====================================================
            CLOSING PROJECT INQUIRY CTA
           ==================================================== */}
        <Reveal delay={80}>
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0D1B2A] border border-white/10 text-center space-y-4 shadow-xl text-white">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Have a Similar Project to Build?
            </h2>
            <p className="text-sm text-slate-300 max-w-lg mx-auto">
              From single-page marketing flagships to custom web portals, we can build a solution tailored to your goals.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] hover:from-[#FF7C42] hover:to-[#FFA700] text-white font-bold text-sm shadow-md button-press-scale transition-all"
              >
                <span>Discuss Your Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
