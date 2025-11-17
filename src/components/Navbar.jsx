import React from 'react'
import navbar from '../styles/navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
        <div className="nav-logo">
                <span className="nav-logo-text">MoonRail</span>
        </div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">About Us</Link></li>
            <li><Link to="offers">Offers</Link></li>
            <li><Link to="news">News</Link></li>
            <li><Link to="contacts">Contact</Link></li>
        </ul>
        <i className="fas fa-search search-icon"></i>
    </nav>
  )
}

export default Navbar
