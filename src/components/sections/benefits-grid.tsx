'use client';

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ToggleSwitch } from "@/components/ui/toggle-switch";
import { Slider } from "@/components/ui/Slider";

export default function BenefitsGrid() {
  const { t } = useLanguage();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleRef1 = useRef<HTMLHeadingElement>(null);
  const titleRef3 = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [increaseContrast, setIncreaseContrast] = useState(false);
  const [simplifiedGestures, setSimplifiedGestures] = useState(false);
  const [fontSize, setFontSize] = useState(50);
  const [pomodoroTime, setPomodoroTime] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [session, setSession] = useState(1);
  const [showAlertMenu, setShowAlertMenu] = useState(false);
  const [alertEvento, setAlertEvento] = useState(true);
  const [alertTareas, setAlertTareas] = useState(true);
  const [alertFoco, setAlertFoco] = useState(true);

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
    const observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible3(true);
          observer3.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (titleRef3.current) {
      observer3.observe(titleRef3.current);
    }

    return () => observer3.disconnect();
  }, []);

  // Pomodoro timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && pomodoroTime > 0) {
      interval = setInterval(() => {
        setPomodoroTime((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            setSession((s) => s + 1);
            return 25 * 60; // Reset to 25 minutes
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, pomodoroTime]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleReset = () => {
    setIsRunning(false);
    setPomodoroTime(25 * 60);
    setSession(1);
  };

  const progress = ((25 * 60 - pomodoroTime) / (25 * 60)) * 100;
  const circumference = 2 * Math.PI * 80;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <section className="bg-[#F7F7F7] dark:bg-[#0A0A0A] py-14 md:py-28">
      <div className="wrapper">
        {/* Primera sección - Teléfono a la derecha, texto a la izquierda */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-52">
            <div className="max-w-sm">
              <p className="text-sm font-medium text-gray-800 dark:text-white/90 mb-2">
                {t('benefits.personalSetup')}
              </p>
              <h2
                ref={titleRef1}
                className={`mb-3 font-bold text-gray-800 dark:text-white/90 text-3xl md:text-title-lg transition-all duration-1000 ease-out ${isVisible1 ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-[5px]'}`}
              >
                {t('benefits.setItYourWay')}
              </h2>
              <p className="text-base font-normal leading-6 text-gray-500 dark:text-white/50">
                {t('benefits.personalSetupDesc')}
              </p>
            </div>
            <div className="flex justify-center relative">
              <div className="relative">
                <Image
                  src="/images/benefits/phone.svg"
                  alt="Phone preview"
                  width={250}
                  height={500}
                  className="w-auto h-auto max-w-[250px]"
                />
                {/* Accessibility Settings Content */}
                <div className={`absolute top-[14%] left-1/2 -translate-x-1/2 w-[80%] transition-all duration-300 ${increaseContrast ? 'contrast-125 brightness-110' : ''}`}>
                  <h3 className={`text-base font-semibold mb-10 text-center transition-colors duration-300 ${increaseContrast ? 'text-black dark:text-black' : 'text-gray-800 dark:text-black'}`}>
                    Accessibility Settings
                  </h3>

                  {/* Toggle 1: Increase Contrast */}
                  <div className={`flex items-center justify-between mb-6 pb-6 border-b transition-colors duration-300 ${increaseContrast ? 'border-black dark:border-black' : 'border-gray-200 dark:border-gray-700'}`}>
                    <span className={`text-sm transition-colors duration-300 ${increaseContrast ? 'text-black dark:text-black font-semibold' : 'text-gray-800 dark:text-black'}`}>Increase Contrast</span>
                    <ToggleSwitch
                      isActive={increaseContrast}
                      onToggle={() => setIncreaseContrast(!increaseContrast)}
                      highContrast={increaseContrast}
                    />
                  </div>

                  {/* Toggle 2: Simplified Gestures */}
                  <div className={`flex items-center justify-between mb-6 pb-5 border-b transition-colors duration-300 ${increaseContrast ? 'border-black dark:border-black' : 'border-gray-200 dark:border-gray-700'}`}>
                    <span className={`text-sm transition-colors duration-300 ${increaseContrast ? 'text-black dark:text-black font-semibold' : 'text-gray-800 dark:text-black'}`}>Simplified Gestures</span>
                    <ToggleSwitch
                      isActive={simplifiedGestures}
                      onToggle={() => setSimplifiedGestures(!simplifiedGestures)}
                      highContrast={increaseContrast}
                    />
                  </div>

                  {/* Slider: Dynamic Type */}
                  <div className="mb-2 mt-4">
                    <div className="flex items-center justify-between mb-8">
                      <span className={`text-sm transition-colors duration-300 ${increaseContrast ? 'text-black dark:text-black font-semibold' : 'text-gray-800 dark:text-black'}`}>Dynamic Type</span>
                      <span
                        className={`font-bold transition-all duration-200 ${increaseContrast ? 'text-black dark:text-black' : 'text-gray-800 dark:text-black'}`}
                        style={{ fontSize: `${24 + (fontSize * 0.36)}px` }}
                      >
                        Aa
                      </span>
                    </div>
                    <div className="relative mt-6 w-full">
                      <Slider
                        minValue={0}
                        maxValue={100}
                        value={fontSize}
                        onChange={(value) => setFontSize(value as number)}
                        className="w-full"
                        highContrast={increaseContrast}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Segunda sección - Notificaciones */}
        <div className="max-w-4xl mx-auto mt-32 md:mt-48">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-52">
            <div className="max-w-sm">
              <p className="text-sm font-medium text-gray-800 dark:text-white/90 mb-2">
                {t('benefits.notifications')}
              </p>
              <h2
                ref={titleRef}
                className={`mb-3 font-bold text-gray-800 dark:text-white/90 text-3xl md:text-title-lg transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-[5px]'}`}
              >
                {t('benefits.stayOnTrack')}
              </h2>
              <p className="text-base font-normal leading-6 text-gray-500 dark:text-white/50">
                {t('benefits.stayOnTrackDesc')}
              </p>
            </div>
            <div className="flex justify-center relative">
              <Image
                src="/images/benefits/cta_notification.svg"
                alt="Try to click it"
                width={150}
                height={100}
                className="absolute left-0 top-1/3 -translate-x-full -translate-y-1/2 -ml-4 hidden lg:block"
              />
              <div className="relative">
                <Image
                  src="/images/benefits/phone.svg"
                  alt="Phone preview"
                  width={250}
                  height={500}
                  className="w-auto h-auto max-w-[250px]"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 w-[85%]">
                  <div className="relative w-full h-[120px]">
                    <Image
                      src="/images/benefits/noti1.png"
                      alt="Notification 1"
                      width={400}
                      height={80}
                      className="w-full h-auto absolute top-0 left-0 z-30 animate-[slideUpNotification_6s_cubic-bezier(0.34,1.56,0.64,1)_0s_infinite]"
                    />
                    <Image
                      src="/images/benefits/noti2.png"
                      alt="Notification 2"
                      width={400}
                      height={80}
                      className="w-full h-auto absolute top-6 left-0 z-20 animate-[slideUpNotification_6s_cubic-bezier(0.34,1.56,0.64,1)_2s_infinite]"
                    />
                    <Image
                      src="/images/benefits/noti3.png"
                      alt="Notification 3"
                      width={400}
                      height={80}
                      className="w-full h-auto absolute top-12 left-0 z-10 animate-[slideUpNotification_6s_cubic-bezier(0.34,1.56,0.64,1)_4s_infinite]"
                    />
                  </div>
                  <div className="relative mt-8">
                    <button
                      onClick={() => setShowAlertMenu((v) => !v)}
                      className="bg-black text-white text-xs font-medium px-6 py-2.5 rounded-full hover:bg-[#363132] transition"
                    >
                      {t('benefits.controlAlerts')}
                    </button>
                    {showAlertMenu && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white dark:bg-[#1c1c1e] rounded-2xl shadow-2xl border border-gray-200/50 dark:border-white/10 p-3 z-50 backdrop-blur-xl">
                        <div className="flex items-center justify-between py-2 px-1">
                          <span className="text-sm text-gray-900 dark:text-white font-medium">{t('benefits.alertEvent')}</span>
                          <div
                            onClick={() => setAlertEvento((v) => !v)}
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center cursor-pointer transition-colors ${alertEvento ? 'bg-gray-900 border-gray-900 dark:bg-white dark:border-white' : 'border-gray-300 dark:border-gray-500'}`}
                          >
                            {alertEvento && (
                              <svg className="w-3.5 h-3.5 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <div className="h-px bg-gray-200/50 dark:bg-white/10 mx-1" />
                        <div className="flex items-center justify-between py-2 px-1">
                          <span className="text-sm text-gray-900 dark:text-white font-medium">{t('benefits.alertTasks')}</span>
                          <div
                            onClick={() => setAlertTareas((v) => !v)}
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center cursor-pointer transition-colors ${alertTareas ? 'bg-gray-900 border-gray-900 dark:bg-white dark:border-white' : 'border-gray-300 dark:border-gray-500'}`}
                          >
                            {alertTareas && (
                              <svg className="w-3.5 h-3.5 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <div className="h-px bg-gray-200/50 dark:bg-white/10 mx-1" />
                        <div className="flex items-center justify-between py-2 px-1">
                          <span className="text-sm text-gray-900 dark:text-white font-medium">{t('benefits.alertFocus')}</span>
                          <div
                            onClick={() => setAlertFoco((v) => !v)}
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center cursor-pointer transition-colors ${alertFoco ? 'bg-gray-900 border-gray-900 dark:bg-white dark:border-white' : 'border-gray-300 dark:border-gray-500'}`}
                          >
                            {alertFoco && (
                              <svg className="w-3.5 h-3.5 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tercera sección - Teléfono a la izquierda, texto a la derecha */}
          <div className="max-w-4xl mx-auto mt-32 md:mt-48">
            <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-52">
              <div className="max-w-sm">
                <p className="text-sm font-medium text-gray-800 dark:text-white/90 mb-2">
                  {t('benefits.pomodoroTimer')}
                </p>
                <h2
                  ref={titleRef3}
                  className={`mb-3 font-bold text-gray-800 dark:text-white/90 text-3xl md:text-title-lg transition-all duration-1000 ease-out ${isVisible3 ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-[5px]'}`}
                >
                  {t('benefits.timeToFocus')}
                </h2>
                <p className="text-base font-normal leading-6 text-gray-500 dark:text-white/50">
                  {t('benefits.timeToFocusDesc')}
                </p>
              </div>
              <div className="flex justify-center relative">
                <div className="relative">
                  <Image
                    src="/images/benefits/phone.svg"
                    alt="Phone preview"
                    width={250}
                    height={500}
                    className="w-auto h-auto max-w-[250px]"
                  />
                  {/* Pomodoro Timer Content */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-8 w-[85%]">
                    {/* Circular Timer */}
                    <div className="relative w-48 h-48">
                      {/* Background Circle */}
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                        <circle
                          cx="100"
                          cy="100"
                          r="80"
                          stroke="#E5E7EB"
                          strokeWidth="20"
                          fill="none"
                        />
                        {/* Progress Circle */}
                        <circle
                          cx="100"
                          cy="100"
                          r="80"
                          stroke="#000000"
                          strokeWidth="20"
                          fill="none"
                          strokeDasharray={circumference}
                          strokeDashoffset={strokeDashoffset}
                          strokeLinecap="round"
                          className="transition-all duration-300"
                        />
                      </svg>
                      {/* Timer Text */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                        <div className="text-4xl font-semibold text-gray-800 dark:text-black">{formatTime(pomodoroTime)}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-600 mt-1">Session {session}</div>
                      </div>
                    </div>

                    {/* Control Buttons */}
                    <div className="flex items-center gap-4">
                      {/* Play/Pause Button */}
                      <button
                        onClick={() => setIsRunning(!isRunning)}
                        className="w-12 h-12 bg-black dark:bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                      >
                        {isRunning ? (
                          <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="2" width="4" height="14" fill="white" rx="1" />
                            <rect x="10" y="2" width="4" height="14" fill="white" rx="1" />
                          </svg>
                        ) : (
                          <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L15 9L1 16.5V1.5Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                          </svg>
                        )}
                      </button>

                      {/* Reset Button */}
                      <button
                        onClick={handleReset}
                        className="w-12 h-12 bg-white dark:bg-gray-100 border-2 border-gray-300 dark:border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 13.3137 13.3137 16 10 16C8.26633 16 6.71615 15.1932 5.68342 13.9229M4 10V6M4 10H8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
