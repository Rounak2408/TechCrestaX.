import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Sun, 
  Moon,
  MessageSquare
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { companyData } from '../../data/companyData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];


  const isLinkActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      window.location.reload();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06080F]/95 backdrop-blur-md border-b border-white/8 py-3 shadow-lg shadow-black/30'
          : 'bg-[#06080F]/60 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Company Name */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B4A] rounded-xl p-1 -m-1 cursor-pointer"
            aria-label="TechCrestaX Homepage"
          >
            <img
              src="/logo.png"
              alt="TechCrestaX Logo"
              className="w-9 h-9 rounded-xl object-contain shadow-xs border border-[#EBECEF] dark:border-white/10 group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center">
                TechCresta<span className="bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] bg-clip-text text-transparent">X</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-white/40 -mt-1 hidden sm:block">
                Digital Engineering
              </span>
            </div>
          </a>

          {/* Desktop Clean Typography Navigation (Alpha Agency Style) */}
          <nav 
            className="hidden lg:flex items-center gap-1 xl:gap-1.5 px-1 py-1"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => {
              const active = isLinkActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-3 xl:px-3.5 py-2 text-xs xl:text-sm font-semibold transition-colors duration-200 select-none ${
                    active
                      ? 'text-[#FF6B4A] font-bold'
                      : 'text-white/60 hover:text-white'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  <span>{link.name}</span>
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls: Theme Toggle & Alpha Agency Gradient Pill CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-9 h-9 rounded-full border border-[#EBECEF] dark:border-white/10 bg-white dark:bg-[#0D1420] flex items-center justify-center text-[#4C5258] dark:text-[#94A3B8] hover:text-[#FF6B4A] dark:hover:text-[#FF6B4A] hover:border-[#FF6B4A]/40 transition-all cursor-pointer shadow-2xs"
            >
              {theme === 'dark' ? (
                <Moon className="w-4 h-4 text-amber-300" />
              ) : (
                <Sun className="w-4 h-4 text-[#FF6B4A]" />
              )}
            </button>

            {/* Alpha Agency Gradient Pill Button with Circular Icon Container */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] hover:from-[#FF7C42] hover:to-[#FFA700] text-white text-xs sm:text-sm font-bold transition-all duration-300 shadow-md shadow-[#FF6B4A]/25 hover:shadow-lg hover:shadow-[#FF6B4A]/40 hover:-translate-y-0.5 cursor-pointer group"
            >
              <span>Get In Touch</span>
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#FF6B4A] transition-all duration-300">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              className="p-2.5 rounded-xl bg-white dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 text-[#0D1B2A] dark:text-white shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B4A]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF6B4A]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-x-0 top-[60px] bottom-0 z-50 bg-[#FFFFFF] dark:bg-[#070A0F] lg:hidden overflow-y-auto border-t border-[#EBECEF] dark:border-white/10 px-6 py-6 flex flex-col justify-between shadow-2xl"
          style={{ height: 'calc(100dvh - 60px)' }}
        >
          <div className="space-y-1.5">
            {/* Drawer Header (Clean, without duplicate theme switcher) */}
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#EBECEF] dark:border-white/10">
              <span className="text-xs font-mono uppercase text-[#4C5258] dark:text-[#94A3B8] tracking-wider font-semibold">
                Menu Navigation
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF6B4A] font-bold">
                Studio
              </span>
            </div>

            {navLinks.map((link) => {
              const active = isLinkActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between text-base font-bold py-3 px-3 rounded-xl transition-colors ${
                    active
                      ? 'text-[#FF6B4A] bg-[#FFF4F0] dark:bg-white/[0.05] border-l-4 border-[#FF6B4A] pl-3'
                      : 'text-[#0D1B2A] dark:text-[#94A3B8] hover:text-[#FF6B4A] dark:hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span>{link.name}</span>
                  </span>
                  <ArrowRight className={`w-4 h-4 ${active ? 'text-[#FF6B4A]' : 'opacity-40'}`} />
                </Link>
              );
            })}
          </div>

          <div className="mt-6 pt-5 border-t border-[#EBECEF] dark:border-white/10 space-y-3">
            {/* Dedicated Appearance Switch Card */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F8F9FA] dark:bg-[#0D1420] border border-[#EBECEF] dark:border-white/10 shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#FFF4F0] dark:bg-[#152033] flex items-center justify-center text-[#FF6B4A]">
                  {theme === 'dark' ? <Moon className="w-4 h-4 text-indigo-400" /> : <Sun className="w-4 h-4 text-amber-500" />}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-[#0D1B2A] dark:text-white">
                    Appearance
                  </span>
                  <span className="text-[10px] font-mono text-[#4C5258] dark:text-[#94A3B8]">
                    {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                  </span>
                </div>
              </div>

              {/* Segmented Light/Dark Switch Buttons */}
              <div className="flex items-center p-1 rounded-xl bg-white dark:bg-[#070A0F] border border-[#EBECEF] dark:border-white/10 shadow-2xs">
                <button
                  type="button"
                  onClick={() => theme === 'dark' && toggleTheme()}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    theme === 'light'
                      ? 'bg-[#FFF4F0] text-[#FF6B4A] shadow-xs font-extrabold border border-[#FF6B4A]/20'
                      : 'text-[#64748B] hover:text-[#0D1B2A] dark:hover:text-white'
                  }`}
                  aria-pressed={theme === 'light'}
                >
                  <Sun className="w-3 h-3 text-amber-500" />
                  <span>Light</span>
                </button>
                <button
                  type="button"
                  onClick={() => theme === 'light' && toggleTheme()}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    theme === 'dark'
                      ? 'bg-[#152033] text-white shadow-xs font-extrabold border border-white/10'
                      : 'text-[#64748B] hover:text-[#0D1B2A] dark:hover:text-white'
                  }`}
                  aria-pressed={theme === 'dark'}
                >
                  <Moon className="w-3.5 h-3.5 text-amber-300" />
                  <span>Dark</span>
                </button>
              </div>
            </div>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#FFB627] hover:from-[#FF7C42] hover:to-[#FFA700] text-white font-bold text-sm shadow-md shadow-[#FF6B4A]/25 cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={companyData.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold text-xs transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
