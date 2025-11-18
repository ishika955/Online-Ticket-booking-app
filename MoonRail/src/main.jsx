import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from './contexts/AuthContext';
// import reportWebVitals from './reportWebVitals';
import "@fortawesome/fontawesome-free"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
