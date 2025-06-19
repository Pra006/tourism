import React, { useState } from "react";
import "./Search.css";

export default function SearchBar() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState(1);

  return (
    <div className="search-container">
      <h3 className="search-title">Find Your Perfect Adventure</h3>
      <form className="search-form">
        <div className="search-input-group">
          <span className="search-icon">📍</span>
          <input
            type="text"
            placeholder="Where to?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        <div className="search-input-group">
          <span className="search-icon">📅</span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="search-input-group">
          <span className="search-icon">👥</span>
          <select
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? "Person" : "People"}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="search-button">
          <span className="button-icon">🔍</span>
          Search Tours
        </button>
      </form>
    </div>
  );
}
