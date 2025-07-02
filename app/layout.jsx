import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: 'sysenv',
  description: 'System environment variables',
};

export const viewport = {
  colorScheme: 'dark light',
  width: 'device-width',
};
