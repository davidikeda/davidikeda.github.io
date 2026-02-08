import Link from 'next/link';
import { Project, Experience } from '@/app/lib/definitions';

interface ProjectCardProps {
  project: Project | Experience;
}

const statusColors = {
  completed: 'bg-green-100 text-green-800',
  'in-progress': 'bg-amber-100 text-amber-800',
  planned: 'bg-blue-100 text-blue-800',
};

const typeColors = {
  engineering: 'bg-zinc-100 text-zinc-800',
  programming: 'bg-zinc-100 text-zinc-800',
  design: 'bg-zinc-100 text-zinc-800',
  combined: 'bg-zinc-100 text-zinc-800',
  camp: 'bg-indigo-100 text-indigo-800',
  school: 'bg-purple-100 text-purple-800',
  other: 'bg-zinc-100 text-zinc-800',
};


export default function ProjectCard({ project }: ProjectCardProps) {
  const statusColor = statusColors[project.status];
  const typeColor = typeColors[project.type];
  const isExperienceType = ['camp', 'school', 'other'].includes(project.type);

  return (
    <Link href={project.link}>
      <div className="group h-full p-6 rounded-lg border border-zinc-200 hover:border-indigo-400 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex gap-2">
            {isExperienceType && (
              <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${typeColor}`}>
                {project.type}
              </span>
            )}
            <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${statusColor}`}>
              {project.status}
            </span>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-indigo-600 transition-colors mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-zinc-600 mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="text-xs text-zinc-500 flex items-center justify-between">
          <time dateTime={project.date}>{project.date}</time>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
}
