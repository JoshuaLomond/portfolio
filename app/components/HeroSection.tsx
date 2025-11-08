"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import config from "../config/config";
import SocialLinks from "./SocialLinks";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[var(--primary-light)] to-blue-500 py-20 text-center text-white shadow-lg dark:from-[var(--primary-dark)] dark:to-blue-800">
      <div className="relative z-10">
        <h1 className="animate-subtle-glow">Joshua Lomond</h1>
        <p className="text-xl text-blue-100">
          Full-Stack Developer | Computer Science Student | Open-Source
          Contributor
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <SocialLinks />
        </div>
        {/* === RESUME BUTTON === */}
        <div className="mt-10">
          <Link
            href="/resume"
            className="rounded-md bg-white px-7 py-3 text-lg font-medium text-[var(--primary-light)] shadow-md transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          >
            View My Resume
          </Link>
        </div>
        {/* ============================== */}
      </div>
    </section>
  );
}
