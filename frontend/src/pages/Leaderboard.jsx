 
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import { Crown, Flame } from 'lucide-react';

const mockRankings = [
  { rank: 1, name: "ByteStorm Alpha", score: "4,850", members: 10, streak: "14 Days" },
  { rank: 2, name: "AlgoRhythms", score: "4,210", members: 10, streak: "9 Days" },
  { rank: 3, name: "DevConnect Core", score: "3,940", members: 8, streak: "12 Days" },
  { rank: 4, name: "Async-Devs-Alpha", score: "3,650", members: 8, streak: "5 Days", isCurrent: true },
];

export default function Leaderboard() {
  return (
    <div className="leaderboard-page min-h-screen bg-slate-950 flex font-sans">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <Navbar pageTitle="Global Leaderboard" />
        
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Community Rankings</h1>
            <p className="text-slate-400 text-sm">Rankings updated daily based on completed projects, commits, and DSA ratings.</p>
          </div>

          <Card className="p-0 overflow-hidden">
            <div className="grid grid-cols-12 px-6 py-4 bg-slate-900 border-b border-slate-800 text-xs font-mono text-slate-400 uppercase tracking-wider">
              <span className="col-span-1">Rank</span>
              <span className="col-span-5">Community</span>
              <span className="col-span-2">Members</span>
              <span className="col-span-2">Streak</span>
              <span className="col-span-2 text-right">XP Points</span>
            </div>

            <div className="divide-y divide-slate-800/60">
              {mockRankings.map((team) => (
                <div key={team.rank} className={`grid grid-cols-12 px-6 py-4 items-center ${team.isCurrent ? 'bg-indigo-500/10' : 'hover:bg-slate-900/40'}`}>
                  <span className="col-span-1 font-bold font-mono text-white flex items-center gap-1">
                    {team.rank === 1 && <Crown className="w-4 h-4 text-amber-400" />}
                    #{team.rank}
                  </span>
                  <span className={`col-span-5 font-semibold ${team.isCurrent ? 'text-indigo-400 font-bold' : 'text-slate-200'}`}>
                    {team.name} {team.isCurrent && '(Your Team)'}
                  </span>
                  <span className="col-span-2 text-slate-400 text-xs">{team.members}/10</span>
                  <span className="col-span-2 text-amber-400 text-xs font-mono flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 fill-current" /> {team.streak}
                  </span>
                  <span className="col-span-2 text-right font-mono font-bold text-white">{team.score}</span>
                </div>
              ))}
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}