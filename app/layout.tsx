import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { englishUrl, russianUrl, isRussianSite } from "./site-language";
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

export async function generateMetadata(): Promise<Metadata> {
  const russian = await isRussianSite();
  const url = russian ? russianUrl : englishUrl;
  const title = russian ? "Андрей Навроцкий — Создаю. Пишу. Исследую." : "Andrei Navrotskii — Builder. Storyteller. Explorer.";
  const description = russian ? "Андрей Навроцкий — разработчик, писатель и основатель студии Ohana. Проекты, книги и сценарии на стыке технологий и творчества." : "Self-taught developer and creator building at the intersection of technology and storytelling. Founder of Ohana, a human-AI collaborative studio.";
  return {
    metadataBase: new URL(url),
    title,
    description,
    alternates: {
      canonical: url,
      languages: { en: englishUrl, ru: russianUrl, "x-default": englishUrl },
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
      title,
      description,
      url: url,
      siteName: russian ? "Андрей Навроцкий" : "Andrei Navrotskii",
      type: "website",
      locale: russian ? "ru_RU" : "en_US",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
      creator: "@andreinavrotskii",
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={(await isRussianSite()) ? "ru" : "en"} className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
