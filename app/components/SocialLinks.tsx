"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { config } from "../config/config";

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <div className="flex justify-center space-x-6">
      <a
        href={config.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        className={className || "text-blue-200 transition-colors hover:text-white"}
        aria-label="GitHub Profile"
      >
        <Github size={28} />
      </a>
      <a
        href={config.socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={className || "text-blue-200 transition-colors hover:text-white"}
        aria-label="LinkedIn Profile"
      >
        <Linkedin size={28} />
      </a>
      <a
        href={`mailto:${config.email}`}
        className={className || "text-blue-200 transition-colors hover:text-white"}
        aria-label="Send an Email"
      >
        <Mail size={28} />
      </a>
    </div>
  );
}
