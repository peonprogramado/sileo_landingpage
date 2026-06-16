'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer';
import { PropsWithChildren } from 'react';

const NO_CHROME_ROUTES = ['/signup', '/signin'];

export default function ConditionalLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const hideChrome = NO_CHROME_ROUTES.some((route) => pathname.startsWith(route));

  if (hideChrome) {
    return (
      <div className="dark:bg-[#0A0A0A] flex flex-col flex-1">
        {children}
      </div>
    );
  }

  return (
    <div className="dark:bg-[#0A0A0A] flex flex-col flex-1">
      <Header />
      <div className="isolate flex-1 flex flex-col">{children}</div>
      <Footer />
    </div>
  );
}
