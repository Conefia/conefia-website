import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Seo from '@/components/Seo';
import HeroSection from '@/components/landing/HeroSection';

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

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

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
        <Seo canonical="/" />
        <HeroSection reduceMotion={shouldReduceMotion} />
        
        <React.Suspense fallback={<div className="h-24 bg-[#0B1020]" />}>
          <BrandCarousel />
        </React.Suspense>
        
        <React.Suspense fallback={<div className="h-96" />}>
          <ProblemSolution reduceMotion={shouldReduceMotion} />
        </React.Suspense>
        
        <React.Suspense fallback={<div className="h-48" />}>
          <SocialProofBar reduceMotion={shouldReduceMotion} />
        </React.Suspense>
        
        <React.Suspense fallback={<div className="h-96" />}>
          <PlaybookSection reduceMotion={shouldReduceMotion} />
        </React.Suspense>
        
        <React.Suspense fallback={<div className="h-96" />}>
          <CaseStudiesSection reduceMotion={shouldReduceMotion} />
        </React.Suspense>
        
        <React.Suspense fallback={<div className="h-96" />}>
          <TestimonialSlider reduceMotion={shouldReduceMotion} />
        </React.Suspense>
        
        <React.Suspense fallback={<div className="h-96" />}>
          <HowWeWork reduceMotion={shouldReduceMotion} />
        </React.Suspense>
        
        <React.Suspense fallback={<div className="h-96" />}>
          <PackagesSection reduceMotion={shouldReduceMotion} />
        </React.Suspense>
        
        <React.Suspense fallback={<div className="h-96" />}>
          <FAQSection reduceMotion={shouldReduceMotion} />
        </React.Suspense>
        
        <React.Suspense fallback={<div className="h-96" />}>
          <ContactSection reduceMotion={shouldReduceMotion} />
        </React.Suspense>
      </main>
    </div>
  );
}