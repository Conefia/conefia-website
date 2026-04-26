import React, { useEffect, useState } from 'react';
import { CheckCircle2, Calendar, Clock, Video } from 'lucide-react';
import ContourBackground from '@/components/visual/ContourBackground';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function Book() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className="min-h-screen bg-stone-950 relative overflow-hidden">
      {/* Contour background */}
      <ContourBackground className="opacity-80" isMobile={isMobile} />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(11, 16, 32, 0.4) 100%)' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-8 relative z-10">
        <Breadcrumbs items={[{ label: 'Book a Roadmap Call' }]} theme="dark" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-6 leading-tight drop-shadow-sm text-center md:text-left">
            Book a Roadmap Call
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto font-medium">
            Let's discuss your idea and explore how we can help you build, launch, and scale your digital venture.
          </p>

          {/* What to expect */}
          <div className="flex flex-wrap gap-4 justify-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-md hover:shadow-lg transition-shadow">
              <Clock className="w-5 h-5 text-[#DBFE01] flex-shrink-0" />
              <span className="text-white text-sm font-semibold">30 Minutes</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-md hover:shadow-lg transition-shadow">
              <Video className="w-5 h-5 text-[#DBFE01] flex-shrink-0" />
              <span className="text-white text-sm font-semibold">Video Call</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-md hover:shadow-lg transition-shadow">
              <CheckCircle2 className="w-5 h-5 text-[#DBFE01] flex-shrink-0" />
              <span className="text-white text-sm font-semibold">No Commitment</span>
            </div>
          </div>
        </div>

        {/* Calendly embed */}
        <div className="bg-black rounded-3xl shadow-[0_20px_60px_rgba(26,26,26,0.15)] overflow-hidden border border-[#1a1a1a]/10">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/yassen-eltayeb-conefia?background_color=000000&text_color=ffffff&primary_color=dbfe01"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>

        {/* Additional info */}
        <p className="text-center text-white/60 text-sm mt-8">
          Can't find a suitable time? <a href="mailto:info@conefia.com" className="text-white font-bold hover:underline">Email us</a> directly.
        </p>
      </div>
    </div>
  );
}