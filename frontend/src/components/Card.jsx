import React from 'react';

export default function Card({ children, className = "", hoverable = true, ...props }) {
  return (
    <div
      className={`glass-card p-6 rounded-2xl border border-slate-800/80 transition-all duration-300 ${
        hoverable ? 'hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-0.5' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}