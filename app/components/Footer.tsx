"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { config } from "../config/config";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="mt-auto w-full py-6 text-center">
      <div className="flex justify-center space-x-6">
        <SocialLinks className="text-gray-600 transition-colors hover:text-[var(--primary-light)] dark:text-gray-400 dark:hover:text-[var(--primary-dark)]" />
      </div>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Joshua Lomond. All rights reserved.
      </p>
    </footer>
  );
}
