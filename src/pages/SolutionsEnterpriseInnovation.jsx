import React from 'react';
import SolutionTemplate from '@/components/solutions/SolutionTemplate';
import { PERSONAS } from '@/components/data/personas';

export default function SolutionsEnterpriseInnovation() {
  const persona = PERSONAS.find(p => p.id === 'enterprise-innovation');
  return <SolutionTemplate persona={persona} />;
}