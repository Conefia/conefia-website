'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import Seo from '@/components/client/Seo';
import HeroSection from '@/components/client/landing/HeroSection';
import { ServiceStructuredData } from '@/components/server/StructuredData';

// Direct imports for SSR pre-rendering (React.lazy prevents SSR)
import SocialProofBar from '@/components/client/landing/SocialProofBar';
import BrandCarousel from '@/components/client/landing/BrandCarousel';
import ProblemSolution from '@/components/client/landing/ProblemSolution';
import PlaybookSection from '@/components/client/landing/PlaybookSection';
import CaseStudiesSection from '@/components/client/landing/CaseStudiesSection';
import TestimonialSlider from '@/components/client/landing/TestimonialSlider';
import HowWeWork from '@/components/client/landing/HowWeWork';
import PackagesSection from '@/components/client/landing/PackagesSection';
import FAQSection from '@/components/client/landing/FAQSection';
import ContactSection from '@/components/client/landing/ContactSection';

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const location = usePathname();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] overflow-x-hidden">
      {/* Subtle background texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient blobs */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] rounded-full bg-[#DBFE01] opacity-[0.06] blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#DBFE01] opacity-[0.04] blur-[100px] pointer-events-none" />

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
        <ProblemSolution reduceMotion={shouldReduceMotion} />
        <SocialProofBar reduceMotion={shouldReduceMotion} />
        <HowWeWork reduceMotion={shouldReduceMotion} />
        <CaseStudiesSection reduceMotion={shouldReduceMotion} />
        <PlaybookSection reduceMotion={shouldReduceMotion} />
        <TestimonialSlider reduceMotion={shouldReduceMotion} />
        <PackagesSection reduceMotion={shouldReduceMotion} />
        <FAQSection reduceMotion={shouldReduceMotion} />
        <ContactSection reduceMotion={shouldReduceMotion} />
      </main>
    </div>
  );
}