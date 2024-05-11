import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
  description: 'login to see your data',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
