import ProjectPage from "@/components/project-page";

export default function Get() {
    return (
        <ProjectPage
            title="Get"
            description="Simple bukkit plugin to get item information and upload it to hastebin."
            date="12-04-2024"
            status="in-progress"
            backLink="/programming"
            backText="Back to Programming"
        >

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">A quick note</h2>
                <p>
                    This project is currently broken due to md-5.net going offline. I will need to rework the code to use a different pastebin service.
                </p>
            </section>
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Overview</h2>
                <p className="text-zinc-600 mb-4">
                    Get is a simple Bukkit plugin that allows players to upload the data of the item they are currently holding to Hastebin. This is particularly useful for sharing item data with server administrators or other players for troubleshooting or informational purposes. The plugin is made in Kotlin.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Features</h2>
                <ul className="list-disc list-inside text-zinc-600">
                    <li>Retrieves and formats item information including:</li>
                    <ul className="list-disc list-inside ml-6 text-zinc-600">
                        <li>Item Type</li>
                        <li>Amount</li>
                        <li>Custom Name</li>
                        <li>Lore (If Any)</li>
                        <li>NBT Data/Item Flags</li>
                    </ul>
                    <li>Uploads item data to Hastebin.</li>
                    <li>Generates a shareable link for easy access.</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Installation</h2>
                <ol className="list-disc list-inside text-zinc-600">
                    <li>Download the Get plugin JAR file from the <a href="https://github.com/literal-gargoyle/get/releases/tag/v1.0.0" target="_blank" id="link">releases</a> page.</li>
                    <li>Place the JAR file into your servers plugins directory.</li>
                    <li>Restart your Minecraft server to load the plugin.</li>
                </ol>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Usage</h2>
                <p>
                    To use the Get plugin, hold the item you want the information of in the <i>main</i> hand and run the command <code>/get</code>. Thats it, the plugin will handle the rest and provide you with a Hastebin link containing the item data similar to this: <code>https://paste.md-5.net/abc123</code>
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Code overview</h2>
                <p className="text-zinc-600 mb-4">
                    Get is only 95 lines of code without any shrinking or optimizations. Most of the code is just command handling for the one command. The main logic I used to create get is just getting the information of the item, then just using a <code>StringBuilder()</code> under the variable name <code>builder</code> to format the data into a readable format. After that, I used an HTTP POST request to upload the data to Hastebin and get the link.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Source Code</h2>
                <p>
                    The source code for Get is available on GitHub. You can view and contribute to the project by visiting the <a href="https://github.com/literal-gargoyle/get" target="_blank" id="link">repository</a>.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Review and Conclusion</h2>
                <p className="text-zinc-600 mb-4">
                    This project broke when md-5.net went offline, so I need to rework for another pastebin service. Overall, this was a fun use of Kotlin and I might finish it later.
                </p>
            </section>

        </ProjectPage>
    );
}