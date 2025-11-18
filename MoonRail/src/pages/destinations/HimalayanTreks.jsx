import React from "react";
import { useParams } from "react-router-dom";
import Topbar from "../../components/Topbar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/Destination.css";

const HimalayanTreks = () => {
  const { id } = useParams();

  return (
    <div className="destination-page">
      <Topbar />
      <Navbar />
      
      <div className="destination-hero">
        <img 
          src="https://th.bing.com/th/id/R.180e3a79a2a106685b6f53366c9efc43?rik=iKdt33VwgK10%2fQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2f2QOpDiC.jpg&ehk=AZAj3MnoimSu%2flTSp1%2bOwRbiP%2f5wg0vebb2oPcTDsGE%3d&risl=&pid=ImgRaw&r=0" 
          alt="Himalayan Treks"
          className="hero-image"
        />
        <div className="hero-content">
          <h1>Himalayan Treks</h1>
          <p>Embark on an epic adventure to the majestic peaks of the Himalayas. Experience breathtaking views and serene landscapes.</p>
        </div>
      </div>

      <main className="destination-main">
        <div className="destination-content">
          <section className="destination-info">
            <h2>About Himalayan Treks</h2>
            <p>Discover the magic of the Himalayas with our carefully curated trekking experiences. From beginner-friendly trails to challenging expeditions, we have something for every adventure enthusiast.</p>
            
            <h3>Featured Treks</h3>
            <ul>
              <li>Valley of Flowers Trek - Easy to Moderate</li>
              <li>Hampta Pass Trek - Moderate</li>
              <li>Rupin Pass Trek - Challenging</li>
              <li>Stok Kangri Summit - Expert</li>
            </ul>

            <h3>What's Included</h3>
            <ul>
              <li>Experienced local guides</li>
              <li>All necessary permits</li>
              <li>Accommodation during trek</li>
              <li>All meals during the trek</li>
              <li>Safety equipment</li>
            </ul>
          </section>

          <section className="booking-section">
            <h3>Book Your Adventure</h3>
            <div className="booking-options">
              <div className="package-card">
                <h4>Basic Package</h4>
                <p>3 Days / 2 Nights</p>
                <p className="price">₹8,999</p>
                <button className="book-btn">Book Now</button>
              </div>
              <div className="package-card">
                <h4>Premium Package</h4>
                <p>5 Days / 4 Nights</p>
                <p className="price">₹14,999</p>
                <button className="book-btn">Book Now</button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HimalayanTreks;