import { Menu, X } from 'lucide-react';
import { useState } from 'react';
<<<<<<< Updated upstream
import { Link } from 'react-router-dom';
import '../pages/Landing.css';
import '../landing_page/Navbar.css';
=======
import { Link, NavLink } from 'react-router-dom';

>>>>>>> Stashed changes

export default function Navbar({ homePath = '/dashboard', pageTitle = '' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLanding = homePath === '/';

  return (
    <header className={`site-header app-site-header ${isLanding ? 'landing-header' : ''} ${pageTitle ? 'workspace-header' : ''}`}>
      <Link className="brand" to={isLanding ? '/' : '/dashboard'} aria-label="Decad home">
        <span className="brand-mark" />
        <span className="brand-name">Decad</span>
      </Link>
      {pageTitle && <span className="app-page-title">{pageTitle}</span>}
      <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
<<<<<<< Updated upstream
        <a href={isLanding ? '#explore' : '/#explore'} onClick={() => setMenuOpen(false)}>Explore Decads</a>
        <a href={isLanding ? '#how-it-works' : '/#how-it-works'} onClick={() => setMenuOpen(false)}>How it works</a>
        <a href={isLanding ? '#colleges' : '/#colleges'} onClick={() => setMenuOpen(false)}>Colleges</a>
        <a href={isLanding ? '#about' : '/#about'} onClick={() => setMenuOpen(false)}>About</a>
=======
        <NavLink to={homePath} className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/leaderboard" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>LeaderBoard</NavLink>
        <NavLink to="/community" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Community</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? 'active': ''} onClick={() => setMenuOpen(false)}>About</NavLink>
>>>>>>> Stashed changes
      </nav>
      <div className="header-actions">
        <Link className="outline-button" to="/auth/login">Sign in</Link>
        <Link className="orange-button compact" to="/auth/register">Create a Decad</Link>
      </div>
    </header>
  );
}