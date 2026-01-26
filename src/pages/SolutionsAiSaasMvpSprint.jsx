import React from 'react';
import SolutionTemplate from '@/components/solutions/SolutionTemplate';
import { PERSONAS } from '@/components/data/personas';

export default function SolutionsAiSaasMvpSprint() {
  const persona = PERSONAS.find(p => p.id === 'ai-saas-mvp');
  return <SolutionTemplate persona={persona} />;
}