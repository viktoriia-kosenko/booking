import reducer, { initState } from "../redux/reducer";
import { ADD_BOOKING, CHANGE_BOOKING_STATUS } from "../redux/actionTypes";

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initState);
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
    const expectedResult = {
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
    expect(reducer({ bookings: [] }, addBookingAction)).toEqual(expectedResult);
  });

  it("should handle CHANGE_BOOKING_STATUS", () => {
    const state = {
      bookings: [
        { bookingN: 1 },
        { bookingN: 2, status: "seated" },
        { bookingN: 3, status: "not Arrived" },
        { bookingN: 8 },
      ],
    };
    const expectedResult = {
      bookings: [
        { bookingN: 1 },
        { bookingN: 2, status: "seated" },
        { bookingN: 3, status: "not Arrived" },
        { bookingN: 8, status: "seated" },
      ],
    };
    const expectedResult2 = {
      bookings: [
        { bookingN: 1 },
        { bookingN: 2, status: "not Arrived" },
        { bookingN: 3, status: "not Arrived" },
        { bookingN: 8 },
      ],
    };

    expect(
      reducer(state, {
        type: CHANGE_BOOKING_STATUS,
        data: { bookingN: 8, status: "seated" },
      })
    ).toEqual(expectedResult);
    expect(
      reducer(state, {
        type: CHANGE_BOOKING_STATUS,
        data: { bookingN: 2, status: "not Arrived" },
      })
    ).toEqual(expectedResult2);
  });
});
