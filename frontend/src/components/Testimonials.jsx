import { useState } from 'react';

const testimonials = [
  {
    name: 'Ananya Krishnan',
    college: 'JNTU Hyderabad · Tier 3',
    role: 'Full-Stack Dev',
    quote:
      'I was the only CS student in my friend group who cared about building things. TierConnect gave me 9 others who felt the same. We shipped a college attendance app used by 1,200 students in our city.',
    tags: ['Projects', 'Web Dev'],
    avatar: 'AK',
    color: '#7C3AED',
    communities: 2,
  },
  {
    name: 'Rahul Gupta',
    college: 'NIT Warangal · Tier 2',
    role: 'Placed at Google',
    quote:
      'My DSA community held me accountable every single day. We did mock interviews with each other, roasted each other\'s code, and celebrated every offer. I got Google. Two others got Meta and Amazon.',
    tags: ['Skills', 'Placement'],
    avatar: 'RG',
    color: '#F97316',
    communities: 1,
  },
  {
    name: 'Siddharth Rao',
    college: 'IIT Bombay · IIT',
    role: 'YC Startup Founder',
    quote:
      'Don\'t assume IIT students have it all figured out. I found my co-founder through TierConnect — he\'s from a Tier 3 college in UP and is the best engineer I\'ve worked with. We\'re now in YC W25.',
    tags: ['Startup', 'Research'],
    avatar: 'SR',
    color: '#10B981',
    communities: 3,
  },
  {
    name: 'Preethi Nambiar',
    college: 'Amity University · Tier 3',
    role: 'ML Researcher Intern @ IISc',
    quote:
      'No one in my college took ML seriously. On TierConnect I found 6 people who read papers every week with me. One of them connected me to his IISc contact and now I have a research internship.',
    tags: ['Research', 'ML'],
    avatar: 'PN',
    color: '#7C3AED',
    communities: 1,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section
      id="stories"
      className="py-24 px-4 relative overflow-hidden"
      style={{ background: '#080B14' }}
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: '#7C3AED' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="badge inline-block px-3 py-1 rounded-full border border-[rgba(124,58,237,0.35)] bg-[rgba(124,58,237,0.08)] text-[#9D5CF0] mb-5">
            Success Stories
          </span>
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-4xl sm:text-5xl font-extrabold text-[#F1F0FF]"
          >
            They built something{' '}
            <span style={{ color: '#7C3AED' }}>real</span>
          </h2>
        </div>

        {/* Featured testimonial */}
        <div
          key={active}
          className="rounded-3xl border border-[rgba(124,58,237,0.2)] bg-[#0F1221] p-8 sm:p-12 mb-8 relative overflow-hidden"
          style={{ animation: 'fadeIn 0.4s ease' }}
        >
          <style>{`@keyframes fadeIn { from { opacity:0; transform:translateY(8px) } to { opacity:1; transform:translateY(0) } }`}</style>

          {/* Decorative quote mark */}
          <div
            className="absolute top-6 right-8 text-8xl font-bold opacity-[0.04] pointer-events-none select-none"
            style={{ fontFamily: 'Georgia, serif', color: '#7C3AED' }}
          >
            "
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Avatar + info */}
            <div className="flex-shrink-0 flex flex-col items-center gap-3 lg:items-start">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-extrabold text-white"
                style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}
              >
                {t.avatar}
              </div>
              <div>
                <div
                  style={{ fontFamily: 'var(--font-display)' }}
                  className="font-bold text-[#F1F0FF] text-base"
                >
                  {t.name}
                </div>
                <div className="text-xs text-[#8B8DA8] mt-0.5">{t.college}</div>
                <div
                  className="mt-2 text-xs font-semibold px-2.5 py-1 rounded-full inline-block"
                  style={{ background: `${t.color}20`, color: t.color }}
                >
                  {t.role}
                </div>
              </div>
              <div className="mt-2 text-center lg:text-left">
                <div className="text-xs text-[#8B8DA8] mb-1">Community member for</div>
                <div className="text-sm font-semibold text-[#F1F0FF]">
                  {t.communities} communit{t.communities > 1 ? 'ies' : 'y'}
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-5">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="badge px-2.5 py-0.5 rounded-full text-[10px] bg-[#151829] text-[#8B8DA8] border border-[rgba(124,58,237,0.15)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <blockquote
                style={{ fontFamily: 'var(--font-display)', lineHeight: 1.5 }}
                className="text-xl sm:text-2xl font-semibold text-[#F1F0FF] leading-relaxed"
              >
                "{t.quote}"
              </blockquote>
            </div>
          </div>
        </div>

        {/* Selector cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {testimonials.map((t2, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-xl border p-4 text-left transition-all ${
                active === i
                  ? 'border-[rgba(124,58,237,0.5)] bg-[rgba(124,58,237,0.1)]'
                  : 'border-[rgba(124,58,237,0.1)] bg-[#0F1221] hover:border-[rgba(124,58,237,0.3)]'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: t2.color }}
                >
                  {t2.avatar}
                </div>
                <div className="min-w-0">
                  <div
                    style={{ fontFamily: 'var(--font-display)' }}
                    className="text-xs font-bold text-[#F1F0FF] truncate"
                  >
                    {t2.name.split(' ')[0]}
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-[#8B8DA8] leading-tight">{t2.role}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
