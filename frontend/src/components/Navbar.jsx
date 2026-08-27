import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../pages/Landing.css';
import '../landing_page/Navbar.css';

export default function Navbar({ homePath = '/dashboard' }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header app-site-header">
      <Link className="brand" to="/" aria-label="AKAS home">
        <span className="brand-mark">A</span>
        <span className="brand-name">AKAS</span>
      </Link>
      <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
        <NavLink to={homePath} className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/leaderboard" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>LeaderBoard</NavLink>
        <NavLink to="/community" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Community</NavLink>
        <Link to="/#about" onClick={() => setMenuOpen(false)}>About</Link>
      </nav>
      <div className="header-actions">
        <Link className="orange-button compact" to="/auth/login">Login</Link>
        <Link className="orange-button compact" to="/auth/register">Sign up</Link>
      </div>
    </header>
  );
}