import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const sans = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xnsta | Instagram Downloader",
  description:
    "Quickly and easily download Instagram posts, videos, and stories. Your go-to solution for saving Instagram content.",
  metadataBase: new URL("https://xnsta.vercel.app"),
  openGraph: {
    title: "Xnsta | Instagram Downloader",
    description:
      "Quickly and easily download Instagram posts, videos, and stories.",
    url: "https://xnsta.vercel.app",
    siteName: "Xnsta",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xnsta | Instagram Downloader",
    description:
      "Quickly and easily download Instagram posts, videos, and stories.",
    creator: "@xevenbiswas",
  },
  alternates: {
    canonical: "https://xnsta.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sans.className} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <main className="grow">{children}</main>
        <footer className="py-4 text-center text-sm text-gray-500 border-t">
          © {currentYear} Xnsta. All rights reserved.
        </footer>
        <Toaster richColors position="top-center" theme="light" />
      </body>
    </html>
  );
}
