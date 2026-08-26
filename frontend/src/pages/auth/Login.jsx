import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Code2, ArrowRight } from 'lucide-react';
import Button from '../../components/Button';
import { useAuthStore } from '../../store/useAuthStore';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ name: 'Alex Rivera', email, role: 'COMMUNITY_LEADER', community: 'Async-Devs-Alpha' });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center p-6 relative overflow-hidden font-sans">
      <div className="w-full max-w-md bg-slate-900/60 border border-slate-800 p-8 rounded-2xl backdrop-blur-xl relative z-10 shadow-2xl">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <div className="p-2.5 rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/30">
            <Code2 className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-mono">DevConnect</span>
        </div>
        
        <h2 className="text-2xl font-bold text-white text-center mb-1">Welcome back</h2>
        <p className="text-slate-400 text-xs text-center mb-6">Enter your credentials to access your workspace</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alex@example.com"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <Button type="submit" variant="primary" className="w-full mt-2" icon={ArrowRight}>
            Sign In
          </Button>
        </form>

        <p className="text-xs text-slate-400 text-center mt-6">
          Don't have an account?{' '}
          <Link to="/auth/register" className="text-indigo-400 hover:text-indigo-300 font-semibold">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}