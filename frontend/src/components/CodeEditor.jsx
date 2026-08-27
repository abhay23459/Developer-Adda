import { useState } from 'react';
import { Play, Copy, Check, Terminal } from 'lucide-react';

export default function CodeEditor({ initialCode = "// Write your code here...", onRun }) {
  const [code, setCode] = useState(initialCode);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden flex flex-col font-mono text-xs">
      {/* Top Controls Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-indigo-400" />
          <span className="text-slate-400 text-xs font-semibold">solution.js</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => onRun && onRun(code)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-sans text-xs font-semibold rounded-lg shadow-md shadow-indigo-600/30 transition-all"
          >
            <Play className="w-3 h-3 fill-white" /> Run Code
          </button>
        </div>
      </div>

      {/* Code Textarea */}
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck="false"
        className="w-full h-64 p-4 bg-slate-950/50 text-slate-200 focus:outline-none resize-none leading-relaxed font-mono"
      />
    </div>
  );
}