import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-details">
                <div className="footer-section">
                    <h3>About MoonRail</h3>
                    <p>MoonRail is your trusted partner for seamless travel bookings. We offer a wide range of services including flights, trains, buses, cabs, and hotels to make your journey comfortable and convenient.</p>
                    <div className="social-icons">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-linkedin"></i>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about us.html">About Us</a></li>
                        <li><a href="offers.html">Offers</a></li>
                        <li><a href="news.html">News</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p><i className="fas fa-envelope"></i>support@moonrail.com</p>
                    <p><i className="fas fa-phone"></i> Phone: +91-8685986823</p>
                    <p><i className="fas fa-map-marker-alt"></i>Chitkara University, Rajpura, Punjab, India</p>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 MoonRail. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;