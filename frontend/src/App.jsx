import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Communities from './components/Communities';
import HowItWorks from './components/HowItWorks';
import Colleges from './components/Colleges';
import Testimonials from './components/Testimonials';
import CreateCommunity from './components/CreateCommunity';
import Footer from './components/Footer';
import DesignSpec from './components/DesignSpec';

export default function App() {
  const [showSpec, setShowSpec] = useState(
    new URLSearchParams(window.location.search).get('spec') === '1'
  );

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'd' && e.altKey) setShowSpec((v) => !v);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  if (showSpec) {
    return (
      <div>
        {/* Toggle back button */}
        <button
          onClick={() => setShowSpec(false)}
          className="no-print fixed top-4 right-4 z-50 px-4 py-2 rounded-lg text-sm font-semibold text-white"
          style={{ background: '#7C3AED', boxShadow: '0 0 20px rgba(124,58,237,0.4)' }}
        >
          ← Back to App
        </button>
        {/* Print button */}
        <button
          onClick={() => window.print()}
          className="no-print fixed top-4 right-36 z-50 px-4 py-2 rounded-lg text-sm font-semibold text-white border border-[rgba(124,58,237,0.4)]"
          style={{ background: 'rgba(124,58,237,0.15)' }}
        >
          🖨 Print / Save PDF
        </button>
        <DesignSpec />
      </div>
    );
  }

  return (
    <div className="min-h-full" style={{ background: '#080B14' }}>
      <Navbar />
      {/* Design Spec button */}
      <button
        onClick={() => setShowSpec(true)}
        className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#8B8DA8] border border-[rgba(124,58,237,0.2)] bg-[#0F1221] hover:text-[#F1F0FF] hover:border-[rgba(124,58,237,0.5)]"
        title="Alt+D to toggle"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        Design Spec ↗
      </button>
      <main>
        <Hero />
        <Features />
        <Communities />
        <HowItWorks />
        <Colleges />
        <Testimonials />
        <CreateCommunity />
      </main>
      <Footer />
    </div>
  );
}
