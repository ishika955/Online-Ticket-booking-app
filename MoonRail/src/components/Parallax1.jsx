import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Parallax1.css"; // make sure this file name matches your actual CSS

// ✅ Import images from assets
import mauritiusImg from "../assets/mauritius.jpg";
import greeceImg from "../assets/greece.png";
import scotlandImg from "../assets/scotland.jpg";

function Parallax1() {
  const trips = [
    {
      date: "Sep 25th - Oct 01st",
      place: "Mauritius",
      price: "₹58,000",
      image: mauritiusImg,
      path: "/mauritius",
    },
    {
      date: "Oct 25th - Nov 01st",
      place: "Greece",
      price: "₹70,000",
      image: greeceImg,
      path: "/greece", // ✅ this should match the Route in App.jsx
    },
    {
      date: "Nov 25th - Dec 01st",
      place: "Scotland",
      price: "₹80,000",
      image: scotlandImg,
      path: "/scotland",
    },
  ];

  return (
    <section className="parallax" style={{ backgroundColor: "#ffffff" }}>
      <div className="parallax-content">
        <h2>Turning Destinations Into Experiences</h2>
        <p>Your adventure begins the moment you choose us.</p>

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

              {/* ✅ This button links directly to the Greece page (or others) */}
              <Link to={trip.path} className="btn">
                SEE MORE
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Parallax1;
