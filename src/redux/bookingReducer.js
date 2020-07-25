import { CHANGE_BOOKING_STATUS, ADD_BOOKING } from "./actionTypes";
import { updateBooking } from "../helpers";

export const initState = [
  {
    bookingN: 1594463945300,
    firstName: "Vicky",
    lastName: "Kosenko",
    date: "25/06/2020",
    phone: "1123457890",
    email: "kos@gmail.com",
    persons: 6,
  },
];

const bookingReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      const bookingN = Date.now();
      return [...state, { ...action.newBooking, bookingN }];
    case CHANGE_BOOKING_STATUS:
      const updatedStatusBookings = updateBooking(
        state,
        action.data.bookingN,
        action.data.status
      );
      return updatedStatusBookings;
    default:
      return state;
  }
};

export default bookingReducer;
