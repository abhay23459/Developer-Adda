 
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Settings() {
  return (
    <div className="min-h-screen bg-slate-950 flex font-sans">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <Navbar pageTitle="Account Settings" />
        <main className="flex-1 p-8 overflow-y-auto">
          <Card className="p-6 max-w-2xl">
            <h3 className="text-lg font-bold text-white mb-4">Preferences</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 uppercase block mb-1">Display Name</label>
                <input type="text" defaultValue="Alex Rivera" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-sm text-slate-200" />
              </div>
              <Button variant="primary">Save Changes</Button>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}