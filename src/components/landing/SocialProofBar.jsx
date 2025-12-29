import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Clock, TrendingUp, Shield } from 'lucide-react';

export default function SocialProofBar({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const metrics = [
    { icon: Clock, value: '30-50%', label: 'Faster time-to-market', subtext: 'vs. fragmented vendors' },
    { icon: Zap, value: '8-12', label: 'Weeks to MVP', subtext: 'Full product launch' },
    { icon: TrendingUp, value: '100-500', label: 'Users in 30-60 days', subtext: 'Post-launch traction' },
    { icon: Shield, value: '100%', label: 'HIPAA-aware flows', subtext: 'Privacy by design' },
  ];

  return (
    <section ref={ref} className="py-16 md:py-20 border-y border-[#1a1a1a]/10 bg-white/70 backdrop-blur-sm">
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
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#DBFE01]/15 mb-4 group-hover:bg-[#DBFE01]/25 transition-colors border border-[#DBFE01]/20">
                <metric.icon className="w-6 h-6 text-[#1a1a1a]" />
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