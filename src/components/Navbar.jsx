import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import "./Navbar.css";
import Logo from "../assets/RED_LOGO.png";

const Navbar = () => {
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Initial Animation: Slide down from top
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.2 }
    );
  }, []);

  return (
    <nav className="navbar-wrapper" ref={navRef}>
      <div className="navbar-container">
        <Link to="/" className="logo-section clickable">
          <img src={Logo} alt="Robowars Logo" className="navbar-icon" />
          <div className="logo">ROBOWARS</div>
        </Link>

        <ul className="nav-links">
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
          <Link className="contact-btn clickable" to="/register">
            JOIN THE WAR
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
