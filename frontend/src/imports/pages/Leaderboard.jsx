import AppLayout from '../components/AppLayout';
import { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';

const users = [
  { rank: 1, name: 'Arjun Mehta', college: 'NIT Warangal', tier: 'Tier 2', points: 4820, communities: 3, projects: 5, streak: 42, avatar: 'AM', badge: '🥇' },
  { rank: 2, name: 'Sneha Iyer', college: 'IIT Bombay', tier: 'IIT', points: 4310, communities: 2, projects: 4, streak: 38, avatar: 'SI', badge: '🥈' },
  { rank: 3, name: 'Rohit Nair', college: 'VIT Vellore', tier: 'Tier 2', points: 3980, communities: 2, projects: 3, streak: 30, avatar: 'RN', badge: '🥉' },
  { rank: 4, name: 'Priya Sharma', college: 'BITS Pilani', tier: 'Tier 2', points: 3650, communities: 3, projects: 4, streak: 25, avatar: 'PS', badge: null },
  { rank: 5, name: 'Karan Verma', college: 'IIT Delhi', tier: 'IIT', points: 3240, communities: 2, projects: 2, streak: 21, avatar: 'KV', badge: null },
  { rank: 6, name: 'Anika Rao', college: 'Manipal Institute', tier: 'Tier 2', points: 2980, communities: 1, projects: 3, streak: 19, avatar: 'AR', badge: null },
  { rank: 7, name: 'Vijay Kumar', college: 'JNTU Hyderabad', tier: 'Tier 3', points: 2710, communities: 2, projects: 3, streak: 16, avatar: 'VK', badge: null },
  { rank: 8, name: 'Meera Singh', college: 'Amity University', tier: 'Tier 3', points: 2450, communities: 1, projects: 2, streak: 14, avatar: 'MS', badge: null },
  { rank: 9, name: 'Divya Pillai', college: 'IIT Madras', tier: 'IIT', points: 2200, communities: 1, projects: 2, streak: 12, avatar: 'DP', badge: null },
  { rank: 10, name: 'Rahul Gupta', college: 'NIT Warangal', tier: 'Tier 2', points: 1980, communities: 2, projects: 1, streak: 10, avatar: 'RG', badge: null },
];

const tierColor = { IIT: 'var(--accent)', 'Tier 2': '#A78BFA', 'Tier 3': 'var(--green)' };

export default function Leaderboard() {
  const user = useAuthStore((s) => s.user);
  const [scope, setScope] = useState('global');

  const top3 = users.slice(0, 3);

  return (
    <AppLayout>
      <div className="page-body">
        <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 4 }}>Leaderboard</h1>
        <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 20 }}>Rankings based on contributions, sprints, and community impact.</p>

        {/* Scope */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 24 }}>
          {['global', 'college', 'community'].map((s) => (
            <button key={s} onClick={() => setScope(s)} style={{ padding: '7px 16px', borderRadius: 8, border: `1px solid ${scope === s ? 'rgba(124,58,237,0.5)' : 'var(--border)'}`, background: scope === s ? 'rgba(124,58,237,0.15)' : 'var(--surface)', color: scope === s ? 'var(--primary-light)' : 'var(--muted)', fontSize: 12, fontWeight: 500, cursor: 'pointer', transition: 'all 0.15s', textTransform: 'capitalize' }}>{s}</button>
          ))}
        </div>

        {/* Top 3 podium */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', alignItems: 'flex-end', marginBottom: 28, padding: '16px' }}>
          {[top3[1], top3[0], top3[2]].map((u, idx) => {
            const heights = [100, 128, 90];
            const isFirst = idx === 1;
            return (
              <div key={u.rank} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, flex: 1, maxWidth: 160 }}>
                <div style={{ fontSize: isFirst ? 22 : 16 }}>{u.badge}</div>
                <div style={{ width: isFirst ? 54 : 44, height: isFirst ? 54 : 44, borderRadius: '50%', background: isFirst ? 'linear-gradient(135deg,var(--primary),var(--accent))' : 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: isFirst ? 16 : 12, fontWeight: 700, color: '#fff', border: isFirst ? '2px solid var(--accent)' : 'none' }}>{u.avatar}</div>
                <div style={{ fontSize: isFirst ? 14 : 12, fontWeight: 700, color: 'var(--text)', textAlign: 'center' }}>{u.name.split(' ')[0]}</div>
                <div style={{ fontSize: 10, color: 'var(--muted)', textAlign: 'center' }}>{u.college}</div>
                <div style={{ height: heights[idx], width: '100%', background: isFirst ? 'rgba(124,58,237,0.2)' : 'var(--surface)', borderRadius: '8px 8px 0 0', border: `1px solid ${isFirst ? 'rgba(124,58,237,0.4)' : 'var(--border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: isFirst ? 20 : 16, color: isFirst ? 'var(--primary-light)' : 'var(--muted)' }}>{u.points.toLocaleString()}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full table */}
        <div style={{ border: '1px solid var(--border)', borderRadius: 14, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr 120px 80px 70px 70px 80px', gap: 0, background: 'var(--surface-2)', padding: '10px 16px', fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid var(--border)' }}>
            <span>Rank</span><span>Student</span><span>Tier</span><span>Points</span><span>Comms</span><span>Proj</span><span>Streak</span>
          </div>
          {users.map((u, i) => {
            const isMe = u.name === (user?.name ?? 'Demo User');
            return (
              <div key={u.rank} style={{ display: 'grid', gridTemplateColumns: '48px 1fr 120px 80px 70px 70px 80px', gap: 0, padding: '12px 16px', borderBottom: i < users.length - 1 ? '1px solid var(--border)' : 'none', background: isMe ? 'rgba(124,58,237,0.08)' : i % 2 === 0 ? 'var(--surface)' : 'var(--bg)', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: u.rank <= 3 ? ['#FFD700', '#C0C0C0', '#CD7F32'][u.rank - 1] : 'var(--faint)' }}>
                  {u.badge || `#${u.rank}`}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: '#fff', flexShrink: 0 }}>{u.avatar}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: isMe ? 'var(--primary-light)' : 'var(--text)' }}>{u.name}{isMe && ' (you)'}</div>
                    <div style={{ fontSize: 10, color: 'var(--muted)' }}>{u.college}</div>
                  </div>
                </div>
                <span><span className="badge" style={{ padding: '2px 7px', borderRadius: 999, background: `${tierColor[u.tier]}18`, color: tierColor[u.tier] }}>{u.tier}</span></span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--text)' }}>{u.points.toLocaleString()}</span>
                <span style={{ fontSize: 12, color: 'var(--muted)', textAlign: 'center' }}>{u.communities}</span>
                <span style={{ fontSize: 12, color: 'var(--muted)', textAlign: 'center' }}>{u.projects}</span>
                <span style={{ fontSize: 12, color: 'var(--green)', fontFamily: 'var(--font-mono)', textAlign: 'center' }}>🔥{u.streak}d</span>
              </div>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
}
