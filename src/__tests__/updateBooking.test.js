const { updateBooking } = require("../helpers");

const mockData = [
  {
    firstName: "Vicky",
    lastName: "Kosenko",
    date: "2020-07-03",
    phone: "07482625236",
    email: "hello@gmail.com",
    persons: "5",
    bookingN: 1,
    status: "not Arrived",
  },
  {
    firstName: "Veronika",
    lastName: "Lopatiuk",
    date: "2020-06-29",
    phone: "07777688836",
    email: "heythere@gmail.com",
    persons: "3",
    bookingN: 5,
  },
];
const expectedResult1 = [
  {
    firstName: "Vicky",
    lastName: "Kosenko",
    date: "2020-07-03",
    phone: "07482625236",
    email: "hello@gmail.com",
    persons: "5",
    bookingN: 1,
    status: "seated",
  },
  {
    firstName: "Veronika",
    lastName: "Lopatiuk",
    date: "2020-06-29",
    phone: "07777688836",
    email: "heythere@gmail.com",
    persons: "3",
    bookingN: 5,
  },
];
const expectedResult2 = [
  {
    firstName: "Vicky",
    lastName: "Kosenko",
    date: "2020-07-03",
    phone: "07482625236",
    email: "hello@gmail.com",
    persons: "5",
    bookingN: 1,
    status: "not Arrived",
  },
  {
    firstName: "Veronika",
    lastName: "Lopatiuk",
    date: "2020-06-29",
    phone: "07777688836",
    email: "heythere@gmail.com",
    persons: "3",
    bookingN: 5,
    status: "not Arrived",
  },
];

describe("updateArray", () => {
  test("should return array with changed status from not Arrived to seated", () => {
    const res = updateBooking(mockData, 1, "seated");
    expect(res).toEqual(expectedResult1);
  });

  test("should return array with given status when the status was not defined", () => {
    const res = updateBooking(mockData, 5, "not Arrived");
    expect(res).toEqual(expectedResult2);
  });
});
