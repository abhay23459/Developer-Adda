import { ArrowDown, ArrowUpRight, Code2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Landing.css';

const nodes = [
  { label: 'UI / UX', className: 'node-ui' },
  { label: 'OPEN SOURCE', className: 'node-open' },
  { label: 'DATA', className: 'node-data' },
];

export default function Landing() {
  return (
    <div className="landing-page">
      <Navbar homePath="/" />

      <main id="home" className="hero-shell">
        <section className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> Your local build network</div>
          <h1>Build<br />better<br /><em>together.</em></h1>
          <p className="hero-description">A focused community for tier 2 and tier 3 college students to find sharp minds nearby, learn in public, and ship projects that matter.</p>
          <div className="hero-actions">
            <Link className="orange-button primary" to="/auth/register">Find my community <ArrowUpRight size={17} /></Link>
            <a className="text-action" href="#about">See how it works <ArrowDown size={15} /></a>
          </div>
          <div className="member-proof">
            <div className="avatar-stack"><span>A</span><span>R</span><span>M</span><span>+</span></div>
            <p><strong>2,400+</strong> students<br />already building nearby</p>
          </div>
        </section>

        <section className="network-panel" aria-label="Nearby developer network visualization">
          <div className="panel-label">Nearby signal</div>
          <div className="live-state"><i /> Live</div>
          <div className="grid-lines" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="signal-line signal-one" />
          <div className="signal-line signal-two" />
          <div className="radius-label"><span /> 10–15 km radius</div>
          <div className="network-node node-you">You</div>
          {nodes.map((node) => <div className={`network-node ${node.className}`} key={node.label}>{node.label}</div>)}
          <div className="network-photo">
            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=420&q=80" alt="Students collaborating around a laptop" />
            <span>Build night · 2.4 km</span>
          </div>
          <div className="panel-footer"><strong>12</strong> active circles <b>·</b> <strong>38</strong> people online</div>
        </section>
      </main>

      <section className="workspace-section" aria-labelledby="workspace-title">
        <div className="workspace-heading">
          <span className="eyebrow"><span className="eyebrow-dot" /> Your build space</span>
          <h2 id="workspace-title">Everything you need<br /><em>to keep moving.</em></h2>
        </div>
        <div className="workspace-cards">
          <Link className="workspace-card" to="/community">
            <span className="workspace-icon"><Users size={22} /></span>
            <span className="workspace-card-copy"><small>01 / Find your circle</small><strong>Community</strong><span>Meet people nearby, share ideas, and build alongside a team that fits.</span></span>
            <ArrowUpRight className="workspace-arrow" size={20} />
          </Link>
          <Link className="workspace-card" to="/compiler">
            <span className="workspace-icon"><Code2 size={22} /></span>
            <span className="workspace-card-copy"><small>02 / Ship your work</small><strong>Compiler</strong><span>Write, test, and bring your next project to life in a focused workspace.</span></span>
            <ArrowUpRight className="workspace-arrow" size={20} />
          </Link>
        </div>
      </section>

      <footer className="site-footer" id="about">
        <div className="footer-main">
          <div className="footer-intro">
            <Link className="brand footer-brand" to="/">
              <span className="brand-mark">A</span>
              <span className="brand-name">AKAS</span>
            </Link>
            <p>Find your people.<br />Share the work.<br />Make something real.</p>
            <span className="footer-status"><i /> Building nearby since 2026</span>
          </div>

          <div className="footer-column">
            <h2>Explore</h2>
            <Link to="/community">Community</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <Link to="/auth/register">Find a circle</Link>
          </div>
          <div className="footer-column">
            <h2>Build with us</h2>
            <a href="mailto:hello@akas.build">Contact</a>
            <a href="#home">About AKAS</a>
            <a href="mailto:hello@akas.build">Suggest a feature</a>
          </div>
          <div className="footer-column footer-connect">
            <h2>Stay in the loop</h2>
            <p>Occasional notes for people making things.</p>
            <a className="footer-email" href="mailto:hello@akas.build">hello@akas.build <ArrowUpRight size={15} /></a>
            <div className="social-links"><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 AKAS. Built for the next version of your campus.</span><div><a href="#home">Privacy</a><a href="#home">Terms</a><a href="#home">Back to top ↑</a></div></div>
      </footer>
    </div>
  );
}
