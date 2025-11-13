import React from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImage from "../assets/switzerland.jpg"; // Assuming this path is correct

const Greece = () => {
  return (
    // Applied background and text colors 
    <div className="font-['Inter'] bg-[#1a202c] text-[#e2e8f0]">
      {/* Reusable Topbar + Navbar */}
      <Topbar />
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="hero-section"
        className="h-[60vh] md:h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center bg-black bg-opacity-50 p-10 rounded-xl max-w-4xl mx-auto backdrop-blur-sm">
          <p className="text-xl font-semibold text-purple-400 mb-2">
            OCT 25TH - NOV 01ST | 7 DAYS / 6 NIGHTS
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-tight leading-tight">
            Greece: The <span className="text-orange-400">Aegean</span> Odyssey
          </h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto text-gray-200">
            Experience the magic of the Cyclades with 5-star stays in Athens,
            Santorini, and Mykonos, blending ancient history with stunning
            island life.
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
            {[
              { icon: "fa-plane-departure", title: "Return Flights", desc: "Ex-Delhi/Mumbai" },
              { icon: "fa-umbrella-beach", title: "Multi-City Stay", desc: "Athens, Santorini, Mykonos" },
              { icon: "fa-utensils", title: "Daily Meals", desc: "Breakfast & Dinner" },
              { icon: "fa-ship", title: "Inter-Island Travel", desc: "Domestic Flights & Ferry" },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-gray-800 shadow-xl">
                {/* NOTE: You need to ensure a font-awesome library is linked in your index.html for these icons (fas) to display */}
                <i className={`fas ${item.icon} text-4xl text-orange-400 mb-3`}></i>
                <p className="font-bold text-lg">{item.title}</p>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="py-16 bg-gray-800">
    <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Your 7-Day Odyssey
        </h2>

        <div className="max-w-4xl mx-auto px-4">
            
            {/* The data array */}
            {[
              { day: "Day 1: Arrival in Athens & Plaka Leisure", color: "text-orange-400", text: "Arrive at Athens International Airport (ATH)..." },
              { day: "Day 2: Ancient Athens Tour", color: "text-purple-400", text: "Full-day guided tour of Athens' historical sites...", },
              { day: "Day 3: Flight to Santorini & Sunset in Oia", color: "text-orange-400", text: "Morning flight to Santorini, enjoy the sunset over Caldera...", },
              { day: "Day 4: Volcano & Hot Springs Cruise", color: "text-purple-400", text: "Full-day cruise exploring volcanic islands and hot springs...", },
              { day: "Day 5: Ferry to Mykonos & Little Venice", color: "text-orange-400", text: "High-speed ferry to Mykonos, evening at Little Venice...", },
              { day: "Day 6: Archaeological Delos & Beach Leisure", color: "text-purple-400", text: "Morning excursion to UNESCO site Delos, afternoon beach time...", },
              { day: "Day 7: Departure", color: "text-orange-400", text: "Final breakfast and transfer to Mykonos Airport (JMK).", },
            ]
            // Map function with correct JSX return
            .map((item, index) => (
              <div key={index} className="pb-10 mb-4 border-b border-gray-700 last:border-b-0">
                <h3 className={`text-2xl font-bold ${item.color} mb-1`}>{item.day}</h3>
                <p className="text-gray-400">{item.text}</p>
              </div>
            ))}
        </div> {/* closing div for max-w-4xl */}
    </div> {/* closing div for container */}
</section> {/* closing section for ITINERARY */}


      {/* CTA */}
      <section className="py-20 bg-gray-900 border-t border-gray-700 text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-extrabold mb-4 text-white">
            Secure Your Mediterranean Adventure
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            October seats are highly limited. Book your Aegean Odyssey now.
          </p>
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl inline-block">
            <p className="text-3xl font-bold text-white mb-4">
              Starting Price: <span className="text-orange-400">₹70,000</span>
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

export default Greece;