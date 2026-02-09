import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer glass-footer">
      <div className="footer-inner">
        <p className="footer-copy">
          © 2026 TechnoCrats GSV | RED | EPITOME'26. All Rights Reserved.
        </p>

        <div className="footer-logo">
          {/* <img src="./assets/RED_LOGO.png" alt="RoboWars EPITOME 26" /> */}
          <p>RoboWars EPITOME'26</p>
        </div>

        <div className="footer-bottom">
          <div className="footer-social">
            <a
              href="https://gsv.ac.in/"
              target="_blank"
              rel="noreferrer"
              className="icon clg"
              aria-label="GSV"
            />
            <a
              href="https://www.instagram.com/robotics.gsv/"
              target="_blank"
              rel="noreferrer"
              className="icon ig-red"
              aria-label="RED Instagram"
            />
            <a
              href="https://instagram.com/technocrats.gsv"
              target="_blank"
              rel="noreferrer"
              className="icon ig-tc"
              aria-label="TC Instagram"
            />
            <a
              href="https://www.linkedin.com/in/technocrats-gsv-4a7abb269/"
              target="_blank"
              rel="noreferrer"
              className="icon linkedin"
              aria-label="TC LinkedIn"
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
