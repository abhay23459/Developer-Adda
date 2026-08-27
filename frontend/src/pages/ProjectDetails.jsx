 
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';
import {  ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
export default function ProjectDetails() {
  return (
    <div className="min-h-screen bg-slate-950 flex font-sans">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <Navbar pageTitle="Project Specification" />
        <main className="flex-1 p-8 overflow-y-auto">
          <Card className="p-8">
            <h1 className="text-3xl font-bold text-white mb-2">DevConnect Platform</h1>
            <p className="text-slate-400 text-sm mb-6">Detailed architectural breakdown and deployment specs for the active community sprint.</p>
            <div className="flex gap-3">
              <Button variant="secondary" icon={FaGithub}>Repository</Button>
              <Button variant="primary" icon={ExternalLink}>Live Demo</Button>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}