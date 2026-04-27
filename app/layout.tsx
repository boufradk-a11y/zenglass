import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zen Glass | Expert Pare-Brise - Réparation & Remplacement",
  description: "Réparation et remplacement de pare-brise avec franchise offerte. Intervention rapide à domicile ou en centre. Zen Glass : votre vision, notre expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-primary/20`}>
        {children}
      </body>
    </html>
  );
}
