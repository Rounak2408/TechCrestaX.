import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, ArrowUpRight } from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Button from '../components/ui/Button';
import ClosingCTA from '../components/sections/ClosingCTA';
import { insightsData } from '../data/insightsData';
import SEO from '../components/seo/SEO';
import { createBreadcrumbSchema } from '../data/seoSchemas';

export default function InsightDetailPage() {
  const { slug } = useParams();
  const article = insightsData.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <SEO
          title="Article Not Found — TechCrestaX"
          description="The requested publication could not be found."
        />
        <h1 className="text-3xl font-extrabold mb-4 font-display text-[#151515] dark:text-white">Article Not Found</h1>
        <p className="text-[#666666] dark:text-[#94A3B8] mb-8 text-sm sm:text-base">The requested publication could not be found or has moved.</p>
        <Button to="/blog" variant="primary">
          Back to Blog
        </Button>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      createBreadcrumbSchema([
        { label: 'Home', to: '/' },
        { label: 'Blog', to: '/blog' },
        { label: article.title }
      ]),
      {
        "@type": "BlogPosting",
        "headline": article.title,
        "description": article.summary,
        "datePublished": article.date,
        "author": {
          "@type": "Person",
          "name": article.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "TechCrestaX",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.techcrestax.com/logo.png"
          }
        }
      }
    ]
  };

  const otherArticles = insightsData.filter((a) => a.slug !== slug);

  return (
    <div className="pt-8 sm:pt-12 pb-20 min-h-screen bg-[#F8F9FA] dark:bg-[#070A0F] transition-colors">
      <SEO
        title={`${article.title} — TechCrestaX Blog`}
        description={article.summary}
        keywords={[
          article.title,
          article.category,
          ...article.tags,
          "TechCrestaX blog",
          "web engineering guide"
        ]}
        canonical={`https://www.techcrestax.com/blog/${article.slug}`}
        ogType="article"
        schema={articleSchema}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Blog', to: '/blog' },
            { label: article.title },
          ]}
        />

        {/* Article Header */}
        <header className="mb-12 space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-[#FFF4F0] dark:bg-[#FF6B4A]/15 border border-[#FF6B4A]/20 text-xs font-mono font-bold text-[#FF6B4A]">
              {article.category}
            </span>
            <span className="text-xs font-mono text-[#4C5258] dark:text-[#94A3B8] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#FF6B4A]" />
              {article.readTime}
            </span>
            <span className="text-xs font-mono text-[#8A90A0]">
              • {article.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-[#0D1B2A] dark:text-white leading-[1.15]">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-[#4C5258] dark:text-[#94A3B8] leading-relaxed border-l-4 border-[#FF6B4A] pl-4 italic bg-[#FFF4F0]/40 dark:bg-[#FF6B4A]/5 py-2 rounded-r-xl">
            "{article.summary}"
          </p>

          <div className="pt-4 border-t border-[#EBECEF] dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#4C5258] dark:text-[#94A3B8]">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#FF6B4A]" />
              <span className="font-semibold text-[#0D1B2A] dark:text-white">{article.author}</span>
            </div>

            <div className="flex items-center gap-1.5">
              {article.tags.map((t) => (
                <span key={t} className="font-mono text-xs bg-white dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10 px-2.5 py-1 rounded-md text-[#4C5258] dark:text-[#94A3B8]">
                  #{t}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Article Body */}
        <article className="prose max-w-none space-y-8 leading-relaxed mb-14">
          {article.content.map((sec, idx) => (
            <div key={idx} className="space-y-4 bg-white dark:bg-[#0D1B2A] p-6 sm:p-8 rounded-3xl border border-[#EBECEF] dark:border-white/10 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0D1B2A] dark:text-white pb-3 border-b border-[#EBECEF] dark:border-white/10">
                {sec.heading}
              </h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base sm:text-[17px] leading-relaxed text-[#4C5258] dark:text-[#94A3B8]">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </article>

        {/* Author & Disclaimer Box */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10 mb-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
          <div>
            <h4 className="text-sm font-bold font-heading text-[#0D1B2A] dark:text-white mb-0.5">
              Published by {article.author}
            </h4>
            <p className="text-xs text-[#4C5258] dark:text-[#94A3B8]">
              Technical publication highlighting modern web engineering, Core Web Vitals optimization, and UI/UX design architecture.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F8F9FA] dark:bg-[#152336] border border-[#EBECEF] dark:border-white/10 hover:border-[#FF6B4A] text-xs font-bold text-[#0D1B2A] dark:text-white transition-all shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Articles</span>
          </Link>
        </div>

        {/* Related Articles */}
        {otherArticles.length > 0 && (
          <div className="mb-16 pt-10 border-t border-[#EBECEF] dark:border-white/10">
            <h3 className="text-2xl font-bold font-heading text-[#0D1B2A] dark:text-white mb-6">
              More Insights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherArticles.slice(0, 2).map((other) => (
                <div
                  key={other.id}
                  className="bg-white dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10 hover:border-[#FF6B4A]/60 rounded-3xl p-6 transition-all duration-300 shadow-xs hover:shadow-lg"
                >
                  <span className="text-[11px] font-mono text-[#FF6B4A] font-semibold uppercase block mb-1.5">
                    {other.category}
                  </span>
                  <h4 className="text-base font-bold font-heading text-[#0D1B2A] dark:text-white mb-2 leading-snug">
                    <Link to={`/blog/${other.slug}`} className="hover:text-[#FF6B4A] transition-colors">
                      {other.title}
                    </Link>
                  </h4>
                  <p className="text-xs text-[#4C5258] dark:text-[#94A3B8] line-clamp-2 mb-4">
                    {other.summary}
                  </p>
                  <Link
                    to={`/blog/${other.slug}`}
                    className="text-xs font-bold text-[#0D1B2A] dark:text-white hover:text-[#FF6B4A] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6B4A]" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Closing CTA */}
        <ClosingCTA />
      </div>
    </div>
  );
}
