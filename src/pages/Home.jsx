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
import PremiumBackground from '@/components/landing/PremiumBackground';

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Premium tech background */}
      <PremiumBackground />
      
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