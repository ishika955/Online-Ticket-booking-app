// pages/destinations/GoaGetaway.jsx
import React from "react";
import Topbar from "../../components/Topbar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/Destination.css";

const GoaGetaway = () => {
  return (
    <div className="destination-page">
      <Topbar />
      <Navbar />
      
      <div className="destination-hero">
        <img 
          src="https://media.easemytrip.com/media/Blog/India/637136726518786264/637136726518786264QBU8O9.jpg" 
          alt="Goan Getaway"
          className="hero-image"
        />
        <div className="hero-content">
          <h1>Goan Getaway</h1>
          <p>Relax on the sun-kissed beaches of Goa. Enjoy the vibrant nightlife, delicious cuisine, and a laid-back vibe.</p>
        </div>
      </div>

      <main className="destination-main">
        <div className="destination-content">
          <section className="destination-info">
            <h2>About Goa</h2>
            <p>Discover the perfect blend of Portuguese heritage and Indian culture in Goa. From pristine beaches to historic churches, from vibrant markets to serene backwaters, Goa offers something for every traveler.</p>
            
            <h3>Popular Beaches</h3>
            <ul>
              <li>Calangute Beach - Queen of Beaches</li>
              <li>Baga Beach - Water sports hub</li>
              <li>Anjuna Beach - Flea market paradise</li>
              <li>Palolem Beach - Serene and scenic</li>
              <li>Morjim Beach - Turtle nesting site</li>
            </ul>

            <h3>Cultural Attractions</h3>
            <ul>
              <li>Basilica of Bom Jesus - UNESCO World Heritage Site</li>
              <li>Se Cathedral - Largest church in Asia</li>
              <li>Fort Aguada - 17th-century Portuguese fort</li>
              <li>Dudhsagar Falls - Magnificent waterfall</li>
              <li>Spice Plantations - Authentic Goan experience</li>
            </ul>

            <h3>What's Included in Our Packages</h3>
            <ul>
              <li>Beachfront accommodation</li>
              <li>Daily breakfast</li>
              <li>Airport transfers</li>
              <li>City tour with guide</li>
              <li>Water sports activities</li>
              <li>Cultural show tickets</li>
            </ul>
          </section>

          <section className="booking-section">
            <h3>Book Your Goan Escape</h3>
            <div className="booking-options">
              <div className="package-card">
                <h4>Beach Bliss</h4>
                <p>3 Days / 2 Nights</p>
                <p>Includes: Accommodation, Breakfast, Beach Activities</p>
                <p className="price">₹7,999</p>
                <button className="book-btn">Book Now</button>
              </div>
              <div className="package-card">
                <h4>Goan Explorer</h4>
                <p>5 Days / 4 Nights</p>
                <p>Includes: All meals, Sightseeing, Water sports</p>
                <p className="price">₹15,999</p>
                <button className="book-btn">Book Now</button>
              </div>
              <div className="package-card">
                <h4>Luxury Retreat</h4>
                <p>7 Days / 6 Nights</p>
                <p>Includes: 5-star stay, Spa, Private tours</p>
                <p className="price">₹29,999</p>
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
              <div className="review-rating">★★★★☆</div>
              <p>"Beaches were lovely, great food! The seafood was amazing and the beaches were so clean."</p>
              <div className="reviewer">- Tina K.</div>
            </div>
            <div className="review-card">
              <div className="review-rating">★★★★★</div>
              <p>"Perfect relaxing vacation. Everything went smoothly from booking to checkout. Will definitely return!"</p>
              <div className="reviewer">- Alex B.</div>
            </div>
            <div className="review-card">
              <div className="review-rating">★★★★☆</div>
              <p>"Great nightlife and amazing Portuguese architecture. The blend of cultures is fascinating."</p>
              <div className="reviewer">- Maria L.</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GoaGetaway;