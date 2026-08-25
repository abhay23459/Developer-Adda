import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Your local build network</p>
          <h1>Build better<br /><em>together.</em></h1>
          <p className="hero-description">
            A focused community for tier 2 and tier 3 college students to find sharp minds nearby, learn in public, and ship projects that matter.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" to="/support">Find my community <span>↗</span></Link>
            <Link className="text-button" to="/about">See how it works <span>↓</span></Link>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack" aria-label="Community members nearby">
              <span className="avatar avatar-one">A</span>
              <span className="avatar avatar-two">R</span>
              <span className="avatar avatar-three">M</span>
              <span className="avatar avatar-four">+</span>
            </div>
            <p><strong>2,400+</strong> students<br />already building nearby</p>
          </div>
        </div>

        <div className="community-map" aria-label="A preview of nearby student communities">
          <div className="map-topline"><span>NEARBY SIGNAL</span><span className="live-label">● LIVE</span></div>
          <div className="community-photo">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80" alt="Students collaborating around a laptop" />
            <span>BUILD NIGHT · 2.4 KM</span>
          </div>
          <div className="map-orbit orbit-large" />
          <div className="map-orbit orbit-small" />
          <div className="map-line line-one" />
          <div className="map-line line-two" />
          <div className="map-node node-center"><span>YOU</span></div>
          <div className="map-node node-top"><span>UI / UX</span></div>
          <div className="map-node node-right"><span>WEB 3</span></div>
          <div className="map-node node-bottom"><span>DATA</span></div>
          <div className="map-node node-left"><span>OPEN SOURCE</span></div>
          <div className="map-radius"><span>10–15 km radius</span></div>
          <div className="map-footer"><strong>12</strong> active circles <span>·</span> <strong>38</strong> people online</div>
        </div>
      </section>

      <section className="home-intro">
        <div>
          <p className="eyebrow">The idea</p>
          <h2>Small radius.<br /><em>Big momentum.</em></h2>
        </div>
        <p className="intro-text">The right collaborator may be one bus ride away. Developer Adda turns local student energy into accountable, ambitious teams.</p>
      </section>

      <section className="steps-grid">
        <article className="step-card step-card-dark">
          <span className="step-number">01</span>
          <div className="step-icon">◎</div>
          <h3>Meet your circle</h3>
          <p>Discover students within 10–15 km who care about the same skills, ideas, and outcomes.</p>
          <span className="step-arrow">↗</span>
        </article>
        <article className="step-card step-card-orange">
          <span className="step-number">02</span>
          <div className="step-icon">✦</div>
          <h3>Learn by shipping</h3>
          <p>Turn shared curiosity into real projects, weekly practice, and a portfolio you can stand behind.</p>
          <span className="step-arrow">↗</span>
        </article>
        <article className="step-card step-card-light">
          <span className="step-number">03</span>
          <div className="step-icon">✓</div>
          <h3>Earn your place</h3>
          <p>Community leaders set a fair skill test and choose members who will make the group stronger.</p>
          <span className="step-arrow">↗</span>
        </article>
      </section>

      <section className="leader-callout">
        <div>
          <p className="eyebrow">For the ones who start things</p>
          <h2>Create the room<br /><em>you wish existed.</em></h2>
        </div>
        <div className="leader-side">
          <p>Set the focus. Design the test. Invite the people who show up ready to build.</p>
          <Link className="outline-button" to="/admin">Start a community <span>↗</span></Link>
        </div>
      </section>
    </main>
  )
}
