import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const superMario = localFont({
  src: "../public/fonts/SuperMario256.woff2",
  variable: "--font-super-mario",
});

export const metadata: Metadata = {
  title: "MarioGPT",
  description: "MarioGPT is an AI chatbot that can answer any question about the Super Mario franchise.",
  icons: {
    icon: "/logo.png",
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
        className={`${geistSans.variable} ${geistMono.variable} ${superMario.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
