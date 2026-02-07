import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import ContourBackground from '../visual/ContourBackground';
import AccelerateProcessVisual from './AccelerateProcessVisual';

export default function HeroSection({ reduceMotion }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-0 overflow-hidden bg-[#2F2F2F]">
      {/* Base layer */}
      <div className="bg-stone-950 absolute inset-0" />
      
      {/* Contour lines */}
      <ContourBackground className="opacity-80" />

      {/* Static Star Dust */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(150)].map((_, i) => {
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const size = Math.random() * 2 + 0.3;
          const opacity = Math.random() * 0.6 + 0.2;
          const hasGlow = Math.random() > 0.85;

          return (
            <div
              key={`star-${i}`}
              className="absolute rounded-full bg-[#DBFE01]"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                boxShadow: hasGlow ? '0 0 4px rgba(219, 254, 1, 0.8)' : 'none'
              }}
            />
          );
        })}
      </div>
      
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(11, 16, 32, 0.4) 100%)'
        }}
      />

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-4 pb-4 md:pb-2 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DBFE01]/20 border border-[#DBFE01]/40 mb-6">
              <Sparkles className="w-4 h-4 text-[#DBFE01]" />
              <span className="text-sm font-semibold text-[#DBFE01]">Your Build → Launch → Scale Partner</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Build it.{' '}
              <span className="text-[#DBFE01]">Launch it.</span>{' '}
              Scale it.
            </h1>

            {/* Eyebrow */}
            <p className="text-lg md:text-xl font-bold text-white/90 mb-4 max-w-xl mx-auto lg:mx-0">
              AI + mobile app development—plus launch and scale in one team.
            </p>

            {/* Subhead */}
            <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              We ship production-ready apps, conversion-ready landing pages, and measurable growth for app founders, healthcare clinics, and Shopify brands.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2"
              >
                Book Roadmap Call
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('track-selector')}
                className="px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2 border-2 border-white/20 text-white hover:bg-white hover:text-[#0B1020] hover:border-white transition-all duration-300 backdrop-blur-sm"
              >
                Choose Your Track
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 md:gap-8 mt-6 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <p className="text-white/40 mb-1 text-sm font-semibold uppercase tracking-wider">TYPICAL MVP</p>
                <p className="text-white font-bold text-lg">8–12 weeks</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-white/40 mb-1 text-sm font-semibold uppercase tracking-wider">WEEKLY DEMOS</p>
                <p className="text-white font-bold text-lg">Guaranteed</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-white/40 mb-1 text-sm font-semibold uppercase tracking-wider">PRIVACY-FIRST</p>
                <p className="text-white font-bold text-lg">HIPAA-aware</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-white/40 mb-1 text-sm font-semibold uppercase tracking-wider">ONE BACKLOG</p>
                <p className="text-white font-bold text-lg">One owner</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex items-center justify-center">
            <AccelerateProcessVisual reduceMotion={true} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block opacity-50">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}