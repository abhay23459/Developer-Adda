import AppLayout from '../components/AppLayout';
import { useState } from 'react';

const starters = {
  python: `# TierConnect Compiler — Python
def solve():
    n = int(input())
    arr = list(map(int, input().split()))

    # Your solution here
    result = sum(arr)
    print(result)

solve()`,
  javascript: `// TierConnect Compiler — JavaScript
const lines = require('fs').readFileSync('/dev/stdin','utf8').split('\\n');
let idx = 0;

const n = parseInt(lines[idx++]);
const arr = lines[idx++].split(' ').map(Number);

// Your solution here
console.log(arr.reduce((a, b) => a + b, 0));`,
  cpp: `// TierConnect Compiler — C++
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    vector<int> arr(n);
    for (auto& x : arr) cin >> x;

    // Your solution here
    cout << accumulate(arr.begin(), arr.end(), 0) << "\\n";
    return 0;
}`,
  java: `// TierConnect Compiler — Java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) arr[i] = sc.nextInt();

        // Your solution here
        System.out.println(Arrays.stream(arr).sum());
    }
}`,
};

const mockOutput = `Running your code...
───────────────────
Input:
5
1 2 3 4 5

Output:
15

───────────────────
✓ Accepted (42ms)
Memory: 14.2 MB`;

export default function Compiler() {
  const [lang, setLang] = useState('python');
  const [code, setCode] = useState(starters.python);
  const [input, setInput] = useState('5\n1 2 3 4 5');
  const [output, setOutput] = useState('');
  const [running, setRunning] = useState(false);
  const [tab, setTab] = useState('code');

  const handleLangChange = (l) => { setLang(l); setCode(starters[l]); };

  const handleRun = async () => {
    setRunning(true);
    setOutput('');
    await new Promise((r) => setTimeout(r, 1200));
    setOutput(mockOutput);
    setRunning(false);
  };

  return (
    <AppLayout>
      <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 0px)', overflow: 'hidden' }}>
        {/* Toolbar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 20px', borderBottom: '1px solid var(--border)', background: 'var(--surface)', flexWrap: 'wrap', gap: 10 }}>
          <h2 style={{ fontSize: 15, fontWeight: 700, marginRight: 8 }}>Compiler</h2>
          <div style={{ display: 'flex', gap: 4 }}>
            {['python', 'javascript', 'cpp', 'java'].map((l) => (
              <button key={l} onClick={() => handleLangChange(l)} className="badge" style={{ padding: '5px 10px', borderRadius: 7, border: `1px solid ${lang === l ? 'rgba(124,58,237,0.5)' : 'var(--border)'}`, background: lang === l ? 'rgba(124,58,237,0.15)' : 'var(--surface-2)', color: lang === l ? 'var(--primary-light)' : 'var(--muted)', cursor: 'pointer', transition: 'all 0.15s' }}>{l}</button>
            ))}
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
            <button className="btn-outline" style={{ padding: '7px 14px', fontSize: 12 }} onClick={() => setCode(starters[lang])}>Reset</button>
            <button className="btn-primary" style={{ padding: '7px 18px', fontSize: 12, display: 'flex', alignItems: 'center', gap: 6 }} onClick={handleRun} disabled={running}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10 }}>▶</span>
              {running ? 'Running…' : 'Run Code'}
            </button>
          </div>
        </div>

        {/* Editor area */}
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          {/* Code panel */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--border)', minWidth: 0 }}>
            <div style={{ padding: '6px 16px', background: 'var(--surface-2)', borderBottom: '1px solid var(--border)', fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--primary)', display: 'inline-block' }} />
              solution.{lang === 'cpp' ? 'cpp' : lang === 'javascript' ? 'js' : lang}
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck={false}
              style={{ flex: 1, background: '#050710', color: '#E2E8F0', fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 1.7, padding: '16px 20px', border: 'none', outline: 'none', resize: 'none', tabSize: 4 }}
            />
          </div>

          {/* Right panel */}
          <div style={{ width: 340, display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
            <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', background: 'var(--surface-2)' }}>
              {['input', 'output'].map((t) => (
                <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: '9px', fontSize: 12, fontWeight: 500, border: 'none', background: tab === t ? 'var(--surface)' : 'transparent', color: tab === t ? 'var(--text)' : 'var(--muted)', borderBottom: tab === t ? '2px solid var(--primary)' : '2px solid transparent', cursor: 'pointer', textTransform: 'capitalize' }}>{t}</button>
              ))}
            </div>

            {tab === 'input' && (
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your input here…"
                spellCheck={false}
                style={{ flex: 1, background: '#050710', color: '#E2E8F0', fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 1.7, padding: '14px 16px', border: 'none', outline: 'none', resize: 'none' }}
              />
            )}

            {tab === 'output' && (
              <div style={{ flex: 1, background: '#050710', color: running ? 'var(--accent)' : output ? 'var(--green)' : 'var(--faint)', fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 1.7, padding: '14px 16px', overflowY: 'auto', whiteSpace: 'pre-wrap' }}>
                {running ? 'Compiling and running…\n▓▓▓░░░░░░░' : output || 'Run your code to see output here.'}
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
