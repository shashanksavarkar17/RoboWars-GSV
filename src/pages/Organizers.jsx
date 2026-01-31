import React, { useState } from "react";

import "./Organizers.css";
import { organizersData } from "../seed";
import AnimatedPage from "../components/AnimatedPage";

const Organizers = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleToggle = (id) => {
    setActiveCard(activeCard === id ? null : id);
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
