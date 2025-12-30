import React from 'react';
import { motion, useInView } from 'framer-motion';

export default function BrandLogoCarousel({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const logos = [
    {
      name: 'Vascular Institute of Michigan',
      url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/ecec6229d_vim_48h.png'
    },
    {
      name: 'Menovia AI',
      url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/dc1e7ec77_menovia_48h.png'
    },
    {
      name: 'Larovie Beauty',
      url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/056d60436_larovie_48h.png'
    },
    {
      name: 'Al-Mahfza',
      url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/5593d17a5_al_mahfza_48h.png'
    },
    {
      name: 'Hartalega',
      url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/6f53befcc_hartalega_48h.png'
    },
    {
      name: 'Aviya Telemed',
      url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/b82193027_aviya_48h.png'
    },
    {
      name: 'Accenture',
      url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/249ea7a87_accenture_48h.png'
    },
    {
      name: 'Epic',
      url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/a9d4b4522_epic_48h.png'
    },
    {
      name: 'Mend',
      url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695311d1426e4dadf87a8d53/3c6f416b3_mend_48h.png'
    }
  ];

  return (
    <section ref={ref} className="py-12 md:py-16 bg-gradient-to-r from-[#DBFE01]/20 via-[#DBFE01]/10 to-[#DBFE01]/20 overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-sm font-semibold text-[#1a1a1a]/40 uppercase tracking-wider">
            Trusted by forward-thinking teams
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.2 }}
        >
          <div className="overflow-hidden">
            <div className="flex gap-12 md:gap-16 animate-scroll">
              {/* Duplicate logos twice for seamless infinite scroll */}
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-[0_0_auto] flex items-center justify-center"
                  style={{ minWidth: '140px' }}
                >
                  <div className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300">
                    <img
                      src={logo.url}
                      alt={logo.name}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}