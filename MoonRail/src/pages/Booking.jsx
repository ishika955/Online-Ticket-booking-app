import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPlane, faBus, faTrain, faTaxi, 
    faArrowRight, faClock, faExclamationTriangle, 
    faLock, faShieldAlt, faSpinner, faCreditCard, 
    faCheckCircle, faStar, faPhone, faUserCircle, 
    faMapMarkerAlt, faEnvelope, faArrowLeft, faUser, faTimes 
} from '@fortawesome/free-solid-svg-icons';
import { 
    faFacebook, faTwitter, faInstagram, 
    faLinkedinIn, faCcVisa, faCcMastercard 
} from '@fortawesome/free-brands-svg-icons';


// Assuming Topbar, Navbar, and Footer are available via these relative imports
// If they are not available, you must define them or remove the imports.
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


// Utility for simple UUID generation for mock data
const generateUUID = () => Math.random().toString(36).substring(2, 9);

const CURRENCY_SYMBOL = '₹';

const PUNJAB_CITIES = [
    'Amritsar', 'Ludhiana', 'Jalandhar', 'Patiala', 'Chandigarh', 
    'Bathinda', 'Pathankot', 'Hoshiarpur', 'Moga', 'Sangrur', 'Rajpura'
];
const SHORT_ROUTE_KEYWORDS = ['Moga', 'Hoshiarpur', 'Rajpura', 'Patiala', 'Jalandhar']; 

/**
 * Checks if the route is considered "short distance" based on keywords.
 * @param {string} origin 
 * @param {string} destination 
 * @returns {boolean}
 */
const isShortDistanceRoute = (origin, destination) => {
    const majorHubs = ['Amritsar', 'Ludhiana', 'Chandigarh', 'Bathinda', 'Pathankot'];
    const normOrigin = origin.trim();
    const normDestination = destination.trim();
    
    if (SHORT_ROUTE_KEYWORDS.includes(normOrigin) && SHORT_ROUTE_KEYWORDS.includes(normDestination)) {
        return true; 
    }
    const shortHops = ['Amritsar-Jalandhar', 'Jalandhar-Ludhiana', 'Chandigarh-Patiala', 'Rajpura-Patiala', 'Rajpura-Ludhiana', 'Moga-Ludhiana'];
    const route = `${normOrigin}-${normDestination}`;
    const reverseRoute = `${normDestination}-${normOrigin}`;
    
    if (shortHops.includes(route) || shortHops.includes(reverseRoute)) {
        return true; 
    }
    
    if (majorHubs.includes(normOrigin) && majorHubs.includes(normDestination)) {
        return false; 
    }
    
    if (!PUNJAB_CITIES.includes(normOrigin) || !PUNJAB_CITIES.includes(normDestination)) {
        return false; 
    }
    
    return true;
};

/**
 * Generates mock search results for a given travel type.
 * @param {string} type - 'flights', 'buses', 'trains', or 'cab'
 * @param {string} currentOrigin 
 * @param {string} currentDestination 
 * @returns {Array<Object>}
 */
const generateMockData = (type, currentOrigin, currentDestination) => {
    const data = [];
    const count = 12; 
    const isShortRoute = isShortDistanceRoute(currentOrigin, currentDestination);

    const AIRLINES = ['Air India', 'IndiGo', 'Vistara', 'SpiceJet'];
    const BUS_OPERATORS = ['PRTC', 'HRTC', 'Zingbus', 'New Deep Bus', 'Fauji Bus'];
    const TRAIN_NAMES = ['Swaraj Express', 'Amritsar Shatabdi', 'Paschim Express', 'Golden Temple Mail', 'Jalianwala Bagh Exp'];
    const CAB_SERVICES = ['GoCar Rentals', 'Local Taxi', 'Prime Cab', 'Punjab Cab'];

    if (type === 'flights' && isShortRoute) {
        return []; 
    }

    for (let i = 1; i <= count; i++) {
        const id = generateUUID();
        
        let basePrice;
        if (isShortRoute) {
            basePrice = (type === 'flights') ? 0 : 
                        (type === 'cab') ? 2000 : 
                        600; 
        } else if (type === 'flights') {
            basePrice = 4000; 
        } else {
            basePrice = 1200; 
        }
        
        const price = Math.floor(Math.random() * basePrice) + (basePrice / 2); 
        let item = { id, price: Math.max(150, Math.round(price / 10) * 10), type }; 

        if (type === 'flights') {
            const duration = `${Math.floor(Math.random() * 4) + 1}h ${Math.floor(Math.random() * 59)}m`;
            item = { ...item, 
                name: AIRLINES[i % AIRLINES.length], 
                departure: `${10 + (i % 8)}:${(i * 5) % 60 < 10 ? '0' : ''}${(i * 5) % 60} ${i % 2 === 0 ? 'AM' : 'PM'}`,
                duration,
                stops: i % 4 === 0 ? '1 Stop' : 'Non-stop'
            };
        } else if (type === 'buses') {
            const classes = ['Volvo AC Sleeper', 'Ordinary Seater', 'AC Seater', 'Lux Bus'];
            item = { ...item, 
                name: BUS_OPERATORS[i % BUS_OPERATORS.length],
                operator: classes[i % classes.length],
                departure: `${6 + (i % 8)}:${(i * 10) % 60 < 10 ? '0' : ''}${(i * 10) % 60} ${i % 3 === 0 ? 'PM' : 'AM'}`,
                seats: Math.floor(Math.random() * 20) + 5,
                class: i % 4 === 0 ? 'Sleeper' : 'Seater'
            };
        } else if (type === 'trains') {
            const classes = ['First AC', 'Second AC', 'Sleeper', 'General'];
            item = { ...item, 
                name: TRAIN_NAMES[i % TRAIN_NAMES.length],
                number: `TRN${12000 + i}`,
                departure: `${8 + (i % 5)}:${(i * 7) % 60 < 10 ? '0' : ''}${(i * 7) % 60} PM`,
                class: classes[i % classes.length],
            };
        } else if (type === 'cab') {
            const cars = ['Hatchback', 'Sedan (AC)', 'SUV (XL)'];
            item = { ...item, 
                name: CAB_SERVICES[i % CAB_SERVICES.length],
                carType: cars[i % cars.length],
                rate: `${CURRENCY_SYMBOL}${Math.floor(Math.random() * 10) + 18}/km`, 
                driver: `Driver ${i}`,
                rating: (Math.random() * 1.5 + 3.5).toFixed(1)
            };
        }
        data.push(item);
    }
    return data;
};

// --- Sub-Components ---
/**
 * Renders the individual search result card.
 */
const ResultItem = ({ item, origin, destination, onBookNow }) => {
    let icon, detailFields, detailString;
    const type = item.type;

    if (type === 'flights') {
        icon = faPlane;
        detailFields = (
            <div className="flex justify-between w-full md:w-3/4">
                <div className="flex flex-col items-start space-y-1">
                    <p className="font-bold text-xl text-gray-900">{item.departure}</p> 
                    <p className="text-xs text-gray-500">{origin}</p>
                </div>
                <div className="text-sm text-gray-500 text-center flex flex-col items-center">
                    <FontAwesomeIcon icon={faClock} className="text-xs" /> {item.duration}
                    <p className="text-xs text-indigo-500">{item.stops}</p>
                </div>
                <div className="flex flex-col items-end space-y-1">
                    <p className="font-semibold text-lg text-gray-700">{item.name}</p>
                    <p className="text-xs text-gray-500">{destination}</p>
                </div> 
            </div>
        );
        detailString = { 
            service: type, 
            id: item.id,
            description: `${item.name} - ${item.stops}`
        };
    } else if (type === 'buses') {
        icon = faBus;
        detailFields = (
            <>
                <p className="font-bold text-lg">{item.name}</p>
                <p className="text-gray-600">
                    <span className="font-semibold">{item.departure}</span> / {item.operator}
                </p>
                <p className="text-sm text-yellow-600">{item.class} ({item.seats} seats left)</p>
            </>
        );
        detailString = { 
            service: type, 
            id: item.id,
            description: `${item.name} (${item.operator})`
        };
    } else if (type === 'trains') {
        icon = faTrain;
        detailFields = (
            <>
                <p className="font-bold text-lg">{item.name}</p> 
                <p className="text-gray-600">
                    <span className="font-semibold">{item.departure}</span> 
                    <span className="text-sm text-gray-500">({item.number})</span>
                </p>
                <p className="text-sm text-indigo-600">{item.class}</p>
            </>
        );
        detailString = { 
            service: type, 
            id: item.id,
            description: `${item.name} (${item.number})`
        };
    } else if (type === 'cab') {
        icon = faTaxi;
        detailFields = (
            <>
                <p className="font-bold">{item.name}</p>
                <p className="text-gray-600">{item.carType} / {item.rate}</p>
                <p className="text-sm text-yellow-500"><FontAwesomeIcon icon={faStar} /> {item.rating} ({item.driver})</p>
            </>
        );
        detailString = { 
            service: type, 
            id: item.id,
            description: `${item.name} (${item.carType})`
        };
    }

    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 border-l-4 border-purple-500">
            <div className="flex items-center space-x-4 flex-grow">
                <div className={`text-3xl ${type === 'flights' ? 'text-blue-500' : type === 'buses' ? 'text-green-500' : type === 'trains' ? 'text-red-500' : 'text-yellow-500'}`}>
                    <FontAwesomeIcon icon={icon} />
                </div>
                <div className="flex-1 min-w-0">
                    {detailFields}
                </div>
            </div>
            <div className="flex flex-col items-end space-y-2 ml-4">
                <p className="text-2xl font-extrabold text-purple-700">{CURRENCY_SYMBOL}{item.price}</p>
                <button 
                    className="px-4 py-2 text-sm text-white font-semibold bg-purple-600 rounded-full hover:bg-purple-700 transition duration-150"
                    onClick={() => onBookNow(type, detailString, item.price)}
                >
                    Book Now
                </button>
            </div>
        </div>
    );
};

/**
 * Renders the content for a single tab (Flights, Buses, etc.)
 */
const ResultsTabContent = ({ type, results, origin, destination, onBookNow }) => {
    if (results.length === 0) {
        let note = '';
        if (type === 'flights' && isShortDistanceRoute(origin, destination)) {
            note = ` Flights are generally not available for the short route between ${origin} and ${destination}.`;
        }

        return (
            <div className="p-6 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow-inner text-center space-y-2">
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-2xl" />
                <p className="font-bold">No {type.toUpperCase()} results found.</p>
                <p className="text-sm">Please try Bus, Train, or Cab.{note}</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {results.map(item => (
                <ResultItem 
                    key={item.id} 
                    item={item} 
                    origin={origin} 
                    destination={destination}
                    onBookNow={onBookNow} // Pass down the openBookingForm handler
                />
            ))}
        </div>
    );
};

// --- UPDATED Booking Confirmation Modal Component ---
const BookingModal = ({ modalData, guests, closeModal, onPayment }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [seatPreference, setSeatPreference] = useState('');
    const [paymentStatus, setPaymentStatus] = useState({ 
        loading: false, 
        message: '', 
        stage: 0 
    });

    const isFormValid = () => {
        const phoneRegex = /^\d{10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name.trim()) return { valid: false, message: "Please enter your Full Name." };
        if (!email.trim() || !emailRegex.test(email)) return { valid: false, message: "Please enter a valid Email Address (e.g., user@example.com)." };
        if (!phone.trim() || !phoneRegex.test(phone.trim())) return { valid: false, message: "Please enter a valid 10-digit Phone Number." };
        return { valid: true };
    };

    const handlePayNow = () => {
        // Only allow payment if we're at stage 0 (ready) or stage 3 (finished) to prevent multiple clicks
        if (paymentStatus.stage !== 0) return; 

        // 1. Validation Check
        const validation = isFormValid();
        if (!validation.valid) {
            alert(validation.message); 
            return;
        }

        // 2. Start Simulation
        onPayment(modalData.price); // Call the parent component's placeholder handler
        setPaymentStatus({ loading: true, message: 'Verifying passenger details and ticket availability...', stage: 1 });

        // Stage 1: Initializing
        setTimeout(() => {
            setPaymentStatus(prev => ({ ...prev, message: 'Secure transaction request sent to gateway. Do not close this window.', stage: 2 }));
            
            // Stage 2: Processing
            setTimeout(() => {
                // Stage 3: Success
                setPaymentStatus({ 
                    loading: false, 
                    message: `Payment of ${CURRENCY_SYMBOL}${parseFloat(modalData.price).toFixed(2)} successful! Your tickets have been confirmed and emailed.`, 
                    stage: 3 
                });
                
                // Automatically close the modal after confirmation
                setTimeout(() => {
                    closeModal();
                }, 3000); 
            }, 2500);

        }, 2000);
    };

    if (!modalData) return null;

    const formattedPrice = parseFloat(modalData.price).toFixed(2);
    
    let buttonText, buttonClass;
    const isDisabled = paymentStatus.loading && paymentStatus.stage < 3;

    if (paymentStatus.stage === 0) {
        buttonText = `Pay Now (${CURRENCY_SYMBOL}${formattedPrice})`;
        buttonClass = 'bg-green-600 hover:bg-green-700';
    } else if (paymentStatus.stage === 1) {
        buttonText = (<><FontAwesomeIcon icon={faSpinner} spin className="mr-2"/> Initializing Payment...</>);
        buttonClass = 'bg-orange-500 cursor-not-allowed';
    } else if (paymentStatus.stage === 2) {
        buttonText = (<><FontAwesomeIcon icon={faCreditCard} className="mr-2"/> Processing Transaction...</>);
        buttonClass = 'bg-indigo-500 cursor-not-allowed';
    } else if (paymentStatus.stage === 3) {
        buttonText = (<><FontAwesomeIcon icon={faCheckCircle} className="mr-2"/> Booking Confirmed!</>);
        buttonClass = 'bg-blue-600 cursor-not-allowed';
    }

    return (
        <div className="fixed inset-0 z-[1010] flex items-center justify-center bg-black bg-opacity-75">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-purple-600 rounded-t-xl">
                    <h3 className="text-xl font-bold text-white">Confirm Your Trip</h3>
                    <button onClick={closeModal} className="text-white hover:text-gray-200 transition duration-150 text-xl" title="Close">
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                <div className="p-4 space-y-4">
                    <div className="p-4 bg-purple-100 rounded-lg border-l-4 border-purple-500">
                        <h3 className="text-xl font-semibold text-purple-800">{modalData.service.toUpperCase()} Booking</h3>
                        <p className="text-gray-700 mt-1">{modalData.description}</p>
                        <p className="text-3xl font-bold text-purple-900 mt-2">Total: {CURRENCY_SYMBOL}{formattedPrice}</p>
                    </div>

                    <h4 className="font-semibold text-gray-700 border-b pb-2">Primary Traveller Details ({guests} Guest{guests > 1 ? 's' : ''})</h4>
                    
                    {/* Input fields with validation setup */}
                    <input 
                        id="passenger-name" 
                        type="text" 
                        placeholder="Full Name (as per ID)" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-900" 
                        required 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        disabled={isDisabled} 
                    />
                    <input 
                        id="passenger-email" 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-900" 
                        required 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        disabled={isDisabled} 
                    />
                    <input 
                        id="passenger-phone" 
                        type="tel" 
                        placeholder="Phone Number (10 digits)" 
                        maxLength="10" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-900" 
                        required 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, '').slice(0, 10))} 
                        disabled={isDisabled} 
                    />

                    <select 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 text-gray-900" 
                        value={seatPreference} 
                        onChange={(e) => setSeatPreference(e.target.value)} 
                        disabled={isDisabled}
                    >
                        <option value="">Select Seat/Preference (Optional)</option>
                        <option value="window">Window Seat</option>
                        <option value="aisle">Aisle Seat</option>
                        <option value="front">Front Preference</option>
                    </select>

                    <button 
                        id="pay-now-button" 
                        type="button" 
                        className={`w-full mt-6 py-3 text-white font-bold text-lg rounded-lg shadow-xl transition duration-200 ${buttonClass}`}
                        onClick={handlePayNow}
                        disabled={isDisabled} // Disable button during processing and after success
                    >
                        {buttonText}
                    </button>
                    
                    <p id="payment-message" className={`text-center text-sm mt-3 ${paymentStatus.stage > 0 ? 'block' : 'hidden'} ${paymentStatus.stage === 3 ? 'text-blue-600 font-bold' : 'text-gray-500'}`}>
                        {paymentStatus.message}
                    </p>
                </div>
            </div>
        </div>
    );
};
// --- Main Component ---
const Booking = () => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [searchDate, setSearchDate] = useState('');
    const [guests, setGuests] = useState(0);
    const [activeTab, setActiveTab] = useState('flights');
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [alertContent, setAlertContent] = useState({ title: '', message: '', isError: true, redirect: false });
    const [bookingModalData, setBookingModalData] = useState(null);

    // Initial check for URL parameters and setting state (Data is received via URL search params)
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const urlOrigin = urlParams.get('origin') || '';
        const urlDestination = urlParams.get('destination') || '';
        const urlDate = urlParams.get('date') || '';
        const urlGuests = parseInt(urlParams.get('guests')) || 0;

        if (urlOrigin && urlDestination && urlDate && urlGuests > 0) {
            setOrigin(urlOrigin);
            setDestination(urlDestination);
            setSearchDate(urlDate);
            setGuests(urlGuests);
        } else {
            // Placeholder for original error handling
            // showAlert("Error", "No search criteria found...", true, true); 
        }
    }, []);

    // Memoize the mock data generation so it only runs when dependencies change
    const mockResults = useMemo(() => {
        if (!origin || !destination) return { flights: [], buses: [], trains: [], cab: [] };
        const results = {
            flights: generateMockData('flights', origin, destination),
            buses: generateMockData('buses', origin, destination),
            trains: generateMockData('trains', origin, destination),
            cab: generateMockData('cab', origin, destination)
        };
        // Set default tab if flights are not available
        if (activeTab === 'flights' && results.flights.length === 0 && results.buses.length > 0) {
            setActiveTab('buses');
        }
        return results;
    }, [origin, destination]); // Dependencies for mock data

    const showAlert = useCallback((title, message, isError = true, redirect = false) => {
        setAlertContent({ title, message, isError, redirect });
        setIsAlertVisible(true);
        if (redirect) {
            setTimeout(() => {
                window.location.href = 'index.html'; // Mock redirect
            }, 3000);
        }
    }, []);

    const closeAlert = () => setIsAlertVisible(false);

    const openBookingForm = (serviceType, details, price) => {
        setBookingModalData({
            service: serviceType,
            description: details.description,
            price: price
        });
    };

    const closeBookingModal = () => setBookingModalData(null);
    
    // Placeholder for actual payment logic (not strictly needed for this file's conversion)
    const handlePayment = (price) => {
        console.log(`Simulating payment for ${CURRENCY_SYMBOL}${price}`);
    };

    if (!origin || !destination || guests === 0) {
        // Render nothing or a loading state until URL params are processed/redirected
        return <div className="text-center p-10">Loading search results...</div>;
    }

    return (
        <div className="bg-gray-100 font-sans min-h-screen flex flex-col">
            
            {/* Header: Now using imported components */}
            <header className="fixed top-0 w-full bg-gray-900 text-white z-50 shadow-lg">
                <Topbar />
                <Navbar />
            </header>

            {/* Main Content */}
            <div id="main-content-wrapper" className="container mx-auto px-4 flex-grow pt-[7rem] pb-8">
                
                <div className="bg-white rounded-xl shadow-xl w-full p-6 my-4 border-t-4 border-purple-500">
                    <h2 className="text-2xl font-bold text-purple-800">
                        Search Results for {searchDate}: {origin} <FontAwesomeIcon icon={faArrowRight} className="text-purple-500 text-base mx-2" /> {destination}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">Found {Object.values(mockResults).flat().length}+ journeys for your trip.</p>
                </div>
                
                <div className="bg-white rounded-xl shadow-xl p-4 mb-4">
                    <div className="flex border-b border-gray-300 px-2 pt-2">
                        {['flights', 'buses', 'trains', 'cab'].map((type) => {
                            const iconMap = { flights: faPlane, buses: faBus, trains: faTrain, cab: faTaxi };
                            const labelMap = { flights: 'Flights', buses: 'Buses', trains: 'Trains', cab: 'Cabs' };
                            const isActive = activeTab === type;
                            return (
                                <button 
                                    key={type}
                                    className={`result-tab-button font-semibold mx-4 transition-colors duration-200 ${isActive ? 'text-purple-700 border-b-purple-700 border-b-2' : 'text-gray-500 border-b-transparent border-b-0'}`}
                                    onClick={() => setActiveTab(type)}
                                    style={{ paddingBottom: '0.5rem' }}
                                >
                                    <FontAwesomeIcon icon={iconMap[type]} className="mr-1" /> {labelMap[type]}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div id="results-content-area" className="space-y-4">
                    {/* Render ResultsTabContent, passing openBookingForm handler */}
                    {activeTab === 'flights' && (
                        <ResultsTabContent 
                            type="flights" 
                            results={mockResults.flights} 
                            origin={origin} 
                            destination={destination}
                            onBookNow={openBookingForm}
                        />
                    )}
                    {activeTab === 'buses' && (
                        <ResultsTabContent 
                            type="buses" 
                            results={mockResults.buses} 
                            origin={origin} 
                            destination={destination}
                            onBookNow={openBookingForm}
                        />
                    )}
                    {activeTab === 'trains' && (
                        <ResultsTabContent 
                            type="trains" 
                            results={mockResults.trains} 
                            origin={origin} 
                            destination={destination}
                            onBookNow={openBookingForm}
                        />
                    )}
                    {activeTab === 'cab' && (
                        <ResultsTabContent 
                            type="cab" 
                            results={mockResults.cab} 
                            origin={origin} 
                            destination={destination}
                            onBookNow={openBookingForm}
                        />
                    )}
                </div>
            </div>

            {/* Modals */}
            {bookingModalData && (
                <BookingModal
                    modalData={bookingModalData}
                    guests={guests}
                    closeModal={closeBookingModal}
                    onPayment={handlePayment}
                />
            )}

            {isAlertVisible && (
                <div className="fixed inset-0 z-[1020] flex items-center justify-center bg-black bg-opacity-75">
                    <div className="bg-white rounded-lg shadow-2xl w-full max-w-sm p-6 text-center">
                        <h4 className={`text-xl font-bold mb-3 ${alertContent.isError ? 'text-red-600' : 'text-blue-600'}`}>
                            {alertContent.title}
                        </h4>
                        <p className="text-gray-600 mb-6">{alertContent.message}</p>
                        <button 
                            onClick={closeAlert} 
                            className={`px-6 py-2 text-white rounded-lg font-semibold transition duration-150 
                                ${alertContent.isError ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'}`}
                            disabled={alertContent.redirect}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}

           <Footer />
        </div>
    );
};

export default Booking;