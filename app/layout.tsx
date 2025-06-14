// File: app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Header from "@/components/Header"; // Import the Header component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GREYMATTER",
  description: "Fire and Security service provider",
  keywords: ["fire safety", "security systems", "alarm systems", "cctv", "access control", "fire protection"],
  openGraph: {
    title: "GREYMATTER - Fire & Security Solutions",
    description: "Professional fire safety and security system services"
  },
  twitter: {
    card: 'summary',
    title: "GREYMATTER - Fire & Security Solutions",
    description: "Professional fire safety and security system services"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} 
      >
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
