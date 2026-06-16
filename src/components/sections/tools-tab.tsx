'use client';

import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

// Define the tab type
interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function AIToolsTabs() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('taskmode');
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

  // Tab data
  const tabs: Tab[] = [
    {
      id: 'taskmode',
      label: t('tools.tab1'),
      icon: (
        <>
          <Image src="/images/logo/generators/icons/calendar.svg" alt="Calendar" width={32} height={32} className="w-8 h-8 block dark:hidden" />
          <Image src="/images/logo/generators/icons/calendarwhite.svg" alt="Calendar" width={32} height={32} className="w-8 h-8 hidden dark:block" />
        </>
      ),
      title: 'Easiest way to organize yout tasks',
      description:
        'Unlock the Potential of Innovation. Discover the Advanced AI Tools Transforming Your Ideas into Reality with Unmatched Precision and Intelligence.',
    },
    {
      id: 'moodtracker',
      label: t('tools.tab2'),
      icon: (
        <>
          <Image src="/images/logo/generators/icons/heart.svg" alt="Heart" width={32} height={32} className="w-8 h-8 block dark:hidden" />
          <Image src="/images/logo/generators/icons/heartwhite.svg" alt="Heart" width={32} height={32} className="w-8 h-8 hidden dark:block" />
        </>
      ),
      title: 'Generate clean code in seconds',
      description:
        'Unlock the Potential of Innovation. Discover the Advanced AI Tools Transforming Your Ideas into Reality with Unmatched Precision and Intelligence.',
    },
    {
      id: 'focus',
      label: t('tools.tab3'),
      icon: (
        <>
          <Image src="/images/logo/generators/icons/aichats.svg" alt="AI Chat" width={32} height={32} className="w-8 h-8 block dark:hidden" />
          <Image src="/images/logo/generators/icons/aichatwhite.svg" alt="AI Chat" width={32} height={32} className="w-8 h-8 hidden dark:block" />
        </>
      ),
      title: 'Create stunning visuals effortlessly',
      description:
        'Unlock the Potential of Innovation. Discover the Advanced AI Tools Transforming Your Ideas into Reality with Unmatched Precision and Intelligence.',
    },
    {
      id: 'aichat',
      label: t('tools.tab4'),
      icon: (
        <Image src="/images/logo/generators/icons/timerwhite.svg" alt="Stats" width={32} height={32} className="w-8 h-8 invert dark:invert-0" />
      ),
      title: 'Produce engaging videos quickly',
      description:
        'Unlock the Potential of Innovation. Discover the Advanced AI Tools Transforming Your Ideas into Reality with Unmatched Precision and Intelligence.',
    },
    {
      id: 'settings',
      label: t('tools.tab5'),
      icon: (
        <>
          <Image src="/images/logo/generators/icons/settings.svg" alt="Settings" width={32} height={32} className="w-8 h-8 block dark:hidden" />
          <Image src="/images/logo/generators/icons/settingswhite.svg" alt="Settings" width={32} height={32} className="w-8 h-8 hidden dark:block" />
        </>
      ),
      title: 'Write professional emails instantly',
      description:
        'Unlock the Potential of Innovation. Discover the Advanced AI Tools Transforming Your Ideas into Reality with Unmatched Precision and Intelligence.',
    },
  ];

  return (
    <section className="py-14 md:py-28 bg-[#F7F7F7] dark:bg-[#0A0A0A]">
      <div className="wrapper">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2
            ref={titleRef}
            className={`mb-3 font-bold text-center text-gray-800 dark:text-white/90 text-3xl md:text-title-lg transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-[5px]'}`}
          >
            {t('tools.title')}
          </h2>
          <p className="max-w-2xl mx-auto leading-6 text-gray-500 dark:text-gray-400">
            {t('tools.description')}
          </p>
        </div>

        <div className="max-w-[1008px] mx-auto">
          <div>
            {/* Tab Navigation */}
            <div className="overflow-x-auto custom-scrollbar mx-auto max-w-fit relative">
              <div className="flex gap-2 min-w-max rounded-full bg-gray-100 dark:bg-white/5 p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center h-12 gap-2 px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-full ${activeTab === tab.id
                      ? 'bg-white dark:text-white/90 dark:bg-white/10 text-gray-800'
                      : 'text-gray-500 dark:text-gray-400 bg-transparent'
                      }`}
                  >
                    {tab.icon}
                    <span className="truncate">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}

            <div className="p-3 overflow-hidden rounded-4xl mt-8 bg-[#E5E5E5] dark:bg-[#2A2A2A]">
              <div className="p-2">
                <div className="w-full aspect-[936/535] rounded-2xl bg-white overflow-hidden relative">
                  {activeTab === 'focus' ? (
                    <div
                      className="absolute inset-3"
                      style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                      }}
                    >
                      <video
                        src="/images/tab-image/aicha2t.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : activeTab === 'taskmode' ? (
                    <div
                      className="absolute inset-8"
                      style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                      }}
                    >
                      <video
                        src="/images/tab-image/Grabación de pantalla 2026-06-16 a las 16.17.52_1.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : activeTab === 'moodtracker' ? (
                    <div
                      className="absolute inset-3"
                      style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                      }}
                    >
                      <video
                        src="/images/tab-image/mood_1.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : activeTab === 'settings' ? (
                    <div
                      className="absolute inset-3"
                      style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                      }}
                    >
                      <video
                        src="/images/tab-image/custom.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : activeTab === 'aichat' ? (
                    <div
                      className="absolute inset-3"
                      style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                      }}
                    >
                      <video
                        src="/images/tab-image/focus.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : null}
                  <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
