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

// Define the type (can be imported from home-client.tsx if you move it)
type Project = {
  _id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
};

// Accept projects as a prop
export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <AnimatedSection>
      <section className="mt-20">
        <h2 className="text-[var(--text-light)] dark:text-[var(--text-dark)]">
          My Projects
        </h2>
        <motion.div
          className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Map over the projects prop */}
          {projects.map((project) => (
            <motion.div key={project._id} variants={itemVariants}>
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
      </section>
    </AnimatedSection>
  );
}
