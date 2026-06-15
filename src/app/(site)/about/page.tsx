'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import BlurText from '@/components/effects/blur-text';

export default function AboutPage() {
  const titleRef1 = useRef<HTMLHeadingElement>(null);
  const titleRef2 = useRef<HTMLHeadingElement>(null);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible1(true);
          observer1.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (titleRef1.current) {
      observer1.observe(titleRef1.current);
    }

    return () => observer1.disconnect();
  }, []);

  useEffect(() => {
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible2(true);
          observer2.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (titleRef2.current) {
      observer2.observe(titleRef2.current);
    }

    return () => observer2.disconnect();
  }, []);
  return (
    <div className="bg-[#F7F7F7] dark:bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="pt-16 pb-16">
        <div className="wrapper">
          <div className="max-w-3xl mx-auto text-center">
            <BlurText
              text="Where all minds can find their flow"
              delay={80}
              animateBy="words"
              direction="bottom"
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight mx-auto justify-center"
            />
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed animate-[fadeInBlurLight_0.8s_ease-out_0.6s_both]" style={{ willChange: 'opacity, filter' }}>
              Work has become too complex. Too much noise. Too many tools. Sileo clears the space. So you can focus on what matters. Simple works better.
            </p>
            <a href="/404">
              <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors animate-[fadeInUp_0.6s_ease-out_1.2s_both]" style={{ willChange: 'opacity, transform' }}>
                Start on Web
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Why we created Sileo Section */}
      <section className="py-16 md:py-24">
        <div className="wrapper">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2
                  ref={titleRef1}
                  className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-all duration-1000 ease-out ${isVisible1 ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-[5px]'}`}
                >
                  Why we created Sileo
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Most productivity tools were not designed for &ldquo;creative&rdquo; minds. They&apos;re built for linear thinkers, not for those who thrive on chaos, but find it doesn&apos;t work like that. Many people don&apos;t struggle because they lack discipline, but because the tools they use don&apos;t match their thinking style. Sileo is different. It&apos;s designed for minds that need flexibility, visual clarity, and easy to use. So it supports you - not the other way around. And helps you stay focused, one step at a time.
                </p>
                <a href="/404">
                  <button className="px-6 py-2.5 bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    Get Started Today
                  </button>
                </a>
              </div>
              <div className="relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
                  <Image
                    src="/images/about/Mockup1.png"
                    alt="Sileo app mockup"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Sileo helps Section */}
      <section className="py-16 md:py-24">
        <div className="wrapper">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Video on the left */}
              <div className="relative">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-white dark:bg-gray-900 flex justify-center items-center">
                  <img
                    src="/images/about/idlea_1_1.gif"
                    alt="Sileo animation"
                    className="w-[55%] h-auto object-contain"
                  />
                </div>
              </div>

              {/* Text on the right */}
              <div>
                <h2
                  ref={titleRef2}
                  className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-all duration-1000 ease-out ${isVisible2 ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-[5px]'}`}
                >
                  How Sileo helps
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Sileo is designed to make your day easier, not harder. It gives you a clear view of what to do, helps you break tasks into simple steps, and removes the noise that makes it hard to focus. You can plan your day in a way that feels natural, adjust when things change, and move forward without pressure. Everything is built to support you, so you can stay on track in a way that works for you.
                </p>
                <a href="https://brandguidelinessileoes.figma.site/" target="_blank" rel="noopener noreferrer">
                  <button className="px-6 py-2.5 bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    Explore Guides
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Be part of Sileo */}
      <section className="py-16 md:py-24">
        <div className="wrapper">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#0A0A0A] dark:bg-gray-900 rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Be part of Sileo
              </h2>
              <p className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Sileo is built for people, and it&apos;s made better by them. If you want to help us shape it, or explore the tools, every voice makes Sileo a better tool, more inclusive.
              </p>
              <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors">
                Join Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
