// src/contexts/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (loggedInUser) {
            setUser(loggedInUser);
        }
        setLoading(false);
    }, []);

    const signUp = (username, email, password, confirmPassword) => {
        if (!username || !password || !email) {
            alert("Oops! Please fill all the fields!");
            return false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter valid email address.");
            return false;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match! Please re-enter");
            return false;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExist = users.some((user) => user.email === email.toLowerCase());

        if (userExist) {
            alert("Email already Exists. Please login!");
            return false;
        }

        users.push({ username, email: email.toLowerCase(), password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Signup successful!");
        return true;
    };

    const login = (email, password) => {
        if (!email || !password) {
            alert("Please fill in all the fields!");
            return false;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find((u) => u.email === email.toLowerCase());
        
        if (!user) {
            alert("User not found! Please sign up.");
            return false;
        }

        if (user.password !== password) {
            alert("Incorrect password! Try again.");
            return false;
        }

        localStorage.setItem("loggedInUser", JSON.stringify(user));
        setUser(user);
        return true;
    };

    const logout = () => {
        localStorage.removeItem("loggedInUser");
        setUser(null);
        window.location.reload();
    };

    const value = {
        user,
        signUp,
        login,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};