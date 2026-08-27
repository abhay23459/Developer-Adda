import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import './Auth.css';
import './AuthOverrides.css';

export default function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();
  const updateField = (field, value) => setFormData({ ...formData, [field]: value });

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/onboarding');
  };

  return (
    <div className="auth-page">
      <Navbar />
      <main className="auth-layout">
        <section className="auth-intro"><span className="eyebrow"><i className="eyebrow-dot" /> Start building nearby</span><h1>Find your<br /><em>people.</em></h1><p>Join a focused community of students who are learning out loud, sharing skills, and shipping projects that matter.</p><span className="auth-coordinate">AKAS / 02</span></section>
        <section className="auth-form-panel"><div className="form-heading"><span>01 / Create account</span><h2>Join AKAS</h2><p>Set up your profile, then find your first circle.</p></div>
          <form onSubmit={handleSubmit}>
            <label>Full name<input type="text" required value={formData.name} onChange={(event) => updateField('name', event.target.value)} placeholder="Alex Rivera" /></label>
            <label>Email address<input type="email" required value={formData.email} onChange={(event) => updateField('email', event.target.value)} placeholder="you@college.edu" /></label>
            <label>Password<input type="password" required value={formData.password} onChange={(event) => updateField('password', event.target.value)} placeholder="Create a password" /></label>
            <button className="auth-submit" type="submit">Continue to onboarding <ArrowRight size={17} /></button>
          </form>
          <p className="auth-switch">Already part of AKAS? <Link to="/auth/login">Sign in</Link></p>
        </section>
      </main>
    </div>
  );
}
