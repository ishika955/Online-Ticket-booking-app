import React from 'react'

function OfferNav() {
  return (
    <nav className="offers-nav">
        <a href="#" className="offer-nav-item active" data-filter="all">
            <i className="fas fa-th-large"></i>
            <span>All</span>
        </a>
        <a href="#" className="offer-nav-item" data-filter="flight">
            <i className="fas fa-plane"></i>
            <span>Flights</span>
        </a>
        <a href="#" className="offer-nav-item" data-filter="hotel">
            <i className="fas fa-hotel"></i>
            <span>Hotels</span>
        </a>
        <a href="#" className="offer-nav-item" data-filter="bus">
            <i className="fas fa-bus"></i>
            <span>Buses</span>
        </a>
        <a href="#" className="offer-nav-item" data-filter="train">
            <i className="fas fa-train"></i>
            <span>Trains</span>
        </a>
        <a href="#" className="offer-nav-item" data-filter="cab">
            <i className="fas fa-car"></i>
            <span>Cabs</span>
        </a>
        <a href="#" className="offer-nav-item" data-filter="package">
            <i className="fas fa-suitcase"></i>
            <span>Packages</span>
        </a>
        
        <select className="sort-select" id="sort-select">
            <option value="default">Sort by: Default</option>
            <option value="expiry">Expiring Soon</option>
            <option value="popularity">Most Popular</option>
            <option value="savings">Highest Savings</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
        </select>
    </nav>

  )
}

export default OfferNav
