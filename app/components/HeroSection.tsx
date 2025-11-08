"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

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

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[var(--primary-light)] to-blue-500 py-20 text-center text-white shadow-lg dark:from-[var(--primary-dark)] dark:to-blue-800">
      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="animate-subtle-glow">
          Joshua Lomond
        </motion.h1>
        <motion.p variants={itemVariants} className="text-xl text-blue-100">
          Full-Stack Developer | Computer Science Student | Open-Source
          Contributor
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-8 flex justify-center space-x-6"
        >
          <SocialLinks />
        </motion.div>
        {/* === RESUME BUTTON === */}
        <motion.div variants={itemVariants} className="mt-10">
          <Link
            href="/resume"
            className="rounded-md bg-white px-7 py-3 text-lg font-medium text-[var(--primary-light)] shadow-md transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          >
            View My Resume
          </Link>
        </motion.div>
        {/* ============================== */}
      </motion.div>
    </section>
  );
}
