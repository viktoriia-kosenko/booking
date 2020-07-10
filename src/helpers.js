export const updateBooking = (bookings, bookingNumber, status) => {
  return bookings.map((booking) =>
    booking.bookingN === bookingNumber ? { ...booking, status } : booking
  );
};
