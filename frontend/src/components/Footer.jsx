const links = {
  Platform: ['Browse Communities', 'Create Community', 'How It Works', 'Leaderboard'],
  Resources: ['Blog', 'Success Stories', 'Community Guidelines', 'Developer API'],
  Company: ['About Us', 'Careers', 'Privacy Policy', 'Terms of Service'],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        padding: '72px 24px 28px',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="footer-grid" style={{ display: 'grid', gap: '40px 32px', paddingBottom: 52 }}>
          <div style={{ maxWidth: 260 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(124,58,237,0.25)' }}>
                <svg width="17" height="17" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <circle cx="6" cy="6" r="2.5" fill="white" />
                  <circle cx="12" cy="6" r="2.5" fill="white" opacity="0.6" />
                  <circle cx="9" cy="12" r="2.5" fill="white" opacity="0.8" />
                  <line x1="6" y1="6" x2="12" y2="6" stroke="white" strokeWidth="1" opacity="0.4" />
                  <line x1="6" y1="6" x2="9" y2="12" stroke="white" strokeWidth="1" opacity="0.4" />
                  <line x1="12" y1="6" x2="9" y2="12" stroke="white" strokeWidth="1" opacity="0.4" />
                </svg>
              </div>
              <span style={{ fontFamily: 'var(--font-display)', color: 'var(--text)', fontWeight: 800, fontSize: 18 }}>Nexora</span>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.7 }}>
              A focused space for students to find their people, build meaningful projects, and grow together.
            </p>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text)', fontSize: 13, fontWeight: 700, marginBottom: 16 }}
              >
                {group}
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: 0, padding: 0, listStyle: 'none' }}>
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{ color: 'var(--muted)', fontSize: 12, transition: 'color 0.2s' }}
                      onMouseEnter={(event) => { event.currentTarget.style.color = 'var(--text)'; }}
                      onMouseLeave={(event) => { event.currentTarget.style.color = 'var(--muted)'; }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
          <p style={{ color: 'var(--faint)', textAlign: 'center', fontSize: 11, margin: 0 }}>
            Built for India's college builders · © 2025 Nexora
          </p>

          {/* Social links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            {['Twitter', 'LinkedIn', 'GitHub', 'Discord'].map((s) => (
              <a
                key={s}
                href="#"
                style={{ color: 'var(--faint)', fontSize: 11, transition: 'color 0.2s' }}
                onMouseEnter={(event) => { event.currentTarget.style.color = 'var(--muted)'; }}
                onMouseLeave={(event) => { event.currentTarget.style.color = 'var(--faint)'; }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
