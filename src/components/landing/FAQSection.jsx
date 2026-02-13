import React, { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';

export default function FAQSection({ reduceMotion }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: 'Can I start at any phase?',
      answer: (
        <>
          Yes. Engagement is modular — start with Validate, jump into Build, or begin at Launch/Scale if you're already shipping. <a href="#packages" onClick={(e) => { e.preventDefault(); scrollToSection('packages'); }} className="text-[#1a1a1a] font-bold hover:text-[#a8c600] transition-colors underline cursor-pointer">View Packages & Services</a>
        </>
      )
    },
    {
      question: 'What do you build, exactly?',
      answer: (
        <>
          We build digital products end-to-end: AI MVPs, mobile apps, and the launch + growth systems around them (landing pages, tracking, paid ads, and content/marketing). <a href="#track-selector" onClick={(e) => { e.preventDefault(); scrollToSection('track-selector'); }} className="text-[#1a1a1a] font-bold hover:text-[#a8c600] transition-colors underline cursor-pointer">Explore Solutions</a>
        </>
      )
    },
    {
      question: 'Who do you work with?',
      answer: (
        <>
          Tech founders building AI/apps, healthcare clinics improving patient acquisition, and Shopify brands focused on conversion and retention. <a href="#track-selector" onClick={(e) => { e.preventDefault(); scrollToSection('track-selector'); }} className="text-[#1a1a1a] font-bold hover:text-[#a8c600] transition-colors underline cursor-pointer">Choose Your Track</a>
        </>
      )
    },
    {
      question: 'How do you keep delivery predictable?',
      answer: (
        <>
          Weekly demos, one shared backlog, and stage gates for decisions and sign-offs — so priorities stay clear and scope doesn't drift. <a href="#playbook" onClick={(e) => { e.preventDefault(); scrollToSection('playbook'); }} className="text-[#1a1a1a] font-bold hover:text-[#a8c600] transition-colors underline cursor-pointer">See How We Work</a>
        </>
      )
    },
    {
      question: 'Do you build AI agents and LLM features?',
      answer: (
        <>
          Yes — agents, RAG, and workflow automation. We prioritize production readiness: evaluation, guardrails, and monitoring so it performs beyond a demo. <Link to={createPageUrl('ai-saas-mvp-launch')} className="text-[#1a1a1a] font-bold hover:text-[#a8c600] transition-colors underline">AI SaaS MVP Launch</Link>
        </>
      )
    },
    {
      question: 'Do you support HIPAA-aware delivery for clinics?',
      answer: (
        <>
          Yes. We use privacy-first workflows and healthcare-appropriate handling for systems that touch patient data. <Link to={createPageUrl('clinic-growth-system')} className="text-[#1a1a1a] font-bold hover:text-[#a8c600] transition-colors underline">Clinic Growth System</Link>
        </>
      )
    },
    {
      question: 'How do you measure success?',
      answer: (
        <>
          We define success metrics upfront (e.g., booked appointments, pilot activation, conversion rate, retention) and instrument tracking so progress is visible week to week. <a href="#playbook" onClick={(e) => { e.preventDefault(); scrollToSection('playbook'); }} className="text-[#1a1a1a] font-bold hover:text-[#a8c600] transition-colors underline cursor-pointer">View Playbook</a>
        </>
      )
    },
    {
      question: 'How fast can we launch?',
      answer: (
        <>
          Typical ranges: Validate (2–4 weeks), Build (6–12 weeks), Launch (2–4 weeks). Scale is ongoing with monthly experimentation and content/marketing execution. <a href="#playbook" onClick={(e) => { e.preventDefault(); scrollToSection('playbook'); }} className="text-[#1a1a1a] font-bold hover:text-[#a8c600] transition-colors underline cursor-pointer">View Playbook</a> · <a href="#packages" onClick={(e) => { e.preventDefault(); scrollToSection('packages'); }} className="text-[#1a1a1a] font-bold hover:text-[#a8c600] transition-colors underline cursor-pointer">See Packages</a>
        </>
      )
    },
    {
      question: 'What if I only need help with one area?',
      answer: (
        <>
          That works. You can engage us for a focused sprint (UX fixes, analytics setup, landing page, paid ads setup, retention audit, SEO/content plan) or expand into a full build → scale engagement. <a href="#packages" onClick={(e) => { e.preventDefault(); scrollToSection('packages'); }} className="text-[#1a1a1a] font-bold hover:text-[#a8c600] transition-colors underline cursor-pointer">Explore Packages</a>
        </>
      )
    },
    {
      question: 'Can I see examples of your work?',
      answer: (
        <>
          Yes — browse case studies mapped to each track: Menovia (AI MVP), Vascular (Clinic Growth), Al-Mahfza (Relaunch), Hartalega (Corporate), Larovie (Shopify Growth). <a href="#case-studies" onClick={(e) => { e.preventDefault(); scrollToSection('case-studies'); }} className="text-[#1a1a1a] font-bold hover:text-[#a8c600] transition-colors underline cursor-pointer">View Case Studies</a>
        </>
      )
    }
  ];


  return (
    <section ref={ref} id="faq" className="py-16 md:py-24 bg-white/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="text-center mb-16">

          <span className="bg-[#1a1a1a]/5 text-[#1a1a1a]/60 px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-2 border border-[#1a1a1a]/10 mb-6">
            <Sparkles className="w-4 h-4 text-[#1a1a1a]" />
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2F2F2F] mb-4">
            Common questions, <span className="bg-gradient-to-r from-[#DBFE01] via-[#c5e000] to-[#a8c600] bg-clip-text text-transparent">answered.</span>
          </h2>
          <p className="text-lg text-[#2F2F2F]/80 font-medium">
            Everything you need to know before starting — scope, timelines, and how we work across build → launch → scale.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.details
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion ? 0 : 0.2 + index * 0.1
              }}
              className="group w-full glass-card rounded-2xl p-6 transition-all duration-300 hover:border-[#DBFE01]/30 hover:shadow-lg hover:shadow-black/5"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors bg-[#2F2F2F]/5 group-open:bg-[#DBFE01]">
                    <HelpCircle className="w-5 h-5 text-[#2F2F2F]/50 group-open:text-[#2F2F2F]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#2F2F2F]">{faq.question}</h3>
                </div>
                <ChevronDown className="w-5 h-5 text-[#2F2F2F]/40 transition-transform duration-300 group-open:rotate-180 flex-shrink-0" />
              </summary>
              <div className="text-[#2F2F2F]/80 mt-4 pl-14 leading-relaxed font-medium">
                {faq.answer}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>);

}