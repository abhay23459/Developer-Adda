const features = [
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: '#7C3AED',
    title: 'Micro-Communities',
    desc: 'Max 10 members per community — tight-knit, focused, and actually collaborative. No noise, no ghosting.',
    tag: 'Core',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: '#F97316',
    title: 'Skill-Match Algorithm',
    desc: 'Tell us what you want to learn or build. We surface communities where your skills + curiosity fit perfectly.',
    tag: 'Smart',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: '#10B981',
    title: 'Project Launchpad',
    desc: 'Communities aren\'t just chats — each one has a shared project board, milestones, and a public showcase.',
    tag: 'Build',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: '#7C3AED',
    title: 'College Verified',
    desc: 'Your .edu email verifies your college. Tier 2, Tier 3, IITs — all equal on this platform. No hierarchy.',
    tag: 'Trust',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: '#F97316',
    title: 'Weekly Sprints',
    desc: 'Every community runs 7-day focus sprints. Ship something small every week and build momentum.',
    tag: 'Rhythm',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    color: '#10B981',
    title: 'Portfolio Builder',
    desc: 'Your contributions auto-generate a shareable portfolio. Show what you built, not just where you studied.',
    tag: 'Career',
  },
];

export default function Features() {
  return (
    <section
      id="how-it-works"
      className="py-24 px-4 relative overflow-hidden"
      style={{ background: '#080B14' }}
    >
      {/* Section label */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span
            className="inline-block badge px-3 py-1 rounded-full border border-[rgba(124,58,237,0.35)] bg-[rgba(124,58,237,0.08)] text-[#9D5CF0] mb-5"
          >
            Why Nexora
          </span>
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-4xl sm:text-5xl font-extrabold text-[#F1F0FF] mb-4"
          >
            Built for builders,{' '}
            <span style={{ color: '#7C3AED' }}>not browsers</span>
          </h2>
          <p className="text-[#8B8DA8] text-lg max-w-xl mx-auto">
            Every feature exists to help you ship, learn, and connect — not scroll.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="relative group hover-lift rounded-2xl border border-[rgba(124,58,237,0.15)] bg-[#0F1221] p-6 overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 20% 20%, ${f.color}15 0%, transparent 60%)`,
                }}
              />

              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${f.color}18`, color: f.color }}
                >
                  {f.icon}
                </div>
                <span
                  className="badge px-2.5 py-0.5 rounded-full text-[10px]"
                  style={{ background: `${f.color}15`, color: f.color }}
                >
                  {f.tag}
                </span>
              </div>

              {/* Text */}
              <h3
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-lg font-bold text-[#F1F0FF] mb-2"
              >
                {f.title}
              </h3>
              <p className="text-sm text-[#8B8DA8] leading-relaxed">{f.desc}</p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${f.color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
