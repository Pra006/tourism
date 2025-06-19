import React from "react";
import SearchBar from "../Search/Search";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Discover Nepal's Majestic Beauty</h1>
          <p className="hero-subtitle">
            Unforgettable journeys through the Himalayas
          </p>

          <div className="hero-cta-group">
            <button className="hero-cta primary">Explore Packages</button>
            <button className="hero-cta secondary">Watch Video</button>
          </div>
        </div>

        <div className="hero-search-container">
          <SearchBar />
        </div>
      </div>

      <div className="hero-features">
        <div className="feature-item">
          <span className="feature-icon">🏔️</span>
          <span>100+ Mountain Tours</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon">⭐</span>
          <span>5-Star Rated Guides</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon">💰</span>
          <span>Best Price Guarantee</span>
        </div>
      </div>
    </section>
  );
}
