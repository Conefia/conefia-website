
import Providers from "@/components/Providers";
import "./globals.css";
import Layout from "@/components/Layout"; // Importing the original Layout component if moved
// But wait, Layout.jsx was in src/Layout.jsx. I haven't moved it yet. I need to move it to src/components/Layout.jsx or similar.

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Conefia',
    description: 'Conefia Website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    {/* We wrap children in the Application Layout from the original app if needed.
               Refactoring note: The original Layout.jsx might need "use client".
            */}
                    {children}
                </Providers>
            </body>
        </html>
    )
}
