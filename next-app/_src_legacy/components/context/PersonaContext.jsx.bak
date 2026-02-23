import React, { createContext, useContext, useState } from 'react';
import { PERSONAS } from '../data/personas';

const PersonaContext = createContext();

export function PersonaProvider({ children }) {
  const [selectedPersonaId, setSelectedPersonaId] = useState(PERSONAS[0].id);

  const selectedPersona = PERSONAS.find(p => p.id === selectedPersonaId) || PERSONAS[0];

  return (
    <PersonaContext.Provider value={{ selectedPersona, selectedPersonaId, setSelectedPersonaId }}>
      {children}
    </PersonaContext.Provider>
  );
}

export function usePersona() {
  const context = useContext(PersonaContext);
  if (!context) {
    throw new Error('usePersona must be used within a PersonaProvider');
  }
  return context;
}