import React from 'react';
import './Hero.css';
import SearchBar from '../Search/Search';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1 className="hero-title">Explore Nepal’s Hidden Gems</h1>
        <p className="hero-subtitle">Hand-crafted tours, unbeatable prices.</p>
        <button className="hero-cta">Browse Packages</button>
        <SearchBar />
      </div>
    </section>
  );
}