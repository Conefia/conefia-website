import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/components/client/Providers'
import ClientLayout from '@/components/client/Layout'

export const metadata: Metadata = {
    title: 'Conefia | AI & Mobile App Development',
    description: 'AI & Mobile App Development + Growth Partner',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* 
                  No-JS fallback: makes all framer-motion animated content visible
                  when JavaScript is unavailable (e.g., saved HTML pages, crawlers).
                  The inline script runs synchronously before paint, adding a 'js' class
                  that disables the fallback — so normal visitors still get animations.
                */}
                <style
                    dangerouslySetInnerHTML={{
                        __html: `
                            html:not(.js) [style*="opacity:0"],
                            html:not(.js) [style*="opacity: 0"] {
                                opacity: 1 !important;
                                transform: none !important;
                            }
                            html:not(.js) [style*="scale(0"],
                            html:not(.js) [style*="scaleX(0"],
                            html:not(.js) [style*="scale: 0"] {
                                transform: none !important;
                            }
                            html:not(.js) [style*="height:0%"],
                            html:not(.js) [style*="height: 0%"],
                            html:not(.js) [style*="width:0"],
                            html:not(.js) [style*="width: 0"] {
                                height: auto !important;
                                width: auto !important;
                            }
                        `,
                    }}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `document.documentElement.classList.add('js')`,
                    }}
                />
            </head>
            <body>
                <Providers>
                    <ClientLayout>
                        {children}
                    </ClientLayout>
                </Providers>
            </body>
        </html>
    )
}
