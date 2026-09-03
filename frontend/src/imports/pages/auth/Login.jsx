import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import AuthNavbar from '../../components/AuthNavbar';

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.email || !form.password) { setError('Please fill all fields.'); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    login({ name: 'Arjun Mehta', email: form.email, college: 'NIT Warangal', tier: 'Tier 2', role: 'student' });
    navigate('/dashboard');
  };

  return (
    <div className="auth-page">
      <AuthNavbar page="login" />
      <div className="auth-layout" style={{ minHeight: 'calc(100svh - 61px)', display: 'flex', background: 'var(--bg)' }}>
      {/* Left panel */}
      <div className="auth-intro geo-grid" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(124,58,237,0.15) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 360 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 48 }}>
            <div style={{ width: 38, height: 38, borderRadius: 11, background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                <circle cx="6" cy="6" r="2.5" fill="white" />
                <circle cx="12" cy="6" r="2.5" fill="white" opacity="0.6" />
                <circle cx="9" cy="12" r="2.5" fill="white" opacity="0.8" />
                <line x1="6" y1="6" x2="12" y2="6" stroke="white" strokeWidth="1" opacity="0.4"/>
                <line x1="6" y1="6" x2="9" y2="12" stroke="white" strokeWidth="1" opacity="0.4"/>
                <line x1="12" y1="6" x2="9" y2="12" stroke="white" strokeWidth="1" opacity="0.4"/>
              </svg>
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20 }}>Nexora</span>
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 10 }}>
            Find your <span style={{ color: 'var(--primary)' }}>tribe</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.65 }}>
            Join communities of like-minded builders across India's colleges.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 32 }}>
            {['"Got placed at Google with my DSA community" — Rahul, NIT Warangal', '"My co-founder from TierConnect, now in YC" — Siddharth, IIT Bombay'].map((q) => (
              <div key={q} style={{ padding: '12px 16px', borderRadius: 10, background: 'var(--surface)', border: '1px solid var(--border)', fontSize: 12, color: 'var(--muted)', textAlign: 'left', lineHeight: 1.5 }}>
                {q}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="auth-form-panel" style={{ width: 420, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40, borderLeft: '1px solid var(--border)', background: 'var(--surface)' }}>
        <div style={{ width: '100%', maxWidth: 340 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4, letterSpacing: '-0.02em' }}>Welcome back</h2>
          <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 28 }}>Sign in to your account</p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)', display: 'block', marginBottom: 6 }}>College Email</label>
              <input className="field" type="email" placeholder="you@college.edu" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)', display: 'block', marginBottom: 6 }}>Password</label>
              <input className="field" type="password" placeholder="••••••••" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            </div>
            {error && <p style={{ fontSize: 12, color: 'var(--red)' }}>{error}</p>}
            <button className="btn-primary" type="submit" disabled={loading} style={{ padding: '11px', fontSize: 14, marginTop: 4, width: '100%' }}>
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>

          <div style={{ position: 'relative', margin: '20px 0', textAlign: 'center' }}>
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: 'var(--border)' }} />
            <span style={{ position: 'relative', background: 'var(--surface)', padding: '0 10px', fontSize: 12, color: 'var(--muted)' }}>or</span>
          </div>

          <button className="btn-outline" style={{ width: '100%', padding: '10px', fontSize: 13 }} onClick={() => { login({ name: 'Demo User', email: 'demo@college.edu', college: 'NIT Warangal', tier: 'Tier 2' }); navigate('/dashboard'); }}>
            Continue as Demo
          </button>

          <p style={{ fontSize: 12, color: 'var(--muted)', textAlign: 'center', marginTop: 8 }}>
            No account?{' '}
            <Link to="/auth/register" style={{ color: 'var(--primary-light)', fontWeight: 600 }}>Register free</Link>
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
