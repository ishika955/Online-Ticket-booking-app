import React from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Replace this with your actual image path for Mauritius
import heroImage from "../assets/mauritius.jpg"; 

const Mauritius = () => {
  // --- MAURITIUS SPECIFIC DATA ---

  const packageIncludes = [
    { icon: "fa-plane-departure", title: "Return Flights", desc: "Ex-Delhi/Mumbai" },
    { icon: "fa-hotel", title: "5-Star Stay", desc: "Beachfront Resort" },
    { icon: "fa-utensils", title: "Gourmet Meals", desc: "Breakfast & Dinner" },
    { icon: "fa-car-side", title: "Transfers", desc: "Airport & Sightseeing" },
  ];

  const itinerary = [
    { day: "Day 1: Arrival & Grand Bay Leisure", color: "text-orange-400", text: "Arrive at Sir Seewoosagur Ramgoolam International Airport (SSR). Enjoy a private transfer to your 5-star resort near Grand Bay. Check-in and spend the evening relaxing by the ocean or exploring the resort's amenities." },
    { day: "Day 2: North Island Tour & Pamplemousses", color: "text-purple-400", text: "Full-day tour of North Island, including the famous Pamplemousses Botanical Garden and the vibrant Port Louis waterfront. Enjoy shopping and a local lunch." },
    { day: "Day 3: Optional Catamaran to Île aux Cerfs", color: "text-orange-400", text: "Choose an optional Catamaran cruise to the spectacular Île aux Cerfs, renowned for its white-sand beaches and turquoise lagoons. Enjoy water sports or simply sunbathe in paradise." },
    { day: "Day 4: South Island Wonders & Seven Coloured Earth", color: "text-purple-400", text: "Explore the South with visits to the volcanic crater of Trou aux Cerfs, the sacred Ganga Talao (Grand Bassin), and the geological marvel of the Seven Coloured Earths at Chamarel." },
    { day: "Day 5: Deep Sea Relaxation / Free Day", color: "text-orange-400", text: "A day reserved for personal leisure. Indulge in a spa session, try deep-sea fishing, or simply enjoy the resort's private beach before a farewell dinner." },
    { day: "Day 6: Departure", color: "text-purple-400", text: "Enjoy a final breakfast before your private transfer returns you to the airport for your onward journey, filled with unforgettable memories." },
  ];
  
  // --- JSX TEMPLATE ---

  return (
    <div className="font-['Inter'] bg-[#1a202c] text-[#e2e8f0]">
      <Topbar />
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="hero-section-mauritius" // Changed ID for uniqueness if needed
        className="h-[60vh] md:h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center bg-black bg-opacity-50 p-10 rounded-xl max-w-4xl mx-auto backdrop-blur-sm">
          <p className="text-xl font-semibold text-purple-400 mb-2">
            NOV 15TH - NOV 20ST | 6 DAYS / 5 NIGHTS
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tight leading-tight">
            Mauritius: The <span className="text-orange-400">Turquoise</span> Dream
          </h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto text-gray-200">
            An all-inclusive luxury escape to the paradise of Mauritius, featuring 5-star resorts, private beach access, and exotic adventures.
          </p>
        </div>
      </section>

      {/* PACKAGE INCLUDES */}
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

      {/* ITINERARY - Clean List Structure (No Timeline) */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Your 6-Day Itinerary
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

      {/* CTA */}
      <section className="py-20 bg-gray-900 border-t border-gray-700 text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-extrabold mb-4 text-white">
            Ready for Your Island Escape?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Limited seats available for the Nov 15th batch. Secure your all-inclusive package now and let us handle the details.
          </p>
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl inline-block">
            <p className="text-3xl font-bold text-white mb-4">
              Starting Price: <span className="text-orange-400">₹58,000</span>
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

export default Mauritius;