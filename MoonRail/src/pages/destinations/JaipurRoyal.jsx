// pages/destinations/JaipurRoyal.jsx
import React from "react";
import Topbar from "../../components/Topbar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/Destination.css";

const JaipurRoyal = () => {
  return (
    <div className="destination-page">
      <Topbar />
      <Navbar />
      
      <div className="destination-hero">
        <img 
          src="https://i.pinimg.com/originals/a3/e3/db/a3e3dbfb46f42f73110060ea2a959124.jpg" 
          alt="Jaipur's Royal Charm"
          className="hero-image"
        />
        <div className="hero-content">
          <h1>Jaipur's Royal Charm</h1>
          <p>Explore the Pink City's magnificent forts, palaces, and colorful bazaars. A journey back in time awaits.</p>
        </div>
      </div>

      <main className="destination-main">
        <div className="destination-content">
          <section className="destination-info">
            <h2>About Jaipur</h2>
            <p>Experience the royal heritage of Rajasthan in Jaipur, the Pink City. Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is a magnificent blend of ancient traditions and modern vibrancy, offering a glimpse into India's royal past.</p>
            
            <h3>Royal Attractions</h3>
            <ul>
              <li>Amber Fort - Majestic hilltop fortress</li>
              <li>Hawa Mahal - Palace of Winds</li>
              <li>City Palace - Royal residence complex</li>
              <li>Jantar Mantar - Ancient astronomical observatory</li>
              <li>Nahargarh Fort - Stunning city views</li>
              <li>Jaigarh Fort - Home to the world's largest cannon</li>
            </ul>

            <h3>Cultural Experiences</h3>
            <ul>
              <li>Elephant ride at Amber Fort</li>
              <li>Traditional Rajasthani folk dance show</li>
              <li>Shopping at Johari Bazaar for jewelry</li>
              <li>Bapu Bazaar for textiles and handicrafts</li>
              <li>Chokhi Dhani ethnic village resort</li>
              <li>Camel safari in the outskirts</li>
            </ul>

            <h3>What's Included in Our Packages</h3>
            <ul>
              <li>Heritage hotel accommodation</li>
              <li>Professional local guide</li>
              <li>All monument entry fees</li>
              <li>Traditional Rajasthani meals</li>
              <li>Cultural show tickets</li>
              <li>Airport/Railway station transfers</li>
            </ul>
          </section>

          <section className="booking-section">
            <h3>Book Your Royal Experience</h3>
            <div className="booking-options">
              <div className="package-card">
                <h4>Royal Glimpse</h4>
                <p>2 Days / 1 Night</p>
                <p>Includes: City tour, Heritage stay, Breakfast</p>
                <p className="price">₹5,999</p>
                <button className="book-btn">Book Now</button>
              </div>
              <div className="package-card">
                <h4>Pink City Explorer</h4>
                <p>4 Days / 3 Nights</p>
                <p>Includes: Full sightseeing, All meals, Guide</p>
                <p className="price">₹12,999</p>
                <button className="book-btn">Book Now</button>
              </div>
              <div className="package-card">
                <h4>Maharaja Experience</h4>
                <p>6 Days / 5 Nights</p>
                <p>Includes: Palace stay, Elephant safari, Luxury transport</p>
                <p className="price">₹24,999</p>
                <button className="book-btn">Book Now</button>
              </div>
            </div>
          </section>
        </div>

        {/* Reviews Section */}
        <section className="destination-reviews">
          <h3>Traveler Reviews</h3>
          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-rating">★★★★★</div>
              <p>"Felt like royalty! Incredible history and architecture. The Amber Fort left me speechless."</p>
              <div className="reviewer">- Priya M.</div>
            </div>
            <div className="review-card">
              <div className="review-rating">★★★★☆</div>
              <p>"Excellent guide and itinerary. Jaipur is a must-see for anyone interested in Indian history and culture."</p>
              <div className="reviewer">- David W.</div>
            </div>
            <div className="review-card">
              <div className="review-rating">★★★★★</div>
              <p>"The shopping experience in local markets was amazing. Beautiful handicrafts and friendly people."</p>
              <div className="reviewer">- Sunita R.</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JaipurRoyal;