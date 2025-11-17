import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Homes from './pages/Homes'
import Offers from './pages/Offers'
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Homes />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/offers" element={<Offers />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;