import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Left */}
        <p className="footer-copy">
          © 2026 RoboWars EPITOME'26. All Rights Reserved.
        </p>

        {/* Center Logo */}
        <div className="footer-logo">
          <img src="../assets/Footer.png" alt="RoboWars EPITOME 26" />
        </div>

        {/* Right */}
        <div className="footer-right">
          <div className="footer-social">
            <a
              href="https://www.yourcollege.edu"
              target="_blank"
              rel="noreferrer"
              className="icon clg"
              aria-label="College Website"
            />

            <a
              href="https://instagram.com/robonity"
              target="_blank"
              rel="noreferrer"
              className="icon ig-red"
              aria-label="Instagram Robowars"
            />

            <a
              href="https://instagram.com/technocratsgsv"
              target="_blank"
              rel="noreferrer"
              className="icon ig-tc"
              aria-label="Instagram Technocrats"
            />

            <a
              href="https://linkedin.com/company/technocrats-gsv"
              target="_blank"
              rel="noreferrer"
              className="icon linkedin"
              aria-label="LinkedIn"
            />
          </div>

          <a href="/terms" className="footer-terms">
            Terms & Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
