import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/solutions/SeoLandingPage';

const outcomeCards = [
  {
    icon: '📈',
    title: 'More',
    subtitle: 'Booked Appointments',
    description: 'Better website-to-booking conversion',
    bgColor: 'from-[#DBFE01]/20 to-[#c5e000]/10',
    borderColor: 'border-[#DBFE01]/30',
    accentColor: '#DBFE01'
  },
  {
    icon: '⚡',
    title: 'Smoother',
    subtitle: 'Patient Intake',
    description: 'Less drop-off before scheduling',
    bgColor: 'from-blue-100/40 to-blue-50/20',
    borderColor: 'border-blue-200/40',
    accentColor: '#3b82f6'
  },
  {
    icon: '🗺️',
    title: 'Stronger',
    subtitle: 'Local Visibility',
    description: 'More qualified traffic from Google',
    bgColor: 'from-emerald-100/40 to-emerald-50/20',
    borderColor: 'border-emerald-200/40',
    accentColor: '#10b981'
  },
  {
    icon: '📊',
    title: 'Clearer',
    subtitle: 'Growth Attribution',
    description: 'Know what is driving bookings',
    bgColor: 'from-violet-100/40 to-violet-50/20',
    borderColor: 'border-violet-200/40',
    accentColor: '#8b5cf6'
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
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
                className={`bg-gradient-to-br ${card.bgColor} border ${card.borderColor} p-8 rounded-2xl text-center shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}
              >
                {/* Background accent line */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: card.accentColor }}
                />

                {/* Animated icon */}
                <motion.div
                  className="text-5xl mb-4 inline-block"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                  whileHover={{ scale: 1.2, rotate: 0 }}
                >
                  {card.icon}
                </motion.div>

                {/* Title */}
                <div className="text-xl font-bold text-[#1a1a1a] mb-1">
                  {card.title}
                </div>

                {/* Subtitle with accent color on hover */}
                <motion.div
                  className="text-base font-semibold mb-3 transition-colors duration-300"
                  style={{ color: '#1a1a1a' }}
                  whileHover={{ color: card.accentColor }}
                >
                  {card.subtitle}
                </motion.div>

                {/* Description */}
                <p className="font-medium text-[#1a1a1a]/70 text-sm leading-relaxed">
                  {card.description}
                </p>

                {/* Hover indicator dot */}
                <motion.div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: card.accentColor }}
                />
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}