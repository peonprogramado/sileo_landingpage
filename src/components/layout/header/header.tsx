'use client';
import { CloseIcon, MenuIcon } from '@/icons/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DesktopNav from './desktop-nav';
import MainMobileNav from './main-mobile-nav';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-4 z-50 mx-6 lg:mx-16 xl:mx-24 py-1 bg-white/15 dark:bg-black/15 backdrop-blur-lg border border-white/30 dark:border-white/10 rounded-full shadow-sm">
      <div className="px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 items-center lg:grid-cols-[1fr_auto_1fr]">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/hero/logo/logonegrotransparente.svg"
                alt="Sileo Logo"
                width={90}
                height={32}
                className="h-8 w-auto block dark:hidden"
              />
              <Image
                src="/images/hero/logo/logoblancotransparente.svg"
                alt="Sileo Logo"
                width={90}
                height={32}
                className="h-8 w-auto hidden dark:block"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <DesktopNav />

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center gap-3 justify-self-end">
            <Link
              href="/download"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#0d0d1a] text-white dark:bg-[#F7F7F7] dark:text-[#0A0A0A] text-sm font-medium hover:bg-[#1a1a2e] dark:hover:bg-white transition-colors whitespace-nowrap"
            >
              {t('nav.downloadApp')}
            </Link>

            <Link
              href="/signup"
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-gray-300 dark:border-[#F7F7F7]/30 text-[#0d0d1a] dark:text-[#F7F7F7] text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#F7F7F7]/10 transition-colors whitespace-nowrap"
            >
              {t('nav.startPlanning')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center justify-end lg:hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      <MainMobileNav isOpen={mobileMenuOpen} />
    </header>
  );
}
