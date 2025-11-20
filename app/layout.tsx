import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

import Navbar from "./components/Navbar";
import config from "./config/config";

export const metadata: Metadata = {
  title: "Joshua Lomond | Full-Stack Developer Portfolio",
  description:
    "Joshua Lomond's portfolio showcasing expertise in React, Next.js, Node.js, and full-stack web development. Explore projects, skills, and experience.",
  openGraph: {
    title: "Joshua Lomond | Full-Stack Developer Portfolio",
    description:
      "Joshua Lomond's portfolio showcasing expertise in React, Next.js, Node.js, and full-stack web development. Explore projects, skills, and experience.",
    url: "https://joshlomond.dev",
    siteName: "Joshua Lomond's Portfolio",
    images: [
      {
        url: "https://joshlomond.dev/images/icon-512.png",
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
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased bg-slate-950 text-slate-100 selection:bg-cyan-500/30 relative min-h-screen`}
      >
        {/* Global Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[100px] animate-float" />
          <div
            className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-500/10 rounded-full blur-[100px] animate-float"
            style={{ animationDelay: "-3s" }}
          />
        </div>

        <Navbar />
        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://joshlomond.dev/#person",
                "name": "Joshua Lomond",
                "url": "https://joshlomond.dev",
                "sameAs": [
                  "${config.socials.github}",
                  "${config.socials.linkedin}"
                ],
                "image": "https://joshlomond.dev/images/icon-512.png",
                "alumniOf": "Dalhousie University",
                "jobTitle": "Full-Stack Developer",
                "email": "mailto:${config.email}"
              },
              {
                "@type": "WebSite",
                "@id": "https://joshlomond.dev/#website",
                "url": "https://joshlomond.dev",
                "name": "Joshua Lomond's Portfolio",
                "description": "Joshua Lomond's portfolio showcasing expertise in React, Next.js, Node.js, and full-stack web development. Explore projects, skills, and experience.",
                "publisher": {
                  "@id": "https://joshlomond.dev/#person"
                },
                "inLanguage": "en-US"
              }
            ]
          }
        `,
          }}
        />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
