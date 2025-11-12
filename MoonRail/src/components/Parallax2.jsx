import { useState } from "react";
import { Link } from "react-router-dom"; // 👈 NEW IMPORT
import "../styles/Parallax2.css";

// 1. IMPORT ALL IMAGE ASSETS (Assuming they were moved to src/assets)
import lakshdweepImg from "../assets/lakshdweep.jpg";
import baliImg from "../assets/bali.jpg";
import switzerlandImg from "../assets/switzerland.jpg"; 
import parallaxBgImg from "../assets/parallax3.jpg"; // Background image for the section

function Parallax2() {
  const [activeIndex, setActiveIndex] = useState(0);

  const packages = [
    {
      title: "BEST PACKAGES",
      rating: 4,
      img: lakshdweepImg,
      alt: "Lakshdweep",
      description:
        "Lakshdweep Deluxe — Crystal-clear waters, luxury villas, and unforgettable sunsets.",
    },
    {
      title: "BEST PACKAGES",
      rating: 3,
      img: baliImg,
      alt: "Bali",
      description:
        "Bali Getaway — Exotic temples, lush rice terraces, and world-class spas.",
    },
    {
      title: "BEST PACKAGES",
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

  const current = packages[activeIndex];

  return (
    <section
      className="parallax best-packages"
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

        <br />
        <br />
        <img
          src={current.img} 
          alt={current.alt}
          height="300px"
          width="600px"
        />
        <p className="lead">{current.description}</p>
        <div className="card-cta">
          {/* FIX: Using <Link> instead of <a> to enable client-side routing */}
          <Link to="/login" className="btn book-now">
            BOOK NOW
          </Link>
        </div>
        <br></br>
      </div>

      <button className="arrow left" onClick={prevSlide}>
        <span>&lsaquo;</span>
      </button>
      <button className="arrow right" onClick={nextSlide}>
        <span>&rsaquo;</span>
      </button>
    </section>
  );
}

export default Parallax2;