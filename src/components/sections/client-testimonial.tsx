'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Testimonial {
  id: number;
  avatar: string;
  quote: string;
  author: string;
  source: string;
}

function TestimonialCard({
  avatar,
  quote,
  author,
  source,
}: {
  avatar: string;
  quote: string;
  author: string;
  source: string;
}) {
  return (
    <div className="flex-shrink-0 w-[500px] h-[160px] bg-white dark:bg-white rounded-3xl shadow-sm border border-gray-100 dark:border-gray-100 p-8 flex items-center gap-6">
      <div className="flex-shrink-0 w-24 h-24 relative">
        <img
          src={avatar}
          alt={`${author} avatar`}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col gap-3 flex-1 min-w-0">
        <p className="text-gray-800 dark:text-gray-800 text-lg leading-relaxed line-clamp-3">{quote}</p>
        <p className="text-gray-600 dark:text-gray-600 text-sm">
          <span className="font-semibold">{author}</span> {source}
        </p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionTop, setSectionTop] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const updateSectionPosition = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setSectionTop(rect.top + window.scrollY);
        setSectionHeight(rect.height);
      }
    };

    updateSectionPosition();
    window.addEventListener('resize', updateSectionPosition);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateSectionPosition);
    };
  }, [isMounted]);

  const calculateTranslateLeft = () => {
    if (!isMounted) return 0;
    const relativeScroll = scrollY - sectionTop + window.innerHeight;
    const progress = Math.max(0, Math.min(1, relativeScroll / (sectionHeight + window.innerHeight)));
    return progress * -600;
  };

  const calculateTranslateRight = () => {
    if (!isMounted) return 0;
    const relativeScroll = scrollY - sectionTop + window.innerHeight;
    const progress = Math.max(0, Math.min(1, relativeScroll / (sectionHeight + window.innerHeight)));
    return -600 + progress * 600;
  };

  const testimonialsRow1: Testimonial[] = [
    {
      id: 1,
      avatar: '/opinions/Female Memojis4.png',
      quote: t('testimonials.review1'),
      author: 'CyberMint',
      source: t('testimonials.onAppStore'),
    },
    {
      id: 2,
      avatar: '/opinions/Female Memojis5.png',
      quote: t('testimonials.review2'),
      author: 'appuser01',
      source: t('testimonials.onAppStore'),
    },
    {
      id: 3,
      avatar: '/opinions/Female Memojis6.png',
      quote: t('testimonials.review3'),
      author: 'CloudSurfer',
      source: t('testimonials.onAppStore'),
    },
  ];

  const testimonialsRow2: Testimonial[] = [
    {
      id: 4,
      avatar: '/opinions/Male Memojis.png',
      quote: t('testimonials.review4'),
      author: 'TechPhantom',
      source: t('testimonials.onAppStore'),
    },
    {
      id: 5,
      avatar: '/opinions/Male Memojis2.png',
      quote: t('testimonials.review5'),
      author: 'PixelVibes',
      source: t('testimonials.onAppStore'),
    },
    {
      id: 6,
      avatar: '/opinions/Male Memojis3.png',
      quote: t('testimonials.review6'),
      author: 'iOSWarrior',
      source: t('testimonials.onAppStore'),
    },
  ];

  return (
    <section ref={sectionRef} className="md:py-28 py-14 overflow-hidden bg-[#F7F7F7] dark:bg-transparent">
      <div className="wrapper">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2
            ref={titleRef}
            className={`mb-3 font-bold text-center text-gray-800 text-3xl dark:text-white/90 md:text-title-lg transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-[5px]'}`}
          >
            {t('pricing.subtitle')}
          </h2>
          <p className="max-w-xl mx-auto leading-6 text-gray-500 dark:text-gray-400">

          </p>
        </div>

        {/* Carousel Row 1 - moves left */}
        <div className="relative w-full overflow-visible mb-6">
          <div
            className="flex gap-6 pl-8"
            style={{
              transform: `translateX(${calculateTranslateLeft()}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            {testimonialsRow1.map((testimonial, index) => (
              <TestimonialCard
                key={`row1-${testimonial.id}-${index}`}
                avatar={testimonial.avatar}
                quote={testimonial.quote}
                author={testimonial.author}
                source={testimonial.source}
              />
            ))}
          </div>
        </div>

        {/* Carousel Row 2 - moves right */}
        <div className="relative w-full overflow-visible">
          <div
            className="flex gap-6 pl-8"
            style={{
              transform: `translateX(${calculateTranslateRight()}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            {testimonialsRow2.map((testimonial, index) => (
              <TestimonialCard
                key={`row2-${testimonial.id}-${index}`}
                avatar={testimonial.avatar}
                quote={testimonial.quote}
                author={testimonial.author}
                source={testimonial.source}
              />
            ))}
          </div>
        </div>

        {/* See All Reviews Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3.5 text-sm font-medium text-white bg-[#0A0A0A] dark:bg-white dark:text-[#0A0A0A] rounded-full transition hover:bg-[#1A1A1A] dark:hover:bg-gray-100">
            {t('testimonials.seeAllReviews')}
          </button>
        </div>
      </div>
    </section>
  );
}
