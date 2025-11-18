import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="nav-logo-text">MoonRail</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/offers">Offers</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/contacts">Contact</Link></li>
      </ul>
      {/* Search icon removed */}
    </nav>
  )
}

export default Navbar