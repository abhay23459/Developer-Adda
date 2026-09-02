import AppLayout from '../components/AppLayout';
import { useAuthStore } from '../store/useAuthStore';

const contributions = [
  { month: 'Jan', count: 12 }, { month: 'Feb', count: 20 }, { month: 'Mar', count: 8 },
  { month: 'Apr', count: 35 }, { month: 'May', count: 28 }, { month: 'Jun', count: 15 },
];

const badges = [
  { icon: '🚀', name: 'First Ship', desc: 'Shipped your first project' },
  { icon: '🔥', name: '30-Day Streak', desc: 'Active for 30 days straight' },
  { icon: '◉', name: 'Community Builder', desc: 'Created 2+ communities' },
  { icon: '⭐', name: 'Top Contributor', desc: 'Top 10 on leaderboard' },
];

const projects = [
  { name: 'CropScan ML', status: 'active', stars: 24, role: 'Lead Dev' },
  { name: 'VS Code Snippets', status: 'active', stars: 41, role: 'Contributor' },
  { name: 'College LMS Redesign', status: 'shipped', stars: 33, role: 'Designer' },
];

export default function Profile() {
  const user = useAuthStore((s) => s.user);
  const maxCount = Math.max(...contributions.map((c) => c.count));

  return (
    <AppLayout>
      <div className="page-body">
        {/* Profile header */}
        <div className="card" style={{ marginBottom: 20, padding: '28px 32px', background: 'linear-gradient(135deg,rgba(124,58,237,0.1),rgba(249,115,22,0.05))', borderColor: 'rgba(124,58,237,0.3)' }}>
          <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg,var(--primary),var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 800, color: '#fff', flexShrink: 0, border: '3px solid rgba(124,58,237,0.4)' }}>
              {(user?.name ?? 'U')[0]}
            </div>
            <div style={{ flex: 1 }}>
              <h1 style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 4 }}>{user?.name ?? 'Student'}</h1>
              <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 10 }}>{user?.college ?? 'College'} · {user?.tier ?? 'Tier 2'} · {user?.yearOfStudy ?? '3rd Year'}</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {(user?.skills ?? ['Python', 'ML', 'React']).slice(0, 5).map((s) => (
                  <span key={s} style={{ fontFamily: 'var(--font-mono)', fontSize: 10, padding: '3px 9px', borderRadius: 6, background: 'rgba(124,58,237,0.12)', color: 'var(--primary-light)', border: '1px solid rgba(124,58,237,0.25)' }}>{s}</span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 24, flexShrink: 0 }}>
              {[['4,820', 'Points'], ['2', 'Comms'], ['3', 'Projects'], ['42d', 'Streak']].map(([v, l]) => (
                <div key={l} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: 'var(--text)' }}>{v}</div>
                  <div style={{ fontSize: 10, color: 'var(--muted)' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Activity chart */}
            <div className="card">
              <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>Contribution Activity</h2>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, height: 80 }}>
                {contributions.map((c) => (
                  <div key={c.month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: '100%', height: `${(c.count / maxCount) * 64}px`, borderRadius: '4px 4px 0 0', background: `linear-gradient(to top, var(--primary), var(--primary-light))`, opacity: 0.7 + (c.count / maxCount) * 0.3, transition: 'height 0.4s ease', minHeight: 4 }} />
                    <span style={{ fontSize: 10, color: 'var(--faint)', fontFamily: 'var(--font-mono)' }}>{c.month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="card">
              <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 14 }}>Projects</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {projects.map((p) => (
                  <div key={p.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: 10, background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 13 }}>{p.name}</div>
                      <div style={{ fontSize: 11, color: 'var(--muted)' }}>{p.role}</div>
                    </div>
                    <div style={{ display: 'flex', align: 'center', gap: 10 }}>
                      <span style={{ fontSize: 11, color: 'var(--muted)' }}>⭐ {p.stars}</span>
                      <span className="badge" style={{ padding: '2px 7px', borderRadius: 999, background: p.status === 'shipped' ? 'rgba(124,58,237,0.15)' : 'rgba(16,185,129,0.12)', color: p.status === 'shipped' ? 'var(--primary-light)' : 'var(--green)' }}>{p.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="card" style={{ alignSelf: 'flex-start' }}>
            <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 14 }}>Badges</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {badges.map((b) => (
                <div key={b.name} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '10px 14px', borderRadius: 10, background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(124,58,237,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{b.icon}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700 }}>{b.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--muted)' }}>{b.desc}</div>
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
