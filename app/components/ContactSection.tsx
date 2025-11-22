"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Copy, Check, Mail } from "lucide-react";

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
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatedSection>
      <section className="py-20 relative">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            className="glass-card rounded-3xl p-12 relative overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Decorative gradient */}
            <div className="absolute bottom-0 left-1/2 w-full h-1/2 bg-gradient-to-t from-cyan-500/10 to-transparent -translate-x-1/2 pointer-events-none" />

            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6 text-slate-100"
            >
              Get In Touch
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-400 mb-10"
            >
              I'm currently open to new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-950/50 border border-slate-800 text-slate-300">
                <Mail size={18} className="text-cyan-400" />
                <span className="font-medium">{email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="ml-2 p-1.5 rounded-lg hover:bg-slate-800 transition-colors text-slate-500 hover:text-slate-200"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check size={16} className="text-green-400" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              <a
                href={`mailto:${email}`}
                className="px-8 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                Say Hello
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
