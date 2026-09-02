import AppLayout from '../components/AppLayout';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const members = [
  { name: 'Arjun Mehta', role: 'Lead', college: 'NIT Warangal', skills: ['PyTorch', 'Python'], avatar: 'AM', online: true },
  { name: 'Sneha Iyer', role: 'Member', college: 'IIT Bombay', skills: ['Computer Vision'], avatar: 'SI', online: true },
  { name: 'Rohit Nair', role: 'Member', college: 'VIT', skills: ['ML Research'], avatar: 'RN', online: false },
  { name: 'Priya Sharma', role: 'Member', college: 'BITS Pilani', skills: ['Data Science'], avatar: 'PS', online: true },
  { name: 'Karan Verma', role: 'Member', college: 'IIT Delhi', skills: ['NLP'], avatar: 'KV', online: false },
  { name: 'Anika Rao', role: 'Member', college: 'Manipal', skills: ['Python', 'Research'], avatar: 'AR', online: false },
  { name: 'Vijay Kumar', role: 'Member', college: 'JNTU', skills: ['TensorFlow'], avatar: 'VK', online: true },
  { name: 'Meera Singh', role: 'Member', college: 'Amity', skills: ['Statistics'], avatar: 'MS', online: false },
];

const tasks = [
  { title: 'Collect and clean satellite dataset', status: 'done', assignee: 'Arjun Mehta' },
  { title: 'Implement baseline ResNet model', status: 'done', assignee: 'Sneha Iyer' },
  { title: 'Train on augmented dataset', status: 'active', assignee: 'Rohit Nair' },
  { title: 'Evaluate F1 score and confusion matrix', status: 'active', assignee: 'Priya Sharma' },
  { title: 'Write model comparison report', status: 'pending', assignee: 'Unassigned' },
  { title: 'Deploy API endpoint for demo', status: 'pending', assignee: 'Unassigned' },
];

const statusColor = { done: 'var(--green)', active: 'var(--accent)', pending: 'var(--faint)' };

export default function CommunityDetails() {
  const navigate = useNavigate();
  const [tab, setTab] = useState('overview');

  return (
    <AppLayout>
      <div className="page-body">
        {/* Back */}
        <button className="btn-ghost" style={{ padding: '6px 0', fontSize: 12, marginBottom: 16 }} onClick={() => navigate('/community')}>← Back to Communities</button>

        {/* Header card */}
        <div className="card" style={{ marginBottom: 20, padding: '24px 28px', background: 'linear-gradient(135deg,rgba(124,58,237,0.12),rgba(249,115,22,0.06))', borderColor: 'rgba(124,58,237,0.3)' }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, flexShrink: 0 }}>🧠</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
                <h1 style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em' }}>ML Explorers</h1>
                <span className="badge" style={{ padding: '3px 8px', borderRadius: 999, background: 'rgba(249,115,22,0.15)', color: 'var(--accent)' }}>Research</span>
                <span className="badge" style={{ padding: '3px 8px', borderRadius: 999, background: 'rgba(124,58,237,0.12)', color: '#A78BFA' }}>Tier 2</span>
                <span className="badge" style={{ padding: '3px 8px', borderRadius: 999, background: 'rgba(124,58,237,0.2)', color: 'var(--primary-light)' }}>✦ Featured</span>
              </div>
              <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, maxWidth: 560 }}>Building a real-world crop disease detection model using satellite imagery. Weekly paper readings + coding sessions.</p>
              <div style={{ display: 'flex', gap: 16, marginTop: 12, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 11, color: 'var(--muted)' }}>Led by <span style={{ color: 'var(--text)', fontWeight: 600 }}>Arjun Mehta</span></span>
                <span style={{ fontSize: 11, color: 'var(--muted)' }}>NIT Warangal</span>
                <span style={{ fontSize: 11, color: 'var(--green)' }}>Sprint active · Week 4</span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: 'var(--text)' }}>8<span style={{ color: 'var(--muted)', fontSize: 16, fontWeight: 400 }}>/10</span></div>
              <div style={{ fontSize: 11, color: 'var(--muted)' }}>members</div>
              <button className="btn-primary" style={{ padding: '7px 16px', fontSize: 12, marginTop: 10 }}>Request Join</button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 20, borderBottom: '1px solid var(--border)', paddingBottom: 0 }}>
          {['overview', 'members', 'tasks'].map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: '9px 16px', borderRadius: '8px 8px 0 0', fontSize: 13, fontWeight: 500, border: 'none', background: tab === t ? 'var(--surface)' : 'transparent', color: tab === t ? 'var(--text)' : 'var(--muted)', borderBottom: tab === t ? '2px solid var(--primary)' : '2px solid transparent', cursor: 'pointer', transition: 'all 0.15s', textTransform: 'capitalize' }}>
              {t}
            </button>
          ))}
        </div>

        {/* Tab: Overview */}
        {tab === 'overview' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { label: 'Focus Area', value: 'Crop Disease Detection via Satellite Imagery' },
              { label: 'Tech Stack', value: 'Python, PyTorch, scikit-learn, FastAPI' },
              { label: 'Sprint Cadence', value: 'Weekly — Mon kickoff, Sun retrospective' },
              { label: 'Current Sprint Goal', value: 'Train model on augmented dataset, achieve >85% F1' },
            ].map((item) => (
              <div key={item.label} className="card">
                <div style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--font-mono)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500 }}>{item.value}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tab: Members */}
        {tab === 'members' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 12 }}>
            {members.map((m) => (
              <div key={m.name} className="card" style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ position: 'relative', flexShrink: 0 }}>
                  <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#fff' }}>{m.avatar}</div>
                  {m.online && <div style={{ position: 'absolute', bottom: 0, right: 0, width: 10, height: 10, borderRadius: '50%', background: 'var(--green)', border: '2px solid var(--surface)' }} />}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{m.name}</div>
                  <div style={{ fontSize: 11, color: m.role === 'Lead' ? 'var(--accent)' : 'var(--muted)', marginBottom: 4 }}>{m.role} · {m.college}</div>
                  <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                    {m.skills.map((s) => <span key={s} style={{ fontFamily: 'var(--font-mono)', fontSize: 9, padding: '1px 5px', borderRadius: 3, background: 'var(--surface-2)', color: 'var(--faint)', border: '1px solid var(--border)' }}>{s}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab: Tasks */}
        {tab === 'tasks' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {tasks.map((t, i) => (
              <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px' }}>
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: `${statusColor[t.status]}20`, border: `2px solid ${statusColor[t.status]}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: statusColor[t.status], flexShrink: 0, fontFamily: 'var(--font-mono)' }}>
                  {t.status === 'done' ? '✓' : t.status === 'active' ? '▶' : '·'}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, color: t.status === 'done' ? 'var(--muted)' : 'var(--text)', textDecoration: t.status === 'done' ? 'line-through' : 'none' }}>{t.title}</div>
                </div>
                <div style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>{t.assignee}</div>
                <span className="badge" style={{ padding: '2px 8px', borderRadius: 999, background: `${statusColor[t.status]}15`, color: statusColor[t.status] }}>{t.status}</span>
              </div>
            ))}
            <button className="btn-outline" style={{ marginTop: 8, fontSize: 12 }}>+ Add Task</button>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
