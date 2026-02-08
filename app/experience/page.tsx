import Header from '@/components/header';
import DirectoryHero from '@/components/directory-hero';
import ProjectCard from '@/components/project-card';
import Footer from '@/components/footer';
import { experienceTabs } from '@/app/lib/projects-data';

export default function ExperiencePage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header showBackButton={true} backHref="/" />

            <main className="grow">
                <DirectoryHero
                    title="Experience"
                    description="A collection of camps I did, and even some internships (in the future)."
                    icon="⇢"
                />

                <section className="max-w-4xl mx-auto px-6 py-16">
                    {experienceTabs.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-zinc-600 text-lg">
                                No projects yet. Check back soon ( Just like programming, if theres nothing here im a bum lowk )
                            </p>
                        </div>
                    ) : (
                        <div className="grid gap-6 md:grid-cols-2">
                            {experienceTabs.map((e) => (
                                <ProjectCard key={e.link} project={e} />
                            ))}
                        </div>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    );
}
