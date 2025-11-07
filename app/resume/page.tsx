// app/resume/page.tsx
import Link from "next/link";
import { Home, Mail, Phone, Linkedin, Github } from "lucide-react";
import type { Metadata } from "next";

// This sets the page title and description for the browser tab
export const metadata: Metadata = {
  title: "Resume | Josh's Portfolio",
  description: "Joshua Lomond's professional resume.",
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
    <section className="mt-8">
      <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h2>
      <hr className="border-gray-300 dark:border-gray-700" />
      <div className="mt-4 text-gray-700 dark:text-gray-300">{children}</div>
    </section>
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
    <div className="mt-5">
      <div className="flex flex-col justify-between md:flex-row">
        <h3 className="text-xl font-bold dark:text-white">{title}</h3>
        <span className="italic text-gray-600 dark:text-gray-400">{date}</span>
      </div>
      <p className="italic text-gray-600 dark:text-gray-400">{location}</p>
      <ul className="mt-2 ml-4 list-disc space-y-1">{children}</ul>
    </div>
  );
}

// Helper for skill tags
function SkillTag({ skill }: { skill: string }) {
  return (
    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
      {skill}
    </span>
  );
}

export default function ResumePage() {
  return (
    <main className="container mx-auto max-w-4xl flex-grow px-4 py-12 md:py-24">
      {/* Back to Home Link */}
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
      >
        <Home size={18} />
        Back to Home
      </Link>

      {/* === RESUME HEADER === */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
          JOSHUA LOMOND
        </h1>
        <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-600 dark:text-gray-400">
          <span className="inline-flex items-center gap-2">Halifax, NS</span>
          <span className="inline-flex items-center gap-2">
            <Phone size={14} /> (902) 410 - 8027
          </span>
          <a
            href="mailto:josh.lomond@dal.ca"
            className="inline-flex items-center gap-2 text-blue-600 hover:underline dark:text-blue-400"
          >
            <Mail size={14} /> josh.lomond@dal.ca
          </a>
          <a
            href="https://linkedin.com/in/JoshuaLomond"
            className="inline-flex items-center gap-2 text-blue-600 hover:underline dark:text-blue-400"
          >
            <Linkedin size={14} /> LinkedIn
          </a>
        </div>
      </div>

      {/* === PROFESSIONAL SUMMARY === */}
      <ResumeSection title="Summary">
        <p className="mb-2">
          Motivated Computer Science student with experience in database
          management, full-stack development, and IT support, seeking to apply
          strong technical and problem-solving skills in database administration
          and IT infrastructure.
        </p>
        <p>
          Proficient in SQL, Oracle, and database documentation, with experience
          working in agile environments and optimizing business processes.
        </p>
      </ResumeSection>

      {/* === EDUCATION === */}
      <ResumeSection title="Education">
        <ResumeEntry
          title="Computer Science (B.Cs)"
          location="Dalhousie University, Halifax NS"
          date="2021 - Present"
        >
          <li>
            <strong>Relevant Coursework:</strong> Object-Oriented Programming
            (Java, C#), Systems Programming (C, Linux), Database Systems
            (MySQL), Data Structures, Algorithms, Software Development, Software
            Engineering
          </li>
        </ResumeEntry>
      </ResumeSection>

      {/* === TECHNICAL SKILLS === */}
      <ResumeSection title="Technical Skills">
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 text-lg font-semibold dark:text-white">
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
            <h4 className="mb-2 text-lg font-semibold dark:text-white">
              Programming Languages
            </h4>
            <div className="flex flex-wrap gap-2">
              <SkillTag skill="Java" />
              <SkillTag skill="Python" />
              <SkillTag skill="JavaScript" />
              <SkillTag skill="C" />
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-lg font-semibold dark:text-white">
              IT Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              <SkillTag skill="Virtualization" />
              <SkillTag skill="Storage Systems" />
              <SkillTag skill="Operating Systems (Windows, Linux)" />
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-lg font-semibold dark:text-white">
              Tools & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              <SkillTag skill="PowerShell" />
              <SkillTag skill="Shell Scripting" />
              <SkillTag skill="AWS" />
              <SkillTag skill="Git" />
              <SkillTag skill="Agile methodologies" />
            </div>
          </div>
        </div>
      </ResumeSection>

      {/* === PROFESSIONAL EXPERIENCE === */}
      <ResumeSection title="Work Experience">
        <ResumeEntry
          title="Support Technician"
          location="Environment & Climate Change Canada"
          date="September - December 2024"
        >
          <li>
            Provided on-site and remote IT support to Environment and Climate
            Change Canada employees.
          </li>
          <li>
            Diagnosed and resolved hardware, software, and network issues for
            Windows 10/11 devices.
          </li>
          <li>
            Configure and troubleshoot mobile devices, including iPhones and
            Android phones.
          </li>

          <li>
            Assisted users in setting up and using Office 365 applications.
          </li>
          <li>
            Managed IT equipment lifecycle, including surplus equipment disposal
            and secure data wiping.
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
            Developed and maintained RESTful APIs for web applications, handling
            data management and integration
          </li>
          <li>
            Built responsive frontend interfaces using React, implementing
            modern JavaScript practices
          </li>
          <li>
            Collaborated in an agile environment, participating in code reviews
            and sprint planning
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

      {/* === INTERPERSONAL SKILLS === */}
      <ResumeSection title="Interpersonal Skills">
        <ul className="list-disc space-y-1 pl-4">
          <li>
            Strong work ethic with proven ability to collaborate in
            cross-functional teams
          </li>
          <li>
            Effective communicator with both technical and non-technical
            audiences
          </li>
          <li>
            Skilled in troubleshooting, problem-solving, and providing user
            training
          </li>
          <li>
            Detail-oriented with excellent organizational and time management
            abilities
          </li>
        </ul>
      </ResumeSection>

      {/* === REFERENCES === */}
      <section className="mt-12 text-center">
        <p className="text-lg italic text-gray-600 dark:text-gray-400">
          References available upon request.
        </p>
      </section>
    </main>
  );
}
