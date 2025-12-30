import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import HeroSection from '@/components/landing/HeroSection';
import SocialProofBar from '@/components/landing/SocialProofBar';
import BrandCarousel from '@/components/landing/BrandCarousel';
import ProblemSolution from '@/components/landing/ProblemSolution';
import PlaybookSection from '@/components/landing/PlaybookSection';
import CaseStudiesSection from '@/components/landing/CaseStudiesSection';
import HowWeWork from '@/components/landing/HowWeWork';
import PackagesSection from '@/components/landing/PackagesSection';
import FAQSection from '@/components/landing/FAQSection';
import ContactSection from '@/components/landing/ContactSection';

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-[#FAFAFA] overflow-x-hidden">
      {/* Fine line grid pattern */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='%231a1a1a' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
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
        <HowWeWork reduceMotion={shouldReduceMotion} />
        <PackagesSection reduceMotion={shouldReduceMotion} />
        <FAQSection reduceMotion={shouldReduceMotion} />
        <ContactSection reduceMotion={shouldReduceMotion} />
      </main>
    </div>
  );
}