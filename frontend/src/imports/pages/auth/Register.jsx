import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import AuthNavbar from '../../components/AuthNavbar';

export default function Register() {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);
  const [form, setForm] = useState({ name: '', email: '', college: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.college || !form.password) {
      setError('Please fill all fields.'); return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    login({ name: form.name, email: form.email, college: form.college, tier: form.tier });
    navigate('/onboarding');
  };

  return (
    <div className="auth-page">
      <AuthNavbar page="register" />
      <div className="auth-layout" style={{ minHeight: 'calc(100svh - 61px)', display: 'flex', background: 'var(--bg)' }}>
      {/* Left */}
      <div className="auth-intro geo-grid" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(249,115,22,0.12) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 340 }}>
          <div style={{ fontSize: 52, marginBottom: 20 }}>🚀</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 10 }}>
            Start something <span style={{ color: 'var(--accent)' }}>real</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.65 }}>
            Join communities of builders from Tier 3 to IIT. Your college name isn't your ceiling.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 28 }}>
            {['Free forever', '10-member cap', 'Weekly sprints', 'Portfolio built'].map((f) => (
              <div key={f} style={{ padding: '10px 14px', borderRadius: 9, background: 'var(--surface)', border: '1px solid var(--border)', fontSize: 12, color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 7 }}>
                <span style={{ color: 'var(--green)', fontSize: 13 }}>✓</span> {f}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right — form */}
      <div className="auth-form-panel" style={{ width: 440, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40, borderLeft: '1px solid var(--border)', background: 'var(--surface)', overflowY: 'auto' }}>
        <div style={{ width: '100%', maxWidth: 360 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4, letterSpacing: '-0.02em' }}>Create your account</h2>
          <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>Join 2,400+ builders today</p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)', display: 'block', marginBottom: 5 }}>Full Name</label>
              <input className="field" placeholder="Arjun Mehta" value={form.name} onChange={(e) => set('name', e.target.value)} />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)', display: 'block', marginBottom: 5 }}>Email</label>
              <input className="field" type="email" placeholder="you@college.edu" value={form.email} onChange={(e) => set('email', e.target.value)} />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)', display: 'block', marginBottom: 5 }}>College Name</label>
              <input className="field" placeholder="NIT Warangal, BITS Pilani…" value={form.college} onChange={(e) => set('college', e.target.value)} />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)', display: 'block', marginBottom: 5 }}>Password</label>
              <input className="field" type="password" placeholder="Min 8 characters" value={form.password} onChange={(e) => set('password', e.target.value)} />
            </div>
            {error && <p style={{ fontSize: 12, color: 'var(--red)' }}>{error}</p>}
            <button className="btn-primary" type="submit" disabled={loading} style={{ padding: '12px', fontSize: 14, marginTop: 4, width: '100%' }}>
              {loading ? 'Creating account…' : 'Create Account →'}
            </button>
          </form>

          <p style={{ fontSize: 12, color: 'var(--muted)', textAlign: 'center', marginTop: 20 }}>
            Already have an account?{' '}
            <Link to="/auth/login" style={{ color: 'var(--primary-light)', fontWeight: 600 }}>Sign in</Link>
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
