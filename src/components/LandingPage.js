import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <Link to="/booking">Create a new Booking</Link>
      <br />
      <Link to="/seating">Change booking status</Link>
    </div>
  );
}

export default LandingPage;
