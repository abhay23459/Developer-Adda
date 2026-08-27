 
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';
import { Trophy } from 'lucide-react';

export default function Contests() {
  return (
    <div className="min-h-screen bg-slate-950 flex font-sans">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <Navbar pageTitle="Competitive Arena" />
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">Active Coding Contests</h1>
            <p className="text-slate-400 text-sm">Participate in timed contests to earn individual and community rank points.</p>
          </div>
          <Card className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Weekly Speedrun #42</h3>
                <p className="text-xs text-slate-400 mt-0.5">Duration: 90 mins • 4 Problems</p>
              </div>
            </div>
            <Button variant="primary">Enter Arena</Button>
          </Card>
        </main>
      </div>
    </div>
  );
}