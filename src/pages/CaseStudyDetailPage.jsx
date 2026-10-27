import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Check, ShieldCheck, Clock, Layers, Zap, ExternalLink, Globe, CheckCircle2, MessageSquare } from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ClosingCTA from '../components/sections/ClosingCTA';
import { portfolioData } from '../data/portfolioData';
import { companyData } from '../data/companyData';
import SEO from '../components/seo/SEO';
import { createBreadcrumbSchema } from '../data/seoSchemas';

export default function CaseStudyDetailPage() {
  const { slug } = useParams();
  const project = portfolioData.find((p) => p.slug === slug || p.legacySlugs?.includes(slug));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <SEO
          title="Project Breakdown Not Found — TechCrestaX"
          description="The requested project breakdown could not be located."
        />
        <h1 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Project Not Found</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">The requested project breakdown could not be located in our portfolio catalog.</p>
        <Button to="/work" variant="primary">
          Back to Work Catalog
        </Button>
      </div>
    );
  }

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@graph": [
      createBreadcrumbSchema([
        { label: 'Home', to: '/' },
        { label: 'Work', to: '/work' },
        { label: project.title }
      ]),
      {
        "@type": "CreativeWork",
        "name": `${project.title} — ${project.subtitle}`,
        "headline": project.title,
        "description": project.summary,
        "url": project.liveUrl || `https://www.techcrestax.com/work/${project.slug}`,
        "author": {
          "@type": "Organization",
          "name": "TechCrestaX",
          "url": "https://www.techcrestax.com"
        }
      }
    ]
  };

  const otherProjects = portfolioData.filter((p) => p.id !== project.id);

  return (
    <div className="pt-8 sm:pt-12 pb-20 bg-[#F8F9FA] dark:bg-[#070A0F] min-h-screen transition-colors">
      <SEO
        title={`${project.title} — ${project.subtitle} | TechCrestaX Case Study`}
        description={project.summary}
        keywords={[
          project.title,
          project.category,
          ...project.techStack,
          "TechCrestaX client project",
          "web engineering deliverables",
          "digital agency Rajkot"
        ]}
        canonical={`https://www.techcrestax.com/work/${project.slug}`}
        schema={caseStudySchema}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Work', to: '/work' },
            { label: project.title },
          ]}
        />

        {/* Case Study Header Banner (Alpha Agency Hierarchy) */}
        <div className="bg-white dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10 rounded-3xl p-6 sm:p-12 mb-10 shadow-xs relative overflow-hidden transition-colors">
          <div className="max-w-4xl space-y-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#FFF4F0] dark:bg-[#FF6B4A]/15 border border-[#FF6B4A]/20 text-[#FF6B4A]">
                {project.badge}
              </span>
              <span className="text-xs font-mono text-[#4C5258] dark:text-[#94A3B8] bg-[#F8F9FA] dark:bg-[#152336] px-3 py-1 rounded-full border border-[#EBECEF] dark:border-white/10">
                {project.category}
              </span>
              
              {project.isLive ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live Production
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#8A90A0] bg-[#F8F9FA] dark:bg-[#152336] border border-[#EBECEF] dark:border-white/10">
                  {project.verifiedStatus}
                </span>
              )}
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-[#0D1B2A] dark:text-white leading-[1.12]">
                {project.title}
              </h1>
              <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#FF6B4A] via-[#FF7C42] to-[#FFB627] bg-clip-text text-transparent mt-1.5">
                {project.subtitle}
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#4C5258] dark:text-[#94A3B8] leading-relaxed font-normal">
              {project.summary}
            </p>

            {/* Quick Meta Grid */}
            <div className="pt-6 border-t border-[#EBECEF] dark:border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase text-[#8A90A0] font-semibold block mb-1">
                  Deliverable Role
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#0D1B2A] dark:text-white">
                  {project.type}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-[#8A90A0] font-semibold block mb-1">
                  Industry / Sector
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#0D1B2A] dark:text-white">
                  {project.industry}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-[#8A90A0] font-semibold block mb-1">
                  Sprint Turnaround
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#FF6B4A]">
                  {project.timeline}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-[#8A90A0] font-semibold block mb-1">
                  Agency Attribution
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#0D1B2A] dark:text-white">
                  {project.attribution}
                </span>
              </div>
            </div>

            {/* Live Link Button if available */}
            {project.liveUrl && (
              <div className="pt-4 flex items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D1B2A] text-white dark:bg-white dark:text-[#0D1B2A] font-bold text-xs sm:text-sm hover:opacity-90 transition-opacity shadow-sm"
                >
                  <Globe className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
                  <span>Visit Live Website ({project.liveUrl.replace('https://', '').replace('/', '')})</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Browser Mockup Showcase Container */}
        <div className="mb-14 rounded-3xl border border-[#EBECEF] dark:border-white/10 bg-white dark:bg-[#0D1B2A] shadow-xl overflow-hidden">
          {/* Header Frame */}
          <div className="bg-[#F8F9FA] dark:bg-[#152336] px-4 py-3 border-b border-[#EBECEF] dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF6B4A]/90 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#FFB627]/90 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#8FC658]/90 inline-block" />
            </div>

            <div className="flex items-center gap-1.5 bg-white dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10 px-4 py-1 rounded-full text-xs font-mono text-[#0D1B2A] dark:text-white">
              <Globe className="w-3.5 h-3.5 text-emerald-500" />
              <span>{project.liveUrl || `status://${project.slug}.techcrestax`}</span>
            </div>

            <div className="text-[11px] font-mono text-[#8A90A0] hidden sm:block">
              {project.verifiedStatus}
            </div>
          </div>

          {/* Project Architecture Showcase Canvas with Project Picture */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] bg-slate-950 overflow-hidden group">
            {project.image && (
              <img
                src={project.image}
                alt={`${project.title} Showcase`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-black/30 pointer-events-none" />

            {/* Top-left Category Badge */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
              {project.badgeCategory || project.type}
            </div>

            {/* Bottom-right Result Badge */}
            {project.resultBadge && (
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-950/85 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{project.resultBadge}</span>
              </div>
            )}

            {/* Bottom Info Banner */}
            <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div className="text-white max-w-xl">
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                  {project.title} Digital Experience
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-2">
                  {project.summary}
                </p>
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0D1B2A] hover:bg-[#FF6B4A] hover:text-white font-semibold text-xs sm:text-sm transition-all shadow-md shrink-0"
                >
                  <Globe className="w-4 h-4 text-emerald-600" />
                  <span>Launch Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Narrative Columns: Problem & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          <div className="bg-white dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10 rounded-3xl p-7 sm:p-9 space-y-3 shadow-xs">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-500 block">
              01. The Context &amp; Objectives
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0D1B2A] dark:text-white">
              Client Challenge
            </h2>
            <p className="text-sm sm:text-base text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="bg-white dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10 rounded-3xl p-7 sm:p-9 space-y-3 shadow-xs">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF6B4A] block">
              02. The Engineering Delivery
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0D1B2A] dark:text-white">
              TechCrestaX Solution
            </h2>
            <p className="text-sm sm:text-base text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features & Deliverables */}
        <div className="bg-white dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10 rounded-3xl p-6 sm:p-10 mb-14 space-y-10 shadow-xs">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0D1B2A] dark:text-white mb-5">
              Key Engineering Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-[#F8F9FA] dark:bg-[#152336] border border-[#EBECEF] dark:border-white/10 rounded-2xl p-4">
                  <CheckCircle2 className="w-4 h-4 text-[#8FC658] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#0D1B2A] dark:text-white leading-relaxed font-medium">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#EBECEF] dark:border-white/10">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0D1B2A] dark:text-white mb-5">
              Verified Project Deliverables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {project.deliverables.map((del, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-[#F8F9FA] dark:bg-[#152336] border border-[#EBECEF] dark:border-white/10 rounded-2xl p-4">
                  <Layers className="w-4 h-4 text-[#FF6B4A] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
                    {del}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Start Similar Project Box (Alpha Agency Obsidian Style) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0D1B2A] text-white border border-white/10 mb-16 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#FF6B4A]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 text-center sm:text-left relative z-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#FFB627] font-bold">
              Transparent Sprints Starting at ₹7,000+
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Need a web platform like {project.title}?
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] max-w-xl">
              Every build includes 1 full year of free website maintenance, 100% full source code ownership, and responsive milestone previews.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto relative z-10">
            <Link
              to="/contact"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              <span>Request Estimate</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href={companyData.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 font-semibold text-xs sm:text-sm transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>

        {/* Explore Related Authentic Work */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold font-heading text-[#0D1B2A] dark:text-white">
              Explore Related Client Projects
            </h3>
            <Link to="/work" className="text-xs font-bold text-[#FF6B4A] hover:underline">
              View All 11 Projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.slice(0, 3).map((p) => (
              <div
                key={p.id}
                className="bg-white dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10 hover:border-[#FF6B4A]/60 rounded-3xl p-6 transition-all shadow-xs flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono uppercase bg-[#F8F9FA] dark:bg-[#152336] text-[#4C5258] dark:text-[#94A3B8] px-2.5 py-0.5 rounded-md">
                      {p.category}
                    </span>
                    {p.isLive && (
                      <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                        Live
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-bold font-heading text-[#0D1B2A] dark:text-white mb-1 group-hover:text-[#FF6B4A] transition-colors">
                    <Link to={`/work/${p.slug}`}>
                      {p.title}
                    </Link>
                  </h4>
                  <p className="text-xs font-mono text-[#8A90A0] mb-3">
                    {p.subtitle}
                  </p>
                  <p className="text-xs text-[#4C5258] dark:text-[#94A3B8] line-clamp-2 mb-5">
                    {p.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EBECEF] dark:border-white/10 flex items-center justify-between text-xs">
                  <Link to={`/work/${p.slug}`} className="font-bold text-[#0D1B2A] dark:text-white hover:text-[#FF6B4A] inline-flex items-center gap-1 transition-colors">
                    <span>Read Breakdown</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6B4A]" />
                  </Link>
                  <span className="text-[#8A90A0] font-mono text-[11px]">
                    {p.timeline}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <ClosingCTA />
      </div>
    </div>
  );
}
