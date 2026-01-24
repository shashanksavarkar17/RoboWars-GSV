import React, { useState } from "react";

import "./Media.css";
import { mediaData } from "../seed";



const Media = () => {
  const [filter, setFilter] = useState("All");
  const [selectedMedia, setSelectedMedia] = useState(null);

  const categories = ["All", "Video", "Image", "Trailer", "Teaser", "Poster"];

  const filteredMedia = filter === "All"
    ? mediaData
    : mediaData.filter(item => item.type === filter);

  return (
    <>

      <div className="media-container">
        <h1 className="media-title">Media Gallery</h1>

        <div className="filter-bar">
          {categories.map(cat => (
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
          {filteredMedia.map(item => (
            <div key={item.id} className="media-card" onClick={() => setSelectedMedia(item)}>
              <div className="media-overlay">
                <div className="play-icon">
                  {item.type !== "Image" && item.type !== "Poster" ? "▶" : "+"}
                </div>
                <span>{item.type}</span>
                <h3>{item.title}</h3>
              </div>
              <img src={item.thumb} alt={item.title} className="media-content" />
            </div>
          ))}
        </div>

        {/* Maximize Modal */}
        {selectedMedia && (
          <div className="modal-overlay" onClick={() => setSelectedMedia(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setSelectedMedia(null)}>&times;</button>

              <div className="modal-body">
                {selectedMedia.type === "Image" || selectedMedia.type === "Poster" ? (
                  <img src={selectedMedia.url} alt="Large View" />
                ) : (
                  <div className="video-wrapper">
                    <iframe
                      src={selectedMedia.url + "?autoplay=1"}
                      title="Video Player"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                <div className="modal-info">
                  <h2>{selectedMedia.title}</h2>
                  <p>{selectedMedia.type}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </>
  );
};

export default Media;
