import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-logo">NepalTravels</h3>
          <p className="footer-about">
            Creating unforgettable travel experiences in the Himalayas since
            2010.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Twitter">
              🐦
            </a>
            <a href="#" aria-label="Facebook">
              👍
            </a>
            <a href="#" aria-label="Instagram">
              📷
            </a>
            <a href="#" aria-label="YouTube">
              ▶️
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Tour Packages</a>
            </li>
            <li>
              <a href="#">Special Offers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul className="footer-links">
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Booking Guide</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Newsletter</h4>
          <p>Subscribe for travel tips and exclusive offers</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} NepalTravels. All rights reserved.
        </p>
        <div className="payment-methods">
          <span>💳</span>
          <span>📱</span>
          <span>🏦</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
