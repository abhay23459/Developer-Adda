import AppLayout from '../components/AppLayout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const problems = [
  { id: 1, title: 'Two Sum', difficulty: 'Easy', topic: 'Arrays', status: 'solved', acceptance: '52%' },
  { id: 2, title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', topic: 'Sliding Window', status: 'solved', acceptance: '35%' },
  { id: 3, title: 'Median of Two Sorted Arrays', difficulty: 'Hard', topic: 'Binary Search', status: 'attempted', acceptance: '38%' },
  { id: 4, title: 'Valid Parentheses', difficulty: 'Easy', topic: 'Stack', status: 'solved', acceptance: '41%' },
  { id: 5, title: 'Merge K Sorted Lists', difficulty: 'Hard', topic: 'Heap', status: 'unsolved', acceptance: '49%' },
  { id: 6, title: 'Coin Change', difficulty: 'Medium', topic: 'DP', status: 'attempted', acceptance: '41%' },
  { id: 7, title: 'Word Ladder', difficulty: 'Hard', topic: 'BFS/Graph', status: 'unsolved', acceptance: '36%' },
  { id: 8, title: 'Maximum Subarray', difficulty: 'Medium', topic: 'DP', status: 'solved', acceptance: '50%' },
  { id: 9, title: 'Binary Tree Level Order Traversal', difficulty: 'Medium', topic: 'Tree/BFS', status: 'solved', acceptance: '66%' },
  { id: 10, title: 'Course Schedule', difficulty: 'Medium', topic: 'Graph/Topological', status: 'unsolved', acceptance: '45%' },
];

const diffColor = { Easy: 'var(--green)', Medium: 'var(--accent)', Hard: 'var(--red)' };
const statusColor = { solved: 'var(--green)', attempted: 'var(--accent)', unsolved: 'var(--faint)' };
const statusIcon = { solved: '✓', attempted: '~', unsolved: '·' };

const topics = ['All', 'Arrays', 'Sliding Window', 'Binary Search', 'Stack', 'DP', 'Heap', 'Graph', 'Tree'];
const stats = [
  { label: 'Solved', value: '142', color: 'var(--green)' },
  { label: 'Attempted', value: '38', color: 'var(--accent)' },
  { label: 'Total', value: '450', color: 'var(--muted)' },
  { label: 'Streak', value: '14 days', color: 'var(--primary-light)' },
];

export default function DSA() {
  const navigate = useNavigate();
  const [topic, setTopic] = useState('All');
  const [diff, setDiff] = useState('All');

  const filtered = problems.filter((p) => {
    const matchTopic = topic === 'All' || p.topic.includes(topic);
    const matchDiff = diff === 'All' || p.difficulty === diff;
    return matchTopic && matchDiff;
  });

  return (
    <AppLayout>
      <div className="page-body">
        <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 4 }}>DSA Practice</h1>
        <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 20 }}>Sharpen your problem-solving skills with your community.</p>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 24 }}>
          {stats.map((s) => (
            <div key={s.label} className="card" style={{ textAlign: 'center', padding: '16px 12px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, color: s.color, marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: 11, color: 'var(--muted)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
          <div style={{ display: 'flex', gap: 5 }}>
            {['All', 'Easy', 'Medium', 'Hard'].map((d) => (
              <button key={d} onClick={() => setDiff(d)} style={{ padding: '6px 12px', borderRadius: 7, border: `1px solid ${diff === d ? (diffColor[d] || 'rgba(124,58,237,0.5)') : 'var(--border)'}`, background: diff === d ? `${diffColor[d] || 'rgba(124,58,237,0.5)'}18` : 'var(--surface)', color: diff === d ? (diffColor[d] || 'var(--primary-light)') : 'var(--muted)', fontSize: 12, cursor: 'pointer', transition: 'all 0.15s' }}>{d}</button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
            {topics.slice(0, 5).map((t) => (
              <button key={t} onClick={() => setTopic(t)} className="badge" style={{ padding: '6px 10px', borderRadius: 7, border: `1px solid ${topic === t ? 'rgba(124,58,237,0.5)' : 'var(--border)'}`, background: topic === t ? 'rgba(124,58,237,0.12)' : 'var(--surface)', color: topic === t ? 'var(--primary-light)' : 'var(--muted)', cursor: 'pointer', transition: 'all 0.15s' }}>{t}</button>
            ))}
          </div>
        </div>

        {/* Problem list */}
        <div style={{ border: '1px solid var(--border)', borderRadius: 14, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr 100px 130px 80px 80px', gap: 0, background: 'var(--surface-2)', padding: '10px 16px', fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid var(--border)' }}>
            <span>#</span><span>Title</span><span>Difficulty</span><span>Topic</span><span>Status</span><span>Accept</span>
          </div>
          {filtered.map((p, i) => (
            <div key={p.id} role="button" tabIndex={0} onClick={() => navigate('/compiler', { state: { problem: p } })} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') navigate('/compiler', { state: { problem: p } }); }} style={{ display: 'grid', gridTemplateColumns: '40px 1fr 100px 130px 80px 80px', gap: 0, padding: '12px 16px', borderBottom: i < filtered.length - 1 ? '1px solid var(--border)' : 'none', background: i % 2 === 0 ? 'var(--surface)' : 'var(--bg)', cursor: 'pointer', transition: 'background 0.12s' }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(124,58,237,0.05)'}
              onMouseLeave={(e) => e.currentTarget.style.background = i % 2 === 0 ? 'var(--surface)' : 'var(--bg)'}
            >
              <span style={{ fontSize: 11, color: 'var(--faint)', fontFamily: 'var(--font-mono)', alignSelf: 'center' }}>{p.id}</span>
              <span style={{ fontSize: 13, color: 'var(--text)', fontWeight: 500, alignSelf: 'center' }}>{p.title}</span>
              <span style={{ fontSize: 12, color: diffColor[p.difficulty], fontWeight: 600, alignSelf: 'center' }}>{p.difficulty}</span>
              <span style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--font-mono)', alignSelf: 'center' }}>{p.topic}</span>
              <span style={{ alignSelf: 'center' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11, color: statusColor[p.status], fontFamily: 'var(--font-mono)' }}>
                  {statusIcon[p.status]} {p.status}
                </span>
              </span>
              <span style={{ fontSize: 11, color: 'var(--muted)', alignSelf: 'center', fontFamily: 'var(--font-mono)' }}>{p.acceptance}</span>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
