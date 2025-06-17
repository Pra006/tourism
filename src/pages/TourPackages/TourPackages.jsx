import './TourPackages.css';
import phewaImage from '../../assets/Phewa.jpg';
import { useEffect, useState } from 'react';

const TourPackages = () => {
    const [packageData, setPackageData] = useState();

    useEffect(() => {
        const data = {
        title: "Kathmandu-Pokhara 5 Days Trip",
        description: "Experience the best of Kathmandu and Pokhara with our carefully curated tour package.",
        packageDetails: {
            stay : "🕒 3 Days / 2 Nights" ,
            location : "📍 Kathmandu, Pokhara",
            rating : "⭐ 4.8 (150 reviews)",
            hotel : "🏨 5-Star Hotels",
            transportation : "🚌 Private Transportation"
        },
        price: 13000
    }
        setPackageData(data);
        
    }, []);
    // console.log("Package Data:", packageData);
    return (
        <section className="tour-packages">
            <div className="container">
                <header className="section-header">
                    <h1>Tour Packages</h1>
                    <p className="section-description">Discover our exciting tour packages for your next adventure.</p>
                </header>

                <div className="packages-grid">
                    {/* 📌 Kathmandu-Pokhara Tour Package Card */}
                    <div className="package-card">
                        <div className="package-image-container">
                            <img
                                src={phewaImage}
                                alt="Phewa Lake, Pokhara"
                                className="package-image"
                            />
                        </div>
                        {packageData && 
                            <div className="package-content">
                                <div>
                                    
                                    <h2>{packageData.title}</h2>
                                    <p>{packageData.description}</p>

                                    <ul className="package-details">
                                        <li>{packageData.packageDetails.stay}</li>
                                        <li>{packageData.packageDetails.location}</li>
                                        <li>{packageData.packageDetails.rating}</li>
                                        <li>{packageData.packageDetails.hotel}</li>
                                        <li>{packageData.packageDetails.transportation}</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="price">रु. {packageData.price} per person</p>
                                    <button className="book-btn">Book Now</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TourPackages;
