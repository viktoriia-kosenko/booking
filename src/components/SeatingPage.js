import React, { useEffect, useState } from "react";
import Booking from "./Booking";

const Seating = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("bookings") !== null) {
      const existingEntries = JSON.parse(localStorage.getItem("bookings"));
      setBookings(existingEntries);
    }
  }, [setBookings]);
  useEffect(() => {
    console.log("in use ", bookings);
  }, [bookings]);

  return bookings.length === 0 ? (
    <p>No bookings yet</p>
  ) : (
    <div>
      {console.log("in render", bookings)}
      {bookings.map((booking, index) => {
        return (
          <Booking key={index} booking={booking} setBookings={setBookings} />
        );
      })}
    </div>
  );
};

export default Seating;
