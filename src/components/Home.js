import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => (
  <div className="landing">
    <Link to="/booking" className="landing-btn">
      Create a new Booking
    </Link>

    <Link to="/seating" className="landing-btn">
      Change booking status
    </Link>
  </div>
);

export default LandingPage;
