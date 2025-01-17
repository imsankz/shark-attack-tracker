import { Link } from 'react-router-dom'
import './Header.css'

export default function Navbar() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-icon">🦈</span>
            <span className="logo-text">Shark Tracker</span>
          </Link>
          <nav className="nav">
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/statistics">Statistics</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
