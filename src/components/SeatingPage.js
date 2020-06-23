import React, { useEffect, useState } from "react";
import Booking from "./Booking";
import { getLocalStorageData, parseLocalStorageData } from "../helpers";

const Seating = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (getLocalStorageData("bookings")) {
      const existingBookings = parseLocalStorageData("bookings");
      setBookings(existingBookings);
    }
  }, [setBookings]);

  return bookings.length === 0 ? (
    <p>No bookings yet</p>
  ) : (
    <div className="booking-wrapper">
      {bookings.map((booking, index) => {
        return (
          <Booking key={index} booking={booking} setBookings={setBookings} />
        );
      })}
    </div>
  );
};

export default Seating;
