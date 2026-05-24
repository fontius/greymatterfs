import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GREYMATTER — Fire & Security Solutions",
    template: "%s | GREYMATTER",
  },
  description: "Professional fire safety and security system services. Fire detection, CCTV, access control nationwide.",
  keywords: ["fire safety", "security systems", "alarm systems", "cctv", "access control", "fire protection"],
  openGraph: {
    title: "GREYMATTER - Fire & Security Solutions",
    description: "Professional fire safety and security system services",
  },
  twitter: {
    card: "summary",
    title: "GREYMATTER - Fire & Security Solutions",
    description: "Professional fire safety and security system services",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}