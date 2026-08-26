import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';
import SkillBadge from '../components/SkillBadge';
import { Crown, Mail, MessageSquare, Plus, Shield ,Users} from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';

// Mock 10-member team
const mockMembers = [
  { id: 1, name: 'Alex Rivera', role: 'COMMUNITY_LEADER', skills: ['React', 'Node.js', 'System Design'], dsa: 1420 },
  { id: 2, name: 'Sarah Chen', role: 'MEMBER', skills: ['Python', 'Django', 'PostgreSQL'], dsa: 1350 },
  { id: 3, name: 'Rahul Sharma', role: 'MEMBER', skills: ['React Native', 'Firebase'], dsa: 1100 },
  { id: 4, name: 'Priya Patel', role: 'MEMBER', skills: ['MongoDB', 'Express.js', 'AWS'], dsa: 1280 },
  { id: 5, name: 'Vikram Singh', role: 'MEMBER', skills: ['C++', 'Algorithms', 'System Design'], dsa: 1650 },
  { id: 6, name: 'Anita Desai', role: 'MEMBER', skills: ['Figma', 'React', 'Tailwind'], dsa: 950 },
  { id: 7, name: 'Karan Kumar', role: 'MEMBER', skills: ['Java', 'Spring Boot', 'MySQL'], dsa: 1400 },
  { id: 8, name: 'Neha Gupta', role: 'MEMBER', skills: ['Docker', 'Kubernetes', 'CI/CD'], dsa: 1150 },
];

export default function Community() {
  const user = useAuthStore((state) => state.user);
  const isLeader = user?.role === 'COMMUNITY_LEADER';

  return (
    <div className="min-h-screen bg-slate-950 flex font-sans">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <Navbar pageTitle="My Community Space" />
        
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold tracking-tight text-white">{user?.community || "Async-Devs-Alpha"}</h1>
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold border border-indigo-500/20 flex items-center gap-1">
                  <Shield className="w-3 h-3" /> Intermediate Tier
                </span>
              </div>
              <p className="text-slate-400 text-sm">Matched purely on complementary tech stacks and DSA proficiency.</p>
            </div>
            
            <div className="flex gap-3">
              <Button variant="secondary" icon={MessageSquare}>Group Chat</Button>
              {isLeader && <Button variant="primary" icon={Plus}>Manage Roles</Button>}
            </div>
          </div>

          {/* Tech Stack Aggregation */}
          <Card className="mb-8 p-6" hoverable={false}>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4 font-mono">Community Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'Python', 'C++', 'AWS', 'Docker'].map(skill => (
                <SkillBadge key={skill} skill={skill} level={null} />
              ))}
            </div>
          </Card>

          {/* 10 Member Grid */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Roster <span className="text-slate-500 font-mono text-sm ml-2">({mockMembers.length}/10 capacity)</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockMembers.map((member) => (
              <Card key={member.id} className="p-5 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border border-slate-700 flex items-center justify-center text-lg font-bold text-slate-300">
                    {member.name.charAt(0)}
                  </div>
                  {member.role === 'COMMUNITY_LEADER' && (
                    <div className="p-1.5 bg-amber-500/10 rounded-lg border border-amber-500/20 text-amber-400" title="Community Leader">
                      <Crown className="w-4 h-4" />
                    </div>
                  )}
                </div>
                
                <h4 className="font-semibold text-white mb-1">{member.name}</h4>
                <div className="flex items-center gap-4 text-xs text-slate-400 font-mono mb-4">
                  <span>DSA: <span className="text-purple-400">{member.dsa}</span></span>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto mb-5">
                  {member.skills.slice(0,2).map(skill => (
                    <span key={skill} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">{skill}</span>
                  ))}
                  {member.skills.length > 2 && <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px]">+{member.skills.length - 2}</span>}
                </div>

                <div className="flex gap-2 pt-4 border-t border-slate-800/80 mt-auto">
                  <button className="flex-1 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 border border-slate-800">
                    <MessageSquare className="w-3.5 h-3.5" /> DM
                  </button>
                  <button className="flex-1 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 border border-slate-800">
                    <Mail className="w-3.5 h-3.5" /> Invite
                  </button>
                </div>
              </Card>
            ))}
            
            {/* Empty Slots */}
            {Array.from({ length: 10 - mockMembers.length }).map((_, i) => (
              <div key={`empty-${i}`} className="p-6 rounded-2xl border-2 border-dashed border-slate-800 flex flex-col items-center justify-center text-center h-full min-h-[250px] bg-slate-900/20">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center mb-3">
                  <Users className="w-4 h-4 text-slate-500" />
                </div>
                <h4 className="text-sm font-semibold text-slate-400">Open Slot</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-[120px]">Awaiting algorithm match</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}