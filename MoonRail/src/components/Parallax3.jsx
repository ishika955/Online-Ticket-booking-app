import React from "react";
import "../styles/Parallax3.css";

// 1. IMPORT ALL IMAGES (Relative path from Parallax3.jsx to src/assets)
import goaImg from "../assets/goa.jpg";
import haridwarImg from "../assets/haridwar.jpg";
import manaliImg from "../assets/manali.jpg";
import agraImg from "../assets/agra.jpg";
import jaipurImg from "../assets/jaipur.jpg";
import lakshdweepImg from "../assets/lakshdweep.jpg";

const Parallax3 = () => {
  const places = [
    {
      // 2. Use the imported variable instead of the string path
      img: goaImg,
      title: "Serene Beaches",
      price: "₹5,500",
      desc: "Relax in the vibrant vibes of Goa! Enjoy stunning beaches, luxury stays, and amazing nightlife — all at the best price.",
      icons: ["fas fa-route", "fas fa-stopwatch", "fas fa-bicycle", "fas fa-ship"],
    },
    {
      img: haridwarImg,
      title: "HARIDWAR",
      price: "₹3,200",
      desc: "Experience the spiritual charm of Ganga Aarti, holy ghats, and peaceful temples in Haridwar.",
      icons: ["fas fa-praying-hands", "fas fa-water", "fas fa-route", "fas fa-om"],
    },
    {
      img: manaliImg,
      title: "MANALI",
      price: "₹6,000",
      desc: "A paradise for nature lovers! Snowy mountains, river adventures, and cozy stays in Manali await you.",
      icons: ["fas fa-snowflake", "fas fa-route", "fas fa-bicycle", "fas fa-mountain"],
    },
    {
      img: agraImg,
      title: "AGRA",
      price: "₹4,800",
      desc: "Discover the iconic Taj Mahal and Mughal heritage in the historic city of Agra.",
      icons: ["fas fa-landmark", "fas fa-route", "fas fa-utensils", "fas fa-camera"],
    },
    {
      img: jaipurImg,
      title: "JAIPUR",
      price: "₹5,200",
      desc: "Explore the Pink City’s palaces, forts, and vibrant bazaars for a royal experience in Jaipur.",
      icons: ["fas fa-crown", "fas fa-route", "fas fa-mountain", "fas fa-camera"],
    },
    {
      img: lakshdweepImg,
      title: "LAKSHADWEEP",
      price: "₹7,500",
      desc: "Crystal-clear waters, coral reefs, and serene beaches make Lakshadweep a tropical paradise.",
      icons: ["fas fa-ship", "fas fa-water", "fas fa-swimmer", "fas fa-umbrella-beach"],
    },
  ];

  return (
    <section
      className="parallax3"
      style={{ "--parallax-h": "120vh", backgroundColor: "rgb(239, 241, 243)" }}
    >
      <div className="parallax-content">
        <br />
        <br />
        <div className="fourcards-container">
          {places.map((place, index) => (
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
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <div className="fourcard-description">{place.desc}</div>
                <div className="fourcard-icons">
                  {place.icons.map((icon, i) => (
                    <i className={icon} key={i}></i>
                  ))}
                </div>
                <a href="login.html" className="read-more">
                  READ MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Parallax3;