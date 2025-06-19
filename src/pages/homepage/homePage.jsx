import FeaturedPackage from '../../components/Featured/FeaturedPackage';
import Hero from '../../components/Hero/Hero';
import './homePage.css';

const Home = () => {
    return (
        <div className="home-container">
            <Hero/>
            <FeaturedPackage/>
        </div>
    );
};

export default Home;