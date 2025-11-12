"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
export default function ContactSection() {
  const email = "josh@joshlomond.dev";
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset "Copied!" message after 2 seconds
  };
  return (
    <AnimatedSection>
      <motion.section
        className="mt-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          variants={itemVariants}
          className="text-gray-900 dark:text-white"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-700 dark:text-gray-300"
        >
          I'm currently open to new opportunities. Feel free to send me an
          email!
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-4 flex items-center justify-center space-x-2"
        >
          <span className="text-lg text-gray-700 dark:text-gray-300">
            {email}
          </span>
          <button
            onClick={handleCopyEmail}
            className="rounded-md bg-gray-200 px-3 py-1 text-sm font-medium text-gray-800 shadow-sm transition-colors hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            aria-live="polite"
            aria-label={copied ? "Email address copied" : "Copy email address"}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </motion.div>
        <motion.a
          variants={itemVariants}
          href={`mailto:${email}`}
          className="mt-6 inline-block rounded-md bg-blue-600 px-6 py-3 text-lg font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Say Hello
        </motion.a>
      </motion.section>
    </AnimatedSection>
  );
}
