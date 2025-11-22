"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

type Project = {
  _id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
};

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <AnimatedSection>
      <section className="py-12 relative" id="projects">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each one presented
              unique challenges and learning opportunities.
            </p>
          </div>

          <motion.div
            className="flex flex-wrap justify-center gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {projects.map((project) => (
              <motion.div
                key={project._id}
                variants={itemVariants}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)]"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
