import AppLayout from '../components/AppLayout';
import { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

export default function Settings() {
  const { user, updateUser, logout } = useAuthStore();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: user?.name ?? '', college: user?.college ?? '', bio: '', github: '', linkedin: '' });
  const [notifs, setNotifs] = useState({ sprints: true, community: true, contests: false, leaderboard: true });
  const [saved, setSaved] = useState(false);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSave = () => {
    updateUser({ name: form.name, college: form.college });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleLogout = () => { logout(); navigate('/auth/login'); };

  const Section = ({ title, children }) => (
    <div className="card" style={{ marginBottom: 16 }}>
      <h2 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid var(--border)' }}>{title}</h2>
      {children}
    </div>
  );

  return (
    <AppLayout>
      <div className="page-body" style={{ maxWidth: 680 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 20 }}>Settings</h1>

        <Section title="Profile">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)', display: 'block', marginBottom: 6 }}>Full Name</label>
              <input className="field" value={form.name} onChange={(e) => set('name', e.target.value)} />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)', display: 'block', marginBottom: 6 }}>College</label>
              <input className="field" value={form.college} onChange={(e) => set('college', e.target.value)} />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)', display: 'block', marginBottom: 6 }}>Bio</label>
              <textarea className="field" rows={3} value={form.bio} onChange={(e) => set('bio', e.target.value)} placeholder="Tell others what you're building…" style={{ resize: 'vertical' }} />
            </div>
          </div>
        </Section>

        <Section title="Links">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[['GitHub', 'github.com/username', 'github'], ['LinkedIn', 'linkedin.com/in/username', 'linkedin']].map(([label, placeholder, key]) => (
              <div key={key}>
                <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted)', display: 'block', marginBottom: 6 }}>{label}</label>
                <input className="field" placeholder={placeholder} value={form[key]} onChange={(e) => set(key, e.target.value)} />
              </div>
            ))}
          </div>
        </Section>

        <Section title="Notifications">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              ['sprints', 'Sprint Reminders', 'Daily sprint check-in and weekly retrospective'],
              ['community', 'Community Updates', 'New members, messages, and community activity'],
              ['contests', 'Contest Alerts', 'Upcoming contests and live contest reminders'],
              ['leaderboard', 'Leaderboard Changes', 'When your rank changes significantly'],
            ].map(([key, label, desc]) => (
              <div key={key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{label}</div>
                  <div style={{ fontSize: 11, color: 'var(--muted)' }}>{desc}</div>
                </div>
                <button
                  onClick={() => setNotifs((n) => ({ ...n, [key]: !n[key] }))}
                  style={{ width: 42, height: 22, borderRadius: 11, border: 'none', cursor: 'pointer', background: notifs[key] ? 'var(--primary)' : 'var(--faint)', position: 'relative', transition: 'background 0.2s', flexShrink: 0 }}
                >
                  <div style={{ position: 'absolute', top: 3, left: notifs[key] ? 22 : 3, width: 16, height: 16, borderRadius: '50%', background: '#fff', transition: 'left 0.2s' }} />
                </button>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Account">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Email</div>
                <div style={{ fontSize: 11, color: 'var(--muted)' }}>{user?.email ?? 'you@college.edu'}</div>
              </div>
              <button className="btn-ghost" style={{ padding: '6px 12px', fontSize: 11 }}>Change</button>
            </div>
            <div style={{ padding: '12px 0' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--red)', marginBottom: 4 }}>Danger Zone</div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <button className="btn-ghost" style={{ padding: '8px 16px', fontSize: 12, color: 'var(--muted)', border: '1px solid var(--border)' }} onClick={handleLogout}>Sign Out</button>
                <button style={{ padding: '8px 16px', fontSize: 12, border: '1px solid rgba(248,113,113,0.3)', borderRadius: 10, background: 'rgba(248,113,113,0.08)', color: 'var(--red)', cursor: 'pointer', fontWeight: 500 }}>Delete Account</button>
              </div>
            </div>
          </div>
        </Section>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
          {saved && <span style={{ fontSize: 13, color: 'var(--green)', alignSelf: 'center' }}>✓ Saved!</span>}
          <button className="btn-primary" onClick={handleSave} style={{ padding: '10px 24px' }}>Save Changes</button>
        </div>
      </div>
    </AppLayout>
  );
}
