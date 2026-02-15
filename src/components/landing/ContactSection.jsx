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
    <section ref={ref} id="contact" className="py-20 md:py-28 relative overflow-hidden bg-[#DBFE01]">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#1a1a1a 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.2 }}
            className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-8 leading-tight"
          >
            Ready to launch?
          </motion.h2>


          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Link to={createPageUrl('Book')}>
              <Button
                className="px-8 py-4 bg-[#1a1a1a] text-white rounded-xl text-base font-bold flex items-center justify-center gap-2 hover:bg-black transition-all hover:scale-105 shadow-[0_1px_0_0_rgba(255,255,255,0.1)_inset,0_4px_12px_rgba(0,0,0,0.3)]"
              >
                Book Free 30-Min Roadmap Call
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a 
              href="mailto:info@conefia.com"
              className="px-8 py-4 bg-transparent border-2 border-[#1a1a1a] text-[#1a1a1a] rounded-xl text-base font-bold flex items-center justify-center gap-2 hover:bg-[#1a1a1a] hover:text-[#DBFE01] transition-all hover:scale-105"
            >
              Contact Us
            </a>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.4 }}
            className="text-[#1a1a1a]/60 text-xs font-semibold uppercase tracking-wider"
          >
            No spam. Clear next steps within 24 hours.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}