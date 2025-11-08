import type { Metadata } from "next";
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

import Navbar from "./components/Navbar";
import { config } from "./config/config";

export const metadata: Metadata = {
  title: "Joshua Lomond | Full-Stack Developer Portfolio",
  description: "Joshua Lomond's portfolio showcasing expertise in React, Next.js, Node.js, and full-stack web development. Explore projects, skills, and experience.",
  openGraph: {
    title: "Joshua Lomond | Full-Stack Developer Portfolio",
    description: "Joshua Lomond's portfolio showcasing expertise in React, Next.js, Node.js, and full-stack web development. Explore projects, skills, and experience.",
    url: "https://joshlomond.dev", // Replace with your actual domain
    siteName: "Joshua Lomond's Portfolio",
    images: [
      {
        url: "https://joshlomond.dev/images/icon-512.png", // Replace with your actual domain
        width: 512,
        height: 512,
        alt: "Joshua Lomond's Portfolio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://joshlomond.dev/#person", // Replace with your actual domain
                "name": "Joshua Lomond",
                "url": "https://joshlomond.dev", // Replace with your actual domain
                "sameAs": [
                  "${config.socials.github}",
                  "${config.socials.linkedin}"
                ],
                "image": "https://joshlomond.dev/images/icon-512.png", // Replace with your actual domain
                "alumniOf": "Dalhousie University",
                "jobTitle": "Full-Stack Developer",
                "email": "mailto:${config.email}"
              },
              {
                "@type": "WebSite",
                "@id": "https://joshlomond.dev/#website", // Replace with your actual domain
                "url": "https://joshlomond.dev", // Replace with your actual domain
                "name": "Joshua Lomond's Portfolio",
                "description": "Joshua Lomond's portfolio showcasing expertise in React, Next.js, Node.js, and full-stack web development. Explore projects, skills, and experience.",
                "publisher": {
                  "@id": "https://joshlomond.dev/#person" // Replace with your actual domain
                },
                "inLanguage": "en-US"
              }
            ]
          }
        `}} />
        <main className="h-[calc(100vh-64px)]">{children}</main>
      </body>
    </html>
  );
}
