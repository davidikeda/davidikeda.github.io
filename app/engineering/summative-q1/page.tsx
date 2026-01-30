import ProjectPage from '@/components/project-page';
import ModelViewer from "@/components/model-viewer";
import TwoImageRow from "@/components/two-image-row";
import Image from "next/image"
import ImageGallery from "@/components/image-gallery";

export default function SummativeQ1() {
  return (
    <ProjectPage
      title="Engineering Summative, Quarter One"
      description="Engineering 1 Puzzle Cube Project."
      date="12-15-2025"
      status="completed"
      backLink="/engineering"
      backText="Back to Engineering"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Overview</h2>
        <p className="text-zinc-600 mb-4">
          This project involved creating a manufacturing a prototype of a wooden puzzle cube, as well as recreating the design in Onshape.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Model</h2>
        <p className="text-zinc-600 mb-4">*This may take a while to load, check the progress with chrome devtools</p>
        <ModelViewer
          modelPath="/models/summative-q1/puzzleCube.obj"
          scale={0.6}
          interactive={true}
          autoRotate={true}
          width={"100%"}
          height="600px"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Problem Statement</h2>
        <p className="text-zinc-600 mb-4">A local office furniture manufacturing
          company throws away tens of thousands of scrap ¾” hardwood cubes that result from its furniture construction processes. The material is expensive, and the scrap represents a sizeable loss of profit.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Design Statement</h2>
        <p className="text-zinc-600 mb-4">
          Fine Office Furniture, Inc. would like to return value to its waste product by using it as the raw material for desktop novelty items that will be sold on the showroom floor. Design, build, test, document, and present a three-dimensional puzzle system that is made from the scrap hardwood cubes. The puzzle system must provide an appropriate degree of challenge to a person who is three years of age or older.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Criteria</h2>
        <ol className="list-decimal">
          <li>The puzzle must be fabricated from 27 –  ¾”hardwood cubes.</li>
          <li>The puzzle system must contain exactly five puzzle pieces.</li>
          <li>Each individual puzzle piece must consist of at least four, but no more than six hardwood cubes that are permanently attached to each other.</li>
          <li>No two puzzle pieces can be the same.</li>
          <li>The five puzzle pieces must assemble to form a 2 ¼” cube.</li>
          <li>Some puzzle parts should interlock.</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Brainstorming</h2>
        <Image src="/images/summative-q1/brainstorm1.jpg" alt="Brainstorm Image 1" width="400" height="300" />
        <p className="text-zinc-600 mb-4">These were the brainstorming routes I took. I mostly had the puzzle figured out, so I made a couple other blocks in order to finish the puzzle.</p>
        <br></br>
        <TwoImageRow
          leftSrc="/images/summative-q1/brainstorm2.jpg"
          rightSrc="/images/summative-q1/brainstorm3.jpg"
          leftAlt="Brainstorm 2"
          rightAlt="Brainstorm 3"
        />
        <p className="text-zinc-600 mb-4">The design on the right is the one I ultimately went with, the one on the left was one just to get my mind going on the project.</p>
        <br></br>
        <ImageGallery
          title="Puzzle Cube Components"
          description="Each image represents one of the five puzzle pieces."
          columns={1}
          images={[
            {
              id: "1",
              src: "/images/summative-q1/Block1.png",
              name: "Block1",
            },
            {
              id: "2",
              src: "/images/summative-q1/Block2.png",
              name: "Block2",
            },
            {
              id: "3",
              src: "/images/summative-q1/Block3.png",
              name: "Block3",
            },
            {
              id: "4",
              src: "/images/summative-q1/Block4.png",
              name: "Block4",
            },
            {
              id: "5",
              src: "/images/summative-q1/Block5.png",
              name: "Block5",
            },
          ]}
          />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Onshape Link:</h2>
        <a href ="https://cad.onshape.com/documents/f5c20d018b9fd8e50c6fc438/w/522110f581e524fe4557dc4f/e/35a2e1f1adfa990068f0e27f" id="onshape">Here!</a>
      </section>
    </ProjectPage>
  );
}
