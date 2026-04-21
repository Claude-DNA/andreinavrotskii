import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://andreinavrotskii.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Andrei Navrotskii — Builder. Storyteller. Explorer.",
  description:
    "Self-taught developer and creator building at the intersection of technology and storytelling. Founder of Ohana, a human-AI collaborative studio.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Andrei Navrotskii — Builder. Storyteller. Explorer.",
    description:
      "Self-taught developer and creator building at the intersection of technology and storytelling.",
    url: SITE_URL,
    siteName: "Andrei Navrotskii",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Andrei Navrotskii — Builder. Storyteller. Explorer.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrei Navrotskii — Builder. Storyteller. Explorer.",
    description:
      "Self-taught developer and creator building at the intersection of technology and storytelling.",
    images: ["/og-image.png"],
    creator: "@andreinavrotskii",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
