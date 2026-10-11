import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AllTimeAI — Intelligence that acts",
  description:
    "AllTimeAI engineers AI-powered hardware and software ecosystems for smart security, IoT, and automation — from edge devices to cloud platforms.",
  openGraph: {
    title: "AllTimeAI — Intelligence that acts",
    description:
      "AI-powered hardware and software ecosystems for smart security, IoT, and automation.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#04070a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
