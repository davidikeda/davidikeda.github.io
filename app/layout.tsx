import type { Metadata } from "next";
import "./globals.css";
import { readdirSync } from "fs";
import { join } from "path";

export const metadata: Metadata = {
    title: "David Kano Ikeda",
    description: "portfolio website for all my projects",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
    <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
    </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
