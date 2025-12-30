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
      {/* Wavy convoluted line pattern */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='waves' width='200' height='200' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 0 20 Q 25 5 50 20 T 100 20 T 150 20 T 200 20' stroke='%231a1a1a' stroke-width='0.5' fill='none'/%3E%3Cpath d='M 0 60 Q 30 45 60 60 T 120 60 T 180 60 T 240 60' stroke='%231a1a1a' stroke-width='0.5' fill='none'/%3E%3Cpath d='M 0 100 Q 40 85 80 100 T 160 100 T 240 100' stroke='%231a1a1a' stroke-width='0.5' fill='none'/%3E%3Cpath d='M 0 140 Q 35 125 70 140 T 140 140 T 210 140' stroke='%231a1a1a' stroke-width='0.5' fill='none'/%3E%3Cpath d='M 0 180 Q 50 165 100 180 T 200 180' stroke='%231a1a1a' stroke-width='0.5' fill='none'/%3E%3Cpath d='M 20 0 Q 5 25 20 50 T 20 100 T 20 150 T 20 200' stroke='%231a1a1a' stroke-width='0.5' fill='none'/%3E%3Cpath d='M 80 0 Q 65 35 80 70 T 80 140 T 80 210' stroke='%231a1a1a' stroke-width='0.5' fill='none'/%3E%3Cpath d='M 140 0 Q 125 30 140 60 T 140 120 T 140 180 T 140 240' stroke='%231a1a1a' stroke-width='0.5' fill='none'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23waves)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
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