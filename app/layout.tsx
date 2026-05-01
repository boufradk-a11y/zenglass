import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: 'swap',
});

// JSON-LD pour le SEO Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": siteConfig.name,
  "description": siteConfig.description,
  "url": siteConfig.url,
  "telephone": siteConfig.phoneFull,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": siteConfig.address.street,
    "addressLocality": siteConfig.address.city,
    "postalCode": siteConfig.address.zip,
    "addressCountry": siteConfig.address.country
  },
  "areaServed": siteConfig.address.region,
  "priceRange": "$$",
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Expert Pare-Brise`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["pare-brise", "réparation", "remplacement", "franchise offerte", "domicile", "Île-de-France"],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} font-sans antialiased selection:bg-primary/20`}>
        {children}
      </body>
    </html>
  );
}
