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
    <section ref={ref} id="contact" className="py-20 md:py-28 bg-[#DBFE01] relative overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#1a1a1a 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      
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
              whileHover={{ scale: 1.05 }}
              className="bg-[#1a1a1a] text-[#DBFE01] px-4 py-2.5 text-sm font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-2 mb-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              Get Started
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a1a] mb-6 leading-tight drop-shadow-sm"
            >
              Ready to <span className="relative inline-block">
                <span className="relative z-10">launch</span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-[#1a1a1a]/10 -rotate-1"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                />
              </span>?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.4 }}
              className="text-lg md:text-xl text-[#1a1a1a]/80 mb-8 leading-relaxed font-medium"
            >
              Book a <span className="font-extrabold text-[#1a1a1a] relative">
                <span className="relative z-10">free 30-minute roadmap call</span>
                <span className="absolute -bottom-1 left-0 right-0 h-2 bg-[#1a1a1a]/5 blur-sm" />
              </span> and let's discuss how we can take your idea from concept to market. 
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
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1a1a1a]/5 backdrop-blur-sm shadow-md border-2 border-[#1a1a1a]/30 hover:border-[#1a1a1a] hover:bg-[#1a1a1a]/10 hover:shadow-xl transition-all group cursor-default"
                >
                  <item.icon className="w-5 h-5 text-[#1a1a1a]/60 group-hover:text-[#1a1a1a] transition-colors" />
                  <span className="text-sm text-[#1a1a1a] font-bold">{item.text}</span>
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
              className="rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(26,26,26,0.15)] hover:shadow-[0_30px_80px_rgba(26,26,26,0.25)] border-2 border-[#1a1a1a]/15 hover:border-[#1a1a1a]/30 bg-white backdrop-blur-xl relative overflow-hidden group transition-all duration-300"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#1a1a1a 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
              
              {/* Animated glow on hover */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-[#1a1a1a]/0 via-[#1a1a1a]/5 to-[#1a1a1a]/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <div className="relative z-10 py-6 sm:py-8 mb-8">
                <Link to={createPageUrl('Book')}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className="w-full h-14 sm:h-16 rounded-xl bg-gradient-to-r from-[#DBFE01] to-[#c5e000] hover:from-[#c5e000] hover:to-[#DBFE01] text-[#1a1a1a] font-extrabold text-base sm:text-lg transition-all shadow-[0_1px_0_0_rgba(255,255,255,0.3)_inset,0_4px_12px_rgba(219,254,1,0.25)] hover:shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset,0_6px_20px_rgba(219,254,1,0.35)] hover:-translate-y-1 flex items-center justify-center gap-2 group"
                    >
                      Book Free 30-Min Roadmap Call
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>

                <motion.a 
                  href="mailto:info@conefia.com"
                  className="block text-center text-[#1a1a1a]/70 hover:text-[#1a1a1a] font-semibold text-sm sm:text-base transition-colors mt-6"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Prefer to message us? <span className="underline">Contact us</span>
                </motion.a>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-3 justify-center pt-8 mt-6">
                  {[
                    { icon: CheckCircle2, text: 'No commitment' },
                    { icon: CheckCircle2, text: 'Instant confirmation' }
                  ].map((badge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.08, rotate: [0, -2, 2, 0] }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#1a1a1a]/5 backdrop-blur-sm border border-[#1a1a1a]/20 hover:border-[#1a1a1a]/40 hover:bg-[#1a1a1a]/10 hover:shadow-md transition-all cursor-default"
                    >
                      <badge.icon className="w-4 h-4 text-[#1a1a1a]" />
                      <span className="text-xs text-[#1a1a1a]/90 font-bold">{badge.text}</span>
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