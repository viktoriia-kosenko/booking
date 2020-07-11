import bookingReducer, { initState } from "../redux/bookingReducer";
import { ADD_BOOKING, CHANGE_BOOKING_STATUS } from "../redux/actionTypes";

describe("bookingReducer", () => {
  it("should return the initial state", () => {
    expect(bookingReducer(undefined, {})).toEqual(initState);
  });

  it("should handle ADD_BOOKING", () => {
    const addBookingAction = {
      type: ADD_BOOKING,
      newBooking: {
        firstName: "Vicky",
        lastName: "Kosenko",
        date: "25/06/2020",
        phone: "1123457890",
        email: "kos@gmail.com",
        persons: 6,
      },
    };

    expect(bookingReducer([], addBookingAction)).toHaveLength(1);
    expect(bookingReducer([], addBookingAction)[0]).toHaveProperty("bookingN");
  });

  it("should handle CHANGE_BOOKING_STATUS", () => {
    const state = [
      { bookingN: 1 },
      { bookingN: 2, status: "seated" },
      { bookingN: 3, status: "not Arrived" },
      { bookingN: 8 },
    ];

    expect(
      bookingReducer(state, {
        type: CHANGE_BOOKING_STATUS,
        data: { bookingN: 8, status: "seated" },
      })[3]
    ).toEqual({ bookingN: 8, status: "seated" });
    expect(
      bookingReducer(state, {
        type: CHANGE_BOOKING_STATUS,
        data: { bookingN: 2, status: "not Arrived" },
      })[1]
    ).toEqual({ bookingN: 2, status: "not Arrived" });
  });
});
