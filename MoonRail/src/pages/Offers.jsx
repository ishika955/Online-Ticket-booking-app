import React, { useState, useEffect, useRef, useMemo } from 'react';
import { offersData } from '../components/OfferCardData';
import '../styles/offer.css';
import TopBar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Offers = () => {
    const [wishlistCount, setWishlistCount] = useState(0);
    const [activeFilter, setActiveFilter] = useState('all');
    const [sortCriteria, setSortCriteria] = useState('default');
    const [points, setPoints] = useState(2779);
    const [wishlistItems, setWishlistItems] = useState(new Set());
    const gridRef = useRef(null);

    useEffect(() => {
        initWishlist();
        initScrollAnimations();
    }, []);

    const filteredOffers = offersData.filter(
        (offer) => activeFilter === 'all' || offer.category === activeFilter
    );

    const sortedOffers = useMemo(() => {
        const sorted = [...filteredOffers];

        switch (sortCriteria) {
            case 'expiry':
                return sorted.sort((a, b) => new Date(a.expiry) - new Date(b.expiry));
            case 'popularity':
                return sorted.sort((a, b) => b.popularity - a.popularity);
            case 'savings':
                return sorted.sort((a, b) => b.savings - a.savings);
            case 'price-low':
                return sorted.sort(
                    (a, b) => parsePrice(a.discountedPrice) - parsePrice(b.discountedPrice)
                );
            case 'price-high':
                return sorted.sort(
                    (a, b) => parsePrice(b.discountedPrice) - parsePrice(a.discountedPrice)
                );
            default:
                return sorted;
        }
    }, [filteredOffers, sortCriteria]);

    const initFiltering = (filter) => {
        setActiveFilter(filter);
    };

    const isExpired = (expiryDate) => new Date(expiryDate) < new Date();

    const getCountdownText = (expiryDate) => {
        const now = new Date();
        const expiry = new Date(expiryDate);
        const timeDiff = expiry - now;

        if (timeDiff <= 0) return null;

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        if (days <= 1) {
            return { text: `${hours}h left`, className: 'countdown-timer urgent' };
        } else if (days <= 7) {
            return { text: `${days}d ${hours}h left`, className: 'countdown-timer warning' };
        } else {
            return { text: `${days} days left`, className: 'countdown-timer normal' };
        }
    };

    const initWishlist = () => {
        const savedWishlist = JSON.parse(localStorage.getItem('moonrailWishlist') || '[]');
        setWishlistItems(new Set(savedWishlist));
        setWishlistCount(savedWishlist.length);
    };

    const toggleWishlist = (offerId) => {
        const newWishlist = new Set(wishlistItems);

        if (newWishlist.has(offerId)) {
            newWishlist.delete(offerId);
            setWishlistCount((prev) => prev - 1);
            showNotification('Removed from wishlist 💔');
        } else {
            newWishlist.add(offerId);
            setWishlistCount((prev) => prev + 1);
            showNotification('Added to wishlist! ❤️');
        }

        setWishlistItems(newWishlist);
        localStorage.setItem('moonrailWishlist', JSON.stringify([...newWishlist]));
    };

    const addAllToWishlist = () => {
        const allOfferIds = filteredOffers.map((offer) => offer.id);
        const newWishlist = new Set([...wishlistItems, ...allOfferIds]);

        setWishlistItems(newWishlist);
        setWishlistCount(newWishlist.size);
        localStorage.setItem('moonrailWishlist', JSON.stringify([...newWishlist]));

        showNotification(`Added ${allOfferIds.length} items to wishlist! ❤️`);
    };

    const viewWishlist = () => {
        if (wishlistCount === 0) {
            showNotification('Your wishlist is empty! 💔');
        } else {
            showNotification(`You have ${wishlistCount} items in your wishlist ❤️`);
        }
    };

    const shareOffer = async (offer) => {
        const shareText = `${offer.title} - ${offer.description}. Check out this amazing offer from MoonRail!`;

        try {
            if (navigator.share) {
                await navigator.share({
                    title: offer.title,
                    text: shareText,
                    url: window.location.href,
                });
                showNotification('Offer shared successfully! 📤');
            } else {
                await navigator.clipboard.writeText(`${shareText} ${window.location.href}`);
                showNotification('Offer link copied to clipboard! 📋');
            }
        } catch (error) {
            if (error.name !== 'AbortError') {
                showNotification('Failed to share ❌', 'error');
            }
        }
    };

    const parsePrice = (priceString) => {
        return parseInt(priceString.replace(/[^\d]/g, '')) || 0;
    };

    const collectPoints = () => {
        const newPoints = points + Math.floor(Math.random() * 50) + 10;
        setPoints(newPoints);
        showNotification(`+${newPoints - points} points collected! 🎉`);
    };

    const showNotification = (message, type = 'success') => {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;

        if (type === 'error') {
            notification.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a52)';
        }

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    };

    const initScrollAnimations = () => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.offer-card').forEach((card) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
    };

    const filterItems = [
        { key: 'all', icon: 'fas fa-th-large', label: 'All' },
        { key: 'flight', icon: 'fas fa-plane', label: 'Flights' },
        { key: 'hotel', icon: 'fas fa-hotel', label: 'Hotels' },
        { key: 'bus', icon: 'fas fa-bus', label: 'Buses' },
        { key: 'train', icon: 'fas fa-train', label: 'Trains' },
        { key: 'cab', icon: 'fas fa-car', label: 'Cabs' },
        { key: 'package', icon: 'fas fa-suitcase', label: 'Packages' },
    ];

    const sortOptions = [
        { value: 'default', label: 'Sort by: Default' },
        { value: 'expiry', label: 'Expiring Soon' },
        { value: 'popularity', label: 'Most Popular' },
        { value: 'savings', label: 'Highest Savings' },
        { value: 'price-low', label: 'Price: Low to High' },
        { value: 'price-high', label: 'Price: High to Low' },
    ];

    return (
        <div className="offers-page">
            <TopBar />
            <Navbar />

            {/* Hero Section */}
            <section className="offers-hero">
                <div className="offers-hero-text">
                    <h1>EXCLUSIVE OFFERS</h1>
                    <h2>Unlock Amazing Deals</h2>

                    <div className="points-display">
                        <div className="points-info">
                            <i className="fas fa-coins"></i>
                            <span>Reward Points:</span>
                            <span className="points-count">{points.toLocaleString()}</span>
                        </div>

                        <button className="collect-btn" onClick={collectPoints}>
                            <i className="fas fa-gift"></i>
                            Collect Points
                        </button>
                    </div>

                    <a href="#offers" className="btn">Explore Offers</a>
                </div>
            </section>

            {/* Filter Navigation */}
            <nav className="offers-nav">
                {filterItems.map((item) => (
                    <a
                        key={item.key}
                        href="#"
                        className={`offer-nav-item ${activeFilter === item.key ? 'active' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            initFiltering(item.key);
                        }}
                    >
                        <i className={item.icon}></i>
                        <span>{item.label}</span>
                    </a>
                ))}

                <select
                    className="sort-select"
                    value={sortCriteria}
                    onChange={(e) => setSortCriteria(e.target.value)}
                >
                    {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </nav>

            {/* Wishlist Buttons */}
            <div className="wishlist-buttons">
                <button className="wishlist-btn" onClick={addAllToWishlist}>
                    <i className="far fa-heart"></i> Add All to Wishlist
                </button>

                <button className="wishlist-btn" onClick={viewWishlist}>
                    <i className="fas fa-heart"></i> View Wishlist ({wishlistCount})
                </button>
            </div>

            {/* Offers Grid */}
            <section className="offers-grid-section" id="offers">
                <h2 className="section-title">SPECIAL TRAVEL OFFERS</h2>
                <p className="section-subtitle">Limited time deals across all travel categories</p>

                <div className="offers-grid" ref={gridRef}>
                    {sortedOffers.map((offer) => {
                        const expired = isExpired(offer.expiry);
                        const countdown = getCountdownText(offer.expiry);
                        const isInWishlist = wishlistItems.has(offer.id);

                        return (
                            <div
                                key={offer.id}
                                className={`offer-card ${expired ? 'expired' : ''}`}
                                data-category={offer.category}
                                data-expiry={offer.expiry}
                            >
                                {offer.badge && (
                                    <div className={`offer-badge ${offer.badge.replace(' ', '-').toLowerCase()}`}>
                                        {offer.badge}
                                    </div>
                                )}

                                {expired && <div className="expired-badge">EXPIRED</div>}

                                <div
                                    className="wishlist-icon"
                                    onClick={() => toggleWishlist(offer.id)}
                                >
                                    <i className={isInWishlist ? 'fas fa-heart' : 'far fa-heart'}></i>
                                </div>

                                <div
                                    className="share-btn"
                                    onClick={() => shareOffer(offer)}
                                >
                                    <i className="fas fa-share-alt"></i>
                                </div>

                                {offer.image && (
                                    <div
                                        className="offer-image"
                                        style={{ backgroundImage: `url(${offer.image})` }}
                                    ></div>
                                )}

                                <div className="offer-details">
                                    <h3>{offer.title}</h3>
                                    <p>{offer.description}</p>

                                    <div className="price-comparison">
                                        <span className="original-price">{offer.originalPrice}</span>
                                        <span className="discounted-price">{offer.discountedPrice}</span>
                                        <span className="savings">
                                            Save ₹{offer.savings?.toLocaleString() || '0'}
                                        </span>
                                    </div>

                                    {offer.popularity && (
                                        <div className="offer-popularity">
                                            <i className="fas fa-fire"></i>
                                            <span>{offer.popularity} people booked this week</span>
                                        </div>
                                    )}

                                    {offer.progress && (
                                        <div className="offer-progress">
                                            <div className="progress-bar">
                                                <div
                                                    className="progress-fill"
                                                    style={{ width: `${offer.progress}%` }}
                                                ></div>
                                            </div>
                                            <span>{offer.progress}% booked - Hurry!</span>
                                        </div>
                                    )}

                                    {countdown && (
                                        <div className={countdown.className}>
                                            {countdown.text}
                                        </div>
                                    )}

                                    <div className="offer-meta">
                                        <div className="validity">
                                            Until: {new Date(offer.expiry).toLocaleDateString('en-GB')}
                                        </div>

                                        <button
                                            className={`btn ${expired ? 'expired-btn' : ''}`}
                                            disabled={expired}
                                        >
                                            {expired ? 'Expired' : 'Book Now'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Offers;
