import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Navbar.css";
import Logo from "../assets/RED_LOGO.png";

const Navbar = () => {
  const navRef = useRef(null);
  const location = useLocation();


  const [isOpen, setIsOpen] = React.useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="navbar-wrapper" ref={navRef}>
      <div className="navbar-container">
        <Link to="/" className="logo-section clickable">
          <img src={Logo} alt="Robowars Logo" className="navbar-icon" />
          <div className="logo">ROBOWARS</div>
        </Link>

        {/* Desktop Nav */}
        <ul className="nav-links desktop-nav">
          {[
            { name: "Home", path: "/" },
            { name: "Rules", path: "/rules" },
            { name: "Timeline", path: "/timeline" },
            { name: "Organizers", path: "/organizers" },
            { name: "Media", path: "/media" },
          ].map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? "active-link" : ""}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="active-dot"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <div className="desktop-nav-btn">
            <Link className="contact-btn clickable" to="/register">
              JOIN THE WAR
            </Link>
          </div>

          {/* Hamburger Toggle */}
          <button
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul className="mobile-nav-links">
          {[
            { name: "Home", path: "/" },
            { name: "Rules", path: "/rules" },
            { name: "Timeline", path: "/timeline" },
            { name: "Organizers", path: "/organizers" },
            { name: "Media", path: "/media" },
          ].map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? "active-link" : ""}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link className="contact-btn mobile-btn clickable" to="/register" onClick={() => setIsOpen(false)}>
              JOIN THE WAR
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
