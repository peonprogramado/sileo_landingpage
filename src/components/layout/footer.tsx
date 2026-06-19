'use client';

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

export default function Footer() {
  const { language, setLanguage, t } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  return (
    <footer className="relative overflow-hidden bg-[#0A0A0A] dark:bg-[#F7F7F7] mx-8 mb-8 rounded-3xl">
      <div className="relative z-10 py-16 xl:py-24">
        <div className="container px-5 mx-auto sm:px-7">
          <div className="grid gap-y-8 gap-x-6 lg:grid-cols-12">
            <div className="lg:col-span-3 xl:col-span-4">
              <div className="-mt-12">
                <Link href="/" className="block mb-6">
                  <Image
                    src="/images/hero/logo/logotransparenteblanco.png"
                    alt="logo"
                    width={128}
                    height={32}
                    className="block dark:hidden object-contain"
                    style={{ height: 'auto' }}
                  />
                  <Image
                    src="/images/hero/logo/logotransparentenegro.png"
                    alt="logo"
                    width={128}
                    height={32}
                    className="hidden dark:block object-contain"
                    style={{ height: 'auto' }}
                  />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 xl:col-span-5">
              <div className="grid sm:grid-cols-3 gap-7">
                <div>
                  <span className="block mb-6 text-base text-white dark:text-black font-semibold">
                    {t('footer.product')}
                  </span>
                  <nav className="flex flex-col space-y-3">
                    <Link
                      href="/"
                      className="text-base font-normal text-gray-400 dark:text-gray-600 transition hover:text-white dark:hover:text-black"
                    >
                      {t('footer.features')}
                    </Link>
                    <Link
                      href="/"
                      className="text-base font-normal text-gray-400 dark:text-gray-600 transition hover:text-white dark:hover:text-black"
                    >
                      {t('footer.integrations')}
                    </Link>
                    <Link
                      href="/pricing"
                      className="text-base font-normal text-gray-400 dark:text-gray-600 transition hover:text-white dark:hover:text-black"
                    >
                      {t('footer.pricing')}
                    </Link>
                  </nav>
                </div>
                <div>
                  <span className="block mb-6 text-base text-white dark:text-black font-semibold">
                    {t('footer.socialMedia')}
                  </span>
                  <nav className="flex flex-col space-y-3">
                    <a
                      href="https://www.instagram.com/sileoapp/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-normal text-gray-400 dark:text-gray-600 transition hover:text-white dark:hover:text-black"
                    >
                      {t('footer.instagram')}
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      className="text-base font-normal text-gray-400 dark:text-gray-600 transition hover:text-white dark:hover:text-black"
                    >
                      {t('footer.twitter')}
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      className="text-base font-normal text-gray-400 dark:text-gray-600 transition hover:text-white dark:hover:text-black"
                    >
                      {t('footer.linkedin')}
                    </a>
                  </nav>
                </div>
                <div>
                  <span className="relative block mb-6 text-base text-white dark:text-black font-semibold">
                    {t('footer.resources')}
                  </span>
                  <nav className="flex flex-col space-y-3">
                    <Link
                      href="/"
                      className="text-base font-normal text-gray-400 dark:text-gray-600 transition hover:text-white dark:hover:text-black"
                    >
                      {t('footer.downloads')}
                    </Link>
                    <a
                      href="https://brandguidelinessileoes.figma.site/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-normal text-gray-400 dark:text-gray-600 transition hover:text-white dark:hover:text-black"
                    >
                      {t('footer.brandGuidelines')}
                    </a>
                    <Link
                      href="/"
                      className="text-base font-normal text-gray-400 dark:text-gray-600 transition hover:text-white dark:hover:text-black"
                    >
                      {t('footer.documentation')}
                    </Link>
                    <Link
                      href="/contact"
                      className="text-base font-normal text-gray-400 dark:text-gray-600 transition hover:text-white dark:hover:text-black"
                    >
                      {t('footer.contact')}
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div>
                <span className="block mb-6 text-base text-white dark:text-black font-semibold">
                  {t('footer.stayInTouch')}
                </span>
                <p className="block text-base text-gray-400 dark:text-gray-600 mb-9">
                  {t('footer.description')}
                </p>
                <form>
                  <div className="flex flex-col items-center gap-2 w-full sm:max-w-64">
                    <input
                      type="email"
                      placeholder={t('footer.emailPlaceholder')}
                      className="w-full h-12 p-4 text-base text-white dark:text-black border border-gray-700 dark:border-gray-300 rounded-full placeholder:text-center placeholder:text-gray-400 dark:placeholder:text-gray-600 placeholder:text-base text-center placeholder:font-normal focus:outline-0 bg-transparent"
                      required
                    />
                    <button className="w-full px-6 py-3 text-base font-medium text-[#0A0A0A] dark:text-white transition rounded-full cursor-pointer bg-white dark:bg-[#0A0A0A] hover:bg-gray-100 dark:hover:bg-[#1A1A1A]">
                      {t('footer.subscribeButton')}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container relative z-10 px-5 mx-auto sm:px-7">
          <div className="py-5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
              <div className="relative">
                <button
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  className="flex items-center gap-2 text-base text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-black transition"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                    <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.66667 10H18.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 1.66667C12.0844 3.94863 13.269 6.91003 13.3333 10C13.269 13.09 12.0844 16.0514 10 18.3333C7.91558 16.0514 6.73104 13.09 6.66667 10C6.73104 6.91003 7.91558 3.94863 10 1.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{language === 'en' ? 'English' : 'Español'}</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {showLanguageMenu && (
                  <div className="absolute bottom-full mb-2 left-0 bg-white dark:bg-[#0A0A0A] border border-gray-100 dark:border-white/10 rounded-lg shadow-lg py-2 min-w-[120px]">
                    <button
                      onClick={() => { setLanguage('en'); setShowLanguageMenu(false); }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10"
                    >
                      English
                    </button>
                    <button
                      onClick={() => { setLanguage('es'); setShowLanguageMenu(false); }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10"
                    >
                      Español
                    </button>
                  </div>
                )}
              </div>
              <div className="flex gap-6 text-base">
                <Link href="/privacy" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-black transition">
                  {t('footer.privacy')}
                </Link>
                <span className="text-gray-400 dark:text-gray-500">·</span>
                <Link href="/terms" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-black transition">
                  {t('footer.terms')}
                </Link>
              </div>
            </div>
            <p className="text-base text-gray-400 dark:text-gray-500">
              {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
