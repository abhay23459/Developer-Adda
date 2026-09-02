import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';

const goals = [
  { id: 'projects', icon: '◈', label: 'Build Projects', desc: 'Ship real products with teammates' },
  { id: 'skills', icon: '⟁', label: 'Learn Skills', desc: 'Level up DSA, design, or a new stack' },
  { id: 'research', icon: '◉', label: 'Do Research', desc: 'Publish papers and explore problems' },
  { id: 'startup', icon: '🚀', label: 'Start a Company', desc: 'Find co-founders and validate ideas' },
  { id: 'placement', icon: '⚡', label: 'Crack Placements', desc: 'Mock interviews and peer accountability' },
  { id: 'compete', icon: '▲', label: 'Win Competitions', desc: 'Hackathons, contests, and olympiads' },
];

export default function Onboarding() {
  const navigate = useNavigate();
  const updateUser = useAuthStore((s) => s.updateUser);
  const [selected, setSelected] = useState([]);

  const toggle = (id) => setSelected((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);

  const handleNext = () => {
    updateUser({ goals: selected });
    navigate('/onboarding/assessment');
  };

  return (
    <div style={{ minHeight: '100svh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ width: '100%', maxWidth: 680 }}>
        {/* Progress */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 48 }}>
          <div style={{ flex: 1, height: 3, borderRadius: 3, background: 'var(--primary)' }} />
          <div style={{ flex: 1, height: 3, borderRadius: 3, background: 'var(--faint)' }} />
          <div style={{ flex: 1, height: 3, borderRadius: 3, background: 'var(--faint)' }} />
          <span style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--font-mono)', marginLeft: 4 }}>1/3</span>
        </div>

        <h1 style={{ fontSize: 'clamp(26px,4vw,38px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 8 }}>
          What do you want to <span style={{ color: 'var(--primary)' }}>accomplish?</span>
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: 15, marginBottom: 32 }}>Pick all that apply. We'll match you with the right communities.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 12, marginBottom: 36 }}>
          {goals.map((g) => {
            const active = selected.includes(g.id);
            return (
              <button key={g.id} onClick={() => toggle(g.id)} style={{ textAlign: 'left', padding: '16px', borderRadius: 14, border: `1px solid ${active ? 'rgba(124,58,237,0.5)' : 'var(--border)'}`, background: active ? 'rgba(124,58,237,0.12)' : 'var(--surface)', cursor: 'pointer', transition: 'all 0.18s', position: 'relative' }}>
                {active && <div style={{ position: 'absolute', top: 10, right: 10, width: 18, height: 18, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: '#fff' }}>✓</div>}
                <div style={{ fontSize: 22, marginBottom: 8, fontFamily: 'var(--font-mono)' }}>{g.icon}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--text)', marginBottom: 4 }}>{g.label}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>{g.desc}</div>
              </button>
            );
          })}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>{selected.length} selected</span>
          <button className="btn-primary" disabled={selected.length === 0} onClick={handleNext} style={{ padding: '11px 28px' }}>
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}
