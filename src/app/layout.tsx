import type { Metadata, Viewport } from "next";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "sysenv",
  description: "System environment variables",
};

export const viewport: Viewport = {
  width: "device-width",
};
