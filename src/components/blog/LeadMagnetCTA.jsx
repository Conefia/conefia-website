import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function LeadMagnetCTA() {
  const [email, setEmail] = useState('');
  const [selectedMagnet, setSelectedMagnet] = useState('mvp-checklist');
  const [submitted, setSubmitted] = useState(false);

  const magnets = [
    {
      id: 'mvp-checklist',
      title: 'MVP Scope Lock Checklist',
      subtitle: 'Avoid scope creep & ship on time',
      type: 'PDF',
      icon: Download
    },
    {
      id: 'clinic-roadmap',
      title: 'Clinic Growth Roadmap Template',
      subtitle: 'Patient acquisition system blueprint',
      type: 'Template',
      icon: Download
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email');
      return;
    }
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      toast.success('Check your inbox! Resource sent.');
    }, 500);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-16 px-6 bg-gradient-to-br from-green-50 to-white rounded-3xl border-2 border-green-200 text-center">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">Check your inbox!</h3>
        <p className="text-gray-600">We've sent your resource. Should arrive in 1-2 minutes.</p>
      </motion.div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-16 my-16 px-6 sm:px-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-gray-200 shadow-lg">
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-4">
            Get the resources founders actually use
          </h2>
          <p className="text-lg text-gray-600">
            No spam. Just practical templates and checklists. Unsubscribe anytime.
          </p>
        </div>

        {/* Resource Selector */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {magnets.map((magnet) => (
            <button
              key={magnet.id}
              onClick={() => setSelectedMagnet(magnet.id)}
              className={`p-6 rounded-lg border-2 transition-all text-left ${
                selectedMagnet === magnet.id
                  ? 'border-[#DBFE01] bg-[#DBFE01]/10 shadow-md'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}>
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  selectedMagnet === magnet.id ? 'bg-[#DBFE01]' : 'bg-gray-100'
                }`}>
                  <magnet.icon className={`w-6 h-6 ${
                    selectedMagnet === magnet.id ? 'text-[#1a1a1a]' : 'text-gray-600'
                  }`} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a1a] mb-1">{magnet.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{magnet.subtitle}</p>
                  <span className="text-xs font-semibold text-gray-500 uppercase">{magnet.type}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-6 text-base border-2 border-gray-200 rounded-lg focus:border-[#DBFE01] focus:ring-2 focus:ring-[#DBFE01]/20 transition-all"
            />
            <Button
              type="submit"
              className="btn-primary px-8 py-6 rounded-lg text-base font-bold flex items-center justify-center gap-2 whitespace-nowrap shadow-lg shadow-[#DBFE01]/20">
              Send it to me
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-xs text-gray-500 text-center mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </form>
      </div>
    </motion.section>
  );
}