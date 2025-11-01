import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Transtfi | Transit Tracking Reimagined',
  description: 'Realtime transit tracking tailored to your commute. Transtfi keeps you moving with reliable updates and intelligent routing.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f8fbff] text-brand-900 antialiased">{children}</body>
    </html>
  );
}
