import { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#products', label: 'Products' },
  { href: '#coverage', label: 'Coverage' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-primary-100 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <button onClick={scrollToTop} className="group flex items-center gap-2.5">
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 font-display text-lg font-800 text-white shadow-lg shadow-primary-500/30 transition-transform group-hover:scale-105">
              A
            </div>
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="font-display text-xl font-700 text-primary-700 tracking-tight">
              Adcuesta
            </span>
            <span className="text-[10px] font-medium tracking-wider text-accent-500 uppercase">
              VAS Platform
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative rounded-lg px-4 py-2 text-sm font-500 text-ink-700 transition-colors hover:text-primary-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 px-5 py-2.5 text-sm font-600 text-white shadow-lg shadow-primary-500/25 transition-all hover:shadow-xl hover:shadow-primary-500/40 hover:scale-105"
          >
            Partner With Us
            <ChevronDown className="h-4 w-4 -rotate-90 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden">
          <div className="mx-5 mt-3 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-primary-100">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm font-500 text-ink-700 transition-colors hover:bg-primary-50 hover:text-primary-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 block rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 px-4 py-3 text-center text-sm font-600 text-white"
                >
                  Partner With Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
