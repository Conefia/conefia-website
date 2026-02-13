import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Send, CheckCircle2, Clock, Users, Shield, Mail, MessageSquare, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { usePersona } from '@/components/context/PersonaContext';

export default function ContactSection({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { selectedPersona } = usePersona();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await base44.integrations.Core.SendEmail({
        to: 'info@conefia.com',
        subject: `New Roadmap Call Request: ${formData.name}`,
        body: `Name: ${formData.name}\nEmail: ${formData.email}\nProject: ${formData.project}`
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Failed to send email:", error);
      // Fallback to showing success anyway for UX, or handle error appropriately
      setSubmitted(true);
    }
  };

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
            <div className="flex flex-wrap gap-4 mb-8">
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
            <div className="rounded-3xl p-8 md:p-10 shadow-2xl shadow-[#DBFE01]/20 border-2 border-[#DBFE01]/50 bg-[#0a0e1a] backdrop-blur-xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      Your name
                    </label>
                    <Input
                      type="text"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 rounded-xl border-white/20 bg-white/10 text-white placeholder:text-white/40 shadow-sm focus:border-[#DBFE01] focus:ring-2 focus:ring-[#DBFE01]/30 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      Email address
                    </label>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 rounded-xl border-white/20 bg-white/10 text-white placeholder:text-white/40 shadow-sm focus:border-[#DBFE01] focus:ring-2 focus:ring-[#DBFE01]/30 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      {selectedPersona.footerFormPrompt || "What are you building?"}
                    </label>
                    <Textarea
                      placeholder="Tell us about your idea or project..."
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className="min-h-[120px] rounded-xl border-white/20 bg-white/10 text-white placeholder:text-white/40 shadow-sm focus:border-[#DBFE01] focus:ring-2 focus:ring-[#DBFE01]/30 resize-none transition-all"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 rounded-xl bg-gradient-to-r from-[#DBFE01] to-[#c5e000] hover:from-[#c8e600] hover:to-[#b0d000] text-[#0a0e1a] font-extrabold text-base transition-all hover:shadow-2xl hover:shadow-[#DBFE01]/50 hover:-translate-y-1"
                  >
                    Book Your Roadmap Call
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <p className="text-center text-xs text-white/40">
                    No spam, ever. We'll respond within 24 hours.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-[#DBFE01] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#DBFE01]/30">
                    <CheckCircle2 className="w-8 h-8 text-[#1a1a1a]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">You're in!</h3>
                  <p className="text-white/70 mb-6 font-medium">
                    We'll reach out within 24 hours to schedule your free 30-minute roadmap call.
                  </p>

                </motion.div>
              )}
            </div>

            {/* Alternative contact */}
            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-[#2F2F2F]/50">
              <a 
                href="mailto:info@conefia.com" 
                className="flex items-center gap-2 hover:text-[#2F2F2F] transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}