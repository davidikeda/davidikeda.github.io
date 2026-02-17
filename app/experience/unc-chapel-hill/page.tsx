import ProjectPage from "@/components/project-page";

export default function uncChapelHill() {
    return (
        <ProjectPage
            title="UNC-Chapel Hill"
            description="BattleBots Camp with VEX-V5"
            date="07-04-2024"
            status="completed"
            backLink="/experience"
            backText="Back to Experience"
        >

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Overview</h2>
                <p>
                    In the summer of 2024, I attended a BattleBots camp at UNC-Chapel Hill where I had the opportunity to work with VEX V5 robotics kits. This camp was a week long period, where the last day (Friday) had us compete against the other teams. The competition at the end had us knock foam dice off the other robot.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">The Bot</h2>
                <p>
                     I ended up building an omni-directional 4-wheel robot, with a claw and spinning top. The claw was used to grab the opponents wheels, then hit off the foam dice with the spinning top part. Because of the parts, the bot was later named "Whirlwind". The bot was very successful, because it was omnidirectional, I could turn and move whenever I wanted without relying on a turning radius.
                </p>
            </section>
        </ProjectPage>
    )
}