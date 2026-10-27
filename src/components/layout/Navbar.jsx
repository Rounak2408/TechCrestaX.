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
          ? 'bg-[#FFF9F6]/90 dark:bg-[#0B0E14]/90 backdrop-blur-md border-b border-[#F0E7E2] dark:border-white/10 py-3 shadow-xs'
          : 'bg-[#FFF9F6]/60 dark:bg-[#0B0E14]/60 backdrop-blur-xs py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Company Name */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF572F] rounded-xl p-1 -m-1 cursor-pointer"
            aria-label="TechCrestaX Homepage"
          >
            <img
              src="/logo.png"
              alt="TechCrestaX Logo"
              className="w-9 h-9 rounded-xl object-contain shadow-xs border border-[#F0E7E2] dark:border-white/10 group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#151515] dark:text-white flex items-center">
                TechCresta<span className="text-[#FF572F]">X</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#666666] dark:text-[#94A3B8] -mt-1 hidden sm:block">
                Digital Engineering
              </span>
            </div>
          </a>

          {/* Desktop Clean Typography Navigation (No Box / Pill) */}
          <nav 
            className="hidden lg:flex items-center gap-0.5 xl:gap-1 px-1 py-1"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => {
              const active = isLinkActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-2.5 xl:px-3.5 py-2 text-xs xl:text-sm font-semibold transition-colors duration-200 select-none ${
                    active
                      ? 'text-[#151515] dark:text-white font-bold'
                      : 'text-[#444444] dark:text-[#94A3B8] hover:text-[#151515] dark:hover:text-white'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  <span className="flex items-center gap-1.5">
                    <span>{link.name}</span>
                  </span>
                  {active && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#151515] dark:bg-white rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls: Theme Toggle & Primary Orange CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-9 h-9 rounded-full border border-[#F0E7E2] dark:border-white/10 bg-white dark:bg-[#121824] flex items-center justify-center text-[#555555] dark:text-[#94A3B8] hover:text-[#FF572F] dark:hover:text-[#FF572F] hover:border-[#FF572F]/40 transition-all cursor-pointer shadow-2xs"
            >
              {theme === 'dark' ? (
                <Moon className="w-4 h-4 text-amber-300" />
              ) : (
                <Sun className="w-4 h-4 text-[#FF572F]" />
              )}
            </button>

            {/* Primary Orange CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FF572F] hover:bg-[#E94725] text-white text-xs sm:text-sm font-bold transition-all duration-200 shadow-md shadow-[#FF572F]/20 hover:shadow-[#FF572F]/35 hover:-translate-y-0.5 cursor-pointer group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Button (Clean, no theme button cluttering the outer header) */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              className="p-2.5 rounded-xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 text-[#151515] dark:text-white shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF572F]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF572F]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-x-0 top-[60px] bottom-0 z-40 bg-[#FFF9F6]/98 dark:bg-[#0B0E14]/98 backdrop-blur-xl lg:hidden overflow-y-auto border-t border-[#F0E7E2] dark:border-white/10 px-6 py-6 flex flex-col justify-between"
          style={{ height: 'calc(100dvh - 60px)' }}
        >
          <div className="space-y-1.5">
            {/* Drawer Header with Integrated Theme Switcher */}
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#F0E7E2] dark:border-white/10">
              <span className="text-xs font-mono uppercase text-[#666666] dark:text-[#94A3B8] tracking-wider font-semibold">
                Menu Navigation
              </span>
              
              {/* Theme Switch Pill inside Hamburger Drawer */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme mode"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 text-xs font-semibold text-[#151515] dark:text-white shadow-2xs hover:border-[#FF572F]/50 transition-all cursor-pointer"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-[11px] font-mono">Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-[#555555]" />
                    <span className="text-[11px] font-mono">Dark Mode</span>
                  </>
                )}
              </button>
            </div>

            {navLinks.map((link) => {
              const active = isLinkActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between text-base font-bold py-3 px-3 transition-colors ${
                    active
                      ? 'text-[#FF572F] border-l-2 border-[#FF572F] pl-4'
                      : 'text-[#151515] dark:text-[#94A3B8] hover:text-[#FF572F] dark:hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span>{link.name}</span>
                  </span>
                  <ArrowRight className={`w-4 h-4 ${active ? 'text-[#FF572F]' : 'opacity-40'}`} />
                </Link>
              );
            })}
          </div>

          <div className="mt-6 pt-5 border-t border-[#F0E7E2] dark:border-white/10 space-y-3">
            {/* Dedicated Appearance Switch Card */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-white dark:bg-[#121824] border border-[#F0E7E2] dark:border-white/10 shadow-2xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#FFF0E9] dark:bg-[#1A2230] flex items-center justify-center text-[#FF572F]">
                  {theme === 'dark' ? <Moon className="w-4 h-4 text-indigo-400" /> : <Sun className="w-4 h-4 text-amber-500" />}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-[#151515] dark:text-white">
                    Appearance
                  </span>
                  <span className="text-[10px] font-mono text-[#666666] dark:text-[#94A3B8]">
                    {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                  </span>
                </div>
              </div>

              {/* Segmented Light/Dark Switch Buttons */}
              <div className="flex items-center p-0.5 rounded-xl bg-[#FFF9F6] dark:bg-[#0B0E14] border border-[#F0E7E2] dark:border-white/10">
                <button
                  type="button"
                  onClick={() => theme === 'dark' && toggleTheme()}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1 cursor-pointer ${
                    theme === 'light'
                      ? 'bg-white text-[#FF572F] shadow-xs'
                      : 'text-[#888888] hover:text-white'
                  }`}
                >
                  <Sun className="w-3 h-3 text-amber-500" />
                  <span>Light</span>
                </button>
                <button
                  type="button"
                  onClick={() => theme === 'light' && toggleTheme()}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1 cursor-pointer ${
                    theme === 'dark'
                      ? 'bg-[#121824] text-white shadow-xs'
                      : 'text-[#888888] hover:text-[#151515]'
                  }`}
                >
                  <Moon className="w-3 h-3 text-indigo-400" />
                  <span>Dark</span>
                </button>
              </div>
            </div>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FF572F] hover:bg-[#E94725] text-white font-bold text-sm shadow-md shadow-[#FF572F]/20 cursor-pointer"
            >
              <span>Start a Project</span>
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
