import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import TalkToExpertModal from '../modals/TalkToExpertModal';
import GlobalAtmosphere from '../visuals/background/GlobalAtmosphere';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] dark:bg-[#070A0F] text-[#0D1B2A] dark:text-[#F8FAFC] selection:bg-[#FFF4F0] selection:text-[#FF6B4A] transition-colors duration-200 font-sans relative">
      <GlobalAtmosphere />

      {/* Skip to Main Content Link for WCAG Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0D1B2A] focus:text-white focus:font-bold focus:rounded-md shadow-xl"
      >
        Skip to main content
      </a>

      <ScrollToTop />
      <Navbar />

      <main id="main-content" className="flex-grow pt-16">
        {children}
      </main>

      <Footer />
      <TalkToExpertModal />
    </div>
  );
}
