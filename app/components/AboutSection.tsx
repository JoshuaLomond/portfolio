"use client";

import AnimatedSection from "./AnimatedSection";

export default function AboutSection() {
  return (
    <AnimatedSection>
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-[var(--text-light)] dark:text-[var(--text-dark)]">
          About Me
        </h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Hello! I'm a passionate developer with a love for building efficient
          and scalable web applications. I specialize in React, Next.js, and
          Node.js. I'm always eager to learn new technologies!
        </p>
      </section>
    </AnimatedSection>
  );
}
