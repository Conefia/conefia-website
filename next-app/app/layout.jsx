import './globals.css';
import { PersonaProvider } from '@/components/context/PersonaContext';

export const metadata = { title: 'Migrated Site' };

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                <PersonaProvider>
                    {children}
                </PersonaProvider>
            </body>
        </html>
    );
}