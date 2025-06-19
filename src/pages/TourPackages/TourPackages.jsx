import "./TourPackages.css";
import phewaImage from "../../assets/Phewa.jpg";

const TourPackages = () => {
  const packageData = {
    title: "Kathmandu-Pokhara 5 Days Trip",
    description:
      "Experience the best of Kathmandu and Pokhara with our carefully curated tour package that combines cultural heritage with natural beauty.",
    highlights: [
      "Visit UNESCO World Heritage Sites in Kathmandu",
      "Boat ride on Phewa Lake with mountain views",
      "Sunrise view from Sarangkot",
      "Explore local markets and cuisine",
    ],
    packageDetails: {
      duration: "5 Days / 4 Nights",
      locations: "Kathmandu, Pokhara",
      rating: "4.8 (150 reviews)",
      accommodation: "4-Star Hotels",
      transportation: "Private AC Vehicle",
    },
    price: 13000,
  };

  return (
    <section className="tour-packages-page">
      <div className="package-header">
        <h1>Our Tour Packages</h1>
        <p>Carefully crafted experiences for every traveler</p>
      </div>

      <div className="package-container">
        <div className="package-gallery">
          <div
            className="main-image"
            style={{ backgroundImage: `url(${phewaImage})` }}
          ></div>
          <div className="thumbnail-grid">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="thumbnail"
                style={{ backgroundImage: `url(${phewaImage})` }}
              ></div>
            ))}
          </div>
        </div>

        <div className="package-details">
          <div className="package-header">
            <h2>{packageData.title}</h2>
            <div className="package-meta">
              <span className="rating">
                ⭐ {packageData.packageDetails.rating}
              </span>
              <span className="duration">
                🕒 {packageData.packageDetails.duration}
              </span>
            </div>
          </div>

          <div className="package-highlights">
            <h3>Experience Highlights</h3>
            <ul>
              {packageData.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="package-info-grid">
            <div className="info-item">
              <span className="info-icon">🏨</span>
              <div>
                <h4>Accommodation</h4>
                <p>{packageData.packageDetails.accommodation}</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🚌</span>
              <div>
                <h4>Transportation</h4>
                <p>{packageData.packageDetails.transportation}</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🍽️</span>
              <div>
                <h4>Meals</h4>
                <p>Breakfast included</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">👨‍👩‍👧‍👦</span>
              <div>
                <h4>Group Size</h4>
                <p>Max 12 people</p>
              </div>
            </div>
          </div>

          <div className="package-price-section">
            <div className="price-box">
              <span className="from">From</span>
              <span className="price">रु. {packageData.price}</span>
              <span className="per-person">per person</span>
            </div>
            <button className="book-now-button">Book Now</button>
            <button className="inquiry-button">Make an Inquiry</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
