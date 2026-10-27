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
    <div className="pt-8 sm:pt-12 pb-20 min-h-screen bg-[#F8F9FA] dark:bg-[#070A0F] transition-colors">
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

        {/* Page Header (Alpha Agency Hierarchy) */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10 text-xs font-semibold text-[#FF6B4A] mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#FF6B4A] animate-pulse" />
            <span className="uppercase tracking-widest text-[11px] font-mono">BLOG &amp; ARTICLES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-[#0D1B2A] dark:text-white mb-4 leading-[1.12]">
            Engineering Insights. <span className="bg-gradient-to-r from-[#FF6B4A] via-[#FF7C42] to-[#FFB627] bg-clip-text text-transparent">Design Philosophy</span>.
          </h1>
          <p className="text-base sm:text-lg text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
            Technical analysis, frontend performance strategies, and digital product principles developed by the TechCrestaX engineering team.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {insightsData.map((article) => (
            <article
              key={article.id}
              className="group bg-white dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10 hover:border-[#FF6B4A]/60 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#8A90A0] mb-4">
                  <span className="text-[#FF6B4A] font-bold px-3 py-1 rounded-full bg-[#FFF4F0] dark:bg-[#FF6B4A]/15 border border-[#FF6B4A]/20">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1.5 font-medium text-[#4C5258] dark:text-[#94A3B8]">
                    <Clock className="w-3.5 h-3.5 text-[#FF6B4A]" />
                    {article.readTime}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0D1B2A] dark:text-white group-hover:text-[#FF6B4A] transition-colors mb-3 leading-snug">
                  <Link to={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-[#4C5258] dark:text-[#94A3B8] leading-relaxed mb-6">
                  {article.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-[#4C5258] dark:text-[#94A3B8] bg-[#F8F9FA] dark:bg-[#152336] border border-[#EBECEF] dark:border-white/10 px-2.5 py-1 rounded-lg"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#EBECEF] dark:border-white/10 flex items-center justify-between text-xs sm:text-sm">
                <Link
                  to={`/blog/${article.slug}`}
                  className="font-bold text-[#0D1B2A] dark:text-white group-hover:text-[#FF6B4A] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FF6B4A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <span className="text-[#8A90A0] font-mono text-xs">
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
