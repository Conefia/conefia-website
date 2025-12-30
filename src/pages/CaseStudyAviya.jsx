import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, TrendingUp, Clock, Zap, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function CaseStudyAviya() {
  const scrollToContact = () => {
    window.location.href = createPageUrl('Home') + '#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FAFAFA]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-indigo-500/5" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link 
            to={createPageUrl('Home')}
            className="inline-flex items-center gap-2 text-[#1a1a1a]/60 hover:text-[#1a1a1a] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-bold mb-6">
            Build
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-[#1a1a1a] mb-6 leading-tight">
            MVP delivered in 3 months after 2 years stalled
          </h1>

          <div className="flex flex-wrap gap-8 mb-8">
            {[
              { icon: Clock, label: 'MVP in 3 months', color: 'text-sky-600' },
              { icon: Zap, label: '~87.5% faster', color: 'text-blue-600' },
              { icon: CheckCircle, label: 'Launch-ready', color: 'text-indigo-600' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#DBFE01] flex items-center justify-center">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <span className="font-bold text-[#1a1a1a]">{stat.label}</span>
              </div>
            ))}
          </div>

          <a 
            href="https://www.aviyatelemed.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#1a1a1a]/60 hover:text-[#DBFE01] transition-colors"
          >
            aviyatelemed.com
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-sm font-bold text-[#1a1a1a]/40 uppercase tracking-wider mb-3">Client</h3>
              <p className="text-lg font-semibold text-[#1a1a1a]">Aviya Telemed</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1a1a1a]/40 uppercase tracking-wider mb-3">Industry</h3>
              <p className="text-lg font-semibold text-[#1a1a1a]">Telemedicine (mobile MVP)</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1a1a1a]/40 uppercase tracking-wider mb-3">Timeline</h3>
              <p className="text-lg font-semibold text-[#1a1a1a]">3 months</p>
            </div>
          </div>

          <div className="space-y-12">
            {/* Challenge */}
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">The Challenge</h2>
              <p className="text-[#1a1a1a]/70 text-lg leading-relaxed">
                Client spent 2 years with multiple vendors and still couldn't ship an MVP.
              </p>
            </div>

            {/* Solution */}
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4">What Conefia Did</h2>
              <p className="text-[#1a1a1a]/70 text-lg leading-relaxed">
                Took over the codebase and delivery, stabilized scope, accelerated execution, and shipped the MVP in 3 months with production-grade QA and release readiness.
              </p>
            </div>

            {/* Results */}
            <div className="glass-card rounded-3xl p-8 md:p-10 bg-gradient-to-br from-[#DBFE01]/10 to-transparent border-[#DBFE01]/20">
              <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Results</h2>
              <div className="space-y-4">
                {[
                  'MVP delivered in 3 months after 2 years stalled',
                  'Reduced time-to-MVP by ~87.5% (24 months → 3 months)',
                ].map((result, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#1a1a1a] flex-shrink-0 mt-0.5" />
                    <span className="text-lg font-semibold text-[#1a1a1a]">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Want similar results?</h3>
            <button 
              onClick={scrollToContact}
              className="btn-primary px-8 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2"
            >
              Book roadmap call
              <TrendingUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}