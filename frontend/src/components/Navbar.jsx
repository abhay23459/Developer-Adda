import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Communities', 'How It Works', 'Colleges', 'Stories'];

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase().replace(/ /g, '-'));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-glass border-b border-[rgba(124,58,237,0.15)]' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" aria-label="Go to Nexora home" className="flex items-center gap-2.5 group" style={{ transition: 'opacity 0.2s, transform 0.2s' }} onMouseEnter={(event) => { event.currentTarget.style.opacity = '0.82'; event.currentTarget.style.transform = 'translateY(-1px)'; }} onMouseLeave={(event) => { event.currentTarget.style.opacity = '1'; event.currentTarget.style.transform = 'none'; }}>
          <div className="w-8 h-8 rounded-lg bg-[#7C3AED] flex items-center justify-center glow-violet">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="6" cy="6" r="2.5" fill="white" />
              <circle cx="12" cy="6" r="2.5" fill="white" opacity="0.6" />
              <circle cx="9" cy="12" r="2.5" fill="white" opacity="0.8" />
              <line x1="6" y1="6" x2="12" y2="6" stroke="white" strokeWidth="1" opacity="0.4" />
              <line x1="6" y1="6" x2="9" y2="12" stroke="white" strokeWidth="1" opacity="0.4" />
              <line x1="12" y1="6" x2="9" y2="12" stroke="white" strokeWidth="1" opacity="0.4" />
            </svg>
          </div>
          <span
            style={{ fontFamily: 'var(--font-display)' }}
            className="font-800 text-lg text-[#F1F0FF] tracking-tight"
          >
            Nexora
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-[#8B8DA8] hover:text-[#F1F0FF] text-sm font-medium"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm text-[#8B8DA8] hover:text-[#F1F0FF] font-medium px-4 py-2">
            Sign In
          </button>
          <button className="text-sm font-semibold bg-[#7C3AED] hover:bg-[#9D5CF0] text-white px-5 py-2 rounded-lg">
            Join Free
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#8B8DA8] hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden nav-glass border-t border-[rgba(124,58,237,0.15)] px-4 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left text-[#8B8DA8] hover:text-[#F1F0FF] text-sm font-medium"
            >
              {link}
            </button>
          ))}
          <button className="w-full text-sm font-semibold bg-[#7C3AED] hover:bg-[#9D5CF0] text-white px-5 py-2.5 rounded-lg mt-2">
            Join Free
          </button>
        </div>
      )}
    </header>
  );
}
