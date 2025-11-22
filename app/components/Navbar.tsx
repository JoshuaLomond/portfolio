"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import SocialLinks from "./SocialLinks";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Resume", href: "/resume" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-5xl glass-panel rounded-full px-6 py-3 flex items-center justify-between relative"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 overflow-hidden rounded-full bg-gradient-to-tr from-cyan-500 to-violet-500 p-[1px]">
            <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 to-violet-400">
                JL
              </span>
            </div>
          </div>
          <span className="font-bold text-slate-200 group-hover:text-white transition-colors">
            Joshua Lomond
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 left-4 right-4 md:hidden"
          >
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col space-y-4 shadow-2xl">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? "bg-slate-800/50 text-cyan-400"
                          : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/30"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
              <div className="h-px bg-slate-800/50" />
              <div className="pt-2">
                <SocialLinks className="text-slate-400 hover:text-cyan-400 transition-colors" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
