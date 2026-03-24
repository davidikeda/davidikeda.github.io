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
                <p>This project is still under construction! Come back later!</p>
                <br></br>
                <p>If you want.. you can check out the cad to see the progress.</p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Onshape Link:</h2>
                <a href = "https://cad.onshape.com/documents/367622199aad047300c9e63a/w/c009e8e7182aa4ce8481ef43/e/1f827b2c35f3918e3afdb4da?renderMode=0&uiState=69c2c94007b55c680f999971" target="_blank" id="link">Here!</a>
            </section>
        </ProjectPage>
    );
}
