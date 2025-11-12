import { useState } from "react";
import "../styles/Hero.css";

// Assuming your image is named 'her.jpg' and located in src/assets
import heroBg from "../assets/her.jpg"; 

function Hero() {
  const [form, setForm] = useState({
    from: "",
    to: "",
    date: "",
    seats: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSearch = () => {
    console.log("Searching with:", form);
  };

  return (
    <div className="hero-image" style={{ backgroundImage: `url(${heroBg})` }}>
      <header className="hero">
        <div className="overlay">
          <div className="hero-text">
            <h1>DISCOVER</h1>
            <h2>the world</h2>
           
          </div>
        </div>
      </header>

      <div className="search-section-wrapper">
        <div className="search-header">
          <h2 className="search-title">Please Enter Your Details</h2>
        </div>
        
        <div className="search-form-gradient-band">
          <div className="form-row">
            <input
              id="from"
              placeholder="Enter Location from"
              value={form.from}
              onChange={handleChange}
            />
            <input
              id="to"
              placeholder="Enter Location to"
              value={form.to}
              onChange={handleChange}
            />
            <input
              id="date"
              type="date"
              placeholder="dd-mm-yyyy"
              value={form.date}
              onChange={handleChange}
            />
            <input
              id="seats"
              type="number"
              placeholder="Guests"
              value={form.seats}
              onChange={handleChange}
            />
            
            <button id="searchBtn" onClick={handleSearch} className="search-button">
              <i className="fas fa-search"></i> Finding Journeys...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;