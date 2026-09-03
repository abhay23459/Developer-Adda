import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import Footer from '../../components/Footer';

const stats = [
  { value: '2,400+', label: 'Students' },
  { value: '320+', label: 'Communities' },
  { value: '180+', label: 'Colleges' },
  { value: '94%', label: 'Found Collaborators' },
];

const features = [
  { icon: '◉', color: 'var(--primary)', title: 'Micro-Communities', desc: 'Max 10 members per community — tight-knit, focused, actually collaborative.' },
  { icon: '◈', color: 'var(--accent)', title: 'Project Launchpad', desc: 'Shared project board, milestones, and public showcase per community.' },
  { icon: '⟁', color: 'var(--green)', title: 'Skill Match', desc: 'Tell us what you want to build. We surface communities where you fit.' },
  { icon: '▲', color: 'var(--primary)', title: 'Leaderboard', desc: 'Track contributions, sprints completed, and community impact.' },
  { icon: '⚡', color: 'var(--accent)', title: 'Weekly Sprints', desc: 'Communities run 7-day focus sprints. Ship something small every week.' },
  { icon: '◯', color: 'var(--green)', title: 'Portfolio Builder', desc: 'Your contributions auto-generate a shareable portfolio.' },
];

const communities = [
  { name: 'ML Explorers', cat: 'Research', members: 8, tags: ['PyTorch', 'CV'], college: 'NIT Warangal', tier: 'Tier 2', avatar: '🧠', full: false },
  { name: 'Zero to SaaS', cat: 'Startup', members: 6, tags: ['React', 'Stripe'], college: 'BITS Pilani', tier: 'Tier 2', avatar: '🚀', full: false },
  { name: 'DSA War Room', cat: 'Skills', members: 10, tags: ['LeetCode'], college: 'VIT Vellore', tier: 'Tier 2', avatar: '⚔️', full: true },
  { name: 'Open Web Guild', cat: 'Projects', members: 7, tags: ['TypeScript', 'OSS'], college: 'IIT Bombay', tier: 'IIT', avatar: '🌐', full: false },
  { name: 'Blockchain Builders', cat: 'Research', members: 5, tags: ['Solana', 'Rust'], college: 'IIT Delhi', tier: 'IIT', avatar: '⛓️', full: false },
  { name: 'Design Systems Lab', cat: 'Skills', members: 9, tags: ['Figma'], college: 'Manipal', tier: 'Tier 2', avatar: '🎨', full: false },
];

const catColor = { Research: 'var(--accent)', Skills: 'var(--green)', Startup: 'var(--red)', Projects: 'var(--primary)' };
const tierColor = { IIT: 'var(--accent)', 'Tier 2': '#A78BFA', 'Tier 3': 'var(--green)' };

export default function Landing() {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isAuthenticated) navigate('/dashboard');
    setTimeout(() => setVisible(true), 80);
  }, [isAuthenticated, navigate]);

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100svh' }}>
      {/* Navbar */}
      <header className="nav-glass" style={{ position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" aria-label="Go to Nexora home" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, transition: 'opacity 0.2s, transform 0.2s' }} onMouseEnter={(event) => { event.currentTarget.style.opacity = '0.82'; event.currentTarget.style.transform = 'translateY(-1px)'; }} onMouseLeave={(event) => { event.currentTarget.style.opacity = '1'; event.currentTarget.style.transform = 'none'; }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <circle cx="6" cy="6" r="2.5" fill="white" />
                <circle cx="12" cy="6" r="2.5" fill="white" opacity="0.6" />
                <circle cx="9" cy="12" r="2.5" fill="white" opacity="0.8" />
                <line x1="6" y1="6" x2="12" y2="6" stroke="white" strokeWidth="1" opacity="0.4"/>
                <line x1="6" y1="6" x2="9" y2="12" stroke="white" strokeWidth="1" opacity="0.4"/>
                <line x1="12" y1="6" x2="9" y2="12" stroke="white" strokeWidth="1" opacity="0.4"/>
              </svg>
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, letterSpacing: '-0.02em' }}>Nexora</span>
          </Link>
          <div style={{ display: 'flex', gap: 12 }}>
            <button className="btn-ghost" style={{ padding: '8px 16px', fontSize: 13 }} onClick={() => navigate('/auth/login')}>Sign In</button>
            <button className="btn-primary" style={{ padding: '8px 18px', fontSize: 13 }} onClick={() => navigate('/auth/register')}>Join Free</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="geo-grid" style={{ minHeight: '88vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 720, textAlign: 'center', position: 'relative', zIndex: 1, opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 14px', borderRadius: 999, border: '1px solid rgba(124,58,237,0.35)', background: 'rgba(124,58,237,0.1)', marginBottom: 28 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span className="badge" style={{ color: 'var(--primary-light)' }}>Tier 2 & 3 College Students</span>
          </div>
          <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}`}</style>
          <h1 style={{ fontSize: 'clamp(40px,6vw,72px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 20 }}>
            Find Your{' '}
            <span style={{ background: 'linear-gradient(135deg,var(--primary),var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Tribe</span>
            <br />Build Together
          </h1>
          <p style={{ fontSize: 18, color: 'var(--muted)', lineHeight: 1.65, marginBottom: 36, maxWidth: 560, margin: '0 auto 36px' }}>
            Connect with students who share your drive. Form micro-communities of up to{' '}
            <span style={{ color: 'var(--accent)', fontWeight: 600 }}>10 like-minded builders</span> across India's colleges.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
            <button className="btn-primary glow-violet" style={{ padding: '12px 28px', fontSize: 15 }} onClick={() => navigate('/auth/register')}>Explore Communities</button>
            <button className="btn-outline" style={{ padding: '12px 28px', fontSize: 15 }} onClick={() => navigate('/auth/register')}>Create a Community</button>
          </div>
          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'rgba(124,58,237,0.15)', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(124,58,237,0.15)' }}>
            {stats.map((s) => (
              <div key={s.label} style={{ background: 'var(--surface)', padding: '16px 12px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: 'var(--text)', marginBottom: 2 }}>{s.value}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 24px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="badge" style={{ display: 'inline-block', padding: '4px 12px', borderRadius: 999, border: '1px solid rgba(124,58,237,0.35)', background: 'rgba(124,58,237,0.08)', color: 'var(--primary-light)', marginBottom: 16 }}>Why Nexora</span>
            <h2 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 8 }}>Built for builders, <span style={{ color: 'var(--primary)' }}>not browsers</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 16 }}>
            {features.map((f) => (
              <div key={f.title} className="card hover-lift" style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${f.color}18`, color: f.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontFamily: 'var(--font-mono)', marginBottom: 14 }}>{f.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communities Preview */}
      <section style={{ padding: '80px 24px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 36, flexWrap: 'wrap', gap: 12 }}>
            <div>
              <span className="badge" style={{ display: 'inline-block', padding: '4px 12px', borderRadius: 999, border: '1px solid rgba(249,115,22,0.3)', background: 'rgba(249,115,22,0.08)', color: 'var(--accent)', marginBottom: 12 }}>Live Communities</span>
              <h2 style={{ fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 800, letterSpacing: '-0.02em' }}>Find your <span style={{ color: 'var(--accent)' }}>people</span></h2>
            </div>
            <button className="btn-primary" onClick={() => navigate('/auth/register')}>Join to See All</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 16 }}>
            {communities.map((c) => (
              <div key={c.name} className="card hover-lift" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: 12, marginBottom: 10, alignItems: 'flex-start' }}>
                  <div style={{ width: 42, height: 42, borderRadius: 10, background: 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{c.avatar}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{c.name}</div>
                    <div style={{ display: 'flex', gap: 4 }}>
                      <span className="badge" style={{ padding: '2px 7px', borderRadius: 999, background: `${catColor[c.cat]}18`, color: catColor[c.cat] }}>{c.cat}</span>
                      <span className="badge" style={{ padding: '2px 7px', borderRadius: 999, background: `${tierColor[c.tier]}18`, color: tierColor[c.tier] }}>{c.tier}</span>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: 12 }}>
                  {c.tags.map((t) => <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '2px 7px', borderRadius: 5, background: 'var(--surface-2)', color: 'var(--muted)', border: '1px solid var(--border)' }}>{t}</span>)}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--muted)', marginBottom: 5 }}>
                  <span><span style={{ color: c.full ? 'var(--red)' : 'var(--text)', fontWeight: 600 }}>{c.members}</span>/10</span>
                  {c.full && <span className="badge" style={{ padding: '1px 7px', borderRadius: 999, background: 'rgba(248,113,113,0.12)', color: 'var(--red)' }}>Full</span>}
                  {!c.full && 10 - c.members <= 2 && <span className="badge" style={{ padding: '1px 7px', borderRadius: 999, background: 'rgba(249,115,22,0.12)', color: 'var(--accent)' }}>{10 - c.members} left</span>}
                </div>
                <div style={{ height: 5, borderRadius: 3, background: 'var(--surface-2)', overflow: 'hidden', marginBottom: 12 }}>
                  <div style={{ height: '100%', width: `${(c.members / 10) * 100}%`, background: c.full ? 'var(--red)' : c.members >= 8 ? 'linear-gradient(90deg,var(--primary),var(--accent))' : 'linear-gradient(90deg,var(--primary),var(--primary-light))', borderRadius: 3 }} />
                </div>
                <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 'auto' }}>{c.college}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: 'var(--bg)', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 14 }}>
            Your college name<br /><span style={{ color: 'var(--accent)' }}>isn't your ceiling.</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 16, marginBottom: 32, lineHeight: 1.65 }}>Join 2,400+ students building communities and shipping projects — from IIT to Tier 3.</p>
          <button className="btn-primary glow-violet" style={{ padding: '13px 32px', fontSize: 16 }} onClick={() => navigate('/auth/register')}>Get Started — It's Free</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
