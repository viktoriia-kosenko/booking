export const updateBooking = (bookings, bookingNumber, status) => {
  return bookings.map((booking) =>
    booking.bookingN === bookingNumber ? { ...booking, status } : booking
  );
};

export const validateForm = ({
  firstName,
  lastName,
  date,
  phone,
  email,
  persons,
}) => {
  return !firstName || !lastName || !date || !phone || !email || !persons;
};
