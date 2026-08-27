 
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import SkillBadge from '../components/SkillBadge';

export default function CommunityDetails() {
  return (
    <div className="min-h-screen bg-slate-950 flex font-sans">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <Navbar pageTitle="Community Details" />
        <main className="flex-1 p-8 overflow-y-auto">
          <Card className="p-8 mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">Async-Devs-Alpha</h1>
            <p className="text-slate-400 text-sm mb-4">A high-performing tier 2 team focusing on full-stack web development and algorithm optimization.</p>
            <div className="flex gap-2">
              <SkillBadge skill="React" />
              <SkillBadge skill="Node.js" />
              <SkillBadge skill="C++" />
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}