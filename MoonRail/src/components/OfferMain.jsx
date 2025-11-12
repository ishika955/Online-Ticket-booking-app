import React from 'react'
import {useState} from 'react'
import "../styles/offer.css"

function OfferMain() {
    const[points,setpoints]=useState(2500);
    const collect_Points=()=>{
        setpoints(points+100);

    };
  return (
    
    <section className="offers-section">
        <div className="offers-section-text">
            <h1>EXCLUSIVE OFFERS</h1>
            <h2>Unlock Amazing Deals</h2>
            <div className="display-points" id="display-points">
                <div className="points-info">
                    <i className="fas fa-coins"></i>
                    <span>Reward Points:</span>
                    <span className="points-count" id="points-count">{points.toLocaleString()}</span>
                </div>
                <button className="collectbtn" id="collect-points" onClick={collect_Points}>
                    <i className="fas fa-gift"></i>
                    Collect Points
                </button>
            </div>
            <a href="#offers" className="btn">Explore Offers</a>
        </div>
    </section>
  )
};

export default OfferMain
