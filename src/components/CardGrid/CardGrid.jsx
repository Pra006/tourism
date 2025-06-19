
import './CardGrid.css';
import Card from '../Card/Card';

const CardGrid = () => {
  const packages = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Kathmandu–Pokhara Adventure',
      snippet: 'Himalayan trekking experience',
      price: 599,
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Everest Base Camp Trek',
      snippet: 'Ultimate mountain journey',
      price: 1299,
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1526397751294-331021109fbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Chitwan Jungle Safari',
      snippet: 'Wildlife adventure awaits',
      price: 399,
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Lumbini Spiritual Tour',
      snippet: 'Peaceful Buddhist pilgrimage',
      price: 349,
    },
  ];

  const handleViewDetails = (id) => {
    alert(`Viewing details for package ${id}`);
    // In a real app, you might navigate to a details page
  };

  return (
    <div className="card-grid">
      {packages.map((pkg) => (
        <Card
          key={pkg.id}
          imageUrl={pkg.imageUrl}
          title={pkg.title}
          snippet={pkg.snippet}
          price={pkg.price}
          onViewDetails={() => handleViewDetails(pkg.id)}
        />
      ))}
      <Card />
    </div>
  );
};

export default CardGrid;