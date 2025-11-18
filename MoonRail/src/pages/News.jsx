// pages/News.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/News.css";

const News = () => {
  const navigate = useNavigate();

  const newsArticles = [
    {
      id: 1,
      title: "Himalayan Treks",
      description:
        "Embark on an epic adventure to the majestic peaks of the Himalayas. Experience breathtaking views and serene landscapes.",
      image:
        "https://th.bing.com/th/id/R.180e3a79a2a106685b6f53366c9efc43?rik=iKdt33VwgK10%2fQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2f2QOpDiC.jpg&ehk=AZAj3MnoimSu%2flTSp1%2bOwRbiP%2f5wg0vebb2oPcTDsGE%3d&risl=&pid=ImgRaw&r=0",
      category: "Adventure",
      reviews: [
        { rating: 5, text: "Amazing views! The best trekking experience.", reviewer: "Anjali S." },
        { rating: 4, text: "Challenging but rewarding. Highly recommend MoonRail's planning.", reviewer: "Rohan V." }
      ]
    },
    {
      id: 2,
      title: "Goan Getaway",
      description:
        "Relax on the sun-kissed beaches of Goa. Enjoy the vibrant nightlife, delicious cuisine, and a laid-back vibe.",
      image:
        "https://media.easemytrip.com/media/Blog/India/637136726518786264/637136726518786264QBU8O9.jpg",
      category: "Beach",
      reviews: [
        { rating: 4, text: "Beaches were lovely, great food!", reviewer: "Tina K." },
        { rating: 5, text: "Perfect relaxing vacation. Everything went smoothly.", reviewer: "Alex B." }
      ]
    },
    {
      id: 3,
      title: "Jaipur's Royal Charm",
      description:
        "Explore the Pink City's magnificent forts, palaces, and colorful bazaars. A journey back in time awaits.",
      image:
        "https://i.pinimg.com/originals/a3/e3/db/a3e3dbfb46f42f73110060ea2a959124.jpg",
      category: "Culture",
      reviews: [
        { rating: 5, text: "Felt like royalty! Incredible history.", reviewer: "Priya M." },
        { rating: 4, text: "Excellent guide and itinerary. Jaipur is a must-see.", reviewer: "David W." }
      ]
    },
    {
      id: 4,
      title: "Kerala Backwaters",
      description:
        "Float along the tranquil backwaters of Kerala on a traditional houseboat. A perfect blend of nature and serenity.",
      image: "https://i.ytimg.com/vi/7TwwbECGc1s/maxresdefault.jpg",
      category: "Nature",
      reviews: [
        { rating: 5, text: "Truly a 'God's own country' experience! Serene and beautiful.", reviewer: "Sarah L." }
      ]
    },
    {
      id: 5,
      title: "The Thar Desert",
      description:
        "Discover the golden dunes of the Thar Desert on a camel safari. Experience the unique culture and starlit nights.",
      image:
        "https://images.cnbctv18.com/wp-content/uploads/2023/08/thar-desert-shutterstock-1019x573.jpg",
      category: "Adventure",
      reviews: [
        { rating: 4, text: "Camel ride was fun! The starry night sky was unforgettable.", reviewer: "Yash R." }
      ]
    },
    {
      id: 6,
      title: "Andaman Islands",
      description:
        "Unwind on the pristine beaches and explore the vibrant marine life of the Andaman Islands. A tropical paradise awaits.",
      image: "https://live.staticflickr.com/65535/49108229337/968e6ce697_b.jpg",
      category: "Beach",
      reviews: [
        { rating: 5, text: "Best snorkeling of my life! The water is crystal clear.", reviewer: "Neha Z." }
      ]
    }
  ];

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  const handleReadMore = (destination) => {
    const routes = {
      'himalayan treks': 'himalayan-treks',
      'goan getaway': 'goan-getaway',
      "jaipur's royal charm": 'jaipurs-royal-charm',
      'kerala backwaters': 'kerala-backwaters', 
      'the thar desert': 'thar-desert',
      'andaman islands': 'andaman-islands'
    };
    navigate(`/destination/${routes[destination.toLowerCase()]}`);
  };

  const handleExplore = (destination) => {
    const links = {
      'himalayan treks': 'https://trekthehimalayas.com/alltreks',
      'goan getaway': 'https://madmansjourney.com/travel-blogs/goa-travel-blog/', 
      "jaipur's royal charm": 'https://blog.untravel.com/jaipur/',
      'kerala backwaters': 'https://www.alongdustyroads.com/posts/kerala-backwaters-guide',
      'the thar desert': 'https://www.realdesertmansafarijaisalmer.com/blog/major-tourist-attractions-of-the-thar-desert',
      'andaman islands': 'https://blog.untravel.com/andaman-islands/'
    };
    window.open(links[destination.toLowerCase()], '_blank');
  };

  return (
    <div className="news-page">
      <Topbar />
      <Navbar />

      <div className="news-hero">
        <h1>MoonRail News & Updates</h1>
        <p>
          Latest travel news, service updates, and exciting announcements from your favorite travel partner
        </p>
      </div>

      <main className="news-main">
        <h2>Travel News & Announcements</h2>

        <div className="news-grid">
          {newsArticles.map((article) => (
            <div key={article.id} className="news-card">
              <img src={article.image} alt={article.title} className="news-image" />
              <div className="news-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>

                <div className="action-buttons">
                  <button className="read-more-btn" onClick={() => handleReadMore(article.title)}>
                    Read More
                  </button>
                  <button className="explore-btn" onClick={() => handleExplore(article.title)}>
                    Explore
                  </button>
                </div>

                <div className="reviews-section">
                  <h4>Traveler Reviews</h4>
                  <div className="reviews-list">
                    {article.reviews.map((review, index) => (
                      <div key={index} className="review-item">
                        <span className="rating">{renderStars(review.rating)}</span>
                        {review.text} <span className="reviewer">- {review.reviewer}</span>
                      </div>
                    ))}
                  </div>

                  <form className="review-form">
                    <h4>Share Your Experience</h4>
                    <label>Your Review:</label>
                    <textarea placeholder="Write your feedback..." required></textarea>

                    <div className="rating-input">
                      <label>Rating:</label>
                      <div className="rating-options">
                        {[1, 2, 3, 4, 5].map((r) => (
                          <label key={r}>
                            <input type="radio" name={`rating-${article.id}`} value={r} required={r === 1} />
                            <span>
                              {r === 1
                                ? "★ Poor"
                                : r === 2
                                ? "★ Average"
                                : r === 3
                                ? "★ Good"
                                : r === 4
                                ? "★ Can't wait to go back!"
                                : "★ Still in the dreamland!"}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <button type="submit" className="submit-review-button">
                      Submit Review
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="news-newsletter">
          <h3>Stay Updated with MoonRail</h3>
          <p>Subscribe to our newsletter for the latest travel news and exclusive offers</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email address" className="newsletter-input" />
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default News;
