import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Clock, Tag } from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Badge from '../components/ui/Badge';
import ClosingCTA from '../components/sections/ClosingCTA';
import { insightsData } from '../data/insightsData';
import SEO from '../components/seo/SEO';
import { createBreadcrumbSchema } from '../data/seoSchemas';

export default function InsightsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const insightsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      createBreadcrumbSchema([
        { label: 'Home', to: '/' },
        { label: 'Blog & Insights' }
      ]),
      {
        "@type": "Blog",
        "name": "TechCrestaX Engineering & Strategy Blog",
        "description": "Technical analysis, web performance strategies, and digital product principles.",
        "blogPost": insightsData.map((a) => ({
          "@type": "BlogPosting",
          "headline": a.title,
          "description": a.summary,
          "url": `https://www.techcrestax.com/blog/${a.slug}`,
          "datePublished": a.date,
          "author": {
            "@type": "Person",
            "name": a.author
          }
        }))
      }
    ]
  };

  return (
    <div className="pt-8 sm:pt-10 pb-16 min-h-screen bg-[#FFF9F6] dark:bg-[#0B0E14] transition-colors">
      <SEO
        title="Blog & Engineering Insights — TechCrestaX"
        description="Read engineering insights, frontend performance benchmarks, Core Web Vitals optimization guides, and UI/UX architecture strategies from TechCrestaX."
        keywords={[
          "TechCrestaX blog",
          "engineering insights",
          "Core Web Vitals guide",
          "frontend performance optimization",
          "design tokens architecture",
          "conversion rate optimization",
          "web engineering blog"
        ]}
        canonical="https://www.techcrestax.com/blog"
        schema={insightsSchema}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Blog & Insights' }]} />

        {/* Page Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E9] dark:bg-[#121824] border border-[#FCD5C8] dark:border-white/10 text-xs font-semibold text-[#FF572F] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF572F]" />
            <span className="uppercase tracking-widest text-[11px] font-mono">TECHNICAL METHODOLOGY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-[#151515] dark:text-white mb-4">
            Engineering Insights. <span className="text-[#FF572F]">Design</span> Philosophy.
          </h1>
          <p className="text-base sm:text-lg text-[#555555] dark:text-[#94A3B8] leading-relaxed font-normal">
            Technical analysis, frontend performance strategies, and user experience methodologies developed by the TechCrestaX engineering team.
          </p>

          <div className="mt-6 p-4 rounded-2xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 text-xs sm:text-sm text-[#555555] dark:text-[#94A3B8] shadow-xs">
            <span className="text-[#FF572F] font-mono font-bold uppercase tracking-wider block mb-1">
              Methodology &amp; Engineering Standards
            </span>
            Articles published here represent our technical approach to modern web architecture, Core Web Vitals sub-second loading, and robust design systems.
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {insightsData.map((article) => (
            <article
              key={article.id}
              className="group bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 hover:border-[#FF572F]/60 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#666666] dark:text-[#94A3B8] mb-4">
                  <span className="text-[#FF572F] font-bold px-2.5 py-1 rounded-full bg-[#FFF0E9] dark:bg-[#FF572F]/15 border border-[#FCD5C8] dark:border-white/10">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold font-display text-[#151515] dark:text-white group-hover:text-[#FF572F] transition-colors mb-3 leading-snug">
                  <Link to={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-[#555555] dark:text-[#94A3B8] leading-relaxed mb-6">
                  {article.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-[#555555] dark:text-[#94A3B8] bg-[#FFF9F6] dark:bg-[#1A2230] border border-[#F0E7E2] dark:border-white/10 px-2.5 py-1 rounded-lg"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#F0E7E2] dark:border-white/10 flex items-center justify-between text-xs sm:text-sm">
                <Link
                  to={`/blog/${article.slug}`}
                  className="font-bold text-[#151515] dark:text-white group-hover:text-[#FF572F] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FF572F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <span className="text-[#888888] dark:text-[#64748B] font-mono text-xs">
                  {article.date}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Closing CTA */}
        <ClosingCTA />
      </div>
    </div>
  );
}
