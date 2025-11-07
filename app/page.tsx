// app/page.tsx
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
      <main className="container mx-auto max-w-4xl flex-grow px-4 py-12 md:py-24">
        {/* === HERO SECTION === */}
        <section id="home" className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white md:text-6xl">
            Joshua Lomond
          </h1>
          <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
            Full-Stack Developer | Computer Science Student | Open-Source
            Contributor
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://github.com/JoshuaLomond"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              aria-label="GitHub Profile"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/JoshuaLomond"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:josh@joshlomond.dev"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              aria-label="Send an Email"
            >
              <Mail size={28} />
            </a>
          </div>
          {/* === RESUME BUTTON === */}
          <div className="mt-10">
            <Link
              href="/resume"
              className="rounded-md bg-blue-600 px-7 py-3 text-lg font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              View My Resume
            </Link>
          </div>
          {/* ============================== */}
        </section>

        {/* === ABOUT SECTION === */}
        <section id="about" className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Hello! I'm a passionate developer with a love for building efficient
            and scalable web applications. I specialize in React, Next.js, and
            Node.js. I'm always eager to learn new technologies!
          </p>
        </section>

        {/* === PROJECTS SECTION === */}
        <section id="projects" className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
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

        {/* === CONTACT SECTION === */}
        <section id="contact" className="mt-20 text-center">
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
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Joshua Lomond. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
