import React from "react";

// Import components (Path is relative to src/pages)
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import NormalSection from "../components/NormalSection";

// Offer components have been removed.

import Parallax1 from "../components/Parallax1";
import Parallax2 from "../components/Parallax2";
import Parallax3 from "../components/Parallax3";
import Parallax4 from "../components/Parallax4";
import Footer from "../components/Footer";

// Import CSS (Path is relative to src/pages)
import "../styles/navbar.css";
import "../styles/Hero.css";


import "../styles/Parallax1.css";
import "../styles/Parallax2.css";
import "../styles/NormalSection.css";
import "../styles/Parallax3.css";
import "../styles/Footer.css";

const Homes = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
     
 
      <Parallax1 />
      <Parallax2 />
<NormalSection />
      <Parallax3 />
      <Parallax4 />
      <Footer />
    </>
  );
};

export default Homes;