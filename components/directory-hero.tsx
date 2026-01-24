interface DirectoryHeroProps {
  title: string;
  description: string;
  icon: string;
}

export default function DirectoryHero({ title, description, icon }: DirectoryHeroProps) {
  return (
    <div className="bg-gradient-to-br from-zinc-50 to-zinc-100 px-6 py-16 sm:py-24 border-b border-zinc-200">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-6xl font-bold mb-4 animate-bounce-gentle">{icon}</div>
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-4">
          {title}
        </h1>
        <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}
