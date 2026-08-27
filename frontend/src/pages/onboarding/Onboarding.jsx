import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';

const SKILL_OPTIONS = ['React.js', 'Node.js', 'Python', 'C++', 'Java', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS'];

export default function Onboarding() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const navigate = useNavigate();

  const toggleSkill = (skill) => {
    setSelectedSkills(prev => 
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center p-6 font-sans">
      <Navbar />
      <div className="w-full max-w-xl bg-slate-900/60 border border-slate-800 p-8 rounded-2xl backdrop-blur-xl shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-2">Select Your Tech Stack</h2>
        <p className="text-slate-400 text-sm mb-6">Choose your primary skills so our matching algorithm can assign you to a complementary 10-member team.</p>

        <div className="flex flex-wrap gap-3 mb-8">
          {SKILL_OPTIONS.map((skill) => {
            const isSelected = selectedSkills.includes(skill);
            return (
              <button
                key={skill}
                type="button"
                onClick={() => toggleSkill(skill)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all border ${
                  isSelected 
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30' 
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                }`}
              >
                {skill}
              </button>
            );
          })}
        </div>

        <Button 
          variant="primary" 
          className="w-full"
          disabled={selectedSkills.length === 0}
          onClick={() => navigate('/onboarding/assessment')}
        >
          Proceed to Skill Assessment
        </Button>
      </div>
    </div>
  );
}