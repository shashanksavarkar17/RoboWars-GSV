import React, { useEffect, useRef } from "react";

import "./Timeline.css";
import { timelineData } from "../seed";
import AnimatedPage from "../components/AnimatedPage";



const Timeline = () => {
  const lineRef = useRef(null);



  return (
    <AnimatedPage>
      <div className="timeline-page">
        <div className="timeline-header">
          <span className="subtitle">Tournament Roadmap</span>
          <h1>
            BATTLE <span>TIMELINE</span>
          </h1>
          <p className="description">The path to glory is paved with metal and sparks.</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-track-bg"></div>
          <div ref={lineRef} className="timeline-track-fill"></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${item.status}`}
            >
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot"></div>
                <div className="timeline-dot-pulse"></div>
              </div>

              <div className="timeline-content clickable">
                <div className="content-glow"></div>
                <span className="event-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="status-badge">{item.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Timeline;
