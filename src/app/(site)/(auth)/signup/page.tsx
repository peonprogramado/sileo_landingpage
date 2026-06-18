'use client';

import Image from 'next/image';
import Link from 'next/link';
import SignupForm from './signup-form';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SignUpPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-[#F0F0F0] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex min-h-[580px]">

        {/* Left panel */}
        <div className="hidden md:flex md:w-[42%] signup-panel-gradient flex-col justify-between p-10 relative overflow-hidden">
          <div>
            <Image
              src="/images/hero/logo/logoblancotransparente.svg"
              alt="Sileo"
              width={90}
              height={32}
            />
          </div>
          <div className="relative z-10">
            <p className="text-gray-500 text-sm mb-2">{t('signup.tagline')}</p>
            <h2 className="text-white font-bold text-2xl leading-snug">
              {t('signup.leftPanelTitle')}
            </h2>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        </div>

        {/* Right panel */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
          {/* Mobile logo */}
          <div className="flex justify-center mb-7 md:hidden">
            <Image
              src="/images/hero/logo/logonegrotransparente.svg"
              alt="Sileo"
              width={110}
              height={38}
            />
          </div>

          {/* Sparkle icon - desktop only */}
          <div className="mb-5 hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" color="#000000" fill="none" viewBox="0 0 24 24">
              <path d="M8.03339 3.65784C8.37932 2.78072 9.62068 2.78072 9.96661 3.65785L11.0386 6.37599C11.1442 6.64378 11.3562 6.85576 11.624 6.96137L14.3422 8.03339C15.2193 8.37932 15.2193 9.62068 14.3422 9.96661L11.624 11.0386C11.3562 11.1442 11.1442 11.3562 11.0386 11.624L9.96661 14.3422C9.62067 15.2193 8.37932 15.2193 8.03339 14.3422L6.96137 11.624C6.85575 11.3562 6.64378 11.1442 6.37599 11.0386L3.65784 9.96661C2.78072 9.62067 2.78072 8.37932 3.65785 8.03339L6.37599 6.96137C6.64378 6.85575 6.85576 6.64378 6.96137 6.37599L8.03339 3.65784Z" stroke="currentColor" strokeWidth="1.5"></path>
              <path d="M16.4885 13.3481C16.6715 12.884 17.3285 12.884 17.5115 13.3481L18.3121 15.3781C18.368 15.5198 18.4802 15.632 18.6219 15.6879L20.6519 16.4885C21.116 16.6715 21.116 17.3285 20.6519 17.5115L18.6219 18.3121C18.4802 18.368 18.368 18.4802 18.3121 18.6219L17.5115 20.6519C17.3285 21.116 16.6715 21.116 16.4885 20.6519L15.6879 18.6219C15.632 18.4802 15.5198 18.368 15.3781 18.3121L13.3481 17.5115C12.884 17.3285 12.884 16.6715 13.3481 16.4885L15.3781 15.6879C15.5198 15.632 15.632 15.5198 15.6879 15.3781L16.4885 13.3481Z" stroke="currentColor" strokeWidth="1.5"></path>
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center md:text-left">{t('signup.title')}</h1>
          <p className="text-gray-400 text-sm mb-8 leading-relaxed text-center md:text-left">
            {t('signup.subtitle')}
          </p>

          <SignupForm />

          {/* Social divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-gray-400">{t('signup.or')}</span>
            </div>
          </div>

          {/* Social buttons */}
          <div className="flex flex-col gap-3 md:flex-row">
            <button className="flex-1 flex items-center justify-center gap-2.5 border border-gray-200 rounded-xl py-3 hover:bg-gray-50 transition-colors">
              <svg width="20" height="20" viewBox="0 0 814 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-43.4-150.3-109.7C172.1 791 128 664.2 128 541.7c0-191.1 124.7-292.1 247.4-292.1 65.1 0 119.2 42.8 159.7 42.8 39.1 0 99.6-45.6 173.3-45.6 28.9 0 108.2 2.6 168.9 80.1zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" fill="#0A0A0A" />
              </svg>
              <span className="text-sm font-medium text-gray-800">{t('signup.continueWithApple')}</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2.5 border border-gray-200 rounded-xl py-3 hover:bg-gray-50 transition-colors">
              <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.2511 10.1943C19.2511 9.47489 19.1915 8.94989 19.0626 8.40546H10.6797V11.6526H15.6003C15.5011 12.4596 14.9654 13.6749 13.7749 14.4915L16.5924 16.6305C18.2788 15.104 19.2511 12.8582 19.2511 10.1943Z" fill="#4285F4" />
                <path d="M10.6788 18.75C13.0895 18.75 15.1133 17.9722 16.5915 16.6305L13.774 14.4916C13.0201 15.0069 12.0081 15.3666 10.6788 15.3666C8.31773 15.3666 6.31379 13.8402 5.59944 11.7305L2.70264 13.9277C4.17087 16.786 7.18674 18.75 10.6788 18.75Z" fill="#34A853" />
                <path d="M5.60014 11.7305C5.41165 11.1861 5.30257 10.6027 5.30257 9.99998C5.30257 9.39716 5.41165 8.81385 5.59022 8.26941L2.70333 6.07216C2.0982 7.25829 1.75098 8.59026 1.75098 9.99998C1.75098 11.4097 2.0982 12.7416 2.70333 13.9277L5.60014 11.7305Z" fill="#FBBC05" />
                <path d="M10.6789 4.63331C12.3554 4.63331 13.4864 5.34303 14.1312 5.93612L16.6511 3.525C15.1035 2.11528 13.0895 1.25 10.6789 1.25C7.18676 1.25 4.17088 3.21387 2.70264 6.07218L5.58953 8.26943C6.31381 6.15972 8.31776 4.63331 10.6789 4.63331Z" fill="#EB4335" />
              </svg>
              <span className="text-sm font-medium text-gray-800">{t('signup.continueWithGoogle')}</span>
            </button>
          </div>

          {/* Desktop: link to sign in */}
          <p className="mt-6 text-center text-sm text-gray-500 hidden md:block">
            {t('signup.alreadyHaveAccount')}{' '}
            <Link href="/signin" className="font-semibold text-gray-900 hover:underline">
              {t('signup.signIn')}
            </Link>
          </p>

          {/* Mobile: link to download */}
          <p className="mt-6 text-center text-sm text-gray-500 block md:hidden">
            <Link href="/404" className="font-semibold text-gray-900 hover:underline">
              {t('signup.downloadApp')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
