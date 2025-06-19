import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/homepage/homePage";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import TourPackages from "./pages/TourPackages/TourPackages";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import PrivateRoute from "./helper/privateRoute";
import "./App.css";

const App = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userData");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <div className="app">
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tour-packages" element={<TourPackages />} />
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/signup"
            element={<Signup setIsAuthenticated={setIsAuthenticated} />}
          />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
