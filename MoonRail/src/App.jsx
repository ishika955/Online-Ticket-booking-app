import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';
import Homes from "./pages/Homes";
import Greece from "./pages/greece";
import Mauritius from "./pages/mauritius";
import Scotland from "./pages/scotland";
import Booking from "./pages/booking";
import Offers from "./pages/Offers"; 
import AboutUs from "./pages/AboutUs";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';


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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      

      </Routes>
    </Router>
  );
}

export default App;
