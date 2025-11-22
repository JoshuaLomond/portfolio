"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import { ArrowRight, Download } from "lucide-react";

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 50 },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-16">
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6 inline-block">
          <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium tracking-wide backdrop-blur-sm">
            Available for Hire
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="mb-6">
          <span className="block text-5xl md:text-7xl font-bold tracking-tight text-slate-100 mb-2">
            Hi, I'm Joshua
          </span>
          <span className="block text-4xl md:text-6xl font-bold text-gradient">
            Full-Stack Developer
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed"
        >
          I build accessible, pixel-perfect, and performant web experiences.
          Passionate about open-source and modern web technologies.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            href="#projects"
            className="group relative px-8 py-3.5 bg-cyan-500 text-slate-950 font-semibold rounded-full overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects{" "}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>

          <Link
            href="/resume"
            className="group px-8 py-3.5 bg-slate-800/50 border border-slate-700 text-slate-200 font-semibold rounded-full hover:bg-slate-800 transition-all hover:border-cyan-500/50 flex items-center gap-2"
          >
            <Download className="w-4 h-4" /> Resume
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center">
          <SocialLinks />
        </motion.div>
      </motion.div>
    </section>
  );
}
