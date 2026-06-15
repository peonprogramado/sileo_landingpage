'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getNavItems } from './nav-items';
import { useLanguage } from '@/contexts/LanguageContext';

export default function DesktopNav() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const navItems = getNavItems(t);

  return (
    <nav className="hidden lg:flex lg:items-center gap-1">
      {navItems.map((item) => {
        if (item.type === 'link') {
          return (
            <Link
              key={item.href as string}
              href={item.href as string}
              className={cn(
                'text-[#0A0A0A] dark:text-[#F7F7F7] text-sm px-5 py-2 rounded-full hover:text-black/60 dark:hover:text-[#F7F7F7]/60 font-medium transition-colors',
                {
                  'text-gray-900 dark:text-[#F7F7F7]': pathname === (item.href as string),
                }
              )}
            >
              {item.label as string}
            </Link>
          );
        }
      })}
    </nav>
  );
}
