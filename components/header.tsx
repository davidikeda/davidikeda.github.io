import Link from 'next/link';

interface HeaderProps {
  showBackButton?: boolean;
  backHref?: string;
}

export default function Header({ showBackButton = false, backHref = '/' }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-sm">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          David K. Ikeda
        </Link>
        {showBackButton && (
          <Link
            href={backHref}
            className="px-4 py-2 rounded-full text-sm font-medium bg-zinc-100 hover:bg-zinc-200 transition-colors"
          >
            ← Back
          </Link>
        )}
      </nav>
    </header>
  );
}
