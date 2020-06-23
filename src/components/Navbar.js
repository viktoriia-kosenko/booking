import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/booking">Booking Page</Link>
      <Link to="/seating">Seating Page</Link>
    </div>
  );
}

export default Navbar;
