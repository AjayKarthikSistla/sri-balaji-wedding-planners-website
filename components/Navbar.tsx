import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Gallery', href: '/gallery' },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-2xl font-bold text-purple-700 tracking-wide">Sri Balaji Planners</span>
        <div className="space-x-6">
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} className="text-lg font-medium text-gray-700 hover:text-purple-700 transition-colors">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
} 