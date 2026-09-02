import AppLayout from '../components/AppLayout';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const projects = [
  { id: 1, name: 'CropScan ML', community: 'ML Explorers', status: 'active', stack: ['Python', 'PyTorch', 'FastAPI'], progress: 65, milestone: 'Model training', members: 8, stars: 24, desc: 'Satellite imagery based crop disease detection using CNN models.' },
  { id: 2, name: 'InvoiceFlow', community: 'Zero to SaaS', status: 'active', stack: ['React', 'Node.js', 'Stripe'], progress: 40, milestone: 'Launch prep', members: 6, stars: 18, desc: 'B2B invoicing tool for small Indian businesses with UPI integration.' },
  { id: 3, name: 'VS Code Snippets', community: 'Open Web Guild', status: 'active', stack: ['TypeScript', 'VS Code API'], progress: 80, milestone: 'Extension publish', members: 7, stars: 41, desc: 'Smart code snippet manager extension for VS Code with AI completions.' },
  { id: 4, name: 'SolanaStake UI', community: 'Blockchain Builders', status: 'planning', stack: ['Rust', 'React', 'Solana'], progress: 15, milestone: 'Architecture', members: 5, stars: 9, desc: 'Clean UI for staking on Solana with real-time APY calculations.' },
  { id: 5, name: 'Campus LMS Redesign', community: 'Design Systems Lab', status: 'active', stack: ['Figma', 'React', 'Tailwind'], progress: 55, milestone: 'Prototype v2', members: 9, stars: 33, desc: 'Redesigning the terrible LMS used by 50+ colleges with proper UX.' },
  { id: 6, name: 'AutoBot SIH', community: 'Robotics Crew', status: 'shipped', stack: ['ROS', 'Python', 'Arduino'], progress: 100, milestone: 'Shipped!', members: 10, stars: 56, desc: 'Autonomous bot that won Smart India Hackathon 2024.' },
];

const statusStyle = {
  active: { bg: 'rgba(16,185,129,0.12)', color: 'var(--green)', dot: 'var(--green)' },
  planning: { bg: 'rgba(249,115,22,0.12)', color: 'var(--accent)', dot: 'var(--accent)' },
  shipped: { bg: 'rgba(124,58,237,0.15)', color: 'var(--primary-light)', dot: 'var(--primary)' },
};

export default function Projects() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  const filtered = projects.filter((p) => filter === 'All' || p.status === filter.toLowerCase());

  return (
    <AppLayout>
      <div className="page-body">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 4 }}>Projects</h1>
            <p style={{ fontSize: 13, color: 'var(--muted)' }}>{projects.filter((p) => p.status === 'active').length} active projects across all communities</p>
          </div>
        </div>

        {/* Filter */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
          {['All', 'Active', 'Planning', 'Shipped'].map((f) => (
            <button key={f} onClick={() => setFilter(f)} style={{ padding: '7px 14px', borderRadius: 8, border: `1px solid ${filter === f ? 'rgba(124,58,237,0.5)' : 'var(--border)'}`, background: filter === f ? 'rgba(124,58,237,0.15)' : 'var(--surface)', color: filter === f ? 'var(--primary-light)' : 'var(--muted)', fontSize: 12, fontWeight: 500, cursor: 'pointer', transition: 'all 0.15s' }}>{f}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 16 }}>
          {filtered.map((p) => {
            const st = statusStyle[p.status];
            return (
              <div key={p.id} className="card hover-lift" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }} onClick={() => navigate('/projects/details')}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4, letterSpacing: '-0.01em' }}>{p.name}</h3>
                    <div style={{ fontSize: 11, color: 'var(--muted)' }}>by <span style={{ color: 'var(--primary-light)' }}>{p.community}</span></div>
                  </div>
                  <span className="badge" style={{ padding: '3px 8px', borderRadius: 999, background: st.bg, color: st.color, display: 'flex', alignItems: 'center', gap: 4, whiteSpace: 'nowrap' }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: st.dot, display: 'inline-block' }} />{p.status}
                  </span>
                </div>
                <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 12, flex: 1 }}>{p.desc}</p>
                <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: 12 }}>
                  {p.stack.map((s) => <span key={s} style={{ fontFamily: 'var(--font-mono)', fontSize: 9, padding: '2px 7px', borderRadius: 4, background: 'var(--surface-2)', color: 'var(--muted)', border: '1px solid var(--border)' }}>{s}</span>)}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--muted)', marginBottom: 8 }}>
                  <span>Milestone: <span style={{ color: 'var(--text)', fontWeight: 500 }}>{p.milestone}</span></span>
                  <span>⭐ {p.stars}</span>
                </div>
                <div style={{ height: 4, borderRadius: 2, background: 'var(--surface-2)', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${p.progress}%`, background: p.progress === 100 ? 'var(--green)' : 'linear-gradient(90deg,var(--primary),var(--primary-light))', borderRadius: 2 }} />
                </div>
                <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 5, fontFamily: 'var(--font-mono)' }}>{p.progress}% complete · {p.members} contributors</div>
              </div>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
}
