// src/App.jsx

import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import Homes from './pages/Homes'; 
import './App.css'; 

function App() {
  return (
    // FIX: Wrap the entire application content that uses <Link> with BrowserRouter
    <BrowserRouter> 
      <div className="App">
        <Homes />
      </div>
    </BrowserRouter>
  );
}

export default App;