import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/solutions/SeoLandingPage';

const outcomeCards = [
  {
    icon: '📈',
    title: 'More',
    subtitle: 'Booked Appointments',
    description: 'Better website-to-booking conversion'
  },
  {
    icon: '⚡',
    title: 'Smoother',
    subtitle: 'Patient Intake',
    description: 'Less drop-off before scheduling'
  },
  {
    icon: '🗺️',
    title: 'Stronger',
    subtitle: 'Local Visibility',
    description: 'More qualified traffic from Google'
  },
  {
    icon: '📊',
    title: 'Clearer',
    subtitle: 'Growth Attribution',
    description: 'Know what is driving bookings'
  }
];

export default function ClinicOutcomesSection({ visual }) {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-center text-[#1a1a1a]">
            Outcomes clinic teams actually care about
          </h2>
          {visual && <div className="mb-12">{visual}</div>}
          
          {/* 4-column outcomes cards */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {outcomeCards.map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-3">{card.icon}</div>
                <div className="text-lg font-bold text-[#1a1a1a] mb-1">
                  {card.title}
                </div>
                <div className="text-base font-semibold text-[#1a1a1a] mb-2">
                  {card.subtitle}
                </div>
                <div className="font-medium text-gray-700 text-sm">
                  {card.description}
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}