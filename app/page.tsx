"use client";

import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import { Github, Linkedin, Mail } from "lucide-react";

import AnimatedSection from "./components/AnimatedSection";

export default function Home() {
  return (
    <div className="">
      <main className="container mx-auto max-w-4xl flex-grow px-4 py-12 md:py-24">
        {/* === HERO SECTION === */}
        <section
          className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[var(--primary-light)] to-blue-500 py-20 text-center text-white shadow-lg dark:from-[var(--primary-dark)] dark:to-blue-800"
        >
          <div className="relative z-10">
            <h1 className="animate-subtle-glow text-5xl font-bold md:text-6xl">
              Joshua Lomond
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              Full-Stack Developer | Computer Science Student | Open-Source
              Contributor
            </p>
            <div className="mt-8 flex justify-center space-x-6">
              <a
                href="https://github.com/JoshuaLomond"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 transition-colors hover:text-white"
                aria-label="GitHub Profile"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com/in/JoshuaLomond"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 transition-colors hover:text-white"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:josh@joshlomond.dev"
                className="text-blue-200 transition-colors hover:text-white"
                aria-label="Send an Email"
              >
                <Mail size={28} />
              </a>
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

        {/* === ABOUT SECTION === */}
        <AnimatedSection>
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-[var(--text-light)] dark:text-[var(--text-dark)]">
              About Me
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Hello! I'm a passionate developer with a love for building
              efficient and scalable web applications. I specialize in React,
              Next.js, and Node.js. I'm always eager to learn new
              technologies!
            </p>
          </section>
        </AnimatedSection>

        {/* === PROJECTS SECTION === */}
        <AnimatedSection>
          <section className="mt-20">
            <h2 className="text-3xl font-bold text-[var(--text-light)] dark:text-[var(--text-dark)]">
              My Projects
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Project Components */}
              <ProjectCard
                title="Project One"
                description="A brief description of this project. What it does, why I built it, and the tech-stack."
                tags={["Next.js", "Tailwind", "TypeScript"]}
                githubUrl="https://github.com/joshualomond"
              />
              <ProjectCard
                title="Project Two"
                description="Another cool project. This one might focus on a different skill, like a complex backend API."
                tags={["Node.js", "Express", "PostgreSQL"]}
                githubUrl="https://github.com/joshualomond"
                liveUrl="https://joshlomond.dev"
              />
              {/* Add more <ProjectCard /> components */}
            </div>
          </section>
        </AnimatedSection>

        {/* === CONTACT SECTION === */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            I'm currently open to new opportunities. Feel free to send me an
            email!
          </p>
          <a
            href="mailto:josh@joshlomond.dev"
            className="mt-6 inline-block rounded-md bg-blue-600 px-6 py-3 text-lg font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Say Hello
          </a>
        </section>
      </main>

      {/* === FOOTER === */}
      <footer className="mt-auto w-full py-6 text-center">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/JoshuaLomond"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors hover:text-[var(--primary-light)] dark:text-gray-400 dark:hover:text-[var(--primary-dark)]"
            aria-label="GitHub Profile"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/JoshuaLomond"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors hover:text-[var(--primary-light)] dark:text-gray-400 dark:hover:text-[var(--primary-dark)]"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:josh@joshlomond.dev"
            className="text-gray-600 transition-colors hover:text-[var(--primary-light)] dark:text-gray-400 dark:hover:text-[var(--primary-dark)]"
            aria-label="Send an Email"
          >
            <Mail size={28} />
          </a>
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Joshua Lomond. All rights reserved.
        </p>
      </footer>
    </div>
  );
}