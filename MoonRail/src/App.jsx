import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homes from './pages/Homes';
import Greece from './pages/greece';
import Mauritius from './pages/mauritius'; // Import Mauritius
import Scotland from './pages/scotland'; // Import Scotland
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default Home Page */}
          <Route path="/" element={<Homes />} />
          
          {/* Destination Pages */}
          <Route path="/greece" element={<Greece />} />
          <Route path="/mauritius" element={<Mauritius />} />
          <Route path="/scotland" element={<Scotland />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;