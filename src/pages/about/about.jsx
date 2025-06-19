import "./about.css";
// import teamImage from '../../assets/team.jpg';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>Our Story</h1>
        <p>Discover the passion behind NepalTravels</p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Founded in 2010, NepalTravels is a premier tour operator
            specializing in authentic Himalayan experiences. Our team of local
            experts is dedicated to creating unforgettable journeys that
            showcase Nepal's rich culture and breathtaking landscapes.
          </p>

          <h2>Our Mission</h2>
          <p>
            We believe in sustainable tourism that benefits local communities
            while providing our guests with transformative travel experiences.
            Every trip we design supports local economies and preserves Nepal's
            natural beauty.
          </p>

          <div className="mission-stats">
            <div className="mission-stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Local Guides</span>
            </div>
            <div className="mission-stat">
              <span className="stat-number">95%</span>
              <span className="stat-label">Repeat Customers</span>
            </div>
            <div className="mission-stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Community Projects</span>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img src="" alt="Our team in Nepal" />
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {[
            {
              name: "Raj Sharma",
              role: "Founder & Guide",
              bio: "20+ years of trekking experience",
            },
            {
              name: "Mina Gurung",
              role: "Operations Manager",
              bio: "Ensures seamless travel experiences",
            },
            {
              name: "Tenzing Sherpa",
              role: "Head Guide",
              bio: "Everest summiteer 5 times",
            },
            {
              name: "Anjali Rai",
              role: "Customer Care",
              bio: "Your trip planner extraordinaire",
            },
          ].map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-avatar">{member.name.charAt(0)}</div>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
