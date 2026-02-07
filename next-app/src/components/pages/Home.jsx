"use client";
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';
import Seo from '@/components/Seo';
import HeroSection from '@/components/landing/HeroSection';
import { SectionSkeleton, DarkSectionSkeleton } from '@/components/loading/SkeletonLoader';
import { ServiceStructuredData } from '@/components/StructuredData';

// Lazy load below-the-fold components
const SocialProofBar = React.lazy(() => import('@/components/landing/SocialProofBar'));
const BrandCarousel = React.lazy(() => import('@/components/landing/BrandCarousel'));
const ProblemSolution = React.lazy(() => import('@/components/landing/ProblemSolution'));
const PlaybookSection = React.lazy(() => import('@/components/landing/PlaybookSection'));
const CaseStudiesSection = React.lazy(() => import('@/components/landing/CaseStudiesSection'));
const TestimonialSlider = React.lazy(() => import('@/components/landing/TestimonialSlider'));
const HowWeWork = React.lazy(() => import('@/components/landing/HowWeWork'));
const PackagesSection = React.lazy(() => import('@/components/landing/PackagesSection'));
const FAQSection = React.lazy(() => import('@/components/landing/FAQSection'));
const ContactSection = React.lazy(() => import('@/components/landing/ContactSection'));

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
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
          canonical="/" 
          description="AI & mobile apps built fast, launched right, scaled with data—for tech founders, clinics, and Shopify brands (SEO, ads, social)"
        />
        
        {/* Enhanced JSON-LD Schema */}
        <ServiceStructuredData 
          name="Founder Operations & Digital Business Development"
          description="End-to-end digital business services: AI & mobile app development, launch strategy, and growth marketing for tech founders, medical practices, and e-commerce brands"
          url="/"
        />
        
        <HeroSection reduceMotion={shouldReduceMotion} />

        <React.Suspense fallback={<DarkSectionSkeleton height="h-24" />}>
          <BrandCarousel />
        </React.Suspense>

        <React.Suspense fallback={<SectionSkeleton />}>
          <ProblemSolution reduceMotion={shouldReduceMotion} />
        </React.Suspense>

        <React.Suspense fallback={<SectionSkeleton height="h-48" />}>
          <SocialProofBar reduceMotion={shouldReduceMotion} />
        </React.Suspense>

        <React.Suspense fallback={<SectionSkeleton />}>
          <PlaybookSection reduceMotion={shouldReduceMotion} />
        </React.Suspense>

        <React.Suspense fallback={<DarkSectionSkeleton />}>
          <CaseStudiesSection reduceMotion={shouldReduceMotion} />
        </React.Suspense>

        <React.Suspense fallback={<SectionSkeleton />}>
          <TestimonialSlider reduceMotion={shouldReduceMotion} />
        </React.Suspense>

        <React.Suspense fallback={<SectionSkeleton />}>
          <HowWeWork reduceMotion={shouldReduceMotion} />
        </React.Suspense>

        <React.Suspense fallback={<SectionSkeleton />}>
          <PackagesSection reduceMotion={shouldReduceMotion} />
        </React.Suspense>

        <React.Suspense fallback={<SectionSkeleton />}>
          <FAQSection reduceMotion={shouldReduceMotion} />
        </React.Suspense>

        <React.Suspense fallback={<SectionSkeleton />}>
          <ContactSection reduceMotion={shouldReduceMotion} />
        </React.Suspense>
      </main>
    </div>
  );
}