import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useReducedMotion } from 'framer-motion';
import Seo from '@/components/Seo';
import HeroSection from '@/components/landing/HeroSection';
import { ServiceStructuredData } from '@/components/StructuredData';

// Home is already lazy-loaded at the route level (pages.config.js).
// Static imports here bundle everything into the Home chunk — no double-lazy overhead.
import SocialProofBar from '@/components/landing/SocialProofBar';
import BrandCarousel from '@/components/landing/BrandCarousel';
import ProblemSolution from '@/components/landing/ProblemSolution';
import PlaybookSection from '@/components/landing/PlaybookSection';
import CaseStudiesSection from '@/components/landing/CaseStudiesSection';
import TestimonialSlider from '@/components/landing/TestimonialSlider';
import HowWeWork from '@/components/landing/HowWeWork';
import PackagesSection from '@/components/landing/PackagesSection';
import FAQSection from '@/components/landing/FAQSection';
import ContactSection from '@/components/landing/ContactSection';

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const tryScroll = (attempts = 0) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (attempts < 5) {
          setTimeout(() => tryScroll(attempts + 1), 200);
        }
      };
      tryScroll();
    }
  }, [location.hash, location.key]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] overflow-x-hidden">
      {/* Gradient blobs — pure CSS, no image download needed */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] rounded-full bg-[#DBFE01] opacity-[0.06] blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#DBFE01] opacity-[0.04] blur-[100px] pointer-events-none" aria-hidden="true" />
      
      <main className="relative">
        <Seo 
          title="Conefia | AI & Mobile App Development + Growth Partner"
          canonical="/" 
          description="Build and scale your digital venture faster. AI MVP & mobile app development plus growth marketing for founders, clinics, and Shopify brands. Free roadmap call."
        />
        
        {/* Enhanced JSON-LD Schema */}
        <ServiceStructuredData 
          name="Founder Operations & Digital Business Development"
          description="End-to-end digital business services: AI & mobile app development, launch strategy, and growth marketing for tech founders, medical practices, and e-commerce brands"
          url="/"
        />
        
        <HeroSection reduceMotion={shouldReduceMotion} />

        <BrandCarousel />

        {/* content-visibility: auto defers off-screen rendering until scroll */}
        <div style={{ contentVisibility: 'auto', containIntrinsicSize: '0 600px' }}>
          <ProblemSolution reduceMotion={shouldReduceMotion} />
        </div>

        <div style={{ contentVisibility: 'auto', containIntrinsicSize: '0 200px' }}>
          <SocialProofBar reduceMotion={shouldReduceMotion} />
        </div>

        <div style={{ contentVisibility: 'auto', containIntrinsicSize: '0 600px' }}>
          <HowWeWork reduceMotion={shouldReduceMotion} />
        </div>

        <div style={{ contentVisibility: 'auto', containIntrinsicSize: '0 800px' }}>
          <CaseStudiesSection reduceMotion={shouldReduceMotion} />
        </div>

        <div style={{ contentVisibility: 'auto', containIntrinsicSize: '0 800px' }}>
          <PlaybookSection reduceMotion={shouldReduceMotion} />
        </div>

        <div style={{ contentVisibility: 'auto', containIntrinsicSize: '0 600px' }}>
          <TestimonialSlider reduceMotion={shouldReduceMotion} />
        </div>

        <div style={{ contentVisibility: 'auto', containIntrinsicSize: '0 600px' }}>
          <PackagesSection reduceMotion={shouldReduceMotion} />
        </div>

        <div style={{ contentVisibility: 'auto', containIntrinsicSize: '0 600px' }}>
          <FAQSection reduceMotion={shouldReduceMotion} />
        </div>

        <div style={{ contentVisibility: 'auto', containIntrinsicSize: '0 600px' }}>
          <ContactSection reduceMotion={shouldReduceMotion} />
        </div>
      </main>
    </div>
  );
}