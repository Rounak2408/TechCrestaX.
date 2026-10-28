import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUp, 
  ArrowUpRight, 
  Mail, 
  MessageSquare, 
  MapPin, 
  ChevronRight,
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
    { title: 'Services', path: '/services' },
    { title: 'Work & Projects', path: '/work' },
    { title: 'About Us', path: '/about' },
    { title: 'Pricing & Plans', path: '/pricing' },
    { title: 'Blog & Articles', path: '/blog' },
    { title: 'FAQ', path: '/faq' },
    { title: 'Contact', path: '/contact' },
  ];

  const serviceLinks = [
    { title: 'Websites That Convert', path: '/services#website-design-development' },
    { title: 'E-commerce & Portals', path: '/services#ecommerce-website-development' },
    { title: 'Web Applications & SaaS', path: '/services#web-applications-platforms' },
    { title: 'UI/UX & Product Design', path: '/services#ui-ux-design' },
    { title: 'SEO & Organic Growth', path: '/services#seo-local-seo' },
    { title: 'Performance Strategy', path: '/services#digital-growth-online-presence' },
  ];

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      window.location.reload();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <footer 
      className="w-full bg-[#0D1B2A] text-slate-300 relative select-none border-t border-white/10 overflow-hidden"
      role="contentinfo"
      aria-label="Site Footer"
    >
      {/* Background Typographic Watermark & Horizon Light Beam */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[190px] sm:h-[240px] md:h-[300px] lg:h-[370px] pointer-events-none select-none z-0 overflow-hidden flex items-end justify-center"
        aria-hidden="true"
      >
        {/* Ambient Cyan-Blue Glow on the right (behind STAX & WhatsApp CTA) */}
        <div 
          className="absolute -right-16 sm:-right-24 bottom-4 sm:bottom-10 w-[240px] sm:w-[380px] lg:w-[520px] h-[120px] sm:h-[180px] lg:h-[220px] rounded-full blur-[60px] sm:blur-[90px] opacity-25 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.45) 0%, rgba(14, 165, 233, 0.18) 50%, transparent 80%)'
          }}
        />

        {/* Subtle Ambient Cyan-Blue Glow on the left (behind TECH) */}
        <div 
          className="absolute -left-16 sm:-left-20 bottom-1 sm:bottom-2 w-[200px] sm:w-[300px] lg:w-[420px] h-[100px] sm:h-[150px] lg:h-[180px] rounded-full blur-[50px] sm:blur-[80px] opacity-15 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, transparent 70%)'
          }}
        />

        {/* Sweeping Horizon Electric Cyan Beam */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 370" 
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id="footerBeamGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
              <stop offset="12%" stopColor="#38BDF8" stopOpacity="0.2" />
              <stop offset="45%" stopColor="#00F0FF" stopOpacity="0.65" />
              <stop offset="75%" stopColor="#38BDF8" stopOpacity="0.8" />
              <stop offset="92%" stopColor="#60A5FA" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="footerBeamBloom" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
              <stop offset="25%" stopColor="#0284C7" stopOpacity="0.15" />
              <stop offset="60%" stopColor="#38BDF8" stopOpacity="0.35" />
              <stop offset="85%" stopColor="#00F0FF" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
            </linearGradient>

            <filter id="footerBeamBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
            <filter id="footerBeamSoftBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="14" />
            </filter>
          </defs>

          {/* Broad Atmosphere Bloom */}
          <path
            d="M -60 340 C 280 320, 620 300, 960 250 C 1140 220, 1340 180, 1500 150"
            stroke="url(#footerBeamBloom)"
            strokeWidth="16"
            fill="none"
            filter="url(#footerBeamSoftBlur)"
            className="opacity-40"
          />

          {/* Mid Glow Layer */}
          <path
            d="M -60 340 C 280 320, 620 300, 960 250 C 1140 220, 1340 180, 1500 150"
            stroke="url(#footerBeamGrad)"
            strokeWidth="3.5"
            fill="none"
            filter="url(#footerBeamBlur)"
            className="opacity-75"
          />

          {/* Sharp Core Laser Line */}
          <path
            d="M -60 340 C 280 320, 620 300, 960 250 C 1140 220, 1340 180, 1500 150"
            stroke="#E0F2FE"
            strokeWidth="1.2"
            fill="none"
            className="opacity-60"
          />
        </svg>

        {/* Oversized Typographic Watermark (Titanium / Cyan Specular Sheen - Seamlessly Integrated, Zero Box Artifact) */}
        <span 
          className="font-display font-black tracking-[0.08em] sm:tracking-[0.14em] md:tracking-[0.18em] lg:tracking-[0.22em] text-[clamp(24px,7.5vw,34px)] sm:text-[clamp(38px,6vw,56px)] md:text-[90px] lg:text-[140px] xl:text-[170px] 2xl:text-[190px] leading-none whitespace-nowrap uppercase animate-watermark-fade transform -rotate-[1deg] sm:-rotate-[1.5deg] md:-rotate-[2.5deg] lg:-rotate-[3.2deg] origin-center mb-2 sm:mb-2.5 md:mb-3 lg:mb-1 select-none pointer-events-none"
          style={{
            color: 'rgba(148, 163, 184, 0.045)',
            WebkitTextStroke: '1px rgba(125, 211, 252, 0.15)',
            textShadow: '0 0 25px rgba(56, 189, 248, 0.08)',
          }}
        >
          TECHCRESTAX
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Positioning (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a 
              href="/" 
              onClick={handleLogoClick}
              className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B4A] rounded-xl cursor-pointer"
              aria-label="TechCrestaX Homepage"
            >
              <img
                src="/logo.png"
                alt="TechCrestaX Logo"
                className="w-10 h-10 rounded-xl object-contain border border-white/10 group-hover:scale-105 transition-transform"
              />
              <div>
                <span className="font-display font-extrabold text-xl tracking-tight text-white block">
                  TechCresta<span className="bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] bg-clip-text text-transparent">X</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-slate-400 block uppercase">
                  DIGITAL ENGINEERING STUDIO
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              We engineer high-performance web solutions that turn visitors into revenue. Strategy, design, development, and dependable post-launch support.
            </p>

            {/* Social Channels */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={companyData.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40 hover:bg-pink-500/15 hover:text-pink-400"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={companyData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/15 hover:text-blue-400"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={companyData.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600/40 hover:bg-blue-600/15 hover:text-blue-400"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Alpha Agency "QUICK LINKS") (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A]" />
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#FF6B4A] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (Alpha Agency "OUR SERVICES") (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFB627]" />
              <span>Our Services</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {serviceLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#FFB627] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & WhatsApp Inquiry (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8FC658]" />
              <span>Contact</span>
            </h3>
            <div className="space-y-2.5 text-xs">
              <a
                href={companyData.contact.mapsUrl || companyData.location.mapsUrl || "https://www.google.com/maps/search/?api=1&query=TechCrestaX,+Rajkot,+Gujarat"}
                target="_blank"
                rel="noopener noreferrer"
                title="Open TechCrestaX Office on Google Maps"
                aria-label="Open TechCrestaX Office on Google Maps"
                className="group flex items-start gap-2 text-slate-400 hover:text-white transition-all duration-200 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#FF6B4A] shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-125" />
                <span className="inline-flex items-center gap-1 group-hover:underline underline-offset-4 decoration-[#FF6B4A]/50">
                  <span>Rajkot, Gujarat, India</span>
                  <ArrowUpRight className="w-3 h-3 text-[#FF6B4A] opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-[#FF6B4A] shrink-0" />
                <a
                  href={`mailto:${companyData.contact.primaryEmail}`}
                  className="hover:text-white transition-colors"
                >
                  {companyData.contact.primaryEmail}
                </a>
              </div>

              {/* WhatsApp CTA button (Strictly ZERO visible phone numbers!) */}
              <div className="pt-2">
                <a
                  href={companyData.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500 text-emerald-400 hover:text-white border border-emerald-500/30 font-semibold text-xs transition-all shadow-2xs group"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} TechCrestaX. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Digital Engineering & Web Development</span>
          </div>

          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full border border-white/10 hover:border-[#FF6B4A] bg-white/5 hover:bg-[#FF6B4A] hover:text-white text-slate-300 flex items-center justify-center transition-all cursor-pointer"
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
