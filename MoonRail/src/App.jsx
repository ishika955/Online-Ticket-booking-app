import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homes from "./pages/Homes";
import Greece from "./pages/greece";
import Mauritius from "./pages/mauritius";
import Scotland from "./pages/scotland";
import Booking from "./pages/booking";
import Offers from "./pages/Offers"; 
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import News from "./pages/News";
import HimalayanTreks from "./pages/destinations/HimalayanTreks";
import GoaGetaway from "./pages/destinations/GoaGetaway";
import JaipurRoyal from "./pages/destinations/JaipurRoyal";

// ✅ Import your login/signup pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/greece" element={<Greece />} />
        <Route path="/mauritius" element={<Mauritius />} />
        <Route path="/scotland" element={<Scotland />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/destination/himalayan-treks" element={<HimalayanTreks />} />
        <Route path="/destination/goan-getaway" element={<GoaGetaway />} />
        <Route path="/destination/jaipurs-royal-charm" element={<JaipurRoyal />} />

        {/* ✅ Routes for Login and Signup */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
