import React, { useEffect, useState } from "react";
import Booking from "./Booking";
import { connect } from "react-redux";
import { changeBookingStatus } from "../redux/actionCreators";

const Seating = ({ bookings = [], changeBookingStatus }) => {
  const [bookingsToDisplay, setBookingToDisplay] = useState(bookings);

  useEffect(() => {
    fetch(
      "https://tsyk6gioa5.execute-api.us-east-2.amazonaws.com/default/get-bookings"
    )
      .then((res) => res.json())
      .then((awsBookings) => {
        console.log(awsBookings);
        const bookingsToAdd = [];
        if (awsBookings.length > 0) {
          awsBookings.forEach((booking) => {
            console.log(
              "bookingsToDisplay.findIndex((el) => el.id === booking.id)",
              bookingsToDisplay.findIndex(
                (el) => el.bookingN === booking.bookingN
              ) < 0
            );

            if (
              bookingsToDisplay.findIndex(
                (el) => el.bookingN === booking.bookingN
              ) < 0
            ) {
              bookingsToAdd.push(booking);
            }
          });
          setBookingToDisplay([...bookingsToAdd, ...bookingsToDisplay]);
        }
      })
      .catch((err) => {});
  }, []);

  return bookingsToDisplay.length === 0 ? (
    <p>No bookings yet</p>
  ) : (
    <div className="booking-wrapper">
      {bookingsToDisplay.map((booking, index) => {
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
