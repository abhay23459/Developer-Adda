import AppLayout from '../components/AppLayout';
import { useNavigate } from 'react-router-dom';

export default function ProjectDetails() {
  const navigate = useNavigate();
  const milestones = [
    { name: 'Data Collection', done: true, date: 'Week 1' },
    { name: 'Baseline Model', done: true, date: 'Week 2' },
    { name: 'Augmented Training', done: false, date: 'Week 4 (current)' },
    { name: 'Evaluation & Report', done: false, date: 'Week 5' },
    { name: 'Deploy API', done: false, date: 'Week 6' },
  ];

  return (
    <AppLayout>
      <div className="page-body">
        <button className="btn-ghost" style={{ padding: '6px 0', fontSize: 12, marginBottom: 16 }} onClick={() => navigate('/projects')}>← Back to Projects</button>

        <div className="card" style={{ marginBottom: 20, padding: '24px 28px', borderColor: 'rgba(124,58,237,0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em' }}>CropScan ML</h1>
                <span className="badge" style={{ padding: '3px 9px', borderRadius: 999, background: 'rgba(16,185,129,0.12)', color: 'var(--green)', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }} />active
                </span>
              </div>
              <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>Satellite imagery based crop disease detection using CNN models. Part of ML Explorers community.</p>
              <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
                {['Python', 'PyTorch', 'FastAPI', 'Docker'].map((s) => <span key={s} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '2px 8px', borderRadius: 5, background: 'var(--surface-2)', color: 'var(--muted)', border: '1px solid var(--border)' }}>{s}</span>)}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="btn-outline" style={{ padding: '8px 16px', fontSize: 12 }}>⭐ Star · 24</button>
              <button className="btn-primary" style={{ padding: '8px 16px', fontSize: 12 }}>View on GitHub</button>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 20 }}>
          {/* Milestones */}
          <div>
            <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 14 }}>Milestones</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {milestones.map((m, i) => (
                <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px' }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: m.done ? 'rgba(16,185,129,0.15)' : 'var(--surface-2)', border: `2px solid ${m.done ? 'var(--green)' : 'var(--border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: m.done ? 'var(--green)' : 'var(--faint)', flexShrink: 0 }}>
                    {m.done ? '✓' : i + 1}
                  </div>
                  <div style={{ flex: 1, fontWeight: 500, fontSize: 13, color: m.done ? 'var(--muted)' : 'var(--text)', textDecoration: m.done ? 'line-through' : 'none' }}>{m.name}</div>
                  <span style={{ fontSize: 11, color: 'var(--faint)', fontFamily: 'var(--font-mono)' }}>{m.date}</span>
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: 16, fontWeight: 700, margin: '24px 0 14px' }}>Overall Progress</h2>
            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 13 }}>
                <span style={{ color: 'var(--muted)' }}>Sprint Week 4 of 6</span>
                <span style={{ fontWeight: 600 }}>65%</span>
              </div>
              <div style={{ height: 8, borderRadius: 4, background: 'var(--surface-2)', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '65%', background: 'linear-gradient(90deg,var(--primary),var(--primary-light))', borderRadius: 4 }} />
              </div>
            </div>
          </div>

          {/* Side info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="card">
              <div style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--font-mono)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Project Info</div>
              {[['Community', 'ML Explorers'], ['Contributors', '8 members'], ['Stars', '24'], ['Started', 'Jan 2025'], ['License', 'MIT']].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, padding: '6px 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ color: 'var(--muted)' }}>{k}</span>
                  <span style={{ color: 'var(--text)', fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </div>

            <div className="card">
              <div style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--font-mono)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Quick Links</div>
              {['GitHub Repo', 'Live Demo', 'Research Paper', 'Figma Designs'].map((l) => (
                <div key={l} style={{ padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: 12, color: 'var(--primary-light)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10 }}>↗</span> {l}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
