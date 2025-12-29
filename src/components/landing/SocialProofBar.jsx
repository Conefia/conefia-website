import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, TrendingUp, Shield } from 'lucide-react';

export default function SocialProofBar({ reduceMotion }) {
  const metrics = [
    { icon: Clock, value: '30-50%', label: 'Faster time-to-market' },
    { icon: Zap, value: '8-12', label: 'Weeks to MVP' },
    { icon: TrendingUp, value: '100-500', label: 'Users in 30-60 days' },
    { icon: Shield, value: '100%', label: 'HIPAA-aware flows' },
  ];

  return (
    <section className="py-12 md:py-16 border-y border-[#2F2F2F]/5 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: reduceMotion ? 0 : 0.5, 
                delay: reduceMotion ? 0 : index * 0.1 
              }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#DBFE01]/10 mb-4 group-hover:bg-[#DBFE01]/20 transition-colors">
                <metric.icon className="w-5 h-5 text-[#2F2F2F]" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-[#2F2F2F] mb-1">
                {metric.value}
              </p>
              <p className="text-sm text-[#2F2F2F]/50 font-medium">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}