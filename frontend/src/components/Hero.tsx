import { useState, useEffect } from 'react';

const stats = [
  { value: '2,400+', label: 'Students' },
  { value: '320+', label: 'Communities' },
  { value: '180+', label: 'Colleges' },
  { value: '94%', label: 'Found Collaborators' },
];

const floatingTags = [
  { text: 'ML Research', x: '8%', y: '22%', delay: '0s' },
  { text: 'Web Dev', x: '82%', y: '18%', delay: '0.4s' },
  { text: 'DSA Grind', x: '5%', y: '68%', delay: '0.8s' },
  { text: 'Startup Ideas', x: '78%', y: '65%', delay: '0.2s' },
  { text: 'Open Source', x: '14%', y: '45%', delay: '1s' },
  { text: 'App Design', x: '72%', y: '42%', delay: '0.6s' },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToCommunities = () => {
    document.getElementById('communities')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden geo-grid pt-16"
      style={{ background: '#080B14' }}
    >
      {/* Background glow orbs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full opacity-10 blur-[80px] pointer-events-none"
        style={{ background: '#F97316' }}
      />

      {/* Floating interest tags */}
      {floatingTags.map((tag) => (
        <div
          key={tag.text}
          className="absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[rgba(124,58,237,0.25)] bg-[rgba(15,18,33,0.8)] text-[#8B8DA8] backdrop-blur-sm"
          style={{
            left: tag.x,
            top: tag.y,
            animationDelay: tag.delay,
            animation: 'float 6s ease-in-out infinite',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
          {tag.text}
        </div>
      ))}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.6; }
          50% { transform: translateY(-10px); opacity: 1; }
        }
      `}</style>

      {/* Main content */}
      <div
        className={`relative z-10 max-w-4xl mx-auto px-4 text-center transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(124,58,237,0.35)] bg-[rgba(124,58,237,0.1)] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span
            className="text-xs font-semibold text-[#9D5CF0] uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Tier 2 & 3 College Students
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{ fontFamily: 'var(--font-display)', lineHeight: 1.05 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#F1F0FF] mb-6"
        >
          Find Your{' '}
          <span
            className="relative inline-block"
            style={{
              background: 'linear-gradient(135deg, #7C3AED, #F97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Tribe
          </span>
          <br />
          Build Together
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-[#8B8DA8] max-w-2xl mx-auto mb-10 leading-relaxed">
          Connect with students who share your drive. Form micro-communities of up to{' '}
          <span className="text-[#F97316] font-semibold">10 like-minded builders</span> across
          India's colleges — from tier 3 gems to the IITs.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={scrollToCommunities}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-white text-base glow-violet"
            style={{ background: 'linear-gradient(135deg, #7C3AED, #9D5CF0)' }}
          >
            Explore Communities
          </button>
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-[#F1F0FF] text-base border border-[rgba(124,58,237,0.35)] hover:border-[rgba(124,58,237,0.7)] hover:bg-[rgba(124,58,237,0.08)]">
            Create a Community
          </button>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[rgba(124,58,237,0.15)] rounded-2xl overflow-hidden border border-[rgba(124,58,237,0.15)]">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#0F1221] px-6 py-5 text-center">
              <div
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-2xl font-extrabold text-[#F1F0FF] mb-0.5"
              >
                {s.value}
              </div>
              <div className="text-xs text-[#8B8DA8] font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#2A2D45] animate-bounce">
        <span className="text-xs">scroll</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
