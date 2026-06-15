'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Subheading } from './subheading';
import { IntroVideo } from './intro-video';
import BlurText from '@/components/effects/blur-text';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection() {
  const { t, language } = useLanguage();

  return (
    <section className="pt-16 relative overflow-hidden bg-[#F7F7F7] dark:bg-[#0A0A0A]">
      <div className="max-w-[120rem] mx-auto relative">
        <div className="wrapper">
          <div className="max-w-[800px] mx-auto">
            <div className="text-center pb-16">
              <Subheading text={t('hero.subheading')} />

              <BlurText
                text={t('hero.mainTitle')}
                delay={80}
                animateBy="words"
                direction="bottom"
                className={`text-[#0A0A0A] mx-auto font-bold mb-4 dark:text-white/90 max-w-[1000px] justify-center ${language === 'es'
                  ? 'text-4xl sm:text-[56px] lg:text-[70px] sm:leading-[64px] lg:leading-[80px] tracking-tight'
                  : 'text-5xl sm:text-[64px] lg:text-[80px] sm:leading-[72px] lg:leading-[90px]'
                  }`}
              />
              <p className="max-w-[537px] text-center mx-auto dark:text-gray-400 text-[#0A0A0A] text-base animate-[fadeInBlurLight_0.8s_ease-out_0.6s_both]" style={{ willChange: 'opacity, filter' }}>
                {t('hero.description')}
              </p>

              <div className="mt-9 flex sm:flex-row flex-col gap-3 relative z-30 items-center justify-center">
                <Link
                  href="/text-generator"
                  className="bg-black dark:bg-white transition h-12 inline-flex items-center justify-center hover:bg-[#363132] dark:hover:bg-gray-100 px-6 py-3 rounded-full text-white dark:text-black text-sm animate-[fadeInUp_0.6s_ease-out_1.2s_both]"
                  style={{ willChange: 'opacity, transform' }}
                >
                  {t('hero.exploreApp')}
                </Link>

                <div className="animate-[fadeInUp_0.6s_ease-out_1.5s_both]" style={{ willChange: 'opacity, transform' }}>
                  <IntroVideo />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1000px] mx-auto relative">
            <div className="p-3 sm:p-[18px] relative z-30 rounded-[32px] border border-white/30 dark:border-white/10 bg-white/20 animate-[fadeInUpBlur_1s_ease-out_1.8s_both]" style={{ willChange: 'opacity, transform, filter' }}>
              <Image
                src="/images/hero/Dashboard  Navigationen.png"
                alt=""
                className="w-full rounded-2xl block dark:hidden"
                width={966}
                height={552}
              />
              <Image
                src="/images/hero/Dashboard  Navigationen.png"
                alt=""
                className="w-full rounded-2xl hidden dark:block"
                width={966}
                height={552}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
