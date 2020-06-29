const initState = {
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
    case "ADD_BOOKING":
      const bookingN = state.bookings.length + 1;
      const newBookings = [...state.bookings, { ...action.booking, bookingN }];
      return { ...state, bookings: newBookings };
    default:
      return state;
  }
};

export default reducer;
