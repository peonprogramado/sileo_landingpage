'use client';

import { useState, useEffect, useRef } from 'react';
import {
  BILLING_PERIODS,
  BILLING_PLANS,
} from '@/components/sections/pricing/data';
import { cn } from '@/lib/utils';
import { PricingCard } from '@/components/sections/pricing/card';
import { useLanguage } from '@/contexts/LanguageContext';

type BillingPeriodKey = (typeof BILLING_PERIODS)[number]['key'];

export default function PricingSection() {
  const { t } = useLanguage();
  const [activeBillingPeriodKey, setActiveBillingPeriodKey] =
    useState<BillingPeriodKey>('monthly');
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
    <section className="py-14 md:py-30 bg-[#F7F7F7] dark:bg-[#0A0A0A]">
      <div className="wrapper">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2
            ref={titleRef}
            className={`mb-3 font-bold text-center text-gray-800 text-3xl dark:text-white/90 md:text-title-lg transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-[5px]'}`}
          >
            {t('pricing.title')}
          </h2>
          <p className="max-w-xl mx-auto leading-6 text-gray-500 dark:text-gray-400">
            {t('pricing.description')}
          </p>
        </div>

        <div>
          {/* Billing Toggle */}
          <div className="flex justify-center relative z-30 mt-12">
            <div className="relative flex p-1 bg-[#363132] dark:bg-[#363132] rounded-full shadow-theme-xs">
              {BILLING_PERIODS.map((period) => (
                <button
                  key={period.key}
                  onClick={() => setActiveBillingPeriodKey(period.key)}
                  className={cn(
                    'relative flex items-center gap-2 px-6 py-2 text-sm font-medium transition-colors duration-200 rounded-full',
                    period.key === activeBillingPeriodKey
                      ? 'bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A]'
                      : 'text-white dark:text-white',
                    {
                      'pr-2': period.saving,
                    }
                  )}
                >
                  {t(period.key === 'monthly' ? 'pricing.monthly' : 'pricing.annually')}

                  {period.saving && (
                    <span className="bg-[#BAA7FF] text-white text-xs px-2 py-0.5 rounded-full">
                      {t('pricing.save')} {period.saving}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 z-30 relative space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 max-w-5xl mx-auto justify-items-center">
            {BILLING_PLANS.map((plan, index) => (
              <PricingCard
                key={index}
                plan={plan}
                billingPeriod={activeBillingPeriodKey}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
