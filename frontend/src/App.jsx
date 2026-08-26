import React from 'react';
import AppRoutes from './routes';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      <AppRoutes />
    </div>
  );
}