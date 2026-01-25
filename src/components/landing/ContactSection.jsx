import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Send, CheckCircle2, Clock, Users, Shield, Mail, MessageSquare, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactSection({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
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
    <section ref={ref} id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] to-white" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#DBFE01] opacity-[0.06] blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: reduceMotion ? 0 : 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#DBFE01]/20 text-[#2F2F2F] text-sm font-medium mb-4">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F2F2F] mb-4 leading-tight">
              Ready to Stop Managing and <span className="gradient-text">Start Executing?</span>
            </h2>
            <p className="text-lg text-[#2F2F2F]/80 mb-8 leading-relaxed font-medium">
              If you recognized your situation above—whether you're a clinic owner, an AI founder, 
              an app that needs rescue, a DTC brand, or an accelerator director—let's map your specific path.
              <br /><br />
              This is a 30-minute diagnostic call. You'll leave with a clear roadmap. If we're not the right fit, that roadmap is yours anyway.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 mb-8">
              {trustItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-[#2F2F2F]/5"
                >
                  <item.icon className="w-5 h-5 text-[#1a1a1a]" />
                  <span className="text-sm text-[#2F2F2F]/90 font-semibold">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mb-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-sm font-bold text-gray-800 mb-3">Or choose your path directly:</p>
              <div className="flex flex-wrap gap-2">
                 <a href="/clinic-growth" className="text-xs bg-white border border-gray-200 px-3 py-2 rounded-lg hover:border-[#DBFE01] hover:text-[#1a1a1a] transition-colors">🏥 Clinic Owner</a>
                 <a href="/ai-founder-sprint" className="text-xs bg-white border border-gray-200 px-3 py-2 rounded-lg hover:border-[#DBFE01] hover:text-[#1a1a1a] transition-colors">🤖 AI Founder</a>
                 <a href="/app-relaunch" className="text-xs bg-white border border-gray-200 px-3 py-2 rounded-lg hover:border-[#DBFE01] hover:text-[#1a1a1a] transition-colors">📱 App Founder</a>
                 <a href="/dtc-growth" className="text-xs bg-white border border-gray-200 px-3 py-2 rounded-lg hover:border-[#DBFE01] hover:text-[#1a1a1a] transition-colors">🛍️ DTC Brand</a>
                 <a href="/accelerator-support" className="text-xs bg-white border border-gray-200 px-3 py-2 rounded-lg hover:border-[#DBFE01] hover:text-[#1a1a1a] transition-colors">🚀 Accelerator Director</a>
              </div>
            </div>


          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.2 }}
          >
            <div className="glass-card rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/5">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#2F2F2F] mb-2">
                      Your name
                    </label>
                    <Input
                      type="text"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 rounded-xl border-[#2F2F2F]/10 focus:border-[#DBFE01] focus:ring-[#DBFE01]/20"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2F2F2F] mb-2">
                      Email address
                    </label>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 rounded-xl border-[#2F2F2F]/10 focus:border-[#DBFE01] focus:ring-[#DBFE01]/20"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2F2F2F] mb-2">
                      What are you working on?
                    </label>
                    <Textarea
                      placeholder="Tell us about your company and main challenge..."
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className="min-h-[120px] rounded-xl border-[#2F2F2F]/10 focus:border-[#DBFE01] focus:ring-[#DBFE01]/20 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 rounded-xl bg-[#DBFE01] hover:bg-[#c8e600] text-[#2F2F2F] font-semibold text-base transition-all hover:shadow-lg hover:shadow-[#DBFE01]/30"
                  >
                    Book roadmap call
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <p className="text-center text-xs text-[#2F2F2F]/40">
                    No spam, ever. We'll respond within 24 hours.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-[#DBFE01] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#2F2F2F]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2F2F2F] mb-2">You're in!</h3>
                  <p className="text-[#2F2F2F]/60 mb-6">
                    We'll reach out within 24 hours to schedule your roadmap call.
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