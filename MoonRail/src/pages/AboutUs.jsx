import React from 'react';
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/AboutUs.css';

// Import team member images (you'll need to add these to your assets)
import ishika1 from "../assets/ishika1.jpg";
import ishika2 from "../assets/ishika2.jpg";
import muskan from "../assets/muskan.jpg";
import taniksha from "../assets/tanishka.png";

const AboutUs = () => {
  const teamMembers = [
    { id: 1, name: "Ishika Singla", image: ishika1 },
    { id: 2, name: "Ishika", image: ishika2 },
    { id: 3, name: "Muskan", image: muskan },
    { id: 4, name: "Taniksha", image: taniksha }
  ];

  const features = [
    {
      title: "Real-time Tracking",
      description: "Track flights and prices in real time to ensure you get the best deal available."
    },
    {
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist with any questions or issues."
    },
    {
      title: "Personalized Booking",
      description: "Get recommendations tailored to your travel history and preferences."
    },
    {
      title: "Secure Payments",
      description: "Your financial information is always protected with our advanced encryption."
    }
  ];

  return (
    <div className="about-us-page">
      <Topbar />
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="container">
          <h1>Our Journey, Your Adventure</h1>
          <p>At Moonrail, we believe every journey should be as unique as the traveler. We're dedicated to making global travel seamless, accessible, and unforgettable.</p>
        </div>
      </section>

      {/* Team Gallery */}
      <section className="team-gallery-section">
        <div className="team-gallery">
          {teamMembers.map((member, index) => (
            <div key={member.id} className="gallery-item">
                <img src={member.image} alt={member.name} />
              <div className="team-member-name">{member.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className="about-main-content">
        <div className="container">
          {/* Who We Are & Mission Section */}
          <div className="content-section">
            <div className="section-content">
              <h2 className="section-title">Who we are</h2>
              <p className="section-subtitle">A team of passionate explorers dedicated to your travel success.</p>
              <p className="section-description">
                Founded in 2025, We're a group of enthusiastic CSE students who love building creative and innovative solutions. 
                Travel can often feel complicated, so we set out to make it simple, stress-free, and enjoyable for everyone. 
                Guided by trust and a "customer-first" approach, we design tools that put your needs at the center. 
                Our vision is to shape the future of travel with technology that not only solves problems but also adds ease and excitement to every journey.
              </p>
            </div>
            <div className="section-content">
              <h2 className="section-title">Our mission</h2>
              <p className="section-subtitle">To be the most trusted platform for booking travel, worldwide.</p>
              <p className="section-description">
                Our commitment extends beyond providing great deals. We strive to offer a transparent and intuitive booking experience, 
                backed by 24/7 customer support. Your adventure is our priority, and we're with you every step of the way, 
                from the first click to your final destination.
              </p>
            </div>
          </div>

          {/* Moonrail Difference Section */}
          <div className="content-section">
            <div className="section-content">
              <h2 className="section-title">The moonrail difference</h2>
              <p className="section-subtitle">Everything you need to book smarter and travel easier.</p>
              <p className="section-description">
                We've built our platform from the ground up to provide a seamless booking experience. 
                From real-time price tracking to personalized recommendations, our features are designed to get you where you need to go without the hassle.
              </p>
            </div>
            <div className="feature-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="container">
          <h2>Ready to start your adventure?</h2>
          <p>From flights to unforgettable experiences, we've got you covered. Book your next journey with us today.</p>
          <a href="/" className="cta-button">BOOK NOW</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;