"use client";

import { Github, ExternalLink, Folder } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur opacity-20" />
      <div className="relative h-full glass-card rounded-2xl p-8 flex flex-col transition-transform duration-300 group-hover:-translate-y-2">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
            <Folder size={24} />
          </div>
          <div className="flex gap-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="View GitHub Repository"
              >
                <Github size={20} />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="View Live Project"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>

        <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-800 text-cyan-300/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
