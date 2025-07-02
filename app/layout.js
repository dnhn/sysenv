import { Geist } from 'next/font/google';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.className}>
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: 'sysenv',
  description: 'Vercel’s system environment variables',
};

export const viewport = {
  colorScheme: 'dark light',
  width: 'device-width',
};

const geist = Geist({
  subsets: ['latin'],
});
