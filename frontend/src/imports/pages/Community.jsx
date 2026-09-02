import { useState } from 'react';
import AppLayout from '../components/AppLayout';
import { useNavigate } from 'react-router-dom';

const communities = [
  { id: 1, name: 'ML Explorers', cat: 'Research', members: 8, tags: ['PyTorch', 'CV', 'Agriculture'], college: 'NIT Warangal', tier: 'Tier 2', avatar: '🧠', full: false, featured: true, lead: 'Arjun Mehta', desc: 'Building a real-world crop disease detection model using satellite imagery. Weekly paper readings.' },
  { id: 2, name: 'Zero to SaaS', cat: 'Startup', members: 6, tags: ['React', 'Stripe', 'Growth'], college: 'BITS Pilani', tier: 'Tier 2', avatar: '🚀', full: false, featured: true, lead: 'Priya Sharma', desc: 'First-time founders learning to ship fast. Currently building a B2B invoicing tool.' },
  { id: 3, name: 'DSA War Room', cat: 'Skills', members: 10, tags: ['LeetCode', 'System Design'], college: 'VIT Vellore', tier: 'Tier 2', avatar: '⚔️', full: true, featured: false, lead: 'Rohit Nair', desc: 'Cracking placement season together. Daily LeetCode targets and mock interviews.' },
  { id: 4, name: 'Open Web Guild', cat: 'Projects', members: 7, tags: ['TypeScript', 'OSS', 'DevTools'], college: 'IIT Bombay', tier: 'IIT', avatar: '🌐', full: false, featured: true, lead: 'Sneha Iyer', desc: 'Contributing to OSS projects as a team. Currently on a VS Code extension.' },
  { id: 5, name: 'Blockchain Builders', cat: 'Research', members: 5, tags: ['Solana', 'Rust', 'DeFi'], college: 'IIT Delhi', tier: 'IIT', avatar: '⛓️', full: false, featured: false, lead: 'Karan Verma', desc: 'Exploring DeFi protocols. No hype — just deep dives into actual technical challenges.' },
  { id: 6, name: 'Design Systems Lab', cat: 'Skills', members: 9, tags: ['Figma', 'Design Tokens'], college: 'Manipal Institute', tier: 'Tier 2', avatar: '🎨', full: false, featured: false, lead: 'Anika Rao', desc: 'Learning UI/UX through doing. Redesigning real apps used by college students.' },
  { id: 7, name: 'Robotics Crew', cat: 'Projects', members: 10, tags: ['ROS', 'Arduino', 'Python'], college: 'JNTU Hyderabad', tier: 'Tier 3', avatar: '🤖', full: true, featured: false, lead: 'Vijay Kumar', desc: 'Building an autonomous bot for Smart India Hackathon 2025.' },
  { id: 8, name: 'Content Creators Hub', cat: 'Skills', members: 3, tags: ['YouTube', 'LinkedIn'], college: 'Amity University', tier: 'Tier 3', avatar: '📹', full: false, featured: false, lead: 'Meera Singh', desc: 'Tech content creators helping each other grow. Peer reviews and collabs.' },
];

const catColor = { Research: 'var(--accent)', Skills: 'var(--green)', Startup: 'var(--red)', Projects: 'var(--primary)' };
const tierColor = { IIT: 'var(--accent)', 'Tier 2': '#A78BFA', 'Tier 3': 'var(--green)' };

export default function Community() {
  const navigate = useNavigate();
  const [cat, setCat] = useState('All');
  const [tier, setTier] = useState('All');
  const [search, setSearch] = useState('');
  const [creating, setCreating] = useState(false);

  const filtered = communities.filter((c) => {
    const matchCat = cat === 'All' || c.cat === cat;
    const matchTier = tier === 'All' || c.tier === tier;
    const matchSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchTier && matchSearch;
  });

  return (
    <AppLayout>
      <div className="page-body">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 4 }}>Communities</h1>
            <p style={{ fontSize: 13, color: 'var(--muted)' }}>Find your people. <span style={{ color: 'var(--green)' }}>{communities.filter((c) => !c.full).length} communities</span> with open spots.</p>
          </div>
          <button className="btn-primary" onClick={() => setCreating(true)} style={{ padding: '9px 18px', fontSize: 13 }}>+ Create Community</button>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
          <input className="field" placeholder="Search communities…" value={search} onChange={(e) => setSearch(e.target.value)} style={{ flex: '1 1 200px', maxWidth: 280 }} />
          <div style={{ display: 'flex', gap: 6 }}>
            {['All', 'Projects', 'Skills', 'Research', 'Startup'].map((c) => (
              <button key={c} onClick={() => setCat(c)} style={{ padding: '7px 14px', borderRadius: 8, border: `1px solid ${cat === c ? 'rgba(124,58,237,0.5)' : 'var(--border)'}`, background: cat === c ? 'rgba(124,58,237,0.15)' : 'var(--surface)', color: cat === c ? 'var(--primary-light)' : 'var(--muted)', fontSize: 12, fontWeight: 500, cursor: 'pointer', transition: 'all 0.15s' }}>{c}</button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {['All', 'IIT', 'Tier 2', 'Tier 3'].map((t) => (
              <button key={t} onClick={() => setTier(t)} className="badge" style={{ padding: '7px 12px', borderRadius: 8, border: `1px solid ${tier === t ? 'rgba(249,115,22,0.5)' : 'var(--border)'}`, background: tier === t ? 'rgba(249,115,22,0.12)' : 'var(--surface)', color: tier === t ? 'var(--accent)' : 'var(--muted)', cursor: 'pointer', transition: 'all 0.15s' }}>{t}</button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 16 }}>
          {filtered.map((c) => (
            <div key={c.id} className="card hover-lift" style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer', position: 'relative', overflow: 'hidden', borderColor: c.featured ? 'rgba(124,58,237,0.4)' : 'var(--border)' }} onClick={() => navigate('/community/details')}>
              {c.featured && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,transparent,var(--primary),transparent)' }} />}
              <div style={{ display: 'flex', gap: 12, marginBottom: 10, alignItems: 'flex-start' }}>
                <div style={{ width: 42, height: 42, borderRadius: 11, background: 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{c.avatar}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14 }}>{c.name}</span>
                    {c.featured && <span className="badge" style={{ padding: '1px 6px', borderRadius: 999, background: 'rgba(124,58,237,0.15)', color: 'var(--primary-light)' }}>✦ Featured</span>}
                  </div>
                  <div style={{ display: 'flex', gap: 4 }}>
                    <span className="badge" style={{ padding: '2px 7px', borderRadius: 999, background: `${catColor[c.cat]}18`, color: catColor[c.cat] }}>{c.cat}</span>
                    <span className="badge" style={{ padding: '2px 7px', borderRadius: 999, background: `${tierColor[c.tier]}18`, color: tierColor[c.tier] }}>{c.tier}</span>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 10, flex: 1 }}>{c.desc}</p>
              <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: 10 }}>
                {c.tags.map((t) => <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 9, padding: '2px 7px', borderRadius: 4, background: 'var(--surface-2)', color: 'var(--muted)', border: '1px solid var(--border)' }}>{t}</span>)}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--muted)', marginBottom: 5 }}>
                <span><span style={{ color: c.full ? 'var(--red)' : 'var(--text)', fontWeight: 600 }}>{c.members}</span>/10 members</span>
                {c.full && <span className="badge" style={{ padding: '1px 7px', borderRadius: 999, background: 'rgba(248,113,113,0.12)', color: 'var(--red)' }}>Full</span>}
                {!c.full && 10 - c.members <= 2 && <span className="badge" style={{ padding: '1px 7px', borderRadius: 999, background: 'rgba(249,115,22,0.12)', color: 'var(--accent)' }}>{10 - c.members} spots</span>}
              </div>
              <div style={{ height: 4, borderRadius: 2, background: 'var(--surface-2)', overflow: 'hidden', marginBottom: 12 }}>
                <div style={{ height: '100%', width: `${(c.members / 10) * 100}%`, background: c.full ? 'var(--red)' : c.members >= 8 ? 'linear-gradient(90deg,var(--primary),var(--accent))' : 'linear-gradient(90deg,var(--primary),var(--primary-light))', borderRadius: 2 }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: '#fff', fontWeight: 700 }}>{c.lead[0]}</div>
                  <span style={{ fontSize: 11, color: 'var(--muted)' }}>{c.lead}</span>
                </div>
                <button className="btn-primary" style={{ padding: '5px 12px', fontSize: 11 }} onClick={(e) => { e.stopPropagation(); }}>
                  {c.full ? 'Waitlist' : 'Join →'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Create modal */}
        {creating && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(8,11,20,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: 24 }} onClick={() => setCreating(false)}>
            <div style={{ background: 'var(--surface)', borderRadius: 20, border: '1px solid rgba(124,58,237,0.3)', padding: 32, width: '100%', maxWidth: 440 }} onClick={(e) => e.stopPropagation()}>
              <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 4, letterSpacing: '-0.02em' }}>Create Community</h2>
              <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 22 }}>Lead a focused group of up to 10 builders.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <input className="field" placeholder="Community name…" />
                <textarea className="field" placeholder="What will you build or learn together?" rows={3} style={{ resize: 'vertical' }} />
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {['Projects', 'Skills', 'Research', 'Startup'].map((c) => <button key={c} className="badge" style={{ padding: '7px 14px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--surface-2)', color: 'var(--muted)', cursor: 'pointer' }}>{c}</button>)}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
                <button className="btn-ghost" onClick={() => setCreating(false)} style={{ flex: 1 }}>Cancel</button>
                <button className="btn-primary" style={{ flex: 2, background: 'linear-gradient(135deg,var(--primary),var(--accent))' }} onClick={() => setCreating(false)}>🚀 Launch Community</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
