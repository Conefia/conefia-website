import React from 'react';
import SolutionTemplate from '@/components/solutions/SolutionTemplate';
import { PERSONAS } from '@/components/data/personas';

export default function SolutionsDtcGrowth() {
  const persona = PERSONAS.find(p => p.id === 'dtc-growth');
  return <SolutionTemplate persona={persona} />;
}