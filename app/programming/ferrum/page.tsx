import ProjectPage from "@/components/project-page";

export default function Get() {
    return (
        <ProjectPage
            title="Ferrum"
            description="Simple Python Project Package Manager (SPPPM); Install packages for your user with a single line of code."
            date="10-01-2025"
            status="completed"
            backLink="/programming"
            backText="Back to Programming"
        >
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Overview</h2>
                <p className="text-zinc-600 mb-4">
                    Ferrum (Latin for iron) is a simple Python package manager designed to run with the program. It allows developers to easily install all of their dependencies with a single line of code, without needing to worry about users messing it up.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Features</h2>
                <ul className="list-disc list-inside text-zinc-600">
                    <li>Simple one-line installation of dependencies.</li>
                    <li>Version pinning</li>
                    <li>Uninstalling of dependencies also supported</li>
                    <li>Works on Windows, MacOS, and Linux</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Installation and Usage</h2>
                <p className="text-zinc-600 mb-4">
                    To install Ferrum, install from pip with the command <code>pip install ferrum</code>
                </p>
                <p className="text-zinc-600 mb-4">
                    To use Ferrum, import it in your python source code and call the function <code>Ferrum.forge</code> with a list of packages to install. For example, <code>Ferrum.forge([&#34;numpy&#34;,&#34;scipy&#34;])</code> To uninstall packages, use <code>Ferrum.purge</code> with a list of packages to uninstall.
                </p>
                <p>There are two options (flags) to use with ferrum, <i>Verbose</i>, and <i>Summary</i></p>.
                <br></br>
                <p>Verbose mode broadcasts the output from pip, while summary produces a simple success/failure summary of install/uninstall</p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Code Overview</h2>
                <p className="text-zinc-600 mb-4">
                    Like most of my projects, Ferrum is completely open source, and less than 100 lines of code. You can find the source code on <a href="https://github.com/literal-gargoyle/ferrum/" target="_blank" id="link">GitHub</a>. The main logic of Ferrum is in the forge and purge functions, which contain about 90% of the total code. From the forge function, it first finds if the package exists, and if the developer put the packages in correct syntax (list/tuple/dict). The program then goes into a for loop running an subprocess command to install each package using pip. If the summary flag is toggled, it prints the results for each package. Purge does the same thing but it uninstalls the packages.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900 mb-4">Reflection</h2>
                <p className="text-zinc-600 mb-4">
                    I originally made this project because I got minorly annoyed that I needed to install dependencies manually for each project I ran on my computer. Yes a requirements.txt file exist, but I wanted something even quicker and simpler for newer users that prefer to not use the terminal. (That purpose kinda gets defeated because you have to install Ferrum using the terminal, but I digress :/ ) Overall, I am happy with how this project turned out, because I learned a lot about making packages, and using subprocesses in Python.
                </p>
            </section>
        </ProjectPage>
    );
}