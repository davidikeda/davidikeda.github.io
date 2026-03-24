import ProjectPage from '@/components/project-page';
import ModelViewer from "@/components/model-viewer";

export default function WingDesignInOnshape() {
    return (
        <ProjectPage
            title="Wing Design in Onshape"
            description="Wing design project in Onshape, this was a little side quest for a later project"
            date="03-1-2026"
            status="completed"
            backLink="/engineering"
            backText="Back to Engineering"
        >
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Overview</h2>
                <p className="text-zinc-600 mb-4">
                    This project was a little side quest for a later project, but I wanted to design a wing in Onshape. I designed the wing using the NACA-1412 airfoil, which is a common airfoil used in aircraft design. I then extruded the airfoil to create a 3D model of the wing and added spars.
                </p>
            </section>


        </ProjectPage>
    )
}