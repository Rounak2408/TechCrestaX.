import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Compass } from 'lucide-react';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

import SEO from '../components/seo/SEO';

export default function NotFoundPage() {
  return (
    <div className="py-20 lg:py-28 flex items-center justify-center bg-[#F8F9FA] dark:bg-[#070A0F] min-h-[75vh] transition-colors">
      <SEO
        title="404 — Page Not Found | TechCrestaX"
        description="The requested page could not be located on TechCrestaX."
      />
      <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
        <div className="inline-block">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10 text-xs font-semibold text-[#FF6B4A] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#FF6B4A] animate-pulse" />
            <span className="uppercase tracking-widest text-[11px] font-mono">404 ERROR • PATH UNRESOLVED</span>
          </div>
        </div>

        <div className="relative">
          <div className="text-8xl sm:text-9xl font-black font-heading text-slate-200/70 dark:text-white/5 select-none tracking-widest">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#0D1B2A] dark:text-white">
              Route Not Found
            </h1>
          </div>
        </div>

        <p className="text-base sm:text-lg text-[#4C5258] dark:text-[#94A3B8] max-w-lg mx-auto leading-relaxed">
          The requested coordinate or endpoint does not exist within the TechCrestaX architecture.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            to="/"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10 hover:border-[#FF6B4A] text-xs sm:text-sm font-semibold text-[#0D1B2A] dark:text-white transition-all"
          >
            <span>Explore Services</span>
          </Link>
        </div>

        {/* Helpful Route Navigation */}
        <div className="pt-10 border-t border-[#EBECEF] dark:border-white/10">
          <span className="text-xs font-mono uppercase text-[#8A90A0] font-semibold block mb-3">
            Suggested Navigation Destinations:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <Link
              to="/work"
              className="px-4 py-2 rounded-full bg-white dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10 text-[#0D1B2A] dark:text-white hover:border-[#FF6B4A] transition-colors shadow-2xs font-medium"
            >
              Portfolio &amp; Work
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 rounded-full bg-white dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10 text-[#0D1B2A] dark:text-white hover:border-[#FF6B4A] transition-colors shadow-2xs font-medium"
            >
              About Studio
            </Link>
            <Link
              to="/blog"
              className="px-4 py-2 rounded-full bg-white dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10 text-[#0D1B2A] dark:text-white hover:border-[#FF6B4A] transition-colors shadow-2xs font-medium"
            >
              Blog &amp; Articles
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-full bg-white dark:bg-[#0D1B2A] border border-[#EBECEF] dark:border-white/10 text-[#0D1B2A] dark:text-white hover:border-[#FF6B4A] transition-colors shadow-2xs font-medium"
            >
              Contact Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
