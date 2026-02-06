import Header from '@/components/header';
import DirectoryHero from '@/components/directory-hero';
import ProjectCard from '@/components/project-card';
import Footer from '@/components/footer';
import { combinedProjects } from '@/app/lib/projects-data';

export default function CombinedPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header showBackButton={true} backHref="/" />

            <main className="grow">
                <DirectoryHero
                    title="Combined Projects"
                    description="Projects that involve both programming and engineering, these sorts of projetcs often involve computers integrating with hardware."
                    icon="<> + ⚙"
                />

                <section className="max-w-4xl mx-auto px-6 py-16">
                    {combinedProjects.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-zinc-600 text-lg">
                                No projects yet. Check back soon ( Just like programming, if theres nothing here im a bum lowk )
                            </p>
                        </div>
                    ) : (
                        <div className="grid gap-6 md:grid-cols-2">
                            {combinedProjects.map((project) => (
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
