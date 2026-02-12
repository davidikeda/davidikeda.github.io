import ProjectPage from "@/components/project-page";

export default function Quokka() {
    return (
        <ProjectPage
            title="Quokka"
            description="A Machine to Machine language (M2M) that allows the communication and allocation of resources over usb cables"
            date="01-30-2026"
            status="in-progress"
            backLink="/programming"
            backText="Back to Programming"
        >

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Overview</h2>
                <p>Quokka is a relatively big language I&#39;ve been working on (around 40 keywords), that allows communication and allocation of resources over any standard USB cable. It&#39;s (It shouldent be) not limited by the port either, as long as both devices either have a USB port, or they have RX/TX pins, and the ability to <i>use</i> those ports, the language works.</p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">A quick note</h2>
                <p>This project is still under development, at the time of writing this (2/12/26), I am about halfway done to finishing the lexer for the langauge. This is a very big project that will most likely take up most of my time.</p>
            </section>


        </ProjectPage>
    )
}