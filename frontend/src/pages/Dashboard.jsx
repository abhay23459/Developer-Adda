 
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import StatCard from '../components/StatCard';
import { Users, Code2, Award, ArrowUpRight, CheckCircle2, Trophy, Clock } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { useAuthStore } from '../store/useAuthStore';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const analyticsData = [
  { day: 'Mon', dsaScore: 120, projectPoints: 80 },
  { day: 'Tue', dsaScore: 180, projectPoints: 120 },
  { day: 'Wed', dsaScore: 150, projectPoints: 240 },
  { day: 'Thu', dsaScore: 260, projectPoints: 310 },
  { day: 'Fri', dsaScore: 320, projectPoints: 400 },
  { day: 'Sat', dsaScore: 450, projectPoints: 520 },
  { day: 'Sun', dsaScore: 510, projectPoints: 680 },
];

export default function Dashboard() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="min-h-screen bg-slate-950 flex font-sans">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <Navbar pageTitle="Dashboard Overview" />
        
        <main className="flex-1 p-8 bg-glow-radial overflow-y-auto">
          {/* Header Action */}
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
                Welcome back, {user?.name?.split(' ')[0] || "Developer"} 👋
              </h1>
              <p className="text-slate-400 text-sm">
                Your community <span className="text-orange-600 font-semibold">{user?.community || 'No community yet'}</span> is currently ranked #4 globally.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/community?create=1"
                className="dashboard-action px-5 py-2.5 bg-orange-600 hover:bg-orange-500 rounded-xl text-sm font-semibold text-white transition-all shadow-lg shadow-orange-600/30 flex items-center gap-2"
              >
                <span>Create Community</span>
                <Users className="w-4 h-4" />
              </Link>
              <Link
                to="/compiler"
                className="dashboard-action secondary px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-sm font-semibold text-white transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2"
              >
                <span>Quick Sandbox</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Core Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard 
              title="Community Capacity" 
              value="8 / 10" 
              subtitle={<span className="text-emerald-400 flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> 2 slots available</span>}
              icon={Users} 
              color="indigo" 
            />
            <StatCard 
              title="Global DSA Rating" 
              value={user?.dsaRating || "1,420"} 
              subtitle="Top 15% across Tier 2/3 Colleges" 
              icon={Code2} 
              color="purple" 
            />
            <StatCard 
              title="Contest Points" 
              value={user?.points?.toLocaleString() || "1,250"} 
              subtitle={<span className="text-cyan-400">+180 points earned this week</span>}
              icon={Award} 
              color="cyan" 
            />
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chart Area */}
            <div className="lg:col-span-2 p-6 rounded-2xl glass-card">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-base font-semibold text-white">Skill Progression & XP Output</h3>
                  <p className="text-xs text-slate-400 mt-1">Weekly DSA assessment vs active project points</p>
                </div>
              </div>
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={analyticsData}>
                    <defs>
                      <linearGradient id="colorDsa" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorPoints" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="day" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ background: '#0d111a', border: '1px solid #1e293b', borderRadius: '12px', color: '#f8fafc' }}
                      itemStyle={{ color: '#e2e8f0', fontSize: '12px' }}
                    />
                    <Area type="monotone" dataKey="dsaScore" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#colorDsa)" />
                    <Area type="monotone" dataKey="projectPoints" stroke="#06b6d4" strokeWidth={2} fillOpacity={1} fill="url(#colorPoints)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Upcoming Events Mini-board */}
            <div className="p-6 rounded-2xl glass-card flex flex-col">
              <h3 className="text-base font-semibold text-white mb-6">Upcoming Agenda</h3>
              
              <div className="space-y-4 flex-1">
                {[
                  { title: "Weekly DSA Sprint", time: "Starts in 2h", type: "Contest", icon: Trophy, color: "text-amber-400" },
                  { title: "React Architecture Review", time: "Tomorrow, 5 PM", type: "Project", icon: Clock, color: "text-indigo-400" },
                  { title: "Node.js API Refactor", time: "Friday, 10 AM", type: "Task", icon: Code2, color: "text-emerald-400" }
                ].map((agenda, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/60 hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-3">
                        <agenda.icon className={`w-5 h-5 mt-0.5 ${agenda.color}`} />
                        <div>
                          <h4 className="text-sm font-semibold text-slate-200">{agenda.title}</h4>
                          <p className="text-xs text-slate-400 mt-1">{agenda.time}</p>
                        </div>
                      </div>
                      <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-1 rounded bg-slate-800 text-slate-300">
                        {agenda.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}