import React from 'react';
import SolutionTemplate from '@/components/solutions/SolutionTemplate';
import { PERSONAS } from '@/components/data/personas';

export default function SolutionsAcceleratorSupport() {
  const persona = PERSONAS.find(p => p.id === 'accelerator-support');
  return <SolutionTemplate persona={persona} />;
}