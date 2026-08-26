import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import CodeEditor from '../components/CodeEditor';
import { Play, Settings2, Terminal, RefreshCw } from 'lucide-react';

const LANGUAGE_TEMPLATES = {
  javascript: `// JavaScript Environment (Node.js 18.x)\n\nfunction solve(arr) {\n  // Write your solution here\n  return arr.sort((a, b) => a - b);\n}\n\nconsole.log(solve([5, 2, 9, 1, 5, 6]));`,
  python: `# Python 3.10 Environment\n\ndef solve(arr):\n    # Write your solution here\n    return sorted(arr)\n\nprint(solve([5, 2, 9, 1, 5, 6]))`,
  cpp: `// C++ 17 Environment\n#include <iostream>\n#include <vector>\n#include <algorithm>\n\nusing namespace std;\n\nvoid solve(vector<int>& arr) {\n    sort(arr.begin(), arr.end());\n}\n\nint main() {\n    vector<int> arr = {5, 2, 9, 1, 5, 6};\n    solve(arr);\n    for(int x : arr) cout << x << " ";\n    return 0;\n}`
};

export default function Compiler() {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState(LANGUAGE_TEMPLATES.javascript);
  const [output, setOutput] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    setCode(LANGUAGE_TEMPLATES[newLang]);
  };

  const executeCode = () => {
    setIsExecuting(true);
    setOutput('Compiling and executing in sandbox container...');
    
    // Mock API call to Judge0 / Backend execution queue
    setTimeout(() => {
      if (code.includes('sort')) {
        setOutput('[1, 2, 5, 5, 6, 9]\n\nExecution Time: 0.042s\nMemory: 32MB');
      } else {
        setOutput('Error: Process exited with code 1\nCheck syntax.');
      }
      setIsExecuting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex font-sans">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
        <Navbar pageTitle="IDE & Sandboxed Compiler" />
        
        <main className="flex-1 p-6 flex flex-col gap-6 overflow-hidden">
          {/* Top Controls */}
          <div className="flex justify-between items-center bg-slate-900/80 p-4 rounded-xl border border-slate-800 backdrop-blur-md">
            <div className="flex gap-4 items-center">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Environment</label>
                <select 
                  value={language}
                  onChange={handleLanguageChange}
                  className="bg-slate-950 border border-slate-800 text-slate-200 text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-indigo-500 font-mono"
                >
                  <option value="javascript">Node.js (18.x)</option>
                  <option value="python">Python (3.10)</option>
                  <option value="cpp">C++ (GCC 9.4)</option>
                </select>
              </div>
              <div className="h-8 w-px bg-slate-800 mx-2"></div>
              <button className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" title="Settings">
                <Settings2 className="w-5 h-5" />
              </button>
            </div>

            <button 
              onClick={executeCode}
              disabled={isExecuting}
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/50 rounded-xl text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 flex items-center gap-2 transition-all"
            >
              {isExecuting ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-white" />}
              {isExecuting ? 'Running...' : 'Run Code'}
            </button>
          </div>

          {/* Split Layout: Editor + Terminal */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-0">
            {/* Code Editor Container */}
            <div className="flex flex-col h-full rounded-2xl overflow-hidden border border-slate-800">
              <CodeEditor initialCode={code} onRun={executeCode} />
            </div>

            {/* Output Console Container */}
            <div className="flex flex-col h-full bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden">
              <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold text-slate-300">Execution Output</span>
              </div>
              <div className="flex-1 p-4 font-mono text-xs overflow-y-auto bg-black/40 text-slate-300 whitespace-pre-wrap leading-relaxed">
                {output || <span className="text-slate-600 italic">No output yet. Run your code to see results here.</span>}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}