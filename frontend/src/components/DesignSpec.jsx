export default function DesignSpec() {
  const colors = [
    { name: 'Background', token: '--color-bg', hex: '#080B14', desc: 'App canvas' },
    { name: 'Surface', token: '--color-surface', hex: '#0F1221', desc: 'Cards, panels' },
    { name: 'Surface 2', token: '--color-surface-2', hex: '#151829', desc: 'Inputs, nested' },
    { name: 'Faint', token: '--color-faint', hex: '#2A2D45', desc: 'Dividers, disabled' },
    { name: 'Muted', token: '--color-muted', hex: '#8B8DA8', desc: 'Secondary text' },
    { name: 'Text', token: '--color-text', hex: '#F1F0FF', desc: 'Primary text' },
    { name: 'Primary', token: '--color-primary', hex: '#7C3AED', desc: 'Violet – brand' },
    { name: 'Primary Light', token: '--color-primary-light', hex: '#9D5CF0', desc: 'Hover state' },
    { name: 'Accent', token: '--color-accent', hex: '#F97316', desc: 'Orange – CTA, alert' },
    { name: 'Accent Light', token: '--color-accent-light', hex: '#FB923C', desc: 'Hover accent' },
    { name: 'Green', token: '--color-green', hex: '#10B981', desc: 'Success, open spots' },
    { name: 'Border', token: '--color-border', hex: 'rgba(124,58,237,0.18)', desc: 'Default border' },
  ];

  const typeScale = [
    { name: 'Display XL', size: '72px', weight: '800', font: 'Plus Jakarta Sans', sample: 'Build Together', use: 'Hero headline' },
    { name: 'Display L', size: '56px', weight: '800', font: 'Plus Jakarta Sans', sample: 'Find Your Tribe', use: 'Section headline' },
    { name: 'Display M', size: '40px', weight: '700', font: 'Plus Jakarta Sans', sample: 'Communities', use: 'Section titles' },
    { name: 'Heading', size: '24px', weight: '700', font: 'Plus Jakarta Sans', sample: 'ML Explorers', use: 'Card titles' },
    { name: 'Sub-heading', size: '18px', weight: '600', font: 'Plus Jakarta Sans', sample: 'How It Works', use: 'Widget headers' },
    { name: 'Body L', size: '18px', weight: '400', font: 'DM Sans', sample: 'Connect with students who share your drive.', use: 'Hero subtext' },
    { name: 'Body', size: '14px', weight: '400', font: 'DM Sans', sample: 'Building a real-world crop disease detection model.', use: 'Card body' },
    { name: 'Label', size: '12px', weight: '500', font: 'DM Sans', sample: 'Community Member', use: 'Meta, captions' },
    { name: 'Mono / Badge', size: '11px', weight: '600', font: 'JetBrains Mono', sample: 'TIER 2 & 3 COLLEGE STUDENTS', use: 'Badges, tags, code' },
  ];

  const components = [
    {
      title: 'Buttons',
      items: [
        { label: 'Primary', el: <button style={{ background: 'linear-gradient(135deg,#7C3AED,#9D5CF0)', color: '#fff', padding: '10px 24px', borderRadius: 10, fontWeight: 600, border: 'none', fontSize: 14, cursor: 'pointer' }}>Explore Communities</button> },
        { label: 'Outline', el: <button style={{ background: 'transparent', color: '#F1F0FF', padding: '10px 24px', borderRadius: 10, fontWeight: 600, border: '1px solid rgba(124,58,237,0.4)', fontSize: 14, cursor: 'pointer' }}>Create Community</button> },
        { label: 'Ghost', el: <button style={{ background: 'transparent', color: '#8B8DA8', padding: '10px 24px', borderRadius: 10, fontWeight: 500, border: 'none', fontSize: 14, cursor: 'pointer' }}>Sign In</button> },
        { label: 'Gradient CTA', el: <button style={{ background: 'linear-gradient(135deg,#7C3AED,#F97316)', color: '#fff', padding: '10px 24px', borderRadius: 10, fontWeight: 600, border: 'none', fontSize: 14, cursor: 'pointer' }}>🚀 Launch Community</button> },
        { label: 'Disabled', el: <button style={{ background: 'linear-gradient(135deg,#7C3AED,#9D5CF0)', color: '#fff', padding: '10px 24px', borderRadius: 10, fontWeight: 600, border: 'none', fontSize: 14, opacity: 0.4, cursor: 'not-allowed' }}>Continue →</button> },
      ],
    },
  ];

  const badges = [
    { label: 'Projects', bg: 'rgba(124,58,237,0.15)', color: '#9D5CF0' },
    { label: 'Skills', bg: 'rgba(16,185,129,0.15)', color: '#10B981' },
    { label: 'Research', bg: 'rgba(249,115,22,0.15)', color: '#F97316' },
    { label: 'Startup', bg: 'rgba(239,68,68,0.12)', color: '#F87171' },
    { label: 'IIT', bg: 'rgba(249,115,22,0.15)', color: '#FB923C' },
    { label: 'Tier 2', bg: 'rgba(124,58,237,0.12)', color: '#A78BFA' },
    { label: 'Tier 3', bg: 'rgba(16,185,129,0.12)', color: '#34D399' },
    { label: '✦ Featured', bg: 'rgba(124,58,237,0.2)', color: '#9D5CF0' },
    { label: 'Full', bg: 'rgba(239,68,68,0.12)', color: '#F87171' },
    { label: '2 spots left', bg: 'rgba(249,115,22,0.12)', color: '#F97316' },
  ];

  const spacing = [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96];

  const shadows = [
    { name: 'Glow Violet', value: '0 0 40px rgba(124,58,237,0.25), 0 0 80px rgba(124,58,237,0.1)', color: '#7C3AED' },
    { name: 'Glow Orange', value: '0 0 40px rgba(249,115,22,0.2)', color: '#F97316' },
    { name: 'Hover Lift', value: '0 12px 40px rgba(124,58,237,0.2)', color: '#9D5CF0' },
    { name: 'Card Base', value: '0 1px 0 rgba(124,58,237,0.15)', color: '#7C3AED' },
  ];

  const borderStyles = [
    { name: 'Default', value: '1px solid rgba(124,58,237,0.18)', radius: 12 },
    { name: 'Bright', value: '1px solid rgba(124,58,237,0.45)', radius: 12 },
    { name: 'Orange Accent', value: '1px solid rgba(249,115,22,0.3)', radius: 12 },
    { name: 'Green Accent', value: '1px solid rgba(16,185,129,0.3)', radius: 12 },
    { name: 'Dashed', value: '1px dashed rgba(16,185,129,0.3)', radius: 12 },
  ];

  return (
    <div
      id="design-spec"
      style={{
        background: '#080B14',
        color: '#F1F0FF',
        fontFamily: "'DM Sans', sans-serif",
        minHeight: '100vh',
        padding: '0',
      }}
    >
      <style>{`
        @media print {
          body { background: #080B14 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          .page-break { page-break-before: always; }
          @page { size: A4; margin: 12mm; }
        }
        .spec-section { margin-bottom: 64px; }
        .spec-label { font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #8B8DA8; margin-bottom: 16px; display: block; }
        .spec-divider { height: 1px; background: rgba(124,58,237,0.15); margin: 48px 0; }
      `}</style>

      {/* Cover Page */}
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.15) 0%, #080B14 60%)',
          padding: 40,
        }}
      >
        {/* Grid bg */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.5,
          backgroundImage: 'linear-gradient(rgba(124,58,237,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.07) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

        <div style={{ position: 'relative', textAlign: 'center', maxWidth: 640 }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 48 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="22" height="22" viewBox="0 0 18 18" fill="none">
                <circle cx="6" cy="6" r="2.5" fill="white" />
                <circle cx="12" cy="6" r="2.5" fill="white" opacity="0.6" />
                <circle cx="9" cy="12" r="2.5" fill="white" opacity="0.8" />
                <line x1="6" y1="6" x2="12" y2="6" stroke="white" strokeWidth="1" opacity="0.4" />
                <line x1="6" y1="6" x2="9" y2="12" stroke="white" strokeWidth="1" opacity="0.4" />
                <line x1="12" y1="6" x2="9" y2="12" stroke="white" strokeWidth="1" opacity="0.4" />
              </svg>
            </div>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 28, color: '#F1F0FF', letterSpacing: '-0.02em' }}>Nexora</span>
          </div>

          <div style={{ display: 'inline-block', padding: '4px 14px', borderRadius: 999, border: '1px solid rgba(124,58,237,0.4)', background: 'rgba(124,58,237,0.1)', marginBottom: 24 }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 600, color: '#9D5CF0', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Design Specification — v1.0</span>
          </div>

          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 56, lineHeight: 1.05, color: '#F1F0FF', marginBottom: 20, letterSpacing: '-0.02em' }}>
            Design System<br />
            <span style={{ background: 'linear-gradient(135deg, #7C3AED, #F97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>& Component Library</span>
          </h1>

          <p style={{ fontSize: 18, color: '#8B8DA8', lineHeight: 1.6, marginBottom: 40 }}>
            Community platform for Tier 2 & 3 college students across India to collaborate on projects, learn skills, and build together in focused groups of up to 10.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'rgba(124,58,237,0.15)', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(124,58,237,0.15)' }}>
            {[['Colors', '12 tokens'], ['Typography', '9 styles'], ['Components', '15+ patterns']].map(([k, v]) => (
              <div key={k} style={{ background: '#0F1221', padding: '16px 20px', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 20, color: '#F1F0FF', marginBottom: 2 }}>{v}</div>
                <div style={{ fontSize: 12, color: '#8B8DA8' }}>{k}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48, fontSize: 12, color: '#2A2D45', fontFamily: "'JetBrains Mono', monospace" }}>
            Generated · September 2025 · Nexora Design Team
          </div>
        </div>
      </div>

      {/* Spec content */}
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '80px 32px' }}>

        {/* ── COLORS ── */}
        <div className="spec-section page-break">
          <span className="spec-label">01 — Color Palette</span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 36, marginBottom: 8, letterSpacing: '-0.02em' }}>Color Tokens</h2>
          <p style={{ color: '#8B8DA8', fontSize: 15, marginBottom: 32, maxWidth: 480 }}>
            All colors defined as CSS custom properties. Dark-first palette built for WCAG AA contrast on dark backgrounds.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
            {colors.map((c) => (
              <div key={c.name} style={{ borderRadius: 12, border: '1px solid rgba(124,58,237,0.15)', background: '#0F1221', overflow: 'hidden' }}>
                <div style={{ height: 64, background: c.hex.startsWith('rgba') ? c.hex : c.hex, borderBottom: '1px solid rgba(124,58,237,0.12)' }} />
                <div style={{ padding: '12px 14px' }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 13, color: '#F1F0FF', marginBottom: 2 }}>{c.name}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#7C3AED', marginBottom: 4 }}>{c.hex}</div>
                  <div style={{ fontSize: 11, color: '#8B8DA8' }}>{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="spec-divider" />

        {/* ── TYPOGRAPHY ── */}
        <div className="spec-section">
          <span className="spec-label">02 — Typography</span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 36, marginBottom: 8, letterSpacing: '-0.02em' }}>Type Scale</h2>
          <p style={{ color: '#8B8DA8', fontSize: 15, marginBottom: 32, maxWidth: 480 }}>
            Three-family system: <strong style={{ color: '#F1F0FF' }}>Plus Jakarta Sans</strong> for display, <strong style={{ color: '#F1F0FF' }}>DM Sans</strong> for body, <strong style={{ color: '#F1F0FF' }}>JetBrains Mono</strong> for labels and code.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {typeScale.map((t) => (
              <div key={t.name} style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '16px 20px', borderRadius: 10, background: '#0F1221', border: '1px solid rgba(124,58,237,0.1)' }}>
                <div style={{ minWidth: 120 }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#7C3AED', marginBottom: 2 }}>{t.name}</div>
                  <div style={{ fontSize: 10, color: '#8B8DA8' }}>{t.size} · {t.weight}w</div>
                  <div style={{ fontSize: 10, color: '#2A2D45', marginTop: 2 }}>{t.use}</div>
                </div>
                <div style={{ fontFamily: t.font === 'JetBrains Mono' ? "'JetBrains Mono', monospace" : t.font === 'DM Sans' ? "'DM Sans', sans-serif" : "'Plus Jakarta Sans', sans-serif", fontSize: Math.min(parseInt(t.size), 28), fontWeight: parseInt(t.weight), color: '#F1F0FF', letterSpacing: '-0.01em', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {t.sample}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="spec-divider" />

        {/* ── BADGES ── */}
        <div className="spec-section">
          <span className="spec-label">03 — Badges & Labels</span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 36, marginBottom: 8, letterSpacing: '-0.02em' }}>Category & Status Badges</h2>
          <p style={{ color: '#8B8DA8', fontSize: 15, marginBottom: 32 }}>
            Used on community cards to indicate type, tier, and state. JetBrains Mono, 10–11px, uppercase.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {badges.map((b) => (
              <div key={b.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', padding: '4px 10px', borderRadius: 999, background: b.bg, color: b.color }}>
                  {b.label}
                </span>
                <span style={{ fontSize: 10, color: '#2A2D45', fontFamily: "'JetBrains Mono', monospace" }}>{b.color}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="spec-divider" />

        {/* ── BUTTONS ── */}
        <div className="spec-section">
          <span className="spec-label">04 — Buttons</span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 36, marginBottom: 8, letterSpacing: '-0.02em' }}>Button Variants</h2>
          <p style={{ color: '#8B8DA8', fontSize: 15, marginBottom: 32 }}>
            All buttons use 10px border-radius, 14px DM Sans 600, 10–14px vertical padding. Hover: lighten 12%.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-start' }}>
            {components[0].items.map((item) => (
              <div key={item.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}>
                {item.el}
                <span style={{ fontSize: 11, color: '#8B8DA8', fontFamily: "'JetBrains Mono', monospace" }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="spec-divider" />

        {/* ── SPACING ── */}
        <div className="spec-section">
          <span className="spec-label">05 — Spacing Scale</span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 36, marginBottom: 8, letterSpacing: '-0.02em' }}>Spacing & Grid</h2>
          <p style={{ color: '#8B8DA8', fontSize: 15, marginBottom: 32 }}>
            Base unit: 4px. Max content width: 1280px (7xl). Card gap: 20px. Section padding: 96px vertical.
          </p>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, flexWrap: 'wrap' }}>
            {spacing.map((s) => (
              <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{ width: s, height: s, background: 'rgba(124,58,237,0.35)', borderRadius: 3, border: '1px solid rgba(124,58,237,0.5)' }} />
                <span style={{ fontSize: 10, color: '#8B8DA8', fontFamily: "'JetBrains Mono', monospace" }}>{s}px</span>
              </div>
            ))}
          </div>
        </div>

        <div className="spec-divider" />

        {/* ── BORDERS & SHADOWS ── */}
        <div className="spec-section">
          <span className="spec-label">06 — Borders & Shadows</span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 36, marginBottom: 32, letterSpacing: '-0.02em' }}>Elevation System</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 40 }}>
            {borderStyles.map((b) => (
              <div key={b.name} style={{ padding: 20, borderRadius: b.radius, border: b.value, background: '#0F1221', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 13, color: '#F1F0FF' }}>{b.name}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#8B8DA8', wordBreak: 'break-all' }}>{b.value}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {shadows.map((s) => (
              <div key={s.name} style={{ padding: 20, borderRadius: 12, background: '#0F1221', border: '1px solid rgba(124,58,237,0.1)', boxShadow: s.value, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 13, color: '#F1F0FF' }}>{s.name}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#8B8DA8', wordBreak: 'break-all' }}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="spec-divider" />

        {/* ── COMMUNITY CARD ── */}
        <div className="spec-section">
          <span className="spec-label">07 — Components</span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 36, marginBottom: 8, letterSpacing: '-0.02em' }}>Community Card</h2>
          <p style={{ color: '#8B8DA8', fontSize: 15, marginBottom: 32 }}>
            Core unit of the platform. Shows avatar, category/tier badge, description, skill tags, member progress bar, and join CTA.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {/* Card — open */}
            <div style={{ borderRadius: 16, border: '1px solid rgba(124,58,237,0.4)', background: '#0F1221', padding: 20, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, #7C3AED, transparent)' }} />
              <div style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: '#151829', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>🧠</div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#F1F0FF' }}>ML Explorers</span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, fontWeight: 600, padding: '2px 6px', borderRadius: 999, background: 'rgba(124,58,237,0.2)', color: '#9D5CF0' }}>✦ Featured</span>
                  </div>
                  <div style={{ display: 'flex', gap: 4 }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, padding: '2px 7px', borderRadius: 999, background: 'rgba(249,115,22,0.15)', color: '#F97316' }}>Research</span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, padding: '2px 7px', borderRadius: 999, background: 'rgba(124,58,237,0.12)', color: '#A78BFA' }}>Tier 2</span>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: 13, color: '#8B8DA8', lineHeight: 1.55, marginBottom: 12 }}>Building a real-world crop disease detection model using satellite imagery.</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
                {['PyTorch', 'CV', 'Agriculture'].map((t) => (
                  <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, padding: '2px 8px', borderRadius: 5, background: '#1A1D2E', color: '#8B8DA8', border: '1px solid rgba(124,58,237,0.1)' }}>{t}</span>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5, fontSize: 12, color: '#8B8DA8' }}>
                <span><span style={{ color: '#F1F0FF', fontWeight: 600 }}>8</span>/10 members</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, padding: '2px 7px', borderRadius: 999, background: 'rgba(249,115,22,0.12)', color: '#F97316' }}>2 spots left</span>
              </div>
              <div style={{ height: 6, borderRadius: 3, background: '#1A1D2E', overflow: 'hidden', marginBottom: 14 }}>
                <div style={{ height: '100%', width: '80%', borderRadius: 3, background: 'linear-gradient(90deg, #7C3AED, #F97316)' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid rgba(124,58,237,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: '#fff', fontWeight: 700 }}>A</div>
                  <span style={{ fontSize: 11, color: '#8B8DA8' }}>Arjun Mehta</span>
                </div>
                <button style={{ fontSize: 12, fontWeight: 600, padding: '6px 14px', borderRadius: 8, background: '#7C3AED', color: '#fff', border: 'none', cursor: 'pointer' }}>Request Join</button>
              </div>
            </div>

            {/* Card — full */}
            <div style={{ borderRadius: 16, border: '1px solid rgba(124,58,237,0.12)', background: '#0F1221', padding: 20 }}>
              <div style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: '#151829', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>⚔️</div>
                <div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, color: '#F1F0FF', marginBottom: 4 }}>DSA War Room</div>
                  <div style={{ display: 'flex', gap: 4 }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, padding: '2px 7px', borderRadius: 999, background: 'rgba(16,185,129,0.15)', color: '#10B981' }}>Skills</span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, padding: '2px 7px', borderRadius: 999, background: 'rgba(124,58,237,0.12)', color: '#A78BFA' }}>Tier 2</span>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: 13, color: '#8B8DA8', lineHeight: 1.55, marginBottom: 12 }}>Daily LeetCode targets, mock interviews, and mental health check-ins.</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
                {['LeetCode', 'System Design'].map((t) => (
                  <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, padding: '2px 8px', borderRadius: 5, background: '#1A1D2E', color: '#8B8DA8', border: '1px solid rgba(124,58,237,0.1)' }}>{t}</span>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5, fontSize: 12, color: '#8B8DA8' }}>
                <span><span style={{ color: '#F87171', fontWeight: 600 }}>10</span>/10 members</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, padding: '2px 7px', borderRadius: 999, background: 'rgba(239,68,68,0.12)', color: '#F87171' }}>Full</span>
              </div>
              <div style={{ height: 6, borderRadius: 3, background: '#1A1D2E', overflow: 'hidden', marginBottom: 14 }}>
                <div style={{ height: '100%', width: '100%', borderRadius: 3, background: '#F87171' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid rgba(124,58,237,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#F97316', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: '#fff', fontWeight: 700 }}>R</div>
                  <span style={{ fontSize: 11, color: '#8B8DA8' }}>Rohit Nair</span>
                </div>
                <button style={{ fontSize: 12, fontWeight: 600, padding: '6px 14px', borderRadius: 8, background: '#1A1D2E', color: '#8B8DA8', border: 'none', cursor: 'pointer' }}>Waitlist</button>
              </div>
            </div>
          </div>
        </div>

        <div className="spec-divider" />

        {/* ── MEMBER PROGRESS BAR ── */}
        <div className="spec-section">
          <span className="spec-label">08 — Micro-components</span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 36, marginBottom: 8, letterSpacing: '-0.02em' }}>Member Progress Bar States</h2>
          <p style={{ color: '#8B8DA8', fontSize: 15, marginBottom: 32 }}>
            Visual indicator of community capacity. Three states based on fill percentage.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { label: 'Low occupancy (≤70%)', count: 5, max: 10, bar: 'linear-gradient(90deg,#7C3AED,#9D5CF0)', badge: null },
              { label: 'Near full (≥80%)', count: 8, max: 10, bar: 'linear-gradient(90deg,#7C3AED,#F97316)', badge: { text: '2 spots left', bg: 'rgba(249,115,22,0.12)', color: '#F97316' } },
              { label: 'Full (100%)', count: 10, max: 10, bar: '#F87171', badge: { text: 'Full', bg: 'rgba(239,68,68,0.12)', color: '#F87171' } },
            ].map((s) => (
              <div key={s.label} style={{ padding: 20, borderRadius: 12, background: '#0F1221', border: '1px solid rgba(124,58,237,0.1)' }}>
                <div style={{ fontSize: 12, color: '#8B8DA8', marginBottom: 10, fontFamily: "'JetBrains Mono', monospace" }}>{s.label}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 12, color: '#8B8DA8' }}>
                  <span><span style={{ color: s.count >= 10 ? '#F87171' : s.count >= 8 ? '#F97316' : '#F1F0FF', fontWeight: 600 }}>{s.count}</span>/{s.max} members</span>
                  {s.badge && <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, padding: '2px 8px', borderRadius: 999, background: s.badge.bg, color: s.badge.color }}>{s.badge.text}</span>}
                </div>
                <div style={{ height: 6, borderRadius: 3, background: '#1A1D2E', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${(s.count / s.max) * 100}%`, background: s.bar, borderRadius: 3, transition: 'width 0.6s cubic-bezier(0.4,0,0.2,1)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="spec-divider" />

        {/* ── FILTER PATTERNS ── */}
        <div className="spec-section">
          <span className="spec-label">09 — Navigation Patterns</span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 36, marginBottom: 8, letterSpacing: '-0.02em' }}>Filter & Tab Controls</h2>
          <p style={{ color: '#8B8DA8', fontSize: 15, marginBottom: 32 }}>Used in the Communities browser to toggle category and tier filters.</p>
          <div style={{ display: 'flex', gap: 16, flexDirection: 'column' }}>
            {/* Category filter */}
            <div>
              <div style={{ fontSize: 11, color: '#8B8DA8', fontFamily: "'JetBrains Mono', monospace", marginBottom: 10 }}>Category Pill Filter</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['All', 'Projects', 'Skills', 'Research', 'Startup'].map((c, i) => (
                  <button key={c} style={{ padding: '8px 16px', borderRadius: 10, fontSize: 14, fontWeight: 500, border: i === 0 ? 'none' : '1px solid rgba(124,58,237,0.18)', background: i === 0 ? '#7C3AED' : '#0F1221', color: i === 0 ? '#fff' : '#8B8DA8', cursor: 'pointer' }}>{c}</button>
                ))}
              </div>
            </div>
            {/* Tier filter */}
            <div>
              <div style={{ fontSize: 11, color: '#8B8DA8', fontFamily: "'JetBrains Mono', monospace", marginBottom: 10 }}>Tier Badge Filter — active state uses orange</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['All Tiers', 'IIT', 'Tier 2', 'Tier 3'].map((c, i) => (
                  <button key={c} style={{ padding: '6px 12px', borderRadius: 8, fontSize: 11, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.05em', border: i === 0 ? '1px solid rgba(249,115,22,0.4)' : '1px solid rgba(124,58,237,0.12)', background: i === 0 ? 'rgba(249,115,22,0.2)' : '#0F1221', color: i === 0 ? '#F97316' : '#8B8DA8', cursor: 'pointer' }}>{c}</button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="spec-divider" />

        {/* ── LAYOUT ── */}
        <div className="spec-section">
          <span className="spec-label">10 — Layout System</span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 36, marginBottom: 8, letterSpacing: '-0.02em' }}>Page Layout & Grid</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { label: 'Max Width', value: '1280px (7xl)' },
              { label: 'Horizontal Padding', value: '16px mobile → 24px tablet → auto desktop' },
              { label: 'Section V-Padding', value: '96px (py-24)' },
              { label: 'Card Grid', value: '1 → 2 → 3 col responsive' },
              { label: 'Card Gap', value: '20px (gap-5)' },
              { label: 'Nav Height', value: '64px fixed' },
              { label: 'Border Radius — Cards', value: '16px (rounded-2xl)' },
              { label: 'Border Radius — Buttons', value: '10px (rounded-xl)' },
              { label: 'Border Radius — Badges', value: '999px (rounded-full)' },
              { label: 'Breakpoints', value: 'sm: 640px · md: 768px · lg: 1024px' },
            ].map((r) => (
              <div key={r.label} style={{ padding: '14px 16px', borderRadius: 8, background: '#0F1221', border: '1px solid rgba(124,58,237,0.1)' }}>
                <div style={{ fontSize: 11, color: '#7C3AED', fontFamily: "'JetBrains Mono', monospace", marginBottom: 4 }}>{r.label}</div>
                <div style={{ fontSize: 13, color: '#F1F0FF', fontWeight: 500 }}>{r.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', paddingTop: 48, borderTop: '1px solid rgba(124,58,237,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <circle cx="6" cy="6" r="2.5" fill="white" />
                <circle cx="12" cy="6" r="2.5" fill="white" opacity="0.6" />
                <circle cx="9" cy="12" r="2.5" fill="white" opacity="0.8" />
                <line x1="6" y1="6" x2="12" y2="6" stroke="white" strokeWidth="1" opacity="0.4" />
                <line x1="6" y1="6" x2="9" y2="12" stroke="white" strokeWidth="1" opacity="0.4" />
                <line x1="12" y1="6" x2="9" y2="12" stroke="white" strokeWidth="1" opacity="0.4" />
              </svg>
            </div>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 18, color: '#F1F0FF' }}>Nexora Design System</span>
          </div>
          <p style={{ fontSize: 12, color: '#2A2D45', fontFamily: "'JetBrains Mono', monospace" }}>
            v1.0 · React + Tailwind CSS v4 · September 2025
          </p>
        </div>
      </div>
    </div>
  );
}
