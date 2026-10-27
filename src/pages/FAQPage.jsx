import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, MessageSquare, Search } from 'lucide-react';
import SEO from '../components/seo/SEO';
import { companyData } from '../data/companyData';
import { createBreadcrumbSchema, createFAQSchema } from '../data/seoSchemas';
import Reveal from '../components/motion/Reveal';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allFaqs = [
    {
      q: "How much does a website cost?",
      a: "Website development at TechCrestaX starts from ₹7,000+. Final pricing depends on the number of pages, design complexity, third-party integrations (such as payment gateways or appointment booking), content preparation, and custom functionality. Domain and hosting charges, if applicable, are quoted separately.",
      category: "Pricing & Scope"
    },
    {
      q: "What is the starting website development price?",
      a: "Our verified starting base rate is ₹7,000+ for standard business websites. This base includes custom mobile-responsive design, modern React architecture, technical on-page SEO, WhatsApp/email routing, and 1 full year of free website maintenance.",
      category: "Pricing & Scope"
    },
    {
      q: "How long does website development take?",
      a: "Timelines depend on project scope and technical requirements. Standard business websites typically deliver in 1 to 2 weeks through agile milestones. More complex platforms (such as multi-vendor storefronts or doctor appointment systems) take 2 to 4 weeks with weekly progress reviews.",
      category: "Process & Timelines"
    },
    {
      q: "Will my website work on mobile devices and tablets?",
      a: "Yes, 100%. Every website we build is engineered mobile-first and tested rigorously across smartphones, tablets, laptops, and wide monitors. We ensure zero horizontal layout shifts, readable typography, and touch-optimized navigation.",
      category: "Technical & Quality"
    },
    {
      q: "Can you redesign an existing website without losing SEO rankings?",
      a: "Yes. When redesigning an existing website, we analyze your current URLs, preserve established page hierarchy, and implement appropriate 301 redirects where needed to safeguard your existing Google search visibility.",
      category: "Services"
    },
    {
      q: "Do you develop e-commerce websites and custom platforms?",
      a: "Yes. In addition to marketing websites, we build specialized e-commerce storefronts (such as BLKMND fashion e-commerce) and full-featured web applications (such as Scalpel.in doctor appointment platform) with custom workflows and databases.",
      category: "Services"
    },
    {
      q: "Is website maintenance included in the project?",
      a: "Yes. Every website built by TechCrestaX includes 1 full year (12 months) of free website maintenance and bug fix support. This covers operational stability, technical fixes, and performance upkeep at zero extra cost.",
      category: "Maintenance"
    },
    {
      q: "What happens after the first year of maintenance?",
      a: "After the first free year, ongoing annual maintenance is available at an affordable flat rate of ₹5,000 per year. Renewal is completely optional with no lock-in contracts.",
      category: "Maintenance"
    },
    {
      q: "Are domain and hosting charges included in the starting price?",
      a: "Domain registration and hosting charges are quoted separately based on your preferred domain extension (.com, .in, etc.) and hosting setup (such as Vercel, Hostinger, AWS, or custom servers). We configure DNS and SSL records directly on your accounts so you retain total ownership.",
      category: "Pricing & Scope"
    },
    {
      q: "How can I start a project with TechCrestaX?",
      a: "You can start by submitting an inquiry through our Contact page or messaging our engineering team directly on WhatsApp. We will discuss your goals, outline requirements, and provide a clear, itemized proposal.",
      category: "Getting Started"
    },
    {
      q: "How can I discuss my project through WhatsApp?",
      a: "You can click any 'Chat on WhatsApp' button across the website. It will open a direct chat with TechCrestaX where you can send your project details, ask questions, and receive prompt updates.",
      category: "Getting Started"
    },
    {
      q: "What information should I provide when requesting a quote?",
      a: "To help us provide an accurate quote, share: (1) your business type and target audience, (2) preferred number of pages, (3) any reference websites you like, (4) specific functionality needed (e.g., booking form, shopping cart), and (5) your target timeline.",
      category: "Getting Started"
    }
  ];

  const filteredFaqs = allFaqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@graph": [
      createBreadcrumbSchema([
        { label: 'Home', to: '/' },
        { label: 'FAQ' }
      ]),
      createFAQSchema(
        allFaqs.map((f, i) => ({
          id: i + 1,
          question: f.q,
          answer: f.a
        }))
      )
    ]
  };

  return (
    <div className="pt-8 sm:pt-12 pb-20 min-h-screen bg-[#F8F9FA] dark:bg-[#070A0F] transition-colors select-none">
      <SEO
        title="Frequently Asked Questions (FAQ) | TechCrestaX"
        description="Find answers to common questions about TechCrestaX website development costs (starting ₹7,000+), 1-year free maintenance, timelines, mobile responsiveness, and process."
        keywords={[
          "TechCrestaX FAQ",
          "website development cost FAQ",
          "website maintenance FAQ",
          "web design questions",
          "e-commerce development questions"
        ]}
        canonical="https://www.techcrestax.com/faq"
        schema={faqSchema}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* ====================================================
            HERO
           ==================================================== */}
        <Reveal>
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4F0] dark:bg-[#0D1420] border border-[#FF6B4A]/25 text-xs font-semibold text-[#FF6B4A] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#FF6B4A] animate-pulse" />
              <span className="uppercase tracking-widest text-[11px] font-mono font-bold">
                POPULAR QUESTIONS &amp; FAQS
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-[#0D1B2A] dark:text-white leading-[1.12]">
              Frequently Asked <span className="bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] bg-clip-text text-transparent">Questions</span>.
            </h1>

            <p className="text-base sm:text-lg text-[#4C5258] dark:text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
              Honest, verified answers about our website development costs, first-year free maintenance, timelines, and technical workflow.
            </p>

            {/* Search Bar */}
            <div className="pt-4 max-w-md mx-auto">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions (e.g. pricing, maintenance, timeline)..."
                  className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm rounded-full bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 text-[#0D1B2A] dark:text-white placeholder-[#7A828B] focus:outline-none focus:ring-2 focus:ring-[#FF6B4A] shadow-xs"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* ====================================================
            ACCORDION LIST
           ==================================================== */}
        <div className="space-y-3.5">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-[#0D1420] rounded-2xl border border-[#EBECEF] dark:border-white/10 text-sm text-[#4C5258] dark:text-[#94A3B8]">
              No questions found matching "{searchQuery}". Try searching for pricing, maintenance, or e-commerce.
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <Reveal key={index} delay={Math.min(index * 40, 300)}>
                  <div
                    className={`rounded-2xl bg-white dark:bg-[#0D1420] border transition-all duration-300 overflow-hidden shadow-2xs ${
                      isOpen
                        ? 'border-[#FF6B4A]/50 shadow-md shadow-[#FF6B4A]/5'
                        : 'border-[#EBECEF] dark:border-white/10 hover:border-[#FF6B4A]/30'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#0D1B2A] dark:text-white hover:text-[#FF6B4A] transition-colors cursor-pointer select-none"
                    >
                      <span className="flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-full transition-colors duration-200 ${isOpen ? 'bg-[#FF6B4A]' : 'bg-[#FF6B4A]/40'} shrink-0`} />
                        <span>{faq.q}</span>
                      </span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${isOpen ? 'bg-[#FFF4F0] text-[#FF6B4A]' : 'bg-transparent text-slate-400'}`}>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ease-out ${
                            isOpen ? 'rotate-180 text-[#FF6B4A]' : ''
                          }`}
                        />
                      </div>
                    </button>

                    {isOpen && (
                      <div 
                        id={`faq-answer-${index}`}
                        className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#4C5258] dark:text-[#94A3B8] leading-relaxed border-t border-slate-100 dark:border-white/5 animate-fade-in-up"
                      >
                        {faq.a}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })
          )}
        </div>

        {/* ====================================================
            STILL HAVE QUESTIONS?
           ==================================================== */}
        <Reveal delay={80}>
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0D1B2A] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-xl text-white">
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Have a Question That Isn't Answered Here?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Chat directly with our engineering team on WhatsApp or send us an inquiry.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={companyData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm button-press-scale shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ask on WhatsApp</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/15 font-bold text-xs sm:text-sm button-press-scale transition-all"
              >
                <span>Contact Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
