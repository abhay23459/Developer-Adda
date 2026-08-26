import React from 'react';
import { Search, Bell, Sparkles, UserCheck } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';

export default function Navbar({ pageTitle = "Dashboard" }) {
  const user = useAuthStore((state) => state.user);

  return (
    <header className="h-20 w-full border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-20">
      {/* Page Title & Context */}
      <div>
        <h2 className="text-xl font-bold tracking-tight text-white">{pageTitle}</h2>
        <p className="text-xs text-slate-400 font-mono">
          Tier {user?.collegeTier || "3"} • Community ID: <span className="text-indigo-400">{user?.community || "Unassigned"}</span>
        </p>
      </div>

      {/* Search Bar & Quick Tools */}
      <div className="flex items-center gap-4">
        <div className="relative w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search communities, DSA, projects..."
            className="w-full bg-slate-900/80 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        {/* Action Icons */}
        <button className="relative p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors">
          <Bell className="w-4 h-4" />
          <span className="w-2 h-2 rounded-full bg-indigo-500 absolute top-2 right-2 ring-4 ring-slate-950" />
        </button>

        {/* User Badge */}
        <div className="flex items-center gap-3 pl-2 border-l border-slate-800">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 p-[1px]">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-bold text-xs text-indigo-300">
              {user?.name?.slice(0, 2).toUpperCase() || "DEV"}
            </div>
          </div>
          <div className="hidden md:block">
            <h4 className="text-xs font-semibold text-slate-200">{user?.name || "Developer"}</h4>
            <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
              <UserCheck className="w-3 h-3" /> Online
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}