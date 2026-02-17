export default function Contact() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-zinc-900 mb-6">
                    Contact
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed mb-4">
                    If you have any questions, project ideas, or just want to get in touch,
                    feel free to reach out.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed">
                    Email me at{" "}
                    <a
                        href="mailto:ikeda.david.k@gmail.com"
                        className="text-indigo-600 hover:underline"
                    >
                        ikeda.david.k@gmail.com
                    </a>
                </p>
            </div>
        </section>
    );
}