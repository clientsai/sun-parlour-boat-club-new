'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Anchor } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'Membership', href: '/membership' },
  { name: 'Directors', href: '/directors' },
  { name: 'Docking', href: '/docking' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Resources', href: '/resources' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white'
      )}
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Anchor className="h-10 w-10 text-nautical-navy-700 transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-nautical-ocean-400 opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-nautical-navy-900 tracking-tight">
                  Sun Parlour Boat Club
                </span>
                <span className="text-xs text-nautical-navy-600 tracking-wide">
                  The Friendliest Club On The Lake
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-nautical-navy-700 hover:text-nautical-navy-900 hover:bg-nautical-navy-50 rounded-md transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-nautical-navy-700 hover:bg-nautical-navy-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-nautical-navy-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-nautical-navy-100 py-4">
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-base font-medium text-nautical-navy-700 hover:text-nautical-navy-900 hover:bg-nautical-navy-50 rounded-md transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
