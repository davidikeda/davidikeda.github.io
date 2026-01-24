import ProjectPage from '@/components/project-page';
import ModelViewer from "@/components/model-viewer";


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
        <ModelViewer
          modelPath="/models/summative-q2/binder.obj"
          interactive={true}
          autoRotate={true}
          width={"100%"}
          height="600px"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Key Objectives</h2>
        <ul className="list-disc list-inside text-zinc-600 space-y-2">
          <li>[Objective 1 placeholder]</li>
          <li>[Objective 2 placeholder]</li>
          <li>[Objective 3 placeholder]</li>
        </ul>
      </section>

      {/* Process & Design Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Process & Design</h2>
        <p className="text-zinc-600 mb-4">
          [Design process placeholder - Add your design methodology here]
        </p>
      </section>

      {/* Results & Outcomes Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Results & Outcomes</h2>
        <p className="text-zinc-600 mb-4">
          [Results placeholder - Add your results and outcomes here]
        </p>
      </section>

      {/* Lessons Learned Section */}
      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Lessons Learned</h2>
        <p className="text-zinc-600">
          [Lessons learned placeholder - Add your takeaways here]
        </p>
      </section>
    </ProjectPage>
  );
}
