import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";

function HomePage() {
  return (
    <div className="home-page">
      <div className="main-container">
        <div className="main-content">
          <h1>Vision Glass Company</h1>
          <span>Let us make you're Vision a reality!</span>
          <div>
            <Link to={"/about"}>
              <button className="button-design">Learn More</button>
            </Link>
          </div>
        </div>

        <div className="img-container">
          <img src="/TeamPhoto.jpg" alt="main image" />
        </div>
      </div>
      <Testimonials />
    </div>
  );
}

export default HomePage;
