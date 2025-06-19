import Hero from "../../components/Hero/Hero";
import FeaturedPackage from "../../components/Featured/FeaturedPackage";
import "./homePage.css";

const Home = () => {
  return (
    <div className="homepage">
      <Hero />

      <section className="stats-section">
        <div className="stat-item">
          <span className="stat-number">500+</span>
          <span className="stat-label">Happy Travelers</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">50+</span>
          <span className="stat-label">Tour Packages</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">10+</span>
          <span className="stat-label">Years Experience</span>
        </div>
      </section>

      <FeaturedPackage />

      <section className="cta-section">
        <h2>Ready for Your Next Adventure?</h2>
        <p>Contact us to plan your perfect Himalayan journey</p>
        <button className="cta-button">Get in Touch</button>
      </section>
    </div>
  );
};

export default Home;
