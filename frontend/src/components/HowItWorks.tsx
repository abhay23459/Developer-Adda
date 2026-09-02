const steps = [
  {
    number: '01',
    icon: '🎓',
    title: 'Verify Your College',
    desc: 'Sign up with your college email. We verify your institution so everyone on the platform is a real student — Tier 2, Tier 3, IIT, NIT, you name it.',
    detail: 'Supports 500+ Indian colleges',
  },
  {
    number: '02',
    icon: '🧩',
    title: 'Build Your Profile',
    desc: 'Tell us what you\'re into — ML, WebDev, design, startups — and what you\'re trying to achieve. Our matching engine does the rest.',
    detail: '50+ skill tags available',
  },
  {
    number: '03',
    icon: '🔍',
    title: 'Discover or Create',
    desc: 'Browse communities that match your goals. Found a gap? Start your own community in 2 minutes. Set the focus, invite up to 9 others, and go.',
    detail: 'Communities fill up in avg. 4 days',
  },
  {
    number: '04',
    icon: '⚡',
    title: 'Ship. Learn. Grow.',
    desc: 'Your community runs weekly sprints. Build a project, prep for placements, or deep-dive a skill — with accountability partners who actually show up.',
    detail: 'Average 3 projects per community per quarter',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 px-4 relative overflow-hidden"
      style={{ background: '#080B14' }}
    >
      {/* Accent stripe bg */}
      <div className="absolute inset-0 stripe-bg opacity-50 pointer-events-none" />

      {/* Vertical line connector */}
      <div className="absolute left-1/2 top-48 bottom-24 w-px bg-gradient-to-b from-[rgba(124,58,237,0.4)] to-transparent hidden lg:block" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="badge inline-block px-3 py-1 rounded-full border border-[rgba(249,115,22,0.3)] bg-[rgba(249,115,22,0.08)] text-[#F97316] mb-5">
            How It Works
          </span>
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-4xl sm:text-5xl font-extrabold text-[#F1F0FF] mb-4"
          >
            Four steps to finding
            <br />
            <span style={{ color: '#7C3AED' }}>your community</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative rounded-2xl border bg-[#0F1221] p-7 hover-lift overflow-hidden group ${
                i % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8 lg:mt-12'
              } border-[rgba(124,58,237,0.15)]`}
            >
              {/* Background number watermark */}
              <div
                className="absolute -top-4 -right-2 text-[80px] font-extrabold opacity-[0.04] select-none pointer-events-none"
                style={{ fontFamily: 'var(--font-display)', color: '#7C3AED' }}
              >
                {step.number}
              </div>

              {/* Hover accent */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 10% 90%, rgba(124,58,237,0.08) 0%, transparent 60%)' }} />

              <div className="flex items-start gap-5">
                {/* Icon block */}
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[#151829] border border-[rgba(124,58,237,0.2)] flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                  <span
                    className="text-[10px] font-semibold text-[#7C3AED]"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    style={{ fontFamily: 'var(--font-display)' }}
                    className="text-lg font-bold text-[#F1F0FF] mb-2"
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#8B8DA8] leading-relaxed mb-3">{step.desc}</p>
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#10B981]">
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {step.detail}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
