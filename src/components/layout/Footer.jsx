import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUp, 
  ArrowUpRight, 
  Mail, 
  MessageSquare, 
  MapPin, 
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { companyData } from '../../data/companyData';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 448 512" className={className} fill="currentColor" aria-hidden="true">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 448 512" className={className} fill="currentColor" aria-hidden="true">
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 320 512" className={className} fill="currentColor" aria-hidden="true">
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Work', path: '/work' },
    { title: 'Pricing & Maintenance', path: '/pricing' },
    { title: 'FAQ', path: '/faq' },
    { title: 'Contact', path: '/contact' },
  ];

  const serviceLinks = [
    { title: 'Website Design & Development', path: '/services#website-design-development' },
    { title: 'E-commerce Website Development', path: '/services#ecommerce-website-development' },
    { title: 'Web Applications & Platforms', path: '/services#web-applications-platforms' },
    { title: 'UI/UX Design', path: '/services#ui-ux-design' },
    { title: 'SEO & Local SEO', path: '/services#seo-local-seo' },
    { title: 'Digital Growth & Online Presence', path: '/services#digital-growth-online-presence' },
  ];

  return (
    <footer 
      className="w-full bg-white dark:bg-[#070A0F] border-t border-[#F0E7E2] dark:border-white/10 text-[#555555] dark:text-[#94A3B8] relative select-none transition-colors"
      role="contentinfo"
      aria-label="Site Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#F0E7E2] dark:border-white/10">
          
          {/* Column 1: Brand & Positioning (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF572F] rounded-xl"
              aria-label="TechCrestaX Homepage"
            >
              <img
                src="/logo.png"
                alt="TechCrestaX Logo"
                className="w-10 h-10 rounded-xl object-contain border border-[#F0E7E2] dark:border-white/10 group-hover:scale-105 transition-transform"
              />
              <div>
                <span className="font-display font-extrabold text-xl tracking-tight text-[#151515] dark:text-white block">
                  TechCresta<span className="text-[#FF572F]">X</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#666666] dark:text-[#94A3B8] block uppercase">
                  DIGITAL ENGINEERING STUDIO
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#666666] dark:text-[#94A3B8] leading-relaxed max-w-sm">
              We build digital experiences that move businesses forward. Strategic design, modern development, and dependable post-launch support.
            </p>

            {/* Social Channels */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={companyData.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#F0E7E2] dark:border-white/[0.09] bg-[#FFF9F6] dark:bg-white/[0.025] text-[#151515] dark:text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40 hover:bg-pink-500/10 hover:text-pink-500 dark:hover:text-pink-400"
              >
                <InstagramIcon className="w-[18px] h-[18px]" />
              </a>
              <a
                href={companyData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#F0E7E2] dark:border-white/[0.09] bg-[#FFF9F6] dark:bg-white/[0.025] text-[#151515] dark:text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-500 dark:hover:text-blue-400"
              >
                <LinkedInIcon className="w-[18px] h-[18px]" />
              </a>
              <a
                href={companyData.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#F0E7E2] dark:border-white/[0.09] bg-[#FFF9F6] dark:bg-white/[0.025] text-[#151515] dark:text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600/40 hover:bg-blue-600/10 hover:text-blue-600 dark:hover:text-blue-500"
              >
                <FacebookIcon className="w-[16px] h-[18px]" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#151515] dark:text-white font-bold">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-[#FF572F] transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#FF572F] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#151515] dark:text-white font-bold">
              Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {serviceLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.path}
                    className="hover:text-[#FF572F] transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#FF572F] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & WhatsApp Inquiry (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#151515] dark:text-white font-bold">
              Get in Touch
            </h3>
            <div className="space-y-2.5 text-xs">
              <a
                href={companyData.contact.mapsUrl || companyData.location.mapsUrl || "https://www.google.com/maps/search/?api=1&query=TechCrestaX,+Rajkot,+Gujarat"}
                target="_blank"
                rel="noopener noreferrer"
                title="Open TechCrestaX Office on Google Maps"
                aria-label="Open TechCrestaX Office on Google Maps"
                className="group flex items-start gap-2 text-[#666666] dark:text-[#94A3B8] hover:text-[#FF572F] dark:hover:text-[#FF572F] transition-all duration-200 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#FF572F] shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-125 group-hover:-translate-y-0.5" />
                <span className="inline-flex items-center gap-1 group-hover:underline underline-offset-4 decoration-[#FF572F]/50">
                  <span>Rajkot, Gujarat, India</span>
                  <ArrowUpRight className="w-3 h-3 text-[#FF572F] opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 shrink-0" />
                </span>
              </a>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF572F] shrink-0" />
                <a
                  href={`mailto:${companyData.contact.primaryEmail}`}
                  className="hover:text-[#FF572F] transition-colors"
                >
                  {companyData.contact.primaryEmail}
                </a>
              </div>

              {/* WhatsApp CTA button (NO visible phone number text!) */}
              <div className="pt-2">
                <a
                  href={companyData.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-600 hover:text-white dark:text-emerald-400 dark:hover:text-white border border-emerald-500/30 font-semibold text-xs transition-all shadow-2xs group"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Privacy & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666] dark:text-[#94A3B8]">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} TechCrestaX. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Digital Engineering & Web Development</span>
          </div>

          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-[#FF572F] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full border border-[#F0E7E2] dark:border-white/10 hover:border-[#FF572F] bg-[#FFF9F6] dark:bg-[#121824] hover:bg-[#FF572F] hover:text-white text-[#555555] dark:text-[#94A3B8] flex items-center justify-center transition-all cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
