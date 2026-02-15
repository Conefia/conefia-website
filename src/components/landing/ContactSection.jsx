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
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-[#DBFE01]/8" />
      <div className="absolute inset-0 bg-[radial-gradient(#DBFE01_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.08]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#DBFE01]/15 to-transparent blur-[100px]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-blue-500/10 via-purple-500/5 to-transparent blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: reduceMotion ? 0 : 0.7 }}
            className="text-center md:text-left"
          >
            <span className="bg-gradient-to-r from-[#1a1a1a]/5 to-[#2F2F2F]/5 text-[#1a1a1a]/70 px-4 py-2.5 text-sm font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-2 border border-[#1a1a1a]/15 mb-4 shadow-sm">
              <Sparkles className="w-4 h-4 stroke-black fill-[#DBFE01]" />
              Get Started
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-4 leading-tight">
              Ready to <span className="bg-gradient-to-r from-[#DBFE01] via-[#c5e000] to-[#a8c600] bg-clip-text text-transparent">launch</span>?
            </h2>
            <p className="text-lg text-[#2F2F2F]/70 mb-8 leading-relaxed font-medium">
              Book a <span className="font-extrabold text-[#1a1a1a]">free 30-minute roadmap call</span> and let's discuss how we can take your idea from concept to market. 
              No commitment, just a conversation about what's possible.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
              {trustItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white backdrop-blur-sm shadow-lg border border-gray-200/50 hover:border-[#DBFE01]/50 hover:shadow-xl hover:scale-105 transition-all group"
                >
                  <item.icon className="w-5 h-5 text-[#1a1a1a] group-hover:text-[#DBFE01] transition-colors" />
                  <span className="text-sm text-[#1a1a1a] font-semibold">{item.text}</span>
                </div>
              ))}
            </div>


          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.2 }}
          >
            <div className="rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-[#DBFE01]/20 border-2 border-[#DBFE01]/50 bg-[#0a0e1a] backdrop-blur-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#DBFE01_1px,transparent_1px)] [background-size:16px_16px] opacity-20 -z-10 pointer-events-none" />
              
              <div className="space-y-6 relative z-10 py-6 sm:py-8">
                <Link to={createPageUrl('Book')}>
                  <Button
                    className="w-full h-14 sm:h-16 rounded-full bg-[#DBFE01] hover:bg-[#c5e000] text-[#1a1a1a] font-extrabold text-base sm:text-lg transition-all hover:shadow-2xl hover:shadow-[#DBFE01]/50 hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    Book Free 30-Min Roadmap Call
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>

                <a href="mailto:info@conefia.com">
                  <Button
                    variant="outline"
                    className="w-full h-12 sm:h-14 rounded-full border-2 border-white/20 bg-transparent hover:bg-white/5 text-white font-semibold text-sm sm:text-base transition-all"
                  >
                    Prefer to message us? Contact us
                  </Button>
                </a>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-3 justify-center pt-4">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <CheckCircle2 className="w-4 h-4 text-[#DBFE01]" />
                    <span className="text-xs text-white/90 font-semibold">No commitment</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <CheckCircle2 className="w-4 h-4 text-[#DBFE01]" />
                    <span className="text-xs text-white/90 font-semibold">Instant confirmation</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}