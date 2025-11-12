import React from 'react'; // Change "react-dom" to "react"
import { Link } from 'react-router-dom'; // 1. IMPORT THE LINK COMPONENT
import "../styles/Parallax2.css";

// 1. IMPORT ALL NECESSARY IMAGES from src/assets
import mauritiusImg from "../assets/mauritius.jpg"; 
import greeceImg from "../assets/greece.png"; 
import scotlandImg from "../assets/scotland.jpg"; 

function Parallax2() {
  const trips = [
    { 
      date: "Sep 25th - Oct 01st", 
      place: "Mauritius", 
      price: "₹58,000",
      image: mauritiusImg,
      // 2. Add the URL path that matches your React Router setup
      path: "/mauritius" 
    },
    { 
      date: "Oct 25th - Nov 01st", 
      place: "Greece", 
      price: "₹70,000",
      image: greeceImg,
      // CRITICAL: This is the path that should map to your greece.jsx page
      path: "/greece" 
    },
    { 
      date: "Nov 25th - Dec 01st", 
      place: "Scotland", 
      price: "₹80,000",
      image: scotlandImg,
      path: "/scotland"
    },
  ];

  return (
    <section className="parallax" style={{ backgroundColor: "#ffffff" }}>
      <div className="parallax-content">
        <h2>Turning Destinations Into Experiences</h2>
        <p>Your adventure begins the moment you choose us.</p>
        <br />
        <br />

        <div className="travel-cards">
          {trips.map((trip, index) => (
            <div 
              className="card" 
              key={index}
              style={{ backgroundImage: `url(${trip.image})` }} 
            >
              <div className="date">{trip.date}</div>
              <h3>{trip.place}</h3>
              <p>From {trip.price}</p>
              
              {/* 3. USE <Link> INSTEAD OF <a> TAG */}
              <Link to={trip.path} className="btn">
                SEE MORE
              </Link>
            </div>
          ))}
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </section>
  );
}

export default Parallax2;