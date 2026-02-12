import Image from 'next/image';

export default function Hero() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="flex justify-center">
            <div className="relative w-80 h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/hero.jpg"
                alt="Profile image"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">
              David Kano Ikeda
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-4">
              Hi! This is my portfolio website for all my projects. I really enjoy building and designing projects with STEM (Mostly the T.E.M parts).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
