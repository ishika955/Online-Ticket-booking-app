import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homes from "./pages/Homes";
import Greece from "./pages/greece";
import Mauritius from "./pages/mauritius";
import Scotland from "./pages/scotland";
import Booking from "./pages/booking";
import Offers from "./pages/Offers"; 
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/greece" element={<Greece />} />
        <Route path="/mauritius" element={<Mauritius />} />
        <Route path="/scotland" element={<Scotland />} />
        <Route path="/booking" element={<Booking />} />

        {/* ✅ FINAL: Offers Page Route */}
        <Route path="/offers" element={<Offers />} />
        <Route path="/about" element={<AboutUs />} /> {/* Add this route */}

      </Routes>
    </Router>
  );
}

export default App;
