import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Hero.css";
import heroBg from "../assets/her.jpg";

function Hero() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    from: "",
    to: "",
    date: "",
    seats: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSearch = () => {
    const { from, to, date, seats } = form;

    if (!from || !to || !date || !seats) {
      alert("Please fill all fields before searching!");
      return;
    }

    console.log("Searching with:", form);
    setIsLoading(true);

    // simulate a short loading delay
    setTimeout(() => {
      setIsLoading(false);

      // ✅ pass data as URL query parameters
      const query = `?origin=${encodeURIComponent(from)}&destination=${encodeURIComponent(
        to
      )}&date=${encodeURIComponent(date)}&guests=${seats}`;
      navigate(`/booking${query}`);
    }, 1000);
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

            <button
              id="searchBtn"
              onClick={handleSearch}
              className="search-button"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Loading...
                </>
              ) : (
                <>
                  <i className="fas fa-search"></i> Finding Journeys...
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
