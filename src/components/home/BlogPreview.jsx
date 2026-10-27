import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, ArrowUpRight } from 'lucide-react';
import { insightsData } from '../../data/insightsData';
import Reveal from '../motion/Reveal';

export default function BlogPreview() {
  return (
    <section 
      className="py-16 sm:py-20 md:py-24 bg-[#F8F9FA] dark:bg-[#070A0F] border-b border-[#EBECEF] dark:border-white/10 transition-colors select-none"
      aria-label="Blog and Engineering Insights Preview"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header (Alpha Agency: BLOG & NEWS -> Get the Latest Insights from Our Blog & Articles.) */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4F0] dark:bg-[#0D1420] border border-[#FF6B4A]/25 text-xs font-semibold text-[#FF6B4A]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A] animate-pulse" />
                <span className="uppercase tracking-widest text-[11px] font-mono font-bold">
                  BLOG &amp; NEWS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#0D1B2A] dark:text-white tracking-tight">
                Get the Latest Insights from Our Blog &amp; Articles.
              </h2>
              <p className="text-base text-[#4C5258] dark:text-[#94A3B8] leading-relaxed">
                Practical technical analyses, web performance strategies, and digital product architecture written by our engineering team.
              </p>
            </div>

            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6B4A] hover:text-[#FF7C42] transition-colors group self-start md:self-auto cursor-pointer pb-1 shrink-0"
            >
              <span>View All Insights</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>
          </div>
        </Reveal>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {insightsData.map((article, idx) => (
            <Reveal key={article.id} delay={idx * 100} className="h-full">
              <article
                className="group h-full bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 hover:border-[#FF6B4A]/50 rounded-3xl p-7 sm:p-9 transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-[#FF6B4A]/10 card-hover-lift flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#4C5258] dark:text-[#94A3B8] mb-4">
                    <span className="text-[#FF6B4A] font-bold px-3 py-1 rounded-full bg-[#FFF4F0] dark:bg-[#FF6B4A]/10 border border-[#FF6B4A]/25">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#FF6B4A]" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-[#0D1B2A] dark:text-white group-hover:text-[#FF6B4A] transition-colors mb-3 leading-snug">
                    <Link to={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-sm sm:text-base text-[#4C5258] dark:text-[#94A3B8] leading-relaxed mb-6">
                    {article.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100/70 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 px-2.5 py-1 rounded-lg"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs sm:text-sm">
                  <Link
                    to={`/blog/${article.slug}`}
                    className="font-bold text-[#0D1B2A] dark:text-white group-hover:text-[#FF6B4A] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Read Article</span>
                    <span className="w-6 h-6 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center group-hover:bg-[#FF6B4A] group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>

                  <span className="text-slate-400 font-mono text-xs">
                    {article.date}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
