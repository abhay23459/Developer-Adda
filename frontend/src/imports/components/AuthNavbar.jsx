import { Link } from 'react-router-dom';

export default function AuthNavbar({ page }) {
  const isLogin = page === 'login';

  return (
    <header className="auth-navbar nav-glass">
      <div className="auth-navbar-inner">
        <Link className="auth-brand" to="/" aria-label="Nexora home" style={{ transition: 'opacity 0.2s, transform 0.2s' }} onMouseEnter={(event) => { event.currentTarget.style.opacity = '0.82'; event.currentTarget.style.transform = 'translateY(-1px)'; }} onMouseLeave={(event) => { event.currentTarget.style.opacity = '1'; event.currentTarget.style.transform = 'none'; }}>
          <span className="auth-brand-mark" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <circle cx="6" cy="6" r="2.5" fill="white" />
              <circle cx="12" cy="6" r="2.5" fill="white" opacity="0.6" />
              <circle cx="9" cy="12" r="2.5" fill="white" opacity="0.8" />
              <line x1="6" y1="6" x2="12" y2="6" stroke="white" strokeWidth="1" opacity="0.4" />
              <line x1="6" y1="6" x2="9" y2="12" stroke="white" strokeWidth="1" opacity="0.4" />
              <line x1="12" y1="6" x2="9" y2="12" stroke="white" strokeWidth="1" opacity="0.4" />
            </svg>
          </span>
          <span>Nexora</span>
        </Link>

        <nav className="auth-navbar-links" aria-label="Authentication navigation">
          <Link className="auth-home-link" to="/">Home</Link>
          <Link className="btn-primary auth-action-link" to={isLogin ? '/auth/register' : '/auth/login'}>
            {isLogin ? 'Join Free' : 'Sign In'}
          </Link>
        </nav>
      </div>
    </header>
  );
}
