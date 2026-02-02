import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';

export default function SolutionsInterstitial() {
  const personas = [
    { label: 'Clinic', path: 'solutions-clinic-growth', emoji: '🏥' },
    { label: 'AI SaaS Founder', path: 'solutions-ai-saas-mvp-sprint', emoji: '🚀' },
    { label: 'DTC / Shopify', path: 'solutions-dtc-growth', emoji: '🛍️' },
    { label: 'Accelerator', path: 'solutions-accelerator-support', emoji: '⚡' },
    { label: 'Enterprise', path: 'solutions-enterprise-innovation', emoji: '🏢' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-16 my-16 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-3xl relative overflow-hidden">
      
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#DBFE01] opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#DBFE01] opacity-5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DBFE01]/20 border border-[#DBFE01]/40 rounded-full mb-6">
          <Rocket className="w-4 h-4 text-[#DBFE01]" />
          <span className="text-sm font-bold text-[#DBFE01]">High-Intent CTA</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Not sure where to start?
        </h2>
        
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          Pick your track and get a roadmap in one call. No fluff, no commitment—just clear next steps.
        </p>

        {/* Persona Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {personas.map((persona, i) => (
            <Link
              key={i}
              to={createPageUrl(persona.path)}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full text-white font-semibold hover:bg-[#DBFE01] hover:text-[#1a1a1a] hover:border-[#DBFE01] transition-all hover:scale-105">
              {persona.emoji} {persona.label}
            </Link>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection('track-selector')}
            className="bg-[#DBFE01] text-[#1a1a1a] font-bold px-8 py-6 rounded-full text-base hover:bg-[#c5e000] transition-all hover:scale-105 shadow-xl shadow-[#DBFE01]/20">
            Choose Your Track
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="px-8 py-6 rounded-full text-base font-bold border-2 border-white text-white hover:bg-white hover:text-[#1a1a1a] transition-all">
            Book Roadmap Call
          </Button>
        </div>
      </div>
    </motion.section>
  );
}