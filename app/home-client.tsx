"use client";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

// Define the type for your project (you can make this more specific)
type Project = {
  _id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
};

export default function HomeClient({ projects }: { projects: Project[] }) {
  return (
    <div className="">
      <main className="container mx-auto max-w-4xl flex-grow px-4 py-12 md:py-24">
        <HeroSection />
        <AboutSection />
        <ProjectsSection projects={projects} />
        <section className="mt-20 text-center">
          <h2 className="text-gray-900 dark:text-white">Get In Touch</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I'm currently open to new opportunities. Feel free to send me a
            message!
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block rounded-md bg-blue-600 px-6 py-3 text-lg font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Contact Me
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
