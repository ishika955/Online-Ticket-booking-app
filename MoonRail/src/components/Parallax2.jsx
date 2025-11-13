import { useState } from "react";
import "../styles/Parallax2.css";

// 1. IMPORT ALL IMAGE ASSETS (Ensure correct placement)
import lakshdweepImg from "../assets/lakshdweep.jpg";
import baliImg from "../assets/bali.jpg";
import switzerlandImg from "../assets/switzerland.jpg";
import parallaxBgImg from "../assets/parallax3.jpg"; // Background image for the section


// --- NEW PAYMENT SUCCESS COMPONENT (Step 3) ---
const PaymentSuccessContent = ({ destination, onClose }) => {
    return (
        <div className="payment-success-content">
            <h3 className="modal-heading success-heading">
                🎉 Booking Confirmed!
            </h3>
            <div className="success-icon">✓</div>
            <p className="success-message">
                Your luxury escape to **{destination}** has been successfully booked and paid for.
            </p>
            <p className="success-details">
                A detailed itinerary and confirmation email have been sent to your provided email address. We look forward to seeing you!
            </p>
            <button onClick={onClose} className="btn success-close-btn">
                Close and View More Packages
            </button>
        </div>
    );
};


// --- BOOKING FORM COMPONENT (Step 2 Content) ---
const BookingFormContent = ({ destination, onBack, onSubmit, isProcessing }) => {
    
    // State to hold form data (minimal data needed for validation)
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

    // Handler for form submission including simulated payment validation
    const handleSubmit = (e) => {
        e.preventDefault();
        setPaymentError('');

        // --- Simulated Expiry Date Validation ---
        const [month, year] = cardDetails.expiry.split('/');
        const currentYear = new Date().getFullYear() % 100;
        const currentMonth = new Date().getMonth() + 1;

        if (month > 12 || month < 1 || year < currentYear || (year === currentYear && month < currentMonth)) {
             setPaymentError('Expiry date is invalid or in the past.');
             return; // Stop submission
        }
        
        // Final length checks (simulating a fully validated card)
        if (cardDetails.cardNumber.length < 16 || cardDetails.cvc.length < 3) {
            setPaymentError('Please enter valid card details.');
            return;
        }

        // If all checks pass, proceed to payment simulation
        onSubmit();
    };

    return (
        <div className="booking-form-content">
            <h3 className="modal-heading">Complete Your Booking for {destination}</h3>
            <p className="form-description">
                Please fill out your travel details and complete the secure payment below to confirm your package.
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
                    <p>Total Package Price: **₹ 89,999** (Estimated)</p>
                    
                    <label style={{gridColumn: "1 / -1"}}>
                        Card Number:
                        {/* Use type="tel" for card numbers to bring up the numeric keyboard on mobile */}
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
                        &lsaquo; Back to Details
                    </button>
                    <button type="submit" className="btn submit-payment-btn" disabled={isProcessing}>
                        {isProcessing ? 'Processing...' : 'CONFIRM & PAY NOW'}
                    </button>
                </div>
            </form>
        </div>
    );
};


// --- Final Professional Modal Component (Multi-Step Logic) ---
const BookingModal = ({ isOpen, onClose, destination, rating }) => {
    const [step, setStep] = useState(1); 
    const [isProcessing, setIsProcessing] = useState(false);
    
    if (!isOpen) return null;

    // --- PERSUASIVE MODAL CONTENT --- (Unchanged)
    const modalContent = {
        "Lakshdweep": {
            heading: "Confirm Your Lakshadweep Luxury Escape",
            emoji: "🏝️",
            ratingText: "Rated excellent for Privacy and Marine Life",
            whyVisit: "India's hidden gem, offering pristine, untouched coral reefs and turquoise lagoons perfect for snorkeling, diving, and kayaking. Experience true serenity far from the crowded mainland.",
            bestTime: "October to Mid-May (Dry season with calm, clear waters)",
            convince: "Don't miss the chance to explore the vibrant underwater world of Kavaratti and Kadmat. Spaces are extremely limited due to conservation efforts—Book now to secure your spot!",
        },
        "Bali": {
            heading: "Secure Your Bali, Island of Gods, Getaway",
            emoji: "🕉️",
            ratingText: "Rated good for Culture and Adventure",
            whyVisit: "Bali offers a perfect blend of spiritual retreats, volcanic landscapes, world-class surfing, and vibrant nightlife. Explore iconic rice paddies and magnificent ancient temples like Uluwatu.",
            bestTime: "April to October (Dry season, ideal for beaches and sightseeing)",
            convince: "Immerse yourself in Balinese culture with a traditional cooking class, or relax with a sunrise yoga session in Ubud. Our packages include a complimentary Balinese massage—Confirm your booking today!",
        },
        "Switzerland": {
            heading: "Book Your Breathtaking Switzerland Adventure",
            emoji: "⛰️",
            ratingText: "Rated outstanding for Scenery and Punctuality",
            whyVisit: "Experience the majestic Swiss Alps, charming mountain villages, and the world's most scenic train rides. Perfect for skiing in winter and hiking amongst wildflowers in summer.",
            bestTime: "June to August (Summer for hiking) or December to March (Winter for snow sports)",
            convince: "Ride the Glacier Express for panoramic views of the Matterhorn, or explore Interlaken, the adventure capital. This high-demand package sells out quickly—Finalize your journey now!",
        },
    };

    const content = modalContent[destination] || {
        heading: "Booking Confirmation",
        emoji: "✈️",
        ratingText: "N/A",
        whyVisit: "Thank thank you for your interest! A travel agent will be in touch.",
        bestTime: "Anytime!",
        convince: "We look forward to planning your dream vacation!",
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
                <h3 className="modal-heading">{content.emoji} {content.heading}</h3>
                <div className="modal-details">
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
// -----------------------------------------------------------------


function Parallax2() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const packages = [
        {
            title: "BEST PACKAGES",
            destination: "Lakshdweep",
            rating: 4,
            img: lakshdweepImg, 
            alt: "Lakshdweep",
            description:
                "Lakshdweep Deluxe — Crystal-clear waters, luxury villas, and unforgettable sunsets.",
        },
        {
            title: "BEST PACKAGES",
            destination: "Bali",
            rating: 3,
            img: baliImg, 
            alt: "Bali",
            description:
                "Bali Getaway — Exotic temples, lush rice terraces, and world-class spas.",
        },
        {
            title: "BEST PACKAGES",
            destination: "Switzerland",
            rating: 5,
            img: switzerlandImg, 
            alt: "Switzerland",
            description:
                "Switzerland Adventure — Snowy Alps, scenic trains, and cozy chalets.",
        },
    ];

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === packages.length - 1 ? 0 : prev + 1));
    };

    const handleBookNow = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const current = packages[activeIndex];

    return (
        <section
            className="parallax2"
            style={{
                "--parallax-h": "80vh",
                backgroundImage: `url(${parallaxBgImg})`,
            }}
        >
            <div className="overlay"></div>

            <div className="package-card">
                <h2>{current.title}</h2>

                <div className="rating">
                    {[...Array(5)].map((_, i) => (
                        <i
                            key={i}
                            className={i < current.rating ? "fas fa-star" : "far fa-star"}
                        ></i>
                    ))}
                </div>

                <img src={current.img} alt={current.alt} />
                <p className="lead">{current.description}</p>
                <div className="card-cta">
                    <button onClick={handleBookNow} className="btn book-now">
                        BOOK NOW
                    </button>
                </div>
            </div>

            <button className="arrow left" onClick={prevSlide}>
                <span>&lsaquo;</span>
            </button>
            <button className="arrow right" onClick={nextSlide}>
                <span>&rsaquo;</span>
            </button>

            <BookingModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                destination={current.destination}
                rating={current.rating}
            />
        </section>
    );
}

export default Parallax2;