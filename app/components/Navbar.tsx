"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Resume", href: "/resume" }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-5xl glass-panel rounded-full px-6 py-3 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2 group"
        >
          <div className="relative w-8 h-8 overflow-hidden rounded-full bg-gradient-to-tr from-cyan-500 to-violet-500 p-[1px]">
            <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 to-violet-400">JL</span>
            </div>
          </div>
          <span className="font-bold text-slate-200 group-hover:text-white transition-colors">Joshua Lomond</span>
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${isActive
                  ? "text-cyan-400"
                  : "text-slate-400 hover:text-slate-200"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-slate-800/50 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </div>
      </motion.nav>
    </header>
  );
}
