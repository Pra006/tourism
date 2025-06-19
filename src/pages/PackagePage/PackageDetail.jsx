import { useParams } from "react-router-dom";
import "./PackageDetail.css";

const PackageDetail = () => {
  const { id } = useParams();
  const currencySymbol = "रु.";

  const packages = {
    1: {
      title: "Kathmandu–Pokhara Adventure",
      description: "Himalayan trekking experience with luxury stays",
      price: 599,
      duration: "5 Days",
      highlights: [
        "Visit UNESCO World Heritage Sites",
        "Boat ride on Phewa Lake",
        "Sunrise view from Sarangkot",
      ],
      itinerary: [
        "Day 1: Arrival in Kathmandu",
        "Day 2: Fly to Pokhara",
        "Day 3: Trekking adventure",
        "Day 4: Cultural exploration",
        "Day 5: Return to Kathmandu",
      ],
      image: "https://images.unsplash.com/photo-1580327344181-c1163234e5a0",
    },
    2: {
      title: "Everest Base Camp Trek",
      description: "Ultimate mountain journey to the roof of the world",
      price: 1299,
      duration: "14 Days",
      highlights: [
        "Trek to Everest Base Camp",
        "Visit Namche Bazaar",
        "See Khumbu Icefall",
      ],
      itinerary: [
        "Day 1-3: Flight to Lukla and trek to Namche",
        "Day 4-7: Acclimatization and trek to Dingboche",
        "Day 8-11: Trek to Gorak Shep and Everest Base Camp",
        "Day 12-14: Return trek to Lukla",
      ],
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
    },
    3: {
      title: "Chitwan Jungle Safari",
      description: "Wildlife adventure with rhino spotting",
      price: 399,
      duration: "3 Days",
      highlights: ["Jungle safari", "Elephant ride", "Bird watching"],
      itinerary: [
        "Day 1: Arrival and afternoon safari",
        "Day 2: Full day jungle activities",
        "Day 3: Morning walk and departure",
      ],
      image: "https://images.unsplash.com/photo-1526397751294-331021109fbd",
    },
    4: {
      title: "Lumbini Spiritual Tour",
      description: "Peaceful Buddhist pilgrimage experience",
      price: 349,
      duration: "2 Days",
      highlights: [
        "Visit Maya Devi Temple",
        "See Buddhist monasteries",
        "Meditation sessions",
      ],
      itinerary: [
        "Day 1: Arrival and temple visits",
        "Day 2: Monastery tour and departure",
      ],
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
    },
  };

  const pkg = packages[id];

  if (!pkg) return <div>Package not found</div>;

  return (
    <div className="package-detail">
      <div className="package-header">
        <h1>{pkg.title}</h1>
        <p className="price">
          From {currencySymbol}
          {pkg.price} per person
        </p>
      </div>

      <div className="package-content">
        <div className="package-image">
          <img src={pkg.image} alt={pkg.title} />
        </div>

        <div className="package-info">
          <h2>Overview</h2>
          <p>{pkg.description}</p>

          <h2>Duration</h2>
          <p>{pkg.duration}</p>

          <h2>Highlights</h2>
          <ul>
            {pkg.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>

          <h2>Itinerary</h2>
          <ol>
            {pkg.itinerary.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>

          <button className="book-now">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
