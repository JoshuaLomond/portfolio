"use client";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
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
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
