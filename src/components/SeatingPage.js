import React from "react";
import Booking from "./Booking";
import { connect } from "react-redux";

const Seating = ({ bookings }) => {
  return bookings.length === 0 ? (
    <p>No bookings yet</p>
  ) : (
    <div className="booking-wrapper">
      {bookings.map((booking, index) => {
        return <Booking key={index} booking={booking} />;
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    bookings: state.bookings,
  };
};
export default connect(mapStateToProps)(Seating);
