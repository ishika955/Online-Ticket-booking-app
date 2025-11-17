import React, { useState } from "react";
import "../styles/Parallax3.css";
// NOTE: Make sure the modal styles are included in Parallax3.css OR imported from Parallax2.css

// 1. IMPORT ALL IMAGES (Relative path from Parallax3.jsx to src/assets)
import goaImg from "../assets/goa.jpg";
import haridwarImg from "../assets/haridwar.jpg";
import manaliImg from "../assets/manali.jpg";
import agraImg from "../assets/agra.jpg";
import jaipurImg from "../assets/jaipur.jpg";
import lakshdweepImg from "../assets/lakshdweep.jpg";
import uttrakhandImg from "../assets/uttrakhand.jpg"; 
import shimlaImg from "../assets/shimla.jpg";








// ------------------------------------------

// Replicate the data structure for easy lookup
const packagesData = [
    {
      img: goaImg,
      title: "Serene Beaches",
      price: "₹5,500",
      rating: 4, // Assumed 4 stars from your render logic
      desc: "Relax in the vibrant vibes of Goa! Enjoy stunning beaches, luxury stays, and amazing nightlife — at best price.",
      icons: ["fas fa-route", "fas fa-stopwatch", "fas fa-bicycle", "fas fa-ship"],
    },
    {
      img: haridwarImg,
      title: "HARIDWAR",
      price: "₹3,200",
      rating: 5, // Assumed 5 stars (religious significance often gets 5)
      desc: "Experience the spiritual charm of Ganga Aarti, holy ghats, and peaceful temples in Haridwar.",
      icons: ["fas fa-praying-hands", "fas fa-water", "fas fa-route", "fas fa-om"],
    },
    {
      img: manaliImg,
      title: "MANALI",
      price: "₹6,000",
      rating: 4, 
      desc: "A paradise for nature lovers! Snowy mountains, river adventures, and cozy stays in Manali await you.",
      icons: ["fas fa-snowflake", "fas fa-route", "fas fa-bicycle", "fas fa-mountain"],
    },
    {
      img: agraImg,
      title: "AGRA",
      price: "₹4,800",
      rating: 4, 
      desc: "Discover the iconic Taj Mahal and Mughal heritage in the historic city of Agra.",
      icons: ["fas fa-landmark", "fas fa-route", "fas fa-utensils", "fas fa-camera"],
    },
    {
      img: jaipurImg,
      title: "JAIPUR",
      price: "₹5,200",
      rating: 4, 
      desc: "Explore the Pink City’s palaces, forts, and vibrant bazaars for a royal experience in Jaipur.",
      icons: ["fas fa-crown", "fas fa-route", "fas fa-mountain", "fas fa-camera"],
    },
    {
      img: lakshdweepImg,
      title: "LAKSHADWEEP",
      price: "₹7,500",
      rating: 5, 
      desc: "Crystal-clear waters, coral reefs, and serene beaches make Lakshadweep a tropical paradise.",
      icons: ["fas fa-ship", "fas fa-water", "fas fa-swimmer", "fas fa-umbrella-beach"],
    },


    // --- New Uttarakhand Package ---
    {
        img: uttrakhandImg, // Assuming you import this image
        title: "RISHIKESH, Uttarakhand",
        price: "₹4,900",
        rating: 5,
        desc: "The 'Yoga Capital of the World' offers white-water rafting, bungee jumping on the foothills of the Himalayas.",
        icons: ["fas fa-hands-wash", "fas fa-water", "fas fa-person-swimming", "fas fa-mountain"],
    },

    // --- New Shimla Package ---
    {
        img: shimlaImg, // Assuming you import this image
        title: "SHIMLA (Himachal)",
        price: "₹4,200",
        rating: 4,
        desc: "Visit the Queen of Hills! Explore the historic Mall Road, enjoy scenic toy train rides and snow-capped peaks.",
        icons: ["fas fa-train", "fas fa-mountain", "fas fa-snowflake", "fas fa-route"],
    },


];


















// --- 1. CORE MODAL COMPONENTS ---
// ------------------------------------

// Step 3: Payment Success Component
const PaymentSuccessContent = ({ destination, onClose }) => {
    return (
        <div className="payment-success-content">
            <h3 className="modal-heading success-heading">
                🎉 Booking Confirmed!
            </h3>
            <div className="success-icon">✓</div>
            <p className="success-message">
                Your escape to **{destination}** has been successfully booked and paid for.
            </p>
            <p className="success-details">
                A detailed itinerary and confirmation email have been sent to your provided email address.
            </p>
            <button onClick={onClose} className="btn success-close-btn">
                Close and View More Packages
            </button>
        </div>
    );
};

// Step 2: Booking Form Content (Payment Simulation)
const BookingFormContent = ({ destination, onBack, onSubmit, isProcessing }) => {
    
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        expiry: '',
        cvc: ''
    });

    const [paymentError, setPaymentError] = useState('');

    const handleChange = (e) => {
        setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
        setPaymentError(''); // Clear error on new input
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPaymentError('');

        // --- Simulated Expiry Date Validation ---
        const [monthStr, yearStr] = cardDetails.expiry.split('/');
        const month = parseInt(monthStr, 10);
        const year = parseInt(yearStr, 10);
        
        const currentYear = new Date().getFullYear() % 100;
        const currentMonth = new Date().getMonth() + 1;

        if (month > 12 || month < 1 || year < currentYear || (year === currentYear && month < currentMonth)) {
             setPaymentError('Expiry date is invalid or in the past (MM/YY format).');
             return; 
        }
        
        // Final length checks (simulating a fully validated card)
        if (cardDetails.cardNumber.length < 16 || cardDetails.cvc.length < 3) {
            setPaymentError('Please enter valid card details (16 digits and 3-4 CVC).');
            return;
        }

        // If all checks pass, proceed to payment simulation
        onSubmit();
    };

    // Note: Price shown is illustrative; it should ideally come from the props
    const estimatedPrice = packagesData.find(p => p.title === destination)?.price || '₹5,000';

    return (
        <div className="booking-form-content">
            <h3 className="modal-heading">Complete Booking for {destination}</h3>
            <p className="form-description">
                Please confirm your travel details and complete the secure payment below.
            </p>
            
            <form className="booking-fields" onSubmit={handleSubmit}>
                <label>
                    Travel Dates:
                    <input type="date" required />
                </label>
                <label>
                    Number of Travelers:
                    <input type="number" min="1" defaultValue="2" required />
                </label>
                <label style={{gridColumn: "1 / -1"}}>
                    Full Name on Card:
                    <input type="text" placeholder="John Doe" required />
                </label>

                <div className="payment-section" style={{gridColumn: "1 / -1"}}>
                    <h4>💳 Secure Payment Details</h4>
                    <p>Total Estimated Price: **{estimatedPrice}**</p>
                    
                    <label style={{gridColumn: "1 / -1"}}>
                        Card Number:
                        <input 
                            type="tel" 
                            name="cardNumber"
                            placeholder="XXXX XXXX XXXX XXXX" 
                            maxLength="16" 
                            value={cardDetails.cardNumber}
                            onChange={handleChange}
                            required 
                        />
                    </label>

                    <label>
                        Expiry (MM/YY):
                        <input 
                            type="text" 
                            name="expiry"
                            placeholder="MM/YY" 
                            maxLength="5" 
                            pattern="\d{2}/\d{2}"
                            value={cardDetails.expiry}
                            onChange={handleChange}
                            required 
                        />
                    </label>
                    <label>
                        CVC:
                        <input 
                            type="text" 
                            name="cvc"
                            placeholder="CVC" 
                            maxLength="4" 
                            value={cardDetails.cvc}
                            onChange={handleChange}
                            required 
                        />
                    </label>
                </div>

                {paymentError && <p className="payment-error-message">{paymentError}</p>}


                <div className="form-actions" style={{gridColumn: "1 / -1"}}>
                    <button type="button" onClick={onBack} className="btn back-btn" disabled={isProcessing}>
                        &lsaquo; Back
                    </button>
                    <button type="submit" className="btn submit-payment-btn" disabled={isProcessing}>
                        {isProcessing ? 'Processing...' : 'CONFIRM & PAY NOW'}
                    </button>
                </div>
            </form>
        </div>
    );
};

// Main Modal Container (Handles multi-step logic)
const BookingModal = ({ isOpen, onClose, destination, price, rating }) => {
    const [step, setStep] = useState(1); 
    const [isProcessing, setIsProcessing] = useState(false);
    
    if (!isOpen) return null;

    // --- Dynamic Modal Content for each destination ---
    const modalContent = {
        "Serene Beaches": {
            ratingText: "Rated 4/5 for Vibe and Nightlife.",
            whyVisit: "Goa is the ultimate destination for sun, sand, and fun. Enjoy watersports, ancient churches, and vibrant markets.",
            bestTime: "October to March (Ideal weather, peak season)",
            convince: "Our package includes a free sunset cruise! Don't miss this perfect blend of relaxation and adventure—Secure your spot now!",
        },
        "HARIDWAR": {
            ratingText: "Rated 5/5 for Spiritual Experience.",
            whyVisit: "The holy city on the banks of the River Ganga, offering deep spiritual immersion, especially during the Ganga Aarti.",
            bestTime: "October to April (Pleasant weather, ideal for pilgrimages)",
            convince: "Find peace and divinity. This is a journey for the soul—Book your sacred trip today!",
        },
        "MANALI": {
            ratingText: "Rated 4/5 for Scenery and Adventure Sports.",
            whyVisit: "A Himalayan paradise offering thrilling trekking trails, river rafting, and stunning snow views, perfect for adrenaline junkies and nature lovers.",
            bestTime: "May to July (Summer adventure) or October to February (Snow season)",
            convince: "Escape the heat! Your package includes one free adventure activity like paragliding or river rafting—Confirm your mountain escape!",
        },
        "AGRA": {
            ratingText: "Rated 4/5 for History and Architecture.",
            whyVisit: "Home to the magnificent Taj Mahal, Agra Fort, and Fatehpur Sikri, offering a deep dive into Mughal history.",
            bestTime: "October to March (Cool, pleasant weather)",
            convince: "Witness the wonder of the world at sunrise! Book now to get a complimentary guided tour of the Taj Mahal.",
        },
        "JAIPUR": {
            ratingText: "Rated 5/5 for Culture and Heritage.",
            whyVisit: "The Pink City, known for its royal palaces, imposing forts, and rich Rajasthani culture and cuisine.",
            bestTime: "October to March (Best time to explore forts comfortably)",
            convince: "Live like royalty! Our package includes a traditional dinner with folk music and dance—Secure your royal experience today!",
        },
        "LAKSHADWEEP": {
            ratingText: "Rated 5/5 for Marine Life and Seclusion.",
            whyVisit: "An archipelago of pristine islands, coral reefs, and turquoise lagoons, ideal for diving and water sports.",
            bestTime: "October to Mid-May (Calm, clear waters)",
            convince: "Experience paradise on earth! Limited entry makes this highly exclusive—Finalize your tropical getaway before it's too late!",
        },
    };

    const content = modalContent[destination] || {
        ratingText: "N/A", whyVisit: "A great destination!", bestTime: "Anytime!", 
        convince: "Book now to find out more!"
    };

    const renderStars = (starRating) => {
        return [...Array(5)].map((_, i) => (
            <i
                key={i}
                className={i < starRating ? "fas fa-star" : "far fa-star"}
            ></i>
        ));
    };

    const handleClose = () => {
        setStep(1); 
        setIsProcessing(false);
        onClose();
    };

    const handlePaymentSubmit = () => {
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            setStep(3); // Move to success screen
        }, 2000); 
    };

    let modalBody;

    if (step === 1) {
        modalBody = (
            <>
                <h3 className="modal-heading">Booking: {destination}</h3>
                <div className="modal-details">
                    <p className="detail-item">
                        <span className="detail-label">Package Price:</span>
                        <span className="detail-value rating-line">
                            <span className="rating-text" style={{fontWeight: 700, color: '#dc3545'}}>{price}</span> 
                        </span>
                    </p>
                    <p className="detail-item">
                        <span className="detail-label">Traveler Rating:</span>
                        <span className="detail-value rating-line">
                            <span className="stars">{renderStars(rating)}</span> 
                            <span className="rating-text">{content.ratingText}</span> 
                        </span>
                    </p>
                    <p className="detail-item">
                        <span className="detail-label">Why Visit?</span>
                        <span className="detail-value">{content.whyVisit}</span>
                    </p>
                    <p className="detail-item">
                        <span className="detail-label">Best Time to Go:</span>
                        <span className="detail-value">{content.bestTime}</span>
                    </p>
                    <div className="convincer">
                        <p>✨ {content.convince}</p>
                    </div>
                </div>
                <button onClick={() => setStep(2)} className="btn modal-continue-btn">
                    CONTINUE TO BOOKING FORM &rsaquo;
                </button>
            </>
        );
    } else if (step === 2) {
        modalBody = (
            <BookingFormContent 
                destination={destination} 
                onBack={() => setStep(1)} 
                onSubmit={handlePaymentSubmit}
                isProcessing={isProcessing}
            />
        );
    } else if (step === 3) {
        modalBody = (
            <PaymentSuccessContent 
                destination={destination} 
                onClose={handleClose} 
            />
        );
    }

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                {modalBody}
                <button 
                    onClick={handleClose} 
                    className="modal-dismiss-btn"
                    disabled={isProcessing}
                >
                    &times;
                </button>
            </div>
        </div>
    );
};


// --- 2. MAIN PAGE COMPONENT (Parallax3) ---



const Parallax3 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);

    const handleReadMoreClick = (e, pkg) => {
        e.preventDefault(); // Prevent the default navigation behavior of the <a> tag
        setSelectedPackage(pkg);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedPackage(null); // Clear selected package on close
    };


    return (
        <section
            className="parallax3"
            style={{ "--parallax-h": "120vh", backgroundColor: "rgb(239, 241, 243)" }}
        >
            <div className="parallax-content">
                <br />
                <br />
                <div className="fourcards-container">
                    {packagesData.map((place, index) => (
                        <div className="fourcard" key={index}>
                            <div className="fourcard-image-wrapper">
                                <img src={place.img} alt={place.title} />
                                <div className="fourcard-title-badge">{place.title}</div>
                            </div>
                            <div className="fourcard-content">
                                <div className="fourcard-price">
                                    {place.price}{" "}
                                    <span style={{ fontSize: "14px", color: "#555" }}>per night</span>
                                </div>
                                <div className="fourcard-rating">
                                    {[...Array(5)].map((_, i) => (
                                        <i
                                            key={i}
                                            className={i < place.rating ? "fas fa-star" : "far fa-star"}
                                        ></i>
                                    ))}
                                </div>
                                <div className="fourcard-description">{place.desc}</div>
                                <div className="fourcard-icons">
                                    {place.icons.map((icon, i) => (
                                        <i className={icon} key={i}></i>
                                    ))}
                                </div>
                                {/* Use onClick handler here instead of href for modal logic */}
                                <a 
                                    href="#" 
                                    className="read-more"
                                    onClick={(e) => handleReadMoreClick(e, place)}
                                >
                                    BOOK NOW
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* --- BOOKING MODAL --- */}
            {selectedPackage && (
                <BookingModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    destination={selectedPackage.title}
                    price={selectedPackage.price}
                    rating={selectedPackage.rating}
                />
            )}
        </section>
    );
};

export default Parallax3;