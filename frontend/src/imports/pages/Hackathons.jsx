import AppLayout from '../components/AppLayout';

const hackathons = [
  { name: 'Smart India Hackathon 2025', org: 'Govt. of India', mode: 'Offline', prize: '₹1,00,000', deadline: 'May 15, 2025', duration: '36 hours', tags: ['Open to all', 'Team of 6'], status: 'open', desc: 'India\'s biggest hackathon. Solve real govt. problem statements across 100+ categories.' },
  { name: 'HackMIT 2025', org: 'MIT', mode: 'Hybrid', prize: '$10,000', deadline: 'Aug 1, 2025', duration: '24 hours', tags: ['International', 'Competitive'], status: 'open', desc: 'Premier global hackathon. Build fast, win big, and connect with the best builders worldwide.' },
  { name: 'TierConnect Hackathon #3', org: 'TierConnect', mode: 'Online', prize: '₹25,000', deadline: 'Apr 20, 2025', duration: '48 hours', tags: ['Community teams', 'All tiers'], status: 'open', desc: 'Built exclusively for TierConnect communities. Form a team within the platform and ship.' },
  { name: 'Flipkart Grid 6.0', org: 'Flipkart', mode: 'Online → Offline', prize: 'Job Offer + ₹50k', deadline: 'Jun 30, 2025', duration: '3 months', tags: ['E-commerce', 'Product'], status: 'open', desc: 'Flipkart\'s flagship engineering challenge. Multi-round format ending in Bangalore finale.' },
  { name: 'HackCBS #7', org: 'Shaheed Sukhdev CBS', mode: 'Offline', prize: '₹60,000', deadline: 'Closed', duration: '36 hours', tags: ['Delhi NCR', 'Beginner friendly'], status: 'closed', desc: 'One of the biggest student-run hackathons in India. Extremely beginner-friendly.' },
];

export default function Hackathons() {
  return (
    <AppLayout>
      <div className="page-body">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 12 }}>
          <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em' }}>Hackathons</h1>
          <span className="badge" style={{ padding: '4px 12px', borderRadius: 999, background: 'rgba(16,185,129,0.12)', color: 'var(--green)' }}>{hackathons.filter((h) => h.status === 'open').length} open</span>
        </div>
        <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>Find and join hackathons with your community team.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {hackathons.map((h) => (
            <div key={h.name} className="card hover-lift" style={{ borderColor: h.status === 'open' ? 'var(--border)' : 'rgba(42,45,69,0.5)', opacity: h.status === 'closed' ? 0.6 : 1 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
                    <h2 style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.01em' }}>{h.name}</h2>
                    <span className="badge" style={{ padding: '2px 7px', borderRadius: 999, background: h.status === 'open' ? 'rgba(16,185,129,0.12)' : 'rgba(42,45,69,0.6)', color: h.status === 'open' ? 'var(--green)' : 'var(--faint)' }}>
                      {h.status === 'open' ? '● Open' : 'Closed'}
                    </span>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 10 }}>{h.desc}</p>
                  <div style={{ display: 'flex', gap: 14, fontSize: 12, color: 'var(--muted)', flexWrap: 'wrap', marginBottom: 10 }}>
                    <span>🏢 {h.org}</span>
                    <span>🌐 {h.mode}</span>
                    <span>⏰ Deadline: <span style={{ color: 'var(--text)', fontWeight: 500 }}>{h.deadline}</span></span>
                    <span>⌛ {h.duration}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {h.tags.map((t) => <span key={t} className="badge" style={{ padding: '2px 8px', borderRadius: 999, background: 'var(--surface-2)', color: 'var(--muted)', border: '1px solid var(--border)' }}>{t}</span>)}
                  </div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: 'var(--accent)', marginBottom: 8 }}>{h.prize}</div>
                  {h.status === 'open' && (
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button className="btn-outline" style={{ padding: '7px 12px', fontSize: 11 }}>Find Team</button>
                      <button className="btn-primary" style={{ padding: '7px 14px', fontSize: 11 }}>Register →</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
