export const BILLING_PERIODS = [
  {
    label: 'Monthly',
    key: 'monthly',
    saving: null,
  },
  {
    label: 'Annually',
    key: 'yearly',
    saving: '20%',
  },
] as const;

const AMOUNTS = {
  free: {
    monthly: 0,
    yearly: 0,
  },
  plus: {
    monthly: 12,
    yearly: 115,
  },
  pro: {
    monthly: 29,
    yearly: 278,
  },
  enterprise: {
    monthly: null,
    yearly: null,
  },
};

export type TBILLING_PLAN = (typeof BILLING_PLANS)[number];
export const BILLING_PLANS = [
  {
    name: 'Free',
    description:
      'For people who want a simple way to stay aware and focused.Start with the basics. No pressure.',
    pricing: {
      monthly: {
        amount: AMOUNTS['free']['monthly'],
        formattedPrice: '€' + AMOUNTS['free']['monthly'],
        stripeId: null,
      },
      yearly: {
        amount: AMOUNTS['free']['yearly'],
        formattedPrice: '€' + AMOUNTS['free']['yearly'],
        stripeId: null,
      },
    },
    features: [
      'Quick mood check-in',
      'Add a short note',
      'Manage your daily tasks',
      '3 free AI chats to get started',

    ],
    cta: 'Try it for free',
    popular: false,
  },
  {
    name: 'Plus plan',
    description:
      'For people who want more context and flexibility in their day. Go beyond tracking. Start to see patterns.',
    pricing: {
      monthly: {
        amount: AMOUNTS['plus']['monthly'],
        formattedPrice: '€' + AMOUNTS['plus']['monthly'],
        stripeId: process.env.NEXT_PUBLIC_PLUS_MONTHLY_PRICE_ID!,
      },
      yearly: {
        amount: AMOUNTS['plus']['yearly'],
        formattedPrice: '€' + AMOUNTS['plus']['yearly'],
        stripeId: process.env.NEXT_PUBLIC_PLUS_YEARLY_PRICE_ID!,
      },
    },
    features: [
      'Everything in Free',
      'Mood tags and context',
      'Unlimited AI chats',
      'Basic focus timer',
      'Discover what affects your mood',
      'Weekly mood summary, explained simply',
    ],
    cta: 'Subscribe Now',
    popular: true,
  },
  {
    name: 'Pro plan',
    description:
      'For people who want deeper insights and support. Understand your patterns and improve how you work.',
    pricing: {
      monthly: {
        amount: AMOUNTS['pro']['monthly'],
        formattedPrice: '€' + AMOUNTS['pro']['monthly'],
        stripeId: process.env.NEXT_PUBLIC_PRO_MONTHLY_PRICE_ID!,
      },
      yearly: {
        amount: AMOUNTS['pro']['yearly'],
        formattedPrice: '€' + AMOUNTS['pro']['yearly'],
        stripeId: process.env.NEXT_PUBLIC_PRO_YEARLY_PRICE_ID!,
      },
    },
    features: [
      'Everything in Plus',
      'Mood pattern insights',
      'Gentle predictions for difficult days',
      'Guided emotional check-ins',
      'Advanced AI Settings',
    ],
    cta: 'Subscribe Now',
    popular: false,
  },
];
