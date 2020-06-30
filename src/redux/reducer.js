import { CHANGE_BOOKING_STATUS, ADD_BOOKING } from "./actionTypes";
import { updateBooking } from "../helpers";

export const initState = {
  bookings: [
    {
      bookingN: 1,
      firstName: "Vicky",
      lastName: "Kosenko",
      date: "25/06/2020",
      phone: "1123457890",
      email: "kos@gmail.com",
      persons: 6,
    },
  ],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      const bookingN = state.bookings.length + 1;
      const updatedBookings = [
        ...state.bookings,
        { ...action.newBooking, bookingN },
      ];
      return { ...state, bookings: updatedBookings };
    case CHANGE_BOOKING_STATUS:
      const updatedStatusBookings = updateBooking(
        state.bookings,
        action.data.bookingN,
        action.data.status
      );
      return { ...state, bookings: updatedStatusBookings };
    default:
      return state;
  }
};

export default reducer;
