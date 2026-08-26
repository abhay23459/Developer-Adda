import React from 'react';

export default function SkillBadge({ skill, level = "Intermediate" }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono text-[11px]">
      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
      {skill}
      {level && <span className="text-slate-500 text-[9px]">({level})</span>}
    </span>
  );
}