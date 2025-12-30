import React from 'react';
import { motion } from 'framer-motion';

export default function PremiumBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Deep navy base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1d35] to-[#081220]" />
      
      {/* Fine grain noise for texture */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px'
        }}
      />

      {/* Soft lime glow clusters */}
      <motion.div 
        className="absolute top-20 right-[15%] w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(219, 254, 1, 0.4) 0%, rgba(219, 254, 1, 0.1) 40%, transparent 70%)'
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] rounded-full opacity-15 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(219, 254, 1, 0.35) 0%, rgba(219, 254, 1, 0.08) 50%, transparent 75%)'
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div 
        className="absolute top-[50%] left-[50%] w-[400px] h-[400px] rounded-full opacity-10 blur-[90px]"
        style={{
          background: 'radial-gradient(circle, rgba(219, 254, 1, 0.3) 0%, rgba(219, 254, 1, 0.05) 60%, transparent 80%)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [-50, -30, -50],
          y: [-50, -70, -50],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      {/* Flowing contour lines - topographic style */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(219, 254, 1, 0.15)" />
            <stop offset="50%" stopColor="rgba(219, 254, 1, 0.25)" />
            <stop offset="100%" stopColor="rgba(219, 254, 1, 0.1)" />
          </linearGradient>
        </defs>
        
        {/* Organic flowing contour lines */}
        <motion.path
          d="M 0 150 Q 200 120, 400 150 T 800 150 T 1200 150 T 1600 150"
          stroke="url(#lineGradient)"
          strokeWidth="0.8"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        
        <motion.path
          d="M 0 250 Q 250 230, 500 250 T 1000 250 T 1500 250"
          stroke="url(#lineGradient)"
          strokeWidth="0.6"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3.5, ease: "easeInOut", delay: 0.3 }}
        />

        <motion.path
          d="M -100 400 Q 150 370, 400 400 T 800 400 T 1200 400 T 1600 400"
          stroke="rgba(219, 254, 1, 0.12)"
          strokeWidth="0.7"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, ease: "easeInOut", delay: 0.6 }}
        />

        <motion.path
          d="M 100 550 Q 350 520, 600 550 T 1200 550 T 1800 550"
          stroke="rgba(219, 254, 1, 0.1)"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3.8, ease: "easeInOut", delay: 0.9 }}
        />

        <motion.path
          d="M -50 700 Q 200 670, 450 700 T 900 700 T 1350 700 T 1800 700"
          stroke="rgba(219, 254, 1, 0.08)"
          strokeWidth="0.6"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4.2, ease: "easeInOut", delay: 1.2 }}
        />

        <motion.path
          d="M 150 850 Q 400 830, 650 850 T 1300 850 T 1950 850"
          stroke="rgba(219, 254, 1, 0.09)"
          strokeWidth="0.4"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3.6, ease: "easeInOut", delay: 1.5 }}
        />

        {/* Additional curved lines for depth */}
        <motion.path
          d="M 800 100 Q 1000 80, 1200 100 T 1600 100 T 2000 100"
          stroke="rgba(219, 254, 1, 0.07)"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4.5, ease: "easeInOut", delay: 0.4 }}
        />

        <motion.path
          d="M 600 320 Q 800 300, 1000 320 T 1400 320 T 1800 320"
          stroke="rgba(219, 254, 1, 0.11)"
          strokeWidth="0.6"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3.2, ease: "easeInOut", delay: 1.0 }}
        />
      </svg>
    </div>
  );
}