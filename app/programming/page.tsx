import Header from '@/components/header';
import DirectoryHero from '@/components/directory-hero';
import ProjectCard from '@/components/project-card';
import Footer from '@/components/footer';
import { programmingProjects } from '@/app/lib/projects-data';

export default function ProgrammingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header showBackButton={true} backHref="/" />

      <main className="grow">
        <DirectoryHero
          title="Programming Projects"
          description="Programming projects that either took me a while to make, or I am proud of."
          icon="&lt;&gt;"
        />

        <section className="max-w-4xl mx-auto px-6 py-16">
          {programmingProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-zinc-600 text-lg">
                No projects yet. Check back soon! ( This should never show up you bum )
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {programmingProjects.map((project) => (
                <ProjectCard key={project.link} project={project} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
