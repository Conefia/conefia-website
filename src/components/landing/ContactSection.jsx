import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Clock, Users, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const trustItems = [
    { icon: Clock, text: 'MVP: 8–12 Weeks' },
    { icon: Users, text: 'Weekly Demos' },
    { icon: Shield, text: 'Privacy First' },
  ];

  return (
    <section ref={ref} id="contact" className="py-20 md:py-28 relative overflow-hidden">
      {/* Enhanced background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#111827] to-[#1a1f2e]" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#DBFE01]/30 via-[#c5e000]/20 to-transparent blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-500/20 via-purple-500/15 to-transparent blur-[120px]"
      />
      
      {/* Animated dots pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#DBFE01_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.15]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: reduceMotion ? 0 : 0.7 }}
            className="text-center md:text-left"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.2 }}
              className="bg-gradient-to-r from-[#DBFE01]/20 to-[#c5e000]/20 text-[#DBFE01] px-4 py-2.5 text-sm font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-2 border border-[#DBFE01]/30 mb-6 shadow-lg shadow-[#DBFE01]/20 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              Get Started
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
            >
              Ready to <span className="bg-gradient-to-r from-[#DBFE01] via-[#c5e000] to-[#a8c600] bg-clip-text text-transparent animate-pulse">launch</span>?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.4 }}
              className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed font-medium"
            >
              Book a <span className="font-extrabold text-[#DBFE01]">free 30-minute roadmap call</span> and let's discuss how we can take your idea from concept to market. 
              No commitment, just a conversation about what's possible.
            </motion.p>

            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.5 }}
              className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start"
            >
              {trustItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-sm shadow-lg border border-white/20 hover:border-[#DBFE01]/50 hover:shadow-xl hover:shadow-[#DBFE01]/20 transition-all group cursor-default"
                >
                  <item.icon className="w-5 h-5 text-white/70 group-hover:text-[#DBFE01] transition-colors" />
                  <span className="text-sm text-white font-semibold">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>


          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.2 }}
          >
            <motion.div 
              className="rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-[#DBFE01]/30 border-2 border-[#DBFE01]/60 bg-gradient-to-br from-[#0a0e1a] to-[#121829] backdrop-blur-xl relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background pattern */}
              <motion.div 
                className="absolute inset-0 bg-[radial-gradient(#DBFE01_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none"
                animate={{
                  backgroundPosition: ['0px 0px', '20px 20px'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#DBFE01]/0 via-[#DBFE01]/0 to-[#DBFE01]/0 group-hover:from-[#DBFE01]/10 group-hover:via-[#DBFE01]/5 group-hover:to-[#DBFE01]/0 transition-all duration-500 pointer-events-none" />
              
              <div className="space-y-10 relative z-10 py-6 sm:py-8 mb-8">
                <Link to={createPageUrl('Book')}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className="w-full h-14 sm:h-16 rounded-full bg-gradient-to-r from-[#DBFE01] to-[#c5e000] hover:from-[#c5e000] hover:to-[#DBFE01] text-[#1a1a1a] font-extrabold text-base sm:text-lg transition-all shadow-2xl shadow-[#DBFE01]/50 hover:shadow-[#DBFE01]/70 hover:-translate-y-1 flex items-center justify-center gap-2 group"
                    >
                      Book Free 30-Min Roadmap Call
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>

                <motion.a 
                  href="mailto:info@conefia.com"
                  className="block text-center text-white hover:text-[#DBFE01] font-semibold text-sm sm:text-base transition-colors underline"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Prefer to message us? Contact us
                </motion.a>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-3 justify-center pt-4">
                  {[
                    { icon: CheckCircle2, text: 'No commitment' },
                    { icon: CheckCircle2, text: 'Instant confirmation' }
                  ].map((badge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#DBFE01]/50 transition-all cursor-default"
                    >
                      <badge.icon className="w-4 h-4 text-[#DBFE01]" />
                      <span className="text-xs text-white/90 font-semibold">{badge.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}