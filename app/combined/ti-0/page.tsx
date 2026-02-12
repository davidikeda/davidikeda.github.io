import ProjectPage from "@/components/project-page";

export default function TI_0() {
    return (
        <ProjectPage
            title="TI-0"
            description="A Hardware-Software project that involves siphoning power and resources from a raspberry Pi zero to power a Ti-84 CE through a USB-Mini Cable."
            date="09-29-25"
            status="planned"
            backLink="/combined"
            backText="Back to Combined Projects"
        >

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Overview</h2>
                <p>
                    TI-0 is a project that aims to create a hardware-software system that allows a Raspberry Pi Zero 2w to power a TI-84 CE graphing calculator through a USB Mini cable. This project leverages one of my other projects <a href="/programming/quokka" id="link">Quokka</a> to facilitate communication between the two devices, allowing the Raspberry Pi to send commands and data to the TI-84 CE, effectively turning it into a smart calculator with enhanced capabilities. The applications of this could be running more complex simulations "on" the calculator, using the calculator as a display for the Raspberry Pi, or even using the Raspberry Pi to run custom software that can be interacted with through the TI-84 CE's interface.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Hardware & Software</h2>
                <p>
                    The hardware aspect of this project is relatively simple and straight forward, as it only involves connecting the Raspberry Pi Zero 2w to the TI-84 CE using a USB Mini cable. The software aspect however is less straight forward, you will need to mod the TI-84 CE using artifice to restore ASM program functionality, and then use Quokka (from either the premade binaries or by building it yourself) to create a link between the two devices. The Raspberry Pi will run a "server" script that listens for commands, executes, and sends over the results to the TI-84 CE to either display or record.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Reliance on Quokka</h2>
                <p>
                    This project relies heavily on my other project Quokka, as it is the software that allows the communication between the two devices. <i>I have not finished Quokka yet</i>. So in the meantime, I want to share the way Quokka will (most likely) be setup for the future. (this is a very shallow dive, go <a href="/programming/quokka" id={"link"}>here</a> for more details on Quokka)
                </p>
                <br></br>
                <h3 className="text-xl font-bold text-zinc-900 mb-4">Joey&#39;s</h3>
                <p>
                    Joeys are the custom file that is made to work with Quokka, they allow the interperater to correctly interface with the client and execute the commands given to it, and that are given.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Note</h2>
                <p>
                    This project is still in development, and as such, the page is.. also in development. I will update this page as I make progress on the project, same thing with Quokka.
                </p>
            </section>


        </ProjectPage>
    )
}