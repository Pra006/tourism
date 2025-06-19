import "./Dashboard.css";

const Dashboard = () => {
  // Mock user data
  const userData = {
    name: "John Doe",
    email: "john@example.com",
    joinDate: "January 15, 2023",
    bookings: 3,
    favorites: 5,
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome back, {userData.name}!</h1>
        <p className="welcome-message">
          Here's what's happening with your account today
        </p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div className="stat-content">
            <h3>Member Since</h3>
            <p>{userData.joinDate}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✈️</div>
          <div className="stat-content">
            <h3>Upcoming Trips</h3>
            <p>{userData.bookings} bookings</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">❤️</div>
          <div className="stat-content">
            <h3>Favorites</h3>
            <p>{userData.favorites} saved</p>
          </div>
        </div>
      </div>

      <div className="dashboard-sections">
        <section className="dashboard-section">
          <h2>Your Recent Bookings</h2>
          <div className="booking-card">
            <div
              className="booking-image"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1580327344181-c1163234e5a0)",
              }}
            ></div>
            <div className="booking-details">
              <h3>Kathmandu–Pokhara Adventure</h3>
              <p className="booking-date">March 15-20, 2023</p>
              <p className="booking-status">Confirmed</p>
            </div>
            <button className="booking-action">View Details</button>
          </div>
        </section>

        <section className="dashboard-section">
          <h2>Account Settings</h2>
          <div className="settings-card">
            <div className="setting-item">
              <span className="setting-icon">👤</span>
              <div>
                <h3>Profile Information</h3>
                <p>Update your personal details</p>
              </div>
              <button className="setting-action">Edit</button>
            </div>

            <div className="setting-item">
              <span className="setting-icon">🔒</span>
              <div>
                <h3>Password</h3>
                <p>Change your password</p>
              </div>
              <button className="setting-action">Change</button>
            </div>

            <div className="setting-item">
              <span className="setting-icon">💳</span>
              <div>
                <h3>Payment Methods</h3>
                <p>Add or remove payment options</p>
              </div>
              <button className="setting-action">Manage</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
