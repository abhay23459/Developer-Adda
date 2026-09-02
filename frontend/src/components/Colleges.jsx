const iitColleges = [
  { name: 'IIT Bombay', city: 'Mumbai', students: '142', icon: '🏛️' },
  { name: 'IIT Delhi', city: 'Delhi', students: '118', icon: '🏛️' },
  { name: 'IIT Madras', city: 'Chennai', students: '97', icon: '🏛️' },
  { name: 'IIT Kanpur', city: 'Kanpur', students: '85', icon: '🏛️' },
  { name: 'IIT Kharagpur', city: 'Kharagpur', students: '76', icon: '🏛️' },
  { name: 'IIT Roorkee', city: 'Roorkee', students: '64', icon: '🏛️' },
  { name: 'IIT Hyderabad', city: 'Hyderabad', students: '52', icon: '🏛️' },
  { name: 'IIT Gandhinagar', city: 'Ahmedabad', students: '38', icon: '🏛️' },
];

const tier2Colleges = [
  { name: 'NIT Warangal', city: 'Telangana', students: '203' },
  { name: 'BITS Pilani', city: 'Rajasthan', students: '187' },
  { name: 'VIT Vellore', city: 'Tamil Nadu', students: '312' },
  { name: 'Manipal Institute', city: 'Karnataka', students: '165' },
  { name: 'IIIT Hyderabad', city: 'Telangana', students: '128' },
  { name: 'DTU Delhi', city: 'Delhi', students: '145' },
];

const tier3Colleges = [
  { name: 'JNTU Hyderabad', city: 'Telangana', students: '89' },
  { name: 'Amity University', city: 'Noida', students: '112' },
  { name: 'SRM University', city: 'Chennai', students: '94' },
  { name: 'LPU', city: 'Phagwara', students: '78' },
];

export default function Colleges() {
  return (
    <section
      id="colleges"
      className="py-24 px-4 relative overflow-hidden"
      style={{ background: '#080B14' }}
    >
      {/* Radial glow top-right */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: '#F97316' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <span className="badge inline-block px-3 py-1 rounded-full border border-[rgba(249,115,22,0.3)] bg-[rgba(249,115,22,0.08)] text-[#F97316] mb-5">
            Colleges
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-4xl sm:text-5xl font-extrabold text-[#F1F0FF]"
            >
              From IITs to Tier 3 —
              <br />
              <span style={{ color: '#F97316' }}>every campus matters</span>
            </h2>
            <p className="text-[#8B8DA8] max-w-sm lg:text-right">
              Your college name doesn't cap your ceiling. Your curiosity and commitment do.
            </p>
          </div>
        </div>

        {/* IIT Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <span
              className="badge px-3 py-1 rounded-full text-xs bg-[rgba(249,115,22,0.15)] text-[#F97316] border border-[rgba(249,115,22,0.3)]"
            >
              IIT Colleges
            </span>
            <div className="flex-1 h-px bg-[rgba(249,115,22,0.15)]" />
            <span className="text-xs text-[#8B8DA8]">{iitColleges.reduce((a, c) => a + parseInt(c.students), 0)}+ students</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {iitColleges.map((college) => (
              <div
                key={college.name}
                className="rounded-xl border border-[rgba(249,115,22,0.15)] bg-[#0F1221] p-4 hover-lift group cursor-pointer"
              >
                <div className="text-xl mb-2">{college.icon}</div>
                <div
                  style={{ fontFamily: 'var(--font-display)' }}
                  className="font-bold text-sm text-[#F1F0FF] mb-0.5 group-hover:text-[#FB923C] transition-colors"
                >
                  {college.name}
                </div>
                <div className="text-xs text-[#8B8DA8]">{college.city}</div>
                <div className="mt-2 text-xs text-[#F97316] font-semibold">{college.students} students</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tier 2 + Tier 3 side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tier 2 */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="badge px-3 py-1 rounded-full text-xs bg-[rgba(124,58,237,0.15)] text-[#A78BFA] border border-[rgba(124,58,237,0.3)]">
                Tier 2 Colleges
              </span>
              <div className="flex-1 h-px bg-[rgba(124,58,237,0.1)]" />
            </div>
            <div className="flex flex-col gap-2">
              {tier2Colleges.map((college) => (
                <div
                  key={college.name}
                  className="flex items-center justify-between px-4 py-3 rounded-xl border border-[rgba(124,58,237,0.12)] bg-[#0F1221] hover-lift group cursor-pointer"
                >
                  <div>
                    <div
                      style={{ fontFamily: 'var(--font-display)' }}
                      className="font-semibold text-sm text-[#F1F0FF] group-hover:text-[#A78BFA] transition-colors"
                    >
                      {college.name}
                    </div>
                    <div className="text-xs text-[#8B8DA8]">{college.city}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-[#A78BFA]">{college.students}</div>
                    <div className="text-[10px] text-[#8B8DA8]">students</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tier 3 */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="badge px-3 py-1 rounded-full text-xs bg-[rgba(16,185,129,0.15)] text-[#34D399] border border-[rgba(16,185,129,0.3)]">
                Tier 3 Colleges
              </span>
              <div className="flex-1 h-px bg-[rgba(16,185,129,0.1)]" />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              {tier3Colleges.map((college) => (
                <div
                  key={college.name}
                  className="flex items-center justify-between px-4 py-3 rounded-xl border border-[rgba(16,185,129,0.1)] bg-[#0F1221] hover-lift group cursor-pointer"
                >
                  <div>
                    <div
                      style={{ fontFamily: 'var(--font-display)' }}
                      className="font-semibold text-sm text-[#F1F0FF] group-hover:text-[#34D399] transition-colors"
                    >
                      {college.name}
                    </div>
                    <div className="text-xs text-[#8B8DA8]">{college.city}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-[#10B981]">{college.students}</div>
                    <div className="text-[10px] text-[#8B8DA8]">students</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Join CTA card */}
            <div
              className="rounded-xl border border-dashed border-[rgba(16,185,129,0.3)] p-5 text-center cursor-pointer hover:bg-[rgba(16,185,129,0.04)] transition-colors"
            >
              <div className="text-2xl mb-2">➕</div>
              <p className="text-sm font-semibold text-[#34D399] mb-1">Don't see your college?</p>
              <p className="text-xs text-[#8B8DA8]">Be the first from your campus. Claim your college page and start building.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
