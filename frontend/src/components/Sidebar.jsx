import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  FolderGit2,
  Code2,
  Trophy,
  Terminal,
  MessageSquare,
  User,
  Zap,
  Flame
} from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'My Community', path: '/community', icon: Users },
  { name: 'Projects', path: '/projects', icon: FolderGit2 },
  { name: 'DSA & Quizzes', path: '/dsa', icon: Code2 },
  { name: 'Leaderboard', path: '/leaderboard', icon: Trophy },
  { name: 'IDE Compiler', path: '/compiler', icon: Terminal },
  { name: 'Team Chat', path: '/chat', icon: MessageSquare },
  { name: 'Profile', path: '/profile', icon: User },
];

export default function Sidebar() {
  const user = useAuthStore((state) => state.user);

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-slate-950/80 backdrop-blur-xl border-r border-slate-800/80 flex flex-col z-30">
      {/* Brand Header */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20">
          <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
            <Zap className="w-5 h-5 text-indigo-400 fill-indigo-400/20" />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-lg tracking-tight text-white">
            Developer<span className="text-indigo-400">-Adda</span>
          </h1>
          <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase">Tier 2/3 Accelerator</span>
        </div>
      </div>

      {/* Nav List */}
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 shadow-sm shadow-indigo-500/10'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`
              }
            >
              <Icon className="w-4 h-4" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Community Status Card */}
      <div className="p-4 mx-4 mb-4 rounded-xl glass-card border border-indigo-500/10">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
          <span className="flex items-center gap-1 font-mono">
            <Flame className="w-3.5 h-3.5 text-amber-500" /> Rank #4
          </span>
          <span className="text-indigo-400 font-semibold">{user?.points || 0} PTS</span>
        </div>
        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full w-[65%]" />
        </div>
      </div>
    </aside>
  );
}