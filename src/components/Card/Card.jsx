import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ imageUrl, title, snippet, price, onViewDetails }) => {
  const currencySymbol = "रु.";
  return (
    <div className="tour-card" onClick={onViewDetails}>
      <div className="card-image-container">
        <img src={imageUrl} alt={title} className="card-image" />
        <div className="card-badge">Popular</div>
      </div>

      <div className="card-content">
        <div className="card-rating">
          <span className="stars">⭐⭐⭐⭐⭐</span>
          <span className="review-count">(128 reviews)</span>
        </div>

        <h3 className="card-title">{title}</h3>
        <p className="card-snippet">{snippet}</p>

        <div className="card-footer">
          <div className="price-container">
            <span className="from">From</span>
            <span className="price">{currencySymbol}{price}</span>
            <span className="per-person">per person</span>
          </div>

          <button className="card-button" onClick={onViewDetails}>
            View Details
            <span className="button-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  snippet: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

export default Card;
