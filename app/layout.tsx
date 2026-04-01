import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Starter",
  description: "Full-stack starter with AI-powered design pipeline",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
