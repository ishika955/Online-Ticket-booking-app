import React from "react";
import "../styles/Parallax4.css";

// 1. IMPORT THE IMAGE ASSET
import yessImg from "../assets/yess.jpg"; 

const Parallax4 = () => {
  return (
    <section className="parallax4">
      <div className="parallax-content">
        <section className="contact-section">
          {/* Left Side (Image Only) */}
          <div className="contact-left">
            <img
              src={yessImg} // 2. Use the imported variable here
              alt="Contact"
              height="700px"
              width="650px"
            />
          </div>

          {/* Right Side (Form) */}
          <div className="contact-right">
            <h2 style={{ textAlign: "center" }}>GET IN TOUCH</h2>
            <form>
              <div className="form-row">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="E-mail" required />
              </div>
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Message" required></textarea>
              <button type="submit">SEND MESSAGE ...</button>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Parallax4;