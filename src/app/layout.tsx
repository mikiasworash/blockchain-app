import './globals.css';

import type { Metadata } from 'next';
import Image from 'next/image';
import { Roboto } from 'next/font/google';

import { MainBg } from '@/constants/images';
import { Navbar } from '@/components/molecules';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Blockchain App',
  description: 'Assignment Project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="relative flex-1 h-full">
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full bg-black z-[-2]" />
        <div className="container relative">
          <Image
            src={MainBg}
            alt="background image"
            width={1920}
            height={400}
            className="z-[-1] absolute top-0 left-0"
          />
          <div className="mx-16">
            <Navbar />
          </div>
          <main className="relative flex-1 h-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
