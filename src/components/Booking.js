import React, { useState } from "react";
import { saveStatus } from "../helpers";

const Booking = ({ booking, setBookings }) => {
  const [statusB, setStatusB] = useState(null);
  const [displaySave, setDisplaySave] = useState(false);

  const onInputChange = (e) => {
    setDisplaySave(true);
    setStatusB(e.target.value);
  };

  const onCancel = () => {
    setDisplaySave(false);
    setStatusB(null);
  };

  const onSave = () => {
    saveStatus(booking.bookingN, statusB);
    const existingEntries = JSON.parse(localStorage.getItem("bookings"));
    setBookings(existingEntries);
    setDisplaySave(false);
    setStatusB(null);
  };

  const onChangeStatus = () => {
    setStatusB(booking.status);
    setDisplaySave(true);
  };

  return (
    <div style={{ border: "1px solid grey" }}>
      <p>Booking #{booking.bookingN}</p>
      <p>
        Name: {booking.firstName} {booking.lastName}
      </p>
      <p>Phone number: {booking.phone}</p>
      <p>Email: {booking.email}</p>
      <p>Number of Covers: {booking.persons}</p>
      <p>Date: {booking.date}</p>

      {booking.status && !displaySave ? (
        <p>
          Status: {booking.status}
          <button onClick={onChangeStatus}>Change </button>
        </p>
      ) : (
        <>
          <span>Status</span>

          <input
            onChange={onInputChange}
            type="radio"
            id={booking.bookingN + "notArrived"}
            name={booking.bookingN + "status"}
            value="not Arrived"
            checked={statusB === "not Arrived"}
          />
          <label htmlFor="notArrived">Not arrived</label>

          <input
            onChange={onInputChange}
            type="radio"
            id={booking.bookingN + "seated"}
            name={booking.bookingN + "status"}
            value="seated"
            checked={statusB === "seated"}
          />
          <label htmlFor="seated">Seated</label>
          {displaySave && (
            <>
              <button onClick={onSave}>Save</button>
              <button onClick={onCancel}>Cancel</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Booking;
