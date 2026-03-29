import React from 'react';
import { motion } from 'framer-motion';
import { Search, Smartphone, TrendingUp, Zap } from 'lucide-react';

export default function ProcessStepVisual() {
  const steps = [
    { icon: Search, label: 'Audit', color: 'from-blue-600 to-blue-500', bgColor: 'bg-blue-600', textColor: 'text-blue-600' },
    { icon: Smartphone, label: 'Redesign', color: 'from-[#DBFE01] to-[#c5e000]', bgColor: 'bg-[#DBFE01]', textColor: 'text-[#DBFE01]' },
    { icon: TrendingUp, label: 'Grow', color: 'from-emerald-600 to-emerald-500', bgColor: 'bg-emerald-600', textColor: 'text-emerald-600' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.15, rotate: 12 },
    tap: { scale: 0.95 }
  };

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.6 },
    animate: { scale: 1.3, opacity: 0 },
    transition: { duration: 1.5, repeat: Infinity }
  };

  return (
    <div className="mt-12 flex justify-center w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="w-full max-w-2xl"
      >
        {/* Desktop: Horizontal layout */}
        <div className="hidden md:flex items-center justify-between gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={idx}>
                {/* Step */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col items-center gap-4 flex-1"
                  whileHover="hover"
                >
                  {/* Icon Container */}
                  <div className="relative w-20 h-20">
                    {/* Pulsing background */}
                    <motion.div
                      className={`absolute inset-0 rounded-full ${step.bgColor} opacity-20`}
                      animate={pulseVariants}
                    />
                    
                    {/* Icon button */}
                    <motion.div
                      variants={iconVariants}
                      whileTap="tap"
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer`}
                    >
                      <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                    </motion.div>
                  </div>

                  {/* Label */}
                  <motion.span
                    className={`text-lg font-bold ${step.textColor} text-center`}
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.label}
                  </motion.span>
                </motion.div>

                {/* Divider (except last) */}
                {idx < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 0.4 + idx * 0.2, duration: 0.6 }}
                    className="flex-1 h-1.5 bg-gradient-to-r from-slate-300 to-slate-300 rounded-full origin-left"
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile: Vertical stacked */}
        <div className="md:hidden flex flex-col items-center gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={idx}>
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col items-center gap-4 w-full"
                  whileHover="hover"
                >
                  {/* Icon Container */}
                  <div className="relative w-24 h-24">
                    {/* Pulsing background */}
                    <motion.div
                      className={`absolute inset-0 rounded-full ${step.bgColor} opacity-20`}
                      animate={pulseVariants}
                    />
                    
                    {/* Icon button */}
                    <motion.div
                      variants={iconVariants}
                      whileTap="tap"
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer`}
                    >
                      <Icon className="w-12 h-12 text-white" strokeWidth={2.5} />
                    </motion.div>
                  </div>

                  {/* Label */}
                  <motion.span
                    className={`text-xl font-bold ${step.textColor} text-center`}
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.label}
                  </motion.span>
                </motion.div>

                {/* Divider (except last) */}
                {idx < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    transition={{ delay: 0.4 + idx * 0.2, duration: 0.6 }}
                    className="w-1 h-8 bg-gradient-to-b from-slate-300 to-slate-300 rounded-full origin-top"
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}