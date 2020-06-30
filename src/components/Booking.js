import React, { useState } from "react";

const Booking = ({ booking, changeBookingStatus }) => {
  const [status, setStatus] = useState(null);
  const [displaySave, setDisplaySave] = useState(false);

  const onInputChange = (e) => {
    setDisplaySave(true);
    setStatus(e.target.value);
  };

  const onCancel = () => {
    setDisplaySave(false);
    setStatus(null);
  };

  const onSave = () => {
    changeBookingStatus({ bookingN: booking.bookingN, status });
    setDisplaySave(false);
    setStatus(null);
  };

  const onChangeStatus = () => {
    setStatus(booking.status);
    setDisplaySave(true);
  };

  return (
    <div className="booking-card" style={{ border: "1px solid grey" }}>
      <p>Booking </p> <p>#{booking.bookingN}</p>
      <p>Name:</p>{" "}
      <p>
        {booking.firstName} {booking.lastName}
      </p>
      <p>Phone number: </p> <p>{booking.phone}</p>
      <p>Email: </p> <p>{booking.email}</p>
      <p>Number of Covers:</p> <p> {booking.persons}</p>
      <p>Date: </p> <p>{booking.date}</p>
      {booking.status && !displaySave ? (
        <div className="status">
          <div>
            Status: {booking.status}
            <button className="status-btn" onClick={onChangeStatus}>
              Change{" "}
            </button>
          </div>
        </div>
      ) : (
        <div className="status">
          <div>
            <span>Status</span>

            <input
              onChange={onInputChange}
              type="radio"
              id={booking.bookingN + "notArrived"}
              name={booking.bookingN + "status"}
              value="not Arrived"
              checked={status === "not Arrived"}
            />
            <label htmlFor="notArrived">Not arrived</label>

            <input
              onChange={onInputChange}
              type="radio"
              id={booking.bookingN + "seated"}
              name={booking.bookingN + "status"}
              value="seated"
              checked={status === "seated"}
            />
            <label htmlFor="seated">Seated</label>
          </div>
          {displaySave && (
            <div>
              <button className="status-btn" onClick={onSave}>
                Save
              </button>
              <button className="status-btn" onClick={onCancel}>
                Cancel
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Booking;
