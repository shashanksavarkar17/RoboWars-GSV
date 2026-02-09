import React, { useState } from "react";

import "./Media.css";
import { mediaData } from "../seed";

const Media = () => {
  const [filter, setFilter] = useState("All");
  const [selectedMedia, setSelectedMedia] = useState(null);

  const categories = ["All", "Video", "Image", "Trailer", "Teaser", "Poster"];

  const filteredMedia =
    filter === "All"
      ? mediaData
      : mediaData.filter((item) => item.type === filter);

  return (
    <>
      <div className="media-container">
        <h1 className="media-title">Media Gallery</h1>

        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="media-grid">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              className="media-card"
              onClick={() => setSelectedMedia(item)}
            >
              <div className="media-overlay">
                <div className="play-icon">
                  {item.type !== "Image" && item.type !== "Poster" ? "▶" : "+"}
                </div>
                <span>{item.type}</span>
                <h3>{item.title}</h3>
              </div>
              <img
                src={item.thumb}
                alt={item.title}
                className="media-content"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Media;
