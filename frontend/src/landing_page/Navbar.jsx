import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
 <nav className="navbar navbar-expand-lg site-navbar">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
    <img src="/public/media/img/deva.jpg.jpeg" alt="Logo" width="120px" height="40" className="d-inline-block align-text-top"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav site-nav-links">
        <Link className="nav-link" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/leaderboard">LeaderBoard</Link>

        <Link className="nav-link" to="/support">Community</Link>
        <Link className="nav-link" to="/about">About</Link>
      </div>
    </div>
  </div>
  
</nav>
  )
}
