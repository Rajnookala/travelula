import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Maasai Mara</h1>
        <p>Experience the wild like never before! 🌿🦁</p>
      </header>
      <div className="info">
        <p>
          Join us on an unforgettable journey to Maasai Mara, Kenya. Witness the
          beauty of African wildlife and breathtaking landscapes.
        </p>
      </div>
      <div className="cta-buttons">
        <Link to="/itinerary" className="explore-btn">
          View Itinerary
        </Link>
        <Link to="/custom-plan" className="custom-plan-btn">
          Personalized Safari Plan 🦁
        </Link>
      </div>
    </div>
  );
};

export default Home;
