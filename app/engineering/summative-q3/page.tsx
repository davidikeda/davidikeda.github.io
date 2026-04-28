import ProjectPage from '@/components/project-page';
import ModelViewer from "@/components/model-viewer";

export default function SummativeQ2() {
    return (
        <ProjectPage
            title="Engineering Summative, Quarter Three"
            description="Engineering 1 Sweet Improvement Project, otherwise known as the Engineering Summative for Quarter Three."
            date="03-27-2026"
            status="completed"
            backLink="/engineering"
            backText="Back to Engineering"
        >

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Overview</h2>
                <p className="text-zinc-600 mb-4">
                    This project involved designing a container for a bakery business. My design focused on the <strong>Pfand</strong> system in germany. The Pfand system is a deposit system for reusable containers, where customers pay a deposit when they purchase a product in a container, and can return the container to get their deposit back. My design focused on creating a container that is durable and easy to ship (locally), while also being appealing to customers.
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
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Project Background & Rationale</h2>
                <p className="text-zinc 600 mb-4">Cupcake Party, a local bakery, has expanded its business model to include shipping individually
                    packaged baked goods for large-scale events throughout the United States. The bakery is
                    known for its innovative flavors of miniature tarts, cupcakes, and jumbo muffins. Some orders
                    include combinations of all three different-sized treats, making packing orders for shipping
                    difficult for the bakery using three sizes of containers. The bakery would like to use a one-size
                    packing container that can be adapted to fit the different-sized treats. The bakery is also
                    experiencing a high number of quality complaints from customers related to the packaging used.
                    The bakery needs a designer to rethink how the container utilized in the storage and shipping of
                    these three different-sized treats can be improved. The containers should be able to be stacked
                    inside a shipping container. In addition to quality improvements in overall functionality, the
                    bakery would like the treat containers to be aesthetically pleasing. The treats are often
                    displayed still in the container on a table for selection by guests and event attendees. The
                    bakery would also like to try and minimize the amount of packaging material that ends up in a
                    landfill.</p>
            </section>

            <section className={"mb-12"}>
                <h2 className={"text-2xl font-bold text-zinc-900 mb-4"}>Project Objective</h2>
                <p className={"text-zinc-600 mb-4"}>The project goal is to design a single, environmentally friendly container for a local bakery to
                    safely transport three different sizes of baked goods. The container must securely hold either
                    one jumbo muffin, one standard cupcake with frosting, or two mini tarts so the treats can be
                    packaged, shipped, and unpacked without damage.</p>
            </section>
            <section className={"mb-12"}>
                <h2 className={"text-2xl font-bold text-zinc-900 mb-4"}>Deliverables</h2>
                <p className={"text-zinc-600 mb-4"}>The product design proposal must include the following deliverables:</p>
                    <ol>
                        <li className="text-zinc-600 mb-2 pl-5">Completed design brief detailing applicable design criteria and constraints</li>
                        <li className="text-zinc-600 mb-2 pl-5">Engineering notebook entries detailing all design work, including concept sketches for at least two possible solutions</li>
                        <li className="text-zinc-600 mb-2 pl-5">CAD model of design and complete set of annotated working design drawings.</li>
                        <li className="text-zinc-600 mb-2 pl-5">Parametric Table for all different size treats.</li>
                    </ol>
            </section>
            <section className={"mb-12"}>
                <h2 className={"text-2xl font-bold text-zinc-900 mb-4"}>Success Criteria</h2>
                <p className={"text-zinc-600 mb-4"}>The following success criteria have been established</p>
                <ol>
                    <li className="text-zinc-600 mb-2 pl-5">1. The design must include at least two interfacing parts with a hinge-type connection.</li>
                    <li className="text-zinc-600 mb-2 pl-5">2. The design should include material.</li>
                    <li className="text-zinc-600 mb-2 pl-5">3. The design can accommodate different-sized treats.</li>
                    <li className="text-zinc-600 mb-2 pl-5">4. The design allows the treats to be easily placed in the container and easily removed from the container.</li>
                    <li className="text-zinc-600 mb-2 pl-5">5. The container protects the treats against damage during shipping.</li>
                    <li className="text-zinc-600 mb-2 pl-5">6. The design should be stackable in a shipping box after the treats have been packaged</li>
                </ol>
            </section>
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Onshape Link:</h2>
                <a href = "https://cad.onshape.com/documents/367622199aad047300c9e63a/w/c009e8e7182aa4ce8481ef43/e/1f827b2c35f3918e3afdb4da?renderMode=0&uiState=69c2c94007b55c680f999971" target="_blank" id="link">Here!</a>
            </section>
        </ProjectPage>
    );
}
