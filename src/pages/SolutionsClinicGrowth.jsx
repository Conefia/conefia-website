import React from 'react';
import SolutionTemplate from '@/components/solutions/SolutionTemplate';
import { PERSONAS } from '@/components/data/personas';

export default function SolutionsClinicGrowth() {
  const persona = PERSONAS.find(p => p.id === 'clinic-growth');
  return <SolutionTemplate persona={persona} />;
}