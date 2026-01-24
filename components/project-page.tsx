import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';

interface ProjectPageProps {
  title: string;
  description: string;
  date: string;
  status: "completed" | "in-progress" | "planned";
  children: React.ReactNode;
  backLink: string;
  backText: string;
}

export default function ProjectPage({
  title,
  description,
  date,
  status,
  children,
  backLink,
  backText,
}: ProjectPageProps) {
  const statusColors = {
    completed: 'bg-green-100 text-green-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    planned: 'bg-gray-100 text-gray-800',
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="grow py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link href={backLink} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 font-medium">
            <span>←</span> {backText}
          </Link>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h1 className="text-4xl font-bold text-zinc-900">{title}</h1>
              <span className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${statusColors[status]}`}>
                {status === 'in-progress' ? 'In Progress' : status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
            </div>
            <p className="text-lg text-zinc-600 mb-4">{description}</p>
            <p className="text-sm text-zinc-500">{date}</p>
          </div>

          {/* Project Content */}
          <div className="prose prose-zinc max-w-none">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
