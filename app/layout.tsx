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

export const metadata: Metadata = {
  title: "Andrei Navrotskii — Builder. Storyteller. Explorer.",
  description:
    "Personal landing page of Andrei Navrotskii — a self-taught developer, creator, and storyteller working at the intersection of technology and narrative.",
  openGraph: {
    title: "Andrei Navrotskii — Builder. Storyteller. Explorer.",
    description:
      "Self-taught developer and creator building at the intersection of technology and storytelling.",
    type: "website",
    locale: "en_US",
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
