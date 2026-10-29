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
  Sparkles
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
    { title: 'About Studio', path: '/about' },
    { title: 'Selected Work', path: '/work' },
    { title: 'Services & Scope', path: '/services' },
    { title: 'Pricing & Plans', path: '/pricing' },
    { title: 'Tech Insights', path: '/blog' },
    { title: 'FAQ', path: '/faq' },
    { title: 'Contact', path: '/contact' },
  ];

  const serviceLinks = [
    { title: 'Website Design & Development', path: '/services#website-design-development' },
    { title: 'Web Applications & SaaS', path: '/services#web-applications-platforms' },
    { title: 'E-commerce Platforms', path: '/services#ecommerce-website-development' },
    { title: 'UI/UX & Product Design', path: '/services#ui-ux-design' },
    { title: 'SEO & Growth Strategy', path: '/services#seo-local-seo' },
    { title: 'Speed & Web Vitals', path: '/services#digital-growth-online-presence' },
  ];

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
  };

  return (
    <footer 
      className="w-full bg-[#070A0F] text-slate-300 relative select-none border-t border-white/10 overflow-hidden"
      role="contentinfo"
      aria-label="Site Footer"
    >
      {/* Subtle controlled atmospheric lighting */}
      <div 
        className="absolute top-0 left-1/4 -translate-x-1/2 w-[550px] h-[300px] bg-[#FF6B4A]/5 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 right-10 w-[450px] h-[250px] bg-blue-500/[0.03] rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 relative z-10 space-y-12 sm:space-y-14">
        
        {/* Main Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-14 border-b border-white/[0.08]">
          
          {/* Column 1: Brand, Positioning & Trust (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <a 
              href="/" 
              onClick={handleLogoClick}
              className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B4A] rounded-xl cursor-pointer"
              aria-label="TechCrestaX Homepage"
            >
              <img
                src="/logo.png"
                alt="TechCrestaX Logo"
                className="w-10 h-10 rounded-xl object-contain border border-white/10 group-hover:scale-105 transition-transform duration-300"
              />
              <div>
                <span className="font-display font-extrabold text-xl tracking-tight text-white block">
                  TechCresta<span className="bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] bg-clip-text text-transparent">X</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#FF6B4A] block uppercase font-bold">
                  DIGITAL ENGINEERING STUDIO
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-sm">
              We architect high-performance websites, custom web applications, and scalable digital platforms that help ambitious businesses convert visitors into clients.
            </p>

            {/* Availability status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for new projects</span>
            </div>

            {/* Social Channels with unified sizing & restrained hover states */}
            <div className="pt-2">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Connect With Us
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href={companyData.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Follow TechCrestaX on Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF6B4A]/50 hover:bg-[#FF6B4A]/10 hover:text-[#FF6B4A]"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={companyData.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Connect with TechCrestaX on LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-blue-400"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a
                  href={companyData.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Follow TechCrestaX on Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Studio Navigation (2.5 cols) */}
          <div className="lg:col-span-2 lg:col-start-6 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A]" />
              <span>Studio</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[#94A3B8] hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-[#FF6B4A] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Capabilities & Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFB627]" />
              <span>Capabilities</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {serviceLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.path}
                    className="text-[#94A3B8] hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-[#FFB627] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Inquiries (2.5 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8FC658]" />
              <span>Get in Touch</span>
            </h3>

            <div className="space-y-3.5 text-xs">
              {/* Location with Google Maps link */}
              <a
                href={companyData.contact.mapsUrl || companyData.location.mapsUrl || "https://www.google.com/maps/search/?api=1&query=TechCrestaX,+Rajkot,+Gujarat"}
                target="_blank"
                rel="noopener noreferrer"
                title="View TechCrestaX Studio on Google Maps"
                aria-label="View TechCrestaX Studio on Google Maps"
                className="group flex items-start gap-2.5 text-[#94A3B8] hover:text-white transition-colors duration-200"
              >
                <MapPin className="w-4 h-4 text-[#FF6B4A] shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                <span className="leading-snug">
                  Rajkot, Gujarat, India
                  <span className="block text-[11px] text-slate-500 group-hover:text-[#FF6B4A] transition-colors">
                    Global client delivery
                  </span>
                </span>
              </a>

              {/* Email */}
              <div className="flex items-start gap-2.5 text-[#94A3B8]">
                <Mail className="w-4 h-4 text-[#FF6B4A] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${companyData.contact.primaryEmail}`}
                  className="hover:text-white transition-colors duration-200 leading-snug break-all"
                  aria-label={`Send email to ${companyData.contact.primaryEmail}`}
                >
                  {companyData.contact.primaryEmail}
                </a>
              </div>

              {/* Direct WhatsApp Consultation Card */}
              <div className="pt-2">
                <a
                  href={companyData.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between p-3 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 transition-all duration-300 group"
                  aria-label="Chat directly with TechCrestaX on WhatsApp"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <MessageSquare className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                        WhatsApp Chat
                      </div>
                      <div className="text-[10px] font-mono text-emerald-400/80">
                        Fast project response
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>

              {/* Included Guarantee Note */}
              <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-500 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8FC658] shrink-0" />
                <span>1-Year Free Maintenance Guarantee</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-center sm:text-left">
            <span>© {new Date().getFullYear()} TechCrestaX. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="text-slate-500">Engineered with React & Modern Web Standards</span>
          </div>

          <div className="flex items-center gap-5">
            <Link 
              to="/privacy" 
              className="hover:text-white transition-colors duration-200 text-slate-400"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-700">•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-[#FF6B4A]/50 bg-white/[0.03] hover:bg-[#FF6B4A]/10 text-slate-400 hover:text-white transition-all duration-200 text-xs font-mono cursor-pointer"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#FF6B4A]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
