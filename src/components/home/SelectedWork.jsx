import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Globe } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function SelectedWork() {
  // Curated 6 verified real projects for homepage
  const featuredIds = [
    'blkmnd',
    'scalpel-in',
    'sahyog-sagar',
    'agriqen-seeds',
    'yog4you',
    'dew-drops-tourism'
  ];

  const featuredProjects = portfolioData.filter(p => featuredIds.includes(p.id) && p.isLive);

  return (
    <section 
      className="py-12 sm:py-16 md:py-20 bg-[#FFF9F6] dark:bg-[#0B0E14] transition-colors"
      aria-label="Selected Work"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF572F] font-bold">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#151515] dark:text-white tracking-tight">
              Digital Experiences Built for Real Businesses
            </h2>
            <p className="text-base text-[#666666] dark:text-[#94A3B8] leading-relaxed">
              Explore authentic platforms, business websites, and digital storefronts engineered by TechCrestaX.
            </p>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#FF572F] hover:text-[#E94725] transition-colors group self-start md:self-auto"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 overflow-hidden hover:border-[#FF572F]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Image Container with live URL pill */}
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-white border border-white/15">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{project.badgeCategory || project.category}</span>
                    </span>
                  </div>

                  {/* Live link indicator */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF572F] hover:bg-[#E94725] text-white text-xs font-bold shadow-md transition-all group/btn"
                      aria-label={`Visit live website for ${project.title}`}
                    >
                      <span>Visit Live</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold font-display text-[#151515] dark:text-white group-hover:text-[#FF572F] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-[#FF572F] mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#666666] dark:text-[#94A3B8] leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>
                </div>
              </div>

              {/* Bottom footer bar */}
              <div className="px-6 py-4 bg-[#FFF9F6] dark:bg-[#1A2230] border-t border-[#F0E7E2] dark:border-white/10 flex items-center justify-between text-xs">
                <span className="text-[#666666] dark:text-[#94A3B8] font-mono">
                  {project.industry}
                </span>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#FF572F] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Live Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-amber-500 font-mono text-[11px]">In Development</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FF572F] hover:bg-[#E94725] text-white font-bold text-sm transition-all duration-200 shadow-md shadow-[#FF572F]/25 hover:-translate-y-0.5"
          >
            <span>View Full Portfolio & Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
