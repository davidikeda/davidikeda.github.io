import Header from '@/components/header';
import DirectoryHero from '@/components/directory-hero';
import ProjectCard from '@/components/project-card';
import Footer from '@/components/footer';
import { engineeringProjects } from '@/app/lib/projects-data';

export default function EngineeringPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header showBackButton={true} backHref="/" />

      <main className="grow">
        <DirectoryHero
          title="Engineering Projects"
          description="Onshape files, CAD models, and other engineering projects I've worked on. Eventually my engineering capstone will go here."
          icon="⚙"
        />

        <section className="max-w-4xl mx-auto px-6 py-16">
          {engineeringProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-zinc-600 text-lg">
                No projects yet. Check back soon ( Just like programming, if theres nothing here im a bum lowk )
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {engineeringProjects.map((project) => (
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
