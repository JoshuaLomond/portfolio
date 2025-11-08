"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/80 shadow-md backdrop-blur-md dark:bg-gray-900/80">
      <nav
        className="container mx-auto flex max-w-4xl items-center justify-between p-4"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center space-x-2 text-[var(--primary-light)] dark:text-[var(--primary-dark)]"
        >
          <Image src="/icon.svg" alt="Logo" width={32} height={32} />
          <span className="text-2xl font-bold">JL</span>
        </Link>
        <div className="hidden space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg text-gray-700 transition-colors hover:text-[var(--primary-light)] dark:text-gray-300 dark:hover:text-[var(--primary-dark)] ${
                pathname === link.href ? "font-bold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
