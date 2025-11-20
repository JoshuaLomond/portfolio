"use client";

import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="w-full py-12 text-center border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <SocialLinks />
        </div>
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Joshua Lomond. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
