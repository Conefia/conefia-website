import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Check, X, Sparkles, HelpCircle, 
  ChevronDown, ChevronUp, Star, ShieldCheck, 
  Clock, ListTodo, BarChart3, Users, Layout, 
  MessageSquare, FileText, Search, Settings, 
  Activity, Play
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

// Reusable Components
const SectionHeading = ({ children, className }) => (
  <h2 className={cn("text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6", className)}>
    {children}
  </h2>
);

const CheckListItem = ({ children }) => (
  <li className="flex items-start gap-3">
    <div className="w-6 h-6 rounded-full bg-[#DBFE01]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
      <Check className="w-3.5 h-3.5 text-[#1a1a1a]" />
    </div>
    <span className="text-[#1a1a1a]/80 font-medium leading-relaxed">{children}</span>
  </li>
);

const ProblemItem = ({ children }) => (
  <li className="flex items-start gap-3">
    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
      <X className="w-3.5 h-3.5 text-red-600" />
    </div>
    <span className="text-[#1a1a1a]/80 font-medium leading-relaxed">{children}</span>
  </li>
);

export default function SeoLandingPage({ content }) {
  const {
    meta,
    hero,
    problem,
    solution,
    howItWorks,
    proof,
    faq,
    finalCta
  } = content;

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-['Poppins',sans-serif]">
      <Seo 
        title={meta.title} 
        description={meta.description} 
        canonical={meta.url} 
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#0B1020]">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[#0B1020]" />
        <div 
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 60% 40%, rgba(219, 254, 1, 0.15), transparent 60%)`,
            filter: 'contrast(150%) brightness(150%)',
          }}
        />
        {/* Glows */}
        <div className="absolute top-[20%] right-[20%] w-[500px] h-[500px] bg-[#DBFE01]/10 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DBFE01]/10 border border-[#DBFE01]/30 mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#DBFE01]" />
              <span className="text-sm font-semibold text-[#DBFE01]">Clinic Growth Package</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8"
            >
              {hero.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              {hero.subtitle}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link to="/contact" className="btn-primary px-8 py-4 rounded-full text-base font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#DBFE01]/20">
                {hero.primaryCta}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button onClick={() => document.getElementById('solution').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 rounded-full text-base font-bold flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white hover:text-[#0B1020] transition-colors">
                {hero.secondaryCta}
              </button>
            </motion.div>

            {/* Trust Chips */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 md:gap-8"
            >
              {hero.trustChips.map((chip, i) => (
                <div key={i} className="flex items-center gap-2 text-white/60 text-sm font-medium bg-white/5 px-4 py-2 rounded-full border border-white/5">
                  <Check className="w-4 h-4 text-[#DBFE01]" />
                  {chip}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-bold mb-6 border border-red-100">
                <X className="w-4 h-4" />
                The Problem
              </div>
              <SectionHeading>{problem.title}</SectionHeading>
              <ul className="space-y-4">
                {problem.items.map((item, i) => (
                  <ProblemItem key={i}>{item}</ProblemItem>
                ))}
              </ul>
              <div className="mt-8 p-6 bg-red-50 rounded-2xl border border-red-100">
                <p className="text-red-900/80 italic font-medium">
                  "{problem.quote}"
                </p>
              </div>
            </div>
            <div className="relative">
               {/* Visual representation could go here - using abstract shape for now */}
               <div className="aspect-square rounded-3xl bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-100 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
                  <div className="grid grid-cols-2 gap-4 p-8 relative z-10 opacity-60 grayscale">
                      <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-200 h-32 w-full"></div>
                      <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-200 h-32 w-full mt-8"></div>
                      <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-200 h-32 w-full -mt-8"></div>
                      <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-200 h-32 w-full"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-red-100/90 backdrop-blur-sm p-4 rounded-full border border-red-200 shadow-xl">
                          <X className="w-12 h-12 text-red-500" />
                      </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section id="solution" className="py-20 bg-[#F4F4F5] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#DBFE01]/5 blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
                <div className="bg-white rounded-3xl p-8 border border-[#DBFE01] shadow-2xl shadow-[#DBFE01]/10 relative z-10">
                    <div className="space-y-6">
                        {solution.items.map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="w-10 h-10 rounded-lg bg-[#DBFE01]/20 flex items-center justify-center flex-shrink-0 text-[#1a1a1a]">
                                    {/* Map some icons based on text or random */}
                                    <Check className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#1a1a1a]">{item.split(' (')[0]}</h4>
                                    <p className="text-sm text-gray-600 mt-1">{item}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#DBFE01] rounded-full blur-[80px] opacity-20" />
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DBFE01]/20 text-[#1a1a1a] text-sm font-bold mb-6 border border-[#DBFE01]/30">
                <Check className="w-4 h-4" />
                The Solution
              </div>
              <SectionHeading>{solution.title}</SectionHeading>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {solution.description}
              </p>
              
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 mb-8">
                <h4 className="font-bold text-[#1a1a1a] mb-4">What you get:</h4>
                <ul className="grid sm:grid-cols-1 gap-3">
                  {solution.features && solution.features.map((feature, i) => (
                    <CheckListItem key={i}>{feature}</CheckListItem>
                  ))}
                </ul>
              </div>

              <Link to="/contact" className="btn-primary px-8 py-4 rounded-full text-base font-bold inline-flex items-center gap-2 shadow-lg shadow-[#DBFE01]/20">
                {solution.primaryCta}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#DBFE01] font-bold tracking-wider uppercase text-sm">Process</span>
            <SectionHeading className="mt-2">Build → Launch → Scale</SectionHeading>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 md:-translate-x-1/2" />

            <div className="space-y-12">
              {howItWorks.steps.map((step, i) => (
                <div key={i} className={cn("flex flex-col md:flex-row gap-8 relative", i % 2 === 0 ? "md:flex-row-reverse" : "")}>
                  <div className="flex-1 md:text-right">
                    {i % 2 === 0 && (
                      <div className="hidden md:block">
                        <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="relative flex-shrink-0 z-10">
                    <div className="w-10 h-10 rounded-full bg-[#DBFE01] border-4 border-white shadow-lg flex items-center justify-center font-bold text-[#1a1a1a]">
                      {i + 1}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className={cn("md:hidden", i % 2 === 0 ? "" : "")}>
                        <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                    </div>
                    {i % 2 !== 0 && (
                      <div className="hidden md:block">
                        <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROOF SECTION */}
      <section className="py-24 bg-[#0B1020] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#DBFE01_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <SectionHeading className="text-white">{proof.title}</SectionHeading>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {proof.items.map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <Check className="w-8 h-8 text-[#DBFE01] mb-4" />
                <p className="font-semibold text-lg">{item}</p>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {proof.testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white text-[#1a1a1a] p-8 rounded-2xl relative">
                <div className="text-[#DBFE01] text-6xl font-serif absolute top-4 left-4 opacity-20">"</div>
                <p className="text-lg font-medium relative z-10 mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{testimonial.author}</div>
                    <div className="text-xs text-gray-500">Clinic Owner</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Use Cases */}
          <div className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12 border border-white/10">
            <h3 className="text-2xl font-bold mb-8 text-center">Common Use Cases</h3>
            <div className="grid sm:grid-cols-3 gap-8">
              {proof.useCases.map((useCase, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 mx-auto bg-[#DBFE01]/10 rounded-xl flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-[#DBFE01]" />
                  </div>
                  <p className="font-medium text-white/80">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionHeading>Frequently Asked Questions</SectionHeading>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faq.items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-gray-200 rounded-xl px-6">
                <AccordionTrigger className="hover:no-underline py-6 text-lg font-semibold text-[#1a1a1a]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-[#DBFE01]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-8 leading-tight">
            {finalCta.title}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-[#1a1a1a] text-white rounded-full text-base font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-xl"
            >
              {finalCta.primaryCta}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-transparent border-2 border-[#1a1a1a] text-[#1a1a1a] rounded-full text-base font-bold flex items-center justify-center gap-2 hover:bg-[#1a1a1a]/5 transition-colors"
            >
              {finalCta.secondaryCta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}