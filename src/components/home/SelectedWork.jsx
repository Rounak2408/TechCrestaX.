import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import Reveal from '../motion/Reveal';

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
      className="py-16 sm:py-20 md:py-24 bg-white dark:bg-[#070A0F] border-b border-[#EBECEF] dark:border-white/10 transition-colors select-none"
      aria-label="Selected Work"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header (Alpha Agency: Case Studies & Portfolio) */}
        <Reveal y={20} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4F0] dark:bg-[#0D1420] border border-[#FF6B4A]/25 text-xs font-semibold text-[#FF6B4A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A] animate-pulse" />
              <span className="uppercase tracking-widest text-[11px] font-mono font-bold">
                PORTFOLIO &amp; CASE STUDIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#0D1B2A] dark:text-white tracking-tight">
              Recent Projects That Speak For Themselves.
            </h2>
            <p className="text-base text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
              Explore authentic platforms, business websites, and digital storefronts engineered by TechCrestaX.
            </p>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6B4A] hover:text-[#FF7C42] transition-colors group self-start md:self-auto cursor-pointer pb-1 shrink-0"
          >
            <span>View All 30+ Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={Math.min(index * 80, 400)} y={24} as="div" className="h-full">
              <div
                className="card-hover-lift group h-full rounded-3xl bg-[#F8F9FA] dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 overflow-hidden hover:border-[#FF6B4A]/50 hover:shadow-xl hover:shadow-[#FF6B4A]/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Visual Image Container with live URL pill */}
                  <div className="relative aspect-[16/10] bg-[#0D1B2A] overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} Preview`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-white border border-white/15">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8FC658]" />
                        <span>{project.badgeCategory || project.category}</span>
                      </span>
                    </div>

                    {/* Live link indicator */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] hover:from-[#FF7C42] hover:to-[#FFA700] text-white text-xs font-bold shadow-md transition-all group/btn"
                        aria-label={`Visit live website for ${project.title}`}
                      >
                        <span>Visit Live</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="p-6 space-y-2.5">
                    <div>
                      <h3 className="text-xl font-bold font-display text-[#0D1B2A] dark:text-white group-hover:text-[#FF6B4A] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#FF6B4A] mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#4C5258] dark:text-[#94A3B8] leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>
                </div>

                {/* Bottom footer bar */}
                <div className="px-6 py-4 bg-white dark:bg-white/5 border-t border-[#EBECEF] dark:border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[#4C5258] dark:text-[#94A3B8] font-mono text-[11px]">
                    {project.industry}
                  </span>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#FF6B4A] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Live Website</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-amber-500 font-mono text-[11px]">In Development</span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="pt-4 text-center">
          <Link
            to="/work"
            className="inline-flex items-center gap-3 pl-7 pr-2 py-2.5 rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] hover:from-[#FF7C42] hover:to-[#FFA700] text-white font-bold text-sm transition-all duration-300 shadow-md shadow-[#FF6B4A]/25 hover:shadow-lg hover:shadow-[#FF6B4A]/35 hover:-translate-y-0.5 cursor-pointer group"
          >
            <span>View Full Portfolio &amp; Case Studies</span>
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#FF6B4A] transition-all">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
