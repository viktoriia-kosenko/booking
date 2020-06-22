export const saveStatus = (bookingNumber, status) => {
  const existingEntries = JSON.parse(localStorage.getItem("bookings"));
  const updatedBookings = existingEntries.map((booking) =>
    booking.bookingN === bookingNumber ? { ...booking, status } : booking
  );
  localStorage.setItem("bookings", JSON.stringify(updatedBookings));
};
