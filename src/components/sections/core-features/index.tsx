'use client';

import Image from "next/image";
import { CORE_FEATURES } from "./data";
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export function CoreFeatures() {
  const { t } = useLanguage();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-30 bg-[#F7F7F7] dark:bg-white/1 px-5">
      <div className="max-w-[72rem] mx-auto">
        <div className="mb-12 text-center">
          <h2
            ref={titleRef}
            className={`mb-3 font-bold text-gray-800 text-3xl dark:text-white/90 md:text-title-lg max-w-3xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-[5px]'
              }`}
          >
            {t('features.title')}
          </h2>

          <p className="max-w-xl mx-auto leading-6 text-gray-500 dark:text-gray-400">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {CORE_FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white dark:bg-white p-9 border border-gray-200 dark:border-gray-200 rounded-[20px] shadow-[0px_30px_50px_-32px_rgba(107,110,148,0.04)]"
            >
              <div className="mb-9 w-16 h-16 rounded-full bg-[#0A0A0A] dark:bg-[#0A0A0A] flex items-center justify-center">
                <Image
                  src={feature.iconUrl}
                  alt={t(`features.card${index + 1}.title` as string)}
                  role="presentation"
                  width={56}
                  height={56}
                />
              </div>

              <h3 className="mb-4 text-[#0A0A0A] dark:text-[#0A0A0A] font-bold text-xl md:text-2xl">
                {t(`features.card${index + 1}.title` as string)}
              </h3>
              <p className="text-[#0A0A0A] dark:text-[#0A0A0A]">
                {t(`features.card${index + 1}.description` as string)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
