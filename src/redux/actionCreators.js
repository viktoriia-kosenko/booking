import { ADD_BOOKING, CHANGE_BOOKING_STATUS } from "./actionTypes";

export const addNewBooking = (newBooking) => {
  return { type: ADD_BOOKING, newBooking };
};

export const changeBookingStatus = (data) => {
  return { type: CHANGE_BOOKING_STATUS, data };
};
