import AppLayout from '../components/AppLayout';
import { useState } from 'react';

const contests = [
  { id: 1, name: 'Nexora Weekly #42', platform: 'In-App', duration: '2h', starts: 'Tomorrow, 8 PM', difficulty: 'Mixed', problems: 4, participants: 312, status: 'upcoming', prize: 'Leaderboard Points' },
  { id: 2, name: 'Codeforces Round #900', platform: 'Codeforces', duration: '2h30m', starts: 'Saturday, 9 PM', difficulty: 'Advanced', problems: 6, participants: 8200, status: 'upcoming', prize: 'Rating' },
  { id: 3, name: 'LeetCode Weekly #378', platform: 'LeetCode', duration: '1h30m', starts: 'Sunday, 10 AM', difficulty: 'Mixed', problems: 4, participants: 12400, status: 'upcoming', prize: 'LeetCoin' },
  { id: 4, name: 'Nexora Monthly April', platform: 'In-App', duration: '3h', starts: 'Apr 30, 7 PM', difficulty: 'Medium', problems: 5, participants: 520, status: 'upcoming', prize: '₹5,000 Cash' },
  { id: 5, name: 'Nexora Weekly #41', platform: 'In-App', duration: '2h', starts: 'Ended', difficulty: 'Mixed', problems: 4, participants: 289, status: 'ended', prize: 'Leaderboard Points', myRank: 23 },
  { id: 6, name: 'AtCoder Beginner #340', platform: 'AtCoder', duration: '1h40m', starts: 'Ended', difficulty: 'Beginner', problems: 7, participants: 6100, status: 'ended', prize: 'Rating', myRank: 142 },
];

const statusStyle = {
  upcoming: { bg: 'rgba(16,185,129,0.12)', color: 'var(--green)', label: 'Upcoming' },
  live: { bg: 'rgba(249,115,22,0.15)', color: 'var(--accent)', label: '● Live' },
  ended: { bg: 'rgba(42,45,69,0.6)', color: 'var(--faint)', label: 'Ended' },
};

export default function Contests() {
  const [tab, setTab] = useState('upcoming');

  const filtered = contests.filter((c) => tab === 'all' || c.status === tab || (tab === 'upcoming' && c.status === 'live'));

  return (
    <AppLayout>
      <div className="page-body">
        <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 4 }}>Contests</h1>
        <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 20 }}>Compete with your community. Win together.</p>

        <div style={{ display: 'flex', gap: 4, marginBottom: 20, borderBottom: '1px solid var(--border)', paddingBottom: 0 }}>
          {['upcoming', 'ended', 'all'].map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: '8px 16px', borderRadius: '8px 8px 0 0', fontSize: 13, fontWeight: 500, border: 'none', background: tab === t ? 'var(--surface)' : 'transparent', color: tab === t ? 'var(--text)' : 'var(--muted)', borderBottom: tab === t ? '2px solid var(--primary)' : '2px solid transparent', cursor: 'pointer', transition: 'all 0.15s', textTransform: 'capitalize' }}>
              {t === 'upcoming' ? 'Upcoming' : t === 'ended' ? 'Past' : 'All'}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {filtered.map((c) => {
            const st = statusStyle[c.status];
            return (
              <div key={c.id} className="card" style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: 220 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15 }}>{c.name}</span>
                    <span className="badge" style={{ padding: '2px 7px', borderRadius: 999, background: st.bg, color: st.color }}>{st.label}</span>
                    {c.prize === '₹5,000 Cash' && <span className="badge" style={{ padding: '2px 7px', borderRadius: 999, background: 'rgba(249,115,22,0.15)', color: 'var(--accent)' }}>💰 Cash Prize</span>}
                  </div>
                  <div style={{ display: 'flex', gap: 16, fontSize: 12, color: 'var(--muted)', flexWrap: 'wrap' }}>
                    <span>⏰ {c.starts}</span>
                    <span>⌛ {c.duration}</span>
                    <span>◈ {c.problems} problems</span>
                    <span>◉ {c.participants.toLocaleString()} participants</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexShrink: 0 }}>
                  {c.myRank && <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: 'var(--primary-light)' }}>#{c.myRank}</div>
                    <div style={{ fontSize: 10, color: 'var(--muted)' }}>your rank</div>
                  </div>}
                  <button className={c.status === 'ended' ? 'btn-ghost' : 'btn-primary'} style={{ padding: '8px 18px', fontSize: 12, whiteSpace: 'nowrap' }}>
                    {c.status === 'ended' ? 'View Results' : c.status === 'live' ? '● Enter' : 'Register'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
}
