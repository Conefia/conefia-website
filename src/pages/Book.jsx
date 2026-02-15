import React, { useEffect } from 'react';
import { CheckCircle2, Calendar, Clock, Video } from 'lucide-react';
import Seo from '@/components/Seo';

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e1a] via-[#111827] to-[#1a1f2e]">
      <Seo 
        title="Book a Roadmap Call | Conefia"
        description="Schedule a free 30-minute roadmap call to discuss your digital venture. No commitment, just a conversation about what's possible."
        canonical="/book"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-36 pb-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#2F2F2F] mb-6 leading-tight">
            Book a <span className="bg-gradient-to-r from-[#DBFE01] to-[#c5e000] bg-clip-text text-transparent">Roadmap Call</span>
          </h1>
          <p className="text-lg text-[#2F2F2F]/80 mb-8 max-w-2xl mx-auto font-medium">
            Let's discuss your idea and explore how we can help you build, launch, and scale your digital venture.
          </p>

          {/* What to expect */}
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
            <div className="flex items-center gap-3 bg-[#DBFE01] rounded-xl p-4 border border-[#DBFE01] shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_2px_8px_rgba(219,254,1,0.2)] hover:shadow-[0_4px_12px_rgba(219,254,1,0.3)] transition-all hover:-translate-y-1">
              <Clock className="w-5 h-5 text-[#1a1a1a] flex-shrink-0" />
              <span className="text-[#1a1a1a] text-sm font-bold">30 Minutes</span>
            </div>
            <div className="flex items-center gap-3 bg-[#DBFE01] rounded-xl p-4 border border-[#DBFE01] shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_2px_8px_rgba(219,254,1,0.2)] hover:shadow-[0_4px_12px_rgba(219,254,1,0.3)] transition-all hover:-translate-y-1">
              <Video className="w-5 h-5 text-[#1a1a1a] flex-shrink-0" />
              <span className="text-[#1a1a1a] text-sm font-bold">Video Call</span>
            </div>
            <div className="flex items-center gap-3 bg-[#DBFE01] rounded-xl p-4 border border-[#DBFE01] shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_2px_8px_rgba(219,254,1,0.2)] hover:shadow-[0_4px_12px_rgba(219,254,1,0.3)] transition-all hover:-translate-y-1">
              <CheckCircle2 className="w-5 h-5 text-[#1a1a1a] flex-shrink-0" />
              <span className="text-[#1a1a1a] text-sm font-bold">No Commitment</span>
            </div>
          </div>
        </div>

        {/* Calendly embed */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/yassen-eltayeb-conefia/conefia-roadmap-call"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>

        {/* Additional info */}
        <p className="text-center text-[#2F2F2F]/60 text-sm mt-8">
          Can't find a suitable time? <a href="mailto:info@conefia.com" className="text-[#DBFE01] hover:underline font-semibold">Email us</a> directly.
        </p>
      </div>
    </div>
  );
}