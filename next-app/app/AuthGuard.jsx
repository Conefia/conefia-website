'use client';

import { useAuth } from '@/components/client/lib/AuthContext';
import UserNotRegisteredError from '@/components/server/UserNotRegisteredError';
import { useEffect } from 'react';

export default function AuthGuard({ children }) {
    const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

    useEffect(() => {
        if (authError?.type === 'auth_required') {
            navigateToLogin();
        }
    }, [authError, navigateToLogin]);

    if (isLoadingPublicSettings || isLoadingAuth) {
        return (
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
            </div>
        );
    }

    if (authError) {
        if (authError.type === 'user_not_registered') {
            return <UserNotRegisteredError />;
        } else if (authError.type === 'auth_required') {
            return null;
        }
    }

    return children;
}
