import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <Link to="/booking">Booking</Link>
      <br />
      <Link to="/seating">Seating</Link>
    </div>
  );
}

export default LandingPage;
