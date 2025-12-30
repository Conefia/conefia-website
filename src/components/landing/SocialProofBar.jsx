import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Timer, Rocket, Users, ShieldCheck } from 'lucide-react';

export default function SocialProofBar({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const metrics = [
    { 
      icon: Timer, 
      value: '30-50%', 
      label: 'Faster time-to-market', 
      subtext: 'vs. fragmented vendors',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-100',
      ringColor: '#2563eb'
    },
    { 
      icon: Rocket, 
      value: '8-12', 
      label: 'Weeks to MVP', 
      subtext: 'Full product launch',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-100',
      ringColor: '#9333ea'
    },
    { 
      icon: Users, 
      value: '100-500', 
      label: 'Users in 30-60 days', 
      subtext: 'Post-launch traction',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-100',
      ringColor: '#059669'
    },
    { 
      icon: ShieldCheck, 
      value: '100%', 
      label: 'HIPAA-aware flows', 
      subtext: 'Privacy by design',
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-100',
      ringColor: '#e11d48'
    },
  ];

  return (
    <section ref={ref} className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden shadow-sm z-10">
      <div className="absolute inset-0 bg-[radial-gradient(#DBFE01_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.15] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: reduceMotion ? 0 : 0.6, 
                delay: reduceMotion ? 0 : index * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="text-center group"
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
                <metric.icon className={`w-7 h-7 ${metric.color} relative z-10`} strokeWidth={1.5} />
              </div>
              <motion.p 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.2 + index * 0.12 }}
                className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-2"
              >
                {metric.value}
              </motion.p>
              <p className="text-sm font-bold text-[#1a1a1a] mb-1">
                {metric.label}
              </p>
              <p className="text-xs text-[#1a1a1a]/50 font-medium">
                {metric.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}