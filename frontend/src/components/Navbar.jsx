import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../pages/Landing.css';
import '../landing_page/Navbar.css';

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
        <NavLink to={homePath} className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/leaderboard" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>LeaderBoard</NavLink>
        <NavLink to="/community" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Community</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? 'active': ''} onClick={() => setMenuOpen(false)}>About</NavLink>
      </nav>
      <div className="header-actions">
        <Link className="outline-button" to="/auth/login">Sign in</Link>
        <Link className="orange-button compact" to="/auth/register">Create a Decad</Link>
      </div>
    </header>
  );
}