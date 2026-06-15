'use client';

import Image from "next/image";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroLogos() {
  const { t } = useLanguage();

  return (
    <div className="wrapper">
      <div className="max-w-[1016px] relative z-30 mx-auto pt-14 pb-16">
        <p className="text-center text-[#0A0A0A]/50 dark:text-white/50 text-lg font-medium">
          {t('brands.title')}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-7 md:gap-14 mt-10">
          <Image
            src="/images/brands/br-1.svg"
            className="opacity-50 transition hover:opacity-100 brightness-0 dark:brightness-100"
            alt=""
            width={80}
            height={32}
          />
          <Image
            src="/images/brands/br-2.svg"
            className="opacity-50 transition hover:opacity-100 brightness-0 dark:brightness-100"
            width={80}
            height={32}
            alt=""
          />
          <Image
            src="/images/brands/Notion-logo 1.svg"
            className="opacity-50 transition hover:opacity-100 brightness-0 dark:brightness-100"
            width={60}
            height={24}
            alt=""
          />
          <Image
            src="/images/brands/br-4.svg"
            className="opacity-50 transition hover:opacity-100 brightness-0 dark:brightness-100"
            alt=""
            width={80}
            height={32}
          />
          <Image
            src="/images/brands/br-5.svg"
            className="opacity-50 transition hover:opacity-100 brightness-0 dark:brightness-100"
            width={80}
            height={32}
            alt=""
          />
          <Image
            src="/images/brands/br-6.svg"
            className="opacity-50 transition hover:opacity-100 brightness-0 dark:brightness-100"
            width={80}
            height={32}
            alt=""
          />
          <Image
            src="/images/brands/br-7.svg"
            className="opacity-50 transition hover:opacity-100 brightness-0 dark:brightness-100"
            width={80}
            height={32}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
