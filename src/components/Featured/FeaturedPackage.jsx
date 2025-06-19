import React from "react";
import "./FeaturedPackage.css";
import CardGrid from "../CardGrid/CardGrid";

const FeaturedPackage = () => {
  return (
    <section className="featured-section">
      <div className="section-header">
        <h2>Featured Adventures</h2>
        <p className="section-subtitle">
          Our handpicked selection of unforgettable journeys
        </p>
        <div className="category-tabs">
          <button className="tab active">All Tours</button>
          <button className="tab">Trekking</button>
          <button className="tab">Cultural</button>
          <button className="tab">Adventure</button>
          <button className="tab">Luxury</button>
        </div>
      </div>

      <CardGrid />

      <div className="featured-cta">
        <p>Can't find what you're looking for?</p>
        <button className="cta-button">Customize Your Trip</button>
      </div>
    </section>
  );
};

export default FeaturedPackage;
