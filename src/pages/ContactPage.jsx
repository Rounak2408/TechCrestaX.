import React, { useEffect } from 'react';
import { Mail, MapPin, MessageSquare, Clock, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';
import SEO from '../components/seo/SEO';
import ContactForm from '../components/forms/ContactForm';
import { companyData } from '../data/companyData';
import { organizationSchema, createBreadcrumbSchema } from '../data/seoSchemas';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      createBreadcrumbSchema([
        { label: 'Home', to: '/' },
        { label: 'Contact' }
      ]),
      {
        "@type": "ContactPage",
        "@id": "https://www.techcrestax.com/contact#webpage",
        "url": "https://www.techcrestax.com/contact",
        "name": "Contact TechCrestaX — Start a Project",
        "description": "Get in touch with TechCrestaX for website development, e-commerce, and web application projects. Direct WhatsApp and email consultations.",
        "mainEntity": organizationSchema
      }
    ]
  };

  return (
    <div className="pt-8 sm:pt-10 pb-16 min-h-screen bg-[#FFF9F6] dark:bg-[#0B0E14] transition-colors">
      <SEO
        title="Contact Us — Start Your Project | TechCrestaX"
        description="Let's build something great together. Submit your website or platform requirements to TechCrestaX or chat with our team directly on WhatsApp."
        keywords={[
          "contact TechCrestaX",
          "hire web developers Rajkot",
          "start website project",
          "TechCrestaX email",
          "TechCrestaX WhatsApp"
        ]}
        canonical="https://www.techcrestax.com/contact"
        schema={contactSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* ====================================================
            PAGE HEADER
           ==================================================== */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 text-xs font-semibold text-[#FF572F] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#FF572F] animate-pulse" />
            <span className="uppercase tracking-widest text-[11px] font-mono">
              PROJECT INQUIRIES & WHATSAPP
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-[#151515] dark:text-white leading-[1.12]">
            Let's Build Something <span className="text-[#FF572F]">Great Together</span>.
          </h1>

          <p className="text-base sm:text-lg text-[#555555] dark:text-[#94A3B8] leading-relaxed">
            Tell us about your business, project requirements, and goals. We respond with technical insights and an itemized quote within 24 hours.
          </p>
        </div>

        {/* ====================================================
            2-COLUMN CONTACT LAYOUT
           ==================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Verified Channels & WhatsApp Highlight */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary WhatsApp Card (MANDATORY: NO visible phone number!) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                  <MessageSquare className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h2 className="text-lg font-bold font-display text-[#151515] dark:text-white">
                    Direct WhatsApp Chat
                  </h2>
                  <p className="text-xs text-[#666666] dark:text-[#94A3B8]">
                    Fastest communication for active scopes
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#555555] dark:text-[#94A3B8] leading-relaxed">
                Connect directly with our engineering team on WhatsApp. Share ideas, request initial estimates, or send your existing specifications.
              </p>

              <div>
                <a
                  href={companyData.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5 group"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Email & Location Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 shadow-xs space-y-5">
              <h3 className="text-base font-bold font-display text-[#151515] dark:text-white">
                Verified Communication Channels
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF0E9] dark:bg-[#FF572F]/15 text-[#FF572F] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#888888] block">
                      Primary Email
                    </span>
                    <a
                      href={`mailto:${companyData.contact.primaryEmail}`}
                      className="font-bold text-[#151515] dark:text-white hover:text-[#FF572F] transition-colors"
                    >
                      {companyData.contact.primaryEmail}
                    </a>
                  </div>
                </div>

                <a
                  href={companyData.contact.mapsUrl || companyData.location.mapsUrl || "https://www.google.com/maps/search/?api=1&query=TechCrestaX,+Rajkot,+Gujarat"}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open TechCrestaX Studio on Google Maps"
                  aria-label="Open TechCrestaX Studio on Google Maps"
                  className="group flex items-start gap-3 p-2 -mx-2 rounded-xl hover:bg-[#FFF0E9]/60 dark:hover:bg-[#FF572F]/10 transition-colors cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#FFF0E9] dark:bg-[#FF572F]/15 text-[#FF572F] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#888888] flex items-center gap-1.5">
                      <span>Studio Headquarters</span>
                      <ExternalLink className="w-3 h-3 text-[#FF572F] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                    <span className="font-bold text-[#151515] dark:text-white group-hover:text-[#FF572F] transition-colors">
                      {companyData.location.addressString}
                    </span>
                    <p className="text-[11px] text-[#666666] dark:text-[#94A3B8] mt-0.5">
                      Click to open office location in Google Maps
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Next Steps Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 space-y-3 shadow-xs">
              <h3 className="text-sm font-bold font-display text-[#151515] dark:text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF572F]" />
                <span>What Happens After You Inquire?</span>
              </h3>
              <ul className="space-y-2 text-xs text-[#555555] dark:text-[#94A3B8] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="font-mono text-[#FF572F] font-bold">01.</span>
                  <span>We analyze your project goals and scope within 24 hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-[#FF572F] font-bold">02.</span>
                  <span>We arrange a brief discovery chat via WhatsApp or video call.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-[#FF572F] font-bold">03.</span>
                  <span>You receive a transparent, itemized proposal and milestone roadmap.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
}
