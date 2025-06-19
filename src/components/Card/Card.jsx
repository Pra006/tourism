import PropTypes from 'prop-types';
import './Card.css'; // We'll create this next

const Card = ({ imageUrl, title, snippet, price, onViewDetails }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-snippet">{snippet}</p>
        <div className="card-footer">
          <span className="card-price">${price}</span>
          <button className="card-button" onClick={onViewDetails}>
            View Details
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