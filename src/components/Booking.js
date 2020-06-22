import React, { useState } from "react";

const Booking = ({ booking }) => {
  const [statusB, setStatusB] = useState(null);
  const [displaySave, setDisplaySave] = useState(false);

  const onStatusChange = (e) => {
    setDisplaySave(true);
    setStatusB(e.target.value);
  };
  const onCancel = () => {
    setDisplaySave(false);
    setStatusB(null);
  };

  return (
    <div style={{ border: "1px solid grey" }}>
      <p>Booking #{booking.bookingN}</p>
      <p>
        Client name {booking.firstName} {booking.lastName}
      </p>
      <p>Client phone number {booking.phone}</p>
      <p>Client email {booking.email}</p>
      <p>Number of Covers {booking.persons}</p>
      <p>Date {booking.date}</p>

      {booking.status ? (
        <p>
          Status {booking.status} <button>Change </button>
        </p>
      ) : (
        <>
          <span>Status</span>

          <input
            onChange={onStatusChange}
            type="radio"
            id={booking.bookingN + "notArrived"}
            name={booking.bookingN + "status"}
            value="not Arrived"
            checked={statusB === "not Arrived"}
          />
          <label htmlFor="notArrived">Not arrived</label>

          <input
            onChange={onStatusChange}
            type="radio"
            id={booking.bookingN + "seated"}
            name={booking.bookingN + "status"}
            value="seated"
            checked={statusB === "seated"}
          />
          <label htmlFor="seated">Seated</label>
          {displaySave && (
            <>
              <button>Save</button>
              <button onClick={onCancel}>Cancel</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Booking;
