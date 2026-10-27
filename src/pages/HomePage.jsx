import React from 'react';
import SEO from '../components/seo/SEO';
import HeroSection from '../components/home/HeroSection';
import BusinessHighlights from '../components/home/BusinessHighlights';
import ClientTrust from '../components/home/ClientTrust';
import ServicesOverview from '../components/home/ServicesOverview';
import SelectedWork from '../components/home/SelectedWork';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ProcessSection from '../components/home/ProcessSection';
import PricingPreview from '../components/home/PricingPreview';
import ReviewsSection from '../components/home/ReviewsSection';
import TeamPreview from '../components/home/TeamPreview';
import FAQPreview from '../components/home/FAQPreview';
import FinalCTA from '../components/home/FinalCTA';
import { organizationSchema, websiteSchema } from '../data/seoSchemas';

export default function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema
    ]
  };

  return (
    <div>
      <SEO
        title="TechCrestaX — Digital Engineering Studio | Websites, E-commerce & Platforms"
        description="TechCrestaX builds digital experiences that move businesses forward. Custom websites starting from ₹7,000+ with 1-year free maintenance. Web apps, e-commerce, and SEO."
        keywords={[
          "TechCrestaX",
          "website development Rajkot",
          "digital engineering studio",
          "custom web applications",
          "e-commerce website development India",
          "UI UX design",
          "SEO and local SEO Gujarat"
        ]}
        canonical="https://www.techcrestax.com/"
        schema={homeSchema}
      />

      {/* 1. HOME: HERO */}
      <section id="hero" className="scroll-mt-20">
        <HeroSection />
      </section>

      {/* 1. HOME: BUSINESS HIGHLIGHTS */}
      <section id="highlights">
        <BusinessHighlights />
      </section>

      {/* 1. HOME: CLIENT TRUST */}
      <section id="clients">
        <ClientTrust />
      </section>

      {/* 2. ABOUT: ABOUT TECHCRESTAX & PILLARS */}
      <section id="about" className="scroll-mt-20">
        <WhyChooseUs />
      </section>

      {/* 3. SERVICES: SERVICES OVERVIEW */}
      <section id="services" className="scroll-mt-20">
        <ServicesOverview />
      </section>

      {/* 4. PORTFOLIO: SELECTED WORK */}
      <section id="work" className="scroll-mt-20">
        <SelectedWork />
      </section>

      {/* 5. PRICING: PRICING PREVIEW */}
      <section id="pricing" className="scroll-mt-20">
        <PricingPreview />
      </section>

      {/* 6. PROCESS & REVIEWS */}
      <section id="process" className="scroll-mt-20">
        <ProcessSection />
      </section>

      <section id="reviews">
        <ReviewsSection />
      </section>

      {/* 7. TEAM PREVIEW */}
      <section id="team">
        <TeamPreview />
      </section>

      {/* 8. FAQ: FAQ PREVIEW */}
      <section id="faq" className="scroll-mt-20">
        <FAQPreview />
      </section>

      {/* 8. CONTACT: FINAL CTA */}
      <section id="contact-cta" className="scroll-mt-20">
        <FinalCTA />
      </section>
    </div>
  );
}
