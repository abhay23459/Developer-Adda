import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import Navbar from '../../components/Navbar';
import './Auth.css';
import './AuthOverrides.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login({ name: 'Alex Rivera', email, role: 'COMMUNITY_LEADER', community: 'Async-Devs-Alpha' });
    const destination = location.state?.from;
    navigate(destination ? `${destination.pathname}${destination.search || ''}` : '/dashboard', { replace: true });
  };

  return (
    <div className="auth-page">
      <Navbar />
      <main className="auth-layout">
        <section className="auth-intro"><span className="eyebrow"><i className="eyebrow-dot" /> Welcome back</span><h1>Pick up<br /><em>where you left off.</em></h1><p>Keep learning in public, stay close to your circle, and make your next good thing with people who get it.</p><span className="auth-coordinate">AKAS / 01</span></section>
        <section className="auth-form-panel"><div className="form-heading"><span>01 / Sign in</span><h2>Welcome back</h2><p>Enter your details to return to your workspace.</p></div>
          <form onSubmit={handleSubmit}>
            <label>Email address<input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@college.edu" /></label>
            <label>Password<input type="password" required value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your password" /></label>
            <div className="form-meta"><label className="check-label"><input type="checkbox" /> Remember me</label><a href="mailto:hello@akas.build">Forgot password?</a></div>
            <button className="auth-submit" type="submit">Sign in <ArrowRight size={17} /></button>
          </form>
          <p className="auth-switch">New to AKAS? <Link to="/auth/register">Create an account</Link></p>
        </section>
      </main>
    </div>
  );
}
