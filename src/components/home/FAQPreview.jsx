import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react';

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
      className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#070A0F] border-y border-[#F0E7E2] dark:border-white/10 transition-colors"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-8 sm:mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF572F] font-bold">
            COMMON QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#151515] dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#666666] dark:text-[#94A3B8] max-w-xl mx-auto">
            Everything you need to know about our web engineering, pricing, and project workflow.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#FFF9F6] dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#151515] dark:text-white hover:text-[#FF572F] dark:hover:text-[#FF572F] transition-colors cursor-pointer select-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF572F]" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#FF572F] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#555555] dark:text-[#94A3B8] leading-relaxed border-t border-[#F0E7E2]/60 dark:border-white/5 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Link to Full FAQ Page */}
        <div className="mt-10 text-center">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#FF572F] hover:text-[#E94725] transition-colors group"
          >
            <span>Have More Questions? View Complete FAQ Page</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
