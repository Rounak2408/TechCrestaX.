import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Reveal from '../motion/Reveal';

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is your starting website development price?",
      answer: "Website development at TechCrestaX starts from ₹7,000+. Final pricing depends on the number of pages, design complexity, custom integrations (such as payment gateways or appointment booking), content preparation, and custom functionality. Domain and hosting charges, if applicable, are quoted separately."
    },
    {
      question: "What does the first-year free maintenance cover?",
      answer: "Every website developed by TechCrestaX includes 1 full year (12 months) of free maintenance and bug fix warranty. This covers code stabilization, technical adjustments, performance checks, and security updates. After the first year, maintenance renewal is available at ₹5,000 per year."
    },
    {
      question: "How long does website development take to launch?",
      answer: "Timelines depend on scope and technical requirements. A standard business website is typically built in 1 to 2 weeks through structured agile milestones with live preview staging links shared at each step."
    },
    {
      question: "Will my website work properly on mobile phones and tablets?",
      answer: "Yes, 100%. Every website is engineered mobile-first and tested thoroughly across modern smartphone viewports, tablets, laptops, and ultra-wide screens to guarantee zero layout shift, fast load times, and touch-friendly navigation."
    },
    {
      question: "Do you develop e-commerce websites and custom platforms?",
      answer: "Yes. In addition to marketing websites, we engineer custom e-commerce stores (like BLKMND apparel) and specialized web platforms (such as Scalpel.in doctor appointment platforms) with catalog browsing, shopping carts, and custom workflows."
    },
    {
      question: "How can I start a project with TechCrestaX?",
      answer: "You can start by submitting a brief inquiry on our Contact page or by chatting with our engineering team directly on WhatsApp. We will discuss your goals, review your scope, and provide a transparent, itemized estimate."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section 
      className="py-16 sm:py-20 md:py-24 bg-white dark:bg-[#070A0F] border-b border-[#EBECEF] dark:border-white/10 transition-colors select-none"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header (Alpha Agency: POPULAR QUESTION -> Your Agency Questions Answered.) */}
        <Reveal>
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4F0] dark:bg-[#0D1420] border border-[#FF6B4A]/25 text-xs font-semibold text-[#FF6B4A] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A] animate-pulse" />
              <span className="uppercase tracking-widest text-[11px] font-mono font-bold">
                POPULAR QUESTION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#0D1B2A] dark:text-white tracking-tight">
              Your Agency Questions Answered.
            </h2>
            <p className="text-base text-[#4C5258] dark:text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
              Everything you need to know about our web engineering, pricing, and project workflow.
            </p>
          </div>
        </Reveal>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={index} delay={index * 50}>
                <div
                  className={`rounded-2xl bg-[#F8F9FA] dark:bg-[#0D1420] border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-[#FF6B4A]/50 shadow-md shadow-[#FF6B4A]/5' 
                      : 'border-[#EBECEF] dark:border-white/10 hover:border-[#FF6B4A]/30'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#0D1B2A] dark:text-white hover:text-[#FF6B4A] dark:hover:text-[#FF6B4A] transition-colors cursor-pointer select-none"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${isOpen ? 'bg-[#FF6B4A]' : 'bg-[#FF6B4A]/30'}`} />
                      <span>{faq.question}</span>
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${isOpen ? 'bg-[#FF6B4A]/10 text-[#FF6B4A]' : 'bg-slate-200/60 dark:bg-white/10 text-slate-500'}`}>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ease-out ${
                          isOpen ? 'rotate-180 text-[#FF6B4A]' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-[#4C5258] dark:text-[#94A3B8] leading-relaxed border-t border-[#EBECEF]/80 dark:border-white/5 animate-fade-in-up">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Link to Full FAQ Page */}
        <Reveal delay={150}>
          <div className="text-center pt-2">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6B4A] hover:text-[#FF7C42] transition-colors group"
            >
              <span>Have More Questions? View Complete FAQ Page</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
