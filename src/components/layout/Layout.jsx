import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import TalkToExpertModal from '../modals/TalkToExpertModal';
import GlobalAtmosphere from '../visuals/background/GlobalAtmosphere';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F6] dark:bg-[#0B0E14] text-[#151515] dark:text-[#F8FAFC] selection:bg-[#FFF0E9] selection:text-[#FF572F] transition-colors duration-200 font-sans relative">
      <GlobalAtmosphere />

      {/* Skip to Main Content Link for WCAG Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#151515] focus:text-white focus:font-bold focus:rounded-md shadow-xl"
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
