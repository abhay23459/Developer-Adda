const links = {
  Platform: ['Browse Communities', 'Create Community', 'How It Works', 'College Leaderboard'],
  Resources: ['Blog', 'Success Stories', 'Community Guidelines', 'Developer API'],
  Colleges: ['IIT Communities', 'Tier 2 Communities', 'Tier 3 Communities', 'Add Your College'],
  Company: ['About Us', 'Careers', 'Privacy Policy', 'Terms of Service'],
};

export default function Footer() {
  return (
    <footer
      className="border-t border-[rgba(124,58,237,0.12)] pt-16 pb-8 px-4"
      style={{ background: '#080B14' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Big CTA */}
        <div
          className="rounded-3xl p-10 sm:p-14 text-center mb-16 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(249,115,22,0.1) 100%)',
            border: '1px solid rgba(124,58,237,0.25)',
          }}
        >
          {/* Dot grid bg */}
          <div className="absolute inset-0 geo-dots opacity-40 pointer-events-none" />

          <div className="relative z-10">
            <h2
              style={{ fontFamily: 'var(--font-display)', lineHeight: 1.1 }}
              className="text-4xl sm:text-5xl font-extrabold text-[#F1F0FF] mb-4"
            >
              Your college name
              <br />
              <span style={{ color: '#F97316' }}>isn't your ceiling.</span>
            </h2>
            <p className="text-[#8B8DA8] text-lg mb-8 max-w-lg mx-auto">
              Join 2,400+ students building communities, shipping projects, and growing together — regardless of which college they're from.
            </p>
            <button
              className="px-10 py-3.5 rounded-xl font-semibold text-white text-base glow-violet"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #9D5CF0)' }}
            >
              Get Started — It's Free
            </button>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4
                style={{ fontFamily: 'var(--font-display)' }}
                className="font-semibold text-[#F1F0FF] text-sm mb-4"
              >
                {group}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-[#8B8DA8] hover:text-[#F1F0FF] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[rgba(124,58,237,0.1)]">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#7C3AED] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                <circle cx="6" cy="6" r="2.5" fill="white" />
                <circle cx="12" cy="6" r="2.5" fill="white" opacity="0.6" />
                <circle cx="9" cy="12" r="2.5" fill="white" opacity="0.8" />
                <line x1="6" y1="6" x2="12" y2="6" stroke="white" strokeWidth="1" opacity="0.4" />
                <line x1="6" y1="6" x2="9" y2="12" stroke="white" strokeWidth="1" opacity="0.4" />
                <line x1="12" y1="6" x2="9" y2="12" stroke="white" strokeWidth="1" opacity="0.4" />
              </svg>
            </div>
            <span
              style={{ fontFamily: 'var(--font-display)' }}
              className="font-bold text-sm text-[#F1F0FF]"
            >
              Nexora
            </span>
          </div>

          <p className="text-xs text-[#2A2D45] text-center">
            Built with ❤️ for India's college builders · © 2025 Nexora
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {['Twitter', 'LinkedIn', 'GitHub', 'Discord'].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs text-[#2A2D45] hover:text-[#8B8DA8] transition-colors"
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
