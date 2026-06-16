import ConditionalLayout from './ConditionalLayout';

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ConditionalLayout>{children}</ConditionalLayout>;
}
