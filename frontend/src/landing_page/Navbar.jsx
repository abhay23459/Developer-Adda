import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
 <nav className="navbar navbar-expand-lg site-navbar">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
    <span className="brand-mark">A</span>
    <span className="brand-name">AKAS</span>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav site-nav-links">
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/leaderboard">LeaderBoard</NavLink>

        <NavLink className="nav-link" to="/support">Community</NavLink>
        <NavLink className="nav-link" to="/about">About</NavLink>
      </div>
      <div className="navbar-actions">
        <Link className="navbar-action login-action" to="/login">Login</Link>
        <Link className="navbar-action start-action" to="/get-started">Get Started</Link>
      </div>
    </div>
  </div>
  
</nav>
  )
}
