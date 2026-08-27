import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Navbar from '../../components/Navbar';
import { useAuthStore } from '../../store/useAuthStore';

const mockQuestions = [
  { id: 1, question: "What is the worst-case time complexity of QuickSort?", options: ["O(n log n)", "O(n²)", "O(n)", "O(1)"], answer: 1 },
  { id: 2, question: "Which data structure operates on a Last In, First Out (LIFO) principle?", options: ["Queue", "Stack", "Binary Tree", "Heap"], answer: 1 },
];

export default function Assessment() {
  const [answers, setAnswers] = useState({});
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSelect = (qId, optionIdx) => {
    setAnswers({ ...answers, [qId]: optionIdx });
  };

  const handleComplete = () => {
    login({ name: 'Alex Rivera', email: 'alex@example.com', role: 'COMMUNITY_LEADER', community: 'Async-Devs-Alpha' });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center p-6 font-sans">
      <Navbar />
      <div className="w-full max-w-xl bg-slate-900/60 border border-slate-800 p-8 rounded-2xl backdrop-blur-xl shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-2">Initial Skill Assessment</h2>
        <p className="text-slate-400 text-sm mb-6">Answer these quick questions to generate your baseline DSA Rating.</p>

        <div className="space-y-6 mb-8">
          {mockQuestions.map((q) => (
            <Card key={q.id} className="p-5">
              <h4 className="text-sm font-semibold text-white mb-3">{q.id}. {q.question}</h4>
              <div className="space-y-2">
                {q.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(q.id, idx)}
                    className={`w-full text-left px-4 py-2 rounded-xl text-xs font-medium border transition-all ${
                      answers[q.id] === idx 
                        ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300' 
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Button 
          variant="primary" 
          className="w-full"
          disabled={Object.keys(answers).length < mockQuestions.length}
          onClick={handleComplete}
        >
          Calculate Rating & Join Community
        </Button>
      </div>
    </div>
  );
}