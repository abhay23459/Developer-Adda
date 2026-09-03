import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';

const navItems = [
  { to: '/dashboard',   icon: '⊞', label: 'Dashboard' },
  { to: '/community',   icon: '◉', label: 'Community' },
  { to: '/projects',    icon: '◈', label: 'Projects' },
  { to: '/contests',    icon: '⚡', label: 'Contests' },
  { to: '/hackathons',  icon: '🔥', label: 'Hackathons' },
  { to: '/leaderboard', icon: '▲', label: 'Leaderboard' },
  { to: '/chat',        icon: '◎', label: 'Chat' },
];

const practiceItems = [
  { to: '/practice/full-stack', label: 'Full Stack Web Development Practice' },
  { to: '/dsa', label: 'DSA Practice' },
];

const bottomItems = [
  { to: '/profile',  icon: '◯', label: 'Profile' },
  { to: '/settings', icon: '⚙', label: 'Settings' },
];

export default function AppLayout({ children }) {
  const { user, logout } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(location.pathname === '/dsa' || location.pathname === '/practice/full-stack');
  const isAdmin = user?.role === 'admin';

  const handleLogout = () => {
    logout();
    navigate('/auth/login');
  };

  return (
    <div className={`page-shell${menuOpen ? ' menu-open' : ''}`}>
      <button
        className="mobile-menu-button"
        type="button"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? '×' : '☰'}
      </button>
      {menuOpen && <button className="sidebar-overlay" type="button" aria-label="Close navigation" onClick={() => setMenuOpen(false)} />}
      {/* Sidebar */}
      <aside className="sidebar" onClick={(event) => {
        if (event.target.closest('a')) setMenuOpen(false);
      }}>
        {/* Logo */}
        <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="6" cy="6" r="2.5" fill="white" />
                <circle cx="12" cy="6" r="2.5" fill="white" opacity="0.6" />
                <circle cx="9" cy="12" r="2.5" fill="white" opacity="0.8" />
                <line x1="6" y1="6" x2="12" y2="6" stroke="white" strokeWidth="1" opacity="0.4" />
                <line x1="6" y1="6" x2="9" y2="12" stroke="white" strokeWidth="1" opacity="0.4" />
                <line x1="12" y1="6" x2="9" y2="12" stroke="white" strokeWidth="1" opacity="0.4" />
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15, letterSpacing: '-0.02em' }}>Nexora</div>
            </div>
          </div>
        </div>

        {/* Nav links */}
        <nav style={{ flex: 1, padding: '12px 12px 0' }}>
          <div style={{ fontSize: 10, color: 'var(--faint)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '4px 8px 8px' }}>
            Platform
          </div>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              style={({ isActive }) => ({
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '9px 12px', borderRadius: 9, marginBottom: 2,
                fontSize: 13, fontWeight: 500,
                color: isActive ? 'var(--text)' : 'var(--muted)',
                background: isActive ? 'rgba(124,58,237,0.15)' : 'transparent',
                borderLeft: isActive ? '2px solid var(--primary)' : '2px solid transparent',
                transition: 'all 0.15s',
                textDecoration: 'none',
              })}
            >
              <span style={{ fontSize: 14, width: 18, textAlign: 'center', fontFamily: 'var(--font-mono)' }}>{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
          <button
            type="button"
            className="practice-nav-toggle"
            aria-expanded={practiceOpen}
            onClick={() => setPracticeOpen((open) => !open)}
          >
            <span className="practice-nav-icon">⟁</span>
            <span>Practice</span>
            <span className="practice-nav-chevron">{practiceOpen ? '⌃' : '⌄'}</span>
          </button>
          {practiceOpen && (
            <div className="practice-nav-submenu">
              {practiceItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => `practice-nav-link${isActive ? ' active' : ''}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
          {isAdmin && (
            <NavLink
              to="/admin"
              style={({ isActive }) => ({
                display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 9,
                marginTop: 10, fontSize: 13, fontWeight: 600, color: isActive ? 'var(--text)' : 'var(--accent)',
                background: isActive ? 'rgba(249,115,22,0.12)' : 'transparent', borderLeft: isActive ? '2px solid var(--accent)' : '2px solid transparent', textDecoration: 'none',
              })}
            >
              <span style={{ fontSize: 14, width: 18, textAlign: 'center' }}>◆</span>
              Admin Console
            </NavLink>
          )}
        </nav>

        {/* Bottom: profile + settings + logout */}
        <div style={{ padding: '12px', borderTop: '1px solid var(--border)' }}>
          {bottomItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              style={({ isActive }) => ({
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '9px 12px', borderRadius: 9, marginBottom: 2,
                fontSize: 13, fontWeight: 500,
                color: isActive ? 'var(--text)' : 'var(--muted)',
                background: isActive ? 'rgba(124,58,237,0.15)' : 'transparent',
                borderLeft: isActive ? '2px solid var(--primary)' : '2px solid transparent',
                transition: 'all 0.15s',
                textDecoration: 'none',
              })}
            >
              <span style={{ fontSize: 14, width: 18, textAlign: 'center' }}>{item.icon}</span>
              {item.label}
            </NavLink>
          ))}

          {/* User chip */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', marginTop: 8, background: 'var(--surface-2)', borderRadius: 10, border: '1px solid var(--border)' }}>
            <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#fff', flexShrink: 0 }}>
              {user?.name?.[0] ?? 'U'}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {user?.name ?? 'Student'}
              </div>
              <div style={{ fontSize: 10, color: 'var(--muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {user?.college ?? 'College'}
              </div>
            </div>
            <button
              onClick={handleLogout}
              title="Logout"
              style={{ background: 'none', border: 'none', color: 'var(--faint)', fontSize: 14, padding: 0, cursor: 'pointer', transition: 'color 0.15s' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--red)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--faint)'}
            >
              ⏻
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="main-content">
        {children}
      </div>
    </div>
  );
}
