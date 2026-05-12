import ProjectPage from "@/components/project-page";
import ModelViewer from "@/components/model-viewer";
import CodeBlock from "@/components/code-block";
import Image from "next/image";

export default function toadstool() {
    return (
        <ProjectPage
            title="Toadstool"
            description="Toadstool is an offseason robotics mini bot created for the 2026 season."
            date="4/25/26"
            status="in-progress"
            backLink="/combined"
            backText="Back to Combined Projects"
        >

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Overview</h2>
                <p>
                    Toadstool is a mini bot that I am creating with one of my friends on another team (8230), it has a 15&#34; x 15&#34; frame, so its around half the frame size as the 2026 9033 Robot. When the bumper is applied, its total size gains around 7 inches, making it around 22&#34; x 22&#34;
                </p>
                <br></br>
                <div className="flex justify-center items-center"><Image src="/images/toadstool/toadstool.png" alt="Toadstool Engineering Drawing" width="600" height="600" /></div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Project Background & Rationale</h2>
                <p>
                    The main reason for creating this bot was to have a platform to test out new ideas and designs for the 2026 season, as well as to have a fun project to work on with a friend. The mini bot size allows us to experiment with different designs and components without having to worry about the constraints of a full-size robot, and also allows us to keep costs down.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Note</h2>
                <p>
                    This project is still in development, and as such, the page is.. also in development. I will update this page as I make progress on the project, same thing with Quokka.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Design of components</h2>
                <p>
                    One of the things that let us make Toadstool so small was the custom swerve modules, aptly named ToadSwerves. Almost every part in this design is 3d printed, expect for the bearings, motors, and screws. The gears are resin printed (through JLC3DP), and everything else is printed on my home printers (Neptune 4 Max, and Modded Ender 3). The motors we decided to go with is the base CIM motor, which are brushed DC motors, which get controlled by Victor SPX&#39;s
                </p>
                <br></br>
                <p>
                    Victor SPX&#39;s are not my first choice for motor controllers, but we were given a bunch for free by neighboring teams, same with the CIM motors (and some mini CIM motors). Another thing that let us keep cost down was using AS5600 Absolute Encoders, through SPI, as that let us avoid the really expensive CANCoders used on main season robots. For what its doing, the code for the encoders is pretty simple:
                </p>
                <br></br>
                <CodeBlock language={"java"} code={"public static class AS5600Encoder {\n" +
                    "    private final I2C i2c;\n" +
                    "    private static final int AS5600_ADDR = 0x36;\n" +
                    "    private static final int ANGLE_REG = 0x0E;\n" +
                    "\n" +
                    "    public AS5600Encoder(I2C.Port port, int address) {\n" +
                    "      this.i2c = new I2C(port, address);\n" +
                    "    }\n" +
                    "\n" +
                    "    public double getAngleDegrees() {\n" +
                    "      byte[] rawData = new byte[2];\n" +
                    "      i2c.read(ANGLE_REG, 2, rawData);\n" +
                    "\n" +
                    "      int raw12bit = ((rawData[0] & 0xFF) << 4) | ((rawData[1] & 0xFF) >> 4);\n" +
                    "\n" +
                    "      return (raw12bit / 4095.0) * 360.0;\n" +
                    "    }\n" +
                    "  }"}>
                    </CodeBlock>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Toad Swerve Model</h2>
                <p className="text-zinc-600 mb-4">*This file had to be exported as coarse to run on mobile devics, check the onshape for a higher quality render</p>
                <ModelViewer
                    modelPath="/models/toadstool/ToadSwerve.obj"
                    interactive={true}
                    autoRotate={true}
                    width={"100%"}
                    height="600px"
                />
            </section>


        </ProjectPage>
    )
}