import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import SkillBadge from '../components/SkillBadge';
import { Code2, Play, CheckCircle2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const mockProblems = [
  { id: 1, title: 'Two Sum', category: 'Arrays', difficulty: 'Easy', completed: true, points: 50 },
  { id: 2, title: 'Longest Substring Without Repeating Characters', category: 'Sliding Window', difficulty: 'Medium', completed: true, points: 100 },
  { id: 3, title: 'Trapping Rain Water', category: 'Two Pointers', difficulty: 'Hard', completed: false, points: 200 },
  { id: 4, title: 'Binary Tree Level Order Traversal', category: 'Trees', difficulty: 'Medium', completed: false, points: 100 },
];

export default function DSA() {
  const [filter, setFilter] = useState('All');

  const filteredProblems = filter === 'All' 
    ? mockProblems 
    : mockProblems.filter(p => p.difficulty === filter);

  return (
    <div className="min-h-screen bg-slate-950 flex font-sans">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <Navbar pageTitle="DSA & Skill Assessments" />
        
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Algorithm Challenges</h1>
              <p className="text-slate-400 text-sm">Solve challenges to boost your rating and unlock competitive tiers.</p>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex gap-2 p-1 bg-slate-900 rounded-xl border border-slate-800">
              {['All', 'Easy', 'Medium', 'Hard'].map((diff) => (
                <button
                  key={diff}
                  onClick={() => setFilter(diff)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    filter === diff ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>

          {/* Problem List */}
          <div className="space-y-4">
            {filteredProblems.map((prob) => (
              <Card key={prob.id} className="p-5 flex items-center justify-between hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-xl ${prob.completed ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-900 text-slate-500'}`}>
                    {prob.completed ? <CheckCircle2 className="w-5 h-5" /> : <Code2 className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white flex items-center gap-3">
                      {prob.title}
                      <SkillBadge skill={prob.category} />
                    </h4>
                    <span className={`text-xs font-semibold mt-1 inline-block ${
                      prob.difficulty === 'Easy' ? 'text-emerald-400' : prob.difficulty === 'Medium' ? 'text-amber-400' : 'text-rose-400'
                    }`}>
                      {prob.difficulty} • {prob.points} XP
                    </span>
                  </div>
                </div>

                <Link
                  to="/compiler"
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-xs font-semibold text-slate-200 flex items-center gap-2 transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  {prob.completed ? 'Solve Again' : 'Solve Challenge'}
                </Link>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}