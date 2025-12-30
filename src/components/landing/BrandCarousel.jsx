import React from 'react';
import { motion, useInView } from 'framer-motion';
import ContourBackground from '../visual/ContourBackground';

export default function BrandCarousel() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const logos = [
    {
      url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/92204c7cc_accenture_48h.png',
      alt: 'Accenture'
    },
    {
      url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/93dda6dbc_vim_48h.png',
      alt: 'Vascular Institute of Michigan'
    },
    {
      url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/d55668859_menovia_48h.png',
      alt: 'Menovia'
    },
    {
      url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/d3b4e43b7_larovie_48h.png',
      alt: 'Larovie'
    },
    {
      url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/437007349_al_mahfza_48h.png',
      alt: 'Al-Mahfza'
    },
    {
      url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/8ce44fe6a_hartalega_48h.png',
      alt: 'Hartalega'
    },
    {
      url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/e5e52a66d_aviya_48h.png',
      alt: 'Aviya'
    },
    {
      url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/e67da03da_epic_48h.png',
      alt: 'Epic'
    },
    {
      url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/2890fc895_mend_48h.png',
      alt: 'Mend'
    },
    {
      url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/e64319fb9_integrio_48h.png',
      alt: 'Integrio'
    },
    {
      url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/c2a4a8150_global_trade_association_48h.png',
      alt: 'Global Trade Association'
    },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section ref={ref} className="py-12 bg-[#0B1020] overflow-hidden relative">
      <ContourBackground className="opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm font-medium text-white/40 uppercase tracking-wider mb-8"
        >
          Trusted by
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0B1020] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0B1020] to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling container */}
          <div className="flex">
            <motion.div
              className="flex gap-12 items-center"
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                x: {
                  duration: 50,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                },
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-16 flex items-center justify-center brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300"
                >
                  <img
                    src={logo.url}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}