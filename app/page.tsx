import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="grow">
        <Hero />

        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-zinc-900 mb-12 text-center">
              Projects
            </h2>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/programming" className="group">
                <div className="relative h-full p-8 rounded-xl border-2 border-zinc-200 hover:border-blue-400 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/10 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-5xl font-bold text-blue-600 mb-4">&lt;&gt;</div>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors">
                      Programming Projects
                    </h3>
                    <p className="text-zinc-600 mb-6">
                      Programming projects that either took me a while to make, or I am proud of.
                    </p>
                    <div className="inline-flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                      Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/engineering" className="group">
                <div className="relative h-full p-8 rounded-xl border-2 border-zinc-200 hover:border-orange-400 bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-red-500/0 group-hover:from-orange-500/5 group-hover:to-red-500/10 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-5xl font-bold text-orange-600 mb-4">⚙</div>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-orange-600 transition-colors">
                      Engineering Projects
                    </h3>
                    <p className="text-zinc-600 mb-6">
                      Onshape files, CAD models, and other engineering projects I've worked on. Eventually my engineering capstone will go here.
                    </p>
                    <div className="inline-flex items-center gap-2 text-orange-600 font-medium group-hover:gap-3 transition-all">
                      Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}