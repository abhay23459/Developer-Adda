import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Users, 
  Trophy, 
  ArrowRight, 
  Terminal as TerminalIcon, 
  CheckCircle2, 
  GitPullRequest, 
  Activity, 
  ShieldCheck, 
  Layout, 
  Play, 
  Copy, 
  Cpu, 
  Sparkles, 
  Check, 
  TrendingUp, 
  Layers, 
  RotateCw,Terminal
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DevConnectLanding() {
  const [copied, setCopied] = useState(false);
  
  // Track dynamic text opacity fade state
  const [fadeState, setFadeState] = useState(0);

  // Track auto-flipping state for right-side cards
  const [autoFlipped, setAutoFlipped] = useState({
    card1: false,
    card2: false,
    card3: false,
    card4: false,
  });

  // Automatically flip cards and fade left-side text sequentially every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState((prev) => (prev === 0 ? 1 : 0));
      setAutoFlipped((prev) => ({
        card1: !prev.card1,
        card2: !prev.card2,
        card3: !prev.card3,
        card4: !prev.card4,
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleCopy = (e) => {
    e.stopPropagation();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#060810] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white pb-24 overflow-x-hidden">
      
      {/* Background Animated Glows */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.18),rgba(255,255,255,0))] pointer-events-none" />
      <div className="fixed top-1/4 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="fixed bottom-1/4 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

      {/* Embedded Styles for 3D Auto-Flip & Fade Animations */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
          transition: transform 0.9s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .fade-transition {
          transition: opacity 0.7s ease-in-out, transform 0.7s ease-in-out;
        }
      `}</style>

      {/* Navigation */}
      <nav className="relative z-20 flex justify-between items-center max-w-7xl mx-auto px-6 py-5 border-b border-slate-800/60 backdrop-blur-md">
        <div className="flex items-center gap-3 font-mono font-bold text-xl tracking-tight">
          <div className="p-2 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-600/40 ring-1 ring-indigo-400/30">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span>DevConnect</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#features" className="text-white hover:text-indigo-400 transition-colors">Features</a>
          <a href="#matching" className="hover:text-white transition-colors">Pricing</a>
          <a href="#analytics" className="hover:text-white transition-colors">About</a>

        </div>

      <div className="flex items-center gap-4">
  <Link 
    to="/auth/login" 
    className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
  >
    Log in
  </Link>
  
  <Link 
    to="/auth/register" 
    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-indigo-600/25 border border-indigo-400/30 hover:scale-105 text-white inline-flex items-center justify-center"
  >
    Sign up
  </Link>
</div>
      </nav>

      {/* Hero Header */}
    <section className="relative z-10 max-w-4xl mx-auto text-center pt-16 pb-12 px-6">
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-6 shadow-inner">
    <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Transparent Background Code Stream Active
  </div>

  <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
    Architected for High-Velocity{' '}
    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
      Engineering Teams
    </span>
  </h1>

  <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
    Watch real-time squad cards flip continuously alongside auto-fading feature descriptions and ambient background code streams.
  </p>

  {/* CTA Action Buttons */}
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
    <Link
      to="/auth/register"
      className="w-full sm:w-auto px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/30 border border-indigo-400/30 hover:scale-105"
    >
      Get Started Free <ArrowRight className="w-4 h-4" />
    </Link>

    <a
      href="#features"
      className="w-full sm:w-auto px-7 py-3.5 bg-slate-900/80 hover:bg-slate-800 rounded-xl text-sm font-semibold text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-all border border-slate-800 backdrop-blur-md"
    >
      <Terminal className="w-4 h-4 text-slate-400" /> Explore Features
    </a>
  </div>
</section>

      {/* ROW-BY-ROW CONTAINER (TEXT LEFT, CARD RIGHT) */}
      <main id="features" className="relative z-10 max-w-6xl mx-auto px-6 space-y-20">

        {/* ================= ROW 1: TEXT LEFT | CARD RIGHT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT SIDE: Text with Auto-Fade Animation */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              <Users className="w-3.5 h-3.5" /> Topology & Matching
            </div>

            <h2 className="text-3xl font-extrabold text-white leading-tight">
              Automated 10-Dev Squad Balancer
            </h2>

            {/* Dynamic Fading Text Container */}
            <div className="relative min-h-[140px]">
              <div className={`fade-transition absolute inset-0 ${fadeState === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <p className="text-slate-300 text-base leading-relaxed">
                  Our matching engine algorithmically pairs developers based on stack compatibility, domain experience, and complementary timezones to construct high-performing micro-teams.
                </p>
                <div className="mt-4 flex items-center gap-2 text-indigo-400 font-mono text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live Status: Evaluating Skill Trees
                </div>
              </div>

              <div className={`fade-transition absolute inset-0 ${fadeState === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                <p className="text-purple-300 text-base leading-relaxed font-medium">
                  Automated conflict detection ensures no single squad is over-indexed on frontend or backend, maintaining an optimal 1:1 senior-to-mid developer mentorship ratio.
                </p>
                <div className="mt-4 flex items-center gap-2 text-purple-400 font-mono text-xs">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" /> Telemetry: 99.4% Match Rate Achieved
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-sm font-semibold text-white flex items-center gap-2 shadow-lg shadow-indigo-600/20">
                Configure Squad <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Auto-Flipping Card */}
          <div className="lg:col-span-7 perspective-1000 h-[380px]">
            <div className={`relative w-full h-full transform-style-3d ${autoFlipped.card1 ? 'rotate-y-180' : ''}`}>
              
              {/* Card Front */}
              <div className="backface-hidden absolute inset-0 bg-slate-900/70 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono text-indigo-400 font-bold">FRONT SIDE</span>
                    <span className="text-[11px] font-mono bg-indigo-500/10 text-indigo-300 px-2.5 py-1 rounded-full border border-indigo-500/20 flex items-center gap-1.5">
                      <RotateCw className="w-3 h-3 animate-spin text-indigo-400" /> Auto-Flipping
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Active Squad Topology</h3>
                  
                  {/* Developers Grid */}
                  <div className="grid grid-cols-3 gap-3 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                    {[
                      { name: 'Alex M.', stack: 'React', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80' },
                      { name: 'David K.', stack: 'Go', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80' },
                      { name: 'Elena R.', stack: 'K8s', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80' },
                    ].map((user, i) => (
                      <div key={i} className="bg-slate-900 p-2.5 rounded-lg text-center flex flex-col items-center">
                        <img src={user.img} alt={user.name} className="w-9 h-9 rounded-full object-cover mb-1.5 ring-2 ring-indigo-500/30" />
                        <span className="text-xs font-semibold text-slate-200">{user.name}</span>
                        <span className="text-[10px] font-mono text-indigo-400">{user.stack}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="text-xs font-mono text-slate-500 text-right">01 / Topology View</div>
              </div>

              {/* Card Back */}
              <div className="backface-hidden rotate-y-180 absolute inset-0 bg-slate-900 border border-indigo-500/40 rounded-3xl p-6 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono text-indigo-400 font-bold">BACK SIDE (SPECS)</span>
                    <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2.5 py-1 rounded-full">Telemetry View</span>
                  </div>
                  <h3 className="text-xl font-bold text-indigo-300 mb-3 flex items-center gap-2">
                    <Cpu className="w-5 h-5" /> Matching Engine Metrics
                  </h3>
                  <div className="grid grid-cols-3 gap-3 font-mono text-xs mt-4">
                    <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-center">
                      <div className="text-indigo-400 text-lg font-bold">99.4%</div>
                      <div className="text-slate-500 mt-0.5 text-[10px]">Stack Alignment</div>
                    </div>
                    <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-center">
                      <div className="text-purple-400 text-lg font-bold">&lt; 120ms</div>
                      <div className="text-slate-500 mt-0.5 text-[10px]">Match Speed</div>
                    </div>
                    <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-center">
                      <div className="text-emerald-400 text-lg font-bold">10 / 10</div>
                      <div className="text-slate-500 mt-0.5 text-[10px]">Squad Quota</div>
                    </div>
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-500 text-right">01 / Specs View</div>
              </div>

            </div>
          </div>

        </div>

        {/* ================= ROW 2: TEXT LEFT | CARD RIGHT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT SIDE: Text with Auto-Fade Animation */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
              <Layout className="w-3.5 h-3.5" /> Roadmap & Velocity
            </div>

            <h2 className="text-3xl font-extrabold text-white leading-tight">
              Sprint Velocity & Gantt Analytics
            </h2>

            {/* Dynamic Fading Text Container */}
            <div className="relative min-h-[140px]">
              <div className={`fade-transition absolute inset-0 ${fadeState === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <p className="text-slate-300 text-base leading-relaxed">
                  Track ongoing milestone progression with interactive Gantt timelines, real-time pull request velocity tracking, and commit frequency breakdown.
                </p>
                <div className="mt-4 flex items-center gap-2 text-purple-400 font-mono text-xs">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" /> Tracked Velocity: 32 Merged PRs / Week
                </div>
              </div>

              <div className={`fade-transition absolute inset-0 ${fadeState === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                <p className="text-pink-300 text-base leading-relaxed font-medium">
                  Automated pull request review timers prompt peer reviewers when code stays in queue for over 2 hours, drastically eliminating sprint bottlenecks.
                </p>
                <div className="mt-4 flex items-center gap-2 text-pink-400 font-mono text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Review Benchmark: 4.2 Hours Avg Turnaround
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 rounded-xl text-sm font-semibold text-white flex items-center gap-2 shadow-lg shadow-purple-600/20">
                View Live Velocity <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Auto-Flipping Card */}
          <div className="lg:col-span-7 perspective-1000 h-[380px]">
            <div className={`relative w-full h-full transform-style-3d ${autoFlipped.card2 ? 'rotate-y-180' : ''}`}>
              
              {/* Card Front */}
              <div className="backface-hidden absolute inset-0 bg-slate-900/70 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono text-purple-400 font-bold">FRONT SIDE</span>
                    <span className="text-[11px] font-mono bg-purple-500/10 text-purple-300 px-2.5 py-1 rounded-full border border-purple-500/20 flex items-center gap-1.5">
                      <RotateCw className="w-3 h-3 animate-spin text-purple-400" /> Auto-Flipping
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Sprint Timeline Progress</h3>

                  {/* Visual Gantt Bar */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1">
                        <span className="text-slate-300">Microservices Architecture</span>
                        <span className="text-purple-400 font-bold">85%</span>
                      </div>
                      <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full" style={{ width: '85%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1">
                        <span className="text-slate-300">Auth Gateway & GraphQL</span>
                        <span className="text-pink-400 font-bold">60%</span>
                      </div>
                      <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
                        <div className="bg-gradient-to-r from-pink-500 to-rose-500 h-full rounded-full" style={{ width: '60%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-500 text-right">02 / Gantt View</div>
              </div>

              {/* Card Back */}
              <div className="backface-hidden rotate-y-180 absolute inset-0 bg-slate-900 border border-purple-500/40 rounded-3xl p-6 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono text-purple-400 font-bold">BACK SIDE (HEATMAP)</span>
                    <span className="text-xs font-mono bg-purple-500/20 text-purple-300 px-2.5 py-1 rounded-full">Commit Analytics</span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" /> Code Review Frequency
                  </h3>
                  
                  {/* Bar Chart Visual */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-end justify-between gap-2 h-28 pt-4">
                    {[40, 75, 55, 90, 65, 100, 80].map((val, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t" style={{ height: `${val}%` }} />
                    ))}
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-500 text-right">02 / Heatmap View</div>
              </div>

            </div>
          </div>

        </div>

        {/* ================= ROW 3: TEXT LEFT | CARD RIGHT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT SIDE: Text with Auto-Fade Animation */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <Activity className="w-3.5 h-3.5" /> Skill Growth
            </div>

            <h2 className="text-3xl font-extrabold text-white leading-tight">
              Dynamic Skill Radar Matrix
            </h2>

            {/* Dynamic Fading Text Container */}
            <div className="relative min-h-[140px]">
              <div className={`fade-transition absolute inset-0 ${fadeState === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <p className="text-slate-300 text-base leading-relaxed">
                  Evaluate individual and squad technical mastery across algorithmic efficiency, cloud orchestration, security compliance, and clean code principles.
                </p>
                <div className="mt-4 flex items-center gap-2 text-emerald-400 font-mono text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Verification Engine: Active
                </div>
              </div>

              <div className={`fade-transition absolute inset-0 ${fadeState === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                <p className="text-teal-300 text-base leading-relaxed font-medium">
                  Earn verified skill badges through peer-reviewed pull requests and completed system design benchmarks to display on your global developer profile.
                </p>
                <div className="mt-4 flex items-center gap-2 text-teal-400 font-mono text-xs">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" /> Earned: 12 Verified Badges
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-sm font-semibold text-white flex items-center gap-2 shadow-lg shadow-emerald-600/20">
                Explore Skill Matrix <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Auto-Flipping Card */}
          <div className="lg:col-span-7 perspective-1000 h-[380px]">
            <div className={`relative w-full h-full transform-style-3d ${autoFlipped.card3 ? 'rotate-y-180' : ''}`}>
              
              {/* Card Front */}
              <div className="backface-hidden absolute inset-0 bg-slate-900/70 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono text-emerald-400 font-bold">FRONT SIDE</span>
                    <span className="text-[11px] font-mono bg-emerald-500/10 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
                      <RotateCw className="w-3 h-3 animate-spin text-emerald-400" /> Auto-Flipping
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Technical Proficiency Radar</h3>

                  {/* SVG Radar Visual */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex justify-center items-center">
                    <svg className="w-28 h-28" viewBox="0 0 100 100">
                      <polygon points="50,10 90,38 75,85 25,85 10,38" fill="none" stroke="#1e293b" strokeWidth="1" />
                      <polygon points="50,25 75,42 65,70 35,70 25,42" fill="none" stroke="#1e293b" strokeWidth="1" />
                      <polygon points="50,15 82,38 70,80 30,75 18,40" fill="rgba(16, 185, 129, 0.25)" stroke="#10b981" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-500 text-right">03 / Radar View</div>
              </div>

              {/* Card Back */}
              <div className="backface-hidden rotate-y-180 absolute inset-0 bg-slate-900 border border-emerald-500/40 rounded-3xl p-6 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono text-emerald-400 font-bold">BACK SIDE (BADGES)</span>
                    <span className="text-xs font-mono bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full">Achievements</span>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" /> Squad Milestones
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-mono">
                      <Trophy className="w-4 h-4" /> System Architect
                    </div>
                    <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono">
                      <ShieldCheck className="w-4 h-4" /> Security Verified
                    </div>
                    <div className="flex items-center gap-2 text-purple-400 text-xs font-mono">
                      <GitPullRequest className="w-4 h-4" /> PR Champion
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono">
                      <CheckCircle2 className="w-4 h-4" /> Clean Code
                    </div>
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-500 text-right">03 / Badges View</div>
              </div>

            </div>
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/80 mt-24 py-8 text-center text-xs text-slate-500 font-mono max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>© 2026 DevConnect Inc. All rights reserved.</div>
        <div className="flex gap-6 text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Documentation</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Community</a>
        </div>
      </footer>
    </div>
  );
}