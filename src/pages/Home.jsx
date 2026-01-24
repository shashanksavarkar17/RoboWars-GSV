import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css";
import { homeData } from "../seed";
import HomeImg from "../assets/Home_Page.png";

import ParticleBackground from "../components/ParticleBackground";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const highlightsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Hero Text Stagger Animation
    tl.fromTo(
      ".hero-subtitle",
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        ".hero-title-char",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power4.out",
        },
        "-=0.5"
      )
      .fromTo(
        ".hero-description",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        ".cta-btn",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.2 },
        "-=0.3"
      );

    // Parallax Background
    gsap.to(".hero-bg", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Highlights Reveal
    gsap.fromTo(
      ".highlight-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".highlights",
          start: "top 80%",
        },
      }
    );
  }, []);

  // Helper to split text for animation
  const splitText = (text) => {
    return text.split(" ").map((word, wordIndex) => (
      <span key={wordIndex} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
        {word.split("").map((char, charIndex) => (
          <span
            key={charIndex}
            className="hero-title-char"
            style={{ display: "inline-block" }}
          >
            {char}
          </span>
        ))}
        {/* Add space between words */}
        &nbsp;
      </span>
    ));
  };

  return (
    <div className="home-wrapper">
      <section className="hero" ref={heroRef}>
        <ParticleBackground />
        <div className="hero-overlay"></div>
        <img src={HomeImg} alt="RoboWars Hero" className="hero-bg" />

        <div className="hero-content">
          <span className="hero-subtitle">The Ultimate Metal Mayhem</span>
          <h1 className="hero-title" ref={titleRef}>
            {splitText("UNLEASH THE BEAST")}
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
              Watch Trailer
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
