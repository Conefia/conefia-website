import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import HeroSection from '@/components/landing/HeroSection';
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
        <HeroSection reduceMotion={shouldReduceMotion} />
        <SocialProofBar reduceMotion={shouldReduceMotion} />
        <BrandCarousel />
        <ProblemSolution reduceMotion={shouldReduceMotion} />
        <PlaybookSection reduceMotion={shouldReduceMotion} />
        <CaseStudiesSection reduceMotion={shouldReduceMotion} />
        <TestimonialSlider reduceMotion={shouldReduceMotion} />
        <HowWeWork reduceMotion={shouldReduceMotion} />
        <PackagesSection reduceMotion={shouldReduceMotion} />
        <FAQSection reduceMotion={shouldReduceMotion} />
        <ContactSection reduceMotion={shouldReduceMotion} />
      </main>
    </div>
  );
}