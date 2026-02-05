import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, CheckCircle, TrendingUp, Clock, Zap, ExternalLink, Target, Lightbulb, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';

function Section({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function AlMahfza() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    window.location.href = createPageUrl('Home') + '#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FAFAFA]">
      <Seo 
        title="Al-Mahfza Case Study - Fintech Mobile App" 
        description="Conefia delivered Al-Mahfza's mobile money-transfer app in 60 days after 1 year stalled. 83% faster time-to-market with full compliance."
        canonical="https://conefia.com/al-mahfza-fintech-app"
      />
      {/* ... rest of the content from pages/al-mahfza ... */}
    </div>
  );
}