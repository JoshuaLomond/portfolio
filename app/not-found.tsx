"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import BackToTop from "./components/BackToTop";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 50 },
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl w-full text-center"
      >
        {/* 404 Number with Gradient */}
        <motion.h1
          variants={itemVariants}
          className="text-9xl md:text-[12rem] font-bold text-gradient mb-4 leading-none"
        >
          404
        </motion.h1>

        {/* Glass Card with Content */}
        <motion.div
          variants={itemVariants}
          className="glass-card p-8 md:p-12 rounded-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            Sorry, the page you are looking for doesn't exist or has been moved.
            Let's get you back on track!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="group relative px-8 py-3.5 bg-cyan-500 text-slate-950 font-semibold rounded-full overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:scale-105 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Home className="w-4 h-4" />
                Go Home
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>

            <button
              onClick={() => window.history.back()}
              className="group px-8 py-3.5 bg-slate-800/50 text-slate-200 font-semibold rounded-full border border-slate-700 hover:border-cyan-500/50 transition-all hover:bg-slate-800 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Go Back
              </span>
            </button>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          variants={itemVariants}
          className="mt-8 text-slate-600 text-sm"
        >
          Error Code: 404 • Page Not Found
        </motion.div>
      </motion.div>

      <BackToTop />
    </main>
  );
}
