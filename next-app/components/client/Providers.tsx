'use client';

import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/components/server/lib/query-client';
import { AuthProvider } from '@/components/client/lib/AuthContext';
import { PersonaProvider } from '@/components/client/context/PersonaContext';
import { Toaster } from '@/components/server/ui/toaster';
import NavigationTracker from '@/components/client/lib/NavigationTracker';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            <PersonaProvider>
                <QueryClientProvider client={queryClientInstance}>
                    <NavigationTracker />
                    {children}
                    <Toaster />
                </QueryClientProvider>
            </PersonaProvider>
        </AuthProvider>
    );
}
