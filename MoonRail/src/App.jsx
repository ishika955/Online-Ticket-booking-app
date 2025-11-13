import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homes from './pages/Homes';
import Greece from './pages/greece';
import Mauritius from './pages/mauritius';
import Scotland from './pages/scotland';
import Booking from './pages/booking';

import './App.css';

function App() {
  return (
    <Router>
      {/* <div className="App bg-gray-100 font-sans min-h-screen flex flex-col"> */}
        {/* your top header area */}
        
        {/* <main className="flex-grow pt-16"> */}
          <Routes>
            <Route path="/" element={<Homes />} />
            <Route path="/greece" element={<Greece />} />
            <Route path="/mauritius" element={<Mauritius />} />
            <Route path="/scotland" element={<Scotland />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        {/* </main> */}

       

    </Router>
  );
}

export default App;
