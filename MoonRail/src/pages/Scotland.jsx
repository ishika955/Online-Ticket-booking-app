import React from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Assuming you have an image for Scotland in your assets folder
import heroImage from "../assets/scotland.jpg"; 

const Scotland = () => {
  // --- SCOTLAND SPECIFIC DATA ---

  const packageIncludes = [
    { icon: "fa-plane-departure", title: "Return Flights", desc: "Ex-Delhi/Mumbai" },
    { icon: "fa-castle", title: "Multi-City Stay", desc: "Edinburgh, Fort William, Isle of Skye" },
    { icon: "fa-utensils", title: "Daily Meals", desc: "Full Scottish Breakfast" },
    { icon: "fa-train", title: "Scenic Journeys", desc: "Highland Drives & Train Route" },
  ];

  const itinerary = [
    { day: "Day 1: Arrival in Edinburgh & Royal Mile", color: "text-orange-400", text: "Arrive at Edinburgh Airport (EDI). Private transfer to your hotel. Spend the afternoon exploring the historic Royal Mile, the heart of the Old Town." },
    { day: "Day 2: Edinburgh Castle & Old Town Lore", color: "text-purple-400", text: "Visit the magnificent Edinburgh Castle and take a guided tour of the Old Town. Optional evening: a spooky subterranean ghost tour." },
    { day: "Day 3: Journey to the Highlands (Fort William)", color: "text-orange-400", text: "Scenic morning transfer through breathtaking landscapes to Fort William. Stop to view the famous Glenfinnan Viaduct along the way." },
    { day: "Day 4: Loch Ness & Monster Hunt", color: "text-purple-400", text: "Full-day exploration of the Great Glen. Cruise on Loch Ness and visit the ruins of Urquhart Castle in search of the legendary Nessie." },
    { day: "Day 5: The Road to the Isle of Skye", color: "text-orange-400", text: "Travel north, crossing the iconic Skye Bridge onto the Isle of Skye. Check into your hotel in Portree and explore the colourful harbor." },
    { day: "Day 6: Skye Majesty & Return South", color: "text-purple-400", text: "Visit the dramatic Old Man of Storr and the cascading waterfall at Kilt Rock. Afternoon: Begin the scenic drive south towards Edinburgh." },
    { day: "Day 7: Departure", color: "text-orange-400", text: "Enjoy a final full Scottish breakfast before your private transfer takes you to Edinburgh International Airport (EDI) for your international departure." },
  ];

  // --- JSX TEMPLATE ---

  return (
    <div className="font-['Inter'] bg-[#1a202c] text-[#e2e8f0]">
      {/* Reusable Components */}
      <Topbar />
      <Navbar />

      {/* 1. HERO SECTION */}
      <section
        id="hero-section-scotland"
        className="h-[60vh] md:h-[80vh] flex items-center justify-center"
        style={{
          // Use imported heroImage variable
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center bg-black bg-opacity-50 p-10 rounded-xl max-w-4xl mx-auto backdrop-blur-sm">
          <p className="text-xl font-semibold text-purple-400 mb-2">
            NOV 29TH - DEC 05TH | 7 DAYS / 6 NIGHTS
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tight leading-tight">
            Scotland: The <span className="text-orange-400">Highland</span> Majesty
          </h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto text-gray-200">
            Explore the history of Edinburgh, the dramatic landscapes of the Highlands, and the mystery of Loch Ness on this enchanting 7-day journey.
          </p>
        </div>
      </section>

      {/* 2. PACKAGE INCLUDES */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">
            Package Includes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {packageIncludes.map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-gray-800 shadow-xl">
                <i className={`fas ${item.icon} text-4xl text-orange-400 mb-3`}></i>
                <p className="font-bold text-lg">{item.title}</p>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ITINERARY - Clean List Structure (No Timeline) */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Your 7-Day Highland Journey
          </h2>

          <div className="max-w-4xl mx-auto px-4">
            {itinerary.map((item, index) => (
              <div key={index} className="pb-10 mb-4 border-b border-gray-700 last:border-b-0">
                <h3 className={`text-2xl font-bold ${item.color} mb-1`}>{item.day}</h3>
                <p className="text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-20 bg-gray-900 border-t border-gray-700 text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-extrabold mb-4 text-white">
            Secure Your Highland Adventure
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Spaces for the November/December tour are limited. Book your Highland Majesty journey now and experience the historic wonders of Scotland.
          </p>
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl inline-block">
            <p className="text-3xl font-bold text-white mb-4">
              Starting Price: <span className="text-orange-400">₹80,000</span>
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="cta-gradient text-white px-10 py-4 rounded-full font-bold text-xl shadow-lg transition-all duration-300"
              >
                <i className="fas fa-hand-point-right mr-2"></i> BOOK THIS PACKAGE
              </a>
              <a
                href="#"
                className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg transition duration-200"
              >
                <i className="fas fa-phone-alt mr-2"></i> CALL US
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
};

export default Scotland;