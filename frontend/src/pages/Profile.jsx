import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import SkillBadge from '../components/SkillBadge';
import { User, Shield, Globe, Award } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { FaGithub } from 'react-icons/fa';
export default function Profile() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="min-h-screen bg-slate-950 flex font-sans">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <Navbar pageTitle="Developer Profile" />
        
        <main className="flex-1 p-8 overflow-y-auto">
          <Card className="p-8 mb-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-indigo-500/20">
                {user?.name?.charAt(0) || "D"}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">{user?.name || "Developer"}</h1>
                <p className="text-slate-400 text-sm mt-0.5">{user?.email || "dev@example.com"}</p>
                <p className="text-slate-500 text-xs mt-2">{user?.communityDescription || 'Create or join a community to start building together.'}</p>
                <div className="flex gap-2 mt-3">
                  <SkillBadge skill="Full Stack Developer" />
                  <SkillBadge skill={user?.community || "No Community"} />
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://portfolio.dev" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-400" /> Earned Badges
              </h3>
              <div className="space-y-3">
                {['Algorithmic Ace', 'Community Founder', 'Hackathon Top 3'].map((badge, i) => (
                  <div key={i} className="p-3 bg-slate-900 rounded-xl border border-slate-800/80 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-200">{badge}</span>
                    <span className="text-xs font-mono text-indigo-400">Unlocked</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-indigo-400" /> Skill Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {(user?.communityTechnologies?.length ? user.communityTechnologies : ['React.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'Algorithms']).map(skill => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}