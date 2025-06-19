import "./contact.css";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-header">
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you! Reach out for bookings or inquiries.</p>
      </section>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>

          <div className="info-item">
            <span className="info-icon">📍</span>
            <div>
              <h3>Our Office</h3>
              <p>Thamel, Kathmandu, Nepal</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">📞</span>
            <div>
              <h3>Phone</h3>
              <p>+977 1-1234567</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">✉️</span>
            <div>
              <h3>Email</h3>
              <p>info@nepaltravels.com</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">🕒</span>
            <div>
              <h3>Hours</h3>
              <p>Sunday-Friday: 9AM - 6PM</p>
              <p>Closed on Saturdays</p>
            </div>
          </div>

          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                👍
              </a>
              <a href="#" aria-label="Instagram">
                📷
              </a>
              <a href="#" aria-label="Twitter">
                🐦
              </a>
              <a href="#" aria-label="YouTube">
                ▶️
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="map-container">
        <h2>Find Us On Map</h2>
        <div className="map-placeholder">
          [Interactive Map Would Appear Here]
        </div>
      </div>
    </div>
  );
};

export default Contact;
