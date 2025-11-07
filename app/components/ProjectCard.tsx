// app/components/ProjectCard.tsx
import { Github, ExternalLink } from "lucide-react";

// Define the properties (props) that this component will accept
type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-[var(--secondary-light)] p-6 shadow-md transition-all duration-300 hover:scale-105 hover:border-[var(--primary-light)] hover:shadow-xl dark:border-gray-700 dark:bg-[var(--secondary-dark)] dark:hover:border-[var(--primary-dark)]">
      <div>
        <h3 className="text-2xl font-semibold text-[var(--text-light)] dark:text-[var(--text-dark)]">
          {title}
        </h3>
        <p className="mt-3 text-gray-700 dark:text-gray-300">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-[var(--primary-light)] dark:bg-blue-900/50 dark:text-[var(--primary-dark)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center space-x-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-600 transition-colors hover:text-[var(--primary-light)] dark:text-gray-400 dark:hover:text-[var(--primary-dark)]"
          aria-label={`${title} GitHub Repository`}
        >
          <Github size={20} />
          <span className="ml-2">Code</span>
        </a>
        {liveUrl && ( // This link will only show if you provide a 'liveUrl' prop
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 transition-colors hover:text-[var(--primary-light)] dark:text-gray-400 dark:hover:text-[var(--primary-dark)]"
            aria-label={`${title} Live Demo`}
          >
            <ExternalLink size={20} />
            <span className="ml-2">Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
}
