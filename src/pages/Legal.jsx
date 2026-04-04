import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroDarkBackground from '@/components/visual/HeroDarkBackground';
import Breadcrumbs from '@/components/Breadcrumbs';

const policies = [
  { label: 'Terms of Service', path: '/terms', desc: 'Rules and conditions governing the use of Conefia services.' },
  { label: 'Privacy Policy', path: '/privacy', desc: 'How we collect, use, and protect your personal data.' },
  { label: 'Intellectual Property Policy', path: '/ip-policy', desc: 'Ownership rights for work product and pre-existing IP.' },
  { label: 'Cookie Policy', path: '/cookies', desc: 'How we use cookies and similar tracking technologies.' },
  { label: 'Copyright Policy', path: '/copyright-policy', desc: 'Copyright notices, permitted use, and DMCA takedown process.' },
  { label: 'Acceptable Use Policy', path: '/acceptable-use', desc: 'Rules governing acceptable use of the Site and related services.' },
  { label: 'AI and Automated Systems Notice', path: '/ai-notice', desc: 'How Conefia uses AI and automated systems in its services.' },
  { label: 'Contact and Legal Notice', path: '/contact-legal', desc: 'Official contact information and legal entity details.' },
  { label: 'Marketing and Testimonials Disclosure', path: '/marketing-disclosure', desc: 'Disclosures about marketing claims, results, and testimonials.' },
  { label: 'Submission and Confidentiality Notice', path: '/submission-confidentiality', desc: 'What happens to information submitted through public forms.' },
];

export default function Legal() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative overflow-hidden pt-28 pb-20">
        <HeroDarkBackground isMobile={isMobile} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Breadcrumbs
              items={[{ label: 'Legal' }]}
              theme="dark"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center mb-5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#DBFE01]/10 text-[#DBFE01] border border-[#DBFE01]/20 gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#DBFE01] inline-block" />
            Legal Documents
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight"
          >
            Legal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="text-white/50 text-sm"
          >
            All Conefia legal documents in one place.
          </motion.p>
        </div>
      </div>

      {/* Policy list */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="divide-y divide-gray-100">
          {policies.map((p, i) => (
            <motion.div
              key={p.path}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <Link
                to={p.path}
                className="flex items-center justify-between py-5 group"
              >
                <div>
                  <p className="font-semibold text-gray-900 group-hover:text-[#1a1a1a] transition-colors">{p.label}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{p.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1a1a1a] flex-shrink-0 ml-4 transition-colors group-hover:translate-x-1 duration-200" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}