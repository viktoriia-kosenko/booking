export const getLocalStorageData = (key) => {
  return localStorage.getItem(key);
};

export const parseLocalStorageData = (key) => {
  return JSON.parse(getLocalStorageData(key));
};

export const saveToLocalStorage = (key, data) => {
  return localStorage.setItem(key, JSON.stringify(data));
};

export const addToLocalStorage = (key, data) => {
  const existingBookings = parseLocalStorageData("bookings");
  const bookingN = existingBookings.length + 1;
  const updatedData = [...existingBookings, { ...data, bookingN }];
  saveToLocalStorage(key, updatedData);
};

export const saveStatus = (bookingNumber, status) => {
  const existingBookings = parseLocalStorageData("bookings");
  const updatedBookings = updateArray(existingBookings, bookingNumber, status);
  saveToLocalStorage("bookings", updatedBookings);
};

export const updateArray = (bookings, bookingNumber, status) => {
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
