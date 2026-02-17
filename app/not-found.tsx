import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Contact from '@/components/contact'

export default function ErrorPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="grow">
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-zinc-900 mb-4">404 - Page Not Found</h2>
                        <p className="text-lg text-zinc-600 leading-relaxed mb-4">
                            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
                        </p>
                        <p className="text-lg text-zinc-600 leading-relaxed">
                            Please check the URL for any typos or return to the{' '}
                            <Link href="/" className="text-indigo-600 hover:underline">
                                home page
                            </Link>
                            .
                        </p>
                    </div>
                </section>

                <Contact />
            </main>

            <Footer />
        </div>
    )
}