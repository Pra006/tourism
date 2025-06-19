import { useNavigate } from "react-router-dom";
import "./TourPackages.css";
import Card from "../../components/Card/Card";

const TourPackages = () => {
  const navigate = useNavigate();

  const packages = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1580327344181-c1163234e5a0",
      title: "Kathmandu–Pokhara Adventure",
      snippet: "Himalayan trekking experience with luxury stays",
      price: 599,
      duration: "5 Days",
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
      title: "Everest Base Camp Trek",
      snippet: "Ultimate mountain journey to the roof of the world",
      price: 1299,
      duration: "14 Days",
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1526397751294-331021109fbd",
      title: "Chitwan Jungle Safari",
      snippet: "Wildlife adventure with rhino spotting",
      price: 399,
      duration: "3 Days",
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
      title: "Lumbini Spiritual Tour",
      snippet: "Peaceful Buddhist pilgrimage experience",
      price: 349,
      duration: "2 Days",
    },
  ];

  const handleCardClick = (id) => {
    navigate(`/package/${id}`);
  };

  return (
    <section className="tour-packages-page">
      <div className="package-header">
        <h1>Our Tour Packages</h1>
        <p>Carefully crafted experiences for every traveler</p>
      </div>

      <div className="card-grid">
        {packages.map((pkg) => (
          <Card
            key={pkg.id}
            imageUrl={pkg.imageUrl}
            title={pkg.title}
            snippet={pkg.snippet}
            price={pkg.price}
            onViewDetails={() => handleCardClick(pkg.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default TourPackages;
