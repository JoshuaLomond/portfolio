// app/resume/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Mail, Linkedin, Github } from "lucide-react";

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

// Helper component for styling resume sections
function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section variants={itemVariants} className="mt-8">
      <h2 className="mb-4 text-[var(--primary-light)] dark:text-[var(--primary-dark)]">
        {title}
      </h2>
      <div className="border-l-4 border-[var(--primary-light)] pl-6 dark:border-[var(--primary-dark)]">
        {children}
      </div>
    </motion.section>
  );
}

// Helper component for styling job/education entries
function ResumeEntry({
  title,
  location,
  date,
  children,
}: {
  title: string;
  location: string;
  date: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={itemVariants} className="mt-6">
      <div className="flex flex-col justify-between md:flex-row">
        <h3 className="text-gray-900 dark:text-white">{title}</h3>
        <span className="text-lg font-medium text-gray-600 dark:text-gray-400">
          {date}
        </span>
      </div>
      <p className="mb-0 text-lg font-medium text-gray-600 dark:text-gray-400">
        {location}
      </p>
      <ul className="mt-2 ml-4 list-disc space-y-2 text-gray-700 dark:text-gray-300">
        {children}
      </ul>
    </motion.div>
  );
}

// Helper for skill tags
function SkillTag({ skill }: { skill: string }) {
  return (
    <motion.span
      variants={itemVariants}
      className="rounded-full bg-[var(--primary-light)] px-3 py-1 text-sm font-medium text-white dark:bg-[var(--primary-dark)] dark:text-gray-900"
    >
      {skill}
    </motion.span>
  );
}

export default function ResumePage() {
  return (
    <main className="container mx-auto max-w-7xl flex-grow px-4 pt-12 pb-24">
      <motion.div
        className="grid grid-cols-1 gap-12 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* === LEFT COLUMN === */}
        <motion.div variants={itemVariants} className="md:col-span-2">
          {/* === RESUME HEADER === */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <h1 className="text-gray-900 dark:text-white">JOSHUA LOMOND</h1>
            <p className="text-xl font-medium text-gray-700 dark:text-gray-300">
              Full-Stack Developer & Computer Science Student
            </p>
          </motion.div>

          {/* === PROFESSIONAL SUMMARY === */}
          <ResumeSection title="Summary">
            <motion.p variants={itemVariants} className="mb-2">
              Motivated Computer Science student with experience in database
              management, full-stack development, and IT support, seeking to
              apply strong technical and problem-solving skills in database
              administration and IT infrastructure.
            </motion.p>
            <motion.p variants={itemVariants}>
              Proficient in SQL, Oracle, and database documentation, with
              experience working in agile environments and optimizing business
              processes.
            </motion.p>
          </ResumeSection>

          {/* === PROFESSIONAL EXPERIENCE === */}
          <ResumeSection title="Work Experience">
            <ResumeEntry
              title="Support Technician"
              location="Environment & Climate Change Canada"
              date="September - December 2024"
            >
              <li>
                Provided on-site and remote IT support to Environment and
                Climate Change Canada employees.
              </li>
              <li>
                Diagnosed and resolved hardware, software, and network issues
                for Windows 10/11 devices.
              </li>
              <li>
                Configure and troubleshoot mobile devices, including iPhones and
                Android phones.
              </li>

              <li>
                Assisted users in setting up and using Office 365 applications.
              </li>
              <li>
                Managed IT equipment lifecycle, including surplus equipment
                disposal and secure data wiping.
              </li>
              <li>
                Logged and resolved technical issues through the service desk
                ticketing system.
              </li>
            </ResumeEntry>

            <ResumeEntry
              title="Software-Developer, BIO"
              location="Fisheries & Oceans Canada"
              date="January - May 2024"
            >
              <li>
                Developed and maintained RESTful APIs for web applications,
                handling data management and integration
              </li>
              <li>
                Built responsive frontend interfaces using React, implementing
                modern JavaScript practices
              </li>
              <li>
                Collaborated in an agile environment, participating in code
                reviews and sprint planning
              </li>
            </ResumeEntry>

            <ResumeEntry
              title="Cast Member"
              location="Cineplex Entertainment, Halifax NS"
              date="June - December 2023"
            >
              <li>
                Collaborated with a diverse team to provide high-quality service
                while addressing and resolving customer concerns.
              </li>
              <li>
                Adapted quickly to unexpected situations such as equipment
                malfunctions.
              </li>
            </ResumeEntry>
          </ResumeSection>

          {/* === EDUCATION === */}
          <ResumeSection title="Education">
            <ResumeEntry
              title="Computer Science (B.Cs)"
              location="Dalhousie University, Halifax NS"
              date="2021 - Present"
            >
              <li>
                <strong>Relevant Coursework:</strong> Object-Oriented
                Programming (Java, C#), Systems Programming (C, Linux), Database
                Systems (MySQL), Data Structures, Algorithms, Software
                Development, Software Engineering
              </li>
            </ResumeEntry>
          </ResumeSection>
        </motion.div>

        {/* === RIGHT COLUMN === */}
        <motion.div variants={itemVariants} className="space-y-8">
          {/* === CONTACT INFO === */}
          <motion.div
            variants={itemVariants}
            className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800"
          >
            <h3 className="mb-4 dark:text-white">Contact Information</h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <span className="flex items-center gap-3">
                <Mail size={18} /> josh@joshlomond.dev
              </span>
              <span className="flex items-center gap-3">
                <Linkedin size={18} />
                <a
                  href="https://linkedin.com/in/joshua-lomond"
                  className="hover:underline"
                >
                  linkedin.com/in/joshua-lomond
                </a>
              </span>
              <span className="flex items-center gap-3">
                <Github size={18} />
                <a
                  href="https://github.com/JoshuaLomond"
                  className="hover:underline"
                >
                  github.com/JoshuaLomond
                </a>
              </span>
            </div>
            <a
              href="/Joshua-Lomond-Resume.pdf"
              download
              className="mt-6 block w-full rounded-md bg-blue-600 py-2 text-center font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Download PDF
            </a>
          </motion.div>

          {/* === TECHNICAL SKILLS === */}
          <motion.div
            variants={itemVariants}
            className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800"
          >
            <h3 className="mb-4 dark:text-white">Technical Skills</h3>
            <motion.div variants={containerVariants} className="space-y-4">
              <motion.div variants={itemVariants}>
                <h4 className="mb-2 dark:text-white">Databases</h4>
                <div className="flex flex-wrap gap-2">
                  <SkillTag skill="SQL" />
                  <SkillTag skill="MySQL" />
                  <SkillTag skill="PostgreSQL" />
                  <SkillTag skill="Oracle" />
                  <SkillTag skill="SQL Server" />
                </div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h4 className="mb-2 dark:text-white">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <SkillTag skill="Java" />
                  <SkillTag skill="Python" />
                  <SkillTag skill="JavaScript" />
                  <SkillTag skill="C" />
                </div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h4 className="mb-2 dark:text-white">IT Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  <SkillTag skill="Virtualization" />
                  <SkillTag skill="Storage Systems" />
                  <SkillTag skill="Operating Systems (Windows, Linux)" />
                </div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h4 className="mb-2 dark:text-white">Tools & Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  <SkillTag skill="PowerShell" />
                  <SkillTag skill="Shell Scripting" />
                  <SkillTag skill="AWS" />
                  <SkillTag skill="Git" />
                  <SkillTag skill="Agile methodologies" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* === INTERPERSONAL SKILLS === */}
          <motion.div
            variants={itemVariants}
            className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800"
          >
            <h3 className="mb-4 dark:text-white">Interpersonal Skills</h3>
            <ul className="list-disc space-y-1 pl-5 text-gray-700 dark:text-gray-300">
              <li>Strong work ethic & collaboration</li>
              <li>Effective communication</li>
              <li>Skilled in troubleshooting</li>
              <li>Detail-oriented</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}
