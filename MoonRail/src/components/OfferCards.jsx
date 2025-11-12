import React from 'react'
import {offer} from './OfferCardData.js'
import '../styles/offer.css';
import OfferNav from './OfferNav.jsx';

const OfferCards=()=> {
   
return (
    <section>
        
<section className="offer-cards-section" id="offers">
        <h2 className="title">SPECIAL TRAVEL OFFERS</h2>
        <p className="subtitle">Limited time deals across all travel categories</p>
        
        <div className="offer-cards">
            {offer.map(offer=>{
            <div key={offer.id} className="offer-card" data-category={offer.category}>
                <div className={`offer-badge ${offer.badge_Type}`}>{offer.badge}</div>
                <div className="wishlist-btn"><i className="far fa-heart"></i></div>
                <div className="share-btn"><i className="fas fa-share-alt"></i></div>
                <div className="offer-image" style={{backgroundImage: `url(${offer.image})`}}></div>
                <div className="offer-details">
                    <h3>{offer.title}</h3>
                    <p>{offer.description}</p>
                    
                    <div className="price-comparison">
                        <span className="original-price">₹{(offer.original_Price || 0).toLocaleString()}</span>
                        <span className="discounted-price">₹{(offer.discount_Price || 0).toLocaleString()}</span>
                        <span className="Total_savings">₹{(offer.Total_Total_savings || 0).toLocaleString()}</span>
                    </div>
                    
                    <div className="offer-popularity">
                        <i className="fas fa-fire"></i>
                        <span>{offer.popularity} people booked this week</span>
                    </div>
                    
                    <div className="offer-meta">
                        <div className="validity">Until: {offer.expiry}</div>
                        <button className="btn">Book Now</button>
                    </div>
                </div>
            </div>
             })}
</div>
</section>
</section>
         
  )
}


export default OfferCards
