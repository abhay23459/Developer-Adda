import AppLayout from '../components/AppLayout';
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

const statsCards = [
  { label: 'My Communities', value: '2', icon: '◉', color: 'var(--primary)', delta: '+1 this month' },
  { label: 'Projects Active', value: '3', icon: '◈', color: 'var(--accent)', delta: '2 on track' },
  { label: 'Sprint Streak', value: '8 days', icon: '⚡', color: 'var(--green)', delta: 'Personal best!' },
  { label: 'Profile Views', value: '142', icon: '◯', color: '#A78BFA', delta: '+18 this week' },
];

const myCommunitys = [
  { name: 'ML Explorers', role: 'Member', members: 8, category: 'Research', nextSprint: 'Tomorrow', progress: 65 },
  { name: 'Zero to SaaS', role: 'Lead', members: 6, category: 'Startup', nextSprint: 'Today', progress: 40 },
];

const suggestedCommunities = [
  { name: 'Open Web Guild', members: 7, category: 'Projects', tags: ['TypeScript', 'OSS'], avatar: '🌐', spots: 3 },
  { name: 'Blockchain Builders', members: 5, category: 'Research', tags: ['Solana'], avatar: '⛓️', spots: 5 },
  { name: 'Design Systems Lab', members: 9, category: 'Skills', tags: ['Figma'], avatar: '🎨', spots: 1 },
];

const recentActivity = [
  { text: 'Arjun completed sprint task: "Train baseline model"', time: '2h ago', icon: '✓' },
  { text: 'New member joined ML Explorers: Sneha Iyer', time: '4h ago', icon: '◉' },
  { text: 'Zero to SaaS shared milestone: "MVP shipped!"', time: '1d ago', icon: '🚀' },
  { text: 'DSA contest starting in 2 days', time: '1d ago', icon: '⚡' },
];

export default function Dashboard() {
  const user = useAuthStore((s) => s.user);
  const navigate = useNavigate();
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <AppLayout>
      <div className="page-body">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <p style={{ color: 'var(--muted)', fontSize: 13, marginBottom: 4 }}>{greeting} 👋</p>
            <h1 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 2 }}>{user?.name ?? 'Student'}</h1>
            <p style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>{user?.college} · {user?.tier}</p>
          </div>
          <button className="btn-primary" onClick={() => navigate('/community')} style={{ padding: '9px 20px', fontSize: 13 }}>
            + New Community
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 14, marginBottom: 28 }}>
          {statsCards.map((s) => (
            <div key={s.label} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 13, color: 'var(--muted)' }}>{s.label}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 16, color: s.color }}>{s.icon}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: 'var(--text)' }}>{s.value}</div>
              <div style={{ fontSize: 11, color: 'var(--green)', display: 'flex', alignItems: 'center', gap: 4 }}>
                <span>↑</span>{s.delta}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20, alignItems: 'start' }}>
          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* My communities */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <h2 style={{ fontSize: 16, fontWeight: 700 }}>My Communities</h2>
                <button className="btn-ghost" style={{ padding: '4px 10px', fontSize: 12 }} onClick={() => navigate('/community')}>View all</button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {myCommunitys.map((c) => (
                  <div key={c.name} className="card" style={{ cursor: 'pointer' }} onClick={() => navigate('/community/details')}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                      <div>
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15 }}>{c.name}</span>
                        <span className="badge" style={{ marginLeft: 8, padding: '2px 8px', borderRadius: 999, background: c.role === 'Lead' ? 'rgba(249,115,22,0.15)' : 'rgba(124,58,237,0.12)', color: c.role === 'Lead' ? 'var(--accent)' : 'var(--primary-light)' }}>{c.role}</span>
                      </div>
                      <span style={{ fontSize: 12, color: 'var(--muted)' }}>{c.members}/10 members</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 12, color: 'var(--muted)', marginBottom: 10 }}>
                      <span>Next sprint: <span style={{ color: c.nextSprint === 'Today' ? 'var(--green)' : 'var(--text)', fontWeight: 600 }}>{c.nextSprint}</span></span>
                      <span>{c.progress}% complete</span>
                    </div>
                    <div style={{ height: 4, borderRadius: 2, background: 'var(--surface-2)', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${c.progress}%`, background: 'linear-gradient(90deg,var(--primary),var(--primary-light))', borderRadius: 2 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggested */}
            <div>
              <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 14 }}>Recommended for You</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {suggestedCommunities.map((c) => (
                  <div key={c.name} className="card" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{c.avatar}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{c.name}</div>
                      <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                        {c.tags.map((t) => <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 9, padding: '1px 6px', borderRadius: 4, background: 'var(--surface-2)', color: 'var(--muted)', border: '1px solid var(--border)' }}>{t}</span>)}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontSize: 11, color: 'var(--green)', marginBottom: 6 }}>{c.spots} spots</div>
                      <button className="btn-primary" style={{ padding: '5px 12px', fontSize: 11 }}>Join</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — activity */}
          <div>
            <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 14 }}>Recent Activity</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {recentActivity.map((a, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '12px 14px', background: 'var(--surface)', borderRadius: 10, marginBottom: 6 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(124,58,237,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: 'var(--primary-light)', flexShrink: 0, fontFamily: 'var(--font-mono)' }}>{a.icon}</div>
                  <div>
                    <div style={{ fontSize: 12, color: 'var(--text)', lineHeight: 1.5, marginBottom: 3 }}>{a.text}</div>
                    <div style={{ fontSize: 10, color: 'var(--faint)', fontFamily: 'var(--font-mono)' }}>{a.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
