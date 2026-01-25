import ProjectPage from '@/components/project-page';
import ModelViewer from "@/components/model-viewer";
import Link from "next/link";

export default function SummativeQ2() {
  return (
    <ProjectPage
      title="Engineering Summative, Quarter Two"
      description="Engineering 1 Binder Project, otherwise known as the Engineering Summative for Quarter Two."
      date="01-23-2026"
      status="completed"
      backLink="/engineering"
      backText="Back to Engineering"
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Overview</h2>
        <p className="text-zinc-600 mb-4">
          This project involved designing and creating (in CAD) a new binder design, with the goal of appealing to high school students. My binder design focused on durability, rather than individual features.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Model</h2>
        <p className="text-zinc-600 mb-4">*This may take a while to load, check the progress with chrome devtools</p>
        <ModelViewer
          modelPath="/models/summative-q2/binder.obj"
          interactive={true}
          autoRotate={true}
          width={"100%"}
          height="600px"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Problem Statement</h2>
        <p className="text-zinc-600 mb-4">A national school supply manufacturer is losing business in its school binder making.
          After research of consumer behavior, students and teachers prefer new models that
          incorporate a more appealing and functional binder’s design. That is unacceptable
          because its binder is the “key” product that comes along other side products. To this
          day, their current binder design is generating a sizeable loss of market and profit.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Design Statement</h2>
        <p className="text-zinc-600 mb-4">
          School Supply Student Inc would like to recover value to its 3-ring binder product by
          redesign a new innovative binder that would incorporate more functionality,
          structure, digital and interactive elements, and sustainable. Innovate design and
          document a new 3-ring binder. The new binder must be appealing to high school
          students and teachers.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Brainstorming</h2>
        <p className="text-zinc-600 mb-4">
          My brainstorming process started with the addition of a clear window on the front of the binder. I also decided to add steel hinges to the outside of the spine of the binder for durability.
        </p>
        <br></br>
        <p className="text-zinc-600 mb-4">
          In the second sketch of the binder, I integrated a leather strap to the middle of the binder. The leather strap would have a magnet or a button that would keep the binder shut when not in use. This sketch also kept the idea of the steel hinges on the outside of the spine, in the final design I ended up going with buttons intead of magnets.
        </p>
        <br></br>
        <p className="text-zinc-600 mb-4">
          In the third sketch, the idea arose of keeping both the viewing window, and the leather strap. I decided to split the viewing window in half to make room for strap. I also proposed the idea of a metal lined edge for extra durability. This is also the sketch where I decided to switch to O-rings as opposed to D-rings. The metal side edges were removed in the final design due to concerns of practicality and cost, it was replaced by the binder shells being made of ABS plastic.
        </p>
        <br></br>
        <p className="text-zinc-600 mb-4">
          This final binder design takes most inspiration from my 3rd sketch. I finalized the idea of the leather strap with a button, and two viewing windows. I also shortened the length of the hinge, so that it would not be right up against the ring base or the viewing window.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Lessons Learned</h2>
        <p className="text-zinc-600">
          I learned a LOT when I did this project. My onshape skills really improved, and I learned about organising my files better. I also learned a lot about binders (wow no suprises there David) and their mechanisms. Just looking at the real physical binder showed me more than I thought binders were.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Design Questions</h2>
        <ul>
            <li className="text-zinc-600 mb-2">
                Q: Does your design meet the design criteria? <br/>
                A: Yes, my design meets the criteria of the project. Really the only constraints were that it had to be a 3-ring binder, fit A4 paper, and have 3 new features (Durability, Viewing windows, and the Leather Strap).
            </li>
            <li className="text-zinc-600 mb-2">
                Q: Does your design apeal to high school students? <br/>
                A: Yes, at least for me, the most annoying part about binders is that they get broken at the end of every school year, forcing you to buy more. Something else is that the leather strap provides security, as sometimes papers can slip out.
            </li>
            <li className="text-zinc-600 mb-2">
                Q: Does you design incorporate functionality, structure, digital and interactive elements, and sustainability? <br/>
                A: Yes, my design incorporates functionality with the viewing windows and leather strap. The structure is improved with the steel hinges on the spine. Sustainability is improved with the durability of the binder.
            </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Onshape Link:</h2>
        <a href = "https://cad.onshape.com/documents/af9d5224099d9470c9250f42/w/8e2f8a8f60d3553b308eb29d/e/58d998feb5a96c6547a87269?renderMode=0&uiState=6975a9c341a7f37a694d33d1">Here!</a>
      </section>
    </ProjectPage>
  );
}
