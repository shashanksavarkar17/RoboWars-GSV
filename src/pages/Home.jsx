import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import { homeData } from "../seed";
import HomeImg from "../assets/Home_Page.png";





const Home = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const highlightsRef = useRef(null);





  return (
    <div className="home-wrapper">
      <section className="hero" ref={heroRef}>

        <div className="hero-overlay"></div>
        <img src={HomeImg} alt="RoboWars Hero" className="hero-bg" />

        <div className="hero-content">
          <span className="hero-subtitle">The Ultimate Metal Mayhem</span>
          <h1 className="hero-title" ref={titleRef}>
            UNLEASH THE BEAST
          </h1>
          <p className="hero-description">
            Gati Shakti Vishwavidyalaya's fiercest combat robotics tournament is
            back. Witness the clash of titanium and electricity.
          </p>
          <div className="hero-btns">
            <Link to="/register" className="cta-primary cta-btn clickable">
              Enter the Arena
            </Link>
            <Link to="/media" className="cta-secondary cta-btn clickable">
              Watch Teaser
            </Link>
          </div>
        </div>
      </section>

      {/* Cyberpunk Marquee */}
      <div className="news-ticker-container">
        <div className="news-ticker">
          <div className="ticker-track">
            {/* Doubled for seamless loop */}
            {[...homeData.ticker, ...homeData.ticker].map((item, index) => (
              <div key={index} className="ticker-item">
                <span className="ticker-bullet">❖</span> {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="highlights" ref={highlightsRef}>
        {homeData.highlights.map((item, index) => (
          <div key={index} className="highlight-card">
            <div className="card-glitch-effect"></div>
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
