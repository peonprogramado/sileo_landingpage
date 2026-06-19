'use client';

import React,
{
  createContext,
  useContext,
  useState,
  useEffect
}

  from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.about': 'About us',
    'nav.downloadApp': 'Download the app',
    'nav.startPlanning': 'Start Planning for free',

    // Footer
    'footer.product': 'Product',
    'footer.socialMedia': 'Social Media',
    'footer.resources': 'Resources',
    'footer.features': 'Features',
    'footer.integrations': 'Integrations',
    'footer.pricing': 'Pricing',
    'footer.about': 'About',
    'footer.blog': 'Blog',
    'footer.twitter': 'Twitter',
    'footer.linkedin': 'LinkedIn',
    'footer.instagram': 'Instagram',
    'footer.youtube': 'YouTube',
    'footer.downloads': 'Downloads',
    'footer.brandGuidelines': 'Brand Guidelines',
    'footer.documentation': 'Documentation',
    'footer.contact': 'Contact',
    'footer.help': 'Help Center',
    'footer.community': 'Community',
    'footer.contactUs': 'Contact Us',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Conditions',
    'footer.rights': '© 2026 Sileo. All rights reserved.',
    'footer.stayInTouch': 'Stay in touch',
    'footer.description': 'Simple, accessible productivity for focus and clarity.',
    'footer.emailPlaceholder': 'Enter your email',
    'footer.subscribeButton': 'Subscribe Now',

    // Benefits
    'benefits.personalSetup': 'Personal Setup',
    'benefits.setItYourWay': 'Set it your way',
    'benefits.personalSetupDesc': 'Customize your space from the start. Set your routines, preferences, and accessibility needs.',
    'benefits.notifications': 'Notifications',
    'benefits.stayOnTrack': 'Stay on track, calmly',
    'benefits.stayOnTrackDesc': 'Set reminders your way. Stay focused without pressure.',
    'benefits.controlAlerts': 'Control your alerts',
    'benefits.alertEvent': 'Event',
    'benefits.alertTasks': 'Tasks',
    'benefits.alertFocus': 'Focus session',
    'benefits.pomodoroTimer': 'Pomodoro Timer',
    'benefits.timeToFocus': 'Time to focus',
    'benefits.timeToFocusDesc': 'Focus in short sessions. Set your time. Take breaks when you need them.',

    // Hero
    'hero.subheading': 'A productivity app designed to be truly accessible',
    'hero.mainTitle': 'Simple works better',
    'hero.title': 'Simple, accessible productivity for focus and clarity',
    'hero.description': 'A calm, simple, and accessible way to manage your work and stay focused.',
    'hero.exploreApp': 'Explore app',
    'hero.watchVideo': 'Watch Intro Video',

    // Tools Tab
    'tools.title': 'See how Sileo works.',
    'tools.description': 'Explore how to organize, focus, and stay on track with Sileo.',
    'tools.tab1': 'Task Mode',
    'tools.tab2': 'Mood Tracking',
    'tools.tab3': 'AI Chat',
    'tools.tab4': 'Focus Timer',
    'tools.tab5': 'Custom Space',

    // Pricing
    'pricing.title': 'Simple plans. Clear value.',
    'pricing.subtitle': 'Join thousands of people finding focus every day',
    'pricing.description': 'Start for free. Upgrade when you need more support.',
    'pricing.monthly': 'Monthly',
    'pricing.annually': 'Annually',
    'pricing.save': 'Save',
    'pricing.perMonth': 'Per month',
    'pricing.perYear': 'Per year',

    // Pricing Plans
    'pricing.free.name': 'Free',
    'pricing.free.description': 'For people who want a simple way to stay aware and focused.Start with the basics. No pressure.',
    'pricing.free.cta': 'Try it for free',
    'pricing.free.feature1': 'Quick mood check-in',
    'pricing.free.feature2': 'Add a short note',
    'pricing.free.feature3': 'Manage your daily tasks',
    'pricing.free.feature4': '3 free AI chats to get started',

    'pricing.plus.name': 'Plus plan',
    'pricing.plus.description': 'For people who want more context and flexibility in their day. Go beyond tracking. Start to see patterns.',
    'pricing.plus.cta': 'Subscribe Now',
    'pricing.plus.feature1': 'Everything in Free',
    'pricing.plus.feature2': 'Mood tags and context',
    'pricing.plus.feature3': 'Unlimited AI chats',
    'pricing.plus.feature4': 'Basic focus timer',
    'pricing.plus.feature5': 'Discover what affects your mood',
    'pricing.plus.feature6': 'Weekly mood summary, explained simply',

    'pricing.pro.name': 'Pro plan',
    'pricing.pro.description': 'For people who want deeper insights and support. Understand your patterns and improve how you work.',
    'pricing.pro.cta': 'Subscribe Now',
    'pricing.pro.feature1': 'Everything in Plus',
    'pricing.pro.feature2': 'Mood pattern insights',
    'pricing.pro.feature3': 'Gentle predictions for difficult days',
    'pricing.pro.feature4': 'Guided emotional check-ins',
    'pricing.pro.feature5': 'Advanced AI Settings',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know, simply explained.',
    'faq.q1': 'Is Sileo free to use?',
    'faq.a1': 'Yes. You can start for free with the core features. Upgrade anytime if you need more support.',
    'faq.q2': 'How does the AI assistant work?',
    'faq.a2': 'You can ask for help with planning, organizing, or thinking things through. A few uses are free.',
    'faq.q3': 'Can I upgrade to a higher plan?',
    'faq.a3': 'Yes, you can upgrade to a higher plan at any time. When you upgrade, you\'ll be charged the prorated difference for the remainder of your current billing cycle. Your new features will be available immediately after upgrading.',
    'faq.q4': 'Is my data private?',
    'faq.a4': 'Yes. Your data is secure and handled with care. You stay in control.',
    'faq.q5': 'Is Sileo accessible?',
    'faq.a5': 'Yes. Sileo is designed to be clear, simple, and easy to use for everyone. It follows WCAG 2.2 Level AA standards to ensure accessibility across the product.',

    // Testimonials
    'testimonials.seeAllReviews': 'See All Reviews',
    'testimonials.onAppStore': 'on the App Store',
    'testimonials.review1': "I've tried many productivity apps. This one feels different. It's simple and easy to use. I can focus without feeling overwhelmed.",
    'testimonials.review2': "Very simple to use. I started in a few minutes and didn't feel lost.",
    'testimonials.review3': "Clear structure and simple language. It's easy to understand what to do.",
    'testimonials.review4': 'This is the first productivity app that feels calm. It actually helps me think.',
    'testimonials.review5': 'This app helps me focus on one thing at a time. That makes a big difference.',
    'testimonials.review6': 'Simple, clear, and easy to use. It works the way I think.',

    // Features
    'features.title': 'What can you do with Sileo?',
    'features.subtitle': 'Organize your work, reduce noise, and stay focused—one step at a time.',
    'features.card1.title': 'Bring your work together',
    'features.card1.description': 'Keep your tasks in one place. Stay clear and organized without switching tools.',
    'features.card2.title': 'Focus, your way',
    'features.card2.description': 'Work in short sessions. Set your pace and take breaks when you need them.',
    'features.card3.title': 'Work without barriers',
    'features.card3.description': 'Designed to be clear, accessible, and easy to use for everyone.',

    // Brands
    'brands.title': 'Trusted by worlds largest companies including...',

    // About
    'about.heroTitle': 'Where all minds can find their flow',
    'about.heroSubtitle': 'Work has become too complex. Too much noise. Too many tools. Sileo clears the space. So you can focus on what matters. Simple works better.',
    'about.startOnWeb': 'Start on Web',
    'about.whyTitle': 'Why we created Sileo',
    'about.whyText': 'Most productivity tools were not designed for "creative" minds. They\'re built for linear thinkers, not for those who thrive on chaos, but find it doesn\'t work like that. Many people don\'t struggle because they lack discipline, but because the tools they use don\'t match their thinking style. Sileo is different. It\'s designed for minds that need flexibility, visual clarity, and easy to use. So it supports you - not the other way around. And helps you stay focused, one step at a time.',
    'about.getStartedToday': 'Get Started Today',
    'about.howTitle': 'How Sileo helps',
    'about.howText': 'Sileo is designed to make your day easier, not harder. It gives you a clear view of what to do, helps you break tasks into simple steps, and removes the noise that makes it hard to focus. You can plan your day in a way that feels natural, adjust when things change, and move forward without pressure. Everything is built to support you, so you can stay on track in a way that works for you.',
    'about.exploreGuides': 'Explore Guides',
    'about.ctaTitle': 'Be part of Sileo',
    'about.ctaText': 'Sileo is built for people, and it\'s made better by them. If you want to help us shape it, or explore the tools, every voice makes Sileo a better tool, more inclusive.',
    'about.joinUs': 'Join Us',

    // Sign Up
    'signup.tagline': 'Organize your day',
    'signup.leftPanelTitle': 'Manage your tasks with clarity and effortlessly.',
    'signup.title': 'Create an account',
    'signup.subtitle': 'Access your tasks, notes, and projects from anywhere — and keep everything in one place.',
    'signup.or': 'or',
    'signup.continueWithApple': 'Continue with Apple',
    'signup.continueWithGoogle': 'Continue with Google',
    'signup.alreadyHaveAccount': 'Already have an account?',
    'signup.signIn': 'Sign in',
    'signup.downloadApp': 'Download app',
    'signup.emailLabel': 'Your email',
    'signup.emailPlaceholder': 'name@email.com',
    'signup.passwordLabel': 'Create password',
    'signup.loading': 'Creating account...',
    'signup.createAccount': 'Create account',
  }

  ,
  es: {
    // Navbar
    'nav.features': 'Características',
    'nav.pricing': 'Precios',
    'nav.about': 'Sobre nosotros',
    'nav.downloadApp': 'Descargar app',
    'nav.startPlanning': 'Empezar gratis',

    // Footer
    'footer.product': 'Producto',
    'footer.socialMedia': 'Redes Sociales',
    'footer.resources': 'Recursos',
    'footer.features': 'Características',
    'footer.integrations': 'Integraciones',
    'footer.pricing': 'Precios',
    'footer.about': 'Acerca de',
    'footer.blog': 'Blog',
    'footer.twitter': 'Twitter',
    'footer.linkedin': 'LinkedIn',
    'footer.instagram': 'Instagram',
    'footer.youtube': 'YouTube',
    'footer.downloads': 'Descargas',
    'footer.brandGuidelines': 'Guías de Marca',
    'footer.documentation': 'Documentación',
    'footer.contact': 'Contacto',
    'footer.help': 'Centro de Ayuda',
    'footer.community': 'Comunidad',
    'footer.contactUs': 'Contáctanos',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos y Condiciones',
    'footer.rights': '© 2026 Sileo. Todos los derechos reservados.',
    'footer.stayInTouch': 'Mantente en contacto',
    'footer.description': 'Productividad simple y accesible para enfoque y claridad.',
    'footer.emailPlaceholder': 'Ingresa tu correo',
    'footer.subscribeButton': 'Suscribirse Ahora',

    // Benefits
    'benefits.personalSetup': 'Configuración Personal',
    'benefits.setItYourWay': 'Configúralo a tu manera',
    'benefits.personalSetupDesc': 'Personaliza tu espacio desde el inicio. Establece tus rutinas, preferencias y necesidades de accesibilidad.',
    'benefits.notifications': 'Notificaciones',
    'benefits.stayOnTrack': 'Mantente enfocado, con calma',
    'benefits.stayOnTrackDesc': 'Configura recordatorios a tu manera. Mantente enfocado sin presión.',
    'benefits.controlAlerts': 'Controla tus alertas',
    'benefits.alertEvent': 'Evento',
    'benefits.alertTasks': 'Tareas',
    'benefits.alertFocus': 'Sesión de foco',
    'benefits.pomodoroTimer': 'Temporizador Pomodoro',
    'benefits.timeToFocus': 'Hora de enfocarse',
    'benefits.timeToFocusDesc': 'Enfócate en sesiones cortas. Establece tu tiempo. Toma descansos cuando los necesites.',

    // Hero
    'hero.subheading': 'Una app de productividad diseñada para ser verdaderamente accesible',
    'hero.mainTitle': 'Simple funciona mejor',
    'hero.title': 'Productividad simple y accesible para enfoque y claridad',
    'hero.description': 'Una forma tranquila, simple y accesible de gestionar tu trabajo y mantenerte enfocado.',
    'hero.exploreApp': 'Explorar app',
    'hero.watchVideo': 'Ver Video Introductorio',

    // Tools Tab
    'tools.title': 'Mira cómo funciona Sileo.',
    'tools.description': 'Explora cómo organizar, enfocarte y mantenerte en el camino con Sileo.',
    'tools.tab1': 'Modo Tareas',
    'tools.tab2': 'Seguimiento de Ánimo',
    'tools.tab3': 'Chat IA',
    'tools.tab4': 'Temporizador de Enfoque',
    'tools.tab5': 'Espacio Personalizado',

    // Pricing
    'pricing.title': 'Planes simples. Valor claro.',
    'pricing.subtitle': 'Únete a miles de personas que encuentran enfoque cada día',
    'pricing.description': 'Comienza gratis. Actualiza cuando necesites más soporte.',
    'pricing.monthly': 'Mensual',
    'pricing.annually': 'Anual',
    'pricing.save': 'Ahorra',
    'pricing.perMonth': 'Por mes',
    'pricing.perYear': 'Por año',

    // Pricing Plans
    'pricing.free.name': 'Gratis',
    'pricing.free.description': 'Para personas que quieren una forma simple de mantenerse conscientes y enfocados. Comienza con lo básico. Sin presión.',
    'pricing.free.cta': 'Pruébalo gratis',
    'pricing.free.feature1': 'Registro rápido de estado de ánimo',
    'pricing.free.feature2': 'Añade una nota corta',
    'pricing.free.feature3': 'Gestiona tus tareas diarias',
    'pricing.free.feature4': '3 chats de IA gratis para empezar',

    'pricing.plus.name': 'Plan Plus',
    'pricing.plus.description': 'Para personas que quieren más contexto y flexibilidad en su día. Ve más allá del seguimiento. Comienza a ver patrones.',
    'pricing.plus.cta': 'Suscribirse ahora',
    'pricing.plus.feature1': 'Todo en Gratis',
    'pricing.plus.feature2': 'Etiquetas y contexto de estado de ánimo',
    'pricing.plus.feature3': 'Chats de IA ilimitados',
    'pricing.plus.feature4': 'Temporizador de enfoque básico',
    'pricing.plus.feature5': 'Descubre qué afecta tu estado de ánimo',
    'pricing.plus.feature6': 'Resumen semanal de estado de ánimo, explicado simplemente',

    'pricing.pro.name': 'Plan Pro',
    'pricing.pro.description': 'Para personas que quieren información más profunda y soporte. Comprende tus patrones y mejora cómo trabajas.',
    'pricing.pro.cta': 'Suscribirse ahora',
    'pricing.pro.feature1': 'Todo en Plus',
    'pricing.pro.feature2': 'Información de patrones de estado de ánimo',
    'pricing.pro.feature3': 'Predicciones suaves para días difíciles',
    'pricing.pro.feature4': 'Registros emocionales guiados',
    'pricing.pro.feature5': 'Configuración avanzada de IA',

    // FAQ
    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle': 'Todo lo que necesitas saber, explicado simplemente.',
    'faq.q1': '¿Sileo es gratis?',
    'faq.a1': 'Sí. Puedes comenzar gratis con las funciones principales. Actualiza en cualquier momento si necesitas más soporte.',
    'faq.q2': '¿Cómo funciona el asistente de IA?',
    'faq.a2': 'Puedes pedir ayuda con planificación, organización o pensar las cosas. Algunos usos son gratis.',
    'faq.q3': '¿Puedo actualizar a un plan superior?',
    'faq.a3': 'Sí, puedes actualizar a un plan superior en cualquier momento. Cuando actualices, se te cobrará la diferencia prorrateada por el resto de tu ciclo de facturación actual. Tus nuevas funciones estarán disponibles inmediatamente después de actualizar.',
    'faq.q4': '¿Mis datos son privados?',
    'faq.a4': 'Sí. Tus datos son seguros y se manejan con cuidado. Tú mantienes el control.',
    'faq.q5': '¿Sileo es accesible?',
    'faq.a5': 'Sí. Sileo está diseñado para ser claro, simple y fácil de usar para todos. Sigue los estándares WCAG 2.2 Nivel AA para garantizar la accesibilidad en todo el producto.',

    // Testimonials
    'testimonials.seeAllReviews': 'Ver Todas las Reseñas',
    'testimonials.onAppStore': 'en la App Store',
    'testimonials.review1': 'He probado muchas apps de productividad. Esta se siente diferente. Es simple y fácil de usar. Puedo concentrarme sin sentirme abrumado.',
    'testimonials.review2': 'Muy simple de usar. Empecé en unos minutos y no me sentí perdido.',
    'testimonials.review3': 'Estructura clara y lenguaje simple. Es fácil entender qué hacer.',
    'testimonials.review4': 'Esta es la primera app de productividad que se siente tranquila. Realmente me ayuda a pensar.',
    'testimonials.review5': 'Esta app me ayuda a enfocarme en una cosa a la vez. Eso hace una gran diferencia.',
    'testimonials.review6': 'Simple, clara y fácil de usar. Funciona como pienso.',

    // Features
    'features.title': '¿Qué puedes hacer con Sileo?',
    'features.subtitle': 'Organiza tu trabajo, reduce el ruido y mantente enfocado—un paso a la vez.',
    'features.card1.title': 'Reúne tu trabajo',
    'features.card1.description': 'Mantén tus tareas en un solo lugar. Mantente claro y organizado sin cambiar de herramientas.',
    'features.card2.title': 'Enfócate, a tu manera',
    'features.card2.description': 'Trabaja en sesiones cortas. Establece tu ritmo y toma descansos cuando los necesites.',
    'features.card3.title': 'Trabaja sin barreras',
    'features.card3.description': 'Diseñado para ser claro, accesible y fácil de usar para todos.',

    // Brands
    'brands.title': 'Confiado por las empresas más grandes del mundo incluyendo...',

    // About
    'about.heroTitle': 'Donde todas las mentes pueden encontrar su flujo',
    'about.heroSubtitle': 'El trabajo se ha vuelto demasiado complejo. Demasiado ruido. Demasiadas herramientas. Sileo despeja el espacio. Para que puedas centrarte en lo que importa. Lo simple funciona mejor.',
    'about.startOnWeb': 'Empezar en web',
    'about.whyTitle': 'Por qué creamos Sileo',
    'about.whyText': 'La mayoría de herramientas de productividad no fueron diseñadas para mentes «creativas». Están construidas para pensadores lineales, no para quienes prosperan en el caos pero descubren que así no funciona. Muchas personas no luchan por falta de disciplina, sino porque las herramientas que usan no se adaptan a su forma de pensar. Sileo es diferente. Está diseñado para mentes que necesitan flexibilidad, claridad visual y facilidad de uso. Te apoya a ti, no al revés. Y te ayuda a mantenerte enfocado, un paso a la vez.',
    'about.getStartedToday': 'Comenzar hoy',
    'about.howTitle': 'Cómo ayuda Sileo',
    'about.howText': 'Sileo está diseñado para hacer tu día más fácil, no más difícil. Te ofrece una visión clara de qué hacer, te ayuda a dividir las tareas en pasos simples y elimina el ruido que dificulta la concentración. Puedes planificar tu día de forma natural, adaptarte cuando las cosas cambian y avanzar sin presión. Todo está construido para apoyarte, para que puedas seguir el camino a tu manera.',
    'about.exploreGuides': 'Explorar guías',
    'about.ctaTitle': 'Sé parte de Sileo',
    'about.ctaText': 'Sileo está construido para las personas y mejora gracias a ellas. Si quieres ayudarnos a darle forma o explorar las herramientas, cada voz hace de Sileo una herramienta mejor y más inclusiva.',
    'about.joinUs': 'Únete',

    // Sign Up
    'signup.tagline': 'Organiza tu día',
    'signup.leftPanelTitle': 'Gestiona tus tareas con claridad y sin esfuerzo.',
    'signup.title': 'Crear una cuenta',
    'signup.subtitle': 'Accede a tus tareas, notas y proyectos desde cualquier lugar — y mantén todo en un solo sitio.',
    'signup.or': 'o',
    'signup.continueWithApple': 'Continuar con Apple',
    'signup.continueWithGoogle': 'Continuar con Google',
    'signup.alreadyHaveAccount': '¿Ya tienes una cuenta?',
    'signup.signIn': 'Iniciar sesión',
    'signup.downloadApp': 'Download app',
    'signup.emailLabel': 'Tu email',
    'signup.emailPlaceholder': 'nombre@correo.com',
    'signup.passwordLabel': 'Crear contraseña',
    'signup.loading': 'Creando cuenta...',
    'signup.createAccount': 'Crear cuenta',
  }

  ,
}

  ;

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children
}

  : {
    children: React.ReactNode
  }

) {
  const [language,
    setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;

    if (savedLanguage) {
      setLanguageState(savedLanguage);
    }
  }

    , []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  }

    ;

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  }

    ;

  return (<LanguageContext.Provider value={
    {
      language, setLanguage, t
    }
  }

  > {
      children
    }

  </LanguageContext.Provider>);
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}