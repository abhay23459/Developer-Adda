import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-join">
        <div>
          <p className="footer-kicker">Your next build starts nearby</p>
          <h2>Keep making<br /><em>things happen.</em></h2>
        </div>
        <div className="footer-join-side">
          <p>Get occasional updates about new circles, campus events, and projects looking for collaborators.</p>
          <form className="footer-form" onSubmit={(event) => event.preventDefault()}>
            <label className="visually-hidden" htmlFor="footer-email">Email address</label>
            <input id="footer-email" type="email" placeholder="Your email address" required />
            <button type="submit" aria-label="Join the Cohoriva community">Join us <span>↗</span></button>
          </form>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <Link className="footer-wordmark" to="/"><span className="brand-mark">C</span><span>Cohoriva</span></Link>
          <p>A local network for students who learn, build, and grow together.</p>
          <span className="footer-location">Made for ambitious minds everywhere.</span>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Explore</h3>
            <Link to="/">Home</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <Link to="/support">Community</Link>
            <Link to="/about">About us</Link>
          </div>
          <div className="footer-column">
            <h3>Build with us</h3>
            <Link to="/support">Find a circle</Link>
            <Link to="/admin">Start a community</Link>
            <Link to="/about">How it works</Link>
            <a href="mailto:hello@cohoriva.com">Contact team</a>
          </div>
          <div className="footer-column">
            <h3>Follow along</h3>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram <span>↗</span></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Cohoriva</span>
        <span>Learn locally. Build globally.</span>
        <div><a href="mailto:hello@cohoriva.com">hello@cohoriva.com</a><a href="#top">Back to top ↑</a></div>
      </div>
    </footer>
  )
}
