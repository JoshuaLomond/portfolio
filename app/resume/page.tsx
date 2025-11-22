// app/resume/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Download,
  MapPin,
  Calendar,
} from "lucide-react";
import BackToTop from "../components/BackToTop";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
    <motion.section variants={itemVariants} className="mt-10">
      <h2 className="mb-6 text-2xl font-bold text-slate-100 flex items-center gap-3">
        <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
        {title}
      </h2>
      <div className="pl-4 border-l border-slate-800 space-y-8">{children}</div>
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
    <motion.div variants={itemVariants} className="relative pl-6">
      <div className="absolute left-[-21px] top-1.5 w-3 h-3 rounded-full bg-cyan-500 border-4 border-slate-950" />
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
        <div>
          <h3 className="text-xl font-semibold text-slate-200">{title}</h3>
          <p className="text-cyan-400 font-medium flex items-center gap-2 text-sm mt-1">
            <MapPin size={14} /> {location}
          </p>
        </div>
        <span className="text-sm font-medium text-slate-500 bg-slate-900/50 px-3 py-1 rounded-full border border-slate-800 flex items-center gap-2 mt-2 sm:mt-0 w-fit">
          <Calendar size={14} /> {date}
        </span>
      </div>
      <ul className="mt-4 space-y-2 text-slate-400 list-disc list-outside ml-4">
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
      className="px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default"
    >
      {skill}
    </motion.span>
  );
}

export default function ResumePage() {
  return (
    <main className="container mx-auto max-w-6xl flex-grow px-4 pt-32 pb-24">
      <motion.div
        className="grid grid-cols-1 gap-12 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* === LEFT COLUMN (Main Content) === */}
        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
          {/* === RESUME HEADER === */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-8 rounded-2xl border-l-4 border-cyan-500"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-2 tracking-tight">
              JOSHUA LOMOND
            </h1>
            <p className="text-xl text-cyan-400 font-medium">
              Full-Stack Developer & Computer Science Student
            </p>
          </motion.div>

          {/* === PROFESSIONAL SUMMARY === */}
          <ResumeSection title="Summary">
            <motion.div
              variants={itemVariants}
              className="pl-6 text-slate-400 leading-relaxed text-lg"
            >
              <p className="mb-4">
                Motivated Computer Science student with experience in database
                management, full-stack development, and IT support, seeking to
                apply strong technical and problem-solving skills in database
                administration and IT infrastructure.
              </p>
              <p>
                Proficient in SQL, Oracle, and database documentation, with
                experience working in agile environments and optimizing business
                processes.
              </p>
            </motion.div>
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
              title="Software Developer, BIO"
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

        {/* === RIGHT COLUMN (Sidebar) === */}
        <motion.div
          variants={itemVariants}
          className="space-y-6 sticky top-24 self-start"
        >
          {/* === CONTACT INFO === */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-6 rounded-2xl"
          >
            <h3 className="mb-6 text-lg font-semibold text-slate-100 border-b border-slate-800 pb-4">
              Contact Information
            </h3>
            <div className="space-y-4 text-slate-400">
              <a
                href="mailto:josh@joshlomond.dev"
                className="flex items-center gap-3 hover:text-cyan-400 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-cyan-500/20 transition-colors">
                  <Mail size={18} className="text-cyan-400" />
                </div>
                <span className="text-sm">josh@joshlomond.dev</span>
              </a>
              <a
                href="https://linkedin.com/in/joshua-lomond"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-cyan-400 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-cyan-500/20 transition-colors">
                  <Linkedin size={18} className="text-cyan-400" />
                </div>
                <span className="text-sm">linkedin.com/in/joshua-lomond</span>
              </a>
              <a
                href="https://github.com/JoshuaLomond"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-cyan-400 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-cyan-500/20 transition-colors">
                  <Github size={18} className="text-cyan-400" />
                </div>
                <span className="text-sm">github.com/JoshuaLomond</span>
              </a>
            </div>
            <a
              href="/Joshua-Lomond-Resume.pdf"
              download
              className="mt-8 flex items-center justify-center gap-2 w-full rounded-xl bg-cyan-500 py-3 text-center font-semibold text-slate-950 transition-all hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              <Download size={18} /> Download PDF
            </a>
          </motion.div>

          {/* === TECHNICAL SKILLS === */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-6 rounded-2xl"
          >
            <h3 className="mb-6 text-lg font-semibold text-slate-100 border-b border-slate-800 pb-4">
              Technical Skills
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="mb-3 text-sm font-medium text-slate-400 uppercase tracking-wider">
                  Databases
                </h4>
                <div className="flex flex-wrap gap-2">
                  <SkillTag skill="SQL" />
                  <SkillTag skill="MySQL" />
                  <SkillTag skill="PostgreSQL" />
                  <SkillTag skill="Oracle" />
                  <SkillTag skill="SQL Server" />
                </div>
              </div>
              <div>
                <h4 className="mb-3 text-sm font-medium text-slate-400 uppercase tracking-wider">
                  Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  <SkillTag skill="Java" />
                  <SkillTag skill="Python" />
                  <SkillTag skill="JavaScript" />
                  <SkillTag skill="C" />
                </div>
              </div>
              <div>
                <h4 className="mb-3 text-sm font-medium text-slate-400 uppercase tracking-wider">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  <SkillTag skill="Virtualization" />
                  <SkillTag skill="Storage Systems" />
                  <SkillTag skill="OS (Win/Linux)" />
                </div>
              </div>
              <div>
                <h4 className="mb-3 text-sm font-medium text-slate-400 uppercase tracking-wider">
                  Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  <SkillTag skill="PowerShell" />
                  <SkillTag skill="Shell Scripting" />
                  <SkillTag skill="AWS" />
                  <SkillTag skill="Git" />
                  <SkillTag skill="Agile" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <BackToTop />
    </main>
  );
}
