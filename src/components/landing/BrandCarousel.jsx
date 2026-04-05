import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

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
    url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/c2a4a8150_global_trade_association_48h.png',
    alt: 'Global Trade Association'
  }];


  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section ref={ref} className="bg-stone-950 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
        {/* Entrance animation */}
        <motion.p
          initial={isMobile ? false : { opacity: 0 }}
          animate={isMobile ? false : (isInView ? { opacity: 1 } : { opacity: 0 })}
          transition={isMobile ? {} : { duration: 0.4 }}
          className="text-center text-sm font-medium text-white/40 uppercase tracking-wider mb-4 px-4">
          Trusted by
        </motion.p>
        
        <motion.div
          initial={isMobile ? false : { opacity: 0 }}
          animate={isMobile ? false : (isInView ? { opacity: 1 } : { opacity: 0 })}
          transition={isMobile ? {} : { duration: 0.4, delay: 0.1 }}
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          {/* Scrolling container */}
          <div className="flex">
            <motion.div
              className="flex gap-12 items-center"
              animate={{
                x: ['0%', '-50%']
              }}
              transition={{
                x: {
                  duration: isMobile ? 40 : 50,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }
              }}>
               {duplicatedLogos.map((logo, index) =>
              <div
               key={index}
               className="flex-shrink-0 w-32 h-16 flex items-center justify-center brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300 will-change-transform"
               role="img"
               aria-label={logo.alt}>

                  <img
                  src={logo.url}
                  alt={logo.alt}
                  loading="lazy"
                  width="128"
                  height="64"
                  decoding="async"
                  className="max-w-full max-h-full object-contain" />

                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>);

}