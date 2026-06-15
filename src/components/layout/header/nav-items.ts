export const getNavItems = (t: (key: string) => string) => [
  {
    type: 'link',
    href: '/',
    label: t('nav.features'),
  },
  {
    type: 'link',
    label: t('nav.pricing'),
    href: '/pricing',
  },
  {
    type: 'link',
    label: t('nav.about'),
    href: '/about',
  },
] satisfies NavItem[];

type NavItem = Record<string, string | unknown> &
  (
    | {
      type: 'link';
      href: string;
    }
    | {
      type: 'dropdown';
    }
  );
