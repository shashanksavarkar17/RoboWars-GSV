import React, { useState } from "react";
import gsap from "gsap";
import "./Organizers.css";
import { organizersData } from "../seed";
import AnimatedPage from "../components/AnimatedPage";

const Organizers = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleToggle = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <AnimatedPage>
      <div className="organizers-wrapper">
        <h1 className="organizers-title">
          Command <span>Crew</span>
        </h1>

        <div className="organizers-grid">
          {organizersData.map((person) => {
            const isExpanded = activeCard === person.id;

            return (
              <div
                key={person.id}
                className={`organizer-card ${isExpanded ? "expanded" : ""}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="card-holo-overlay"></div>
                <div className="image-container">
                  <img src={person.image} alt={person.name} />
                  <div className="img-scanner-line"></div>
                </div>

                <h3>{person.name}</h3>
                <p className="role-text">{person.role}</p>
                <h1 className="work-styling">{person.work}</h1>

                {/* CONTACT DETAILS (EXPAND AREA) */}
                {isExpanded && (
                  <div className="contact-details">
                    <p>
                      <strong>Comms:</strong> <a href={`tel:${person.phone}`} className="clickable">+91 - {person.phone}</a>
                    </p>
                    <p>
                      <strong>Uplink:</strong> <a href={`mailto:${person.email}`} className="clickable">{person.email}</a>
                    </p>
                  </div>
                )}

                <div
                  className="social-pill clickable"
                  onClick={() => handleToggle(person.id)}
                >
                  {isExpanded ? "CLOSE" : "CONTACT"}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Organizers;
