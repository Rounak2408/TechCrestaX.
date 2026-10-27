import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, ArrowUpRight, BookOpen } from 'lucide-react';
import { insightsData } from '../../data/insightsData';

export default function BlogPreview() {
  return (
    <section 
      className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#070A0F] border-y border-[#F0E7E2] dark:border-white/10 transition-colors"
      aria-label="Blog and Engineering Insights Preview"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF572F] font-bold">
              ENGINEERING &amp; STRATEGY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#151515] dark:text-white tracking-tight">
              Insights from Our Studio
            </h2>
            <p className="text-base text-[#666666] dark:text-[#94A3B8] leading-relaxed">
              Practical technical analyses, web performance strategies, and digital product architecture written by our team.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#FF572F] hover:text-[#E94725] transition-colors group self-start md:self-auto cursor-pointer"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {insightsData.map((article) => (
            <article
              key={article.id}
              className="group bg-[#FFF9F6] dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 hover:border-[#FF572F]/60 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
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

                <h3 className="text-xl sm:text-2xl font-bold font-display text-[#151515] dark:text-white group-hover:text-[#FF572F] transition-colors mb-3 leading-snug">
                  <Link to={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-sm sm:text-base text-[#555555] dark:text-[#94A3B8] leading-relaxed mb-6">
                  {article.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-[#555555] dark:text-[#94A3B8] bg-white dark:bg-[#1A2230] border border-[#F0E7E2] dark:border-white/10 px-2.5 py-1 rounded-lg"
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

      </div>
    </section>
  );
}
