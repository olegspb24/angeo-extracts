type HeaderProps = { className?: string };

export default function Header({ className }: HeaderProps) {
  return (
    <header className={g-white shadow-md }>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800">AnGeo Extracts</div>
        <nav className="hidden md:flex space-x-6">
          {['About', 'Products', 'Blog', 'Contact'].map(item => (
            <a key={item} href={#} className="text-gray-600 hover:text-orange-500 transition">
              {item}
            </a>
          ))}
        </nav>
        <div className="md:hidden text-gray-800"></div>
      </div>
    </header>
  );
}
