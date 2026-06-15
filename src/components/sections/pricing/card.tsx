'use client';

import { CheckIcon } from '@/icons/icons';
import type { TBILLING_PLAN } from '@/components/sections/pricing/data';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type Props = {
  plan: TBILLING_PLAN;
  billingPeriod: keyof TBILLING_PLAN['pricing'];
};

export function PricingCard({ plan, billingPeriod }: Props) {
  const { t } = useLanguage();

  // Determinar el prefijo de traducción basado en el nombre del plan
  const getPlanPrefix = () => {
    if (plan.name === 'Free') return 'pricing.free';
    if (plan.name === 'Plus plan') return 'pricing.plus';
    if (plan.name === 'Pro plan') return 'pricing.pro';
    return 'pricing.free';
  };

  const planPrefix = getPlanPrefix();

  // Obtener las características traducidas
  const getTranslatedFeatures = () => {
    const featureCount = plan.features.length;
    const features = [];
    for (let i = 1; i <= featureCount; i++) {
      features.push(t(`${planPrefix}.feature${i}` as string));
    }
    return features;
  };

  return (
    <div className="relative">
      <div
        className={`bg-white dark:bg-white rounded-[20px] shadow-one relative z-10 h-full ${plan.popular ? 'relative border-2 border-[#BAA7FF]' : ''
          }`}
      >
        <div className="p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#0A0A0A] dark:text-[#0A0A0A]">
              {t(`${planPrefix}.name` as string)}
            </h2>
            {plan.popular && (
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-[#BAA7FF]/15 text-[#7D66D9]">
                Popular
              </span>
            )}
          </div>
          <p className="flex items-baseline mt-4">
            <span className="text-4xl font-semibold text-[#0A0A0A] dark:text-[#0A0A0A]">
              {plan.pricing[billingPeriod].formattedPrice}
            </span>

            {!!plan.pricing[billingPeriod].amount && (
              <span className="ml-1 text-sm text-[#0A0A0A] dark:text-[#0A0A0A]">
                {billingPeriod === 'yearly' ? t('pricing.perYear' as string) : t('pricing.perMonth' as string)}
              </span>
            )}
          </p>
          <p className="mt-3 text-sm text-[#0A0A0A] dark:text-[#0A0A0A]">
            {t(`${planPrefix}.description` as string)}
          </p>

          {plan.name.includes('Enterprise') ? (
            <ContactSalesLink>{t(`${planPrefix}.cta` as string)}</ContactSalesLink>
          ) : (
            <button
              className={cn(
                'block w-full px-8 py-3.5 mt-7 text-sm font-medium text-center rounded-full transition',
                plan.popular
                  ? 'bg-[#BAA7FF] text-white hover:bg-[#A896EE]'
                  : 'bg-[#0A0A0A] dark:bg-[#0A0A0A] text-white dark:text-white hover:bg-[#1A1A1A] dark:hover:bg-[#1A1A1A]'
              )}
            >
              {t(`${planPrefix}.cta` as string)}
            </button>
          )}
        </div>
        <div className="px-8 pb-7">
          <ul className="space-y-3">
            {getTranslatedFeatures().map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 text-[#0A0A0A] dark:text-[#0A0A0A]">
                  <CheckIcon />
                </div>

                <p className="ml-2 text-sm text-[#0A0A0A] dark:text-[#0A0A0A]">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ContactSalesLink({ children }: PropsWithChildren) {
  return (
    <Link
      href="/contact"
      className="block w-full px-8 py-3.5 mt-7 text-sm font-medium text-center rounded-full transition dark:hover:bg-primary-500 dark:bg-white/[0.03] hover:bg-gray-900 text-white bg-gray-700"
    >
      {children}
    </Link>
  );
}
