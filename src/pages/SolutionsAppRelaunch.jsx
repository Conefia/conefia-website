import React from 'react';
import SolutionTemplate from '@/components/solutions/SolutionTemplate';
import { PERSONAS } from '@/components/data/personas';

export default function SolutionsAppRelaunch() {
  const persona = PERSONAS.find(p => p.id === 'app-relaunch');
  return <SolutionTemplate persona={persona} />;
}