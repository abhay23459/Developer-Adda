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
  Flame,
  LogOut
} from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

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
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <aside className="app-sidebar w-64 h-screen fixed left-0 top-0 bg-slate-950/80 backdrop-blur-xl border-r border-slate-800/80 flex flex-col z-30">
      {/* Brand Header */}
      <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#ff542b] p-[1px] shadow-lg shadow-orange-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <Zap className="w-5 h-5 text-[#ff542b] fill-orange-400/20" />
            </div>
          </div>
        <div>
            <h1
              className="font-bold text-lg tracking-tight text-white"
              style={{ margin: 0, maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: '1.125rem', lineHeight: 1.2, color: '#ffffff' }}
              title={user?.community || 'Async-Devs-Alpha'}
            >
              {user?.community || 'Async-Devs-Alpha'}
            </h1>
          <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase">Local Build Network</span>
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
                `sidebar-nav-link flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20 shadow-sm shadow-orange-500/10'
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
          <span className="text-orange-400 font-semibold">{user?.points || 0} PTS</span>
        </div>
        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-amber-400 h-full w-[65%]" />
        </div>
      </div>
      <button
        className="mx-4 mb-5 flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-orange-400 hover:bg-slate-900/60 transition-all duration-200"
        type="button"
        onClick={handleLogout}
      >
        <LogOut className="w-4 h-4" />
        <span>Logout</span>
      </button>
    </aside>
  );
}