import ProjectPage from '@/components/project-page';
import ModelViewer from "@/components/model-viewer";

export default function WingDesignInOnshape() {
    return (
        <ProjectPage
            title="Dada Art - Wrench"
            description="A Dada art project where I created a wrench in cad, and then 3D printed it."
            date="03-24-2026"
            status="completed"
            backLink="/engineering"
            backText="Back to Engineering"
        >
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Overview</h2>
                <p className="text-zinc-600 mb-4">
                    This project was a school extra-credit assignment, but I took it further than others. This art piece is a commentary on the state of certain skills, and how it doesn't matter if you are a master of those skills; they are useless. This connects to dadaism, which questioned the value and purpose of traditional art forms, highlighting the futility of mastery in a context where utility is absent.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Model</h2>
                <p className="text-zinc-600 mb-4">*This may take a while to load, check the progress with chrome devtools</p>
                <ModelViewer
                    modelPath="/models/dada/wrench.obj"
                    interactive={true}
                    autoRotate={true}
                    width={"100%"}
                    height="600px"
                />
            </section>


        </ProjectPage>
    )
}