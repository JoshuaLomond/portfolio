"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full glass-panel shadow-lg transition-all duration-300 group hover:scale-110 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-16 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <div className="relative">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-md group-hover:bg-cyan-500/40 transition-all duration-300" />

        {/* Icon */}
        <ArrowUp className="w-5 h-5 text-cyan-400 relative z-10 group-hover:text-cyan-300 transition-colors duration-300" />
      </div>
    </button>
  );
}
