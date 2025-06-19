import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isAuthenticated, handleLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="logo-icon">✈️</span>
          <span className="logo-text">NepalTravels</span>
        </Link>

        <div className="navbar-menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tour-packages" className="nav-link">
                Tours
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>

          <div className="navbar-actions">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="nav-button dashboard">
                  <span className="button-icon">👤</span>
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="nav-button logout">
                  <span className="button-icon">🚪</span>
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="nav-button login">
                <span className="button-icon">🔑</span>
                Login
              </Link>
            )}
          </div>
        </div>

        <button className="navbar-toggle">
          <span className="toggle-icon">☰</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
