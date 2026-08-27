import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Send, Hash, Paperclip } from 'lucide-react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Alex Rivera', time: '10:42 AM', text: 'Hey team, I pushed the JWT authentication setup to the main branch.' },
    { id: 2, sender: 'Sarah Chen', time: '10:45 AM', text: 'Great! I will wire it up with the PostgreSQL database schema now.' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: 'You', time: 'Just now', text: input }]);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex font-sans">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
        <Navbar pageTitle="Community Chat Room" />
        
        <main className="flex-1 flex flex-col bg-slate-950 overflow-hidden p-6">
          <div className="flex-1 border border-slate-800 rounded-2xl flex flex-col overflow-hidden bg-slate-900/30">
            {/* Room Subheader */}
            <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center gap-2">
              <Hash className="w-5 h-5 text-indigo-400" />
              <span className="font-semibold text-white">general-discussion</span>
            </div>

            {/* Messages Feed */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-indigo-400">{msg.sender}</span>
                    <span className="text-[10px] text-slate-500 font-mono">{msg.time}</span>
                  </div>
                  <p className="text-sm text-slate-300 mt-1 bg-slate-900/80 p-3 rounded-xl border border-slate-800/60 max-w-xl">
                    {msg.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Message Input Bar */}
            <form onSubmit={handleSend} className="p-4 bg-slate-900 border-t border-slate-800 flex gap-3 items-center">
              <button type="button" className="p-2 text-slate-400 hover:text-white">
                <Paperclip className="w-5 h-5" />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 font-sans"
              />
              <button type="submit" className="p-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}