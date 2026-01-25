import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, BarChart3, ShieldCheck } from 'lucide-react';

export default function SolutionPillars() {
  const pillars = [
    {
      icon: CheckCircle2,
      title: "One Accountable Team",
      benefit: "Eliminate Coordination Tax",
      description: "You have one partner, one backlog, one point of contact. No vendor coordination. No 'he said, she said.' When something breaks, we own it and fix it immediately.",
      details: [
        "Clinic Owners: One team covers patient portal, website, and growth marketing.",
        "AI Founders: One team handles MVP, GTM, and fundraising narrative.",
        "App Founders: One team owns redesign, retention, and ASO simultaneously."
      ]
    },
    {
      icon: Zap,
      title: "Speed Without Cutting Corners",
      benefit: "8–16 Weeks to Launch, Not 6 Months",
      description: "We don't move fast by cutting quality. We move fast by removing waste. Clear product roadmaps. Weekly demos. Parallel work (design + dev + growth).",
      details: [
        "Clinic Owners: 8–12 weeks from audit to live portal.",
        "AI Founders: 12 weeks from prototype to fundable.",
        "DTC Brands: 6–12 weeks from audit to 40%+ conversion."
      ]
    },
    {
      icon: BarChart3,
      title: "Growth You Can Measure",
      benefit: "KPIs, Experiments, Reporting Owned by One Team",
      description: "Every decision is backed by data. We don't guess. We measure, iterate, and own the metrics.",
      details: [
        "Clinic Owners: Portal adoption %, revenue impact.",
        "AI Founders: User growth, MRR, investor readiness score.",
        "DTC Brands: Conversion %, CAC, ROAS, LTV."
      ]
    },
    {
      icon: ShieldCheck,
      title: "Compliance & Quality Built-In",
      benefit: "No Rework, No Surprises",
      description: "We don't bolt on compliance at the end. HIPAA, SOC 2, data privacy—built from day 1. Code quality owned throughout.",
      details: [
        "Clinic Owners: HIPAA compliance from day 1.",
        "AI Founders: Data privacy by design. GDPR.",
        "App Founders: No legacy tech debt. Clean codebase."
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#DBFE01]/20 text-[#2F2F2F] text-sm font-medium mb-4">
            Our Approach
          </span>
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-6">
            One Team. One Backlog. <span className="gradient-text">Real Outcomes.</span>
          </h2>
          <p className="text-lg text-gray-600">
            Conefia is an end-to-end execution partner that combines product, design, growth, 
            and compliance into one accountable team. We own the outcome—not activity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-[#DBFE01]/50 transition-colors shadow-sm"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#DBFE01]/10 flex items-center justify-center flex-shrink-0">
                  <pillar.icon className="w-7 h-7 text-[#1a1a1a]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">{pillar.title}</h3>
                  <p className="text-sm font-semibold text-[#DBFE01] bg-[#1a1a1a] inline-block px-2 py-0.5 rounded mb-4">
                    {pillar.benefit}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {pillar.description}
                  </p>
                  <div className="space-y-2 border-t border-gray-100 pt-4">
                    {pillar.details.map((detail, i) => (
                      <div key={i} className="text-xs text-gray-500 flex items-start gap-2">
                        <span className="mt-1 w-1 h-1 rounded-full bg-[#DBFE01] flex-shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}