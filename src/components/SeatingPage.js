import React from "react";
import Booking from "./Booking";
import { connect } from "react-redux";
import { changeBookingStatus } from "../redux/actionCreators";

const Seating = ({ bookings, changeBookingStatus }) => {
  return bookings.length === 0 ? (
    <p>No bookings yet</p>
  ) : (
    <div className="booking-wrapper">
      {bookings.map((booking, index) => {
        return (
          <Booking
            key={index}
            booking={booking}
            changeBookingStatus={changeBookingStatus}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookings: state.bookings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeBookingStatus: (data) => {
      dispatch(changeBookingStatus(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Seating);
