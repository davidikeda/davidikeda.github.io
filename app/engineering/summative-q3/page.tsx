import ProjectPage from '@/components/project-page';
import ModelViewer from "@/components/model-viewer";

export default function SummativeQ2() {
    return (
        <ProjectPage
            title="Engineering Summative, Quarter Three"
            description="Engineering 1 Sweet Improvement Project, otherwise known as the Engineering Summative for Quarter Three."
            date="03-27-2026"
            status="in-progress"
            backLink="/engineering"
            backText="Back to Engineering"
        >

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Overview</h2>
                <p className="text-zinc-600 mb-4">
                    This project involved designing a container for a bakery business. My design focused on the <strong>Pfand</strong> system in germany. The Pfand system is a deposit system for reusable containers, where customers pay a deposit when they purchase a product in a container, and can return the container to get their deposit back. My design focused on creating a container that is durable and easy to clean, while also being appealing to customers.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Model</h2>
                <p className="text-zinc-600 mb-4">*This may take a while to load, check the progress with chrome devtools</p>
                <p className="text-zinc-600 mb-3">Also there is three versions of the model, but there is only one displayed. To check out the others you can take a look at the Onshape link down below.</p>
                <ModelViewer
                    modelPath="/models/summative-q3/Cupcake Insert.obj"
                    interactive={true}
                    autoRotate={true}
                    width={"100%"}
                    height="600px"
                />
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Onshape Link:</h2>
                <a href = "https://cad.onshape.com/documents/367622199aad047300c9e63a/w/c009e8e7182aa4ce8481ef43/e/1f827b2c35f3918e3afdb4da?renderMode=0&uiState=69c2c94007b55c680f999971" target="_blank" id="link">Here!</a>
            </section>
        </ProjectPage>
    );
}
