import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';
import SkillBadge from '../components/SkillBadge';
import { Plus, ExternalLink, Kanban } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const initialTasks = [
  { id: '1', title: 'Setup JWT Auth Flow', status: 'TODO', assignee: 'Alex', priority: 'High' },
  { id: '2', title: 'Design Community Dashboard UI', status: 'IN_PROGRESS', assignee: 'Anita', priority: 'Medium' },
  { id: '3', title: 'Integrate Judge0 Compiler API', status: 'IN_PROGRESS', assignee: 'Vikram', priority: 'High' },
  { id: '4', title: 'Configure PostgreSQL Schemas', status: 'DONE', assignee: 'Sarah', priority: 'Low' },
];

export default function Projects() {
  const [tasks] = useState(initialTasks);

  return (
    <div className="min-h-screen bg-slate-950 flex font-sans">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <Navbar pageTitle="Community Projects & Kanban" />
        
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Active Project Banner */}
          <div className="p-6 rounded-2xl glass-card border border-indigo-500/20 mb-8 flex justify-between items-center">
            <div>
              <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest">Active Sprint Project</span>
              <h2 className="text-2xl font-bold text-white mt-1">DevConnect - AI Pair Programming Platform</h2>
              <p className="text-slate-400 text-sm mt-1 max-w-2xl">
                A real-time collaborative workspace integrating WebSockets and sandboxed remote code execution.
              </p>
              <div className="flex gap-2 mt-4">
                <SkillBadge skill="React.js" />
                <SkillBadge skill="Node.js" />
                <SkillBadge skill="WebSockets" />
                <SkillBadge skill="Docker" />
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" icon={FaGithub}>Repo</Button>
              <Button variant="primary" icon={ExternalLink}>Live Preview</Button>
            </div>
          </div>

          {/* Kanban Section */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Kanban className="w-5 h-5 text-indigo-400" /> Sprint Task Board
            </h3>
            <Button variant="secondary" icon={Plus}>Add Task</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['TODO', 'IN_PROGRESS', 'DONE'].map((status) => (
              <div key={status} className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col min-h-[400px]">
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-800">
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    {status.replace('_', ' ')}
                  </h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {tasks.filter(t => t.status === status).length}
                  </span>
                </div>

                <div className="space-y-3 flex-1">
                  {tasks.filter(t => t.status === status).map((task) => (
                    <Card key={task.id} className="p-4 border-slate-800/80 bg-slate-900/90">
                      <div className="flex justify-between items-start mb-2">
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                          task.priority === 'High' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {task.priority}
                        </span>
                        <span className="text-xs font-mono text-slate-400">{task.assignee}</span>
                      </div>
                      <h5 className="text-sm font-semibold text-slate-200">{task.title}</h5>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}