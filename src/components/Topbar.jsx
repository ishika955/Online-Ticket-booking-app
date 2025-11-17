import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const TopBar = () => {
    const { user, logout } = useAuth();

    return (
        <div className="top-bar">
            <span>+91 - 8685986823</span>
            <div className="social-icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin"></i>
            </div>
            <div className="auth-links">
                {user ? (
                    <div className="profile-container" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                        <span style={{color: '#fff'}}>{user.username}</span>
                        <button 
                            onClick={logout} 
                            style={{background: 'none', color: '#ff7171', border: 'none', cursor: 'pointer'}}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <a href="/login">Login</a>
                )}
            </div>
        </div>
    );
};

export default TopBar;