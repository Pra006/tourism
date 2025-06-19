import { Navigate } from "react-router-dom";
import "./privateRoute.css";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  if (!isAuthenticated) {
    return (
      <div className="private-route-container">
        <div className="private-route-message">
          <h2>Access Restricted</h2>
          <p>
            You need to be logged in to view this page. Please sign in to
            continue.
          </p>
          <a href="/login" className="login-link">
            <span className="button-icon">🔑</span>
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  return children;
};

export default PrivateRoute;
