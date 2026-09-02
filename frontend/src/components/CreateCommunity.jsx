import { useState } from 'react';

const categories = ['Projects', 'Skills', 'Research', 'Startup', 'Design', 'Content'];
const skillOptions = [
  'React', 'Python', 'ML/AI', 'Design', 'DSA', 'DevOps',
  'Mobile', 'Blockchain', 'Data Science', 'Open Source',
];

export default function CreateCommunity() {
  const [step, setStep] = useState(1);
  const [selectedCat, setSelectedCat] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [name, setName] = useState('');
  const [limit] = useState(10);
  const [submitted, setSubmitted] = useState(false);

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill].slice(0, 5)
    );
  };

  const handleSubmit = () => {
    if (name && selectedCat && selectedSkills.length > 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section className="py-24 px-4" style={{ background: '#080B14' }}>
        <div className="max-w-lg mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-[rgba(16,185,129,0.15)] flex items-center justify-center text-4xl mx-auto mb-6 border border-[rgba(16,185,129,0.3)]">
            🎉
          </div>
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-3xl font-extrabold text-[#F1F0FF] mb-3"
          >
            Community Created!
          </h2>
          <p className="text-[#8B8DA8] mb-2">
            <span className="text-[#F1F0FF] font-semibold">"{name}"</span> is live.
          </p>
          <p className="text-[#8B8DA8] text-sm mb-8">
            Share the invite link and fill up your 10 spots. Your builder journey starts now.
          </p>
          <div className="flex items-center gap-2 bg-[#0F1221] border border-[rgba(124,58,237,0.25)] rounded-xl p-3 mb-6">
            <span className="text-xs text-[#8B8DA8] flex-1 text-left" style={{ fontFamily: 'var(--font-mono)' }}>
              tierconnect.in/c/{name.toLowerCase().replace(/ /g, '-')}
            </span>
            <button className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#7C3AED] text-white">
              Copy Link
            </button>
          </div>
          <button
            onClick={() => { setSubmitted(false); setStep(1); setName(''); setSelectedCat(''); setSelectedSkills([]); }}
            className="text-sm text-[#8B8DA8] hover:text-[#F1F0FF]"
          >
            Create another community
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-4 relative overflow-hidden" style={{ background: '#080B14' }}>
      {/* Big background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(124,58,237,0.12) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="badge inline-block px-3 py-1 rounded-full border border-[rgba(124,58,237,0.35)] bg-[rgba(124,58,237,0.08)] text-[#9D5CF0] mb-5">
            Start Something New
          </span>
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-4xl sm:text-5xl font-extrabold text-[#F1F0FF] mb-4"
          >
            Create your{' '}
            <span style={{ color: '#F97316' }}>community</span>
          </h2>
          <p className="text-[#8B8DA8]">
            Be the leader. Define the focus. Invite up to{' '}
            <span className="text-[#F1F0FF] font-semibold">10 builders</span> who match your energy.
          </p>
        </div>

        {/* Step indicators */}
        <div className="flex items-center gap-2 justify-center mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step >= s
                    ? 'bg-[#7C3AED] text-white'
                    : 'bg-[#151829] text-[#8B8DA8] border border-[rgba(124,58,237,0.2)]'
                }`}
              >
                {step > s ? '✓' : s}
              </div>
              {s < 3 && (
                <div
                  className={`w-16 h-px transition-colors ${
                    step > s ? 'bg-[#7C3AED]' : 'bg-[rgba(124,58,237,0.2)]'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-[rgba(124,58,237,0.2)] bg-[#0F1221] p-8">
          {/* Step 1: Name + Category */}
          {step === 1 && (
            <div>
              <h3
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-xl font-bold text-[#F1F0FF] mb-6"
              >
                Name your community
              </h3>
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#8B8DA8] mb-2">Community Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. ML Explorers, DSA War Room..."
                  maxLength={40}
                  className="w-full px-4 py-3 rounded-xl bg-[#151829] border border-[rgba(124,58,237,0.18)] text-[#F1F0FF] placeholder-[#2A2D45] focus:outline-none focus:border-[rgba(124,58,237,0.5)] text-sm"
                />
                <div className="text-right text-xs text-[#2A2D45] mt-1">{name.length}/40</div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-[#8B8DA8] mb-3">Category</label>
                <div className="grid grid-cols-3 gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCat(cat)}
                      className={`py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
                        selectedCat === cat
                          ? 'bg-[#7C3AED] text-white'
                          : 'bg-[#151829] text-[#8B8DA8] border border-[rgba(124,58,237,0.12)] hover:border-[rgba(124,58,237,0.4)]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Member limit display */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-[#151829] border border-[rgba(124,58,237,0.12)] mb-8">
                <div>
                  <div className="text-sm font-semibold text-[#F1F0FF]">Member Limit</div>
                  <div className="text-xs text-[#8B8DA8]">Focused communities. Max 10 members.</div>
                </div>
                <div
                  style={{ fontFamily: 'var(--font-display)' }}
                  className="text-3xl font-extrabold text-[#7C3AED]"
                >
                  {limit}
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                disabled={!name || !selectedCat}
                className="w-full py-3 rounded-xl font-semibold text-white disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #9D5CF0)' }}
              >
                Continue →
              </button>
            </div>
          )}

          {/* Step 2: Skills */}
          {step === 2 && (
            <div>
              <h3
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-xl font-bold text-[#F1F0FF] mb-2"
              >
                Pick your focus skills
              </h3>
              <p className="text-sm text-[#8B8DA8] mb-6">
                Select up to 5 skills. We'll use these to surface your community to the right people.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {skillOptions.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => toggleSkill(skill)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all badge ${
                      selectedSkills.includes(skill)
                        ? 'bg-[rgba(124,58,237,0.25)] text-[#9D5CF0] border border-[rgba(124,58,237,0.5)]'
                        : 'bg-[#151829] text-[#8B8DA8] border border-[rgba(124,58,237,0.12)] hover:border-[rgba(124,58,237,0.3)]'
                    }`}
                  >
                    {selectedSkills.includes(skill) && '✓ '}
                    {skill}
                  </button>
                ))}
              </div>
              <div className="text-xs text-[#8B8DA8] mb-6 text-center">
                {selectedSkills.length}/5 selected
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 rounded-xl font-semibold text-[#8B8DA8] border border-[rgba(124,58,237,0.15)] hover:text-[#F1F0FF]"
                >
                  ← Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={selectedSkills.length === 0}
                  className="flex-1 py-3 rounded-xl font-semibold text-white disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ background: 'linear-gradient(135deg, #7C3AED, #9D5CF0)' }}
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Review + submit */}
          {step === 3 && (
            <div>
              <h3
                style={{ fontFamily: 'var(--font-display)' }}
                className="text-xl font-bold text-[#F1F0FF] mb-6"
              >
                Review & launch
              </h3>

              {/* Preview card */}
              <div className="rounded-xl border border-[rgba(124,58,237,0.2)] bg-[#151829] p-5 mb-8">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0F1221] flex items-center justify-center text-xl">🏗️</div>
                  <div>
                    <div
                      style={{ fontFamily: 'var(--font-display)' }}
                      className="font-bold text-[#F1F0FF]"
                    >
                      {name || 'Your Community'}
                    </div>
                    <span
                      className="badge px-2 py-0.5 rounded-full text-[10px] bg-[rgba(124,58,237,0.15)] text-[#9D5CF0]"
                    >
                      {selectedCat}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {selectedSkills.map((s) => (
                    <span key={s} className="text-[11px] px-2 py-0.5 rounded-md bg-[#0F1221] text-[#8B8DA8] border border-[rgba(124,58,237,0.1)]" style={{ fontFamily: 'var(--font-mono)' }}>
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-[#8B8DA8]">
                  <span>1/10 members (you)</span>
                  <span className="text-[#10B981]">9 spots open</span>
                </div>
                <div className="h-1.5 rounded-full bg-[#0F1221] mt-2 overflow-hidden">
                  <div className="h-full w-[10%] rounded-full bg-gradient-to-r from-[#7C3AED] to-[#9D5CF0]" />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 py-3 rounded-xl font-semibold text-[#8B8DA8] border border-[rgba(124,58,237,0.15)] hover:text-[#F1F0FF]"
                >
                  ← Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 py-3 rounded-xl font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, #7C3AED, #F97316)' }}
                >
                  🚀 Launch Community
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
