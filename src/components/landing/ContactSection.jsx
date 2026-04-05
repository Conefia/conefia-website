import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactSection({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} id="contact" className="py-20 md:py-28 bg-[#DBFE01] relative overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#1a1a1a 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
          className="bg-[#1a1a1a] text-[#DBFE01] px-4 py-2.5 text-sm font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-2 mb-6 shadow-lg">
          
          <Sparkles className="w-4 h-4 animate-pulse" />
          Get Started
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.1 }}
          className="text-2xl font-bold text-[#1a1a1a] mb-6 leading-tight">
          
          Ready to launch?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.2 }} className="text-[#1a1a1a]/80 mb-10 text-base font-normal leading-relaxed md:text-xl">

          
          Book a free 30-minute roadmap call and let's discuss how we can take your idea from concept to market.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.3 }}>
          
          <Link to={createPageUrl('book')}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button className="h-14 sm:h-16 px-10 rounded-xl bg-[#1a1a1a] hover:bg-black text-white font-extrabold text-base sm:text-lg transition-all shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)] hover:-translate-y-1 inline-flex items-center gap-2 group">
                Book Free Roadmap Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </Link>

          <motion.a
            href="mailto:info@conefia.com"
            className="block text-[#1a1a1a]/70 hover:text-[#1a1a1a] font-semibold text-sm sm:text-base transition-colors mt-4"
            whileHover={{ scale: 1.02 }}>
            
            Prefer to message us? <span className="underline">Contact us</span>
          </motion.a>

          <p className="mt-6 text-sm text-[#1a1a1a]/60 font-medium flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            No commitment · Instant confirmation
          </p>
        </motion.div>
      </div>
    </section>);

}