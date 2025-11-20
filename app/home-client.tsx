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
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-20">
        <HeroSection />
        <AboutSection />
        <ProjectsSection projects={projects} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
