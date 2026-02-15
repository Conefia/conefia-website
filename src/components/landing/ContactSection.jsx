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
    <section ref={ref} id="contact" className="py-24 md:py-32 bg-gradient-to-br from-[#DBFE01] via-[#d4f601] to-[#c5e000] relative overflow-hidden">
      {/* Animated Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: "radial-gradient(#1a1a1a 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        animate={{ backgroundPosition: ['0px 0px', '24px 24px'] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Animated glow orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#1a1a1a]/20 to-transparent blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#1a1a1a]/15 to-transparent blur-[80px]"
      />
      
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
              className="bg-[#1a1a1a] text-[#DBFE01] px-5 py-3 text-xs font-black uppercase tracking-widest rounded-full inline-flex items-center gap-2 mb-8 shadow-lg"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
              Let's Build Together
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.3 }}
              className="text-4xl md:text-5xl lg:text-7xl font-black text-[#1a1a1a] mb-8 leading-[1.1] tracking-tight"
            >
              Ready to <span className="relative inline-block">
                <span className="relative z-10">launch</span>
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-3 bg-[#1a1a1a]/20 -z-0"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.4 }}
              className="text-xl md:text-2xl text-[#1a1a1a] mb-10 leading-relaxed font-semibold"
            >
              Book a <span className="font-black bg-[#1a1a1a] text-[#DBFE01] px-2 py-1 rounded">free 30-minute</span> roadmap call. 
              <span className="block mt-2 text-lg text-[#1a1a1a]/70">No commitment. Just possibilities.</span>
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
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#1a1a1a] shadow-xl hover:shadow-2xl border-2 border-[#1a1a1a] transition-all group cursor-default"
                >
                  <item.icon className="w-5 h-5 text-[#DBFE01] transition-transform group-hover:scale-110" />
                  <span className="text-sm text-white font-bold">{item.text}</span>
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
              className="rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl border-4 border-[#1a1a1a] bg-white relative overflow-hidden group"
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DBFE01]/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
              />
              
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#1a1a1a 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
              
              <div className="relative z-10 py-8 sm:py-10">
                <Link to={createPageUrl('Book')}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      className="w-full h-16 sm:h-20 rounded-2xl bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] hover:from-[#2a2a2a] hover:via-[#3a3a3a] hover:to-[#2a2a2a] text-[#DBFE01] font-black text-lg sm:text-xl transition-all shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] hover:-translate-y-2 flex items-center justify-center gap-3 group relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#DBFE01]/0 via-[#DBFE01]/20 to-[#DBFE01]/0"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                      <span className="relative z-10">Book Free 30-Min Roadmap Call</span>
                      <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>

                <motion.a 
                  href="mailto:info@conefia.com"
                  className="block text-center text-[#1a1a1a] hover:text-[#1a1a1a] font-bold text-base sm:text-lg transition-all mt-8 group"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Prefer email? <span className="underline decoration-2 decoration-[#1a1a1a]/30 group-hover:decoration-[#1a1a1a] underline-offset-4">info@conefia.com</span>
                </motion.a>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-4 justify-center pt-10 mt-8 border-t-2 border-[#1a1a1a]/10">
                  {[
                    { icon: CheckCircle2, text: 'No commitment' },
                    { icon: CheckCircle2, text: 'Instant confirmation' }
                  ].map((badge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#1a1a1a] border-2 border-[#1a1a1a] shadow-lg hover:shadow-xl transition-all cursor-default"
                    >
                      <badge.icon className="w-5 h-5 text-[#DBFE01]" />
                      <span className="text-sm text-white font-bold">{badge.text}</span>
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