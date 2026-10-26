import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { companyData } from '../../data/companyData';

export default function ClosingCTA() {
  return (
    <section 
      className="py-16 sm:py-20 bg-[#FFF9F6] dark:bg-[#0B0E14] relative overflow-hidden transition-colors"
      aria-label="Closing Call to Action"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="p-8 sm:p-14 rounded-3xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 shadow-xl space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0E9] dark:bg-[#FF572F]/15 border border-[#FCD5C8] dark:border-[#FF572F]/30 text-xs font-semibold text-[#FF572F]">
            <span className="w-2 h-2 rounded-full bg-[#FF572F] animate-pulse" />
            <span>LET'S BUILD SOMETHING GREAT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#151515] dark:text-white tracking-tight">
            Ready to Move Your Business Forward?
          </h2>

          <p className="text-base sm:text-lg text-[#555555] dark:text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
            Strategic design, modern React engineering, and 1 full year of free maintenance. Let's discuss your project.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#FF572F] hover:bg-[#E94725] text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-[#FF572F]/25 hover:shadow-[#FF572F]/40 hover:-translate-y-0.5 group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={companyData.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-emerald-500/10 hover:bg-emerald-500 text-emerald-600 hover:text-white dark:text-emerald-400 dark:hover:text-white border border-emerald-500/30 font-bold text-sm sm:text-base transition-all shadow-xs"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="pt-6 border-t border-[#F0E7E2] dark:border-white/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#666666] dark:text-[#94A3B8]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF572F]" />
              <span>100% Code Ownership</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF572F]" />
              <span>1 Year Free Maintenance</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FF572F]" />
              <span>Direct WhatsApp Communication</span>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
