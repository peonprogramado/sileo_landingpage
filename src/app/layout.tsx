import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';

import './globals.css';
import { ToasterProvider } from './providers/toaster';
import { LanguageProvider } from '@/contexts/LanguageContext';



export const metadata: Metadata = {
  title: {
    default: 'Accessible Productivity App for Focus and Clarity | Sileo',
    template: '%s | Sileo',
  },
  description:
    'Demo website of AIStarterKit OSS boilerplate. Built using Next.js, Tailwind CSS, Drizzle ORM, and PostgreSQL.',
  icons: {
    icon: '/images/hero/logo/logocorto2.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="bg-gray-50 dark:bg-[#0A0A0A] min-h-screen flex flex-col"
      >
        <ThemeProvider disableTransitionOnChange>
          <LanguageProvider>
            {/* ToasterProvider must render before the children components */}
            {/* https://github.com/emilkowalski/sonner/issues/168#issuecomment-1773734618 */}
            <ToasterProvider />

            <div className="isolate flex flex-col flex-1">{children}</div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
