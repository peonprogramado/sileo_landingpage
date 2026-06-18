'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { getNavItems } from './nav-items';
import { cn } from '@/lib/utils';
import { ChevronDownIcon } from '@/icons/icons';
import { useLanguage } from '@/contexts/LanguageContext';

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MainMobileNav({ isOpen }: MobileMenuProps) {
  const pathname = usePathname();
  const { t } = useLanguage();
  const navItems = getNavItems(t);
  const [activeDropdown, setActiveDropdown] = useState('');

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? '' : key);
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-6 bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-3xl shadow-lg overflow-hidden animate-[slideDown_0.3s_ease-out]">
      <div className="flex flex-col">
        <div className="overflow-y-auto max-h-[70vh]">
          <div className="pt-4 pb-2 space-y-1 px-6">
            {navItems.map((item) => {
              if (item.type === 'link') {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'block px-4 py-3 rounded-xl text-base font-medium text-gray-900 dark:text-white hover:bg-white/30 dark:hover:bg-white/10 transition-all duration-200',
                      {
                        'text-black dark:text-white bg-white/40 dark:bg-white/15': pathname === item.href,
                      }
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }

              if (item.type === 'dropdown') {
                const dropdownItem = item as typeof item & { items?: Array<{ href: string; label: string }> };
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={cn(
                        'flex justify-between items-center w-full px-4 py-3 rounded-xl text-base font-medium text-gray-900 dark:text-white hover:bg-white/30 dark:hover:bg-white/10 transition-all duration-200',
                        {
                          'text-black dark:text-white bg-white/40 dark:bg-white/15': dropdownItem.items?.some(
                            (subItem) => pathname.includes(subItem.href)
                          ),
                        }
                      )}
                    >
                      <span>{item.label}</span>
                      <span
                        className={cn(
                          'size-4 transition-transform duration-200',
                          activeDropdown === item.label && 'rotate-180'
                        )}
                      >
                        <ChevronDownIcon />
                      </span>
                    </button>

                    {activeDropdown === item.label && dropdownItem.items && (
                      <div className="mt-1 space-y-1 pl-4 animate-[slideDown_0.2s_ease-out]">
                        {dropdownItem.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={cn(
                              'flex items-center px-4 py-2.5 gap-1.5 rounded-xl text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-white/30 dark:hover:bg-white/10 transition-all duration-200',
                              {
                                'px-2': 'icon' in subItem,
                                'bg-white/40 dark:bg-white/15 text-black dark:text-white':
                                  pathname.includes(subItem.href),
                              }
                            )}
                          >
                            <span>{subItem.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div className="flex flex-col pt-3 pb-5 space-y-3 px-6 border-t border-white/30 dark:border-white/15 mt-2">
          <Link
            href="/404"
            className="flex items-center px-5 py-3 bg-[#0d0d1a] dark:bg-white justify-center text-sm text-white dark:text-[#0d0d1a] rounded-full h-11 hover:opacity-90 transition-all duration-200"
          >
            Download app
          </Link>

          <Link
            href="/signup"
            className="text-sm block w-full border h-11 border-gray-900/20 dark:border-white/30 px-5 py-3 rounded-full text-center font-medium text-gray-900 dark:text-white hover:bg-white/30 dark:hover:bg-white/10 transition-all duration-200"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </div>
  );
}
