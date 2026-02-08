import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Contact from '@/components/contact';

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

            {/* cardz */}
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
                      Onshape files, CAD models, and other engineering projects I&#39;ve worked on. Eventually my engineering capstone will go here.
                    </p>
                    <div className="inline-flex items-center gap-2 text-orange-600 font-medium group-hover:gap-3 transition-all">
                      Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/combined" className="group">
                <div className="relative h-full p-8 rounded-xl border-2 border-zinc-200 hover:border-green-400 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/10 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-5xl font-bold text-green-600 mb-4">&lt;&gt; + ⚙</div>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-green-600 transition-colors">
                      Combined Projects
                    </h3>
                    <p className="text-zinc-600 mb-6">
                      Projects that combine both programming and engineering aspects.
                    </p>
                    <div className="inline-flex items-center gap-2 text-green-600 font-medium group-hover:gap-3 transition-all">
                      Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/experience" className="group">
                <div className="relative h-full p-8 rounded-xl border-2 border-zinc-200 hover:border-purple-400 bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/10 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-5xl font-bold text-purple-600 mb-4">⇢</div>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-purple-600 transition-colors">
                      Experience
                    </h3>
                    <p className="text-zinc-600 mb-6">
                      A collection of camps I did, and even some internships (in the future).
                    </p>
                    <div className="inline-flex items-center gap-2 text-purple-600 font-medium group-hover:gap-3 transition-all">
                      Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <Contact />
      </main>

      <Footer />
    </div>
  );
}