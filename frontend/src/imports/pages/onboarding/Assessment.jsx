import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';

const skillGroups = [
  { group: 'Programming', skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'Rust', 'Go'] },
  { group: 'Web & Mobile', skills: ['React', 'Next.js', 'Vue', 'Flutter', 'React Native', 'Node.js'] },
  { group: 'AI & Data', skills: ['ML/AI', 'PyTorch', 'TensorFlow', 'Data Science', 'NLP', 'Computer Vision'] },
  { group: 'Infrastructure', skills: ['DevOps', 'Docker', 'AWS', 'Linux', 'CI/CD', 'Kubernetes'] },
  { group: 'Design & Product', skills: ['Figma', 'UI/UX', 'Product', 'Branding', 'Motion Design'] },
  { group: 'CS Fundamentals', skills: ['DSA', 'System Design', 'OS', 'Networks', 'Databases'] },
];

export default function Assessment() {
  const navigate = useNavigate();
  const updateUser = useAuthStore((s) => s.updateUser);
  const [selected, setSelected] = useState([]);
  const [yearOfStudy, setYearOfStudy] = useState('');
  const [loading, setLoading] = useState(false);

  const toggle = (s) => setSelected((p) => p.includes(s) ? p.filter((x) => x !== s) : [...p, s].slice(0, 10));

  const handleFinish = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    updateUser({ skills: selected, yearOfStudy });
    navigate('/dashboard');
  };

  return (
    <div style={{ minHeight: '100svh', background: 'var(--bg)', padding: 24 }}>
      <div style={{ maxWidth: 720, margin: '0 auto', paddingTop: 32 }}>
        {/* Progress */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 48 }}>
          <div style={{ flex: 1, height: 3, borderRadius: 3, background: 'var(--primary)' }} />
          <div style={{ flex: 1, height: 3, borderRadius: 3, background: 'var(--primary)' }} />
          <div style={{ flex: 1, height: 3, borderRadius: 3, background: 'var(--faint)' }} />
          <span style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--font-mono)', marginLeft: 4 }}>2/3</span>
        </div>

        <h1 style={{ fontSize: 'clamp(24px,3.5vw,34px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 8 }}>
          What are your <span style={{ color: 'var(--accent)' }}>skills?</span>
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 8 }}>Pick up to 10. These power your community matches.</p>
        <p style={{ fontSize: 12, color: 'var(--faint)', marginBottom: 28, fontFamily: 'var(--font-mono)' }}>{selected.length}/10 selected</p>

        {/* Skill groups */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 28 }}>
          {skillGroups.map((g) => (
            <div key={g.group}>
              <div style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>{g.group}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {g.skills.map((s) => {
                  const active = selected.includes(s);
                  return (
                    <button key={s} onClick={() => toggle(s)} style={{ padding: '6px 14px', borderRadius: 8, border: `1px solid ${active ? 'rgba(124,58,237,0.5)' : 'var(--border)'}`, background: active ? 'rgba(124,58,237,0.2)' : 'var(--surface)', color: active ? 'var(--primary-light)' : 'var(--muted)', fontSize: 12, fontWeight: active ? 600 : 400, fontFamily: 'var(--font-mono)', cursor: 'pointer', transition: 'all 0.15s' }}>
                      {active && '✓ '}{s}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Year */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Year of Study</div>
          <div style={{ display: 'flex', gap: 8 }}>
            {['1st Year', '2nd Year', '3rd Year', '4th Year', 'Postgrad'].map((y) => (
              <button key={y} onClick={() => setYearOfStudy(y)} style={{ flex: 1, padding: '9px 4px', borderRadius: 8, border: `1px solid ${yearOfStudy === y ? 'rgba(249,115,22,0.5)' : 'var(--border)'}`, background: yearOfStudy === y ? 'rgba(249,115,22,0.12)' : 'var(--surface)', color: yearOfStudy === y ? 'var(--accent)' : 'var(--muted)', fontSize: 11, fontWeight: 600, cursor: 'pointer', transition: 'all 0.15s' }}>
                {y}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button className="btn-ghost" onClick={() => navigate('/onboarding')}>← Back</button>
          <button className="btn-primary" disabled={selected.length === 0 || !yearOfStudy || loading} onClick={handleFinish} style={{ padding: '11px 28px' }}>
            {loading ? 'Setting up…' : '🚀 Enter Nexora'}
          </button>
        </div>
      </div>
    </div>
  );
}
