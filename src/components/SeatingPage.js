import React, { useEffect, useState } from "react";
import Booking from "./Booking";

function Seating() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("bookings") !== null) {
      const existingEntries = JSON.parse(localStorage.getItem("bookings"));
      setBookings(existingEntries);
    }
  }, [setBookings]);

  return bookings.length === 0 ? (
    <p>No bookings yet</p>
  ) : (
    <div>
      {bookings.map((booking, index) => {
        return <Booking key={index} booking={booking} />;
      })}
    </div>
  );
}

export default Seating;
