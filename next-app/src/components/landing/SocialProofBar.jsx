"use client";
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { usePersona } from '@/components/context/PersonaContext';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const MetricCard = ({ metric, index, reduceMotion, isInView }) => {
  const Icon = metric.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: reduceMotion ? 0 : 0.6, 
        delay: reduceMotion ? 0 : index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="text-center group h-full flex flex-col items-center justify-center"
    >
      <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl ${metric.bgColor} mb-6 transition-all duration-300 border ${metric.borderColor} group-hover:scale-110`}>
        {!reduceMotion && (
          <motion.div 
            className="absolute inset-0 rounded-2xl"
            style={{ backgroundColor: metric.ringColor }}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ 
              scale: [1, 1.5],
              opacity: [0.3, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.8
            }}
          />
        )}
        {Icon && <Icon className={`w-7 h-7 ${metric.color} relative z-10`} strokeWidth={1.5} />}
      </div>
      <motion.p 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.2 + index * 0.12 }}
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] mb-2 tracking-tight"
      >
        {metric.value}
      </motion.p>
      <p className="text-sm font-bold text-[#1a1a1a] px-4">
        {metric.label}
      </p>
    </motion.div>
  );
};

export default function SocialProofBar({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { selectedPersona } = usePersona();
  
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);

  // Safety check to prevent errors if context is not ready
  if (!selectedPersona) {
    return null;
  }

  const metrics = selectedPersona.metrics || [];
  const microLine = selectedPersona.microLine || "Outcomes when execution is owned end-to-end.";

  return (
    <section ref={ref} className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden shadow-sm z-10 transition-colors duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(#DBFE01_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.15] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Micro-line */}
        <motion.div 
          key={`micro-${selectedPersona.id}`}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
           <p className="text-lg md:text-xl text-[#1a1a1a]/80 font-medium max-w-3xl mx-auto italic px-4">
             "{microLine}"
           </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden overflow-hidden -mx-4 px-4" ref={emblaRef}>
           <div className="flex">
             {metrics.map((metric, index) => (
               <div key={`${selectedPersona.id}-mobile-${index}`} className="flex-[0_0_100%] min-w-0 px-4 py-4">
                 <MetricCard 
                    metric={metric} 
                    index={index} 
                    reduceMotion={reduceMotion} 
                    isInView={isInView} 
                 />
               </div>
             ))}
           </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
             <MetricCard 
                key={`${selectedPersona.id}-desktop-${index}`}
                metric={metric} 
                index={index} 
                reduceMotion={reduceMotion} 
                isInView={isInView} 
             />
          ))}
        </div>
      </div>
    </section>
  );
}