// src/pages/Contact.jsx
import React from 'react';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will go here
    alert('Message sent successfully!');
  };

  return (
    <div className="contact-page">
      <Topbar />
      <Navbar />
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact us</h1>
          <p>Start the conversation to establish good relationship and Experience.</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container contact-main-content">
        <div className="contact-content-grid">
          {/* Contact Info Section */}
          <div className="contact-info-section">
            <span className="contact-tag">GET IN TOUCH</span>
            <h2>Seamless Communication, Global Impact.</h2>

            <div className="contact-info-container">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.5l1.5 4.5L8.5 11l-2 2-2-2m0-3h3.5L9 7l-1.5 4.5L5.5 11z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 19a2 2 0 01-2-2h-3.5l-1.5-4.5L15.5 13l2-2 2 2m0 3h-3.5L15 17l1.5-4.5 2 2z" />
                  </svg>
                </div>
                <div className="contact-info-text">
                  <p>LET'S TALK</p>
                  <p>Phn no.: +91 8146612331</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.857 7.857a2 2 0 002.886 0L21 8" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 6H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2z" />
                  </svg>
                </div>
                <div className="contact-info-text">
                  <p>EMAIL SUPPORT</p>
                  <p>moonrail2025@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="social-media-section">
              <h4>Follow our social media</h4>
              <div className="social-icons">
                <a href="https://www.instagram.com/moon.rail/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://x.com/MoonRail25" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            <h3>Send us a message</h3>
            <p>Please feel free to send us any questions, feedback or suggestions you might have.</p>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="Name" className="form-input" required />
                <input type="text" placeholder="Company" className="form-input" />
              </div>
              <div className="form-row">
                <input type="tel" placeholder="Phone" className="form-input" />
                <input type="email" placeholder="Email" className="form-input" required />
              </div>
              <input type="text" placeholder="Subject" className="form-input" />
              
              <textarea placeholder="Message" rows="6" className="form-textarea" required></textarea>
              
              <button type="submit" className="submit-button">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </main>

      {/* Map Section */}
      <section className="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.328304187959!2d76.65663027547724!3d30.51645997468957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef61cf0a5c3f%3A0x8de799c8e9d48f14!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1692890491530!5m2!1sen!2sin" 
          className="map-iframe" 
          allowFullScreen="" 
          loading="lazy"
          title="MoonRail Location"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;