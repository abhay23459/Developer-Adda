import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';
import { Calendar, Trophy, Users, Rocket, Clock } from 'lucide-react';

export default function Hackathons() {
  return (
    <div className="min-h-screen bg-slate-950 flex font-sans">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <Navbar pageTitle="Community Hackathons" />
        
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Upcoming Sprints & Hackathons</h1>
            <p className="text-slate-400 text-sm">Compete as a community to build production-ready software under tight timelines.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "DevConnect Buildathon 2026", duration: "48 Hours", status: "Registration Open", prize: "$2,500 Pool", icon: Rocket },
              { title: "Algorithmic Speedrun #12", duration: "6 Hours", status: "Starts Tomorrow", prize: "Exclusive Badges", icon: Trophy }
            ].map((hackathon, i) => (
              <Card key={i} className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
                      <hackathon.icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                      {hackathon.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{hackathon.title}</h3>
                  <div className="space-y-2 text-xs text-slate-400 font-mono mb-6">
                    <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-slate-500" /> Duration: {hackathon.duration}</p>
                    <p className="flex items-center gap-2"><Trophy className="w-4 h-4 text-slate-500" /> Prize: {hackathon.prize}</p>
                  </div>
                </div>
                <Button variant="primary" className="w-full">Register Community</Button>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}