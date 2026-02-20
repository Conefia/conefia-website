'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/components/server/lib/query-client';
import { AuthProvider } from '@/components/client/lib/AuthContext';
import { Toaster } from '@/components/server/ui/toaster';
import NavigationTracker from '@/components/client/lib/NavigationTracker';
import AuthGuard from './AuthGuard';

export function Providers({ children }) {
    return (
        <AuthProvider>
            <QueryClientProvider client={queryClientInstance}>
                <NavigationTracker />
                <AuthGuard>
                    {children}
                </AuthGuard>
                <Toaster />
            </QueryClientProvider>
        </AuthProvider>
    );
}
