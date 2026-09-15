import { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Learning Journey', href: '#journey' },
  { label: 'Goals', href: '#goals' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-white/10 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2 font-display text-lg font-bold tracking-wide text-white"
          aria-label="Harshitha H — home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-galaxy-blue via-galaxy-violet to-galaxy-pink text-white shadow-lg shadow-galaxy-violet/40 transition-transform group-hover:scale-110">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="hidden sm:inline">
            Harshitha<span className="text-galaxy-pink">.</span>H
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-indigo-100/80 transition-colors hover:text-white hover:bg-white/5"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="glass mx-3 mb-3 flex flex-col gap-1 rounded-2xl border border-white/10 p-3">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-indigo-100/90 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
